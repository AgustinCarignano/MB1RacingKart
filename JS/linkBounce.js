const links = document.querySelectorAll(".header_links_anchor");

for (let i = 0; i < links.length; i++) {
  if (
    links[i].dataset.moveto === "contactUs" &&
    document.querySelector("#contactUs").scrollHeight - screen.height < 3
  )
    continue;
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
    moveToSection(links[i], 50);
  });
}

function moveToSection(link, offset, virtualPadding = 0) {
  const { moveto } = link.dataset;
  const section = document.querySelector(`#${moveto}`);
  const cord = section.getBoundingClientRect();
  if (Math.abs(cord.top) < 1) return;
  const target = window.scrollY + cord.top - virtualPadding;
  let bounce = target > window.scrollY ? offset : -offset;
  const moveTo = target + bounce;
  const timeToTarget = 128 * Math.log(Math.abs(cord.top)) - 274.7;
  window.scrollTo(0, moveTo);
  setTimeout(() => {
    window.scrollTo(0, window.scrollY - bounce);
  }, timeToTarget);
}

//module.export(moveToSection);
