'use strict';


var treeLoader = {};

var tree = {};
var ai = {};

/**
 * Action node wrapper for loadNode
 *
 * @param  {String} name
 * @param  {Object} properties
 */
treeLoader.loadAction = function(name, properties) {
    return treeLoader.loadNode(name, properties, b3.Action);
}

/**
 * Condition node wrapper for loadNode
 *
 * @param  {String} name
 * @param  {Object} properties
 */
treeLoader.loadCondition = function(name, properties) {
    return treeLoader.loadNode(name, properties, b3.Condition);
}

/**
 * Load the custom node definition and functionality
 *
 * @param  {String} name
 * @param  {Object} properties
 * @param  {String} type
 */
treeLoader.loadNode = function(name, properties, type) {
    var node = b3.Class(type);
    var nodeProto = node.prototype;
    nodeProto.name = name;
    for (var prop in properties) {
        nodeProto[prop] = properties[prop];
    }
    tree[name] = node;
    return node;
}

/**
 * Init the module
 */
treeLoader.init = function() {
    
    ai = {'guy': new b3.BehaviorTree()};
    $.getJSON( "/tests/config/openDoor.json" )
      .done(function( data ) {
        openDoorNodes.init(treeLoader.loadAction, treeLoader.loadCondition);
        ai.guy.load(data,tree);
      })
      .fail(function( jqxhr, textStatus, error ) {
        var err = {
            url: playlistUrl,
            status: textStatus,
            error: error
        };
        console.error(err);
        })    
    
}

treeLoader.ai = function() {return ai};


// module.exports = {
//     ai: function() {return ai;},
//     init: init
// };
