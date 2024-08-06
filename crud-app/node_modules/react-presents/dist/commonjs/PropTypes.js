'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideContext = exports.presentationContext = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presentationContext = exports.presentationContext = _propTypes2.default.shape({
  getSlideIndex: _propTypes2.default.func.isRequired,
  getSlideMetadata: _propTypes2.default.func.isRequired,
  getStepIndex: _propTypes2.default.func.isRequired,
  goBack: _propTypes2.default.func.isRequired,
  goForward: _propTypes2.default.func.isRequired,
  goToSlide: _propTypes2.default.func.isRequired,
  isAtBeginning: _propTypes2.default.func.isRequired,
  isAtEnd: _propTypes2.default.func.isRequired,
  setPluginProps: _propTypes2.default.func.isRequired
});

var slideContext = exports.slideContext = _propTypes2.default.shape({
  getNumSteps: _propTypes2.default.func.isRequired,
  registerStep: _propTypes2.default.func.isRequired,
  setNumSteps: _propTypes2.default.func.isRequired
});