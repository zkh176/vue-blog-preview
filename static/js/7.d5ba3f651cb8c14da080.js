webpackJsonp([7],{"3u4i":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),s={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;n.a.getIndexBlogs({page:t}).then(function(a){e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{alt:e.user.username,src:e.user.avatar}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v(t._s(e.title)+" "),a("span",[t._v(" "+t._s(t.friendlyDate(e.createdAt))+" ")])]),t._v(" "),a("p",[t._v(t._s(e.description))])])}),1),t._v(" "),a("section",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.page,total:t.total,layout:"prev,pager,next"},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("KP9k")},null,null);e.default=i.exports},KP9k:function(t,e){}});
//# sourceMappingURL=7.d5ba3f651cb8c14da080.js.map