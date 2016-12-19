// main simulation script

'use strict';

var mainAi = {};

var sim2 = function(ai) {
	var lucky = {
		memory:  new b3.Blackboard()
	};
	lucky.memory.set('name', 'Rack');
	ai.tick(lucky, lucky.memory);
};


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

