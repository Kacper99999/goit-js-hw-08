// import Player from '@vimeo/player';


// const iframe = document.querySelector("iframe");
// const player = new Player(iframe);

// player.on("timeupdate",(event) => {
//     const currentTime = event.seconds
//     localStorage.setItem("videoplayer-current-time", currentTime);
//     player.setCurrentTime(currentTime).then(() =>{
    
//     }).catch(function(error) {
//         switch (error.name) {
//             case 'RangeError':

//                 break;
    
//             default:

//                 break;
//         }
// })
// });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const updateTimeInLocalStorage = throttle(() => {
    player.getCurrentTime().then((time) => {
        localStorage.setItem("videoplayer-current-time", time);
    }).catch((error) => {
        console.error('Wystąpił błąd:', error);
    });
}, 1000);

player.on("timeupdate", updateTimeInLocalStorage);

window.onload = () => {
    const savedTime = localStorage.getItem("videoplayer-current-time");
    if (savedTime !== null) {
        const seekTime = parseFloat(savedTime);
        player.setCurrentTime(seekTime).then(() => {
            player.play();
        }).catch((error) => {
            console.error('Wystąpił błąd:', error);
        });
    }
};