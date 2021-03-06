/* jshint browser:true */
/* global require, module */

/**
 * @fileOverview
 *
 * This file contains the Query Factory, responsible for creating and
 * returning instances of the GoAngular Query Model.
 */

'use strict';

var Model = require('./model');
var Args = require('./util/args');
var _ = require('lodash');

/**
 * queryFactory
 * @public
 * @param {Object} $querySync - Responsible for synchronizing query model
 * @param {Object} $conn - GoInstant connection
 * @returns {Function} option validation & instance creation
 */
module.exports = function queryFactory($querySync, $goKey, $conn) {

  /**
   * @public
   * @param {Object} key - GoInstant key
   */
  return function $query() {
    var a = new Args([
      { key: Args.OBJECT | Args.STRING | Args.Required },
      { room: Args.STRING | Args.Optional },
      { expr: Args.OBJECT | Args.Optional, _default: {} },
      { options: Args.OBJECT | Args.Required }
    ], arguments);

    var key = _.isObject(a.key) ? a.key : $conn.$key(a.key, a.room);
    var query = key.query(a.expr || {}, a.options);
    var sync = $querySync(query);

    return new Model($conn, key, sync, $goKey);
  };
};
