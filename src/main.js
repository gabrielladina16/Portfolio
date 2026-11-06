import "./styles/main.css";
import { Header } from "./components/Header.js";
import { Work } from "./components/Work.js";
import { HighHopesCaseStudy } from "./components/HighHopesCaseStudy.js";
import { BocilCaseStudy } from "./components/BocilCaseStudy.js";
import { GrabCaseStudy } from "./components/GrabCaseStudy.js";
import { BrewTimeCaseStudy } from "./components/BrewTimeCaseStudy.js";
import { TypeLabCaseStudy } from "./components/TypeLabCaseStudy.js";
import { SustainopiaCaseStudy } from "./components/SustainopiaCaseStudy.js";
import { About } from "./components/About.js";
import { initInteractions } from "./utils/interactions.js";
import { prepareMedia, initMediaLoading } from "./utils/mediaLoading.js";

const pages = {
  work: () => Work(),
  bocil: () => BocilCaseStudy(),
  grab: () => GrabCaseStudy(),
  "higher-hopes": () => HighHopesCaseStudy(),
  typelab: () => TypeLabCaseStudy(),
  brewtime: () => BrewTimeCaseStudy(),
  sustainopia: () => SustainopiaCaseStudy(),
  about: () => About(),
};

function getRoute() {
  return ({ "#/work/higher-hopes": "higher-hopes", "#/work/high-hopes": "higher-hopes", "#/work/bocil": "bocil", "#/work/grab": "grab", "#/work/typelab": "typelab", "#/work/brewtime": "brewtime", "#/work/sustainopia": "sustainopia", "#/about": "about" })[location.hash] || "work";
}

function renderPage() {
  const route = getRoute();
  const showPencilTrail = route === "work" || route === "about";
  document.querySelector("#app").replaceChildren(prepareMedia(`
    ${Header()}
    <main class="page page-${route}">${pages[route]()}</main>
    ${showPencilTrail ? `<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>` : ""}
    <div class="texture" aria-hidden="true"></div>`));
  document.body.dataset.route = route;
  window.scrollTo(0, 0);
  initMediaLoading(document.querySelector("main"));
  initInteractions(route);
}

window.addEventListener("hashchange", renderPage);
renderPage();
