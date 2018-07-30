define("app/containers/App.jsx",function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=function(e,t,o){for(var n=!0;n;){var r=e,a=t,i=o;n=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,a);if(void 0!==u){if("value"in u)return u.value;var l=u.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,o=i,n=!0,u=c=void 0}},c=e("node_modules/react/react"),s=r(c),f=e("node_modules/react-addons-pure-render-mixin/index"),p=n(f),d=e("node_modules/redux/lib/index"),b=e("node_modules/react-redux/lib/index"),h=(e("node_modules/react-router/lib/index"),e("app/actions/globalVal")),v=n(h),m=e("app/components/react-qtui/index"),y=function(e){return{baseInfo:e.baseInfo,globalVal:e.globalVal}},w=function(e){return{globalAction:d.bindActionCreators(v,e)}},g=function(e){function t(e,t){a(this,o),l(Object.getPrototypeOf(o.prototype),"constructor",this).call(this,e,t),this.shouldComponentUpdate=p.shouldComponentUpdate.bind(this),this.state={baseInfoDone:!0}}i(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.globalAction;t.getBaseInfo().then(function(){return e.setState({baseInfoDone:!0})})}},{key:"render",value:function(){var e=this.props,t=e.globalVal,o=e.globalAction,n=t.showSuccess,r=t.showLoading,a=t.showError;return n.show&&setTimeout(function(){o.hideSuccess()},1500),a.show&&setTimeout(function(){o.hideError()},1500),this.state.baseInfoDone?s["default"].createElement("div",null,this.props.children,s["default"].createElement(m.Toast,{icon:"success-no-circle",show:n.show},n.text),s["default"].createElement(m.Toast,{icon:"loading",show:r}),s["default"].createElement(m.Toptips,{type:"warn",show:a.show},a.text)):s["default"].createElement(m.Toast,{icon:"loading",show:!0},"应用加载中")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){window.webappLocationFrom=location.hash}}]);var o=t;return t=b.connect(y,w)(t)||t}(c.Component);t["default"]=g,o.exports=t["default"]});