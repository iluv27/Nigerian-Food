
// document.querySelector(".display1");
// document.querySelector(".display2");
// document.querySelector(".display3");
// document.querySelector(".display4");
// document.querySelector(".display5");
// document.querySelector(".display6");

// document.querySelector(".display0")

// console.log(qwer)

// To change the first display
document.querySelector(".display1").addEventListener("click", function () {
    document.querySelector(".display0").style.backgroundImage = "url(/images/jollof2.jpg)"
})

// To change the second display
document.querySelector(".display2").addEventListener("click", function () {
    document.querySelector(".display0").style.backgroundImage = "url(/images/akara2.jpg)"
})

// To change the third display
document.querySelector(".display3").addEventListener("click", function () {
    document.querySelector(".display0").style.backgroundImage = "url(/images/beans2.jpg)"
})

// To change the fourth display
document.querySelector(".display4").addEventListener("click", function () {
    document.querySelector(".display0").style.backgroundImage = "url(/images/Egusi2.jpg)"
})

// To change the fifth display
document.querySelector(".display5").addEventListener("click", function () {
    document.querySelector(".display0").style.backgroundImage = "url(/images/stew2.jpg)"
})

// To change the sixth display
document.querySelector(".display6").addEventListener("click", function () {
    document.querySelector(".display0").style.backgroundImage = "url(/images/puff2.jpg)"
})



// TESTING FOR THE TESTIMONIAL SECTION
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// FOR THE FOOD SECTION

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    let dots1 = document.getElementsByClassName("dot1");
    if (n > slides1.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides1.length }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active1", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
}