/**
 * @module  behavior3
 */

/**
 * Represent a tick (update) which holds context for the tree traversal.
 * 
 * @class  Tick
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tick = (function () {
  /**
   * @class  Tick
   * @constructor
   * @param  {BehaviorTree} tree The behavior tree.
   * @param  {*} target Target object of the tick.
   * @param  {Blackboard} blackboard The associated blackboard.
   */

  function Tick(tree, target, blackboard) {
    _classCallCheck(this, Tick);

    /**
     * The behavior tree.
     * @property {BehaviorTree} tree
     */
    this.tree = tree;

    /**
     * Store currentl opened nodes.
     * @property {Array} openNodes
     */
    this.openNodes = [];

    /**
     * Count the opened nodes.
     * @property {Number} nodeCount
     */
    this.nodeCount = 0;

    /**
     * The target object of the tick.
     * @property {*} target
     */
    this.target = target;

    /**
     * The blackboard context of the tick.
     * @property {Blackboard} blackboard
     */
    this.blackboard = blackboard;
  }

  /**
   * Push the node to opened nodes.
   * 
   * @method  enterNode
   * @param  {BaseNode} node The node to open.
   */

  _createClass(Tick, [{
    key: "enterNode",
    value: function enterNode(node) {
      this.nodeCount += 1;
      this.openNodes.push(node);
    }

    /**
     * Close the first node.
     *
     * @method  closeNode
     */
  }, {
    key: "closeNode",
    value: function closeNode(node) {
      this.openNodes.pop();
    }

    // may be extended for debug
  }, {
    key: "openNode",
    value: function openNode(node) {}
  }, {
    key: "tickNode",
    value: function tickNode(node) {}
  }, {
    key: "exitNode",
    value: function exitNode(node) {}
  }]);

  return Tick;
})();

exports["default"] = Tick;
module.exports = exports["default"];