var slideIndex = 1;
var timer = null;
var slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function showSlides(n) {
    timer = setTimeout(showSlides, 2000);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    if(n === undefined){ n = slideIndex++; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    timer;
}