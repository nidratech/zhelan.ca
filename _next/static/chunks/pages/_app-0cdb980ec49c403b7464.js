(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{2048:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var i=t(6265),r=t(7294),a=t(5893),o=t(9163),s=t(1163),c=t(9008),l=t(1516),p=t(3504),u=t(2962),d="#d5851d",m={color:{brand:d,white:"#ffffff",greyLight:"#CFD2D3",grey:"#A0ADB9",background:"#363636"},space:{navBarHeight:"5rem",small:"0.5rem",medium:"1rem",mediumLarge:"1.5rem",large:"2rem"},breakpoint:{mobile:"48rem"},borderRadius:"0.5rem"},f=t(7261),h=t(6532),g=t(7595);function v(){var e=(0,f.Z)(["  \n  #__next {\n    font-family: 'Roboto', sans-serif;\n  }\n  html, body {\n    background: #363636;\n    font-family: 'Roboto', sans-serif;\n  }\n  a {\n      color: ",";\n      transition: all 200ms;\n      text-decoration: none;\n      word-break: break-all;\n\n      :focus, :hover {\n        color: ",";\n      }\n  }\n  .page-transition-enter {\n    opacity: 0;\n  }\n  .page-transition-enter-active {\n    opacity: 1;\n    transition: opacity 200ms;\n  }\n  .page-transition-exit {\n    opacity: 1;\n  }\n  .page-transition-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"]);return v=function(){return e},e}var b=(0,o.vJ)(v(),d,(0,g._j)(.05,d)),x=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.AG,{}),(0,a.jsx)(b,{})]})},j=t(1664),y=o.ZP.div.withConfig({displayName:"BurgerMenu__Wrapper",componentId:"sc-10pxlql-0"})(["position:relative;padding-top:0.7rem;cursor:pointer;display:block;& span{background:",";display:block;position:relative;user-select:none;width:3.5rem;height:0.4rem;margin-bottom:0.7rem;transition:all ease-in-out 0.2s;}.open span:nth-child(2){opacity:0;}.open span:nth-child(3){transform:rotate(45deg);top:-1.1rem;}.open span:nth-child(1){transform:rotate(-45deg);top:1.1rem;}"],(function(e){return e.theme.color.brand})),w=function(e){var n=e.isNavbarOpen,t=e.setIsNavbarOpen;return(0,a.jsx)(y,{onClick:function(){return t(!n)},children:(0,a.jsxs)("div",{id:"menu-toggle",className:n?"open":"",children:[(0,a.jsx)("span",{children:"\xa0"}),(0,a.jsx)("span",{children:"\xa0"}),(0,a.jsx)("span",{children:"\xa0"})]})})},_=t(7863),N=o.ZP.a.withConfig({displayName:"CollapseMenu__NavItem",componentId:"pf8nbh-0"})(["display:flex;padding:0 ",";color:",";justify-content:center;min-width:7rem;:hover{color:",";}"],(function(e){return e.theme.space.medium}),(function(e){var n=e.isActive,t=e.theme;return n?t.color.brand:t.color.grey}),(function(e){var n=e.isActive,t=e.theme;return(0,g._j)(.05,n?t.color.brand:t.color.grey)})),k=(0,o.ZP)(_.animated.div).withConfig({displayName:"CollapseMenu__CollapseWrapper",componentId:"pf8nbh-1"})(["background:",";position:fixed;top:4.5rem;left:0;right:0;z-index:999;"],(function(e){var n=e.theme;return(0,g._j)(.05,n.color.background)})),C=o.ZP.ul.withConfig({displayName:"CollapseMenu__NavLinks",componentId:"pf8nbh-2"})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;justify-content:center;@media (min-width:","){display:none;}"],(function(e){return e.theme.breakpoint.mobile})),O=function(e){var n=e.isNavbarOpen,t=e.setIsNavbarOpen,i=(0,s.useRouter)().pathname,o=(0,r.useRef)(null),c=(0,_.useTransition)(n,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}});return(0,r.useEffect)((function(){var e=document.querySelector("#menu-toggle"),i=function(i){var r;!n||null!==o&&void 0!==o&&null!==(r=o.current)&&void 0!==r&&r.contains(i.target)||null!==e&&void 0!==e&&e.contains(i.target)||t(!1)};return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}}),[o,n]),(0,a.jsx)(a.Fragment,{children:c((function(e,n){return n&&(0,a.jsx)(k,{ref:o,style:e,children:(0,a.jsxs)(C,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(j.default,{href:"/",passHref:!0,children:(0,a.jsx)(N,{as:"a",title:"Home",onClick:function(){return t(!1)},isActive:"/"===i,children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(j.default,{href:"/about",passHref:!0,children:(0,a.jsx)(N,{as:"a",title:"About",onClick:function(){return t(!1)},isActive:"/About"===i,children:"About"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(j.default,{href:"/puppies",passHref:!0,children:(0,a.jsx)(N,{as:"a",title:"Puppies",onClick:function(){return t(!1)},isActive:"/Puppies"===i,children:"Puppies"})})})]})})}))})},P=o.ZP.a.withConfig({displayName:"Navbar__NavItem",componentId:"sc-21zoc0-0"})(["display:flex;padding:0 ",";color:",";align-items:center;transition:all ",";:hover{color:",";}@media (max-width:","){padding:0;}"],(function(e){return e.theme.space.medium}),(function(e){var n=e.isActive,t=e.theme;return n?t.color.brand:t.color.grey}),(function(e){return e.theme.transitionTime}),(function(e){var n=e.isActive,t=e.theme;return n?(0,g._j)(.05,t.color.brand):t.color.brand}),(function(e){return e.theme.breakpoint.mobile})),I=o.ZP.nav.withConfig({displayName:"Navbar__NavBar",componentId:"sc-21zoc0-1"})(["position:fixed;width:100%;top:0;left:0;z-index:1;"]),A=o.ZP.div.withConfig({displayName:"Navbar__FlexContainer",componentId:"sc-21zoc0-2"})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ",";height:",";@media (max-width:","){padding:",";}"],(function(e){return e.theme.space.medium}),(function(e){return e.theme.space.navBarHeight}),(function(e){return e.theme.breakpoint.mobile}),(function(e){var n=e.theme;return"0 ".concat(n.space.small)})),Z=o.ZP.ul.withConfig({displayName:"Navbar__NavLinks",componentId:"sc-21zoc0-3"})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;@media (max-width:","){display:none;}"],(function(e){return e.theme.breakpoint.mobile})),H=o.ZP.div.withConfig({displayName:"Navbar__BurgerWrapper",componentId:"sc-21zoc0-4"})(["margin:auto 0;@media (min-width:","){display:none;}"],(function(e){return e.theme.breakpoint.mobile})),z=function(e){var n=e.isNavbarOpen,t=e.setIsNavbarOpen,i=(0,s.useRouter)().pathname;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I,{children:(0,a.jsxs)(A,{children:[(0,a.jsx)(j.default,{href:"/",passHref:!0,children:(0,a.jsx)(P,{as:"a",title:"Zhelan Cardigans","aria-label":"Zhelan Cardigans",children:(0,a.jsx)("img",{src:"images/nav-icon.png"})})}),(0,a.jsxs)(Z,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(j.default,{href:"/",passHref:!0,children:(0,a.jsx)(P,{as:"a",title:"Home",isActive:"/"===i,children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(j.default,{href:"/about",passHref:!0,children:(0,a.jsx)(P,{as:"a",title:"About",isActive:"/about"===i,children:"About"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(j.default,{href:"/puppies",passHref:!0,children:(0,a.jsx)(P,{as:"a",title:"Puppies",isActive:"/puppies"===i,children:"Puppies"})})})]}),(0,a.jsx)(H,{children:(0,a.jsx)(w,{isNavbarOpen:n,setIsNavbarOpen:t})})]})}),(0,a.jsx)(O,{isNavbarOpen:n,setIsNavbarOpen:t})]})};t(9878);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}(new Date).getFullYear();s.default.events.on("routeChangeComplete",(function(){l.ZP.pageview("".concat(window.location.pathname).concat(window.location.search))}));var B=o.ZP.div.withConfig({displayName:"_app__MainLayoutContainer",componentId:"sc-9p1pqp-0"})(["display:grid;grid-template-rows:1fr min-content;min-height:100vh;"]),L=o.ZP.main.withConfig({displayName:"_app__StyledMain",componentId:"sc-9p1pqp-1"})(["padding-top:",";"],(function(e){return e.theme.space.navBarHeight})),T=function(e){var n=e.Component,t=e.pageProps,i=e.router,s=(0,r.useState)(!1),d=s[0],f=s[1];return(0,r.useEffect)((function(){l.ZP.initialize("UA-69470561-11")}),[]),(0,a.jsxs)(o.f6,{theme:m,children:[(0,a.jsx)(u.lX,{openGraph:{site_name:"Zhelan Cardigans",type:"website",locale:"en_US",images:[{url:"https://www.zhelan.ca/images/feature.png",width:405,height:405,alt:"Zhelan Cardigans"}]}}),(0,a.jsxs)(c.default,{children:[(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,a.jsx)(x,{}),(0,a.jsxs)(B,{children:[(0,a.jsx)(z,{isNavbarOpen:d,setIsNavbarOpen:f}),(0,a.jsx)(L,{children:(0,a.jsx)(p.PageTransition,{timeout:200,classNames:"page-transition",skipInitialTransition:!0,children:(0,r.createElement)(n,D(D({},t),{},{key:i.route}))})})]})]})}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2048)}])},4453:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,821,433,558],(function(){return n(6363),n(2441)}));var t=e.O();_N_E=t}]);