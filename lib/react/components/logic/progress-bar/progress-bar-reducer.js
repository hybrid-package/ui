'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({
  percent: 0,
  progressInterval: null,
  animationTimeout: null,
  loading: 0,
  style: {}
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'PROGRESS_BAR_SHOW':
      return state.merge({
        loading: state.get('loading') + 1
      });
    case 'PROGRESS_BAR_HIDE':
      return state.merge({
        loading: state.get('loading') > 0 ? state.get('loading') - 1 : 0,
        percent: 0
      });
    case 'PROGRESS_BAR_RESET':
      return state.merge({
        loading: 0,
        percent: 0
      });
    case 'PROGRESS_BAR_LAUNCH':
      return state.merge({
        progressInterval: action.payload.progressInterval,
        percent: action.payload.percent
      });
    case 'PROGRESS_BAR_SIMULATE':
      return state.merge({
        percent: action.payload.percent,
        progressInterval: action.payload.progressInterval,
        animationTimeout: action.payload.animationTimeout
      });
    default:
      return state;
  }
};