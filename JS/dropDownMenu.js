const menuAboutButtons = document.querySelectorAll(".aboutUs_section_title");
const menuJoinButtons = document.querySelectorAll(".joinUs_section_title");
const cta_methodology = document.querySelector("#cta_methodology");
const cta_joinUs = document.querySelector("#cta_joinUs");
const linkToMechanicService = document.querySelector("#linkToMechanicService");
const linkToTrackService = document.querySelector("#linkToTrackService");

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
  const virtualPadding = window.screen.width > 740 ? 175 : 60;
  moveToSection(cta_methodology, 50, virtualPadding);
  callToAction(
    "methodology",
    ".aboutUs_section_title",
    ".aboutUs_section_container"
  );
});
cta_joinUs.addEventListener("click", (e) => {
  e.preventDefault();
  moveToSection(cta_joinUs, 50);
});
linkToMechanicService.addEventListener("click", (e) => {
  e.preventDefault();
  const virtualPadding = window.screen.width > 740 ? 175 : 60;
  moveToSection(linkToMechanicService, 50, virtualPadding);
  callToAction(
    "mechanicService",
    ".joinUs_section_title",
    ".joinUs_section_container"
  );
});
linkToTrackService.addEventListener("click", (e) => {
  e.preventDefault();
  const virtualPadding = window.screen.width > 740 ? 175 : 60;
  moveToSection(linkToTrackService, 50, virtualPadding);
  callToAction(
    "trackService",
    ".joinUs_section_title",
    ".joinUs_section_container"
  );
});

function callToAction(sectionId, btnClass, containerClass) {
  const element = document.querySelector(`#${sectionId}`);
  const button = element.querySelectorAll(btnClass);
  const container = element.querySelectorAll(containerClass);
  const height = container[0].scrollHeight;
  if (!container[0].classList.contains("menuOpened")) {
    container[0].classList.add("menuOpened");
    container[0].style.height = `${height}px`;
    button[0].classList.add("aboutUs_menuOpened");
  }
}
