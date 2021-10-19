var button = document.querySelector('.button');
var left = document.querySelector('.flex-left');
var right = document.querySelector('.flex-right');
var line1 = document.querySelector('#line1');
var line2 = document.querySelector('#line2');
var line3 = document.querySelector('#line3');
var vid = document.querySelector('#video');

var toggleOn = false;

button.addEventListener("click", myFunc);



function myFunc(){
    if(toggleOn === false) {
        left.classList.add('toggleOn');
        right.classList.add('toggleOn');
        line1.classList.add('toggleOn');
        line2.classList.add('toggleOn');
        line3.classList.add('toggleOn');
        button.classList.add('toggleOn');
        toggleOn = true;
        console.log(toggleOn);
    } else {
        left.classList.remove('toggleOn');
        right.classList.remove('toggleOn');
        line1.classList.remove('toggleOn');
        line2.classList.remove('toggleOn');
        line3.classList.remove('toggleOn');
        button.classList.remove('toggleOn');
        toggleOn = false;
        console.log(toggleOn);
    }

};

window.addEventListener("load", (event)=>{
    vid.play();
    console.log("video should play")
    console.log(vid);
});