const dictionaries = window.TRICKSTER_TRANSLATIONS;
const supportedLanguages = ["en", "ru", "es", "zh-CN"];
const languageAliases = { zh: "zh-CN", "zh-cn": "zh-CN" };
const url = new URL(window.location.href);
const requestedLanguage = url.searchParams.get("lang") || "en";
const normalizedLanguage = languageAliases[requestedLanguage.toLowerCase()] || requestedLanguage;
const language = supportedLanguages.includes(normalizedLanguage) ? normalizedLanguage : "en";
const strings = dictionaries[language];
const fallbackStrings = dictionaries.en;

function translate(key) {
  return strings[key] ?? fallbackStrings[key] ?? key;
}

document.documentElement.lang = language;
document.title = translate("metaTitle");

document.querySelector('meta[name="description"]')?.setAttribute("content", translate("metaDescription"));
document.querySelector('meta[property="og:title"]')?.setAttribute("content", translate("metaTitle"));
document.querySelector('meta[property="og:description"]')?.setAttribute("content", translate("ogDescription"));

const canonicalUrl = new URL("https://stepzme.github.io/trickster/");
if (language !== "en") canonicalUrl.searchParams.set("lang", language);
document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl.href);
document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl.href);

document.querySelectorAll("[data-i18n]").forEach((element) => {
  element.textContent = translate(element.dataset.i18n);
});

document.querySelectorAll("[data-i18n-html]").forEach((element) => {
  element.innerHTML = translate(element.dataset.i18nHtml);
});

document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
  element.setAttribute("aria-label", translate(element.dataset.i18nAria));
});

document.querySelectorAll("[data-language]").forEach((link) => {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("lang", link.dataset.language);
  link.href = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;

  if (link.dataset.language === language) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

const documentationLink = document.querySelector(".text-link");
if (documentationLink) {
  documentationLink.href = `https://github.com/stepzme/trickster/blob/main/${translate("readmePath")}`;
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  reveals.forEach((element) => observer.observe(element));
}

const copyButton = document.querySelector("[data-copy]");
const copyStatus = document.querySelector(".copy-status");
const copyLabel = document.querySelector("[data-copy-label]");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

copyButton?.addEventListener("click", async () => {
  try {
    await copyText(copyButton.dataset.copy);
    copyStatus.textContent = translate("copiedStatus");
    copyLabel.textContent = translate("commandCopied");
    window.setTimeout(() => {
      copyStatus.textContent = "";
      copyLabel.textContent = translate("copyCommand");
    }, 2200);
  } catch {
    copyStatus.textContent = translate("copyFailed");
  }
});
