// Imágenes cambio

let myImage = document.querySelector('img');

myImage.onclick = function() {
 let mySrc = myImage.getAttribute('src');
 if(mySrc === 'images/present-1893642_1920.jpg') {

   myImage.setAttribute ('src','images/access-2676041_1920.jpg');


 } else {
   myImage.setAttribute ('src','images/present-1893642_1920.jpg');
 }
}


// Mensaje personalizado


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




// Imagen que se mueve

var referenciassEl = document.getElementById("referenciass");
var startTime = new Date().getTime();   
var walkTheReferenciass = function(){
   var currTime = new Date().getTime();
   var newLeft = ((currTime - startTime) / 1000) * 100;
   var newTop = 0//((currTime - startTime) / 1000) * 100;
   if (newLeft > 850){ startTime = currTime};
   referenciassEl.style.left = newLeft + "px";
   referenciassEl.style.top = newTop + "px";
   window.requestAnimationFrame(walkTheReferenciass);


};


walkTheReferenciass();
