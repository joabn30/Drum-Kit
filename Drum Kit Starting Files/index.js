var Numofdrums = document.querySelectorAll(".drum").length;
for(var i = 0; i < Numofdrums; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}

//document.querySelector(".set").addEventListener("click", handleClick)

function handleClick(){
    var buttoninner = this.innerHTML;
    MakeSound(buttoninner);
    buttonAnimation(buttoninner);

}
document.addEventListener("keydown", function(Event){
    MakeSound(Event.key);
    buttonAnimation(Event.key);

});

function MakeSound(key){
     switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;

        default:

    }

}

function buttonAnimation(currentkey){
   var activebutton = document.querySelector("." + currentkey);
   activebutton.classList.add("pressed");

   setTimeout(function(){
    activebutton.classList.remove("pressed");
   },100);
}