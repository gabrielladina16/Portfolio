import { projects } from "../data/projects.js";
import { ProjectCover } from "./ProjectCard.js";

export function ProjectExplorer(currentId) {
  const index = projects.findIndex((project) => project.id === currentId);
  const neighbours = index < 0 ? [] : [
    { project: projects[index - 1], direction: "previous" },
    { project: projects[index + 1], direction: "next" },
  ].filter(({ project }) => project);
  return `<section class="project-explorer bocil-shell" aria-label="Explore more projects">
    <h2>Keep exploring.<br /><span>See what else I’ve been working on.</span></h2>
    <div class="project-explorer-grid">
      ${neighbours.map(({ project, direction }) => `<a class="project-card" data-project="${project.id}" href="${["bocil", "typelab", "brewtime", "sustainopia", "higher-hopes", "grab"].includes(project.id) ? `#/work/${project.id}` : "#/work"}" aria-label="Explore ${project.title}">
        <div class="project-visual tone-${project.tone}">${ProjectCover(project)}</div>
        <p>${direction},<br /><strong>${project.title}</strong></p>
      </a>`).join("")}
    </div>
  </section>`;
}
