define("app/components/react-qtui/components/form/select",function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=e("node_modules/babel-runtime/helpers/defineProperty"),n=a(r),u=e("node_modules/babel-runtime/helpers/objectWithoutProperties"),o=a(u),s=e("node_modules/babel-runtime/helpers/extends"),d=a(s),i=e("node_modules/babel-runtime/core-js/object/get-prototype-of"),p=a(i),c=e("node_modules/babel-runtime/helpers/classCallCheck"),m=a(c),f=e("node_modules/babel-runtime/helpers/createClass"),b=a(f),_=e("node_modules/babel-runtime/helpers/possibleConstructorReturn"),h=a(_),y=e("node_modules/babel-runtime/helpers/inherits"),v=a(y),C=e("node_modules/react/react"),j=a(C),k=e("node_modules/prop-types/index"),x=a(k),P=e("node_modules/classnames/index"),g=a(P),N=function(e){function t(){return m["default"](this,t),h["default"](this,(t.__proto__||p["default"](t)).apply(this,arguments))}return v["default"](t,e),b["default"](t,[{key:"renderData",value:function(e){return e.map(function(e,t){return j["default"].createElement("option",d["default"]({key:t,value:e.value},e),e.label)})}},{key:"render",value:function(){var e=this.props,t=e.className,l=e.data,a=e.children,r=o["default"](e,["className","data","children"]),u=g["default"](n["default"]({"qtui-select":!0},t,t));return j["default"].createElement("select",d["default"]({className:u},r),l.length>0?this.renderData(l):a)}}]),t}(C.Component);N.propTypes={data:x["default"].array},N.defaultProps={data:[]},t["default"]=N,l.exports=t["default"]});