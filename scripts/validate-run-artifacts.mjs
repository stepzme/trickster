import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const phases = [
  "orchestration",
  "product-definition",
  "reference-research",
  "design-synthesis",
  "app-icon",
  "core",
  "full",
  "product-assets",
  "visual-integration",
  "hardening",
  "acceptance",
  "acceptance-fix",
  "store-storyboard",
  "store-frame",
  "finalization",
  "delivery",
];

export const roles = [
  "master",
  "product_researcher",
  "design_planner",
  "implementation_owner",
  "visual_producer",
  "acceptance_reviewer",
];

const runStatuses = ["ACTIVE", "WAITING_FOR_USER", "BLOCKED", "COMPLETE"];
const handoffStatuses = ["COMPLETE", "BLOCKED", "UNVERIFIED"];

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isStringOrNull(value) {
  return value === null || typeof value === "string";
}

function requireNonEmptyString(errors, value, path) {
  if (typeof value !== "string" || value.trim() === "") {
    errors.push(`${path} must be a non-empty string`);
  }
}

function requireStringArray(errors, value, path) {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    errors.push(`${path} must be an array of strings`);
  }
}

function requireEnum(errors, value, allowed, path) {
  if (!allowed.includes(value)) {
    errors.push(`${path} must be one of: ${allowed.join(", ")}`);
  }
}

export function validateRunState(value) {
  const errors = [];
  if (!isObject(value)) return { valid: false, errors: ["run state must be an object"] };

  if (value.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  requireNonEmptyString(errors, value.runId, "runId");
  requireNonEmptyString(errors, value.toolkitVersion, "toolkitVersion");
  requireEnum(errors, value.status, runStatuses, "status");
  requireEnum(errors, value.currentPhase, phases, "currentPhase");
  if (!isStringOrNull(value.appRevision)) errors.push("appRevision must be a string or null");
  if (!isStringOrNull(value.designRevision)) errors.push("designRevision must be a string or null");
  if (!isObject(value.approvals)) errors.push("approvals must be an object");
  if (!isObject(value.artifacts)) errors.push("artifacts must be an object");

  if (!Array.isArray(value.sessions)) {
    errors.push("sessions must be an array");
  } else {
    const threadIds = new Set();
    value.sessions.forEach((session, index) => {
      const path = `sessions[${index}]`;
      if (!isObject(session)) {
        errors.push(`${path} must be an object`);
        return;
      }
      requireNonEmptyString(errors, session.threadId, `${path}.threadId`);
      requireEnum(errors, session.role, roles, `${path}.role`);
      requireEnum(errors, session.phase, phases, `${path}.phase`);
      if (typeof session.threadId === "string") {
        if (threadIds.has(session.threadId)) errors.push(`${path}.threadId must be unique`);
        threadIds.add(session.threadId);
      }
      if (!isStringOrNull(session.parentThreadId)) {
        errors.push(`${path}.parentThreadId must be a string or null`);
      }
    });
  }

  if (value.activeAssignment !== null) {
    if (!isObject(value.activeAssignment)) {
      errors.push("activeAssignment must be an object or null");
    } else {
      requireNonEmptyString(errors, value.activeAssignment.threadId, "activeAssignment.threadId");
      requireEnum(errors, value.activeAssignment.role, roles, "activeAssignment.role");
      requireEnum(errors, value.activeAssignment.phase, phases, "activeAssignment.phase");
      const matchingSession = Array.isArray(value.sessions)
        ? value.sessions.find((session) => session.threadId === value.activeAssignment.threadId)
        : null;
      if (!matchingSession) {
        errors.push("activeAssignment.threadId must reference a recorded session");
      } else if (
        matchingSession.role !== value.activeAssignment.role ||
        matchingSession.phase !== value.activeAssignment.phase
      ) {
        errors.push("activeAssignment role and phase must match the recorded session");
      }
    }
  }

  return { valid: errors.length === 0, errors };
}

export function validatePhaseHandoff(value) {
  const errors = [];
  if (!isObject(value)) return { valid: false, errors: ["phase handoff must be an object"] };

  if (value.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  requireNonEmptyString(errors, value.runId, "runId");
  requireEnum(errors, value.phase, phases, "phase");
  requireEnum(errors, value.role, roles.filter((role) => role !== "master"), "role");
  requireEnum(errors, value.status, handoffStatuses, "status");
  if (!isStringOrNull(value.appRevision)) errors.push("appRevision must be a string or null");
  if (!isStringOrNull(value.designRevision)) errors.push("designRevision must be a string or null");
  requireEnum(errors, value.nextPhase, phases, "nextPhase");

  for (const field of [
    "inputPaths",
    "allowedWrites",
    "changedFiles",
    "completedCriteria",
    "openDefects",
    "unverified",
    "evidencePaths",
  ]) {
    requireStringArray(errors, value[field], field);
  }

  if (!Array.isArray(value.checks)) {
    errors.push("checks must be an array");
  } else {
    value.checks.forEach((check, index) => {
      if (!isObject(check)) {
        errors.push(`checks[${index}] must be an object`);
        return;
      }
      requireNonEmptyString(errors, check.command, `checks[${index}].command`);
      if (!Number.isInteger(check.exitCode)) {
        errors.push(`checks[${index}].exitCode must be an integer`);
      }
      requireNonEmptyString(errors, check.summary, `checks[${index}].summary`);
      if (!isStringOrNull(check.logPath)) {
        errors.push(`checks[${index}].logPath must be a string or null`);
      }
    });
  }

  return { valid: errors.length === 0, errors };
}

async function runCli(argv) {
  if (argv.length !== 2 || !["run-state", "phase-handoff"].includes(argv[0])) {
    console.error("Usage: node scripts/validate-run-artifacts.mjs <run-state|phase-handoff> <file.json>");
    return 2;
  }

  const [kind, path] = argv;
  let value;
  try {
    value = JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    console.error(`Cannot read valid JSON from ${path}: ${error.message}`);
    return 1;
  }

  const result = kind === "run-state" ? validateRunState(value) : validatePhaseHandoff(value);
  if (!result.valid) {
    for (const error of result.errors) console.error(error);
    return 1;
  }

  console.log(`${kind} is valid: ${path}`);
  return 0;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  process.exitCode = await runCli(process.argv.slice(2));
}
