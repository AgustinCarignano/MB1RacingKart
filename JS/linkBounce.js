const links = document.querySelectorAll(".header_links_anchor");

for (let i = 0; i < links.length; i++) {
  if (links[i].dataset.moveto === "contactUs" && window.screen.height >= 915)
    continue;
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
    moveToSection(links[i], 50);
  });
}

function moveToSection(link, offset, extraBounce) {
  const { moveto } = link.dataset;
  const section = document.querySelector(`#${moveto}`);
  const cord = section.getBoundingClientRect();
  const target = window.scrollY + cord.top;
  let bounce = target > window.scrollY ? offset : -offset;
  const moveTo = window.scrollY + cord.top + bounce;
  const timeToTarget = 220 * Math.log10(Math.abs(cord.top));
  window.scrollTo(0, moveTo);
  setTimeout(() => {
    if (extraBounce) bounce = extraBounce;
    window.scrollTo(0, window.scrollY - bounce);
  }, timeToTarget);
}

//module.export(moveToSection);
