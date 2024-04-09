import { every, throttle  } from "lodash";

const form = document.querySelector("form");

const key = "feedback-form-state";
const zmienna = JSON.parse(localStorage.getItem(key)) || {};
form.elements.email.value = zmienna.value;
form.elements.message.value = zmienna.message;

form.addEventListener("input", (event) => {
    const {name, value} = event.target;
    zmienna[name] = value;
    localStorage.setItem(key, JSON.stringify(zmienna));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem(key)
    form.reset();
});
