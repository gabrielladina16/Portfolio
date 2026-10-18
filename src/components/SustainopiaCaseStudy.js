import { CaseStudyFooter } from "./CaseStudyFooter.js";
import communal from "../assets/sustainopia-communal.png";
import picnic from "../assets/sustainopia-picnic.png";
import pet from "../assets/sustainopia-pet.png";
import birdeye from "../assets/sustainopia-birdeye.png";
import title from "../assets/sustainopia-title.png";
import heroImage from "../assets/sustainopia-hero.png";
import headerTopView from "../assets/sustainopia-header-top-view.png";
import sitePlanImage from "../assets/sustainopia-site-plan.png";
import challenge1 from "../assets/sustainopia-challenge-1.png";
import challenge2 from "../assets/sustainopia-challenge-2.png";
import challenge3 from "../assets/sustainopia-challenge-3.png";
import challenge4 from "../assets/sustainopia-challenge-4.png";
import concept1 from "../assets/sustainopia-concept-1.png";
import concept2 from "../assets/sustainopia-concept-2.png";
import concept3 from "../assets/sustainopia-concept-3.png";
import strategy1 from "../assets/sustainopia-strategy-1.png";
import strategy2 from "../assets/sustainopia-strategy-2.png";
import strategy3 from "../assets/sustainopia-strategy-3.png";
import strategy4 from "../assets/sustainopia-strategy-4.png";
import strategy5 from "../assets/sustainopia-strategy-5.png";
import strategy6 from "../assets/sustainopia-strategy-6.png";
import finalSitePlan from "../assets/sustainopia-final-site-plan.png";
import drawing1 from "../assets/sustainopia-drawing-1.png";
import drawing2 from "../assets/sustainopia-drawing-2.png";
import drawing3 from "../assets/sustainopia-drawing-3.png";
import drawing4 from "../assets/sustainopia-drawing-4.png";

