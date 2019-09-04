(window.webpackJsonpchatapp=window.webpackJsonpchatapp||[]).push([[0],{28:function(e,t,n){e.exports=n(40)},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(16),r=n.n(o),c=n(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(37);var i=n(26),u=n(8),l=(n(38),n(9)),m=n(10),g=n(13),h=n(11),p=n(14),d="LOGIN_USER",E="LOGOUT_USER",f="ADD_MESSAGE";var v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(g.a)(this,Object(h.a)(t).call(this,e))).onLogin=function(){n.props.history.push("/chat"),n.props.loginUser(n.state.userName)},n.onUserNameChange=function(e){n.setState({userName:e.target.value})},n.state={userName:""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"login-page"},s.a.createElement("div",{className:"login-form"},s.a.createElement("h1",null,"Login"),s.a.createElement("input",{type:"email",placeholder:"Username",value:this.state.userName,className:"text-input",onChange:this.onUserNameChange}),s.a.createElement("input",{type:"password",placeholder:"Password",className:"text-input"}),s.a.createElement("button",{className:"login-button",onClick:this.onLogin},"Login"),s.a.createElement("div",{className:"login-buttons"},s.a.createElement("button",{className:"login-button signup-button"},"Forgot password?"),s.a.createElement("button",{className:"login-button signup-button"},"Create Account"))))}}]),t}(s.a.Component),b=Object(c.b)(function(e){return{}},function(e){return{loginUser:function(t){e(function(e){return{type:d,userName:e}}(t))}}})(v),N=function(e){function t(){return Object(l.a)(this,t),Object(g.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.message;return s.a.createElement("div",{className:e.loggedInUser?"message-box message-box-right":"message-box message-box-left"},s.a.createElement("div",{className:"user-name"},e.loggedInUser?"You":e.user),s.a.createElement("div",{className:e.loggedInUser?"chat-message chat-message-right":"chat-message chat-message-left"},e.message))}}]),t}(s.a.Component),O=function(e){return s.a.createElement("header",null,s.a.createElement("h1",null,"Chat App"),e.isLogin?s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"username"},e.userName),s.a.createElement("button",{className:"option-button",onClick:e.onLogout},"Logout")):null)},w="wss://echo.websocket.org/",y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(g.a)(this,Object(h.a)(t).call(this,e))).onMessageChange=function(e){var t=e.target.value;n.setState({text:t})},n.handleKeyPress=function(e){"Enter"===e.key&&n.onSend()},n.onSend=function(){var e=n.state.text;if(e.length>0){var t={user:n.props.userName,message:e,loggedInUser:!0};n.props.sendMessage(t),n.connection.send(e),n.setState({text:"",received:0})}},n.onLogout=function(){n.props.history.push("/"),n.props.onLogoutUser()},n.scrollToBottom=function(){n.messagesEndRef.current&&n.messagesEndRef.current.scrollIntoView({behavior:"smooth"})},n.state={text:"",received:0},n.connection=new WebSocket(w),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.messagesEndRef=Object(a.createRef)(null),this.scrollToBottom(),window.addEventListener("beforeunload",function(e){e.returnValue="Changes that you made may not be saved.",e.preventDefault()}),this.connection.onmessage=function(t){var n={user:"ChatBot",message:t.data,loggedInUser:!1};e.props.sendMessage(n),e.setState({received:1})}}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this.props.messages;return s.a.createElement(s.a.Fragment,null,s.a.createElement(O,Object.assign({},this.props,{onLogout:this.onLogout})),s.a.createElement("div",{className:"chat-page"},s.a.createElement("div",{className:"chat-messages"},e.map(function(e,t){return s.a.createElement(N,{key:t,message:e})}),s.a.createElement("div",{ref:this.messagesEndRef})),s.a.createElement("div",{className:"chat-box"},s.a.createElement("input",{className:"chat-text",type:"text",value:this.state.text,placeholder:"Type here..",onKeyPress:this.handleKeyPress,onChange:this.onMessageChange}),s.a.createElement("button",{className:"chat-button",onClick:this.onSend},"Send"))))}}]),t}(s.a.Component),L=Object(c.b)(function(e){return{messages:e.messages,userName:e.userName,isLogin:e.isLogin}},function(e){return{sendMessage:function(t){e(function(e){return{type:f,message:e}}(t))},onLogoutUser:function(){e({type:E})}}})(y);var j=function(){return s.a.createElement("div",{className:"not-found"},s.a.createElement("h1",null,"Not Found"))};var U=function(){return s.a.createElement(i.a,{basename:"/ChatApp"},s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/",component:b}),s.a.createElement(u.a,{path:"/login",component:b}),s.a.createElement(u.a,{path:"/chat",component:L}),s.a.createElement(u.a,{component:j})))},C=n(18),S={isLogin:!1,messages:[],userName:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=e.isLogin;n=!n;var a=t.userName;return Object.assign({},e,{userName:a,isLogin:n});case E:var s=e.isLogin,o=e.userName;return s=!s,o="",Object.assign({},e,{userName:o,isLogin:s});case f:var r=e.messages,c=t.message;return r.push(c),Object.assign({},e,{messages:r});default:return e}},x=Object(C.b)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(s.a.createElement(c.a,{store:x},s.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.5412f0bb.chunk.js.map