define("app/util/util",function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={getParams:function(t){var e,r,n,a={};if(t=t||window.location.href,-1==t.indexOf("?"))return a;for(r=t.slice(t.indexOf("?")+1).split("&"),n=0;n<r.length;n++)r[n]&&-1!=r[n].indexOf("=")&&(e=r[n].split("="),e[1]&&(a[e[0]]=-1!=e[1].indexOf("#")?e[1].slice(0,e[1].indexOf("#")):e[1]));return a},getParam:function(t,e){return this.getParams(e)[t]},getCurrentParam:function(t){return this.getParam(t,location.href)},setTitleBar:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];document.title=t.titleText},showToast:function(t){var e=arguments.length<=1||void 0===arguments[1]?"short":arguments[1];window.WMApp.nui.toast({text:t,duration:e})},alert:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){alert(JSON.stringify(t))}),formatTimeByInput:function(t,e){if(void 0===t&&(t=""),""!==t){var r=t.match(/\d{4}-\d{1,2}-\d{1,2}T\d{2}:\d{2}/);if(r){var n=new Date,a=r[0].split("T"),i=a[0].split("-");if(n.setFullYear(i[0]),n.setMonth(parseInt(i[1])-1),n.setDate(i[2]),a[1]){var s=a[1].split(":");n.setHours(s[0]),n.setMinutes(s[1])}return this.formatTime(n,e)}return"不合法的日期格式"}return this.formatTime(Date.now(),e)},formatTime:function(t,e){void 0===t&&(t=0);var r=Number(t),n=void 0;n=isNaN(r)?new Date(t).getTime():r;var a=new Date(n),i={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds(),W:function(t){var e;switch(t){case 0:case 1:case 2:case 3:case 4:case 5:case 6:e=t;break;default:e=""}return e}(a.getDay())};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},tarnsNoToStepStr:function(t){var e="";switch(t){case 1:e="一";break;case 2:e="二";break;case 3:e="三";break;case 4:e="四";break;case 5:e="五";break;case 6:e="六";break;case 7:e="七";break;case 8:e="八";break;case 9:e="九";break;case 10:e="十"}return"第"+e+"步"},getStringLength:function(t){return t.replace(/[\u0391-\uFFE5]/g,"aa").length},checkStringLength:function(t,e){return this.getStringLength(t)>e}};e["default"]=n,r.exports=e["default"]});