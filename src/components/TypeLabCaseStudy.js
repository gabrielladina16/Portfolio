import { CaseStudyFooter } from "./CaseStudyFooter.js";
import prototypeCodingImage from "../assets/typelab-prototype-coding.png";
import composeImage from "../assets/typelab-compose.png";

function MediaPlaceholders(ratio, label, focus = false) {
  return `<div class="bocil-feature-media bocil-media-row typelab-media-row${focus ? " bocil-focus-media" : ""}" data-ratio="${ratio}">
    <figure role="img" aria-label="${label}, first image placeholder"></figure>
    <figure role="img" aria-label="${label}, second image placeholder"></figure>
  </div>`;
}

export function TypeLabCaseStudy() {
  return `
    <article class="bocil-case typelab-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media typelab-hero-media"><div class="bocil-image"><img src="${composeImage}" alt="TypeLab Compose interface with typography controls and a layout canvas" /></div></div>
        <div class="bocil-overview">
          <h1>TypeLab</h1>
          <p class="bocil-deck">A typography playground for building type systems and exploring them in real layouts.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>TypeLab started as a personal exploration of typography across iOS and graphic design. I used the project to deepen my understanding of type systems while challenging myself to translate those decisions into a working SwiftUI experience.</p>
              <div class="bocil-briefs">
                <div><h2>Goal</h2><p>How might I turn typography principles into an interactive system that can be explored, adjusted, and applied in real time?</p></div>
                <div><h2>Outcome</h2><p>I designed and coded an iPad app for building type systems and experimenting with them through composition.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Product designer &amp; developer</dd></div>
              <div><dt>Timeline</dt><dd>10 days</dd></div>
              <div><dt>Team</dt><dd>Solo Project</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="bocil-dark bocil-insights">
        <div class="bocil-shell bocil-insights-grid">
          <div>
            <h2>Typography<br /><span class="typelab-exploration">exploration</span></h2>
            <p>I explored how hierarchy, scale, spacing, and type roles work together to create a consistent typography system and how these principles translate into digital interfaces.</p>
          </div>
          <ol class="bocil-insight-list">
            <li><span>01</span><div><h3>Hierarchy and Roles</h3><p>It started with understanding how size, weight, spacing, and contrast help organise information and guide the reader’s attention.</p></div></li>
            <li><span>02</span><div><h3>Type Systems and Scale</h3><p>From there, I looked at how type scales and predefined roles bring consistency to different layouts without needing too many styles.</p></div></li>
            <li><span>03</span><div><h3>Typography on iOS</h3><p>Finally, I explored Apple’s text styles and Dynamic Type to see how these principles translate into real interfaces while supporting accessibility.</p></div></li>
          </ol>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Defining<br /><span>the system</span></h2>
          <p>I translated these principles into a simple system of type roles, scales, and controls, giving users enough structure to stay consistent while still leaving room to experiment.</p>
        </div>
        ${MediaPlaceholders("50-50", "Defining the system", true)}
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #1<br /><span>System Setup</span></h2>
          <p>Choose up to two typefaces, assign their roles, and shape the hierarchy through scale, weight, spacing, and other type controls. Changes stay connected across the system, making it easier to experiment without losing consistency.</p>
        </div>
        ${MediaPlaceholders("30-70", "System Setup")}
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Compose</span></h2>
          <p>Bring the type system into a flexible canvas where text roles can be arranged, resized, and composed freely. Grids and alignment guides add structure while leaving room to experiment.</p>
        </div>
        ${MediaPlaceholders("50-50", "Compose", true)}
      </section>

      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>Coding TypeLab was a big part of the exploration for me. I built the app in SwiftUI, which pushed me to translate the typography rules I had been learning into actual behaviours and controls that worked in a real product.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${prototypeCodingImage}" alt="TypeLab SwiftUI prototype in Xcode with an iPad preview of the typography system" /></div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design and<br /><span>coded prototype</span></h2>
          <p>The final prototype brings System Setup and Compose together, letting users build a type system and immediately experiment with it on a flexible canvas.</p>
        </div>
        <div class="bocil-final-showcase typelab-final-showcase">
          <div class="bocil-image typelab-final-placeholder" role="img" aria-label="TypeLab final design and coded prototype image placeholder"></div>
        </div>
      </section>
    </article>
    ${CaseStudyFooter()}`;
}
