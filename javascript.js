var images = [];
var activities = [];
var imageCounter = 0;
var activityCounter = 0;
var breakPoints = [];
var showingActivity = false;
var source;

sessionStorage.setItem('score', -1);
init();

function init() {
    for(var i= 0; i < 7; i++) {
        images[i] = "img"+i+".jpg";
    }
    activities[0] = "quiz1.html";
    activities[1] = "https://www.yiv.com/games/Elementary-Arithmetic-Game/index.html";
    activities[2] = "http://ekalavya.it.iitb.ac.in/summerinternship2017/activity_src/kBPlGvSIwN_gWulybVy6oQ/F49Nlw0i4lNn82dGASrsgA/Experiment/index.jsp";

    breakPoints.push(1);
}

function loaded() {
    source = document.getElementById("frame");
}

function onClickNext() {
	var theScore=parseInt(sessionStorage.getItem('score'));
	if(theScore!=-1){
    	breakPoints.push(theScore%3+1);
    	sessionStorage.setItem('score', -1);
	breakPoints.push(theScore%3+ 1 + Math.ceil((Math.random()*10).toFixed())%3);
    }
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
