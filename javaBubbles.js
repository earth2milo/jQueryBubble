// var up = document.getElementById('bubble_UP'); // html links
//var down = document.getElementById('bubble_DOWN');
//var id1="bubble_UP";
//var id2="bubble_DOWN";
//up.innerHTML = "Click on the button to check if " + "both elements are equal.<br>" + "id1 = " + id1 + "<br>id2 = " + id2;
//down.innerHTML = "";

 //console.log(id1);
 //console.log(id2);
 
 // wip score check
var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "./assets/song.mp3"
document.body.addEventListener("mousemove", function () {
    audio.play()
})


const wrapper = document.getElementById("wrapper");
for(let i=0;i<28; i++) { // controls the amount of bubbles
    let div  = document.createElement("div") // links
    let animeCircles=wrapper.appendChild(div);
    animeCircles.classList.add("anime-circle");

}

let circles= document.querySelectorAll(".anime-circle"); // linking plugin to cirlces

let randomAnimation = anime({
    targets : circles,
    background: ()=> {
        let hue=anime.random(270,320);
        let saturation= 60; 
        let luminosity= 55;
        let hslValue="hsl("+hue+","+saturation+"%,"+luminosity+"%)";
        return hslValue;
    },

    borderRadius: ()=> { // defining random values for x,y, scale, and duration of game
        return anime.random(500,50);
    },
    translateX: ()=> {
        return anime.random(-80,80)+"vh";
    },
    translateY:()=> {
        return anime.random(-80,100)+"vh"
    },
    scale: ()=> {
        return anime.random(0.35,1.75);
    },
    duration: ()=> {
        return anime.random(20000,20000);
    },
    delay: ()=> {
        return anime.random(1000,1000);
    },
    loop:false,
    direction:"alternate",
    easing:"easeOutExpo"
    
});

// button count up and down
var count = 0;

function Count() {
 //   count++;
    $('#lblShow').text(count);
    if (count == 28) {
        let victory=document.createTextNode("YOU WIN!");
        document.body.appendChild(victory);
    } 
    if(count++) {
document.body.style.backgroundColor = "LightBlue";  
wrapper.style.backgroundColor="LightBlue";
    }
    return false;
}
   

function Countdown () {
  //  count--;
    $('#lblShow').text(count);
     if(count--) {
document.body.style.backgroundColor = "IndianRed";  
wrapper.style.backgroundColor="IndianRed";
    }
    return false;
    console.log(count);
}
// timer
function startTimer(duration, display) { // local variables
    var timer= duration,seconds; // minutes and seconds
setInterval(function() { // defining the limits of seconds and minutes
   // minutes= parseInt(timer / 60,10);
    seconds= parseInt(timer % 60, 10);
   // minutes = minutes < 10 ? "0" + minutes : minutes; // ternary operator 
    seconds = seconds < 10 ? "0" + seconds : seconds;

  //  display.textContent = minutes + ":" + seconds; // display property
  display.textContent =seconds;

    if (--timer<0) { 
        timer=duration;
          let lost=document.createTextNode("YOU LOST!");
            document.body.appendChild(lost);
            stopTimer();

    }

}, 1000);
}

function stopTimer() {
document.querySelector('h1').style.display="none";
}
window.onload = function() { // executes timer on window load
    var OneMinute= 20;
    display = document.querySelector('#time');
    startTimer(OneMinute, display);
};
$(document).ready(function() {
    $("#my_audio").get(0).play();
});







   // let x = random(0,500); // defining random variables for random walker
   // let y = random(0,500);

  //  function random(min,max) {
   //     return Math.random() * (max-min) + min; // returning value through new function
        
  //  }

   // function init() { // initialize and warn browser for updating canvas
    //    window.requestAnimationFrame(draw);
  //  }

  //  function draw() { // draw function
     //   const canvas = document.getElementById('canvas');
    //    const ctx = canvas.getContext('2d');
    //    const nextX = random(-5,5);
    //    const nextY = random(-5,5);

    //    ctx.beginPath(); // random walker properties
    //    ctx.moveTo(x,y);
    //    x += random(-5,5);
    //    y += random(-5,5);
    //    ctx.lineWidth=0.1;
    //    ctx.lineTo(x,y);
    //    ctx.stroke();

    //    window.requestAnimationFrame(draw);

  //  }
//init();
