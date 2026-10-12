import { archivedProjects } from "./projects.js";
import { ArchivedProjectVisual } from "./ArchivedProjectVisual.js";

function ArchivedProjectCard(project, index) {
  return `<article class="project-card reveal" data-project="${project.id}" style="--delay:${index * 70}ms"><a href="#/work"><div class="project-visual tone-${project.tone}">${ArchivedProjectVisual()}</div><div class="project-info"><div class="project-title-row"><h3>${project.title}</h3><div class="project-chips">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></div><p>${project.summary}</p></div></a></article>`;
}

export function ArchivedWork() {
  return `<section class="work shell" id="work"><div class="work-intro reveal"><h1>I’m a multidisciplinary designer who<br />creates thoughtful digital experiences.</h1><p class="work-lead">With roots in architecture and experience across<br />product, UI/UX, visual design, illustration, and code.</p></div><div class="project-grid">${archivedProjects.map(ArchivedProjectCard).join("")}</div></section>`;
}
