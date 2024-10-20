import "./styles.css";
import {
  homeHeader,
  cafeDescription,
  workingHours,
  cafeLocation,
} from "./home";
import { menuHeader, beverage, side, mainDish } from "./menu";
import { contactUs } from "./contact";

const pageContent = document.querySelector("#content");

function createBtns() {
  const btns = [
    { text: "Home", class: "btn" },
    { text: "Menu", class: "btn" },
    { text: "Contact", class: "btn" },
  ];

  const buttonElements = {};
  btns.forEach((btn) => {
    const button = document.createElement("button");
    button.textContent = btn.text;
    button.dataset.page = btn.text;
    button.id = btn.text.toLowerCase();
    button.classList.add(btn.class);
    buttonElements[btn.text.toLowerCase()] = button;
  });

  return buttonElements;
}

function renderNav() {
  const nav = document.querySelector("nav");

  const buttons = createBtns();
  Object.keys(buttons).forEach((key) => {
    nav.appendChild(buttons[key]);
    buttons[key].addEventListener("click", renderPage);
  });
}

function renderPage(event) {
  const target = event.target;
  const page = target.dataset.page;
  pageContent.innerHTML = "";
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  target.classList.add("active");

  if (page.toLowerCase() === "home") {
    pageContent.appendChild(homeHeader());
    pageContent.appendChild(cafeDescription());
    pageContent.appendChild(workingHours());
    pageContent.appendChild(cafeLocation());
  } else if (page.toLowerCase() === "menu") {
    pageContent.appendChild(menuHeader());
    pageContent.appendChild(beverage());
    pageContent.appendChild(side());
    pageContent.appendChild(mainDish());
  } else {
    pageContent.appendChild(contactUs());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  const homeButton = document.querySelector("#home");
  homeButton.classList.add("active");
  pageContent.innerHTML = "";
  pageContent.appendChild(homeHeader());
  pageContent.appendChild(cafeDescription());
  pageContent.appendChild(workingHours());
  pageContent.appendChild(cafeLocation());
});
