import { throttle  } from "lodash";

const form = document.querySelector("form");

const storage = JSON.parse(localStorage.getItem("feedback-form-state"));
form.elements.email.value = storage.email;
form.elements.message.value = storage.message;

const save = throttle((event) => {
        const {name, value} = event.target;
        storage[name] = value;
            localStorage.setItem("feedback-form-state", JSON.stringify(storage));
    },500);

form.addEventListener("input", save);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state")
    form.reset();
});
