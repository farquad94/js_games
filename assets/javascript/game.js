let teamoneshootButton = document.querySelector ('#teamone-shoot-button');
let teamoneshotsCounter = document.querySelector ('#teamone-numshots');
let teamtwoshootButton = document.querySelector ('#teamtwo-shoot-button');
let teamtwoshotsCounter = document.querySelector ('#teamtwo-numshots');
let resetButton = document.querySelector ('#reset-button');

let teamoneGoals = document.querySelector ('#teamone-numgoals');
let teamtwoGoals = document.querySelector ('#teamtwo-numgoals');

let newGoalOneCounter = shotChance(0,11);
function shotChance() {
return Math.floor(Math.random() * 11);
}

teamoneshootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newShotCounterOneValue = Number(teamoneshotsCounter.innerHTML) + 1;
    teamoneshotsCounter.innerHTML = newShotCounterOneValue;
    if(newShotCounterOneValue > 10) {teamoneshotsCounter.style.color = "red";}
    // This is the problem. I need to let goal increase IF Math.random is success//
    if(newGoalOneCounter > 10) { } 
})
// Don't forget to take out this concole.log function! or not lol //
teamtwoshootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newShotCounterOneValue = Number(teamtwoshotsCounter.innerHTML) + 1;
    teamtwoshotsCounter.innerHTML = newShotCounterOneValue;
    if(newShotCounterOneValue > 10) {teamtwoshotsCounter.style.color = "red";}
})

// Use Math.floor(Math.random() * 11); ???//