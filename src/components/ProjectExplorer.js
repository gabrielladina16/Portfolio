import { projects } from "../data/projects.js";
import { ProjectCover } from "./ProjectCard.js";

export function ProjectExplorer(currentId) {
  const index = projects.findIndex((project) => project.id === currentId);
  const neighbours = [projects[(index - 1 + projects.length) % projects.length], projects[(index + 1) % projects.length]];
  return `<section class="project-explorer bocil-shell" aria-label="Explore more projects">
    <h2>Keep exploring.<br /><span>See what else I’ve been working on.</span></h2>
    <div class="project-explorer-grid">
      ${neighbours.map((project, i) => `<a class="project-card" data-project="${project.id}" href="${["bocil", "typelab"].includes(project.id) ? `#/work/${project.id}` : "#/work"}" aria-label="Explore ${project.title}">
        <div class="project-visual tone-${project.tone}">${ProjectCover(project)}</div>
        <p>${i === 0 ? "previous," : "next,"}<br /><strong>${project.title}</strong></p>
      </a>`).join("")}
    </div>
  </section>`;
}
