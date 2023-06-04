const homeScoreHolder = document.getElementById("homeScore");
const guestScoreHolder = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;


function incrementHome(score){
    homeScore += score;
    homeScoreHolder.innerHTML = homeScore;
}


function incrementGuest(score){
    guestScore += score;
    guestScoreHolder.innerHTML= guestScore;
}
