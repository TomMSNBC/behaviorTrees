// main simulation script


let mainAi = {};

const sim2 = function (ai) {
  const lucky = {
    memory: new b3.Blackboard(),
  };
  lucky.memory.set('name', 'Rack');
  ai.tick(lucky, lucky.memory);
};


function go(ai) {
	  // createjs.Ticker.addEventListener('tick', onTick);
  setInterval(() => { onTick(); }, 100);
	  mainAi = ai;
}

function onTick() {
// tree.tick(agent, blackboard);
  const cRack = {
	    memory: new b3.Blackboard(),
  };
  cRack.memory.set('name', 'cRack');
  cRack.memory.set('locked', true);
  mainAi.tick(cRack, cRack.memory);
  console.log('ticking..');
  // stage.update();
}

function loadTree() {
  const jsonPath = '/tests/config/';
	// var filename = jsonPath + "unit_behavior.json";
	// var filename = jsonPath + "openDoor2.json";
  const filename = `${jsonPath}controlRack.json`;
	// var nodes = openDoorNodes;
  const nodes = controlRackNodes;
  const aiName = 'fred';
	// var nodes = unitNodes;
  treeLoader.init(filename, aiName, nodes, go);
}
