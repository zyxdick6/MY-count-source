define("app/components/Dialog/DialogTitle.jsx",function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=function(e,t,o){for(var n=!0;n;){var r=e,i=t,u=o;n=!1,null===r&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,i);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,o=u,n=!0,a=c=void 0}},l=e("node_modules/react/react"),c=n(l),f=e("node_modules/react-addons-pure-render-mixin/index"),p=n(f),s=function(e){function t(e,o){r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,o),this.shouldComponentUpdate=p["default"].shouldComponentUpdate.bind(this)}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.children;return c["default"].createElement("div",{className:"dialog-title"},e)}}]),t}(l.Component);t["default"]=s,o.exports=t["default"]});