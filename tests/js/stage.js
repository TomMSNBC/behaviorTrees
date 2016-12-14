// stage.js

var canvas;
var stage;
var agent;
var playButton;
var pauseButton;
var bar;
var fullScreen;
var cc;

var racky = 330;
function start() {
  // CREATEJS
  canvas     = document.getElementById('canvas');
  stage      = new createjs.Stage(canvas);
  canvas.width = window.innerWidth;

  drawVideo();
  drawControls();
  stage.update();
  loadTree();
}

function drawVideo() {
//var videoDom = $('<video width="320" height="240" autoplay><source src="/tests/video/round.mp4" type="video/mp4"></video>').appendTo(document.body)[0];
videoDom = document.createElement('video');
videoDom.src = '/tests/video/round.mp4';
videoDom.autoplay = false;
var video2 = new createjs.Bitmap(videoDom);
video2.x = 100;
video2.y = 10;
//video2.rotation = 10;
video2.scaleX = 1.39;
video2.scaleY = 1;
video2.visible = true;

//videoDom.pause();
stage.addChild(video2);
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
  playButton.y = racky;
  stage.addChild(playButton);

  pauseButton = new createjs.Bitmap("/tests/img/pause.png");
  pauseButton.visible = true;
  pauseButton.x = 100;
  pauseButton.y = racky;
  stage.addChild(pauseButton);

  bar = new createjs.Bitmap("/tests/img/bar.png");
  bar.visible = true;
  bar.x = 140;
  bar.y = racky;
  stage.addChild(bar);

  fullScreen = new createjs.Bitmap("/tests/img/fullscreen.png");
  fullScreen.visible = true;
  fullScreen.x = 640;
  fullScreen.y = racky;
  stage.addChild(fullScreen);

  cc = new createjs.Bitmap("/tests/img/cc.png");
  cc.visible = true;
  cc.x = 682;
  cc.y = racky;
  stage.addChild(cc);

  muteon = new createjs.Bitmap("/tests/img/muteon.png");
  muteon.visible = false;
  muteon.x = 725;
  muteon.y = racky;
  stage.addChild(muteon);

  muteoff = new createjs.Bitmap("/tests/img/muteoff.png");
  muteoff.visible = true;
  muteoff.x = 725;
  muteoff.y = racky;
  stage.addChild(muteoff);

}

