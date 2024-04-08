import Player from '@vimeo/player';


const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("timeupdate",(event) => {
    const currentTime = event.seconds
    localStorage.setItem("videoplayer-current-time", currentTime);
    player.setCurrentTime(currentTime).then(() =>{
    
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':

                break;
    
            default:

                break;
        }
})
});


