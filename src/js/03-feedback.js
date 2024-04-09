import { throttle  } from "lodash";

const form = document.querySelector("form");

const key = "feedback-form-state";
const storage = JSON.parse(localStorage.getItem(key)) || {};
form.elements.email.value = storage.email;
form.elements.message.value = storage.message;

const save = throttle((event) => {
        const {name, value} = event.target;
        storage[name] = value;
            localStorage.setItem(key, JSON.stringify(storage));
    },500);
form.addEventListener("input", save);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem(key)
    form.reset();
});
