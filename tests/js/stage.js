// stage.js

var canvas;
var stage;
var agent;
var playButton;
var pauseButton;
var bar;
var fullScreen;
var cc;

function start() {
  // CREATEJS
  canvas     = document.getElementById('canvas');
  stage      = new createjs.Stage(canvas);
  canvas.width = window.innerWidth;

  drawControls();
  stage.update();
  loadTree();
}

function drawControls() {
  // agent = new createjs.Shape();
  // agent.graphics.beginFill('yellow');
  // agent.graphics.drawRect(-10, -30, 50, 60);
  // agent.x = 200;
  // agent.y = 100;
  // stage.addChild(agent);

  playButton = new createjs.Bitmap("/tests/img/play.png");
  playButton.visible = false;
  playButton.x = 100;
  playButton.y = 200;
  stage.addChild(playButton);

  pauseButton = new createjs.Bitmap("/tests/img/pause.png");
  pauseButton.visible = true;
  pauseButton.x = 100;
  pauseButton.y = 200;
  stage.addChild(pauseButton);

  bar = new createjs.Bitmap("/tests/img/bar.png");
  bar.visible = true;
  bar.x = 140;
  bar.y = 200;
  stage.addChild(bar);

  fullScreen = new createjs.Bitmap("/tests/img/fullscreen.png");
  fullScreen.visible = true;
  fullScreen.x = 640;
  fullScreen.y = 200;
  stage.addChild(fullScreen);

  cc = new createjs.Bitmap("/tests/img/cc.png");
  cc.visible = true;
  cc.x = 682;
  cc.y = 200;
  stage.addChild(cc);

}

