export const NAVBAR_OFFSET = 100;

export const NAV_SECTIONS = [
  "home",
  "about",
  "experience",
  "education",
  "skills",
  "work",
  "contact",
];

/** Notify navbar (and anything else) which section was navigated to */
export const notifySectionChange = (sectionId) => {
  window.dispatchEvent(
    new CustomEvent("portfolio-navigate", { detail: { sectionId } })
  );
};

export const scrollToSection = (sectionId) => {
  notifySectionChange(sectionId);

  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.offsetTop - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

/** Pick active section from current scroll position */
export const getActiveSectionFromScroll = () => {
  if (window.scrollY < NAVBAR_OFFSET) {
    return "home";
  }

  let current = "home";
  for (const id of NAV_SECTIONS) {
    if (id === "home") continue;
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - NAVBAR_OFFSET) {
      current = id;
    }
  }
  return current;
};
