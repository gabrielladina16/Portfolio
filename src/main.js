import "./styles/main.css";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Work } from "./components/Work.js";
import { About } from "./components/About.js";
import { Footer } from "./components/Footer.js";
import { initInteractions } from "./utils/interactions.js";

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main>${Hero()}${Work()}${About()}</main>
  ${Footer()}
  <div class="texture" aria-hidden="true"></div>
`;

initInteractions();
