(window["webpackJsonpreact-ui"]=window["webpackJsonpreact-ui"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),c=a(14),s=a(6),o=a(7),u=a(8),m=a(10),h=a(9),f=a(2),b=a(11),p=(a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={open:!1},a.open=a.open.bind(Object(f.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"open",value:function(e){e.preventDefault(),this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){var e=this.state.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"main-nav"},r.a.createElement("button",{className:e?"open-nav open":"open-nav",onClick:this.open},r.a.createElement("i",{className:"fas fa-bars button-icon icon-open"}),r.a.createElement("i",{className:"fas fa-times button-icon icon-close"})),r.a.createElement("div",{className:e?"link-container open":"link-container"},r.a.createElement("div",{className:e?"bg-ball open":"bg-ball"}),r.a.createElement("div",{className:"flex-container full-height-centered column"},r.a.createElement("div",{className:"app-links"},r.a.createElement(c.b,{className:"main-nav-item",to:"/01"},"WIP: IoT navigation")),r.a.createElement("div",{className:"info-links"},r.a.createElement("a",{className:"main-nav-item",href:"https://www.jannehuotari.fi/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-user-circle"})," Creator"),r.a.createElement("a",{className:"main-nav-item",href:"https://github.com/jannehuo/react-ui-stuff",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})," GitHub"))))),r.a.createElement("div",{className:"flex-container full-height-centered"},r.a.createElement("p",{className:"intro-text"},"User interface experiments from"," ",r.a.createElement("a",{href:"http://dribbble.com/",target:"_blank",rel:"noopener noreferrer"},"Dribbble"))))}}]),t}(n.Component));var d=function(e){return r.a.createElement("div",{className:"view-1"},r.a.createElement("a",{href:"https://dribbble.com/shots/3257243-IoT-navigation-for-smart-home-product-interaction",target:"_blank",className:"dribbble-link dribbble-link--white",rel:"noopener noreferrer"},"Dribble - Iot"),e.children)},v=a(23),E=r.a.forwardRef((function(e,t){return r.a.createElement("div",{style:{transform:"translate(-50%, -50%) rotate(".concat(e.rotate,"rad)")},className:"slider-inner-circle",ref:t})}));function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=[0,1,2,3,4,5,6,7,8,9],y=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e,a))).minVal=16,n.maxVal=28,n.numberHeight=120,n.inner=r.a.createRef(),n.maxAngle=90,n.initialValue=22,n.initialTransform=-1320,n.state={angle:0,sliderVal:0,inner:{x:0,y:0},transforms:{num0:0,num1:0}},n.mouseDown=n.mouseDown.bind(Object(f.a)(n)),n.mouseUp=n.mouseUp.bind(Object(f.a)(n)),n.rotate=n.rotate.bind(Object(f.a)(n)),n.stop=n.stop.bind(Object(f.a)(n)),n.radianToDegree=n.radianToDegree.bind(Object(f.a)(n)),n.calculateSliderVal=n.calculateSliderVal.bind(Object(f.a)(n)),n.handleTouch=n.handleTouch.bind(Object(f.a)(n)),n.splitValue=n.splitValue.bind(Object(f.a)(n)),n.getValueForSlider=n.getValueForSlider.bind(Object(f.a)(n)),n.roll=n.roll.bind(Object(f.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.inner.current.getBoundingClientRect();this.setState(O({},this.state,{sliderVal:this.initialValue,inner:O({},this.state.inner,{x:e.left+e.width/2,y:e.top+e.height/2}),transforms:{num0:this.initialTransform,num1:this.initialTransform}}))}},{key:"mouseDown",value:function(e){document.addEventListener("mousemove",this.rotate),document.addEventListener("mouseup",this.stop)}},{key:"mouseUp",value:function(e){this.stop()}},{key:"handleTouch",value:function(e){var t=e.nativeEvent.touches[0];this.rotate(t)}},{key:"radianToDegree",value:function(e){return 180*e/Math.PI}},{key:"calculateSliderVal",value:function(e){var t=this.getValueForSlider(e),a=this.initialValue+t;this.setState(O({},this.state,{sliderVal:a})),this.roll(t)}},{key:"rotate",value:function(e){var t=e.clientX,a=e.clientY,n=this.state.inner,r=n.x,i=n.y,l=Math.atan2(a-i,t-r),c=this.radianToDegree(l);c>=-this.maxAngle&&c<=this.maxAngle&&(this.calculateSliderVal(c),this.setState(O({},this.state,{angle:l})))}},{key:"stop",value:function(){document.removeEventListener("mousemove",this.rotate)}},{key:"splitValue",value:function(e){return e.toString().split("").map((function(e){return parseInt(e,10)}))}},{key:"getValueForSlider",value:function(e){return Math.round(e/10/1.5)}},{key:"roll",value:function(e){var t=this.state.sliderVal,a=t-this.initialValue,n=this.splitValue(t)[0]-this.splitValue(this.initialValue)[0],r=this.initialTransform-a*this.numberHeight,i=this.initialTransform-n*this.numberHeight;this.setState(O({},this.state,{transforms:{num0:i,num1:r}}))}},{key:"render",value:function(){var e=this.state,t=e.angle,a=e.transforms,n=a.num0,i=a.num1,l=function(e){var t=e.values;return r.a.createElement(r.a.Fragment,null,t.slice(1,t.length).map((function(e,t){return r.a.createElement("div",{key:e},e)})),t.map((function(e,t){return r.a.createElement("div",{key:e},e)})))};return r.a.createElement("div",{className:"slider-outer-circle",onMouseDown:this.mouseDown,onTouchMove:this.handleTouch},r.a.createElement("div",{className:"min"},r.a.createElement("span",null,"cold")),r.a.createElement("div",{className:"max"},r.a.createElement("span",null,"hot")),r.a.createElement(E,{rotate:t,ref:this.inner}),r.a.createElement("div",{className:"slider-value"},r.a.createElement("div",{className:"number-spinner-container"},r.a.createElement("span",{className:"spinner",style:{transform:"translateY(".concat(n,"px)")}},r.a.createElement(l,{values:j})),r.a.createElement("span",{className:"spinner",style:{transform:"translateY(".concat(i,"px)")}},r.a.createElement(l,{values:j})))))}}]),t}(n.Component);a(35);function k(){return r.a.createElement("div",{className:"slider"},r.a.createElement(y,null))}a(36);var N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"app"},r.a.createElement(k,null)))}}]),t}(n.Component);var w=function(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:p}),r.a.createElement(s.a,{path:"/01",exact:!0,component:N}))};a(37);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.449406fb.chunk.js.map