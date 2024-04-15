import { throttle  } from "lodash";

const form = document.querySelector(".feedback-form");

function storage(){
    const email = form.elements.email.value || "";
    const message = form.elements.message.value || "";
    return {email, message};
};
const save = throttle(() => {
        const currentStorage = storage();
        localStorage.setItem("feedback-form-state", JSON.stringify(currentStorage));
    },500);

form.addEventListener("input", save);

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if(savedData){
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(savedData);
    localStorage.removeItem("feedback-form-state");
    form.reset();
}); 