'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Meta Item for `MeidaBoxInfo`
 *
 */
var MediaBoxInfoMeta = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxInfoMeta, _React$Component);

    function MediaBoxInfoMeta() {
        (0, _classCallCheck3.default)(this, MediaBoxInfoMeta);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxInfoMeta.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxInfoMeta)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxInfoMeta, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                extra = _props.extra,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'extra', 'className']);

            var cls = (0, _classnames2.default)({
                'qtui-media-box__info__meta': true,
                'qtui-media-box__info__meta_extra': extra
            }, className);

            return _react2.default.createElement(
                'li',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxInfoMeta;
}(_react2.default.Component);

MediaBoxInfoMeta.propTypes = {
    /**
     * add left margin to indicate extra
     *
     */
    extra: _react2.default.PropTypes.bool
};
MediaBoxInfoMeta.defaultProps = {
    extra: false
};
exports.default = MediaBoxInfoMeta;
;
module.exports = exports['default'];