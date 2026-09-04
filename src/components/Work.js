import { projects } from "../data/projects.js";
import { ProjectCard } from "./ProjectCard.js";

export function Work() {
  return `
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="section-heading reveal">
        <p class="section-index">01 / Selected work</p>
        <h2 id="work-title">A few things I’ve<br />helped bring to life.</h2>
      </div>
      <div class="project-grid">
        ${projects.map(ProjectCard).join("")}
      </div>
    </section>`;
}
