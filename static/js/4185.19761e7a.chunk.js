"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4185],{4185:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(11026),i=n(36732),o=n(70430),a=n(70991);function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidCharacterError";var c="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,i=0,o=0,a="";r=t.charAt(o++);~r&&(n=i%4?64*n+r:r,i++%4)?a+=String.fromCharCode(255&n>>(-2*i&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return a};function l(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(c(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return c(t)}}function u(e){this.message=e}u.prototype=new Error,u.prototype.name="InvalidTokenError";var d,h=function(e,t){if("string"!=typeof e)throw new u("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(l(e.split(".")[n]))}catch(e){throw new u("Invalid token specified: "+e.message)}},f=n(27857),p=n(84274),g=n(91121),y=a.ZP.span(d||(d=(0,i.Z)(["\n  font-size: 12px;\n  font-weight: normal;\n"])));function x(e,t){return void 0===t&&(t=!1),JSON.stringify(JSON.parse(e),null,t?2:0)}function j(e){return window.btoa(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function w(e){var t=(0,o.useState)(""),n=(0,r.Z)(t,2),i=n[0],a=n[1],s=(0,o.useState)("{}"),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,o.useState)(""),w=(0,r.Z)(d,2),m=w[0],v=w[1],k=(0,o.useState)("{}"),b=(0,r.Z)(k,2),S=b[0],J=b[1],O=(0,o.useState)(""),T=(0,r.Z)(O,2),C=T[0],I=T[1],N=(0,o.useState)(""),E=(0,r.Z)(N,2),Z=E[0],A=E[1],K=(0,o.useState)(),H=(0,r.Z)(K,2),M=H[0],F=H[1];(0,o.useEffect)((function(){!function(){try{if(i){var e=h(i);u(JSON.stringify(e,null,2));var t=h(i,{header:!0});J(JSON.stringify(t,null,2));var n=i.split("."),o=(0,r.Z)(n,3),a=(o[0],o[1],o[2]);v(a||"")}else u("{}"),J("{}"),v("");I("")}catch(s){s instanceof Error&&I(s.message)}}()}),[i]);return(0,o.useEffect)((function(){!function(){try{var e=j(x(S))+"."+j(x(l))+"."+m;A(""),a(e)}catch(t){t instanceof Error&&A(t.message)}}()}),[S,l,m]),(0,g.jsxs)(f.im,{children:[(0,g.jsx)(f.Rh,{title:"JWT",style:{position:"sticky",top:24,maxHeight:360},extra:(0,g.jsxs)(o.Fragment,{children:[i&&(0,g.jsx)(f.qi,{value:i}),(0,g.jsx)(f.zx,{onClick:function(){return a("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo")},children:"Sample"})]}),children:(0,g.jsx)(f.gx,{spellCheck:!1,error:!!C,value:i,onInput:function(e){a(e.target.value)}})}),(0,g.jsx)(f.Rh,{title:"Decoded",children:(0,g.jsxs)(f.Ki,{children:[(0,g.jsx)(f.NK,{title:(0,g.jsxs)(o.Fragment,{children:["Header: ",(0,g.jsx)(y,{children:"ALGORITHM & TOKEN TYPE"})]}),copyBtn:!1,copyText:S,children:(0,g.jsxs)(f.Ki,{children:[(0,g.jsx)(p.Z,{style:{display:"block"},source:"```json\n"+S+"\n```"}),(0,g.jsx)(f.gx,{onFocus:function(){return F("header")},onBlur:function(){return F(void 0)},error:!!Z&&"header"===M,value:S,spellCheck:!1,style:{minHeight:120},onChange:function(e){return J(e.target.value)}})]})}),(0,g.jsx)(f.NK,{title:(0,g.jsxs)(o.Fragment,{children:["Payload: ",(0,g.jsx)(y,{children:"DATA"})]}),copyBtn:!1,copyText:l,children:(0,g.jsxs)(f.Ki,{children:[(0,g.jsx)(p.Z,{style:{display:"block"},source:"```json\n"+l+"\n```"}),(0,g.jsx)(f.gx,{onFocus:function(){return F("payload")},onBlur:function(){return F(void 0)},error:!!Z&&"payload"===M,value:l,spellCheck:!1,style:{minHeight:120},onChange:function(e){return u(e.target.value)}})]})}),(0,g.jsx)(f.NK,{title:(0,g.jsx)(o.Fragment,{children:"Signature:"}),copyBtn:!1,copyText:l,children:(0,g.jsx)(f.Ki,{children:(0,g.jsx)(f.gx,{value:m,onChange:function(e){return v(e.target.value)}})})}),(0,g.jsx)(f.NK,{title:"Help:",copyBtn:!1,children:(0,g.jsx)(p.Z,{source:"JWT Decoder is a free online developer tool to decode a JSON Web Token (JWT) instantly to view the claims inside, such as the algorithm used to sign it and the attached data.\n\nEnter a JSON Web Token you would like to decode in the input field and then click the decode button. The result will be split into `header` and `payload` in the JSON format accordingly.\n\nThe header consists of the algorithm used to encode the signature, such as `HS256` which means the token uses `HMAC-SHA256` to generate the signature and the token type; for instance [`JWT`](https://jwt.io/).\n\nThe payload contains a set of claims as known as data in a token. One of the standard claims is `iat` which stands for Issued At. It's a UNIX timestamp referring to the creation date and time of the token.\n\nOnce a JSON Web Token is decoded, you can copy the result to your clipboard using the copy button."})})]})})]})}}}]);
//# sourceMappingURL=4185.19761e7a.chunk.js.map