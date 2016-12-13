'use strict';

var controlRackNodes = {};


controlRackNodes.init = function(action, condition) {
    controlRackNodes.actions(action);
    controlRackNodes.conditions(condition);
}

controlRackNodes.actions = function(action) {
    action('SwitchToPlay', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Switching to play');
            playButton.visible = true;
            pauseButton.visible = false;
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
            return b3.SUCCESS;
        }
    });
    action('SwitchToFullScreen', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Switching to full Screen');
            return b3.SUCCESS;
        }
    });
    action('TurnOnCC', {
        tick: function(tick) {
            // tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' Turning on Closed Captions');
            return b3.SUCCESS;
        }
    });       
    
}


controlRackNodes.conditions = function(condition) {

    condition('IsPauseClicked', {
        tick: function(tick) {
            pauseButton.b3 = b3;
            pauseButton.clicking = false;
            pauseButton.on("mousedown", function() {
                pauseButton.clicking = true;
                if (!pauseButton.clicked) {
                    pauseButton.clicked = true;
                    console.log('mouse down');
                }

            });
            if (pauseButton.clicked) {
                pauseButton.clicked = false;
                console.log('clicked...');
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
                    console.log('play clicked');
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
}

