(window["webpackJsonpreact-ui"]=window["webpackJsonpreact-ui"]||[]).push([[0],{24:function(e,t,n){e.exports=n(38)},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),l=n.n(i),s=n(9),c=n(6);n(29);var o=function(){return r.a.createElement("div",{className:"main-nav"},r.a.createElement(s.b,{className:"main-nav-item",to:"/01"},"01"))},u=n(10),m=n(11),h=n(14),d=n(12),f=n(13);var p=function(e){return r.a.createElement("div",{className:"view-1"},r.a.createElement("a",{href:"https://dribbble.com/shots/3257243-IoT-navigation-for-smart-home-product-interaction",target:"_blank",className:"dribbble-link dribbble-link--white",rel:"noopener noreferrer"},"Dribble - Iot"),e.children)},b=n(23),v=n(3),E=r.a.forwardRef((function(e,t){return r.a.createElement("div",{style:{transform:"translate(-50%, -50%) rotate(".concat(e.rotate,"rad)")},className:"slider-inner-circle",ref:t})}));function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=[0,1,2,3,4,5,6,7,8,9],j=function(e){function t(e,n){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e,n))).minVal=16,a.maxVal=28,a.numberHeight=120,a.inner=r.a.createRef(),a.maxAngle=90,a.initialValue=22,a.initialTransform=-1320,a.state={angle:0,sliderVal:0,inner:{x:0,y:0},transforms:{num0:0,num1:0}},a.mouseDown=a.mouseDown.bind(Object(v.a)(a)),a.mouseUp=a.mouseUp.bind(Object(v.a)(a)),a.rotate=a.rotate.bind(Object(v.a)(a)),a.stop=a.stop.bind(Object(v.a)(a)),a.radianToDegree=a.radianToDegree.bind(Object(v.a)(a)),a.calculateSliderVal=a.calculateSliderVal.bind(Object(v.a)(a)),a.handleTouch=a.handleTouch.bind(Object(v.a)(a)),a.splitValue=a.splitValue.bind(Object(v.a)(a)),a.getValueForSlider=a.getValueForSlider.bind(Object(v.a)(a)),a.roll=a.roll.bind(Object(v.a)(a)),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.inner.current.getBoundingClientRect();this.setState(y({},this.state,{sliderVal:this.initialValue,inner:y({},this.state.inner,{x:e.left+e.width/2,y:e.top+e.height/2}),transforms:{num0:this.initialTransform,num1:this.initialTransform}}))}},{key:"mouseDown",value:function(e){document.addEventListener("mousemove",this.rotate),document.addEventListener("mouseup",this.stop)}},{key:"mouseUp",value:function(e){this.stop()}},{key:"handleTouch",value:function(e){var t=e.nativeEvent.touches[0];this.rotate(t)}},{key:"radianToDegree",value:function(e){return 180*e/Math.PI}},{key:"calculateSliderVal",value:function(e){var t=this.getValueForSlider(e),n=this.initialValue+t;this.setState(y({},this.state,{sliderVal:n})),this.roll(t)}},{key:"rotate",value:function(e){var t=e.clientX,n=e.clientY,a=this.state.inner,r=a.x,i=a.y,l=Math.atan2(n-i,t-r),s=this.radianToDegree(l);s>=-this.maxAngle&&s<=this.maxAngle&&(this.calculateSliderVal(s),this.setState(y({},this.state,{angle:l})))}},{key:"stop",value:function(){document.removeEventListener("mousemove",this.rotate)}},{key:"splitValue",value:function(e){return e.toString().split("").map((function(e){return parseInt(e,10)}))}},{key:"getValueForSlider",value:function(e){return Math.round(e/10/1.5)}},{key:"roll",value:function(e){var t=this.state.sliderVal,n=t-this.initialValue,a=this.splitValue(t)[0]-this.splitValue(this.initialValue)[0],r=this.initialTransform-n*this.numberHeight,i=this.initialTransform-a*this.numberHeight;this.setState(y({},this.state,{transforms:{num0:i,num1:r}}))}},{key:"render",value:function(){var e=this.state,t=e.angle,n=e.transforms,a=n.num0,i=n.num1,l=function(e){var t=e.values;return r.a.createElement(r.a.Fragment,null,t.slice(1,t.length).map((function(e,t){return r.a.createElement("div",{key:e},e)})),t.map((function(e,t){return r.a.createElement("div",{key:e},e)})))};return r.a.createElement("div",{className:"slider-outer-circle",onMouseDown:this.mouseDown,onTouchMove:this.handleTouch},r.a.createElement("div",{className:"min"},r.a.createElement("span",null,"cold")),r.a.createElement("div",{className:"max"},r.a.createElement("span",null,"hot")),r.a.createElement(E,{rotate:t,ref:this.inner}),r.a.createElement("div",{className:"slider-value"},r.a.createElement("div",{className:"number-spinner-container"},r.a.createElement("span",{className:"spinner",style:{transform:"translateY(".concat(a,"px)")}},r.a.createElement(l,{values:g})),r.a.createElement("span",{className:"spinner",style:{transform:"translateY(".concat(i,"px)")}},r.a.createElement(l,{values:g})))))}}]),t}(a.Component);n(35);function V(){return r.a.createElement("div",{className:"slider"},r.a.createElement(j,null))}n(36);var k=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement("div",{className:"app"},r.a.createElement(V,null)))}}]),t}(a.Component);var w=function(){return r.a.createElement(s.a,null,r.a.createElement(c.a,{path:"/",exact:!0,component:o}),r.a.createElement(c.a,{path:"/01",exact:!0,component:k}))};n(37);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d8fcf53a.chunk.js.map