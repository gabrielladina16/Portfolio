import { projects } from "../data/projects.js";
import { ProjectVisual } from "./ProjectVisual.js";

const panels = Array.from({ length: 15 }, (_, index) => ({
  ...projects[index % projects.length],
}));

export function HomeGallery() {
  return `
    <section class="home-gallery" data-loop-gallery aria-labelledby="gallery-title">
      <div class="gallery-sticky" tabindex="0">
        <div class="gallery-intro shell reveal">
          <h2 id="gallery-title" data-gallery-title data-default-title="A collection of things I’ve made and cared about.">A collection of things I’ve<br />made and cared about.</h2>
          <div class="gallery-project-chips" data-gallery-chips aria-live="polite"></div>
        </div>
        <div class="diagonal-stage" aria-label="Interactive looping image gallery">
          <div class="diagonal-track">
            ${panels.map((project, index) => `
              <article class="diagonal-panel panel-${project.tone}" data-loop-panel data-project-title="${project.title}" data-project-tags="${project.tags.join("|")}" style="--slot:${index}" tabindex="0">
                <div class="panel-surface tone-${project.tone}">
                  ${ProjectVisual()}
                  <div class="panel-shine"></div>
                </div>
              </article>`).join("")}
          </div>
        </div>
        <p class="gallery-hint">Scroll or swipe to move · Hover to lift</p>
      </div>
    </section>`;
}
