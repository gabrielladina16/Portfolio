import "./styles/main.css";
import { Header } from "./components/Header.js";
import { Work } from "./components/Work.js";
import { BocilCaseStudy } from "./components/BocilCaseStudy.js";
import { TypeLabCaseStudy } from "./components/TypeLabCaseStudy.js";
import { Playground } from "./components/Playground.js";
import { About } from "./components/About.js";
import { initInteractions } from "./utils/interactions.js";

const pages = {
  work: () => Work(),
  bocil: () => BocilCaseStudy(),
  typelab: () => TypeLabCaseStudy(),
  playground: () => Playground(),
  about: () => About(),
};

function getRoute() {
  return ({ "#/work/bocil": "bocil", "#/work/typelab": "typelab", "#/playground": "playground", "#/about": "about" })[location.hash] || "work";
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
