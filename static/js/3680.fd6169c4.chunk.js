(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3680],{88760:function(t,e,n){var r=n(24879),i={s:n(74351),b:n(95970)};t.exports=r(i.s,i.b)},24879:function(t,e,n){var r=n(71856),i=n(57113);t.exports=function(t,e){return{encodeS:function(e,n){return n=i.extend({ww:!0,tenMin:!0},n),r.CL.call(t,e,n)},encodeB:function(t,n){return n=i.extend({ww:!0},n),r.CL.call(e,t,n)},decodeS:function(){return r.unCL.apply(t,arguments)},decodeB:function(){return r.unCL.apply(e,arguments)},toMoney:function(t,n){return n=i.extend({ww:!0},n),r.toMoney.call(e,t,n)}}}},71856:function(t,e,n){var r=n(57113);function i(t,e){var n=r.getNumbResult(t);if(!n)return t;e=e||{};var i=this.ch,c=this.ch_u,u=this.ch_f||"",a=this.ch_d||".",l=i.charAt(0),h=n.int,s=n.decimal,o="",f="",p=n.minus?u:"";if(s){s=r.clearZero(s,"0","$");for(var g=0;g<s.length;g++)f+=i.charAt(+s.charAt(g));f=f?a+f:""}if(o=function t(n,u,a){n=r.getNumbResult(n).int;var h="",s=arguments.length>1?arguments[1]:e.tenMin,o=n.length;if(1==o)return i.charAt(+n);if(o<=4)for(var f=0,p=o;p--;){var g=+n.charAt(f);h+=s&&2==o&&0==f&&1==g?"":i.charAt(g),h+=g&&p?c.charAt(p):"",f++}else{for(var d=n.length/4>>0,x=n.length%4;0==x||!c.charAt(3+d);)x+=4,d--;var v=n.substr(0,x),m=n.substr(x);h=t(v,s)+c.charAt(3+d)+("0"==m.charAt(0)?l:"")+t(m,m.length>4&&s)}return h=r.clearZero(h,l)}(h),e.ww&&c.length>5){var d=c.charAt(4),x=c.charAt(5),v=o.lastIndexOf(x);~v&&(o=o.substring(0,v).replace(new RegExp(x,"g"),d+d)+o.substring(v))}return p+o+f}t.exports={CL:i,unCL:function(t){for(var e=(t=t.toString()).split(this.ch_d),n=e[0].replace(this.ch_f,""),i=e[1],c=!!~e[0].indexOf(this.ch_f),u=this.ch_u.charAt(1),a=this.ch_u.charAt(4),l=this.ch_u.charAt(5),h=(n=n.replace(new RegExp(a+"{2}","g"),l)).split(""),s=0,o=0,f=[],p=[],g=[],d=0;d<h.length;d++){var x,v=h[d],m=0;if(~(x=this.ch.indexOf(v)))x>0&&g.unshift(x);else if(~(m=this.ch_u.indexOf(v))){var y=r.getDigit(m);s>m?(r.unshiftZero(g,y),r.centerArray(p,g)):m>=o?(0==d&&(g=[1]),r.centerArray(f,p,g),f.length>0&&r.unshiftZero(f,y),o=m):(0==g.length&&u==v&&(g=[1]),r.centerArray(p,g),r.unshiftZero(p,r.getDigit(m)),s=m)}}r.centerArray(f,p,g).reverse(),0==f.length&&f.push(0);var A=0;if(i){f.push("."),A="0.";for(d=0;d<i.length;d++)A+=this.ch.indexOf(i.charAt(d)),f.push(this.ch.indexOf(i.charAt(d)));A=+A}return c&&f.unshift("-"),parseFloat(f.join(""))},toMoney:function(t,e){var n=r.getNumbResult(t),c=this.ch.charAt(0);if(e="object"==typeof e?e:{},!n)return t;e=r.extend({ww:!0,complete:!1,outSymbol:!0},e);var u=n.num,a=n.decimal||"",l=e.outSymbol?this.m_t:"",h=a?"":this.m_z,s="";if(e.complete){for(var o=1;o<this.m_u.length;o++)s+=i.call(this,a.charAt(o-1)||"0")+this.m_u.charAt(o);h=i.call(this,u,e)+this.m_u.charAt(0)}else{if(a=a.substr(0,this.m_u.length-1),a=r.clearZero(a,"0","$")){var f;for(o=0;o<this.m_u.length-1;o++)a.charAt(o)&&"0"!=a.charAt(o)&&(s+=i.call(this,a.charAt(o))+this.m_u.charAt(o+1),f=!1),"0"!==a.charAt(o)||f||(0==o&&"0"==u||(s+=c),f=!0)}"0"==u&&!h&&s||(h=i.call(this,u,e)+this.m_u.charAt(0)+h)}return l+h+s}}},95970:function(t){t.exports={ch:"\u96f6\u58f9\u8d30\u53c1\u8086\u4f0d\u9646\u67d2\u634c\u7396",ch_u:"\u4e2a\u62fe\u4f70\u4edf\u4e07\u4ebf",ch_f:"\u8d1f",ch_d:"\u70b9",m_t:"\u4eba\u6c11\u5e01",m_z:"\u6574",m_u:"\u5143\u89d2\u5206"}},74351:function(t){t.exports={ch:"\u96f6\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d",ch_u:"\u4e2a\u5341\u767e\u5343\u4e07\u4ebf",ch_f:"\u8d1f",ch_d:"\u70b9"}},57113:function(t,e){"use strict";var n=/^([+-])?0*(\d+)(\.(\d+))?$/,r=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,i=e.e2ten=function(t){var e=r.exec(t.toString());if(!e)return t;var n=e[2],i=e[4]||"",c=e[5]?+e[5]:0;if(c>0){var u=i.substr(0,c);u=u.length<c?u+new Array(c-u.length+1).join("0"):u,i=i.substr(c),n+=u}else{c=-c;var a=n.length-c;a=a<0?0:a;var l=n.substr(a,c);l=l.length<c?new Array(c-l.length+1).join("0")+l:l,n=n.substring(0,a),i=l+i}return n=""==n?"0":n,("-"==e[1]?"-":"")+n+(i?"."+i:"")};e.getNumbResult=function(t){var e=n.exec(t.toString());if(!e&&r.test(t.toString())&&(e=n.exec(i(t.toString()))),e)return{int:e[2],decimal:e[4],minus:"-"==e[1],num:e.slice(1,3).join("")}},e.centerArray=function t(e,n){if(e.splice.apply(e,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var r=[].slice.call(arguments,2);r.unshift(e),t.apply(null,r)}return e};var c=e.hasAttr=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};e.extend=function(t){for(var e,n=arguments[0]||{},r=Array.prototype.slice.call(arguments,1),i=0;i<r.length;i++){var u=r[i];for(e in u)c(u,e)&&(n[e]=u[e])}return n},e.getDigit=function(t){return t>=5?4*(t-4)+4:t},e.unshiftZero=function(t,e){if(null==e&&(e=1),!(e<=0))for(;e--;)t.unshift(0)},e.clearZero=function(t,e,n){if(null==t)return"";var r=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,i=new RegExp("^"+r+"+"),c=new RegExp(r+"+$"),u=new RegExp(r+"{2}","g");return t=t.toString(),"^"==n&&(t=t.replace(i,"")),n&&"$"!=n||(t=t.replace(c,"")),n&&"nto1"!=n||(t=t.replace(u,e)),t}},13680:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var r,i,c,u=n(649),a=n(11026),l=n(25773),h=n(36732),s=n(70430),o=n(27857),f=n(70991),p=n(88760),g=n.n(p),d=n(91121),x=f.ZP.input(r||(r=(0,h.Z)(["\n  border-radius: 6px;\n"]))),v=f.ZP.label(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  gap: 10px;\n"]))),m=(f.ZP.span(c||(c=(0,h.Z)(["\n  font-size: 12px;\n  font-weight: normal;\n"]))),function(t){return(0,d.jsxs)(v,{children:[(0,d.jsx)(x,(0,l.Z)({type:"range",style:{flex:1}},t,{value:t.value})),(0,d.jsx)("span",{children:t.range}),t.extra]})});function y(){var t=(0,s.useState)(0),e=(0,a.Z)(t,2),n=e[0],r=e[1],i=(0,s.useState)([]),c=(0,a.Z)(i,2),l=c[0],h=c[1];return(0,d.jsx)(o.im,{children:(0,d.jsxs)(o.Rh,{overflow:"initial",title:"Input Number",children:[(0,d.jsx)(m,{style:{minWidth:320,padding:"6px 5px"},type:"number",value:n,onChange:function(t){return r(Number(t.target.value))}}),(0,d.jsx)(o.zx,{style:{marginTop:10},disabled:void 0===n,onClick:function(){!function(t){var e=(0,u.Z)(l);e.unshift(t),h(e.slice(0,20))}({num:n.toString(),lower:g().encodeS(n),upper:g().encodeB(n),money:g().toMoney(n)})},children:"Transform"}),(0,d.jsx)(o.Ki,{style:{paddingTop:10},children:l.map((function(t,e){return(0,d.jsxs)(o.NK,{copyText:t.upper,title:(0,d.jsxs)(s.Fragment,{children:[" ",t.num," "]}),copyBtn:!1,children:[(0,d.jsx)(o.gx,{value:t.upper,readOnly:!0,spellCheck:!1}),(0,d.jsx)(o.gx,{value:t.lower,readOnly:!0,spellCheck:!1}),(0,d.jsx)(o.gx,{value:t.money,readOnly:!0,spellCheck:!1})]},e)}))})]})})}}}]);
//# sourceMappingURL=3680.fd6169c4.chunk.js.map