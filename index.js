const homeScoreHolder = document.getElementById("homeScore");
const guestScoreHolder = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;


function incrementHomeOne(){
    homeScore += 1;
    homeScoreHolder.innerHTML = homeScore;
}
function incrementHomeTwo(){
    homeScore += 2;
    homeScoreHolder.innerHTML = homeScore;
}
function incrementHomeThree(){
    homeScore += 3;
    homeScoreHolder.innerHTML = homeScore;
}


function incrementGuestOne(){
    guestScore += 1;
    guestScoreHolder.innerHTML= guestScore;
}
function incrementGuestTwo(){
    guestScore +=2;
    guestScoreHolder.innerHTML= guestScore;
}
function incrementGuestThree(){
    guestScore +=3;
    guestScoreHolder.innerHTML= guestScore;
}