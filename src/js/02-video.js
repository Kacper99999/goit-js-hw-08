import Player from '@vimeo/player';


const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("play", (event) => {
    localStorage.setItem("klucz",event.duration);
});