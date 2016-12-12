
//-----------------------------------------------------------------------------
// UNIT
//-----------------------------------------------------------------------------
_action('MoveToRandom', {
  tick: function(tick) {
    tick.blackboard.set('boring', 0);

    var c = tick.target.scene.planet.circumference;
    var move_area = (tick.target.role==='soldier'?
                      game.data.random_move_area_soldier:
                      game.data.random_move_area_guardian);
    move_area = move_area*(360/c);
    var delta = Math.random()*move_area*2 - move_area;
    tick.blackboard.set('position', tick.target.position+delta);

    return b3.SUCCESS;
  },
});

_action('AttackTarget', {
  tick: function(tick) {
    tick.blackboard.set('boring', 0);

    var target = tick.blackboard.get('target');
    var self = tick.target;
    if (!target || target.life <= 0) {
      tick.blackboard.set('target', null)
      tick.target.order = 'none';
      return b3.FAILURE;
    }

    if (self.attackTime < self.attackRate) {
      self.attackTime += game.time.fdelta;
    }

    while (self.attackTime >= self.attackRate) {
      if (target.$damage(self.attack, self)) {
        tick.target.order = 'none';
        tick.blackboard.set('target', null)
      }
      self.attackTime -= self.attackRate;
    }

    return b3.RUNNING;
  },
});

_action('MoveToTarget', {
  tick: function(tick) {
    tick.blackboard.set('boring', 0);

    var target = tick.blackboard.get('target');
    if (!target) return b3.FAILURE;
    
    var c = tick.target.scene.planet.circumference;
    var tpos = target.position;
    var pos = tick.target.position
    var dir = tine.angleMinDirection(pos, tpos);
    tick.target.move(dir);
    return b3.SUCCESS;
  },
});

_action('SetNearestTarget', {
  tick: function(tick) {
    tick.blackboard.set('boring', 0);
    tick.blackboard.set('target', tick.blackboard.get('nearestEnemy'));

    return b3.SUCCESS;
  },
});

_action('MoveToPosition', {
  tick: function(tick) {
    tick.blackboard.set('boring', 0);
    
    var c = tick.target.scene.planet.circumference;
    var tpos = tick.blackboard.get('position');
    var pos = tick.target.position;

    if (distance(pos, tpos, c) < tick.target.width) {
      tick.blackboard.set('position', null);
      return b3.SUCCESS;
    } else {
      var dir = tine.angleMinDirection(pos, tpos);
      tick.target.move(dir);
      return b3.RUNNING;
    }
  },
});




//-----------------------------------------------------------------------------
// COMMAND
//-----------------------------------------------------------------------------
_action('DefendWithGuardians', {
  tick: function(tick) {
    var s = tick.target;
    var target = tick.target.lastAttacker;
    var N = Math.min(game.data.defense_call, s.idleGuardians.length);
    if (N <= 0) return b3.FAILURE;

    for (var i=0; i<N; i++) {
      var c = s.idleGuardians[i];
      if (!c) break;
      c.memory.set('target', target);
      c.order = 'defend';
    }

    return b3.SUCCESS
  }
});
_action('DefendWithIdleSoldiers', {
  tick: function(tick) {
    var s = tick.target;
    var target = tick.target.lastAttacker;
    var N = Math.min(game.data.defense_call, s.idleSoldiers.length);
    if (N <= 0) return b3.FAILURE;

    for (var i=0; i<N; i++) {
      var c = s.idleSoldiers[i];
      if (!c) break;
      c.memory.set('target', target);
      c.order = 'defend';
    }

    return b3.SUCCESS
  }
});
_action('DefendWithAttackingSoldiers', {
  tick: function(tick) {
    var s = tick.target;
    var target = tick.target.lastAttacker;
    var N = Math.min(game.data.defense_call, s.attackers.length);
    if (N <= 0) return b3.FAILURE;

    for (var i=0; i<N; i++) {
      var c = s.attackers[i];
      if (!c) break;
      c.memory.set('target', target);
      c.order = 'defend';
    }

    return b3.SUCCESS
  }
});
_action('AttackWithIdleSoldiers', {
  tick: function(tick) {
    var s = tick.target;

    var structures = tick.target.scene.playerStructures;
    var creatures = tick.target.scene.playerCreatures;
    var selected;

    if (structures.length === 0) {
      selected = creatures;
    } else if (creatures.length === 0) {
      selected = structures;
    } else {
      selected = (Math.random() < 0.5?structures:creatures);
    }
    
    var target = selected[parseInt(Math.random()*selected.length)];

    if (target.structure && target.status === 'spawning') {
      return b3.FAILURE;
    }

    var N = Math.min(game.data.attack_call, s.idleSoldiers.length);
    if (N <= 0) return b3.FAILURE;

    for (var i=0; i<N; i++) {
      var c = s.idleSoldiers[i];
      if (!c) break;
      c.memory.set('target', target);
      c.order = 'attack';
    }

    return b3.SUCCESS;
  }
});