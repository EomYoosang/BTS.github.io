var slideIndex1 = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
var slideIndex5 = 1;
var slideIndex6 = 1;
var slideIndex7 = 1;
var slideIndex8 = 1;
var slideIndex9 = 1;
var slideIndex10 = 1;
var slideIndex11 = 1;
var slideIndex12 = 1;
var slideIndex13 = 1;
var slideIndex14 = 1;

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}
  
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}
  
function plusSlides6(n) {
    showSlides6(slideIndex6 += n);
}
  
function plusSlides7(n) {
    showSlides7(slideIndex7 += n);
}
    
function plusSlides8(n) {
    showSlides8(slideIndex8 += n);
}

function plusSlides9(n) {
    showSlides9(slideIndex9 += n);
}
  
function plusSlides10(n) {
    showSlides10(slideIndex10 += n);
}

function plusSlides11(n) {
    showSlides11(slideIndex11 += n);
}
  
function plusSlides12(n) {
    showSlides12(slideIndex12 += n);
}
  
function plusSlides13(n) {
    showSlides13(slideIndex13 += n);
}
    
function plusSlides14(n) {
    showSlides14(slideIndex14 += n);
}

/* current slide */

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}

function currentSlide10(n) {
  showSlides10(slideIndex10 = n);
}

function currentSlide11(n) {
  showSlides11(slideIndex11 = n);
}

function currentSlide12(n) {
  showSlides12(slideIndex12 = n);
}

function currentSlide13(n) {
  showSlides13(slideIndex13 = n);
}

function currentSlide14(n) {
  showSlides14(slideIndex14 = n);
}

  

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-video", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active-video";
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    if (n > slides.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active-video";
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("dot3");
    if (n > slides.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " active-video";
}
  
function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("dot4");
    if (n > slides.length) {slideIndex4 = 1}    
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex4-1].style.display = "block";  
    dots[slideIndex4-1].className += " active-video";
}

function showSlides5(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides5");
    var dots = document.getElementsByClassName("dot5");
    if (n > slides.length) {slideIndex5 = 1}    
    if (n < 1) {slideIndex5 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activevideo", "");
    }
    slides[slideIndex5-1].style.display = "block";  
    dots[slideIndex5-1].className += " active-video";
}
  
function showSlides6(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides6");
    if (n > slides.length) {slideIndex6 = 1}    
    if (n < 1) {slideIndex6 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex6-1].style.display = "block";  
}
  
function showSlides7(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides7");

    if (n > slides.length) {slideIndex7 = 1}    
    if (n < 1) {slideIndex7 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex7-1].style.display = "block";  
}
    
function showSlides8(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides8");

    if (n > slides.length) {slideIndex8 = 1}    
    if (n < 1) {slideIndex8 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex8-1].style.display = "block";  
}

function showSlides9(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides9");

    if (n > slides.length) {slideIndex9 = 1}    
    if (n < 1) {slideIndex9 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex9-1].style.display = "block";  
}
  
function showSlides10(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides10");
    var dots = document.getElementsByClassName("dot10");
    if (n > slides.length) {slideIndex10 = 1}    
    if (n < 1) {slideIndex10 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex10-1].style.display = "block";  
    dots[slideIndex10-1].className += " active-video";
}

function showSlides11(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides11");

    if (n > slides.length) {slideIndex11 = 1}    
    if (n < 1) {slideIndex11 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex11-1].style.display = "block";  
}
  
function showSlides12(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides12");
    var dots = document.getElementsByClassName("dot12");
    if (n > slides.length) {slideIndex12 = 1}    
    if (n < 1) {slideIndex12 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex12-1].style.display = "block";  
    dots[slideIndex12-1].className += " active-video";
}
  
function showSlides13(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides13");
    var dots = document.getElementsByClassName("dot13");
    if (n > slides.length) {slideIndex13 = 1}    
    if (n < 1) {slideIndex13 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex13-1].style.display = "block";  
    dots[slideIndex13-1].className += " active-video";
}
    
function showSlides14(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides14");
    var dots = document.getElementsByClassName("dot14");
    if (n > slides.length) {slideIndex14 = 1}    
    if (n < 1) {slideIndex14 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-video", "");
    }
    slides[slideIndex14-1].style.display = "block";  
    dots[slideIndex14-1].className += " active-video";
}