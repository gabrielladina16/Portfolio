import { arrowUpRight } from "./icons.js";

export function About() {
  return `
    <section class="about shell" id="about" aria-labelledby="about-title">
      <p class="section-index reveal">02 / A little about me</p>
      <div class="about-grid">
        <h2 class="reveal" id="about-title">Curious by nature.<br /><em>Intentional</em> by design.</h2>
        <div class="about-copy reveal">
          <p>I’m a multidisciplinary designer who likes untangling difficult problems and turning them into simple, human experiences.</p>
          <p>My work sits between strategy, visual systems, interaction, and code. I care about the tiny details—but only when they support the bigger idea.</p>
          <a class="text-link" href="mailto:hello@example.com">More about me ${arrowUpRight}</a>
        </div>
        <div class="about-photo tone-sand reveal" role="img" aria-label="Portrait image placeholder">
          <span>Portrait<br />placeholder</span>
        </div>
      </div>
    </section>`;
}
