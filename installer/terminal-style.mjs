const RESET = "\u001B[0m";

const ANSI = {
  accent: "\u001B[1;38;2;25;185;158m",
  error: "\u001B[1;38;2;226;69;28m",
  warning: "\u001B[1;38;2;217;154;43m",
  muted: "\u001B[2m",
  strong: "\u001B[1m",
};

export function supportsColor(stream, env = process.env) {
  if (Object.hasOwn(env, "NO_COLOR") || env.FORCE_COLOR === "0") return false;
  if (env.FORCE_COLOR && env.FORCE_COLOR !== "0") return true;
  if (env.CI || env.TERM === "dumb") return false;
  return Boolean(stream?.isTTY);
}

export function createTerminalStyle(stream, env = process.env) {
  const enabled = supportsColor(stream, env);
  const apply = (style, value) => enabled
    ? `${ANSI[style]}${value}${RESET}`
    : String(value);

  return {
    accent: (value) => apply("accent", value),
    error: (value) => apply("error", value),
    warning: (value) => apply("warning", value),
    muted: (value) => apply("muted", value),
    strong: (value) => apply("strong", value),
  };
}
