webpackJsonp([1],{333:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(2),u=e(i),s=a(224),c=a(257),f=a(260),h=e(f),p=a(156),d=(e(p),a(157)),m=a(220),y=a(270),b=(e(y),a(272)),v=(e(b),a(320)),w=(e(v),a(322)),_=(e(w),a(323)),g=e(_),M=((0,d.useRouterHistory)(m.createHashHistory)({queryKey:!1}),function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={chosenMaterial:""},e}return o(t,e),l(t,[{key:"chooseMaterial",value:function(e){var t=e.value;this.setState({chosenMaterial:t}),localStorage.setItem("chosenMaterial",t),d.browserHistory.push("/materials")}},{key:"componentWillMount",value:function(){this.props.dispatch((0,c.getMaterialsList)())}},{key:"componentWillUpdate",value:function(){}},{key:"render",value:function(){var e=[];return this.props.materials&&this.props.materials.map(function(t,a){e.push({label:t.name,value:t.name})}),u["default"].createElement("div",{className:"main-page-component user-dashboard"},u["default"].createElement("h1",{style:{textAlign:"center"}},"Welcome Back"),u["default"].createElement("div",{className:"main-page-question"},u["default"].createElement("h1",null,"What do I do with"),u["default"].createElement(h["default"],{value:this.state.chosenMaterial,className:"materials-select",clearable:!1,options:e,searchable:!0,autofocus:!0,placeholder:"Choose a Material...",onChange:this.chooseMaterial.bind(this)}),u["default"].createElement("h1",null,"?")),u["default"].createElement("div",{id:"survey"},u["default"].createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSf_hhL8G5ik71rHZFiHDAGKdMv7-30K_gKk74vYFA0CbgXWBA/viewform?usp=send_form"},"Take our 3 question survey and be",u["default"].createElement("br",null),"the first to know when we launch!")),u["default"].createElement(g["default"],null))}}]),t}(i.Component)),E=function(e,t){return{materials:e.materialsReducer.materials,currentMaterial:e.materialsReducer.currentMaterial}};M=(0,s.connect)(function(e){return E},null)(M),t["default"]=M}).call(this)}finally{}}});
//# sourceMappingURL=1.bundle.js.map