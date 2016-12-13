// stage.js

var canvas;
var stage;

function start() {
  // CREATEJS
  canvas     = document.getElementById('canvas');
  stage      = new createjs.Stage(canvas);
  canvas.width = window.innerWidth;
  agent = new createjs.Shape();
  agent.graphics.beginFill('yellow');
  agent.graphics.drawRect(-10, -30, 50, 60);
  agent.x = 200;
  agent.y = 100;

  stage.addChild(agent);
  stage.update();

  //createjs.Ticker.addEventListener('tick', onTick);
  loadTree();
}

