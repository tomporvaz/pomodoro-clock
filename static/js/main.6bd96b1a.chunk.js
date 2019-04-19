(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,s){e.exports=s.p+"static/media/alarm-sound.bdc8f821.mp3"},,,function(e,t,s){e.exports=s(19)},,,,,,function(e,t,s){},function(e,t,s){e.exports=s.p+"static/media/logo.5d5d9eef.svg"},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(3),r=s.n(i),o=(s(16),s(4)),c=s(5),m=s(8),h=s(6),l=s(9),d=s(1),u=(s(17),s(18),s(7)),g=s.n(u);function b(e){return a.a.createElement("div",null,a.a.createElement("h3",{id:"timer-label"},e.mode),a.a.createElement("h1",{id:"time-left"},("0"+e.minutes).slice(-2),":",("0"+e.seconds).slice(-2)))}function k(e){return a.a.createElement("div",{id:"breakControls",className:"controls"},a.a.createElement("h4",{id:"break-label"},"Break Length"),a.a.createElement("p",{id:"break-length"},e.breakLength),a.a.createElement("button",{id:"break-decrement",className:"control-button",onClick:e.decrement},"-"),a.a.createElement("button",{id:"break-increment",className:"control-button",onClick:e.increment},"+"))}function L(e){return a.a.createElement("div",{id:"sessionControls",className:"controls"},a.a.createElement("h4",{id:"session-label"},"Session Length"),a.a.createElement("p",{id:"session-length"},e.sessionLength),a.a.createElement("button",{id:"session-decrement",className:"control-button",onClick:e.decrement},"-"),a.a.createElement("button",{id:"session-increment",className:"control-button",onClick:e.increment},"+"))}var f=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(m.a)(this,Object(h.a)(t).call(this,e))).audio=document.getElementById("beep"),s.state={minutes:25,seconds:0,breakLength:5,sessionLength:25,mode:"Session",running:!1,started:!1},s.timer=s.timer.bind(Object(d.a)(Object(d.a)(s))),s.toggleRunning=s.toggleRunning.bind(Object(d.a)(Object(d.a)(s))),s.refresh=s.refresh.bind(Object(d.a)(Object(d.a)(s))),s.reset=s.reset.bind(Object(d.a)(Object(d.a)(s))),s.playAlarm=s.playAlarm.bind(Object(d.a)(Object(d.a)(s))),s.decrementBreak=s.decrementBreak.bind(Object(d.a)(Object(d.a)(s))),s.incrementBreak=s.incrementBreak.bind(Object(d.a)(Object(d.a)(s))),s.decrementSession=s.decrementSession.bind(Object(d.a)(Object(d.a)(s))),s.incrementSession=s.incrementSession.bind(Object(d.a)(Object(d.a)(s))),s}return Object(l.a)(t,e),Object(c.a)(t,[{key:"timer",value:function(){var e=this,t=setInterval(function(){e.state.minutes>=0&&e.state.seconds>0&&e.state.running?e.setState({seconds:e.state.seconds-1}):e.state.minutes>0&&0===e.state.seconds&&e.state.running?e.setState({minutes:e.state.minutes-1,seconds:59}):0===e.state.minutes&&0===e.state.seconds&&e.state.running&&"Session"===e.state.mode?(e.playAlarm(),e.setState({minutes:e.state.breakLength,seconds:0,mode:"Break"})):0===e.state.minutes&&0===e.state.seconds&&e.state.running&&"Break"===e.state.mode?(e.playAlarm(),e.setState({minutes:e.state.breakLength,seconds:0,mode:"Session"})):clearInterval(t)},1e3)}},{key:"toggleRunning",value:function(){this.state.running?(console.log("running: "+this.state.running),this.setState({running:!1})):(console.log("running: "+this.state.running),this.timer(),this.setState({running:!0,started:!0}))}},{key:"refresh",value:function(){"Session"===this.state.mode?this.setState({running:!1,started:!1,minutes:this.state.sessionLength,seconds:0}):"Break"===this.state.mode&&this.setState({running:!1,started:!1,minutes:this.state.breakLength,seconds:0})}},{key:"reset",value:function(){var e=document.getElementById("beep");e.currentTime=0,e.pause(),this.setState({minutes:25,seconds:0,breakLength:5,sessionLength:25,running:!1,mode:"Session"})}},{key:"playAlarm",value:function(){console.log("playAlarm");var e=document.getElementById("beep");e.currentTime=0,e.play()}},{key:"decrementBreak",value:function(){this.state.breakLength>1&&!1===this.state.started&&"Break"===this.state.mode?this.setState({breakLength:this.state.breakLength-1,minutes:this.state.breakLength-1,seconds:0}):this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1})}},{key:"incrementBreak",value:function(){this.state.breakLength<60&&!1===this.state.running&&"Break"===this.state.mode?this.setState({breakLength:this.state.breakLength+1,minutes:this.state.breakLength+1,seconds:0}):this.state.breakLength<60&&this.setState({breakLength:this.state.breakLength+1})}},{key:"decrementSession",value:function(){this.state.sessionLength>1&&!1===this.state.started&&"Session"===this.state.mode?this.setState({sessionLength:this.state.sessionLength-1,minutes:this.state.sessionLength-1,seconds:0}):this.state.sessionLength>1&&this.setState({sessionLength:this.state.sessionLength-1})}},{key:"incrementSession",value:function(){this.state.sessionLength<60&&!1===this.state.started&&"Session"===this.state.mode?this.setState({sessionLength:this.state.sessionLength+1,minutes:this.state.sessionLength+1,seconds:0}):this.state.sessionLength<60&&this.setState({sessionLength:this.state.sessionLength+1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{id:"title"},a.a.createElement("h3",{style:{color:"white"}},"Pomodoro Clock by"),a.a.createElement("h3",null,a.a.createElement("a",{href:"https://tomporvaz.github.io/"},"Tom Porvaznik"))),a.a.createElement("header",{className:"timerBody"},a.a.createElement(b,{minutes:this.state.minutes,seconds:this.state.seconds,mode:this.state.mode}),a.a.createElement("div",{id:"timerButtons"},a.a.createElement("button",{id:"start_stop",onClick:this.toggleRunning,alt:"Start/Stop",className:"start-refresh"},a.a.createElement("i",{class:"fas fa-play"}),a.a.createElement("i",{class:"fas fa-pause"})),a.a.createElement("button",{id:"refresh",onClick:this.refresh,className:"start-refresh",alt:"Refresh"},a.a.createElement("i",{class:"fas fa-sync-alt"}))),a.a.createElement("div",{id:"controls"},a.a.createElement(k,{breakLength:this.state.breakLength,decrement:this.decrementBreak,increment:this.incrementBreak}),a.a.createElement(L,{sessionLength:this.state.sessionLength,decrement:this.decrementSession,increment:this.incrementSession})),a.a.createElement("button",{id:"reset",onClick:this.reset},"Reset"),a.a.createElement("audio",{id:"beep",src:g.a})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.6bd96b1a.chunk.js.map