webpackJsonp([5],{jVAB:function(e,t){},yTJC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),s=n("NYxO"),a={data:function(){return{username:"",password:""}},methods:o()({},Object(s.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:e.$route.query.redirect||"/"})})}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h4",[e._v("用户名")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"密码",type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLogin.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),n("p",{staticClass:"notice"},[e._v("没有账号？\n    "),n("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(e){n("jVAB")},null,null);t.default=u.exports}});
//# sourceMappingURL=5.0db21c26ef1f3186dd92.js.map