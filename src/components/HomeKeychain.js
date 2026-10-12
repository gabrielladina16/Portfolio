import { projects } from "../data/projects.js";
import { ProjectVisual } from "./ProjectVisual.js";

export function HomeKeychain() {
  return `
    <section class="keychain-home" data-keychain-home aria-labelledby="keychain-title">
      <div class="keychain-copy reveal">
        <p>Gabriella Dina Widieaster · Multidisciplinary Designer</p>
        <h1 id="keychain-title">SELECTED WORKS</h1>
        <span>Move your cursor · Hover a tag</span>
      </div>

      <div class="keychain-scene" data-keychain-scene>
        <div class="keychain-object" data-keychain-object>
          <div class="keychain-pin" aria-hidden="true"></div>
          <div class="keychain-cards">
            ${projects.map((project, index) => `
              <article class="keychain-card keychain-card-${index + 1}" data-keychain-card data-card-index="${index}" style="--card-index:${index}; --card-angle:${[-9,-4,0,5,10][index]}deg; --card-shift:${[-18,-9,0,9,18][index]}px" tabindex="0">
                <div class="keychain-card-content">
                  <div class="keychain-photo project-visual tone-${project.tone}">${ProjectVisual()}</div>
                  <span class="keychain-number">0${index + 1}</span>
                  <h2>${project.title}</h2>
                  <p>${project.tags.slice(0, 2).join(" · ")}</p>
                </div>
              </article>`).join("")}
          </div>
        </div>
      </div>
    </section>`;
}
