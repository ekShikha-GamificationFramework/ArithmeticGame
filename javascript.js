var images = [];
var activities = [];
var imageCounter = 0;
var activityCounter = 0;
var breakPoints = [];
var showingActivity = false;
var source;
init();
function init() {
    for(var i= 0; i < 10; i++) {
        images[i] = "img"+i+".jpg";
    }
    activities[0] = "quiz1.html";
    activities[1] = "https://www.yiv.com/games/Elementary-Arithmetic-Game/index.html";
    activities[2] = "http://ekalavya.it.iitb.ac.in/summerinternship2017/activity_src/kBPlGvSIwN_gWulybVy6oQ/F49Nlw0i4lNn82dGASrsgA/Experiment/index.jsp";

    breakPoints.push(2);
    breakPoints.push(4);
    breakPoints.push(6);
}

function loaded() {
    source = document.getElementById("frame");
    console.log(source);
}

function onClickNext() {
    if(!showingActivity && breakPoints.indexOf(imageCounter) != -1) {
        showingActivity = true;
        source.src = activities[activityCounter];
        activityCounter++;
    } else {
        showingActivity = false;
        imageCounter++;
        source.src = images[imageCounter];
    }
}
