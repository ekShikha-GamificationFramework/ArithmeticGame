var dictionary = {};
var activities = [];
var scenes = [];
var map = {};
var startingPoint;
var source;

var position = {
    parent : 0,
    current : 0,
};

function init(){
    for(var i = 0; i<7 ; i++)
        addScene(new Scene("image"+i, "img"+i+".jpg"));

    addActivity( new Activity("theQuiz", "quiz1.html"));
    addActivity( new Activity("theGame", "https://www.yiv.com/games/Elementary-Arithmetic-Game/index.html"));
    addActivity( new Activity("theAnimation", "http://ekalavya.it.iitb.ac.in/summerinternship2017/activity_src/kBPlGvSIwN_gWulybVy6oQ/F49Nlw0i4lNn82dGASrsgA/Experiment/index.jsp");

}

function startGame(){
    source = document.getElementByID("frame");
    for(i in activities){
        if(activities[i].name==startingPoint){
            source.src = activities[i].link;
            return;
        }
    }
    for(i in scenes){
        if(scenes[i].name==startingPoint){
            source.src = scenes[i].link;
            return;
        }
    }
}

function startWith(val){
    position.parent = position.current = startingPoint = val+"";
}

function addScene(val){
    scenes.push(val);
}

function addActivity(val){
    activities.push(val);
    map[""+val.name]={};
}

function Activity(name, link){
    this.name = name+"";
    this.link = link+"";
}

function Scene(name, link){
    this.name = name+"";
    this.link = link+"";
}

function connectActivities(src, dest, path){
    //path is a list
    map[src+""][dest+""]=path;
}

function onClickNext(){
    var nextFrame;
    for
}
