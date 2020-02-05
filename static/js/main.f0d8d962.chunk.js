(window["webpackJsonpreact-ui"]=window["webpackJsonpreact-ui"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),s=a(14),l=a(11),o=a(4),u=a(5),m=a(10),f=a(8),p=a(1),h=a(9),d=(a(30),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={open:!1},a.open=a.open.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"open",value:function(e){e.preventDefault(),this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){var e=this.state.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"main-nav"},r.a.createElement("button",{className:e?"open-nav open":"open-nav",onClick:this.open},r.a.createElement("i",{className:"fas fa-bars button-icon icon-open"}),r.a.createElement("i",{className:"fas fa-times button-icon icon-close"})),r.a.createElement("div",{className:e?"link-container open":"link-container"},r.a.createElement("div",{className:e?"bg-ball open":"bg-ball"}),r.a.createElement("div",{className:"flex-container full-height-centered column"},r.a.createElement("div",{className:"app-links"},r.a.createElement(s.b,{className:"main-nav-item",to:"/01"},"WIP: IoT navigation"),r.a.createElement(s.b,{className:"main-nav-item",to:"/02"},"WIP: Quiz App")),r.a.createElement("div",{className:"info-links"},r.a.createElement("a",{className:"main-nav-item",href:"https://www.jannehuotari.fi/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-user-circle"})," Creator"),r.a.createElement("a",{className:"main-nav-item",href:"https://github.com/jannehuo/react-ui-stuff",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})," GitHub"))))),r.a.createElement("div",{className:"flex-container full-height-centered"},r.a.createElement("p",{className:"intro-text"},"User interface experiments from"," ",r.a.createElement("a",{href:"http://dribbble.com/",target:"_blank",rel:"noopener noreferrer"},"Dribbble"))))}}]),t}(n.Component));var v=function(e){var t=e.link,a=e.color,n=e.name,i=e.style;return r.a.createElement("div",{className:"page-container",style:i},r.a.createElement("a",{href:t,target:"_blank",className:"dribbble-link dribbble-link--".concat(a||""),rel:"noopener noreferrer"},n),e.children)},b=a(23),E=r.a.forwardRef((function(e,t){return r.a.createElement("div",{style:{transform:"translate(-50%, -50%) rotate(".concat(e.rotate,"rad)")},className:"slider-inner-circle",ref:t})}));function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=[0,1,2,3,4,5,6,7,8,9],N=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e,a))).minVal=16,n.maxVal=28,n.numberHeight=120,n.inner=r.a.createRef(),n.maxAngle=90,n.initialValue=22,n.initialTransform=-1320,n.state={angle:0,sliderVal:0,numberHeight:0,initialTransform:0,inner:{x:0,y:0},transforms:{num0:0,num1:0}},n.mouseDown=n.mouseDown.bind(Object(p.a)(n)),n.mouseUp=n.mouseUp.bind(Object(p.a)(n)),n.rotate=n.rotate.bind(Object(p.a)(n)),n.stop=n.stop.bind(Object(p.a)(n)),n.radianToDegree=n.radianToDegree.bind(Object(p.a)(n)),n.calculateSliderVal=n.calculateSliderVal.bind(Object(p.a)(n)),n.handleTouch=n.handleTouch.bind(Object(p.a)(n)),n.splitValue=n.splitValue.bind(Object(p.a)(n)),n.getValueForSlider=n.getValueForSlider.bind(Object(p.a)(n)),n.roll=n.roll.bind(Object(p.a)(n)),n.getNumberHeight=n.getNumberHeight.bind(Object(p.a)(n)),n.getInitialTransform=n.getInitialTransform.bind(Object(p.a)(n)),n.initSpinners=n.initSpinners.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.inner.current.getBoundingClientRect();this.setState(O({},this.state,{sliderVal:this.initialValue,inner:O({},this.state.inner,{x:t.left+t.width/2,y:t.top+t.height/2})}),(function(){e.initSpinners()}))}},{key:"getNumberHeight",value:function(){return document.querySelector(".spinner div").offsetHeight}},{key:"getInitialTransform",value:function(e){var t;return document.querySelectorAll("#spinner-1 div").forEach((function(e,a){"true"===e.dataset.initial&&(t=a)})),t*e*-1}},{key:"initSpinners",value:function(){var e=this.getNumberHeight(),t=this.getInitialTransform(e);this.setState(O({},this.state,{numberHeight:e,initialTransform:t,transforms:{num0:t,num1:t}}))}},{key:"mouseDown",value:function(e){document.addEventListener("mousemove",this.rotate),document.addEventListener("mouseup",this.stop)}},{key:"mouseUp",value:function(e){this.stop()}},{key:"handleTouch",value:function(e){var t=e.nativeEvent.touches[0];this.rotate(t)}},{key:"radianToDegree",value:function(e){return 180*e/Math.PI}},{key:"calculateSliderVal",value:function(e){var t=this.getValueForSlider(e),a=this.initialValue+t;this.setState(O({},this.state,{sliderVal:a})),this.roll(t)}},{key:"rotate",value:function(e){var t=e.clientX,a=e.clientY,n=this.state.inner,r=n.x,i=n.y,c=Math.atan2(a-i,t-r),s=this.radianToDegree(c);s>=-this.maxAngle&&s<=this.maxAngle&&(this.calculateSliderVal(s),this.setState(O({},this.state,{angle:c})))}},{key:"stop",value:function(){document.removeEventListener("mousemove",this.rotate)}},{key:"splitValue",value:function(e){return e.toString().split("").map((function(e){return parseInt(e,10)}))}},{key:"getValueForSlider",value:function(e){return Math.round(e/10/1.5)}},{key:"roll",value:function(e){var t=this.state,a=t.sliderVal,n=t.numberHeight,r=t.initialTransform,i=r-(a-this.initialValue)*n,c=r-(this.splitValue(a)[0]-this.splitValue(this.initialValue)[0])*n;this.setState(O({},this.state,{transforms:{num0:c,num1:i}}))}},{key:"render",value:function(){var e=this.state,t=e.angle,a=e.transforms,n=a.num0,i=a.num1,c=e.numberHeight,s=this.splitValue(this.initialValue),l=function(e){var t=e.values;return r.a.createElement(r.a.Fragment,null,t.slice(1,t.length).map((function(e,t){return r.a.createElement("div",{key:e},e)})),t.map((function(e,t){return r.a.createElement("div",{"data-initial":s.includes(e),key:e},e)})))};return r.a.createElement("div",{className:"slider-outer-circle",onMouseDown:this.mouseDown,onTouchMove:this.handleTouch},r.a.createElement("div",{className:"min"},r.a.createElement("span",null,"cold")),r.a.createElement("div",{className:"max"},r.a.createElement("span",null,"hot")),r.a.createElement(E,{rotate:t,ref:this.inner}),r.a.createElement("div",{className:"slider-value"},r.a.createElement("div",{className:"number-spinner-container",style:{height:"".concat(c,"px")}},r.a.createElement("span",{className:"spinner",style:{transform:"translateY(".concat(n,"px)")},id:"spinner-1"},r.a.createElement(l,{values:y})),r.a.createElement("span",{className:"spinner spinner-2",style:{transform:"translateY(".concat(i,"px)")},id:"spinner-2"},r.a.createElement(l,{values:y})))))}}]),t}(n.Component);a(36);function w(){return r.a.createElement("div",{className:"slider"},r.a.createElement(N,null))}a(37);var j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{color:"white",link:"https://dribbble.com/shots/3257243-IoT-navigation-for-smart-home-product-interaction",name:"Iot Navigation"},r.a.createElement("div",{className:"app"},r.a.createElement(w,null)))}}]),t}(n.Component),k=Math.floor(5e3*Math.random())+500,V={firstname:"Janne",lastname:"Huotari",stats:{rank:720,points:3980,level:6}},x={1:"Krypton"},D={id:1,question:"On which planet was superman born?",options:[{text:"Krypton"},{text:"Asgard"},{text:"Azeroth"}]},S=[{tag:"new",name:"Quick Play",icon:""},{tag:"January",name:"Events",icon:""},{tag:"Season 3",name:"Tournament",icon:""},{tag:"Play with friends",name:"Rivals",icon:""}],T=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"getQuiz",value:function(){return new Promise((function(e,t){setTimeout((function(){e(D)}),k)}))}},{key:"getViews",value:function(){return new Promise((function(e,t){setTimeout((function(){e(S)}),k)}))}},{key:"getUserData",value:function(){return new Promise((function(e,t){setTimeout((function(){e(V)}),k)}))}},{key:"checkAnswer",value:function(e,t){return new Promise((function(a,n){var r=x[e.id]===t;setTimeout((function(){a(r)}),k)}))}}]),e}();var P=function(e){var t=e.w,a=e.h,n=e.color,i=e.className;return r.a.createElement("span",{className:"skeleton ".concat(i),style:{width:"".concat(t),height:"".concat(a),background:"".concat(n)}})};var H=function(e){var t=e.data;return r.a.createElement("div",{className:"quiz-user"},r.a.createElement("div",{className:"quiz-user-inforow"},r.a.createElement("h1",{className:"user-name"},r.a.createElement("div",{className:"name-part"},t?t.firstname:r.a.createElement(P,{w:"200px",h:"72px",color:"#f2f2f2"})),r.a.createElement("div",{className:"name-part"},t?t.lastname:r.a.createElement(P,{w:"200px",h:"72px",color:"#f2f2f2"})))),r.a.createElement("div",{className:"quiz-user-inforow"},r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"stat-name"},"Level"),r.a.createElement("p",{className:"stat-value"},t?t.stats.level:r.a.createElement(P,{w:"100%",h:"54px",color:"#f2f2f2"}))),r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"stat-name"},"Points"),r.a.createElement("p",{className:"stat-value"},t?t.stats.points:r.a.createElement(P,{w:"100%",h:"54px",color:"#f2f2f2"}))),r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"stat-name"},"Rank"),r.a.createElement("p",{className:"stat-value"},t?t.stats.rank:r.a.createElement(P,{w:"100%",h:"54px",color:"#f2f2f2"})))))},I=a(24),A=function(e){function t(e,a){return Object(o.a)(this,t),Object(m.a)(this,Object(f.a)(t).call(this,e,a))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e)return r.a.createElement("div",{className:"views-container"},Object(I.a)(Array(4)).map((function(e,t){return r.a.createElement(P,{w:"",h:"100%",color:"#f2f2f2",className:"view"})})));var t=function(e){var t=e.tag,a=e.name,n=e.icon;return r.a.createElement("div",{className:"view"},r.a.createElement("div",{className:"row tag"},t),r.a.createElement("div",{className:"row name"},a),r.a.createElement("div",{className:"row icon"},n))};return r.a.createElement("div",{className:"views-container"},e.map((function(e,a){return r.a.createElement(t,Object.assign({},e,{key:a}))})))}}]),t}(n.Component),U=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e,a))).state={user:void 0,views:void 0},n.updateUserData=n.updateUserData.bind(Object(p.a)(n)),n.updateViewsData=n.updateViewsData.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([T.getUserData(),T.getViews()]).then((function(t){e.updateUserData(t[0]),e.updateViewsData(t[1])}))}},{key:"updateUserData",value:function(e){this.setState({user:e})}},{key:"updateViewsData",value:function(e){this.setState({views:e})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.views;return r.a.createElement("div",{className:"quiz-container"},r.a.createElement("div",{className:"app-container"},r.a.createElement(H,{data:t}),r.a.createElement(A,{data:a})))}}]),t}(n.Component);a(38);var z=function(){return r.a.createElement(v,{link:"https://dribbble.com/shots/5836646-Quiz-iOS-app-Animation",name:"Quiz App",color:"white",style:{backgroundColor:"var(--blue)"}},r.a.createElement(U,null))};var C=function(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:d}),r.a.createElement(l.a,{path:"/01",exact:!0,component:j}),r.a.createElement(l.a,{path:"/02",exact:!0,component:z}))};a(39);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f0d8d962.chunk.js.map