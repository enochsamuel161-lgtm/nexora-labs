// ==========================
// Nexora Labs JavaScript
// ==========================

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });

    });
});

// Contact Form

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you for contacting Nexora Labs! We will get back to you shortly.");

form.reset();

});

}

// Sticky Header Effect

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 20px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

// Fade-in Animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

const screen=window.innerHeight;

if(position<screen-100){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s ease";

});