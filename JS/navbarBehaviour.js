const navButton = document.querySelector("#burgerBtn");
const navbarLinks = document.querySelector("#mobileNavbar");
const brand = document.querySelector("#brandLink");
const kart = document.querySelector("#kart");
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", (e) => {
  //if (screen.width / screen.height < 16 / 9) return;
  if (window.scrollY > screen.height * 0.5) {
    navbar.classList.add("smallHeader");
  } else {
    navbar.classList.remove("smallHeader");
  }
});

navButton.addEventListener("click", () => {
  togleNavbar();
});

navbarLinks.childNodes.forEach((node) => {
  if (node.nodeName === "LI") {
    node.addEventListener("click", () => {
      togleNavbar();
    });
  }
});

brand.addEventListener("click", () => {
  if (navButton.classList.contains("header_button-opened")) {
    togleNavbar();
  }
});

function togleNavbar() {
  navbarLinks.classList.remove("navbarIntial");
  navbarLinks.classList.toggle("header_links_visible");
  if (navButton.classList.contains("header_button-closed")) {
    navButton.classList.remove("header_button-closed");
    navButton.classList.add("header_button-opened");
  } else if (navButton.classList.contains("header_button-opened")) {
    navButton.classList.add("header_button-closed");
    navButton.classList.remove("header_button-opened");
  } else {
    navButton.classList.add("header_button-opened");
  }
}

setTimeout(() => {
  kart.classList.add("header_moveKart");
}, 1000);
