(this.webpackJsonpfunnyclock=this.webpackJsonpfunnyclock||[]).push([[0],{28:function(t,e,a){t.exports=a(42)},42:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),s=a(6),l=a(7),c=a(8),u=a(9),h=a(14),m=a(12),d=a(43),f=a(46),p=a(47),v=a(17),y=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0,className:"d-flex justify-content-center align-items-center h-100"},r.a.createElement(f.a,{className:"d-block"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"),r.a.createElement(v.LinkContainer,{to:"/typeone"},r.a.createElement(p.a,{variant:"primary",className:"w-100 my-1"},"One")),r.a.createElement(v.LinkContainer,{to:"/typetwo"},r.a.createElement(p.a,{variant:"primary",className:"w-100 my-1"},"Two")))))}}]),a}(r.a.Component),w=a(44),k=a(45),g=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).radius=void 0,n.drawingContext=void 0,n.draw24hour=void 0,n.drawRoman=void 0,n.timerId=void 0,n.state={time:n.props.time},n.radius=n.props.size/2,n.drawingContext=null,n.draw24hour="24hour"===n.props.timeFormat.toLowerCase().trim(),n.drawRoman=!n.draw24hour&&"roman"===n.props.hourFormat.toLowerCase().trim(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.getDrawingContext(),this.timerId=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"getDrawingContext",value:function(){this.drawingContext=this.refs.clockCanvas.getContext("2d"),this.drawingContext.translate(this.radius,this.radius),this.radius*=.9}},{key:"tick",value:function(){this.props.isActive?this.setState({time:new Date(this.state.time.getTime()+1e3)}):this.setState({time:this.props.time});var t=this.radius,e=this.drawingContext;this.drawFace(e,t),this.drawNumbers(e,t),this.drawTicks(e,t),this.drawTime(e,t)}},{key:"drawFace",value:function(t,e){t.beginPath(),t.arc(0,0,e,0,2*Math.PI),t.fillStyle="white",t.fill();var a=t.createRadialGradient(0,0,.95*e,0,0,1.05*e);a.addColorStop(0,"#333"),a.addColorStop(.5,"white"),a.addColorStop(1,"#333"),t.strokeStyle=a,t.lineWidth=.1*e,t.stroke(),t.beginPath(),t.arc(0,0,.05*e,0,2*Math.PI),t.fillStyle="#333",t.fill()}},{key:"drawNumbers",value:function(t,e){var a,n,r=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],i=.15*e+"px Arial",o=.075*e+"px Arial";for(t.textBaseline="middle",t.textAlign="center",n=1;n<13;n++)a=n*Math.PI/6,t.rotate(a),t.translate(0,.78*-e),t.rotate(-a),t.font=i,t.fillStyle="black",t.fillText(this.drawRoman?r[n-1]:n.toString(),0,0),t.rotate(a),t.translate(0,.78*e),t.rotate(-a),this.draw24hour&&(t.rotate(a),t.translate(0,.6*-e),t.rotate(-a),t.font=o,t.fillStyle="red",t.fillText((n+12).toString(),0,0),t.rotate(a),t.translate(0,.6*e),t.rotate(-a))}},{key:"drawTicks",value:function(t,e){var a,n,r,i;for(a=0;a<60;a++)n=a*Math.PI/30,r=e*Math.sin(n),i=-e*Math.cos(n),t.beginPath(),t.lineWidth=.01*e,t.moveTo(r,i),a%5===0?t.lineTo(.88*r,.88*i):t.lineTo(.92*r,.92*i),t.stroke()}},{key:"drawTime",value:function(t,e){var a=this.state.time,n=a.getHours(),r=a.getMinutes(),i=a.getSeconds();n=(n%=12)*Math.PI/6+r*Math.PI/360+i*Math.PI/21600,this.drawHand(t,n,.5*e,.05*e),r=r*Math.PI/30+i*Math.PI/1800,this.drawHand(t,r,.8*e,.05*e),i=i*Math.PI/30,this.drawHand(t,i,.9*e,.02*e,"red")}},{key:"drawHand",value:function(t,e,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"black";r=r||"black",t.beginPath(),t.lineWidth=n,t.lineCap="round",t.fillStyle=r,t.strokeStyle=r,t.moveTo(0,0),t.rotate(e),t.lineTo(0,-a),t.stroke(),t.rotate(-e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Clock",style:{width:String(this.props.size)+"px"}},r.a.createElement("canvas",{width:this.props.size,height:this.props.size,ref:"clockCanvas"}))}}]),a}(r.a.Component);g.defaultProps={timeFormat:"24hour",hourFormat:"standard",isActive:!0};var b=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={hours:0,minutes:0,tasks:[],count:3},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.newTask()}},{key:"newTask",value:function(){for(var t=Math.floor(24*Math.random())+1,e=Math.floor(59*Math.random())+1,a=[],n=Math.floor(3*Math.random()),r=0;r<this.state.count;r++){if(r==n){var i=new Date;i.setHours(t,e,0);var o={right:!0,date:i};a.push(o)}else{var s=new Date;s.setHours(Math.floor(24*Math.random())+1,Math.floor(59*Math.random())+1,0);var l={right:!1,date:s};a.push(l)}this.setState({hours:t,minutes:e,tasks:a})}}},{key:"answer",value:function(t){t&&this.newTask()}},{key:"render",value:function(){var t=this;return r.a.createElement(d.a,null,r.a.createElement(w.a,null,this.state.tasks.map((function(e,a){return r.a.createElement(k.a,{xs:4,className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement(g,{size:200,time:e.date,isActive:!1}),r.a.createElement(p.a,{variant:"outline-primary",onClick:function(){return t.answer(e.right)}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"))}))),r.a.createElement(w.a,{className:"d-flex justify-content-center align-items-center"},r.a.createElement("h1",{className:"display-1 mt-5"},(this.state.hours>9?this.state.hours.toString():"0"+this.state.hours.toString())+":"+(this.state.minutes>9?this.state.minutes.toString():"0"+this.state.minutes.toString()))))}}]),a}(r.a.Component),I=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0,className:"d-flex justify-content-center align-items-center h-100"},r.a.createElement("h1",null,"\u041d\u0435 \u0433\u043e\u0442\u043e\u0432\u043e!"))}}]),a}(r.a.Component),E=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center h-100"},r.a.createElement("div",{className:"align-self-center"},r.a.createElement("h2",null,"\u0420\u0435\u0441\u0443\u0440\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")))}}]),a}(r.a.Component),j=h.BrowserRouter,C=m.d,M=m.g,O=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0,className:"p-0 m-0 h-100"},r.a.createElement(j,{basename:"/funnyclock"},r.a.createElement(M,null,r.a.createElement(C,{exact:!0,path:"/",component:y}),r.a.createElement(C,{path:"/typeone",component:b}),r.a.createElement(C,{path:"/typetwo",component:I}),r.a.createElement(C,{component:E}))))}}]),a}(r.a.Component);a(38),a(41);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.421766f2.chunk.js.map