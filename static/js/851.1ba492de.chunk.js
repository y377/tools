"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851],{7851:function(t,e,s){s.d(e,{AV:function(){return u}});var i=s(7772),r=s(2696),n=(0,r.Gv)({String:r.pJ.string,Number:r.pJ.number,"True False":r.pJ.bool,PropertyName:r.pJ.propertyName,Null:r.pJ.null,",":r.pJ.separator,"[ ]":r.pJ.squareBracket,"{ }":r.pJ.brace}),a=i.WQ.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"\u26a0 JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[n],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),h=s(1558);var o=h.qp.define({parser:a.configure({props:[h.uj.add({Object:(0,h.tC)({except:/^\s*\}/}),Array:(0,h.tC)({except:/^\s*\]/})}),h.x0.add({"Object Array":h.Dv})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function u(){return new h.ri(o)}},7772:function(t,e,s){s.d(e,{IK:function(){return Z},Jq:function(){return x},WQ:function(){return D}});var i,r=s(649),n=s(7591),a=s(4337),h=s(726),o=s(2951),u=s(1976),c=s(4652),f=function(){function t(e,s,i,r,n,a,h,u,c){var f=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,l=arguments.length>10?arguments[10]:void 0;(0,o.Z)(this,t),this.p=e,this.stack=s,this.state=i,this.reducePos=r,this.pos=n,this.score=a,this.buffer=h,this.bufferBase=u,this.curContext=c,this.lookAhead=f,this.parent=l}return(0,u.Z)(t,[{key:"toString",value:function(){return"[".concat(this.stack.filter((function(t,e){return e%3==0})).concat(this.state),"]@").concat(this.pos).concat(this.score?"!"+this.score:"")}},{key:"context",get:function(){return this.curContext?this.curContext.context:null}},{key:"pushState",value:function(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=t}},{key:"reduce",value:function(t){var e=t>>19,s=65535&t,i=this.p.parser,r=i.dynamicPrecedence(s);if(r&&(this.score+=r),0==e)return this.pushState(i.getGoto(this.state,s,!0),this.reducePos),s<i.minRepeatTerm&&this.storeNode(s,this.reducePos,this.reducePos,4,!0),void this.reduceContext(s,this.reducePos);var n=this.stack.length-3*(e-1)-(262144&t?6:0),a=this.stack[n-2],h=this.stack[n-1],o=this.bufferBase+this.buffer.length-h;if(s<i.minRepeatTerm||131072&t){var u=i.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(s,a,u,o+4,!0)}if(262144&t)this.state=this.stack[n];else{var c=this.stack[n-3];this.state=i.getGoto(c,s,!0)}for(;this.stack.length>n;)this.stack.pop();this.reduceContext(s,a)}},{key:"storeNode",value:function(t,e,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(0==t&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){var n=this,a=this.buffer.length;if(0==a&&n.parent&&(a=n.bufferBase-n.parent.bufferBase,n=n.parent),a>0&&0==n.buffer[a-4]&&n.buffer[a-1]>-1){if(e==s)return;if(n.buffer[a-2]>=e)return void(n.buffer[a-2]=s)}}if(r&&this.pos!=s){var h=this.buffer.length;if(h>0&&0!=this.buffer[h-4])for(;h>0&&this.buffer[h-2]>s;)this.buffer[h]=this.buffer[h-4],this.buffer[h+1]=this.buffer[h-3],this.buffer[h+2]=this.buffer[h-2],this.buffer[h+3]=this.buffer[h-1],h-=4,i>4&&(i-=4);this.buffer[h]=t,this.buffer[h+1]=e,this.buffer[h+2]=s,this.buffer[h+3]=i}else this.buffer.push(t,e,s,i)}},{key:"shift",value:function(t,e,s){var i=this.pos;if(131072&t)this.pushState(65535&t,this.pos);else if(0==(262144&t)){var r=t,n=this.p.parser;(s>this.pos||e<=n.maxNode)&&(this.pos=s,n.stateFlag(r,1)||(this.reducePos=s)),this.pushState(r,i),this.shiftContext(e,i),e<=n.maxNode&&this.buffer.push(e,i,s,4)}else this.pos=s,this.shiftContext(e,i),e<=this.p.parser.maxNode&&this.buffer.push(e,i,s,4)}},{key:"apply",value:function(t,e,s){65536&t?this.reduce(t):this.shift(t,e,s)}},{key:"useNode",value:function(t,e){var s=this.p.reused.length-1;(s<0||this.p.reused[s]!=t)&&(this.p.reused.push(t),s++);var i=this.pos;this.reducePos=this.pos=i+t.length,this.pushState(e,i),this.buffer.push(s,i,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this,this.p.stream.reset(this.pos-t.length)))}},{key:"split",value:function(){for(var e=this,s=e.buffer.length;s>0&&e.buffer[s-2]>e.reducePos;)s-=4;for(var i=e.buffer.slice(s),r=e.bufferBase+s;e&&r==e.bufferBase;)e=e.parent;return new t(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,r,this.curContext,this.lookAhead,e)}},{key:"recoverByDelete",value:function(t,e){var s=t<=this.p.parser.maxNode;s&&this.storeNode(t,this.pos,e,4),this.storeNode(0,this.pos,e,s?8:4),this.pos=this.reducePos=e,this.score-=190}},{key:"canShift",value:function(t){for(var e=new p(this);;){var s=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,t);if(0==(65536&s))return!0;if(0==s)return!1;e.reduce(s)}}},{key:"recoverByInsert",value:function(t){if(this.stack.length>=300)return[];var e=this.p.parser.nextStates(this.state);if(e.length>8||this.stack.length>=120){for(var s,i=[],r=0;r<e.length;r+=2)(s=e[r+1])!=this.state&&this.p.parser.hasAction(s,t)&&i.push(e[r],s);if(this.stack.length<120)for(var n=function(t){var s=e[t+1];i.some((function(t,e){return 1&e&&t==s}))||i.push(e[t],s)},a=0;i.length<8&&a<e.length;a+=2)n(a);e=i}for(var h=[],o=0;o<e.length&&h.length<4;o+=2){var u=e[o+1];if(u!=this.state){var c=this.split();c.pushState(u,this.pos),c.storeNode(0,c.pos,c.pos,4,!0),c.shiftContext(e[o],this.pos),c.score-=200,h.push(c)}}return h}},{key:"forceReduce",value:function(){var t=this.p.parser.stateSlot(this.state,5);if(0==(65536&t))return!1;var e=this.p.parser;if(!e.validAction(this.state,t)){var s=t>>19,i=65535&t,r=this.stack.length-3*s;if(r<0||e.getGoto(this.stack[r],i,!1)<0)return!1;this.storeNode(0,this.reducePos,this.reducePos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}},{key:"forceAll",value:function(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}},{key:"deadEnd",get:function(){if(3!=this.stack.length)return!1;var t=this.p.parser;return 65535==t.data[t.stateSlot(this.state,1)]&&!t.stateSlot(this.state,4)}},{key:"restart",value:function(){this.state=this.stack[0],this.stack.length=0}},{key:"sameState",value:function(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return!1;for(var e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return!1;return!0}},{key:"parser",get:function(){return this.p.parser}},{key:"dialectEnabled",value:function(t){return this.p.parser.dialect.flags[t]}},{key:"shiftContext",value:function(t,e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this,this.p.stream.reset(e)))}},{key:"reduceContext",value:function(t,e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this,this.p.stream.reset(e)))}},{key:"emitContext",value:function(){var t=this.buffer.length-1;(t<0||-3!=this.buffer[t])&&this.buffer.push(this.curContext.hash,this.reducePos,this.reducePos,-3)}},{key:"emitLookAhead",value:function(){var t=this.buffer.length-1;(t<0||-4!=this.buffer[t])&&this.buffer.push(this.lookAhead,this.reducePos,this.reducePos,-4)}},{key:"updateContext",value:function(t){if(t!=this.curContext.context){var e=new l(this.curContext.tracker,t);e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}},{key:"setLookAhead",value:function(t){t>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=t)}},{key:"close",value:function(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}],[{key:"start",value:function(e,s){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.parser.context;return new t(e,[],s,i,i,0,[],0,r?new l(r,r.start):null,0,null)}}]),t}(),l=(0,u.Z)((function t(e,s){(0,o.Z)(this,t),this.tracker=e,this.context=s,this.hash=e.strict?e.hash(s):0}));!function(t){t[t.Insert=200]="Insert",t[t.Delete=190]="Delete",t[t.Reduce=100]="Reduce",t[t.MaxNext=4]="MaxNext",t[t.MaxInsertStackDepth=300]="MaxInsertStackDepth",t[t.DampenInsertStackDepth=120]="DampenInsertStackDepth"}(i||(i={}));var p=function(){function t(e){(0,o.Z)(this,t),this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}return(0,u.Z)(t,[{key:"reduce",value:function(t){var e=65535&t,s=t>>19;0==s?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=3*(s-1);var i=this.start.p.parser.getGoto(this.stack[this.base-3],e,!0);this.state=i}}]),t}(),d=function(){function t(e,s,i){(0,o.Z)(this,t),this.stack=e,this.pos=s,this.index=i,this.buffer=e.buffer,0==this.index&&this.maybeNext()}return(0,u.Z)(t,[{key:"maybeNext",value:function(){var t=this.stack.parent;null!=t&&(this.index=this.stack.bufferBase-t.bufferBase,this.stack=t,this.buffer=t.buffer)}},{key:"id",get:function(){return this.buffer[this.index-4]}},{key:"start",get:function(){return this.buffer[this.index-3]}},{key:"end",get:function(){return this.buffer[this.index-2]}},{key:"size",get:function(){return this.buffer[this.index-1]}},{key:"next",value:function(){this.index-=4,this.pos-=4,0==this.index&&this.maybeNext()}},{key:"fork",value:function(){return new t(this.stack,this.pos,this.index)}}],[{key:"create",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.bufferBase+e.buffer.length;return new t(e,s,s-e.bufferBase)}}]),t}(),k=(0,u.Z)((function t(){(0,o.Z)(this,t),this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0})),v=new k,g=function(){function t(e,s){(0,o.Z)(this,t),this.input=e,this.ranges=s,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=v,this.rangeIndex=0,this.pos=this.chunkPos=s[0].from,this.range=s[0],this.end=s[s.length-1].to,this.readNext()}return(0,u.Z)(t,[{key:"resolveOffset",value:function(t,e){for(var s=this.range,i=this.rangeIndex,r=this.pos+t;r<s.from;){if(!i)return null;var n=this.ranges[--i];r-=s.from-n.to,s=n}for(;e<0?r>s.to:r>=s.to;){if(i==this.ranges.length-1)return null;var a=this.ranges[++i];r+=a.from-s.to,s=a}return r}},{key:"peek",value:function(t){var e,s,i=this.chunkOff+t;if(i>=0&&i<this.chunk.length)e=this.pos+t,s=this.chunk.charCodeAt(i);else{var r=this.resolveOffset(t,1);if(null==r)return-1;if((e=r)>=this.chunk2Pos&&e<this.chunk2Pos+this.chunk2.length)s=this.chunk2.charCodeAt(e-this.chunk2Pos);else{for(var n=this.rangeIndex,a=this.range;a.to<=e;)a=this.ranges[++n];this.chunk2=this.input.chunk(this.chunk2Pos=e),e+this.chunk2.length>a.to&&(this.chunk2=this.chunk2.slice(0,a.to-e)),s=this.chunk2.charCodeAt(0)}}return e>=this.token.lookAhead&&(this.token.lookAhead=e+1),s}},{key:"acceptToken",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=e?this.resolveOffset(e,-1):this.pos;if(null==s||s<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=t,this.token.end=s}},{key:"getChunk",value:function(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){var t=this.chunk,e=this.chunkPos;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=t,this.chunk2Pos=e,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;var s=this.input.chunk(this.pos),i=this.pos+s.length;this.chunk=i>this.range.to?s.slice(0,this.range.to-this.pos):s,this.chunkPos=this.pos,this.chunkOff=0}}},{key:"readNext",value:function(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;for(this.chunkOff+=t;this.pos+t>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();t-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=t,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}},{key:"setDone",value:function(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}},{key:"reset",value:function(t,e){if(e?(this.token=e,e.start=t,e.lookAhead=t+1,e.value=e.extended=-1):this.token=v,this.pos!=t){if(this.pos=t,t==this.end)return this.setDone(),this;for(;t<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;t>=this.range.to;)this.range=this.ranges[++this.rangeIndex];t>=this.chunkPos&&t<this.chunkPos+this.chunk.length?this.chunkOff=t-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}},{key:"read",value:function(t,e){if(t>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(t-this.chunkPos,e-this.chunkPos);if(t>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(t-this.chunk2Pos,e-this.chunk2Pos);if(t>=this.range.from&&e<=this.range.to)return this.input.read(t,e);var s,i="",r=(0,h.Z)(this.ranges);try{for(r.s();!(s=r.n()).done;){var n=s.value;if(n.from>=e)break;n.to>t&&(i+=this.input.read(Math.max(n.from,t),Math.min(n.to,e)))}}catch(a){r.e(a)}finally{r.f()}return i}}]),t}(),m=function(){function t(e,s){(0,o.Z)(this,t),this.data=e,this.id=s}return(0,u.Z)(t,[{key:"token",value:function(t,e){!function(t,e,s,i){var r=0,n=1<<i,a=s.p.parser,h=a.dialect;t:for(;0!=(n&t[r]);){for(var o=t[r+1],u=r+3;u<o;u+=2)if((t[u+1]&n)>0){var c=t[u];if(h.allows(c)&&(-1==e.token.value||e.token.value==c||a.overrides(c,e.token.value))){e.acceptToken(c);break}}for(var f=e.next,l=0,p=t[r+2];l<p;){var d=l+p>>1,k=o+d+(d<<1),v=t[k],g=t[k+1];if(f<v)p=d;else{if(!(f>=g)){r=t[k+2],e.advance();continue t}l=d+1}}break}}(this.data,t,e,this.id)}}]),t}();m.prototype.contextual=m.prototype.fallback=m.prototype.extend=!1;var x=(0,u.Z)((function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.Z)(this,t),this.token=e,this.contextual=!!s.contextual,this.fallback=!!s.fallback,this.extend=!!s.extend}));function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Uint16Array;if("string"!=typeof t)return t;for(var s=null,i=0,r=0;i<t.length;){for(var n=0;;){var a=t.charCodeAt(i++),h=!1;if(126==a){n=65535;break}a>=92&&a--,a>=34&&a--;var o=a-32;if(o>=46&&(o-=46,h=!0),n+=o,h)break;n*=46}s?s[r++]=n:s=new e(n)}return s}var y,P="undefined"!=typeof process&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&/\bparse\b/.test({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.LOG),b=null;function S(t,e,s){var i=t.cursor(c.vj.IncludeAnonymous);for(i.moveTo(e);;)if(!(s<0?i.childBefore(e):i.childAfter(e)))for(;;){if((s<0?i.to<e:i.from>e)&&!i.type.isError)return s<0?Math.max(0,Math.min(i.to-1,e-25)):Math.min(t.length,Math.max(i.from+1,e+25));if(s<0?i.prevSibling():i.nextSibling())break;if(!i.parent())return s<0?0:t.length}}!function(t){t[t.Margin=25]="Margin"}(y||(y={}));var C,T=function(){function t(e,s){(0,o.Z)(this,t),this.fragments=e,this.nodeSet=s,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}return(0,u.Z)(t,[{key:"nextFragment",value:function(){var t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(t){for(this.safeFrom=t.openStart?S(t.tree,t.from+t.offset,1)-t.offset:t.from,this.safeTo=t.openEnd?S(t.tree,t.to+t.offset,-1)-t.offset:t.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(t.tree),this.start.push(-t.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}},{key:"nodeAt",value:function(t){if(t<this.nextStart)return null;for(;this.fragment&&this.safeTo<=t;)this.nextFragment();if(!this.fragment)return null;for(;;){var e=this.trees.length-1;if(e<0)return this.nextFragment(),null;var s=this.trees[e],i=this.index[e];if(i!=s.children.length){var r=s.children[i],n=this.start[e]+s.positions[i];if(n>t)return this.nextStart=n,null;if(r instanceof c.mp){if(n==t){if(n<this.safeFrom)return null;var a=n+r.length;if(a<=this.safeTo){var h=r.prop(c.md.lookAhead);if(!h||a+h<this.fragment.to)return r}}this.index[e]++,n+r.length>=Math.max(this.safeFrom,t)&&(this.trees.push(r),this.start.push(n),this.index.push(0))}else this.index[e]++,this.nextStart=n+r.length}else this.trees.pop(),this.start.pop(),this.index.pop()}}}]),t}(),A=function(){function t(e,s){(0,o.Z)(this,t),this.stream=s,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map((function(t){return new k}))}return(0,u.Z)(t,[{key:"getActions",value:function(t){for(var e=0,s=null,i=t.p.parser,r=i.tokenizers,n=i.stateSlot(t.state,3),a=t.curContext?t.curContext.hash:0,h=0,o=0;o<r.length;o++)if(0!=(1<<o&n)){var u=r[o],c=this.tokens[o];if((!s||u.fallback)&&((u.contextual||c.start!=t.pos||c.mask!=n||c.context!=a)&&(this.updateCachedToken(c,u,t),c.mask=n,c.context=a),c.lookAhead>c.end+25&&(h=Math.max(c.lookAhead,h)),0!=c.value)){var f=e;if(c.extended>-1&&(e=this.addActions(t,c.extended,c.end,e)),e=this.addActions(t,c.value,c.end,e),!u.extend&&(s=c,e>f))break}}for(;this.actions.length>e;)this.actions.pop();return h&&t.setLookAhead(h),s||t.pos!=this.stream.end||((s=new k).value=t.p.parser.eofTerm,s.start=s.end=t.pos,e=this.addActions(t,s.value,s.end,e)),this.mainToken=s,this.actions}},{key:"getMainToken",value:function(t){if(this.mainToken)return this.mainToken;var e=new k,s=t.pos,i=t.p;return e.start=s,e.end=Math.min(s+1,i.stream.end),e.value=s==i.stream.end?i.parser.eofTerm:0,e}},{key:"updateCachedToken",value:function(t,e,s){if(e.token(this.stream.reset(s.pos,t),s),t.value>-1){for(var i=s.p.parser,r=0;r<i.specialized.length;r++)if(i.specialized[r]==t.value){var n=i.specializers[r](this.stream.read(t.start,t.end),s);if(n>=0&&s.p.parser.dialect.allows(n>>1)){0==(1&n)?t.value=n>>1:t.extended=n>>1;break}}}else t.value=0,t.end=Math.min(s.p.stream.end,s.pos+1)}},{key:"putAction",value:function(t,e,s,i){for(var r=0;r<i;r+=3)if(this.actions[r]==t)return i;return this.actions[i++]=t,this.actions[i++]=e,this.actions[i++]=s,i}},{key:"addActions",value:function(t,e,s,i){for(var r=t.state,n=t.p.parser,a=n.data,h=0;h<2;h++)for(var o=n.stateSlot(r,h?2:1);;o+=3){if(65535==a[o]){if(1!=a[o+1]){0==i&&2==a[o+1]&&(i=this.putAction(I(a,o+2),e,s,i));break}o=I(a,o+2)}a[o]==e&&(i=this.putAction(I(a,o+1),e,s,i))}return i}}]),t}();!function(t){t[t.Distance=5]="Distance",t[t.MaxRemainingPerStep=3]="MaxRemainingPerStep",t[t.MinBufferLengthPrune=500]="MinBufferLengthPrune",t[t.ForceReduceLimit=10]="ForceReduceLimit",t[t.CutDepth=15e3]="CutDepth",t[t.CutTo=9e3]="CutTo"}(C||(C={}));var R=function(){function t(e,s,i,r){(0,o.Z)(this,t),this.parser=e,this.input=s,this.ranges=r,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.stream=new g(s,r),this.tokens=new A(e,this.stream),this.topTerm=e.top[1];var n=r[0].from;this.stacks=[f.start(this,e.top[0],n)],this.fragments=i.length&&this.stream.end-n>4*e.bufferLength?new T(i,e.nodeSet):null}return(0,u.Z)(t,[{key:"parsedPos",get:function(){return this.minStackPos}},{key:"advance",value:function(){for(var t,e,s=this.stacks,i=this.minStackPos,r=this.stacks=[],n=0;n<s.length;n++)for(var a=s[n];;){if(this.tokens.mainToken=null,a.pos>i)r.push(a);else{if(this.advanceStack(a,r,s))continue;t||(t=[],e=[]),t.push(a);var o=this.tokens.getMainToken(a);e.push(o.value,o.end)}break}if(!r.length){var u=t&&function(t){var e,s=null,i=(0,h.Z)(t);try{for(i.s();!(e=i.n()).done;){var r=e.value,n=r.p.stoppedAt;(r.pos==r.p.stream.end||null!=n&&r.pos>n)&&r.p.parser.stateFlag(r.state,2)&&(!s||s.score<r.score)&&(s=r)}}catch(a){i.e(a)}finally{i.f()}return s}(t);if(u)return this.stackToTree(u);if(this.parser.strict)throw P&&t&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+i);this.recovering||(this.recovering=5)}if(this.recovering&&t){var c=null!=this.stoppedAt&&t[0].pos>this.stoppedAt?t[0]:this.runRecovery(t,e,r);if(c)return this.stackToTree(c.forceAll())}if(this.recovering){var f=1==this.recovering?1:3*this.recovering;if(r.length>f)for(r.sort((function(t,e){return e.score-t.score}));r.length>f;)r.pop();r.some((function(t){return t.reducePos>i}))&&this.recovering--}else if(r.length>1)t:for(var l=0;l<r.length-1;l++)for(var p=r[l],d=l+1;d<r.length;d++){var k=r[d];if(p.sameState(k)||p.buffer.length>500&&k.buffer.length>500){if(!((p.score-k.score||p.buffer.length-k.buffer.length)>0)){r.splice(l--,1);continue t}r.splice(d--,1)}}this.minStackPos=r[0].pos;for(var v=1;v<r.length;v++)r[v].pos<this.minStackPos&&(this.minStackPos=r[v].pos);return null}},{key:"stopAt",value:function(t){if(null!=this.stoppedAt&&this.stoppedAt<t)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=t}},{key:"advanceStack",value:function(t,e,s){var i=t.pos,r=this.parser,n=P?this.stackID(t)+" -> ":"";if(null!=this.stoppedAt&&i>this.stoppedAt)return t.forceReduce()?t:null;if(this.fragments)for(var a=t.curContext&&t.curContext.tracker.strict,h=a?t.curContext.hash:0,o=this.fragments.nodeAt(i);o;){var u=this.parser.nodeSet.types[o.type.id]==o.type?r.getGoto(t.state,o.type.id):-1;if(u>-1&&o.length&&(!a||(o.prop(c.md.contextHash)||0)==h))return t.useNode(o,u),P&&console.log(n+this.stackID(t)+" (via reuse of ".concat(r.getName(o.type.id),")")),!0;if(!(o instanceof c.mp)||0==o.children.length||o.positions[0]>0)break;var f=o.children[0];if(!(f instanceof c.mp&&0==o.positions[0]))break;o=f}var l=r.stateSlot(t.state,4);if(l>0)return t.reduce(l),P&&console.log(n+this.stackID(t)+" (via always-reduce ".concat(r.getName(65535&l),")")),!0;if(t.stack.length>=15e3)for(;t.stack.length>9e3&&t.forceReduce(););for(var p=this.tokens.getActions(t),d=0;d<p.length;){var k=p[d++],v=p[d++],g=p[d++],m=d==p.length||!s,x=m?t:t.split();if(x.apply(k,v,g),P&&console.log(n+this.stackID(x)+" (via ".concat(0==(65536&k)?"shift":"reduce of ".concat(r.getName(65535&k))," for ").concat(r.getName(v)," @ ").concat(i).concat(x==t?"":", split",")")),m)return!0;x.pos>i?e.push(x):s.push(x)}return!1}},{key:"advanceFully",value:function(t,e){for(var s=t.pos;;){if(!this.advanceStack(t,null,null))return!1;if(t.pos>s)return w(t,e),!0}}},{key:"runRecovery",value:function(t,e,s){for(var i=null,r=!1,n=0;n<t.length;n++){var a=t[n],o=e[n<<1],u=e[1+(n<<1)],c=P?this.stackID(a)+" -> ":"";if(a.deadEnd){if(r)continue;if(r=!0,a.restart(),P&&console.log(c+this.stackID(a)+" (restarted)"),this.advanceFully(a,s))continue}for(var f=a.split(),l=c,p=0;f.forceReduce()&&p<10;p++){if(P&&console.log(l+this.stackID(f)+" (via force-reduce)"),this.advanceFully(f,s))break;P&&(l=this.stackID(f)+" -> ")}var d,k=(0,h.Z)(a.recoverByInsert(o));try{for(k.s();!(d=k.n()).done;){var v=d.value;P&&console.log(c+this.stackID(v)+" (via recover-insert)"),this.advanceFully(v,s)}}catch(g){k.e(g)}finally{k.f()}this.stream.end>a.pos?(u==a.pos&&(u++,o=0),a.recoverByDelete(o,u),P&&console.log(c+this.stackID(a)+" (via recover-delete ".concat(this.parser.getName(o),")")),w(a,s)):(!i||i.score<a.score)&&(i=a)}return i}},{key:"stackToTree",value:function(t){return t.close(),c.mp.build({buffer:d.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:t.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}},{key:"stackID",value:function(t){var e=(b||(b=new WeakMap)).get(t);return e||b.set(t,e=String.fromCodePoint(this.nextStackID++)),e+t}}]),t}();function w(t,e){for(var s=0;s<e.length;s++){var i=e[s];if(i.pos==t.pos&&i.sameState(t))return void(e[s].score<t.score&&(e[s]=t))}e.push(t)}var Q=function(){function t(e,s,i){(0,o.Z)(this,t),this.source=e,this.flags=s,this.disabled=i}return(0,u.Z)(t,[{key:"allows",value:function(t){return!this.disabled||0==this.disabled[t]}}]),t}(),N=function(t){return t},Z=(0,u.Z)((function t(e){(0,o.Z)(this,t),this.start=e.start,this.shift=e.shift||N,this.reduce=e.reduce||N,this.reuse=e.reuse||N,this.hash=e.hash||function(){return 0},this.strict=!1!==e.strict})),D=function(t){(0,n.Z)(s,t);var e=(0,a.Z)(s);function s(t){var i,n;if((0,o.Z)(this,s),(n=e.call(this)).wrappers=[],14!=t.version)throw new RangeError("Parser version (".concat(t.version,") doesn't match runtime version (",14,")"));var a=t.nodeNames.split(" ");n.minRepeatTerm=a.length;for(var u=0;u<t.repeatNodeCount;u++)a.push("");for(var f=Object.keys(t.topRules).map((function(e){return t.topRules[e][1]})),l=[],p=0;p<a.length;p++)l.push([]);function d(t,e,s){l[t].push([e,e.deserialize(String(s))])}if(t.nodeProps){var k,v=(0,h.Z)(t.nodeProps);try{for(v.s();!(k=v.n()).done;){var g=k.value,x=g[0];"string"==typeof x&&(x=c.md[x]);for(var y=1;y<g.length;){var P=g[y++];if(P>=0)d(P,x,g[y++]);else{for(var b=g[y+-P],S=-P;S>0;S--)d(g[y++],x,b);y++}}}}catch(A){v.e(A)}finally{v.f()}}n.nodeSet=new c.Lj(a.map((function(e,s){return c.Jq.define({name:s>=n.minRepeatTerm?void 0:e,id:s,props:l[s],top:f.indexOf(s)>-1,error:0==s,skipped:t.skippedNodes&&t.skippedNodes.indexOf(s)>-1})}))),t.propSources&&(n.nodeSet=(i=n.nodeSet).extend.apply(i,(0,r.Z)(t.propSources))),n.strict=!1,n.bufferLength=c.L3;var C=O(t.tokenData);if(n.context=t.context,n.specialized=new Uint16Array(t.specialized?t.specialized.length:0),n.specializers=[],t.specialized)for(var T=0;T<t.specialized.length;T++)n.specialized[T]=t.specialized[T].term,n.specializers[T]=t.specialized[T].get;return n.states=O(t.states,Uint32Array),n.data=O(t.stateData),n.goto=O(t.goto),n.maxTerm=t.maxTerm,n.tokenizers=t.tokenizers.map((function(t){return"number"==typeof t?new m(C,t):t})),n.topRules=t.topRules,n.dialects=t.dialects||{},n.dynamicPrecedences=t.dynamicPrecedences||null,n.tokenPrecTable=t.tokenPrec,n.termNames=t.termNames||null,n.maxNode=n.nodeSet.types.length-1,n.dialect=n.parseDialect(),n.top=n.topRules[Object.keys(n.topRules)[0]],n}return(0,u.Z)(s,[{key:"createParse",value:function(t,e,s){var i,r=new R(this,t,e,s),n=(0,h.Z)(this.wrappers);try{for(n.s();!(i=n.n()).done;){r=(0,i.value)(r,t,e,s)}}catch(a){n.e(a)}finally{n.f()}return r}},{key:"getGoto",value:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.goto;if(e>=i[0])return-1;for(var r=i[e+1];;){var n=i[r++],a=1&n,h=i[r++];if(a&&s)return h;for(var o=r+(n>>1);r<o;r++)if(i[r]==t)return h;if(a)return-1}}},{key:"hasAction",value:function(t,e){for(var s=this.data,i=0;i<2;i++)for(var r,n=this.stateSlot(t,i?2:1);;n+=3){if(65535==(r=s[n])){if(1!=s[n+1]){if(2==s[n+1])return I(s,n+2);break}r=s[n=I(s,n+2)]}if(r==e||0==r)return I(s,n+1)}return 0}},{key:"stateSlot",value:function(t,e){return this.states[6*t+e]}},{key:"stateFlag",value:function(t,e){return(this.stateSlot(t,0)&e)>0}},{key:"validAction",value:function(t,e){if(e==this.stateSlot(t,4))return!0;for(var s=this.stateSlot(t,1);;s+=3){if(65535==this.data[s]){if(1!=this.data[s+1])return!1;s=I(this.data,s+2)}if(e==I(this.data,s+1))return!0}}},{key:"nextStates",value:function(t){for(var e=this,s=[],i=this.stateSlot(t,1);;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])break;i=I(this.data,i+2)}0==(1&this.data[i+2])&&function(){var t=e.data[i+1];s.some((function(e,s){return 1&s&&e==t}))||s.push(e.data[i],t)}()}return s}},{key:"overrides",value:function(t,e){var s=z(this.data,this.tokenPrecTable,e);return s<0||z(this.data,this.tokenPrecTable,t)<s}},{key:"configure",value:function(t){var e,i=Object.assign(Object.create(s.prototype),this);if(t.props&&(i.nodeSet=(e=this.nodeSet).extend.apply(e,(0,r.Z)(t.props))),t.top){var n=this.topRules[t.top];if(!n)throw new RangeError("Invalid top rule name ".concat(t.top));i.top=n}return t.tokenizers&&(i.tokenizers=this.tokenizers.map((function(e){var s=t.tokenizers.find((function(t){return t.from==e}));return s?s.to:e}))),t.contextTracker&&(i.context=t.contextTracker),t.dialect&&(i.dialect=this.parseDialect(t.dialect)),null!=t.strict&&(i.strict=t.strict),t.wrap&&(i.wrappers=i.wrappers.concat(t.wrap)),null!=t.bufferLength&&(i.bufferLength=t.bufferLength),i}},{key:"hasWrappers",value:function(){return this.wrappers.length>0}},{key:"getName",value:function(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)}},{key:"eofTerm",get:function(){return this.maxNode+1}},{key:"topNode",get:function(){return this.nodeSet.types[this.top[1]]}},{key:"dynamicPrecedence",value:function(t){var e=this.dynamicPrecedences;return null==e?0:e[t]||0}},{key:"parseDialect",value:function(t){var e=Object.keys(this.dialects),s=e.map((function(){return!1}));if(t){var i,r=(0,h.Z)(t.split(" "));try{for(r.s();!(i=r.n()).done;){var n=i.value,a=e.indexOf(n);a>=0&&(s[a]=!0)}}catch(l){r.e(l)}finally{r.f()}}for(var o=null,u=0;u<e.length;u++)if(!s[u])for(var c,f=this.dialects[e[u]];65535!=(c=this.data[f++]);)(o||(o=new Uint8Array(this.maxTerm+1)))[c]=1;return new Q(t,s,o)}}],[{key:"deserialize",value:function(t){return new s(t)}}]),s}(c._b);function I(t,e){return t[e]|t[e+1]<<16}function z(t,e,s){for(var i,r=e;65535!=(i=t[r]);r++)if(i==s)return r-e;return-1}}}]);
//# sourceMappingURL=851.1ba492de.chunk.js.map