// main simulation script

'use strict';

var mainAi = {};

var sim2 = function(ai) {
	var lucky = {
	    memory:  new b3.Blackboard()
	};
	lucky.memory.set('name', 'Lucky');
	ai.tick(lucky, lucky.memory);
}

var simulation = function(ai) {

	console.log('**** Lucky tries the door');
	var lucky = {
	    memory:  new b3.Blackboard()
	};
	lucky.memory.set('name', 'Lucky');
	ai.tick(lucky, lucky.memory);

	console.log('');
	console.log('**** Thief tries the door');
	var thief = {
	    memory:  new b3.Blackboard()
	};
	thief.memory.set('name', 'Thief');
	thief.memory.set('locked', true);
	thief.memory.set('lockpick-level', 6);

	ai.tick(thief, thief.memory);

	console.log('');
	console.log('**** Thug tries the door');
	var thug = {
	    memory:  new b3.Blackboard()
	};
	thug.memory.set('name', 'Thug');
	thug.memory.set('locked', true);
	thug.memory.set('lockpick-level', 2);

	ai.tick(thug, thug.memory);
	console.log('');
	console.log('');
	console.log('**** Simulation complete');
}
function go(ai) {
	  createjs.Ticker.addEventListener('tick', onTick);
	  mainAi = ai;
}

function onTick() {
//tree.tick(agent, blackboard);
	var cRack = {
	    memory:  new b3.Blackboard()
	};
	cRack.memory.set('name', 'cRack');
	cRack.memory.set('locked', true);
	mainAi.tick(cRack, cRack.memory);
  stage.update();
}

function loadTree() {
	var jsonPath = "/tests/config/"
	//var filename = jsonPath + "unit_behavior.json";
	//var filename = jsonPath + "openDoor2.json";
	var filename = jsonPath + "controlRack.json";
	//var nodes = openDoorNodes;
	var nodes = controlRackNodes;
	var aiName = "fred";
	//var nodes = unitNodes;
	treeLoader.init(filename,aiName,nodes,go);
}

