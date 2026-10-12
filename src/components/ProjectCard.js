import { ProjectVisual } from "./ProjectVisual.js";
import typeLabHeaderImage from "../assets/typelab-compose.png";
import bocilFinalVideo from "../assets/bocil-home-screen.mp4";

export function ProjectCard(project, index) {
  const projectHref = ["bocil", "typelab"].includes(project.id) ? `#/work/${project.id}` : "#/work";
  return `
    <article class="project-card reveal" data-project="${project.id}" style="--delay:${index * 70}ms">
      <a href="${projectHref}" aria-label="View ${project.title} project">
        <div class="project-visual tone-${project.tone}">
          ${project.id === "bocil" ? `<video class="project-cover-image" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${bocilFinalVideo}" type="video/mp4" /></video>` : project.id === "typelab" ? `<img class="project-cover-image" src="${typeLabHeaderImage}" alt="TypeLab Compose interface with typography controls and a layout canvas" />` : ProjectVisual()}
        </div>
        <div class="project-info">
          <div class="project-title-row">
            <h3>${project.title}</h3>
            <div class="project-chips">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          </div>
          <p>${project.summary}</p>
        </div>
      </a>
    </article>`;
}
