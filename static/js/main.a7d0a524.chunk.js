(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(14),o=n.n(a),i=(n(47),n(48),n(28)),s=n(6),u=n(5),j="PAUSE",b="RESUME",d="FINISH_GAME",O="MOVE_UP",l="MOVE_RIGHT",m="MOVE_DOWN",f="MOVE_LEFT",g="RESTART",h=n(37),x=function(){return{x:1,y:1,gameFinished:!1,isRunning:!0,score:0,maze:Object(h.a)(20,20,!0,v(0,1e4)),pointPositions:[]}},p=function(e,t,n,c){switch(c){case"top":return t>1&&!n[t-1][e-1].top;case"right":return e<20&&!n[t-1][e-1].right;case"bottom":return t<20&&!n[t-1][e-1].bottom;case"left":return e>1&&!n[t-1][e-1].left}},v=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x(),t=arguments.length>1?arguments[1]:void 0,n=e.x,c=e.y,r=(e.gameFinished,e.isRunning,e.score,e.maze);switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{isRunning:!1});case b:return Object(u.a)(Object(u.a)({},e),{},{isRunning:!0});case g:return x();case d:return Object(u.a)(Object(u.a)({},e),{},{gameFinished:!0,isRunning:!1});case O:return p(n,c,r,"top")?Object(u.a)(Object(u.a)({},e),{},{y:c-1}):e;case l:return p(n,c,r,"right")?Object(u.a)(Object(u.a)({},e),{},{x:n+1}):e;case m:return p(n,c,r,"bottom")?Object(u.a)(Object(u.a)({},e),{},{y:c+1}):e;case f:return p(n,c,r,"left")?Object(u.a)(Object(u.a)({},e),{},{x:n-1}):e;default:return e}},E=Object(i.a)({game:y}),N=n(29),R=n(74),k=n(77),w=n(75),M=(n(52),n(2)),S=Object(w.a)({youWon:{color:"green",fontWeight:"bold",marginBottom:"5px"},timer:{fontWeight:"500"}}),F=function(e){var t=e.gameFinished,n=e.isRunning,r=Object(s.b)(),a=S(),o=Object(c.useState)("00"),i=Object(N.a)(o,2),u=i[0],d=i[1],O=Object(c.useState)("00"),l=Object(N.a)(O,2),m=l[0],f=l[1],h=Object(c.useState)(0),x=Object(N.a)(h,2),p=x[0],v=x[1];return Object(c.useEffect)((function(){var e;return!t&&n&&(e=setInterval((function(){var e=p%60,t=Math.floor(p/60),n=1===String(e).length?"0".concat(e):e,c=1===String(t).length?"0".concat(t):t;d(n),f(c),v((function(e){return e+1}))}),1e3)),function(){return clearInterval(e)}}),[t,n,p]),Object(M.jsxs)("div",{className:"timer",children:[t&&Object(M.jsx)(R.a,{className:a.youWon,children:"YOU WON!"}),Object(M.jsxs)(R.a,{className:a.timer,children:["Time: ",m,":",u]}),!t&&Object(M.jsx)(k.a,{color:n?"secondary":"primary",onClick:function(){return r(n?{type:j}:{type:b})},children:n?"stop":"start"}),Object(M.jsx)(k.a,{onClick:function(){r({type:g}),v(0),f("00"),d("00")},children:"Restart game"})]})},_=(n(54),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.game.x})),n=Object(s.c)((function(e){return e.game.y})),r=Object(s.c)((function(e){return e.game.gameFinished})),a=Object(s.c)((function(e){return e.game.isRunning})),o=Object(s.c)((function(e){return e.game.pointPositions}));console.log(o),Object(c.useEffect)((function(){return 20===t&&20===n&&e({type:d}),document.addEventListener("keydown",i),document.addEventListener("keyup",u),function(){document.removeEventListener("keydown",i),document.removeEventListener("keyup",u)}}));var i=function e(t){j(t.key),document.removeEventListener("keydown",e)},u=function(e){document.addEventListener("keydown",i,{once:!0})},j=function(t){if(!r&&a)switch(t){case"ArrowUp":e({type:O});break;case"ArrowRight":e({type:l});break;case"ArrowDown":e({type:m});break;case"ArrowLeft":e({type:f})}};return Object(M.jsx)("div",{className:"control",children:Object(M.jsx)(F,{gameFinished:r,isRunning:a})})}),z=(n(55),function(e){var t=e.x,n=e.y;return Object(M.jsx)("div",{className:"player",style:{gridColumn:t,gridRow:n}})}),L=(n(56),function(e){var t=e.top,n=e.right,c=e.bottom,r=e.left,a=(e.x,e.y,function(e){return e?"1px solid black":"1px solid #bdbdbd"});return Object(M.jsx)("div",{className:"cell",style:{borderTop:a(t),borderRight:a(n),borderBottom:a(c),borderLeft:a(r)}})}),A=(n(57),function(){return Object(M.jsx)("div",{className:"target"})}),T=function(e){var t=e.maze;return Object(M.jsxs)(M.Fragment,{children:[t.map((function(e){return e.map((function(e){return Object(M.jsx)(L,Object(u.a)({},e))}))})),Object(M.jsx)(A,{})]})},I=(n(58),function(){var e=Object(s.c)((function(e){return e.game.x})),t=Object(s.c)((function(e){return e.game.y})),n=Object(s.c)((function(e){return e.game.maze}));return Object(M.jsxs)("div",{className:"game",children:[Object(M.jsx)(T,{maze:n}),Object(M.jsx)(z,{x:e,y:t})]})}),W=n.p+"static/media/logo.4f6bd07d.png",U=n(76),P=(n(59),function(){return Object(M.jsxs)("div",{className:"logo",children:[Object(M.jsx)("img",{src:W,id:"logo",alt:"logo"}),Object(M.jsx)("div",{className:"logo__text",children:Object(M.jsx)(R.a,{fontFamily:"Monospace",children:Object(M.jsx)(U.a,{fontFamily:"Monospace",fontSize:"h3.fontSize",m:1,children:"The Maze"})})})]})}),V=Object(i.b)(E);var B=function(){return Object(M.jsx)(s.a,{store:V,children:Object(M.jsxs)("div",{className:"app",children:[Object(M.jsx)("header",{className:"app__header",children:Object(M.jsx)(P,{})}),Object(M.jsxs)("div",{className:"app__content",children:[Object(M.jsx)(I,{}),Object(M.jsx)(_,{})]})]})})};o.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(B,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a7d0a524.chunk.js.map