/*********************************************************
 * POSSIBLE ❤️ BEST WEDDING WEBSITE
 * Author: Possible Esangha
 *********************************************************/


/****************************************************
 * GLOBAL VARIABLES
 ****************************************************/
const weddingDate = new Date("April 3, 2027 10:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const header = document.querySelector(".header");

const topButton = document.querySelector(".top-btn");

const invitation = document.querySelector(".invitation-overlay");

const openInvitation = document.querySelector(".open-btn");

openInvitation.addEventListener("click", () => {invitation.classList.add("hide");

});

const musicButton = document.querySelector(".music-btn");

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox img");

const closeLightbox = document.querySelector(".lightbox-close");

const previousButton = document.querySelector(".lightbox-prev");

const nextButton = document.querySelector(".lightbox-next");

let currentImage = 0;

let musicPlaying = false;

/****************************************************
 * COUNTDOWN TIMER
 ****************************************************/

function updateCountdown(){

    const now = new Date().getTime();

    const difference = weddingDate - now;

    const d = Math.floor(difference / (1000*60*60*24));

    const h = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));

    const m = Math.floor((difference % (1000*60*60)) / (1000*60));

    const s = Math.floor((difference % (1000*60)) / 1000);

    days.innerHTML = d;

    hours.innerHTML = h;

    minutes.innerHTML = m;

    seconds.innerHTML = s;

}

setInterval(updateCountdown,1000);

updateCountdown();



/****************************************************
 * STICKY HEADER
 ****************************************************/

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/****************************************************
 * BACK TO TOP
 ****************************************************/

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/****************************************************
 * OPEN INVITATION
 ****************************************************/

openInvitation.addEventListener("click",()=>{

    invitation.classList.add("hide");

});

/****************************************************
 * BACKGROUND MUSIC
 ****************************************************/

const music = document.getElementById("backgroundMusic");

musicButton.addEventListener("click",()=>{

    if(musicPlaying){

        music.pause();

        musicButton.innerHTML="<i class='fa-solid fa-music'></i>";

    }

    else{

        music.play();

        musicButton.innerHTML="<i class='fa-solid fa-pause'></i>";

    }

    musicPlaying=!musicPlaying;

});

/****************************************************
 * HERO SLIDESHOW
 ****************************************************/

const hero=document.querySelector(".hero");

const slides=[

"images/hero1.jpg",

"images/hero2.jpg",

"images/hero3.jpg",

"images/hero4.jpg",

"images/hero5.jpg"

];

let slide=0;

function heroSlider(){

slide++;

if(slide>=slides.length){

slide=0;

}

hero.style.backgroundImage=

`linear-gradient(rgba(15,20,40,.55),rgba(15,20,40,.55)),url(${slides[slide]})`;

}

setInterval(heroSlider,7000);

/****************************************************
 * LIGHTBOX
 ****************************************************/

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentImage=index;

lightbox.classList.add("active");

lightboxImage.src=img.src;

});

});

closeLightbox.onclick=()=>{

lightbox.classList.remove("active");

};

nextButton.onclick=()=>{

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

lightboxImage.src=galleryImages[currentImage].src;

};

previousButton.onclick=()=>{

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

lightboxImage.src=galleryImages[currentImage].src;

};


/****************************************************
 * MOBILE MENU
 ****************************************************/

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".navbar");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

/****************************************************
 * FLUTTERWAVE PAYMENT
 ****************************************************/

const donationForm = document.getElementById("donationForm");

donationForm.addEventListener("submit", function (e) {

    e.preventDefault();

     FlutterwaveCheckout({

        public_key: "FLWPUBK-eead06f241f63807934cf2fcba1045ba-X",

        tx_ref: "WEDDING_" + Date.now(),
amount: Number(document.getElementById("amount").value),

customer: {
    email: document.getElementById("email").value,
    name: document.getElementById("fullname").value,
},

        customizations: {

            title: "Best Gabriel & Possible Esangha",

            description: "Wedding Support",

            logo: "images/logo.png"

        },

        callback: function (response) {

            if (response.status === "successful") {

                document
                    .querySelector(".thank-you-screen")
                    .classList
                    .add("show");

            }

        },

        onclose: function () {

            console.log("Donation window closed");

        }

    });

});

const closeThankYou = document.getElementById("closeThankYou");

closeThankYou.addEventListener("click", () => {

    document
        .querySelector(".thank-you-screen")
        .classList
        .remove("show");

});


document.getElementById("donateBtn").addEventListener("click", function () {

    let amount = document.getElementById("customAmountInput").value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    FlutterwaveCheckout({
        public_key: "FLWPUBK-eead06f241f63807934cf2fcba1045ba-X",

        tx_ref: "WEDDING-" + Date.now(),

        amount: Number(amount),

        currency: "NGN",

        payment_options: "card,banktransfer,ussd",

        customer: {
            email: "guest@example.com",
            phone_number: "",
            name: "Wedding Guest"
        },

        customizations: {
            title: "Possible & Best Wedding",
            description: "Wedding Love Fund",
            logo: "images/logo.png"
        },

        callback: function (payment) {
            console.log(payment);

            alert("Thank you for supporting our wedding!");
        },

        onclose: function () {
            console.log("Payment window closed.");
        }
    });

});
