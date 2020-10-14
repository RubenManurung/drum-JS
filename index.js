let allDrum = document.querySelectorAll(".drum");

let data = {
  gerak : function(){
    alert("I got clicked.");
  }
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  drumAnimation(event.key);
});

for(let i = 0 ; i<=allDrum.length ; i++){
  allDrum[i].addEventListener("click", function(e){
    console.log(e);
    let btnValue = this.innerHTML;

    makeSound(btnValue);

    drumAnimation(btnValue);

  });
}



function makeSound(key){
  switch (key) {
    case "w" : let wValue = new Audio("sounds/tom-1.mp3");
               wValue.play();
    break;

    case "a" : let aValue = new Audio("sounds/tom-2.mp3");
               aValue.play();
    break;

    case "s" : let sValue = new Audio("sounds/tom-3.mp3");
               sValue.play();
    break;

    case "d" : let dValue = new Audio("sounds/tom-4.mp3");
               dValue.play();
    break;

    case "j" : let jValue = new Audio("sounds/snare.mp3");
               jValue.play();
    break;

    case "k" : let kValue = new Audio("sounds/crash.mp3");
               kValue.play();
    break;

    case "l" : let lValue = new Audio("sounds/kick-bass.mp3");
               lValue.play();
    break;

    default: console.log(btnValue);

  }
}


function drumAnimation(event){
  let btnEvent = document.querySelector("."+event);

  console.log(btnEvent);

  btnEvent.classList.add("pressed");

  setTimeout(function () {
    btnEvent.classList.remove("pressed");
  }, 100);
}
