import { CaseStudyFooter } from "./CaseStudyFooter.js";
import portraitImage from "../assets/about-gabriella.jpeg";

export function About() {
  return `
    <article class="about-page" id="about" aria-labelledby="about-title">
      <section class="about-introduction about-shell">
        <div class="about-intro-grid reveal">
          <div class="about-portrait"><img src="${portraitImage}" alt="Gabriella outdoors in Bali" width="1078" height="1438" fetchpriority="high" /></div>
          <div class="about-intro-copy">
            <h1 id="about-title">Hi there!<br /><span class="about-name-line">I’m <span class="about-name" tabindex="0" aria-label="Gabriella, or Gabby">Gabriella</span><span class="about-nickname" aria-hidden="true">or Gabby</span></span></h1>
            <p>I’m a multidisciplinary designer focused on digital products and how people experience them. I enjoy breaking down problems, shaping flows, and fine-tuning interactions to feel intuitive. Visual exploration is part of that process, bringing function and personality together in the things I make.</p>
          </div>
        </div>
        <div class="about-interests-grid reveal">
          <div>
            <h2>What I’m up to</h2>
            <p>Currently building and exploring design and code at the <strong>Apple Developer Academy</strong> in Bali. Previously, I supported merchant onboarding and designed communication materials at Grab Indonesia. My journey began in architecture at Universitas Indonesia, where I learned to consider how people experience the things we design.</p>
          </div>
          <div>
            <h2>Away from the screen</h2>
            <p>You’ll usually find me drawing, painting, running, surfing, or trying any sport that keeps me moving. I also love travelling, photography, café hopping, and spending the occasional evening lost in a game.</p>
          </div>
        </div>
      </section>

      <section class="about-segment" aria-labelledby="about-work-title">
        <div class="about-shell">
          <h2 class="about-section-title reveal" id="about-work-title">Work<br /><span>Experiences</span></h2>
          <div class="about-timeline">
            <div class="about-entry reveal">
              <p class="about-date">2026 - Now</p>
              <div><h3>Apple Developer Academy Bali</h3><p class="about-role">Product Designer</p><p>Designed and developed apps through hands-on projects, collaborating across research, UI/UX design, and coding to address real-world problems.</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2024 - 2026</p>
              <div><h3>Grab Indonesia</h3><p class="about-role">Onboarding Excellence Coordinator</p><p>Managed merchant onboarding and growth initiatives through data verification and performance analysis, while designing communication materials for merchant campaigns.</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2024</p>
              <div><h3>PT Adhi Persada Gedung</h3><p class="about-role">Quantity Surveyor Intern</p><p>Assisted with quantity calculations and cost estimation for construction work.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-segment" aria-labelledby="about-achievements-title">
        <div class="about-shell">
          <h2 class="about-section-title reveal" id="about-achievements-title">Achievements</h2>
          <div class="about-timeline">
            <div class="about-entry reveal">
              <p class="about-date">2023</p>
              <div><h3>1st Winner of Hijau Jakartaku Student Design Competition: Urban Eco Park</h3><p>Designed an urban eco park that brings sustainability into public space.</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2022</p>
              <div><h3>Top 10 Screen 6.0 Architecture Sketch Competition: Heritage</h3><p>Explored architectural heritage through hand-drawn sketches.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-segment about-education" aria-labelledby="about-education-title">
        <div class="about-shell">
          <h2 class="about-section-title reveal" id="about-education-title">Education</h2>
          <div class="about-timeline">
            <div class="about-entry reveal">
              <p class="about-date">2026</p>
              <div><h3>Apple Developer Academy, Bali</h3><p>App development, UI/UX design, Swift</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2020–2024</p>
              <div><h3>Universitas Indonesia</h3><p class="about-role">Bachelor of Architecture</p></div>
            </div>
          </div>
        </div>
      </section>
    </article>
    ${CaseStudyFooter()}`;
}
