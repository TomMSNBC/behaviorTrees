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

            return b3.SUCCESS;
        }
    });
    action('openDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' is opening the door');
            return b3.SUCCESS;
        }
    });
    action('smashDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' is smashing the door');

            return b3.SUCCESS;
        }
    });
    action('walkThroughDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' is walking through the door');

            return b3.SUCCESS;
        }
    });
    action('closeDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' is closing the door');

            return b3.SUCCESS;
        }
    });
}


controlRackNodes.conditions = function(condition) {
    condition('canIunlockTheDoor', {
        tick: function(tick) {
            var skill = tick.blackboard.get('lockpick-level');
            let name = tick.blackboard.get('name');
            if (!skill) {
                skill = 0;
                tick.blackboard.set('lockpick-level', skill);
            }

            if (skill > 5) {
                console.log(name + ' picked the lock');
                return b3.SUCCESS;
            }

            console.log(name + ' could not pick the lock');

            skill += 1;
            tick.blackboard.set('lockpick-level', skill);
            return b3.FAILURE;
        }
    });
    condition('IsDoorUnlocked', {
        tick: function(tick) {
            let name = tick.blackboard.get('name');
            var locked = tick.blackboard.get('locked');
            if (!locked) {
                return b3.SUCCESS;
            }
            console.log(name + ' notices the door is locked');
            return b3.FAILURE;
        }
    });

    condition('IsPauseClicked', {
        tick: function(tick) {
            /*var point = agent.globalToLocal(stage.mouseX, stage.mouseY);
                if (tick.target.hitTest(point.x, point.y)) {
                return b3.SUCCESS;
                } else {
                return b3.FAILURE;
            }
            */
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
}

