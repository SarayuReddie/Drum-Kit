var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumsButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick() {
        var buttomInnerHTML = this.innerHTML;
        makeSound(buttomInnerHTML);
        buttomAnimation(buttomInnerHTML);
    }
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttomAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        default:
            console.log(key);
    }
}

function buttomAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },150);
}