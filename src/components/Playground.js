export function Playground() {
  const experiments = [
    ["A–01", "Type in motion", "Kinetic typography"],
    ["A–02", "Soft systems", "Generative forms"],
    ["A–03", "Daily fragments", "Visual archive"],
  ];

  return `
    <section class="playground shell" id="playground" aria-labelledby="playground-title">
      <div class="section-heading reveal">
        <p class="section-index">02 / Playground</p>
        <h2 id="playground-title">Small ideas with<br />room to <em>play.</em></h2>
      </div>
      <div class="experiment-grid">
        ${experiments.map(([number, title, type], index) => `
          <article class="experiment experiment-${index + 1} reveal" style="--delay:${index * 70}ms">
            <span>${number}</span>
            <div class="experiment-art" aria-label="Artwork placeholder"><i></i><i></i><i></i></div>
            <div><h3>${title}</h3><p>${type}</p></div>
          </article>`).join("")}
      </div>
    </section>`;
}
