import { arrowDown } from "./icons.js";

export function Hero() {
  return `
    <section class="hero shell" id="top" aria-labelledby="hero-title">
      <div class="hero-main reveal">
        <p class="eyebrow"><span class="status-dot"></span> Available for select projects</p>
        <h1 id="hero-title">I turn messy ideas<br />into <em>clear</em> experiences.</h1>
      </div>
      <div class="hero-aside reveal">
        <p>Independent designer and developer crafting thoughtful digital products, identities, and stories.</p>
        <a class="text-link" href="#/work">Explore selected work ${arrowDown}</a>
      </div>
    </section>`;
}
