import Player from '@vimeo/player';


const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("pause", (event) => {
    event.preventDefault();
    localStorage.setItem("klucz",event.duration);
});