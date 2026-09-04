import { arrowUpRight } from "./icons.js";

export function ProjectCard(project, index) {
  return `
    <article class="project-card reveal" data-project="${project.id}" style="--delay:${index * 70}ms">
      <a href="#contact" aria-label="View ${project.title} project">
        <div class="project-visual tone-${project.tone}">
          <div class="placeholder-ui" aria-hidden="true">
            <span class="placeholder-tag">Image placeholder</span>
            <div class="placeholder-window">
              <div class="window-bar"><i></i><i></i><i></i></div>
              <div class="window-body">
                <div class="ui-copy"><b></b><b></b><b></b></div>
                <div class="ui-image"></div>
              </div>
            </div>
          </div>
          <span class="project-label">${project.label}</span>
          <span class="card-arrow">${arrowUpRight}</span>
        </div>
        <div class="project-info">
          <div>
            <span class="project-number">${project.number}</span>
            <h3>${project.title}</h3>
          </div>
          <p>${project.summary}</p>
          <div class="project-meta"><span>${project.role}</span><span>${project.year}</span></div>
        </div>
      </a>
    </article>`;
}
