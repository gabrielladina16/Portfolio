let headerScrollController;

export function initInteractions(currentRoute = "home") {
  headerScrollController?.abort();
  headerScrollController = new AbortController();
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

  const activeRoute = ["bocil", "typelab"].includes(currentRoute) ? "work" : currentRoute;
  setActiveLink(navLinks.find((link) => link.dataset.route === activeRoute));

  navLinks.forEach((link) => link.addEventListener("click", () => {
    setActiveLink(link);
    header.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".menu-glyph").textContent = "+";
  }));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const loopGallery = document.querySelector("[data-loop-gallery]");
  const loopPanels = [...document.querySelectorAll("[data-loop-panel]")];
  let galleryPhase = 0;
  let galleryTarget = 0;
  let galleryFrame;
  const paintLoopGallery = () => {
    galleryPhase += (galleryTarget - galleryPhase) * .12;
    loopPanels.forEach((panel, index) => {
      const slot = ((index - galleryPhase) % loopPanels.length + loopPanels.length) % loopPanels.length;
      panel.style.setProperty("--slot", slot.toFixed(3));
      panel.style.zIndex = String(Math.round((loopPanels.length - slot) * 10));
    });
    if (Math.abs(galleryTarget - galleryPhase) > .001) galleryFrame = requestAnimationFrame(paintLoopGallery);
  };

  const moveGallery = (amount) => {
    galleryTarget += amount;
    cancelAnimationFrame(galleryFrame);
    galleryFrame = requestAnimationFrame(paintLoopGallery);
  };

  if (loopGallery) {
    const galleryTitle = loopGallery.querySelector("[data-gallery-title]");
    const galleryChips = loopGallery.querySelector("[data-gallery-chips]");
    const showProjectTitle = (panel) => {
      if (galleryTitle) galleryTitle.textContent = panel.dataset.projectTitle;
      if (galleryChips) {
        galleryChips.innerHTML = panel.dataset.projectTags
          .split("|")
          .map((tag) => `<span>${tag}</span>`)
          .join("");
        galleryChips.classList.add("is-visible");
      }
    };
    const showDefaultTitle = () => {
      if (galleryTitle) galleryTitle.textContent = galleryTitle.dataset.defaultTitle;
      if (galleryChips) {
        galleryChips.classList.remove("is-visible");
        galleryChips.innerHTML = "";
      }
    };

    let hoveredPanel = null;
    const activatePanel = (panel) => {
      if (hoveredPanel === panel) return;
      hoveredPanel?.classList.remove("is-hovered");
      hoveredPanel = panel;
      hoveredPanel?.classList.add("is-hovered");
      if (hoveredPanel) showProjectTitle(hoveredPanel);
      else showDefaultTitle();
    };

    loopGallery.addEventListener("pointermove", (event) => {
      const candidates = loopPanels
        .map((panel) => ({ panel, rect: panel.getBoundingClientRect() }))
        .filter(({ rect }) => (
          event.clientX >= rect.left && event.clientX <= rect.right &&
          event.clientY >= rect.top && event.clientY <= rect.bottom
        ))
        .sort((a, b) => (event.clientY - a.rect.top) - (event.clientY - b.rect.top));

      activatePanel(candidates[0]?.panel ?? null);
    });

    loopGallery.addEventListener("pointerleave", () => activatePanel(null));

    loopPanels.forEach((panel) => {
      panel.addEventListener("focus", () => activatePanel(panel));
      panel.addEventListener("blur", () => activatePanel(null));
    });

    loopGallery.addEventListener("wheel", (event) => {
      event.preventDefault();
      activatePanel(null);
      moveGallery(event.deltaY * .0032);
    }, { passive: false });

    let touchY = 0;
    loopGallery.addEventListener("touchstart", (event) => {
      activatePanel(null);
      touchY = event.touches[0].clientY;
    }, { passive: true });
    loopGallery.addEventListener("touchmove", (event) => {
      const nextY = event.touches[0].clientY;
      moveGallery((touchY - nextY) * .012);
      touchY = nextY;
    }, { passive: true });

    loopGallery.addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowRight"].includes(event.key)) moveGallery(.8);
      if (["ArrowUp", "ArrowLeft"].includes(event.key)) moveGallery(-.8);
    });
    paintLoopGallery();
  }

  const keychainScene = document.querySelector("[data-keychain-scene]");
  const keychainObject = document.querySelector("[data-keychain-object]");
  if (keychainScene && keychainObject) {
    const keychainCards = [...keychainObject.querySelectorAll("[data-keychain-card]")];
    let activeCard = null;
    const activateKeychainCard = (card) => {
      if (activeCard === card) return;
      activeCard = card;
      const activeIndex = card ? Number(card.dataset.cardIndex) : null;

      keychainCards.forEach((item, index) => {
        item.classList.toggle("is-active", item === card);
        if (!card) {
          ["--live-angle", "--live-shift", "--live-y", "--live-z"].forEach((property) => item.style.removeProperty(property));
          item.style.zIndex = "";
          return;
        }
        const distance = index - activeIndex;
        item.style.setProperty("--live-angle", `${distance * 11}deg`);
        item.style.setProperty("--live-shift", `${distance * 9}px`);
        item.style.setProperty("--live-y", item === card ? "-10px" : `${Math.abs(distance) * 3}px`);
        item.style.setProperty("--live-z", item === card ? "85px" : `${-Math.abs(distance) * 12}px`);
        item.style.zIndex = item === card ? "45" : String(20 - Math.abs(distance));
      });
    };

    keychainScene.addEventListener("pointermove", (event) => {
      const rect = keychainScene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      keychainObject.style.setProperty("--key-rx", `${y * -7}deg`);
      keychainObject.style.setProperty("--key-ry", `${x * 9}deg`);
      const card = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-keychain-card]");
      if (card && keychainObject.contains(card)) activateKeychainCard(card);
    });
    keychainScene.addEventListener("pointerleave", () => {
      keychainObject.style.setProperty("--key-rx", "0deg");
      keychainObject.style.setProperty("--key-ry", "0deg");
      activateKeychainCard(null);
    });
    keychainCards.forEach((card) => {
      card.addEventListener("focus", () => activateKeychainCard(card));
      card.addEventListener("blur", () => activateKeychainCard(null));
    });
  }

  const paperDeck = document.querySelector("[data-paper-deck]");
  const paperSheets = [...document.querySelectorAll("[data-paper-sheet]")];
  let paperFrame;
  const paintPaperDeck = () => {
    const viewportHeight = window.innerHeight;
    const rect = paperDeck?.getBoundingClientRect();
    const scrollDistance = Math.max(1, (paperDeck?.offsetHeight ?? viewportHeight) - viewportHeight);
    const deckProgress = Math.max(0, Math.min(1, -(rect?.top ?? 0) / scrollDistance));
    const travel = Math.max(viewportHeight * .95, 760);

    paperSheets.forEach((sheet, index) => {
      const localProgress = index === 0
        ? 1
        : Math.max(0, Math.min(1, deckProgress * (paperSheets.length - 1) - (index - 1)));
      const eased = 1 - Math.pow(1 - localProgress, 3);
      const direction = index % 2 ? 1 : -1;
      sheet.style.setProperty("--paper-y", `${(1 - eased) * travel}px`);
      sheet.style.setProperty("--paper-turn", `${(1 - eased) * direction * 1.1}deg`);
      sheet.style.zIndex = String(index + 2);
    });
    paperFrame = undefined;
  };
  const requestPaperPaint = () => {
    if (!paperFrame) paperFrame = requestAnimationFrame(paintPaperDeck);
  };
  if (paperDeck && paperSheets.length) {
    paintPaperDeck();
    window.addEventListener("scroll", requestPaperPaint, { passive: true });
    window.addEventListener("resize", requestPaperPaint, { passive: true });
  }

  // Grain stays anchored to the viewport through CSS fixed backgrounds.
  window.__pencilTrailAbort?.abort();
  const pencilTrail = document.querySelector("[data-pencil-trail]");
  const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (pencilTrail && precisePointer && !reducedMotion) {
    const context = pencilTrail.getContext("2d");
    const points = [];
    const controller = new AbortController();
    window.__pencilTrailAbort = controller;
    let trailFrame;

    const sizeTrail = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      pencilTrail.width = Math.round(window.innerWidth * scale);
      pencilTrail.height = Math.round(window.innerHeight * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const paintPencilTrail = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.lineCap = "round";
      context.lineJoin = "round";

      for (let index = 1; index < points.length; index += 1) {
        const previous = points[index - 1];
        const point = points[index];
        const strength = Math.min(previous.life, point.life);
        context.strokeStyle = `rgba(255,255,255,${strength * .7})`;
        context.lineWidth = .72 + strength * .38;
        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(point.x, point.y);
        context.stroke();

        context.strokeStyle = `rgba(255,255,255,${strength * .22})`;
        context.lineWidth = .45;
        context.beginPath();
        context.moveTo(previous.x + previous.offset, previous.y - previous.offset);
        context.lineTo(point.x + point.offset, point.y - point.offset);
        context.stroke();
      }

      points.forEach((point) => { point.life -= .035; });
      while (points[0]?.life <= 0) points.shift();
      if (points.length) trailFrame = requestAnimationFrame(paintPencilTrail);
      else trailFrame = undefined;
    };

    document.addEventListener("pointermove", (event) => {
      const previous = points.at(-1);
      if (previous && Math.hypot(event.clientX - previous.x, event.clientY - previous.y) < 2.5) return;
      points.push({
        x: event.clientX,
        y: event.clientY,
        life: 1,
        offset: (Math.random() - .5) * 1.5,
      });
      if (points.length > 42) points.shift();
      if (!trailFrame) trailFrame = requestAnimationFrame(paintPencilTrail);
    }, { passive: true, signal: controller.signal });
    window.addEventListener("resize", sizeTrail, { passive: true, signal: controller.signal });
    sizeTrail();
  }

  const brand = header.querySelector(".brand");
  const projectHero = document.querySelector(".bocil-case .bocil-hero");
  const composeMedia = document.querySelector(".typelab-compose-media");
  const texture = document.querySelector(".texture");
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
    const showBack = Boolean(projectHero && projectHero.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom);
    brand.classList.toggle("is-project-back", showBack);
    brand.setAttribute("aria-label", showBack ? "Back to Work" : "Go to work");
    if (composeMedia && texture) {
      const rect = composeMedia.getBoundingClientRect();
      const styleCard = composeMedia.querySelector(".typelab-compose-style");
      const top = Math.min(rect.top, styleCard?.getBoundingClientRect().top ?? rect.top);
      const clampToViewport = (value) => Math.max(0, Math.min(window.innerHeight, value));
      texture.style.setProperty("--compose-texture-top", `${clampToViewport(top)}px`);
      texture.style.setProperty("--compose-texture-bottom", `${clampToViewport(rect.bottom)}px`);
    }
  };
  window.addEventListener("scroll", updateHeader, { passive: true, signal: headerScrollController.signal });
  window.addEventListener("resize", updateHeader, { passive: true, signal: headerScrollController.signal });
  updateHeader();
}
