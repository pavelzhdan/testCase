let playVideo = document.querySelector(".education-example__video");
let video = playVideo.querySelector(".video-container__video");

function player(){
    playVideo.addEventListener("click", function () {
        if (playVideo.classList.contains("play")) {
            playVideo.classList.remove("play");
            video.pause();
        } else {
            playVideo.classList.add("play");
            video.play()
        }
    })
}

export default player;