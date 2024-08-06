'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass(Step, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var slide = this.context.slide;
      var _props = this.props,
          index = _props.index,
          maxIndex = _props.maxIndex;


      if (maxIndex < Infinity) {
        slide.registerStep(maxIndex);
      } else {
        slide.registerStep(index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _context = this.context,
          pluginProps = _context.pluginProps,
          presentation = _context.presentation;
      var _props2 = this.props,
          children = _props2.children,
          exact = _props2.exact,
          index = _props2.index,
          maxIndex = _props2.maxIndex;
      var isPresenterMode = pluginProps.isPresenterMode;

      var stepIndex = presentation.getStepIndex();

      var match = void 0;

      if (exact) {
        match = stepIndex === index;
      } else {
        match = stepIndex >= index && stepIndex <= maxIndex;
      }

      if (match) {
        return children;
      } else if (isPresenterMode) {
        return _react2.default.createElement(
          'div',
          { style: { opacity: 0.35 } },
          children
        );
      } else {
        return null;
      }
    }
  }]);

  return Step;
}(_react.Component);

Step.contextTypes = {
  pluginProps: _propTypes2.default.object.isRequired,
  presentation: _PropTypes.presentationContext.isRequired,
  slide: _PropTypes.slideContext.isRequired
};
Step.defaultProps = {
  maxIndex: Infinity
};
exports.default = Step;
process.env.NODE_ENV !== "production" ? Step.propTypes = {
  children: _propTypes2.default.node.isRequired,
  exact: _propTypes2.default.bool,
  index: _propTypes2.default.number.isRequired,
  maxIndex: _propTypes2.default.number.isRequired
} : void 0;