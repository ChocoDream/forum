(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07819776"],{"0ebc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container page"},[r("h2",[e._v("Security Tab")]),r("h3",{staticClass:"text-left"},[e._v("Users")]),r("ul",{staticClass:"list-group"},e._l(e.users,(function(t,n){return r("li",{key:t.username+"+"+n,staticClass:"list-group-item"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col col-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col col-12 text-left"},[e._v(" "+e._s(t.username)+" #"+e._s(t.id)+" ")]),r("div",{staticClass:"col col-12 text-left"},[e._v(e._s(t.email))])])]),r("div",{staticClass:"col offset-1 col-8"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col col-4"},e._l(t.roles,(function(e,t){return r("Badges",{key:e+"+"+t,attrs:{role:e}})})),1),r("div",{staticClass:"col col-6"},[r("v-select",{attrs:{multiple:"",label:"title",options:e.subForums,reduce:function(e){return e.id},value:t.subforumId},on:{"option:deselecting":function(r){return e.deleteRole(t.id,r.id)},"option:selecting":function(r){return e.addRole(t.id,r.id)},input:e.refresh}})],1),r("div",{staticClass:"col col-2"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col col-4"}),r("div",{staticClass:"col col-6 offset-2 text-right"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.id!==e.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"material-icons align-middle delete-icon",on:{click:function(r){return e.deleteUser(t.id)}}},[e._v(" delete ")])])])])])])])])])})),0)])},a=[],i=(r("d3b7"),r("96cf"),r("1da1")),s=r("d4ec"),c=r("bee2"),o=r("262e"),u=r("2caf"),l=r("9ab4"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"badge",class:e.getColor()},[r("span",{style:"fontSize: "+e.size},[e._v(" "+e._s(e.capitalized)+" ")])])},f=[],p=(r("ac1f"),r("5319"),r("2b0e")),v=r("60a3"),h=function(e){Object(o["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.colors={user:"badge-primary",moderator:"badge-info",adminstrator:"badge-success",guest:"badge-warning",banned:"badge-danger"},e}return Object(c["a"])(r,[{key:"getColor",value:function(){return void 0!==this.colors[this.role]?this.colors[this.role]:"badge-secondary"}},{key:"capitalized",get:function(){return this.role.replace(/^\w/,(function(e){return e.toUpperCase()}))}}]),r}(p["a"]);Object(l["a"])([Object(v["b"])({type:String,default:"user"})],h.prototype,"role",void 0),Object(l["a"])([Object(v["b"])({type:String,default:"1.3em"})],h.prototype,"size",void 0),h=Object(l["a"])([v["a"]],h);var g=h,b=g,x=r("2877"),E=Object(x["a"])(b,d,f,!1,null,"c8f77e9e",null),y=E.exports,m=function(e){Object(o["a"])(r,e);var t=Object(u["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return Object(c["a"])(r,[{key:"refresh",value:function(){this.$store.dispatch("fetchUsers")}},{key:"deleteUser",value:function(e){this.$store.dispatch("deleteUser",e),this.$store.dispatch("fetchUsers")}},{key:"created",value:function(){this.$store.dispatch("fetchUsers"),this.$store.dispatch("fetchSubForums")}},{key:"addRole",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={userId:t,subforumId:r},e.next=3,fetch("/api/roles",{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify(n)}).then((function(e){if(201===e.status)return e.json()})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteRole",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/roles/"+t,{method:"DELETE",headers:{"Subforum-Id":"".concat(r)}});case 2:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"users",get:function(){return this.$store.state.users}},{key:"subForums",get:function(){return this.$store.state.subForums}},{key:"currentUser",get:function(){return this.$store.state.currentUser}}]),r}(p["a"]);m=Object(l["a"])([Object(v["a"])({components:{Badges:y}})],m);var C=m,R=C,_=(r("8d25"),Object(x["a"])(R,n,a,!1,null,"5122fbbe",null));t["default"]=_.exports},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var b=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,E=b?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!b&&x||"string"===typeof n&&-1===n.indexOf(E)){var i=r(t,e,this,n);if(i.done)return i.value}var o=a(e),p=String(this),v="function"===typeof n;v||(n=String(n));var h=o.global;if(h){var m=o.unicode;o.lastIndex=0}var C=[];while(1){var R=l(o,p);if(null===R)break;if(C.push(R),!h)break;var _=String(R[0]);""===_&&(o.lastIndex=u(p,s(o.lastIndex),m))}for(var O="",S=0,w=0;w<C.length;w++){R=C[w];for(var $=String(R[0]),U=d(f(c(R.index),p.length),0),j=[],I=1;I<R.length;I++)j.push(g(R[I]));var k=R.groups;if(v){var T=[$].concat(j,U,p);void 0!==k&&T.push(k);var P=String(n.apply(void 0,T))}else P=y($,p,U,j,k,n);U>=S&&(O+=p.slice(S,U)+P,S=U+$.length)}return O+p.slice(S)}];function y(e,r,n,a,s,c){var o=n+e.length,u=a.length,l=h;return void 0!==s&&(s=i(s),l=v),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var d=p(l/10);return 0===d?t:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):t}c=a[l-1]}return void 0===c?"":c}))}}))},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"8d25":function(e,t,r){"use strict";r("f5aa")},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(c=function(e){var t,r,a,c,d=this,f=u&&d.sticky,p=n.call(d),v=d.source,h=0,g=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),r=new RegExp("^(?:"+v+")",p)),l&&(r=new RegExp("^"+v+"$(?!\\s)",p)),o&&(t=d.lastIndex),a=i.call(f?r:d,g),f?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),l&&a&&a.length>1&&s.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),s=r("9263"),c=r("9112"),o=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var v=i(e),h=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=h&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!h||!g||"replace"===e&&(!u||!l||f)||"split"===e&&!p){var b=/./[v],x=r(v,""[e],(function(e,t,r,n,a){return t.exec===s?h&&!a?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=x[0],y=x[1];n(String.prototype,e,E),n(RegExp.prototype,v,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},f5aa:function(e,t,r){}}]);
//# sourceMappingURL=chunk-07819776.3978bab7.js.map