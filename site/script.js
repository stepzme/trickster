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
    copyStatus.textContent = "Copied to clipboard";
    copyButton.firstElementChild.textContent = "Command copied";
    window.setTimeout(() => {
      copyStatus.textContent = "";
      copyButton.firstElementChild.textContent = "Copy install command";
    }, 2200);
  } catch {
    copyStatus.textContent = "Copy failed — select the command above";
  }
});
