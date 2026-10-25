import "./styles/main.css";
import { Header } from "./components/Header.js";
import { Work } from "./components/Work.js";
import { HighHopesCaseStudy } from "./components/HighHopesCaseStudy.js";
import { BocilCaseStudy } from "./components/BocilCaseStudy.js";
import { BrewTimeCaseStudy } from "./components/BrewTimeCaseStudy.js";
import { TypeLabCaseStudy } from "./components/TypeLabCaseStudy.js";
import { SustainopiaCaseStudy } from "./components/SustainopiaCaseStudy.js";
import { Playground } from "./components/Playground.js";
import { About } from "./components/About.js";
import { initInteractions } from "./utils/interactions.js";

const pages = {
  work: () => Work(),
  bocil: () => BocilCaseStudy(),
  "higher-hopes": () => HighHopesCaseStudy(),
  typelab: () => TypeLabCaseStudy(),
  brewtime: () => BrewTimeCaseStudy(),
  sustainopia: () => SustainopiaCaseStudy(),
  playground: () => Playground(),
  about: () => About(),
};

function getRoute() {
  return ({ "#/work/higher-hopes": "higher-hopes", "#/work/high-hopes": "higher-hopes", "#/work/bocil": "bocil", "#/work/typelab": "typelab", "#/work/brewtime": "brewtime", "#/work/sustainopia": "sustainopia", "#/playground": "playground", "#/about": "about" })[location.hash] || "work";
}

function renderPage() {
  const route = getRoute();
  const showPencilTrail = route === "work" || route === "about";
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main class="page page-${route}">${pages[route]()}</main>
    ${showPencilTrail ? `<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>` : ""}
    <div class="texture" aria-hidden="true"></div>`;
  document.body.dataset.route = route;
  window.scrollTo(0, 0);
  initInteractions(route);
}

window.addEventListener("hashchange", renderPage);
renderPage();
