import Player from '@vimeo/player';
import { every, throttle } from 'lodash';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);





const throttled = throttle((event) => {
    const currentTime = event.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000);

player.on("timeupdate", throttled);

const storedTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(storedTime).then()
    .catch(error => {
        switch (error.name) {
            case 'RangeError':

                break;
            default:

                break;
        }
    });


