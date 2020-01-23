'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.CITIZENSHIP_CONTEXT_V1_URL,
  require('../contexts/citizenship-v1.jsonld'));
