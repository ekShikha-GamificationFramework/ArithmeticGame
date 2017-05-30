// var dictionary = {};
var games = [];
var activities = [];
// var scenes = [];
// var map = {};
// var startingPoint;
var source;
var aGame;
// var teacher;
var contributionMap = {};

// var state = {
// 	parent : 0,
// 	current : 0,
// 	destination : "theGame",
// 	currentPath : 0,
// 	currentIndex : 0,
// 	currentGame : 0
// };

//game id, teacher id, ...
var state = {
	game : 0,
	activity : 0,
	teacher : 0,
	student : 0,
	score : 0
};

function setContribution(act, top, val){
	//0<val<=1
	contributionMap[act][top]=val;
}

function init(){
	source = document.getElementById("frame");
	// for(var i = 0; i<7 ; i++)
	// 	addScene(new Scene("image"+i, "img"+i+".jpg"));

	// addActivity(new Activity("theQuiz", "quiz1.html"));
	// addActivity(new Activity("theGame", "https://www.yiv.com/games/Elementary-Arithmetic-Game/index.html"));
	// addActivity(new Activity("theAnimation", "http://ekalavya.it.iitb.ac.in/summerinternship2017/activity_src/kBPlGvSIwN_gWulybVy6oQ/F49Nlw0i4lNn82dGASrsgA/Experiment/index.jsp"));

	// connectActivities("theQuiz", "theGame", ["image3", "image2"]);
	// connectActivities("theGame", "theAnimation", ["image1", "image4", "image5", "image6"]);
	// connectActivities("theAnimation", "theQuiz", ["image2", "image4", "image2"]);
	// startWith("theQuiz");

	var a=[];
	a[0] = new Activity("theQuiz", "quiz1.html");
	a[1] = new Activity("theGame", "https://www.yiv.com/games/Elementary-Arithmetic-Game/index.html");
	a[2] = new Activity("theAnimation", "http://ekalavya.it.iitb.ac.in/summerinternship2017/activity_src/kBPlGvSIwN_gWulybVy6oQ/F49Nlw0i4lNn82dGASrsgA/Experiment/index.jsp");

	aGame = new Game("aGame");
	
	for (var i = 3 - 1; i >= 0; i--) {
		aGame.addActivity(a[i]);
	}

	aGame.connectActivities(a[0], a[1]);
	aGame.connectActivities(a[1], a[2]);
	aGame.connectActivities(a[2], a[0]);

	// aGame.connectActivities("theQuiz", "theGame");
	// aGame.connectActivities("theGame", "theAnimation");
	// aGame.connectActivities("theAnimation", "theQuiz");
}
	
function loaded() {
    source = document.getElementById("frame");
    init();
}

//not needed since the kid can start with any activity
// function startGame(){
// 	for(i in activities){
// 		if(activities[i].name==startingPoint){
// 			source.src = activities[i].link;
// 			return;
// 		}
// 	}
// 	for(i in scenes){
// 		if(scenes[i].name==startingPoint){
// 			source.src = scenes[i].link;
// 			return;
// 		}
// 	}
// }

function startWith(val){
	state.parent = state.current = startingPoint = val+"";
}

// every game has their set of paths(connections) and activities
function Game(name, icon){
	//add/extract to/from sql database
	this.activities = [];
	this.name = name;
	this.id = games.length;
	this.map = {};
	this.iconLink=icon;
	games.push(name);
	// insert into game
	this.addActivity = function(val){
		this.activities.push(val.id);
		this.map[val.id]=[];
		this.visited[val.id]=[];
	};

	this.connectActivities = function(src, dest){
		//add/extract to/from sql database
		this.map[src.id].push(dest.id);
		this.visited[src.id].push(0);
	}
}

function getActivityID(act){
	for (var i = activities.length - 1; i >= 0; i--) {
		if(activities[i].name==act)
			return activities[i].id;
	}
}

function showRecommendation(){
	var i=0, n=state.game.map[state.activity].length;
	while(i<n && state.game.visited[state.activity][i]==1)
		i++;

	if(i==n)
		return -1;

	return state.game.map[state.activity][i];
}

function showScore(){
	return state.score;
}

// function addScene(val){
// 	//add/extract to/from sql database
// 	scenes.push(val);
// }

// function addActivity(game, val){
// 	//add/extract to/from sql database
	
// 	game.activities.push(val);

// 	map[""+val.name]={};
// }

function Activity(name, link){
	//add/extract to/from sql database
	this.name = name+"";
	this.link = link+"";
	this.id = activities.length;

	activities.push(this);
}

// function Scene(name, link){
// 	//add/extract to/from sql database
// 	this.name = name+"";
// 	this.link = link+"";
// }

// function connectActivities(src, dest, path){
// 	//path is a list
// 	map[src+""][dest+""]=path;
// }

// function connectActivities(src, dest){
// 	//add/extract to/from sql database
// 	this.map[src+""][dest+""]=1;
// }

// function onClickNext(){
// 	if(state.currentPath==0){
// 		for(i in activities){
// 			if(activities[i].name==state.current){
// 				source.src=(activities[i].link);
// 				break;
// 			}
// 		}
// 		state.destination = Object.keys(map[state.current])[0];
// 		state.currentPath = map[state.current][state.destination];
// 	}
// 	else{
// 		//source.src = scenes[state.currentPath[state.currentIndex++]].link;
// 		for(i in scenes){
// 			if(scenes[i].name==state.currentPath[state.currentIndex]){
// 				source.contentWindow.location.replace(scenes[i].link);
// 				break;
// 			}
// 		}
		
// 		state.currentIndex++;

// 		if(state.currentIndex==state.currentPath.length){
// 			state.parent = state.current;
// 			state.current = state.destination;
// 			state.currentPath = 0;
// 			state.currentIndex = 0;
// 		}
// 	}
// }


