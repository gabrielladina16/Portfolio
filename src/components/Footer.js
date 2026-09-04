import { arrowUpRight } from "./icons.js";

export function Footer() {
  return `
    <footer class="footer" id="contact">
      <div class="shell footer-inner reveal">
        <p class="section-index">03 / Say hello</p>
        <h2>Have something in mind?<br /><em>Let’s make it real.</em></h2>
        <a class="email-link" href="mailto:hello@example.com">hello@example.com ${arrowUpRight}</a>
        <div class="footer-bottom">
          <p>© <span data-year></span> Your Name</p>
          <div><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#top">Back to top ↑</a></div>
        </div>
      </div>
    </footer>`;
}
