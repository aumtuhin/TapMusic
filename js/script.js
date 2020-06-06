window.addEventListener("load", () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual"); 

    //all colors
    const colors = ["#1dd1a1","#ee5253","#00d2d3","#54a0ff","#feca57","#5f27cd"];

    //playing the sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            // ran = Math.round(Math.random() * 5);
            // sounds[ran].play();
            sounds[index].play();

            createBubbles(index);
        });
    });

    //creating clolor bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    }
});