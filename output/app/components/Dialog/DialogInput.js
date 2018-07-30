define("app/components/Dialog/DialogInput.jsx",function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(e,t,n){for(var a=!0;a;){var o=e,r=t,u=n;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,r);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var s=Object.getPrototypeOf(o);if(null===s)return void 0;e=s,t=r,n=u,a=!0,l=s=void 0}},c=e("node_modules/react/react"),p=a(c),f=e("node_modules/react-addons-pure-render-mixin/index"),d=a(f),v=function(e){function t(e,n){r(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n),this.state={showClear:!!this.props.defaultValue,value:this.props.defaultValue||""},this.shouldComponentUpdate=d["default"].shouldComponentUpdate.bind(this)}return u(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(e,t){"undefined"!=typeof e.defaultValue&&(t.value=e.defaultValue,t.showClear=e.defaultValue)}},{key:"renderButtons",value:function(e){var t=e.label,n=o(e,["label"]);return p["default"].createElement("a",l({href:"javascript:"},n,{className:"dl-input-btn"}),t)}},{key:"focus",value:function(){this.refs.inputDom.focus(),console.log(this.refs.inputDom)}},{key:"inputChange",value:function(e){var t=e.target.value,n=this.props.onChange,a=void 0;a=t?{showClear:!0,value:t}:{value:t},this.setState(a),n&&n(e)}},{key:"clearInput",value:function(){var e=this.props.onChange;this.setState({showClear:!1,value:""}),e&&e({target:{value:""}})}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.button,a=e.desc,o=e.warn,r=e.readOnly,u=e.type,l="dialog-input-cell";return o&&(l+=" warn"),p["default"].createElement("div",{className:l},p["default"].createElement("div",{className:"dialog-input"},p["default"].createElement("div",{className:"dl-input-body"},p["default"].createElement("input",{ref:"inputDom",className:"qtui-input",value:this.state.value,placeholder:t,autoFocus:"true",onChange:this.inputChange.bind(this),readOnly:r,type:u||"text"}),p["default"].createElement("span",{className:"qtui-icon-clear",style:{display:this.state.showClear?"block":"none"},onClick:this.clearInput.bind(this)})),n&&this.renderButtons(n)),a&&p["default"].createElement("div",{className:"dialog-input-desc"},a))}}]),t}(c.Component);t["default"]=v,n.exports=t["default"]});