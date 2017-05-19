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
    activities[2] = "http://ekalavya.it.iitb.ac.in/summerinternship2017/activity_src/sp_6QBsomiRlvlh7dwrp8A/E-84ZJcm9U-VWDm0SRPU_Q/Experiment/index.jsp";
    breakPoints.push(1);
	breakPoints.push(4);
}

function loaded() {
    source = document.getElementById("frame");
}

function onClickNext() {
    var theScore=parseInt(sessionStorage.getItem('score'));
    if(theScore!=-1){
    	breakPoints.push(theScore%3+1);
    	sessionStorage.setItem('score', -1);
    }
    if(!showingActivity && breakPoints.indexOf(imageCounter) != -1) {
        showingActivity = true;
        source.contentWindow.location.replace(activities[activityCounter]);
        activityCounter++;
    } else {
        showingActivity = false;
        imageCounter++;
        source.contentWindow.location.replace(images[imageCounter]);
    }
}
