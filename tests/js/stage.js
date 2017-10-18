// stage.js
/* global document */

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

function drawVideo() {
  videoDom = document.createElement('video');
  videoDom.src = '/tests/video/round.mp4';
  videoDom.autoplay = false;
  videoDom.currentTime = 140;
  videoElement = document.getElementById('videoEl');
  videoElement.appendChild(videoDom);
}

function drawCounters() {
  currentTime = document.getElementById('currentTime');
  currentTime.innerHTML = '0.00';
}

function drawContentControls() {
  playButton = document.getElementById('playButton');
  pauseButton = document.getElementById('pauseButton');
  pauseButton.style.display = 'none';
  bar = {};
  fullScreen = {};
  cc = {};
  muteon = {};
  muteoff = {};
}

function start() {
  drawVideo();
  drawContentControls();
  drawCounters();
  loadTree();
}
