
const hamburger= document.querySelector(".hamburger");
const nav=document.querySelector(".navbar nav");


//add listener
hamburger.addEventListener("click", ()=>{
    console.log("hamburger clicked");

hamburger.classList.toggle("close");
nav.classList.toggle("nav-toggle");
});

