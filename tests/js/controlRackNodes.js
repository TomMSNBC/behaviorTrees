

const controlRackNodes = {};

/**
 * node initializer
 *
 * @param  {Object} action
 * @param  {Object} condition
 */
controlRackNodes.init = function (action, condition) {
  controlRackNodes.actions(action);
  controlRackNodes.conditions(condition);
};

/**
 * node actions
 * Available actions defined in behavior tree
 *
 * @param  {Object} action
 */
controlRackNodes.actions = function (action) {
  action('SwitchToPlay', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
      console.log(`${name} Switching to play`);
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      videoDom.play();
      return b3.SUCCESS;
    },
  });
  action('SwitchToPause', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
      console.log(`${name} Switching to pause`);
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
      videoDom.pause();
      return b3.SUCCESS;
    },
  });
  action('SwitchToFullScreen', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
      console.log(`${name} Switching to full Screen`);
            // video2.rotation ++;
      return b3.SUCCESS;
    },
  });
  action('TurnOnCC', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
      console.log(`${name} Turning on Closed Captions`);
            // video2.rotation --;
      return b3.SUCCESS;
    },
  });
  action('Mute', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
      console.log(`${name} muting`);
            // videoDom.muted = true;
      return b3.SUCCESS;
    },
  });
  action('UnMute', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
      console.log(`${name} unmuting`);
            // videoDom.muted = false;
      return b3.SUCCESS;
    },
  });
  action('UpdateCurrentTime', {
    tick(tick) {
            // tick.blackboard.set('walking', 1);
      const name = tick.blackboard.get('name');
            // console.log(name + ' updating duration');
      currentTime.innerHTML = videoDom.currentTime;
      return b3.SUCCESS;
    },
  });
};

/**
 * node conditions
 * Available conditions defined in behavior tree
 *
 * @param  {Object} action
 */
controlRackNodes.conditions = function (condition) {
  condition('IsPauseClicked', {
    tick(tick) {
      pauseButton.b3 = b3;
      pauseButton.clicking = false;
      pauseButton.onclick = function () {
        console.log('clicked..');
        pauseButton.clicking = true;
        if (!pauseButton.clicked) {
          pauseButton.clicked = true;
        }
      };
      if (pauseButton.clicked) {
        pauseButton.clicked = false;
        return b3.SUCCESS;
      }
      if (!pauseButton.clicking) {
        pauseButton.clicked = false;
      }
      return b3.FAILURE;
    },
  });
  condition('IsPlayClicked', {
    tick(tick) {
      playButton.b3 = b3;
      playButton.clicking = false;
      playButton.onclick = function () {
        console.log('clicked..');
        playButton.clicking = true;
        if (!playButton.clicked) {
          playButton.clicked = true;
        }
      };


      if (playButton.clicked) {
        playButton.clicked = false;
        return b3.SUCCESS;
      }
      if (!playButton.clicking) {
        playButton.clicked = false;
      }
      return b3.FAILURE;
    },
  });
  condition('IsFullScreenClicked', {
    tick(tick) {
      fullScreen.b3 = b3;
      fullScreen.clicking = false;

      if (fullScreen.clicked) {
        fullScreen.clicked = false;
        return b3.SUCCESS;
      }
      if (!fullScreen.clicking) {
        fullScreen.clicked = false;
      }
      return b3.FAILURE;
    },
  });
  condition('IsCCClicked', {
    tick(tick) {
      cc.b3 = b3;
      cc.clicking = false;

      if (cc.clicked) {
        cc.clicked = false;
        return b3.SUCCESS;
      }
      if (!cc.clicking) {
        cc.clicked = false;
      }
      return b3.FAILURE;
    },
  });
  condition('IsMuteClicked', {
    tick(tick) {
      muteoff.b3 = b3;
      muteoff.clicking = false;

      if (muteoff.clicked) {
        muteoff.clicked = false;
        return b3.SUCCESS;
      }
      if (!muteoff.clicking) {
        muteoff.clicked = false;
      }
      return b3.FAILURE;
    },
  });
  condition('IsUnMuteClicked', {
    tick(tick) {
      muteon.b3 = b3;
      muteon.clicking = false;

      if (muteon.clicked) {
        muteon.clicked = false;
        return b3.SUCCESS;
      }
      if (!muteoff.clicking) {
        muteoff.clicked = false;
      }
      return b3.FAILURE;
    },
  });
};
