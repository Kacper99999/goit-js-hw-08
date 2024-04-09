import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);


const throttled = throttle((event) => {
    const currentTime = event.seconds
    player.setCurrentTime(currentTime).then(() =>{
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
})
},1000)
player.on("timeupdate",throttled);


