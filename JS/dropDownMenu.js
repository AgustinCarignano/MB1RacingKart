const menuAboutButtons = document.querySelectorAll(".aboutUs_section_title");
const menuJoinButtons = document.querySelectorAll(".joinUs_section_title");
const cta_methodology = document.querySelector("#cta_methodology");
const cta_joinUs = document.querySelector("#cta_joinUs");
//import "./linkBounce.js";
//const moveTofunction = require(moveToSection);

const menuButtons = [...menuAboutButtons, ...menuJoinButtons];

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", () => {
    const container = menuButtons[i].nextElementSibling;
    const height = container.scrollHeight;
    if (container.classList.contains("menuOpened")) {
      container.removeAttribute("style");
      container.classList.remove("menuOpened");
      menuButtons[i].classList.remove("aboutUs_menuOpened");
    } else {
      container.style.height = `${height}px`;
      container.classList.add("menuOpened");
      menuButtons[i].classList.add("aboutUs_menuOpened");
    }
  });
}

cta_methodology.addEventListener("click", (e) => {
  e.preventDefault();
  const bounce = window.screen.width > 740 ? 150 : 50;
  moveToSection(cta_methodology, 50, bounce);
  callToAction("methodology");
});
cta_joinUs.addEventListener("click", (e) => {
  e.preventDefault();
  moveToSection(cta_joinUs, 50);
});

function callToAction(sectionId) {
  const methodology = document.querySelector(`#${sectionId}`);
  const button = methodology.querySelectorAll(".aboutUs_section_title");
  const container = methodology.querySelectorAll(".aboutUs_section_container");
  const height = container[0].scrollHeight;
  if (!container[0].classList.contains("menuOpened")) {
    container[0].classList.add("menuOpened");
    container[0].style.height = `${height}px`;
    button[0].classList.add("aboutUs_menuOpened");
  }
}
