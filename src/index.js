import "./styles.css"
import {homeHeader, cafeDescription, workingHours, cafeLocation} from "./home";
import {menuHeader, beverage, side, mainDish} from "./menu";
import {contactUs} from "./contact";

const pageContent = document.querySelector("#content");

function createBtns() {
    const btns = [
        {text: "Home", class: "btn" },
        {text: "Menu", class: "btn"},
        {text: "Contact", class: "btn"}
    ]

    const buttonElements = {};
    btns.forEach(btn => {
        const button = document.createElement("button");
        button.textContent = btn.text;
        button.dataset.page = btn.text;
        button.id = btn.text.toLowerCase();
        button.classList.add(btn.class);

        buttonElements[btn.text.toLowerCase()] = button;
    });

    return buttonElements;
}





