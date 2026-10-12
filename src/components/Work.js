import { projects } from "../data/projects.js";
import { ProjectCard } from "./ProjectCard.js";

export function Work() {
  return `
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="work-intro reveal">
        <h1 id="work-title">I'm a multidisciplinary designer exploring the intersection of design, technology, and art.</h1>
        <p class="work-lead">With roots in architecture, my work spans product design,<br />interaction design, visual design, and illustration.</p>
      </div>
      <div class="project-grid">
        ${projects.map(ProjectCard).join("")}
      </div>
    </section>`;
}
