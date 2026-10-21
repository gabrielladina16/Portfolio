import { ProjectExplorer } from "./ProjectExplorer.js";
import { CaseStudyFooter } from "./CaseStudyFooter.js";
import listImage from "../assets/brewtime-list.png";
import timerImage from "../assets/brewtime-timer.png";
import editImage from "../assets/brewtime-edit.png";
import timerVideo from "../assets/brewtime-timer.mp4";
import customRecipeVideo from "../assets/brewtime-custom-recipe.mp4";
import prototypeImage from "../assets/brewtime-prototype.png";
import recipeBottomImage from "../assets/brewtime-recipe-bottom-reference.png";
import recipeMenuImage from "../assets/brewtime-recipe-menu.png";

export function BrewTimeCaseStudy() {
  return `
    <article class="bocil-case brewtime-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media brewtime-hero-media">
          <div class="brewtime-screens">
            <img src="${listImage}" alt="BrewTime recipe list with V60 selected" />
            <img src="${timerImage}" alt="BrewTime V60 timer guiding the Bloom brewing step" />
            <img src="${editImage}" alt="BrewTime recipe editor with ingredients and brewing steps" />
          </div>
        </div>
        <div class="bocil-overview">
          <h1>BrewTime</h1>
          <p class="bocil-deck">An iOS app for creating coffee recipes and guiding each step of the brewing process.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>BrewTime is an iOS app for creating coffee recipes and guiding each brewing step with built-in timers. In this project, I focused on learning SwiftUI and exploring timer-based interactions.</p>
              <div class="bocil-briefs">
                <div><h2>Goal</h2><p>How might we turn a multi-step coffee recipe into a simple guided timer experience?</p></div>
                <div><h2>Outcome</h2><p>A working iOS prototype that guides users through each step of their coffee recipe.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Product designer<br />&amp; developer</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Timeline</dt><dd>14 days</dd></div>
              <div><dt>Team</dt><dd>2 Developers</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section class="bocil-dark bocil-insights">
        <div class="bocil-shell bocil-insights-grid">
          <div>
            <h2>Concept, design<br /><span>&amp; coded prototype<br />in 2 weeks</span></h2>
            <p>With a small team, we kept the process quick and hands-on, moving between understanding the brewing flow, designing the experience, and building it directly in SwiftUI.</p>
          </div>
          <ol class="bocil-insight-list">
            <li><span>01</span><div><h3>Week 1: Brewing flow,<br />concept &amp; interface design</h3><p>My partner and I explored the coffee brewing process, mapped out the user flow, and designed the interface around recipe creation and step-by-step brewing.</p></div></li>
            <li><span>02</span><div><h3>Week 2: SwiftUI development,<br />timer logic &amp; iteration</h3><p>I focused on learning SwiftUI through hands-on coding, particularly building timer logic, managing brewing steps, and translating our designs into functional interactions.</p></div></li>
          </ol>
        </div>
      </section>
      <section class="brewtime-guided">
        <div class="bocil-shell brewtime-guided-grid">
          <div class="brewtime-guided-copy">
            <h2>Feature #1<br /><span>Guided Timer</span></h2>
            <p>The timer was the main interaction I wanted to explore. Each brewing step has its own duration and automatically moves into the next, so users can focus on brewing instead of managing the timing themselves.</p>
          </div>
          <div class="brewtime-timer-panel">
            <video data-playback-rate="0.75" autoplay muted loop playsinline preload="metadata" poster="${timerImage}" aria-label="BrewTime guided timer demonstration"><source src="${timerVideo}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
      <section class="brewtime-guided brewtime-custom">
        <div class="bocil-shell brewtime-guided-grid">
          <div class="brewtime-guided-copy">
            <h2>Feature #2<br /><span>Custom Recipes</span></h2>
            <p>Not every coffee follows the same recipe, so we wanted users to have room to adjust their own. They can customize the brewing method, measurements, and steps, then save the recipe for the next brew.</p>
          </div>
          <div class="brewtime-timer-panel">
            <video data-playback-rate="0.75" autoplay muted loop playsinline preload="metadata" poster="${timerImage}" aria-label="BrewTime custom recipe creation and editing demonstration"><source src="${customRecipeVideo}" type="video/mp4" /></video>
            <div class="brewtime-recipe-menu"><img src="${recipeMenuImage}" alt="BrewTime menu with Edit Recipe and Add Recipe options" /></div>
          </div>
        </div>
      </section>
      <section class="bocil-feature brewtime-prototype">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>I focused on developing the timer in SwiftUI, exploring how to handle multiple timed steps, manage state changes, and create smooth transitions throughout the brewing process.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${prototypeImage}" alt="BrewTime timer prototype in Xcode showing SwiftUI code and the V60 timer preview" /></div>
        </div>
      </section>
      <section class="bocil-feature brewtime-final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design<br /><span>&amp; coded prototype</span></h2>
          <p>The final prototype brings the recipe setup and guided timer together into a working iOS brewing experience.</p>
        </div>
        <div class="brewtime-final-showcase" aria-label="BrewTime final recipe list, guided timer, and recipe editor">
          <img class="brewtime-final-list" src="${listImage}" alt="BrewTime recipe selection" />
          <img class="brewtime-final-timer" src="${timerImage}" alt="BrewTime guided brewing timer" />
          <div class="brewtime-final-edit"><img src="${recipeBottomImage}" alt="BrewTime recipe steps 3 and 4, Add Step, total brew time, and Delete Recipe" /></div>
        </div>
      </section>
    </article>
    ${ProjectExplorer("brewtime")}
    ${CaseStudyFooter()}`;
}
