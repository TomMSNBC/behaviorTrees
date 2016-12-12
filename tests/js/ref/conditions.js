
//-----------------------------------------------------------------------------
// UNIT
//-----------------------------------------------------------------------------
_condition('AmIBored', {
  tick: function(tick) {
    var boredAt = game.data.bored_at + Math.random()*game.data.bored_var*2 - game.data.bored_var;
    if (tick.blackboard.get('boring') > boredAt) {
      return b3.SUCCESS;
    }

    return b3.FAILURE;
  }
});

_condition('HavaIATarget', {
  tick: function(tick) {
    var target = tick.blackboard.get('target');
    if (target && target.life > 0) {
      return b3.SUCCESS;
    }
    return b3.FAILURE;
  },
});

_condition('CanIAttackTarget', {
  tick: function(tick) {
    // var target = tick.blackboard.get('nearestEnemy');
    // var distance = tick.blackboard.get('nearestEnemyDistance');
    var target = tick.blackboard.get('target');
    var distance = DISTANCE(tick.target.position, target.position, 
        tick.target.scene.planet.circumference);
    
    if (target && distance < tick.target.attackDistance) {
      return b3.SUCCESS;
    } else {
      return b3.FAILURE;
    }
  },
});

_condition('ThereIsAnEnemyVisible', {
  tick: function(tick) {
    var target = tick.blackboard.get('nearestEnemy');
    var distance = tick.blackboard.get('nearestEnemyDistance');
    
    if (target && distance < tick.target.awareDistance) {
      return b3.SUCCESS;
    } else {
      return b3.FAILURE;
    }
  },
});

_condition('HaveIAPosition', {
  tick: function(tick) {
    if (tick.blackboard.get('position')) {
      return b3.SUCCESS;
    }
    return b3.FAILURE;
  },
});


//-----------------------------------------------------------------------------
// COMMAND
//-----------------------------------------------------------------------------

_condition('AreNestsBeignAttacked', {
  tick: function(tick) {
    var s = tick.target;
    if (s.life > 0 && s.lastAttacker && s.lastAttacker.life > 0) {
      return b3.SUCCESS;
    }
    return b3.FAILURE;
  }
});
_condition('ThereAreEnoughDefense', {
  tick: function(tick) {
    var s = tick.target;

    if (s.defenders.length >= s.maxGuardians) {
      return b3.SUCCESS
    }
    return b3.FAILURE;
  }
});
_condition('ThereAreEnoughAttackingMaterial', {
  tick: function(tick) {
    if (tick.target.idleSoldiers.length >= game.data.attack_call) {
      return b3.SUCCESS;
    }
    return b3.FAILURE;
  }
});
_condition('ThereAreHumans', {
  tick: function(tick) {
    var s = tick.target.scene;
    if (s.playerStructures.length > 0 || s.playerCreatures.length > 0) {
      return b3.SUCCESS;
    } 
    return b3.FAILURE;
  }
});
