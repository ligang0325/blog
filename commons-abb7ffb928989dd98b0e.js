/*! For license information please see commons-abb7ffb928989dd98b0e.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{4184:function(e,t){var a;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&e.push(l)}}else if("object"===c){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var r in a)i.call(a,r)&&a[r]&&e.push(r)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},2143:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var i=a(7294),n=a(888),c=a(5086);const l=c.default.div.withConfig({displayName:"modeToggle__ToggleWrapper",componentId:"sc-17lvwmu-0"})(["display:flex;justify-content:space-between;align-items:center;width:10rem;"]);var r=e=>{console.log(e);const{0:t,1:a}=(0,i.useState)();(0,i.useEffect)((()=>{var e;a(null!==(e=sessionStorage.getItem("THEME"))&&void 0!==e?e:"light"),document.body.className=t}),[t]);return i.createElement(l,null,i.createElement(n.Z,{icons:{checked:i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjk1MTkyNzU2OTcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg4MTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTcxNSAyNjdjMTM1LjMxIDAgMjQ1IDEwOS42OSAyNDUgMjQ1Uzg1MC4zMSA3NTcgNzE1IDc1N0gzMDlDMTczLjY5IDc1NyA2NCA2NDcuMzEgNjQgNTEyczEwOS42OS0yNDUgMjQ1LTI0NWg0MDZ6IG0wIDEwMGMtODAuMDgxIDAtMTQ1IDY0LjkxOS0xNDUgMTQ1czY0LjkxOSAxNDUgMTQ1IDE0NSAxNDUtNjQuOTE5IDE0NS0xNDUtNjQuOTE5LTE0NS0xNDUtMTQ1eiIgZmlsbD0iIzUxNTE1MSIgcC1pZD0iODgxMSI+PC9wYXRoPjwvc3ZnPg==",width:"50",height:"50",alt:"关",style:{pointerEvents:"none"}}),unchecked:i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjk1MTkyNzgyMzg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMTQ1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik03MTUgMjY3YzEzNS4zMSAwIDI0NSAxMDkuNjkgMjQ1IDI0NVM4NTAuMzEgNzU3IDcxNSA3NTdIMzA5QzE3My42OSA3NTcgNjQgNjQ3LjMxIDY0IDUxMnMxMDkuNjktMjQ1IDI0NS0yNDVoNDA2ek0zMDkgMzY3Yy04MC4wODEgMC0xNDUgNjQuOTE5LTE0NSAxNDVzNjQuOTE5IDE0NSAxNDUgMTQ1IDE0NS02NC45MTkgMTQ1LTE0NS02NC45MTktMTQ1LTE0NS0xNDV6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSIxMDE0NiI+PC9wYXRoPjwvc3ZnPg==",width:"50",height:"50",alt:"开",style:{pointerEvents:"none"}})},checked:"dark"===t,onChange:e=>{return t=e.target.checked?"dark":"light",a(t),sessionStorage.setItem("THEME",t),void(document.body.className=t);var t},title:"切换主题"}),i.createElement("div",null,"暗黑模式"))},o=a(1883);const d=c.default.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-h3vvmy-0"})(["width:100%;height:4em;background-color:var(--bg);padding:0 1em;position:sticky;top:0;z-index:500;display:flex;align-items:center;box-sizing:border-box;transition-duration:.3s;transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);"]),s=c.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"sc-h3vvmy-1"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:70%;"]),u=c.default.div.withConfig({displayName:"header__LeftNav",componentId:"sc-h3vvmy-2"})(["display:flex;justify-content:space-between;align-items:center;"]),h=c.default.div.withConfig({displayName:"header__CenterNav",componentId:"sc-h3vvmy-3"})(["border-radius:calc(4em / 2);border:1px solid #eaecf0;width:40em;height:100%;padding:0 1em;background-color:var(--bg);display:flex;align-items:center;box-sizing:border-box;"]),g=c.default.input.withConfig({displayName:"header__CenterNavInput",componentId:"sc-h3vvmy-4"})(["flex:1;height:100%;background-color:var(--bg);"]),M=c.default.div.withConfig({displayName:"header__RightNav",componentId:"sc-h3vvmy-5"})(["display:grid;place-content:space-between center;grid-template:100% / repeat(3,1fr);gap:1em;"]);var y=e=>{let{children:t}=e;const{0:a,1:n}=(0,i.useState)(0),c=()=>{n(window.scrollY)};return(0,i.useEffect)((()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)})),[]),i.createElement(d,{className:a>0?"shadow-nav":""},i.createElement(s,null,i.createElement(u,null,i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjk1MjYzNjIwNzA4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2MzQ2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik0xNDQgNTUybDMzLjYgMzMuNiA1NC40LTU0LjR2Mjk5LjJoNTYwVjUzMS4ybDU0LjQgNTQuNCAzMy42LTMzLjYtMzY4LTM2OC0zNjggMzY4eiBtNDA4IDIzMC40aC04MFY2MTQuNGMwLTIyLjQgMTcuNi00MCA0MC00MHM0MCAxNy42IDQwIDQwdjE2OHogbTE5MiAwaC0xNDRWNjE0LjRjMC00OC00MC04OC04OC04OHMtODggNDAtODggODh2MTY4aC0xNDRWNDgzLjJMNTEyIDI1MS4ybDIzMiAyMzJ2Mjk5LjJ6IiBmaWxsPSIjNzA3MDcwIiBwLWlkPSIxNjM0NyI+PC9wYXRoPjwvc3ZnPg==",width:"50",height:"50",alt:"首页"}),i.createElement(o.Link,{to:"/"},"Home")),i.createElement(h,null,i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjk1MjczNTA1NDM4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MzA5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik0xOTIgNDgwYTI1NiAyNTYgMCAxIDEgNTEyIDAgMjU2IDI1NiAwIDAgMS01MTIgMG02MzEuNzc2IDM2Mi40OTZsLTE0My4yLTE0My4xNjhBMzE4LjQ2NCAzMTguNDY0IDAgMCAwIDc2OCA0ODBjMC0xNzYuNzM2LTE0My4yNjQtMzIwLTMyMC0zMjBTMTI4IDMwMy4yNjQgMTI4IDQ4MHMxNDMuMjY0IDMyMCAzMjAgMzIwYTMxOC4wMTYgMzE4LjAxNiAwIDAgMCAxODQuMTYtNTguNTkybDE0Ni4zMzYgMTQ2LjM2OGMxMi41MTIgMTIuNDggMzIuNzY4IDEyLjQ4IDQ1LjI4IDAgMTIuNDgtMTIuNTEyIDEyLjQ4LTMyLjc2OCAwLTQ1LjI4IiBmaWxsPSIjOTc5Nzk3IiBwLWlkPSIxNzMxMCI+PC9wYXRoPjwvc3ZnPg==",width:"30",height:"30",alt:"搜索",style:{pointerEvents:"none"}}),i.createElement(g,{type:"search",placeholder:"Search"})),i.createElement(M,null,i.createElement("div",null,"笔记"),i.createElement("div",null,"占位"),i.createElement("div",null,"占位"))))};var v=e=>{let{location:t,title:a,children:n}=e;const c="/blog/"===t.pathname;return i.createElement("div",null,i.createElement(y,null),i.createElement("div",{className:"global-wrapper","data-is-root-path":c},i.createElement("main",null,n),i.createElement("footer",{style:{display:"flex"}},i.createElement("div",{style:{marginRight:"3em"}},"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")),i.createElement(r,null))))}},9357:function(e,t,a){"use strict";var i=a(7294),n=a(1883);t.Z=e=>{var t,a,c;let{description:l,title:r,children:o}=e;const{site:d}=(0,n.useStaticQuery)("2841359383"),s=l||d.siteMetadata.description,u=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return i.createElement(i.Fragment,null,i.createElement("title",null,u?r+" | "+u:r),i.createElement("meta",{name:"description",content:s}),i.createElement("meta",{property:"og:title",content:r}),i.createElement("meta",{property:"og:description",content:s}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a||null===(c=a.social)||void 0===c?void 0:c.twitter)||""}),i.createElement("meta",{name:"twitter:title",content:r}),i.createElement("meta",{name:"twitter:description",content:s}),o)}},5224:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(7294),c=(i=n)&&i.__esModule?i:{default:i};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},888:function(e,t,a){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),c=a(7294),l=h(c),r=h(a(4184)),o=h(a(5697)),d=h(a(5224)),s=h(a(6963)),u=a(1520);function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=(t.icons,function(e,t){var a={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}(t,["className","icons"])),c=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",i({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.Z=g,g.displayName="Toggle",g.defaultProps={icons:{checked:l.default.createElement(d.default,null),unchecked:l.default.createElement(s.default,null)}},g.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},1520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var i=e.pageX;if(void 0!==i)return{x:i,y:e.pageY}}return{x:0,y:0}}},6963:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(7294),c=(i=n)&&i.__esModule?i:{default:i};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}}}]);
//# sourceMappingURL=commons-abb7ffb928989dd98b0e.js.map