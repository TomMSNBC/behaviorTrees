'use strict';

var controlRackNodes = {};

/**
 * node initializer
 *
 * @param  {Object} action
 * @param  {Object} condition
 */
controlRackNodes.init = function(action, condition) {
    controlRackNodes.actions(action);
    controlRackNodes.conditions(condition);
}

/**
 * node actions
 * Available actions defined in behavior tree
 *
 * @param  {Object} action
 */
controlRackNodes.actions = function(action) {
    action('SwitchToPlay', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Switching to play');
            playButton.visible = true;
            pauseButton.visible = false;
            videoDom.play();
            return b3.SUCCESS;
        }
    });
    action('SwitchToPause', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Switching to pause');
            playButton.visible = false;
            pauseButton.visible = true;
            videoDom.pause();
            return b3.SUCCESS;
        }
    });
    action('SwitchToFullScreen', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Switching to full Screen');
            video2.rotation ++;
            return b3.SUCCESS;
        }
    });
    action('TurnOnCC', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Turning on Closed Captions');
            video2.rotation --;
            return b3.SUCCESS;
        }
    });
    action('Mute', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' muting');
            videoDom.muted = true;
            return b3.SUCCESS;
        }
    });
    action('UnMute', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' unmuting');
            videoDom.muted = false;
            return b3.SUCCESS;
        }
    });
    action('UpdateCurrentTime', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            //console.log(name + ' updating duration');
            currentTime.text = videoDom.currentTime;
            return b3.SUCCESS;
        }
    });

}

/**
 * node conditions
 * Available conditions defined in behavior tree
 *
 * @param  {Object} action
 */
controlRackNodes.conditions = function(condition) {

    condition('IsPauseClicked', {
        tick: function(tick) {
            pauseButton.b3 = b3;
            pauseButton.clicking = false;
            pauseButton.on("mousedown", function() {
                pauseButton.clicking = true;
                if (!pauseButton.clicked) {
                    pauseButton.clicked = true;
                }

            });
            if (pauseButton.clicked) {
                pauseButton.clicked = false;
                return b3.SUCCESS;
            }
            if (!pauseButton.clicking) {
                pauseButton.clicked = false;
            }
            return b3.FAILURE;

        }
    });
    condition('IsPlayClicked', {
        tick: function(tick) {
            playButton.b3 = b3;
            playButton.clicking = false;
            playButton.on("mousedown", function() {
                playButton.clicking = true;
                if (!playButton.clicked) {
                    playButton.clicked = true;
                }

            });
            if (playButton.clicked) {
                playButton.clicked = false;
                return b3.SUCCESS;
            }
            if (!playButton.clicking) {
                playButton.clicked = false;
            }
            return b3.FAILURE;

        }
    });
    condition('IsFullScreenClicked', {
        tick: function(tick) {
            fullScreen.b3 = b3;
            fullScreen.clicking = false;
            fullScreen.on("mousedown", function() {
                fullScreen.clicking = true;
                if (!fullScreen.clicked) {
                    fullScreen.clicked = true;
                    console.log('full clicked');
                }

            });
            if (fullScreen.clicked) {
                fullScreen.clicked = false;
                return b3.SUCCESS;
            }
            if (!fullScreen.clicking) {
                fullScreen.clicked = false;
            }
            return b3.FAILURE;

        }
    });
    condition('IsCCClicked', {
        tick: function(tick) {
            cc.b3 = b3;
            cc.clicking = false;
            cc.on("mousedown", function() {
                cc.clicking = true;
                if (!cc.clicked) {
                    cc.clicked = true;
                    console.log('cc clicked');
                }

            });
            if (cc.clicked) {
                cc.clicked = false;
                return b3.SUCCESS;
            }
            if (!cc.clicking) {
                cc.clicked = false;
            }
            return b3.FAILURE;

        }
    });
    condition('IsMuteClicked', {
        tick: function(tick) {
            muteoff.b3 = b3;
            muteoff.clicking = false;
            muteoff.on("mousedown", function() {
                muteoff.clicking = true;
                if (!muteoff.clicked) {
                    muteoff.clicked = true;
                    muteoff.visible = false;
                    muteon.visible = true;
                    videoDom.muted= true;
                }

            });
            if (muteoff.clicked) {
                muteoff.clicked = false;
                return b3.SUCCESS;
            }
            if (!muteoff.clicking) {
                muteoff.clicked = false;
            }
            return b3.FAILURE;

        }
    });
    condition('IsUnMuteClicked', {
        tick: function(tick) {
            muteon.b3 = b3;
            muteon.clicking = false;
            muteon.on("mousedown", function() {
                muteon.clicking = true;
                if (!muteoff.clicked) {
                    muteon.clicked = true;
                    muteoff.visible = true;
                    muteon.visible = false;
                    videoDom.muted= false;
                }

            });
            if (muteon.clicked) {
                muteon.clicked = false;
                return b3.SUCCESS;
            }
            if (!muteoff.clicking) {
                muteoff.clicked = false;
            }
            return b3.FAILURE;

        }
    });
}
