// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
 let mySrc = myImage.getAttribute('src');
 if(mySrc === 'images/present-1893642_1920.jpg') {

   myImage.setAttribute ('src','images/access-2676041_1920.jpg');


 } else {
   myImage.setAttribute ('src','images/present-1893642_1920.jpg');
 }
}


// Personalized welcome message code


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
 let myName = prompt('Inserta tu nombre.');

  
 if(!myName || myName === null) {
 } else {
   localStorage.setItem('name', myName);
   myHeading.innerHTML = '¡Feliz cumpleaños ' + myName + '!';
 }
}


if(!localStorage.getItem('name')) {
 setUserName();
} else {
 let storedName = localStorage.getItem('name');
 myHeading.innerHTML = '¡Feliz cumpleaños ' + storedName + '!';
}

myButton.onclick = function() {
 setUserName();
}




// El gato desplazándose <3

var catEl = document.getElementById("cat");
var startTime = new Date().getTime();   
var walkTheCat = function(){
   var currTime = new Date().getTime();
   var newLeft = ((currTime - startTime) / 1000) * 100;
   var newTop = 0//((currTime - startTime) / 1000) * 100;
   if (newLeft > 850){ startTime = currTime};
   catEl.style.left = newLeft + "px";
   catEl.style.top = newTop + "px";
   window.requestAnimationFrame(walkTheCat);


};


walkTheCat();
