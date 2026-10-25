import highHopesScene from "../assets/high-hopes-homepage-left.png";
import highHopesHover from "../assets/high-hopes-homepage-right.png";
import { ProjectVisual } from "./ProjectVisual.js";
import typeLabHeaderImage from "../assets/typelab-compose.png";
import bocilFinalVideo from "../assets/bocil-home-screen.mp4";
import sustainopiaImage from "../assets/sustainopia-cover.png";
import brewtimeTimer from "../assets/brewtime-timer.png";
import brewtimeHomeVideo from "../assets/brewtime-home-timer.mp4";
import brewtimeRecipeBottom from "../assets/brewtime-recipe-bottom-reference.png";

export function ProjectCover(project) {
  if (project.id === "higher-hopes") return `<div class="high-hopes-home-cover"><img class="high-hopes-cover-default" src="${highHopesScene}" alt="High Hopes monkey at the foot of a cliff during a forest fire" /><img class="high-hopes-cover-hover" src="${highHopesHover}" alt="" aria-hidden="true" /></div>`;
  if (project.id === "brewtime") return `<div class="brewtime-cover"><div class="brewtime-cover-timer"><video autoplay muted loop playsinline preload="metadata" poster="${brewtimeTimer}" aria-label="BrewTime guided brewing timer demonstration"><source src="${brewtimeHomeVideo}" type="video/mp4" /></video></div><div class="brewtime-cover-recipe"><img src="${brewtimeRecipeBottom}" alt="BrewTime recipe steps and editing controls" /></div></div>`;
  if (project.id === "sustainopia") return `<img class="project-cover-photo" src="${sustainopiaImage}" alt="Sustainopia architectural rendering of landscaped circular public spaces" />`;
  return project.id === "bocil" ? `<video class="project-cover-image" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${bocilFinalVideo}" type="video/mp4" /></video>` : project.id === "typelab" ? `<img class="project-cover-image" src="${typeLabHeaderImage}" alt="TypeLab Compose interface with typography controls and a layout canvas" />` : ProjectVisual();
}

export function ProjectCard(project, index) {
  const projectHref = ["bocil", "typelab", "brewtime", "sustainopia", "higher-hopes"].includes(project.id) ? `#/work/${project.id}` : "#/work";
  return `
    <article class="project-card reveal" data-project="${project.id}" style="--delay:${index * 70}ms">
      <a href="${projectHref}" aria-label="View ${project.title} project">
        <div class="project-visual tone-${project.tone}">
          ${ProjectCover(project)}
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
