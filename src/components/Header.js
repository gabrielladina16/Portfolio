import { arrowUpRight } from "./icons.js";

export function Header() {
  return `
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="Back to top">
        <span class="brand-mark">YN</span>
        <span class="brand-name">Your Name</span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-nav">
        <span>Menu</span><span class="menu-glyph">+</span>
      </button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="mailto:hello@example.com">Let's talk ${arrowUpRight}</a>
      </nav>
    </header>`;
}
