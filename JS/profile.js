/* profile function */
var members = document.getElementsByClassName('member');

function blurOn() {
    for (var i = 0; i < 7; i++) {
        members[i].classList.add('blurEffect');
    }
}

function blurOff() {
    for (var i = 0; i < 7; i++) {
        members[i].classList.remove('blurEffect');
    }
}

function openProfile(event) {
    var inner = document.getElementsByClassName('profile-inner');
    var contents = inner[0].getElementsByTagName('li');
    for (var i = 0; i < 7; i++) {
        contents[i].style.display = 'none';
    }
    var memberID = event.id;
    switch (memberID) {
        case "RM":
            contents[0].style.display = 'block';
            break;
        case "SG":
            contents[1].style.display = 'block';
            break;
        case "JH":
            contents[2].style.display = 'block';
            break;
        case "Jin":
            contents[3].style.display = 'block';
            break;
        case "JK":
            contents[4].style.display = 'block';
            break;
        case "V":
            contents[5].style.display = 'block';
            break;
        case "JM":
            contents[6].style.display = 'block';
            break;
    }

    blurOn();
    var profileDiv = document.getElementById('profile');
    profileDiv.style.display = 'block';
}

for (var i = 0; i < 7; i++) {
    members[i].addEventListener('click', openProfile(), false);
}

function closeProfile() {
    document.getElementById('profile').style.display = "none";
    blurOff();
}
