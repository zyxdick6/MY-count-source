define("app/components/react-qtui/components/loadmore/loadmore",function(e,o,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=e("node_modules/babel-runtime/helpers/extends"),d=l(a),n=e("node_modules/babel-runtime/helpers/defineProperty"),s=l(n),u=e("node_modules/babel-runtime/helpers/objectWithoutProperties"),r=l(u),i=e("node_modules/react/react"),m=l(i),c=e("node_modules/prop-types/index"),p=l(c),f=e("node_modules/classnames/index"),h=l(f),_=e("app/components/react-qtui/components/icon/index"),b=l(_),w=function(e){var o=e.className,t=e.children,l=e.loading,a=e.showLine,n=e.showDot,u=r["default"](e,["className","children","loading","showLine","showDot"]),i=h["default"](s["default"]({"qtui-loadmore":!0,"qtui-loadmore_line":a,"qtui-loadmore_dot":n},o,o));return m["default"].createElement("div",d["default"]({className:i},u),l?m["default"].createElement(b["default"],{value:"loading"}):!1,m["default"].createElement("span",{className:"qtui-loadmore__tips"},t))};w.propTypes={loading:p["default"].bool,showLine:p["default"].bool,showDot:p["default"].bool},w.defaultProps={loading:!1,showLine:!1,showDot:!1},o["default"]=w,t.exports=o["default"]});