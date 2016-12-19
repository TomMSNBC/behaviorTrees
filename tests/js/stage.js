// stage.js


let playButton;
let pauseButton;
let bar;
let fullScreen;
let cc;
let muteon;
let muteoff;
let playPause;
let videoElement;
var videoDom;
var currentTime;

function start() {
  drawVideo();
  drawContentControls();
  drawCounters();
  loadTree();
}

function drawVideo() {
// var videoDom = $('<video width="320" height="240" autoplay><source src="/tests/video/round.mp4" type="video/mp4"></video>').appendTo(document.body)[0];
  videoDom = document.createElement('video');
  videoDom.src = '/tests/video/round.mp4';
  videoDom.autoplay = false;
  videoDom.currentTime = 140;
  videoElement = document.getElementById('videoEl');
  videoElement.appendChild(videoDom);
}

function drawCounters() {
  currentTime = document.getElementById('currentTime');
  currentTime.innerHTML = "0.00";
  // currentTime = new createjs.Text("0:00", "10px Arial", "#FFF");
  // stage.addChild(currentTime);
}

function drawContentControls() {
  playButton = document.getElementById('playButton');
  pauseButton = document.getElementById('pauseButton');
  pauseButton.style.display = "none";
  bar = {};
  fullScreen = {};
  cc = {};
  muteon = {};
  muteoff = {};
}