export function SustainopiaCaseStudy() {
  const drawings = [
    [drawing1, "01 — Rainwater Harvesting + Pond Area Details"],
    [drawing2, "02 — Vegetation and Animals Mapping"],
    [drawing3, "03 — Section 1: Cross Section"],
    [drawing4, "04 — Section 2: Longitudinal Section"],
  ];
  return `
    <article class="bocil-case sustainopia-case">
      <section class="bocil-hero bocil-shell">
        <figure class="bocil-hero-media sustainopia-hero-media">
          <img src="${headerTopView}" alt="Top view of Sustainopia’s circular public spaces, gardens, and green paths" fetchpriority="high" />
        </figure>
        <div class="bocil-overview">
          <h1>Sustainopia</h1>
          <p class="bocil-deck">An urban eco-park that brings nature, community,<br class="sustainopia-deck-break" /> and wellbeing together through sustainable design</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>Sustainopia is an urban ecopark proposal awarded 1st place in the Hijau Jakartaku Student Design Competition 2023. Designed for Pondok Indah, Jakarta, it explores how sustainable landscape design can create healthier environments and stronger community connections.</p>
              <div class="bocil-briefs">
                <div><h2>Issue</h2><p>How might we transform an urban space into a sustainable park that supports both environmental and community needs?</p></div>
                <div><h2>Outcome</h2><p>1st Place, Hijau Jakartaku Student Design Competition 2023</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Architectural Designer</dd></div>
              <div><dt>Year</dt><dd>2023</dd></div>
              <div><dt>Timeline</dt><dd>14 days</dd></div>
              <div><dt>Team</dt><dd>2 Designers</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="bocil-dark sustainopia-analysis" aria-labelledby="sustainopia-analysis-title">
        <div class="bocil-shell sustainopia-analysis-grid">
          <div class="sustainopia-analysis-intro">
            <h2 id="sustainopia-analysis-title">User and Site<br /><span>Analysis</span></h2>
            <p>Located in a densely populated area of Pondok Indah, South Jakarta, the 2,294 m² site was envisioned as an urban green space for people of all ages, pets, and urban wildlife. The design aims to encourage community interaction, outdoor activities, and biodiversity within the city.</p>
          </div>
          <figure class="sustainopia-site-plan">
            <img src="${sitePlanImage}" alt="Exploded site analysis showing road access, edge vegetation, and commercial and residential buildings around the site" loading="lazy" />
          </figure>
          <ol class="sustainopia-analysis-points">
            <li><span>01</span><div><h3>Accessibility</h3><p>Connected to residential areas and main roads, with multiple access points.</p></div></li>
            <li><span>02</span><div><h3>Vegetation</h3><p>Limited greenery is mainly found along the site edges.</p></div></li>
            <li><span>03</span><div><h3>Landmarks</h3><p>Located within a residential area near commercial facilities.</p></div></li>
          </ol>
        </div>
      </section>
      <section class="sustainopia-challenges" aria-labelledby="sustainopia-challenges-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-challenges-intro">
          <h2 id="sustainopia-challenges-title">Urban<br /><span>Challenges</span></h2>
          <p>The project addresses key environmental and social issues in Pondok Indah, shaping our approach to a more sustainable and inclusive urban space.</p>
        </div>
        <div class="sustainopia-challenges-band">
          <ol class="bocil-shell sustainopia-challenges-grid">
            ${[
              [challenge1, "Limited green<br />space", "Buildings and roads with very little greenery"],
              [challenge2, "Unprocessed water<br />causes mosquito", "Standing water providing a breeding ground for mosquitoes"],
              [challenge3, "Lack of<br />Social Spaces", "People isolated in separate outdoor spaces"],
              [challenge4, "Limited<br />Pet-Friendly Areas", "A pet owner facing restrictions on pets in public spaces"],
            ].map(([image, title, alt], index) => `
              <li>
                <div class="sustainopia-challenge-art"><img src="${image}" alt="${alt}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3></div>
              </li>`).join("")}
          </ol>
        </div>
      </section>
      <section class="sustainopia-concept" aria-labelledby="sustainopia-concept-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-concept-title">Design Concept:<br /><span>Nature, Community,<br />and Wellbeing</span></h2>
          <p>I wanted to create a space where nature, community, and wellbeing coexist, exploring how sustainable design could address environmental challenges while encouraging human interaction.</p>
        </div>
        <div class="sustainopia-challenges-band sustainopia-concept-band">
          <ol class="bocil-shell sustainopia-concept-grid">
            ${[
              [concept1, "Sustainable<br />nature", "A green habitat with trees, a pond, birds, and urban wildlife"],
              [concept2, "Sense of<br />Community", "People and pets sharing an inclusive communal space"],
              [concept3, "Physical<br />well being", "People exercising in three connected circular spaces"],
            ].map(([image, title, alt], index) => `
              <li>
                <div class="sustainopia-concept-art"><img src="${image}" alt="${alt}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3></div>
              </li>`).join("")}
          </ol>
        </div>
      </section>
      <section class="sustainopia-strategies" aria-labelledby="sustainopia-strategies-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-strategies-title">Design<br /><span>Strategies</span></h2>
          <p>The concept was translated into practical design strategies, integrating sustainable landscape solutions with spaces for community interaction and outdoor activities.</p>
        </div>
        <div class="sustainopia-challenges-band sustainopia-strategies-band">
          <ul class="bocil-shell sustainopia-strategies-grid">
            ${[
              [strategy1, "Natural Mosquito-<br />Repellent Plants", "Planting around outdoor spaces to naturally repel mosquitoes"],
              [strategy2, "Communal<br />Area", "Shaded communal seating and tables for people to gather"],
              [strategy3, "Jogging<br />Track", "A tree-lined jogging route connecting outdoor activities"],
              [strategy4, "Rainwater<br />Harvesting", "Sculptural rainwater collectors connected to underground storage"],
              [strategy5, "Pet Friendly<br />Area", "An outdoor area with play equipment for pets and their owners"],
              [strategy6, "Fitness<br />Ground", "Outdoor fitness equipment and exercise areas among trees"],
            ].map(([image, title, alt]) => `
              <li>
                <div class="sustainopia-strategy-art"><img src="${image}" alt="${alt}" loading="lazy" /></div>
                <h3>${title}</h3>
              </li>`).join("")}
          </ul>
        </div>
      </section>
      <section class="bocil-dark sustainopia-final-plan" aria-labelledby="sustainopia-plan-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-plan-intro">
          <h2 id="sustainopia-plan-title">Site Plan</h2>
          <p>The final proposal brings together sustainable landscape strategies and inclusive public spaces, creating an urban park designed to support both ecological health and community wellbeing.</p>
        </div>
        <div class="sustainopia-plan-band">
          <div class="sustainopia-plan-layout">
            <figure class="sustainopia-plan-image"><img src="${finalSitePlan}" alt="Sustainopia final site plan with numbered locations for entrances, communal spaces, rainwater harvesting, pet areas, paths, and fitness facilities" loading="lazy" /></figure>
            <aside class="sustainopia-plan-legend" aria-labelledby="sustainopia-legend-title">
              <h3 id="sustainopia-legend-title">SITE LEGEND</h3>
              <ol>
                <li>Main Entrance</li>
                <li>Communal Area</li>
                <li>Rainwater-harvesting Area</li>
                <li>Pet Park Area</li>
                <li>Pet-friendly Seating Area</li>
                <li>Fitness Ground</li>
                <li>Pedestrian Walkway</li>
                <li>Jogging Track</li>
                <li>Bicycle Parking &amp; Bench</li>
                <li>Picnic Ground</li>
                <li>Service Area</li>
                <li>Service Entrance/Exit</li>
              </ol>
            </aside>
          </div>
        </div>
      </section>
      <section class="sustainopia-drawings" aria-labelledby="sustainopia-drawings-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-drawings-title">Technical and<br /><span>Architectural<br />Drawings</span></h2>
          <p>The drawings detail the park’s spatial layout and rainwater harvesting system, showing how technical solutions support both sustainability and everyday use.</p>
        </div>
        <div class="sustainopia-drawings-window" tabindex="0" role="region" aria-label="Architectural drawings, scrolling automatically. Hover an image or focus this gallery to pause.">
          <div class="sustainopia-drawings-track">
            ${[false, true].map(duplicate => `
              <div class="sustainopia-drawings-group"${duplicate ? ' aria-hidden="true"' : ''}>
                ${drawings.map(([src, alt]) => `<button class="sustainopia-zoom-trigger" type="button" data-zoom-src="${src}" data-zoom-label="${alt}" aria-label="Enlarge ${alt}"${duplicate ? ' tabindex="-1"' : ''}><img src="${src}" alt="${duplicate ? '' : alt}" loading="eager" draggable="false" /></button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
      </section>
      <section class="bocil-dark sustainopia-final" aria-labelledby="sustainopia-final-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-final-title">Final<br /><span>Design</span></h2>
          <p>The final renderings showcase how Sustainopia brings nature, community, and wellbeing together through its landscape design and shared spaces.</p>
        </div>
        <div class="sustainopia-render-window" tabindex="0" role="region" aria-label="Final renderings. Hover to pause; click an image to enlarge.">
          <div class="sustainopia-render-track">
            ${[false, true].map(duplicate => `<div class="sustainopia-render-group"${duplicate ? ' aria-hidden="true"' : ''}>
              ${[[communal, "Communal area"], [picnic, "Picnic &amp; fitness area"], [pet, "Pet park area"], [birdeye, "Bird-eye view perspective"]].map(([src, label]) => `<figure>
                <button type="button" class="sustainopia-zoom-trigger" data-zoom-src="${src}" data-zoom-label="${label}" aria-label="Enlarge ${label}"${duplicate ? ' tabindex="-1"' : ''}><img src="${src}" alt="${label}" draggable="false" /></button>
                <figcaption>${label}</figcaption>
              </figure>`).join("")}
            </div>`).join("")}
          </div>
        </div>
        <figure class="sustainopia-ending">
          <img class="sustainopia-ending-photo" src="${heroImage}" alt="Sustainopia park aerial rendering" loading="lazy" />
          <img class="sustainopia-ending-title" src="${title}" alt="Sustainopia" loading="lazy" />
        </figure>
      </section>
      ${CaseStudyFooter()}
      <dialog class="sustainopia-lightbox" aria-label="Enlarged project image">
        <button type="button" class="sustainopia-lightbox-close" aria-label="Close enlarged image"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>
        <div class="sustainopia-lightbox-scroll"><img alt="" /></div>
        <p class="sustainopia-lightbox-caption"></p>
      </dialog>
    </article>`;
}
