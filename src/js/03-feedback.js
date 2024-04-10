import { throttle  } from "lodash";

const form = document.querySelector("form");

const storage = JSON.parse(localStorage.getItem("feedback-form-state"));
 

const save = throttle((event) => {
        const email = event.target.email.value;
        const message = event.target.message.value;
        storage.email = email;
        storage.message = message;
        console.log(storage);
            localStorage.setItem("feedback-form-state", JSON.stringify(storage));
    },500);

form.addEventListener("input", save);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state")
    form.reset();
});