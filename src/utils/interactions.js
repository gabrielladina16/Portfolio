export function initInteractions() {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".main-nav");

  menuButton?.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector(".menu-glyph").textContent = open ? "−" : "+";
  });

  const navLinks = [...(nav?.querySelectorAll("a") ?? [])];

  const setActiveLink = (activeLink) => {
    navLinks.forEach((link) => {
      const active = link === activeLink;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  setActiveLink(navLinks[0]);

  navLinks.forEach((link) => link.addEventListener("click", () => {
    setActiveLink(link);
    header.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".menu-glyph").textContent = "+";
  }));

  const sectionLinks = navLinks.filter((link) => link.hash && document.querySelector(link.hash));
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const matchingLink = sectionLinks.find((link) => link.hash === `#${visible.target.id}`);
    if (matchingLink) setActiveLink(matchingLink);
  }, { rootMargin: "-25% 0px -55%", threshold: [0, .15, .4] });

  sectionLinks.forEach((link) => sectionObserver.observe(document.querySelector(link.hash)));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  }, { passive: true });
}
