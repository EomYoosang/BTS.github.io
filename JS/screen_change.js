var screenIndex = 1;

function currentscreen(n) {
    screen_change(screenIndex = n);
}


function screen_change(n) {
    var i;
    var conts = document.getElementsByClassName("cont-main");
    var index = document.getElementsByClassName("link");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");

    for (i = 0; i < conts.length; i++) {
        conts[i].style.display = "none";  
    }
    for (i = 0; i < index.length; i++) {
        index[i].className = index[i].className.replace(" active-screen", "");
    }

    bar1.style.background = "#000";
    bar2.style.background = "#000";
    bar3.style.background = "#000";

    if(n == 4 || n == 7 || n == 11 || n == 14) {
        bar1.style.background = "#fff";
        bar2.style.background = "#fff";
        bar3.style.background = "#fff";
    }

    conts[screenIndex-1].style.display = "block";
    index[screenIndex-1].className += " active-screen";
}