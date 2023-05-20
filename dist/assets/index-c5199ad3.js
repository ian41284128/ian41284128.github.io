(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="152",Ra=0,Ur=1,wa=2,Ks=1,Ca=2,Vt=3,Jt=0,dt=1,kt=2,$t=0,On=1,Dr=2,Ir=3,Nr=4,La=5,Nn=100,Pa=101,Ua=102,Fr=103,Or=104,Da=200,Ia=201,Na=202,Fa=203,js=204,Zs=205,Oa=206,Ba=207,za=208,Ga=209,Ha=210,Va=0,ka=1,Wa=2,pr=3,Xa=4,qa=5,Ya=6,Ka=7,$s=0,ja=1,Za=2,Xt=0,$a=1,Ja=2,Qa=3,eo=4,to=5,Js=300,Gn=301,Hn=302,mr=303,_r=304,Li=306,gr=1e3,Ct=1001,vr=1002,ct=1003,Br=1004,Bi=1005,St=1006,no=1007,ei=1008,mn=1009,io=1010,ro=1011,Qs=1012,so=1013,cn=1014,un=1015,ti=1016,ao=1017,oo=1018,Bn=1020,lo=1021,Lt=1023,co=1024,uo=1025,hn=1026,Vn=1027,ho=1028,fo=1029,po=1030,mo=1031,_o=1033,zi=33776,Gi=33777,Hi=33778,Vi=33779,zr=35840,Gr=35841,Hr=35842,Vr=35843,go=36196,kr=37492,Wr=37496,Xr=37808,qr=37809,Yr=37810,Kr=37811,jr=37812,Zr=37813,$r=37814,Jr=37815,Qr=37816,es=37817,ts=37818,ns=37819,is=37820,rs=37821,ki=36492,vo=36283,ss=36284,as=36285,os=36286,ea=3e3,dn=3001,xo=3200,Mo=3201,So=0,Eo=1,fn="",ye="srgb",Nt="srgb-linear",ta="display-p3",Wi=7680,To=519,ls=35044,cs="300 es",xr=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xi=Math.PI/180,Mr=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function yo(i,e){return(i%e+e)%e}function qi(i,e,t){return(1-t)*i+t*e}function us(i){return(i&i-1)===0&&i!==0}function Ao(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],x=n[8],v=r[0],p=r[3],c=r[6],A=r[1],E=r[4],b=r[7],y=r[2],C=r[5],P=r[8];return s[0]=o*v+a*A+u*y,s[3]=o*p+a*E+u*C,s[6]=o*c+a*b+u*P,s[1]=l*v+h*A+f*y,s[4]=l*p+h*E+f*C,s[7]=l*c+h*b+f*P,s[2]=d*v+m*A+x*y,s[5]=d*p+m*E+x*C,s[8]=d*c+m*b+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*u+r*s*l-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*u-h*s,m=l*s-o*u,x=t*f+n*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*l-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=d*v,e[4]=(h*t-r*u)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*u-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-r*l,r*u,-r*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yi.makeScale(e,t)),this}rotate(e){return this.premultiply(Yi.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yi.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yi=new Pe;function na(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const hs={};function Qn(i){i in hs||(hs[i]=!0,console.warn(i))}function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bo=new Pe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ro=new Pe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wo(i){return i.convertSRGBToLinear().applyMatrix3(Ro)}function Co(i){return i.applyMatrix3(bo).convertLinearToSRGB()}const Lo={[Nt]:i=>i,[ye]:i=>i.convertSRGBToLinear(),[ta]:wo},Po={[Nt]:i=>i,[ye]:i=>i.convertLinearToSRGB(),[ta]:Co},yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Nt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Lo[e],r=Po[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let xn;class ia{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xn===void 0&&(xn=Ci("canvas")),xn.width=e.width,xn.height=e.height;const n=xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ra{constructor(e=null){this.isSource=!0,this.uuid=ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ji(r[o].image)):s.push(ji(r[o]))}else s=ji(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ji(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uo=0;class gt extends Wn{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Ct,r=Ct,s=St,o=ei,a=Lt,u=mn,l=gt.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uo++}),this.uuid=ni(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===dn?ye:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Js)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?dn:ea}set encoding(e){Qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dn?ye:fn}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Js;gt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,l=u[0],h=u[4],f=u[8],d=u[1],m=u[5],x=u[9],v=u[2],p=u[6],c=u[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,b=(m+1)/2,y=(c+1)/2,C=(h+d)/4,P=(f+v)/4,X=(x+p)/4;return E>b&&E>y?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=P/n):b>y?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=X/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=P/s,r=X/s),this.set(n,r,s,t),this}let A=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-x)/A,this.y=(f-v)/A,this.z=(d-h)/A,this.w=Math.acos((l+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _n extends Wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dn?ye:fn),this.texture=new gt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:St,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let u=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[t+0]=u,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||u!==d||l!==m||h!==x){let p=1-a;const c=u*d+l*m+h*x+f*v,A=c>=0?1:-1,E=1-c*c;if(E>Number.EPSILON){const y=Math.sqrt(E),C=Math.atan2(y,c*A);p=Math.sin(p*C)/y,a=Math.sin(a*C)/y}const b=a*A;if(u=u*p+d*b,l=l*p+m*b,h=h*p+x*b,f=f*p+v*b,p===1-a){const y=1/Math.sqrt(u*u+l*l+h*h+f*f);u*=y,l*=y,h*=y,f*=y}}e[t]=u,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],u=n[r+1],l=n[r+2],h=n[r+3],f=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+h*f+u*m-l*d,e[t+1]=u*x+h*d+l*f-a*m,e[t+2]=l*x+h*m+a*d-u*f,e[t+3]=h*x-a*f-u*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(n/2),h=a(r/2),f=a(s/2),d=u(n/2),m=u(r/2),x=u(s/2);switch(o){case"XYZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"YZX":this._x=d*h*f+l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f-d*m*x;break;case"XZY":this._x=d*h*f-l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],u=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-u)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-u)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(u+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(u+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,u=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*u,this._y=r*h+o*u+s*a-n*l,this._z=s*h+o*l+n*u-r*a,this._w=o*h-n*a-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(u),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ds.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ds.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,l=u*t+o*r-a*n,h=u*n+a*t-s*r,f=u*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=l*u+d*-s+h*-a-f*-o,this.y=h*u+d*-o+f*-s-l*-a,this.z=f*u+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zi.copy(this).projectOnVector(e),this.sub(Zi)}reflect(e){return this.sub(Zi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zi=new I,ds=new ii;class ri{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Mn.copy(e.boundingBox),Mn.applyMatrix4(e.matrixWorld),this.union(Mn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Ot.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ot)}else r.boundingBox===null&&r.computeBoundingBox(),Mn.copy(r.boundingBox),Mn.applyMatrix4(e.matrixWorld),this.union(Mn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),oi.subVectors(this.max,Kn),Sn.subVectors(e.a,Kn),En.subVectors(e.b,Kn),Tn.subVectors(e.c,Kn),Yt.subVectors(En,Sn),Kt.subVectors(Tn,En),nn.subVectors(Sn,Tn);let t=[0,-Yt.z,Yt.y,0,-Kt.z,Kt.y,0,-nn.z,nn.y,Yt.z,0,-Yt.x,Kt.z,0,-Kt.x,nn.z,0,-nn.x,-Yt.y,Yt.x,0,-Kt.y,Kt.x,0,-nn.y,nn.x,0];return!$i(t,Sn,En,Tn,oi)||(t=[1,0,0,0,1,0,0,0,1],!$i(t,Sn,En,Tn,oi))?!1:(li.crossVectors(Yt,Kt),t=[li.x,li.y,li.z],$i(t,Sn,En,Tn,oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ft=[new I,new I,new I,new I,new I,new I,new I,new I],Ot=new I,Mn=new ri,Sn=new I,En=new I,Tn=new I,Yt=new I,Kt=new I,nn=new I,Kn=new I,oi=new I,li=new I,rn=new I;function $i(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){rn.fromArray(i,s);const a=r.x*Math.abs(rn.x)+r.y*Math.abs(rn.y)+r.z*Math.abs(rn.z),u=e.dot(rn),l=t.dot(rn),h=n.dot(rn);if(Math.max(-Math.max(u,l,h),Math.min(u,l,h))>a)return!1}return!0}const Io=new ri,jn=new I,Ji=new I;class yr{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Io.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jn.subVectors(e,this.center);const t=jn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(jn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ji.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jn.copy(e.center).add(Ji)),this.expandByPoint(jn.copy(e.center).sub(Ji))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bt=new I,Qi=new I,ci=new I,jt=new I,er=new I,ui=new I,tr=new I;class No{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bt.copy(this.origin).addScaledVector(this.direction,t),Bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qi.copy(e).add(t).multiplyScalar(.5),ci.copy(t).sub(e).normalize(),jt.copy(this.origin).sub(Qi);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ci),a=jt.dot(this.direction),u=-jt.dot(ci),l=jt.lengthSq(),h=Math.abs(1-o*o);let f,d,m,x;if(h>0)if(f=o*u-a,d=o*a-u,x=s*h,f>=0)if(d>=-x)if(d<=x){const v=1/h;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*u)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+l;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-u),s),m=-f*f+d*(d+2*u)+l):d<=x?(f=0,d=Math.min(Math.max(-s,-u),s),m=d*(d+2*u)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-u),s),m=-f*f+d*(d+2*u)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qi).addScaledVector(ci,d),m}intersectSphere(e,t){Bt.subVectors(e.center,this.origin);const n=Bt.dot(this.direction),r=Bt.dot(Bt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,u;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,u=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,u=(e.min.z-d.z)*f),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bt)!==null}intersectTriangle(e,t,n,r,s){er.subVectors(t,e),ui.subVectors(n,e),tr.crossVectors(er,ui);let o=this.direction.dot(tr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jt.subVectors(this.origin,e);const u=a*this.direction.dot(ui.crossVectors(jt,ui));if(u<0)return null;const l=a*this.direction.dot(er.cross(jt));if(l<0||u+l>o)return null;const h=-a*jt.dot(tr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,u,l,h,f,d,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=u,c[2]=l,c[6]=h,c[10]=f,c[14]=d,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/yn.setFromMatrixColumn(e,0).length(),s=1/yn.setFromMatrixColumn(e,1).length(),o=1/yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*f,x=a*h,v=a*f;t[0]=u*h,t[4]=-u*f,t[8]=l,t[1]=m+x*l,t[5]=d-v*l,t[9]=-a*u,t[2]=v-d*l,t[6]=x+m*l,t[10]=o*u}else if(e.order==="YXZ"){const d=u*h,m=u*f,x=l*h,v=l*f;t[0]=d+v*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=v+d*a,t[10]=o*u}else if(e.order==="ZXY"){const d=u*h,m=u*f,x=l*h,v=l*f;t[0]=d-v*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const d=o*h,m=o*f,x=a*h,v=a*f;t[0]=u*h,t[4]=x*l-m,t[8]=d*l+v,t[1]=u*f,t[5]=v*l+d,t[9]=m*l-x,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const d=o*u,m=o*l,x=a*u,v=a*l;t[0]=u*h,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*u,m=o*l,x=a*u,v=a*l;t[0]=u*h,t[4]=-f,t[8]=l*h,t[1]=d*f+v,t[5]=o*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fo,e,Oo)}lookAt(e,t,n){const r=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),Zt.crossVectors(n,mt),Zt.lengthSq()===0&&(Math.abs(n.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),Zt.crossVectors(n,mt)),Zt.normalize(),hi.crossVectors(mt,Zt),r[0]=Zt.x,r[4]=hi.x,r[8]=mt.x,r[1]=Zt.y,r[5]=hi.y,r[9]=mt.y,r[2]=Zt.z,r[6]=hi.z,r[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],x=n[2],v=n[6],p=n[10],c=n[14],A=n[3],E=n[7],b=n[11],y=n[15],C=r[0],P=r[4],X=r[8],g=r[12],T=r[1],j=r[5],Y=r[9],D=r[13],z=r[2],V=r[6],J=r[10],W=r[14],k=r[3],ee=r[7],K=r[11],_e=r[15];return s[0]=o*C+a*T+u*z+l*k,s[4]=o*P+a*j+u*V+l*ee,s[8]=o*X+a*Y+u*J+l*K,s[12]=o*g+a*D+u*W+l*_e,s[1]=h*C+f*T+d*z+m*k,s[5]=h*P+f*j+d*V+m*ee,s[9]=h*X+f*Y+d*J+m*K,s[13]=h*g+f*D+d*W+m*_e,s[2]=x*C+v*T+p*z+c*k,s[6]=x*P+v*j+p*V+c*ee,s[10]=x*X+v*Y+p*J+c*K,s[14]=x*g+v*D+p*W+c*_e,s[3]=A*C+E*T+b*z+y*k,s[7]=A*P+E*j+b*V+y*ee,s[11]=A*X+E*Y+b*J+y*K,s[15]=A*g+E*D+b*W+y*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*u*f-r*l*f-s*a*d+n*l*d+r*a*m-n*u*m)+v*(+t*u*m-t*l*d+s*o*d-r*o*m+r*l*h-s*u*h)+p*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*h-n*l*h)+c*(-r*a*h-t*u*f+t*a*d+r*o*f-n*o*d+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],A=f*p*l-v*d*l+v*u*m-a*p*m-f*u*c+a*d*c,E=x*d*l-h*p*l-x*u*m+o*p*m+h*u*c-o*d*c,b=h*v*l-x*f*l+x*a*m-o*v*m-h*a*c+o*f*c,y=x*f*u-h*v*u-x*a*d+o*v*d+h*a*p-o*f*p,C=t*A+n*E+r*b+s*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(v*d*s-f*p*s-v*r*m+n*p*m+f*r*c-n*d*c)*P,e[2]=(a*p*s-v*u*s+v*r*l-n*p*l-a*r*c+n*u*c)*P,e[3]=(f*u*s-a*d*s-f*r*l+n*d*l+a*r*m-n*u*m)*P,e[4]=E*P,e[5]=(h*p*s-x*d*s+x*r*m-t*p*m-h*r*c+t*d*c)*P,e[6]=(x*u*s-o*p*s-x*r*l+t*p*l+o*r*c-t*u*c)*P,e[7]=(o*d*s-h*u*s+h*r*l-t*d*l-o*r*m+t*u*m)*P,e[8]=b*P,e[9]=(x*f*s-h*v*s-x*n*m+t*v*m+h*n*c-t*f*c)*P,e[10]=(o*v*s-x*a*s+x*n*l-t*v*l-o*n*c+t*a*c)*P,e[11]=(h*a*s-o*f*s-h*n*l+t*f*l+o*n*m-t*a*m)*P,e[12]=y*P,e[13]=(h*v*r-x*f*r+x*n*d-t*v*d-h*n*p+t*f*p)*P,e[14]=(x*a*r-o*v*r-x*n*u+t*v*u+o*n*p-t*a*p)*P,e[15]=(o*f*r-h*a*r+h*n*u-t*f*u-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*u,l*u+r*a,0,l*a+r*u,h*a+n,h*u-r*o,0,l*u-r*a,h*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,l=s+s,h=o+o,f=a+a,d=s*l,m=s*h,x=s*f,v=o*h,p=o*f,c=a*f,A=u*l,E=u*h,b=u*f,y=n.x,C=n.y,P=n.z;return r[0]=(1-(v+c))*y,r[1]=(m+b)*y,r[2]=(x-E)*y,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(d+c))*C,r[6]=(p+A)*C,r[7]=0,r[8]=(x+E)*P,r[9]=(p-A)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=yn.set(r[0],r[1],r[2]).length();const o=yn.set(r[4],r[5],r[6]).length(),a=yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],At.copy(this);const l=1/s,h=1/o,f=1/a;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=h,At.elements[5]*=h,At.elements[6]*=h,At.elements[8]*=f,At.elements[9]*=f,At.elements[10]*=f,t.setFromRotationMatrix(At),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,u=2*s/(t-e),l=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,u=1/(t-e),l=1/(n-r),h=1/(o-s),f=(t+e)*u,d=(n+r)*l,m=(o+s)*h;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yn=new I,At=new nt,Fo=new I(0,0,0),Oo=new I(1,1,1),Zt=new I,hi=new I,mt=new I,fs=new nt,ps=new ii;class Pi{constructor(e=0,t=0,n=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ps.setFromEuler(this),this.setFromQuaternion(ps,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bo=0;const ms=new I,An=new ii,zt=new nt,di=new I,Zn=new I,zo=new I,Go=new ii,_s=new I(1,0,0),gs=new I(0,1,0),vs=new I(0,0,1),Ho={type:"added"},xs={type:"removed"};class vt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bo++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new Pi,n=new ii,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(_s,e)}rotateY(e){return this.rotateOnAxis(gs,e)}rotateZ(e){return this.rotateOnAxis(vs,e)}translateOnAxis(e,t){return ms.copy(e).applyQuaternion(this.quaternion),this.position.add(ms.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_s,e)}translateY(e){return this.translateOnAxis(gs,e)}translateZ(e){return this.translateOnAxis(vs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?di.copy(e):di.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zt.lookAt(Zn,di,this.up):zt.lookAt(di,Zn,this.up),this.quaternion.setFromRotationMatrix(zt),r&&(zt.extractRotation(r.matrixWorld),An.setFromRotationMatrix(zt),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ho)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,zo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,Go,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,h=u.length;l<h;l++){const f=u[l];s(e.shapes,f)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const u=[];for(const l in a){const h=a[l];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bt=new I,Gt=new I,nr=new I,Ht=new I,bn=new I,Rn=new I,Ms=new I,ir=new I,rr=new I,sr=new I;let fi=!1;class wt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bt.subVectors(e,t),r.cross(bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bt.subVectors(r,t),Gt.subVectors(n,t),nr.subVectors(e,t);const o=bt.dot(bt),a=bt.dot(Gt),u=bt.dot(nr),l=Gt.dot(Gt),h=Gt.dot(nr),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(l*u-a*h)*d,x=(o*h-a*u)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ht),Ht.x>=0&&Ht.y>=0&&Ht.x+Ht.y<=1}static getUV(e,t,n,r,s,o,a,u){return fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fi=!0),this.getInterpolation(e,t,n,r,s,o,a,u)}static getInterpolation(e,t,n,r,s,o,a,u){return this.getBarycoord(e,t,n,r,Ht),u.setScalar(0),u.addScaledVector(s,Ht.x),u.addScaledVector(o,Ht.y),u.addScaledVector(a,Ht.z),u}static isFrontFacing(e,t,n,r){return bt.subVectors(n,t),Gt.subVectors(e,t),bt.cross(Gt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bt.subVectors(this.c,this.b),Gt.subVectors(this.a,this.b),bt.cross(Gt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fi=!0),wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;bn.subVectors(r,n),Rn.subVectors(s,n),ir.subVectors(e,n);const u=bn.dot(ir),l=Rn.dot(ir);if(u<=0&&l<=0)return t.copy(n);rr.subVectors(e,r);const h=bn.dot(rr),f=Rn.dot(rr);if(h>=0&&f<=h)return t.copy(r);const d=u*f-h*l;if(d<=0&&u>=0&&h<=0)return o=u/(u-h),t.copy(n).addScaledVector(bn,o);sr.subVectors(e,s);const m=bn.dot(sr),x=Rn.dot(sr);if(x>=0&&m<=x)return t.copy(s);const v=m*l-u*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Rn,a);const p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Ms.subVectors(s,r),a=(f-h)/(f-h+(m-x)),t.copy(r).addScaledVector(Ms,a);const c=1/(p+v+d);return o=v*c,a=d*c,t.copy(n).addScaledVector(bn,o).addScaledVector(Rn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vo=0;class Ui extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=On,this.side=Jt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=js,this.blendDst=Zs,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Jt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rt={h:0,s:0,l:0},pi={h:0,s:0,l:0};function ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=yo(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ar(o,s,e+1/3),this.g=ar(o,s,e),this.b=ar(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ye){const n=oa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ye){return yt.fromWorkingColorSpace(st.copy(this),e),Math.round(ht(st.r*255,0,255))*65536+Math.round(ht(st.g*255,0,255))*256+Math.round(ht(st.b*255,0,255))}getHexString(e=ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(st.copy(this),t);const n=st.r,r=st.g,s=st.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,l;const h=(a+o)/2;if(a===o)u=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-n)/f+2;break;case s:u=(n-r)/f+4;break}u/=6}return e.h=u,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(st.copy(this),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=ye){yt.fromWorkingColorSpace(st.copy(this),e);const t=st.r,n=st.g,r=st.b;return e!==ye?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=n,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL(pi);const n=qi(Rt.h,pi.h,t),r=qi(Rt.s,pi.s,t),s=qi(Rt.l,pi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const st=new He;He.NAMES=oa;class Ar extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new I,mi=new Ge;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ls,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mi.fromBufferAttribute(this,t),mi.applyMatrix3(e),this.setXY(t,mi.x,mi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ls&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class la extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ca extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ko=0;const Mt=new nt,or=new vt,wn=new I,_t=new ri,$n=new ri,Qe=new I;class vn extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ko++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(na(e)?ca:la)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wn).negate(),this.translate(wn.x,wn.y,wn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];_t.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(_t.min,$n.min),_t.expandByPoint(Qe),Qe.addVectors(_t.max,$n.max),_t.expandByPoint(Qe)):(_t.expandByPoint($n.min),_t.expandByPoint($n.max))}_t.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Qe.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Qe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qe.fromBufferAttribute(a,l),u&&(wn.fromBufferAttribute(e,l),Qe.add(wn)),r=Math.max(r,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new I,h[T]=new I;const f=new I,d=new I,m=new I,x=new Ge,v=new Ge,p=new Ge,c=new I,A=new I;function E(T,j,Y){f.fromArray(r,T*3),d.fromArray(r,j*3),m.fromArray(r,Y*3),x.fromArray(o,T*2),v.fromArray(o,j*2),p.fromArray(o,Y*2),d.sub(f),m.sub(f),v.sub(x),p.sub(x);const D=1/(v.x*p.y-p.x*v.y);isFinite(D)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(D),A.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(D),l[T].add(c),l[j].add(c),l[Y].add(c),h[T].add(A),h[j].add(A),h[Y].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,j=b.length;T<j;++T){const Y=b[T],D=Y.start,z=Y.count;for(let V=D,J=D+z;V<J;V+=3)E(n[V+0],n[V+1],n[V+2])}const y=new I,C=new I,P=new I,X=new I;function g(T){P.fromArray(s,T*3),X.copy(P);const j=l[T];y.copy(j),y.sub(P.multiplyScalar(P.dot(j))).normalize(),C.crossVectors(X,j);const D=C.dot(h[T])<0?-1:1;u[T*4]=y.x,u[T*4+1]=y.y,u[T*4+2]=y.z,u[T*4+3]=D}for(let T=0,j=b.length;T<j;++T){const Y=b[T],D=Y.start,z=Y.count;for(let V=D,J=D+z;V<J;V+=3)g(n[V+0]),g(n[V+1]),g(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,u=new I,l=new I,h=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(h),u.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,u){const l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(u.length*h);let m=0,x=0;for(let v=0,p=u.length;v<p;v++){a.isInterleavedBufferAttribute?m=u[v]*a.data.stride+a.offset:m=u[v]*h;for(let c=0;c<h;c++)d[x++]=l[m++]}return new It(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],l=e(u,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const u=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[u]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ss=new nt,Ut=new No,_i=new yr,Es=new I,Cn=new I,Ln=new I,Pn=new I,lr=new I,gi=new I,vi=new Ge,xi=new Ge,Mi=new Ge,Ts=new I,ys=new I,As=new I,Si=new I,Ei=new I;class Wt extends vt{constructor(e=new vn,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gi.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const h=a[u],f=s[u];h!==0&&(lr.fromBufferAttribute(f,e),o?gi.addScaledVector(lr,h):gi.addScaledVector(lr.sub(t),h))}t.add(gi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_i.copy(n.boundingSphere),_i.applyMatrix4(s),Ut.copy(e.ray).recast(e.near),!(_i.containsPoint(Ut.origin)===!1&&(Ut.intersectSphere(_i,Es)===null||Ut.origin.distanceToSquared(Es)>(e.far-e.near)**2))&&(Ss.copy(s).invert(),Ut.copy(e.ray).applyMatrix4(Ss),!(n.boundingBox!==null&&Ut.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,x=f.length;m<x;m++){const v=f[m],p=s[v.materialIndex],c=Math.max(v.start,d.start),A=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let E=c,b=A;E<b;E+=3){const y=o.getX(E),C=o.getX(E+1),P=o.getX(E+2);n=Ti(this,p,e,Ut,u,l,h,y,C,P),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let v=m,p=x;v<p;v+=3){const c=o.getX(v),A=o.getX(v+1),E=o.getX(v+2);n=Ti(this,s,e,Ut,u,l,h,c,A,E),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,x=f.length;m<x;m++){const v=f[m],p=s[v.materialIndex],c=Math.max(v.start,d.start),A=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let E=c,b=A;E<b;E+=3){const y=E,C=E+1,P=E+2;n=Ti(this,p,e,Ut,u,l,h,y,C,P),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let v=m,p=x;v<p;v+=3){const c=v,A=v+1,E=v+2;n=Ti(this,s,e,Ut,u,l,h,c,A,E),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}}}function Wo(i,e,t,n,r,s,o,a){let u;if(e.side===dt?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,e.side===Jt,a),u===null)return null;Ei.copy(a),Ei.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ei);return l<t.near||l>t.far?null:{distance:l,point:Ei.clone(),object:i}}function Ti(i,e,t,n,r,s,o,a,u,l){i.getVertexPosition(a,Cn),i.getVertexPosition(u,Ln),i.getVertexPosition(l,Pn);const h=Wo(i,e,t,n,Cn,Ln,Pn,Si);if(h){r&&(vi.fromBufferAttribute(r,a),xi.fromBufferAttribute(r,u),Mi.fromBufferAttribute(r,l),h.uv=wt.getInterpolation(Si,Cn,Ln,Pn,vi,xi,Mi,new Ge)),s&&(vi.fromBufferAttribute(s,a),xi.fromBufferAttribute(s,u),Mi.fromBufferAttribute(s,l),h.uv1=wt.getInterpolation(Si,Cn,Ln,Pn,vi,xi,Mi,new Ge),h.uv2=h.uv1),o&&(Ts.fromBufferAttribute(o,a),ys.fromBufferAttribute(o,u),As.fromBufferAttribute(o,l),h.normal=wt.getInterpolation(Si,Cn,Ln,Pn,Ts,ys,As,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:u,c:l,normal:new I,materialIndex:0};wt.getNormal(Cn,Ln,Pn,f.normal),h.face=f}return h}class Xn extends vn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],h=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(f,2));function x(v,p,c,A,E,b,y,C,P,X,g){const T=b/P,j=y/X,Y=b/2,D=y/2,z=C/2,V=P+1,J=X+1;let W=0,k=0;const ee=new I;for(let K=0;K<J;K++){const _e=K*j-D;for(let te=0;te<V;te++){const F=te*T-Y;ee[v]=F*A,ee[p]=_e*E,ee[c]=z,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[p]=0,ee[c]=C>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(te/P),f.push(1-K/X),W+=1}}for(let K=0;K<X;K++)for(let _e=0;_e<P;_e++){const te=d+_e+V*K,F=d+_e+V*(K+1),q=d+(_e+1)+V*(K+1),re=d+(_e+1)+V*K;u.push(te,F,re),u.push(F,q,re),k+=6}a.addGroup(m,k,g),m+=k,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function lt(i){const e={};for(let t=0;t<i.length;t++){const n=kn(i[t]);for(const r in n)e[r]=n[r]}return e}function Xo(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ua(i){return i.getRenderTarget()===null?i.outputColorSpace:Nt}const qo={clone:kn,merge:lt};var Yo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ko=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yo,this.fragmentShader=Ko,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kn(e.uniforms),this.uniformsGroups=Xo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ha extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends ha{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/l,r*=o.width/u,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Un=-90,Dn=1;class jo extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Et(Un,Dn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Et(Un,Dn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Et(Un,Dn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Et(Un,Dn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new Et(Un,Dn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const l=new Et(Un,Dn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,u,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Xt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class da extends gt{constructor(e,t,n,r,s,o,a,u,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Gn,super(e,t,n,r,s,o,a,u,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dn?ye:fn),this.texture=new da(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:kn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dt,blending:$t});s.uniforms.tEquirect.value=t;const o=new Wt(r,s),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=St),new jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const cr=new I,$o=new I,Jo=new Pe;class an{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=cr.subVectors(n,t).cross($o.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jo.getNormalMatrix(e),r=this.coplanarPoint(cr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sn=new yr,yi=new I;class fa{constructor(e=new an,t=new an,n=new an,r=new an,s=new an,o=new an){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],u=n[4],l=n[5],h=n[6],f=n[7],d=n[8],m=n[9],x=n[10],v=n[11],p=n[12],c=n[13],A=n[14],E=n[15];return t[0].setComponents(a-r,f-u,v-d,E-p).normalize(),t[1].setComponents(a+r,f+u,v+d,E+p).normalize(),t[2].setComponents(a+s,f+l,v+m,E+c).normalize(),t[3].setComponents(a-s,f-l,v-m,E-c).normalize(),t[4].setComponents(a-o,f-h,v-x,E-A).normalize(),t[5].setComponents(a+o,f+h,v+x,E+A).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sn)}intersectsSprite(e){return sn.center.set(0,0,0),sn.radius=.7071067811865476,sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yi.x=r.normal.x>0?e.max.x:e.min.x,yi.y=r.normal.y>0?e.max.y:e.min.y,yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pa(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qo(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,h){const f=l.array,d=l.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,d),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){const d=h.array,m=h.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function u(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:o,remove:a,update:u}}class br extends vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(r),l=a+1,h=u+1,f=e/a,d=t/u,m=[],x=[],v=[],p=[];for(let c=0;c<h;c++){const A=c*d-o;for(let E=0;E<l;E++){const b=E*f-s;x.push(b,-A,0),v.push(0,0,1),p.push(E/a),p.push(1-c/u)}}for(let c=0;c<u;c++)for(let A=0;A<a;A++){const E=A+l*c,b=A+l*(c+1),y=A+1+l*(c+1),C=A+1+l*c;m.push(E,b,C),m.push(b,y,C)}this.setIndex(m),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}var el=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,il=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,al="vec3 transformed = vec3( position );",ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ll=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ul=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ml=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_l=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ml=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,El=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Al=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ll=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ul=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Il=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ol=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kl=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ql=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,jl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zl=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$l=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ql=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ec=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ic=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ac=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,pc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_c=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ec=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ac=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ic=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Oc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Wc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xc=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qc=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yc=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ru=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ou=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,du=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_u=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Au=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ru=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:el,alphamap_pars_fragment:tl,alphatest_fragment:nl,alphatest_pars_fragment:il,aomap_fragment:rl,aomap_pars_fragment:sl,begin_vertex:al,beginnormal_vertex:ol,bsdfs:ll,iridescence_fragment:cl,bumpmap_pars_fragment:ul,clipping_planes_fragment:hl,clipping_planes_pars_fragment:dl,clipping_planes_pars_vertex:fl,clipping_planes_vertex:pl,color_fragment:ml,color_pars_fragment:_l,color_pars_vertex:gl,color_vertex:vl,common:xl,cube_uv_reflection_fragment:Ml,defaultnormal_vertex:Sl,displacementmap_pars_vertex:El,displacementmap_vertex:Tl,emissivemap_fragment:yl,emissivemap_pars_fragment:Al,encodings_fragment:bl,encodings_pars_fragment:Rl,envmap_fragment:wl,envmap_common_pars_fragment:Cl,envmap_pars_fragment:Ll,envmap_pars_vertex:Pl,envmap_physical_pars_fragment:kl,envmap_vertex:Ul,fog_vertex:Dl,fog_pars_vertex:Il,fog_fragment:Nl,fog_pars_fragment:Fl,gradientmap_pars_fragment:Ol,lightmap_fragment:Bl,lightmap_pars_fragment:zl,lights_lambert_fragment:Gl,lights_lambert_pars_fragment:Hl,lights_pars_begin:Vl,lights_toon_fragment:Wl,lights_toon_pars_fragment:Xl,lights_phong_fragment:ql,lights_phong_pars_fragment:Yl,lights_physical_fragment:Kl,lights_physical_pars_fragment:jl,lights_fragment_begin:Zl,lights_fragment_maps:$l,lights_fragment_end:Jl,logdepthbuf_fragment:Ql,logdepthbuf_pars_fragment:ec,logdepthbuf_pars_vertex:tc,logdepthbuf_vertex:nc,map_fragment:ic,map_pars_fragment:rc,map_particle_fragment:sc,map_particle_pars_fragment:ac,metalnessmap_fragment:oc,metalnessmap_pars_fragment:lc,morphcolor_vertex:cc,morphnormal_vertex:uc,morphtarget_pars_vertex:hc,morphtarget_vertex:dc,normal_fragment_begin:fc,normal_fragment_maps:pc,normal_pars_fragment:mc,normal_pars_vertex:_c,normal_vertex:gc,normalmap_pars_fragment:vc,clearcoat_normal_fragment_begin:xc,clearcoat_normal_fragment_maps:Mc,clearcoat_pars_fragment:Sc,iridescence_pars_fragment:Ec,output_fragment:Tc,packing:yc,premultiplied_alpha_fragment:Ac,project_vertex:bc,dithering_fragment:Rc,dithering_pars_fragment:wc,roughnessmap_fragment:Cc,roughnessmap_pars_fragment:Lc,shadowmap_pars_fragment:Pc,shadowmap_pars_vertex:Uc,shadowmap_vertex:Dc,shadowmask_pars_fragment:Ic,skinbase_vertex:Nc,skinning_pars_vertex:Fc,skinning_vertex:Oc,skinnormal_vertex:Bc,specularmap_fragment:zc,specularmap_pars_fragment:Gc,tonemapping_fragment:Hc,tonemapping_pars_fragment:Vc,transmission_fragment:kc,transmission_pars_fragment:Wc,uv_pars_fragment:Xc,uv_pars_vertex:qc,uv_vertex:Yc,worldpos_vertex:Kc,background_vert:jc,background_frag:Zc,backgroundCube_vert:$c,backgroundCube_frag:Jc,cube_vert:Qc,cube_frag:eu,depth_vert:tu,depth_frag:nu,distanceRGBA_vert:iu,distanceRGBA_frag:ru,equirect_vert:su,equirect_frag:au,linedashed_vert:ou,linedashed_frag:lu,meshbasic_vert:cu,meshbasic_frag:uu,meshlambert_vert:hu,meshlambert_frag:du,meshmatcap_vert:fu,meshmatcap_frag:pu,meshnormal_vert:mu,meshnormal_frag:_u,meshphong_vert:gu,meshphong_frag:vu,meshphysical_vert:xu,meshphysical_frag:Mu,meshtoon_vert:Su,meshtoon_frag:Eu,points_vert:Tu,points_frag:yu,shadow_vert:Au,shadow_frag:bu,sprite_vert:Ru,sprite_frag:wu},ne={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}}},Dt={basic:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new He(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new He(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:lt([ne.points,ne.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:lt([ne.common,ne.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:lt([ne.sprite,ne.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:lt([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:lt([ne.lights,ne.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Dt.physical={uniforms:lt([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Ai={r:0,b:0,g:0};function Cu(i,e,t,n,r,s,o){const a=new He(0);let u=s===!0?0:1,l,h,f=null,d=0,m=null;function x(p,c){let A=!1,E=c.isScene===!0?c.background:null;switch(E&&E.isTexture&&(E=(c.backgroundBlurriness>0?t:e).get(E)),E===null?v(a,u):E&&E.isColor&&(v(E,1),A=!0),i.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),A=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),A=!0;break}(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Li)?(h===void 0&&(h=new Wt(new Xn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:kn(Dt.backgroundCube.uniforms),vertexShader:Dt.backgroundCube.vertexShader,fragmentShader:Dt.backgroundCube.fragmentShader,side:dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=E.colorSpace!==ye,(f!==E||d!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Wt(new br(2,2),new gn({name:"BackgroundMaterial",uniforms:kn(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,l.material.toneMapped=E.colorSpace!==ye,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,c){p.getRGB(Ai,ua(i)),n.buffers.color.setClear(Ai.r,Ai.g,Ai.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),u=c,v(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,v(a,u)},render:x}}function Lu(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=p(null);let l=u,h=!1;function f(z,V,J,W,k){let ee=!1;if(o){const K=v(W,J,V);l!==K&&(l=K,m(l.object)),ee=c(z,W,J,k),ee&&A(z,W,J,k)}else{const K=V.wireframe===!0;(l.geometry!==W.id||l.program!==J.id||l.wireframe!==K)&&(l.geometry=W.id,l.program=J.id,l.wireframe=K,ee=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,X(z,V,J,W),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function v(z,V,J){const W=J.wireframe===!0;let k=a[z.id];k===void 0&&(k={},a[z.id]=k);let ee=k[V.id];ee===void 0&&(ee={},k[V.id]=ee);let K=ee[W];return K===void 0&&(K=p(d()),ee[W]=K),K}function p(z){const V=[],J=[],W=[];for(let k=0;k<r;k++)V[k]=0,J[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:W,object:z,attributes:{},index:null}}function c(z,V,J,W){const k=l.attributes,ee=V.attributes;let K=0;const _e=J.getAttributes();for(const te in _e)if(_e[te].location>=0){const q=k[te];let re=ee[te];if(re===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;K++}return l.attributesNum!==K||l.index!==W}function A(z,V,J,W){const k={},ee=V.attributes;let K=0;const _e=J.getAttributes();for(const te in _e)if(_e[te].location>=0){let q=ee[te];q===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(q=z.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),k[te]=re,K++}l.attributes=k,l.attributesNum=K,l.index=W}function E(){const z=l.newAttributes;for(let V=0,J=z.length;V<J;V++)z[V]=0}function b(z){y(z,0)}function y(z,V){const J=l.newAttributes,W=l.enabledAttributes,k=l.attributeDivisors;J[z]=1,W[z]===0&&(i.enableVertexAttribArray(z),W[z]=1),k[z]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,V),k[z]=V)}function C(){const z=l.newAttributes,V=l.enabledAttributes;for(let J=0,W=V.length;J<W;J++)V[J]!==z[J]&&(i.disableVertexAttribArray(J),V[J]=0)}function P(z,V,J,W,k,ee){n.isWebGL2===!0&&(J===i.INT||J===i.UNSIGNED_INT)?i.vertexAttribIPointer(z,V,J,k,ee):i.vertexAttribPointer(z,V,J,W,k,ee)}function X(z,V,J,W){if(n.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const k=W.attributes,ee=J.getAttributes(),K=V.defaultAttributeValues;for(const _e in ee){const te=ee[_e];if(te.location>=0){let F=k[_e];if(F===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(F=z.instanceColor)),F!==void 0){const q=F.normalized,re=F.itemSize,ae=t.get(F);if(ae===void 0)continue;const w=ae.buffer,Te=ae.type,Se=ae.bytesPerElement;if(F.isInterleavedBufferAttribute){const ie=F.data,xe=ie.stride,Ie=F.offset;if(ie.isInstancedInterleavedBuffer){for(let fe=0;fe<te.locationSize;fe++)y(te.location+fe,ie.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let fe=0;fe<te.locationSize;fe++)b(te.location+fe);i.bindBuffer(i.ARRAY_BUFFER,w);for(let fe=0;fe<te.locationSize;fe++)P(te.location+fe,re/te.locationSize,Te,q,xe*Se,(Ie+re/te.locationSize*fe)*Se)}else{if(F.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)y(te.location+ie,F.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ie=0;ie<te.locationSize;ie++)b(te.location+ie);i.bindBuffer(i.ARRAY_BUFFER,w);for(let ie=0;ie<te.locationSize;ie++)P(te.location+ie,re/te.locationSize,Te,q,re*Se,re/te.locationSize*ie*Se)}}else if(K!==void 0){const q=K[_e];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(te.location,q);break;case 3:i.vertexAttrib3fv(te.location,q);break;case 4:i.vertexAttrib4fv(te.location,q);break;default:i.vertexAttrib1fv(te.location,q)}}}}C()}function g(){Y();for(const z in a){const V=a[z];for(const J in V){const W=V[J];for(const k in W)x(W[k].object),delete W[k];delete V[J]}delete a[z]}}function T(z){if(a[z.id]===void 0)return;const V=a[z.id];for(const J in V){const W=V[J];for(const k in W)x(W[k].object),delete W[k];delete V[J]}delete a[z.id]}function j(z){for(const V in a){const J=a[V];if(J[z.id]===void 0)continue;const W=J[z.id];for(const k in W)x(W[k].object),delete W[k];delete J[z.id]}}function Y(){D(),h=!0,l!==u&&(l=u,m(l.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:D,dispose:g,releaseStatesOfGeometry:T,releaseStatesOfProgram:j,initAttributes:E,enableAttribute:b,disableUnusedAttributes:C}}function Pu(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,h){i.drawArrays(s,l,h),t.update(h,s,1)}function u(l,h,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,f),t.update(h,s,f)}this.setMode=o,this.render=a,this.renderInstances=u}function Uu(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,b=o||e.has("OES_texture_float"),y=E&&b,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:A,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:C}}function Du(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new an,a=new Pe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,c=i.get(f);if(!r||x===null||x.length===0||s&&!p)s?h(null):l();else{const A=s?0:n,E=A*4;let b=c.clippingState||null;u.value=b,b=h(x,d,E,m);for(let y=0;y!==E;++y)b[y]=t[y];c.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=u.value,x!==!0||p===null){const c=m+v*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<c)&&(p=new Float32Array(c));for(let E=0,b=m;E!==v;++E,b+=4)o.copy(f[E]).applyMatrix4(A,a),o.normal.toArray(p,b),p[b+3]=o.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Iu(i){let e=new WeakMap;function t(o,a){return a===mr?o.mapping=Gn:a===_r&&(o.mapping=Hn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===mr||a===_r)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new Zo(u.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nu extends ha{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,u=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fn=4,bs=[.125,.215,.35,.446,.526,.582],ln=20,ur=new Nu,Rs=new He;let hr=null;const on=(1+Math.sqrt(5))/2,In=1/on,ws=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,on,In),new I(0,on,-In),new I(In,0,on),new I(-In,0,on),new I(on,In,0),new I(-on,In,0)];class Cs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){hr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hr),e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===Hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:ti,format:Lt,colorSpace:Nt,depthBuffer:!1},r=Ls(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ls(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fu(s)),this._blurMaterial=Ou(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,n,r){const a=new Et(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Rs),h.toneMapping=Xt,h.autoClear=!1;const m=new Ar({name:"PMREM.Background",side:dt,depthWrite:!1,depthTest:!1}),x=new Wt(new Xn,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Rs),v=!0);for(let c=0;c<6;c++){const A=c%3;A===0?(a.up.set(0,u[c],0),a.lookAt(l[c],0,0)):A===1?(a.up.set(0,0,u[c]),a.lookAt(0,l[c],0)):(a.up.set(0,u[c],0),a.lookAt(0,0,l[c]));const E=this._cubeSize;bi(r,A*E,c>2?E:0,E,E),h.setRenderTarget(r),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gn||e.mapping===Hn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Us()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ps());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;bi(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ws[(r-1)%ws.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Wt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ln-1),v=s/x,p=isFinite(s)?1+Math.floor(h*v):ln;p>ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ln}`);const c=[];let A=0;for(let P=0;P<ln;++P){const X=P/v,g=Math.exp(-X*X/2);c.push(g),P===0?A+=g:P<p&&(A+=2*g)}for(let P=0;P<c.length;P++)c[P]=c[P]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-n;const b=this._sizeLods[r],y=3*b*(r>E-Fn?r-E+Fn:0),C=4*(this._cubeSize-b);bi(t,y,C,3*b,2*b),u.setRenderTarget(t),u.render(f,ur)}}function Fu(i){const e=[],t=[],n=[];let r=i;const s=i-Fn+1+bs.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let u=1/a;o>i-Fn?u=bs[o-i+Fn-1]:o===0&&(u=0),n.push(u);const l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,v=3,p=2,c=1,A=new Float32Array(v*x*m),E=new Float32Array(p*x*m),b=new Float32Array(c*x*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,X=C>2?0:-1,g=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];A.set(g,v*x*C),E.set(d,p*x*C);const T=[C,C,C,C,C,C];b.set(T,c*x*C)}const y=new vn;y.setAttribute("position",new It(A,v)),y.setAttribute("uv",new It(E,p)),y.setAttribute("faceIndex",new It(b,c)),e.push(y),r>Fn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ls(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=Li,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ou(i,e,t){const n=new Float32Array(ln),r=new I(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Ps(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Us(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===mr||u===_r,h=u===Gn||u===Hn;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Cs(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Cs(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let u=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&u++;return u===l}function s(a){const u=a.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gu(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function u(f){const d=f.attributes;for(const x in d)e.update(d[x],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,b=A.length;E<b;E+=3){const y=A[E+0],C=A[E+1],P=A[E+2];d.push(y,C,C,P,P,y)}}else{const A=x.array;v=x.version;for(let E=0,b=A.length/3-1;E<b;E+=3){const y=E+0,C=E+1,P=E+2;d.push(y,C,C,P,P,y)}}const p=new(na(d)?ca:la)(d,1);p.version=v;const c=s.get(f);c&&e.remove(c),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:u,getWireframeAttribute:h}}function Hu(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,u;function l(d){a=d.type,u=d.bytesPerElement}function h(d,m){i.drawElements(s,m,a,d*u),t.update(m,s,1)}function f(d,m,x){if(x===0)return;let v,p;if(r)v=i,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,d*u,x),t.update(m,s,x)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f}function Vu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ku(i,e){return i[0]-e[0]}function Wu(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Xu(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function u(l,h,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(h);if(p===void 0||p.count!==v){let V=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let g=0;E===!0&&(g=1),b===!0&&(g=2),y===!0&&(g=3);let T=h.attributes.position.count*g,j=1;T>e.maxTextureSize&&(j=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*j*4*v),D=new sa(Y,T,j,v);D.type=un,D.needsUpdate=!0;const z=g*4;for(let J=0;J<v;J++){const W=C[J],k=P[J],ee=X[J],K=T*j*4*J;for(let _e=0;_e<W.count;_e++){const te=_e*z;E===!0&&(o.fromBufferAttribute(W,_e),Y[K+te+0]=o.x,Y[K+te+1]=o.y,Y[K+te+2]=o.z,Y[K+te+3]=0),b===!0&&(o.fromBufferAttribute(k,_e),Y[K+te+4]=o.x,Y[K+te+5]=o.y,Y[K+te+6]=o.z,Y[K+te+7]=0),y===!0&&(o.fromBufferAttribute(ee,_e),Y[K+te+8]=o.x,Y[K+te+9]=o.y,Y[K+te+10]=o.z,Y[K+te+11]=ee.itemSize===4?o.w:1)}}p={count:v,texture:D,size:new Ge(T,j)},s.set(h,p),h.addEventListener("dispose",V)}let c=0;for(let E=0;E<d.length;E++)c+=d[E];const A=h.morphTargetsRelative?1:1-c;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==x){v=[];for(let b=0;b<x;b++)v[b]=[b,0];n[h.id]=v}for(let b=0;b<x;b++){const y=v[b];y[0]=b,y[1]=d[b]}v.sort(Wu);for(let b=0;b<8;b++)b<x&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(ku);const p=h.morphAttributes.position,c=h.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const y=a[b],C=y[0],P=y[1];C!==Number.MAX_SAFE_INTEGER&&P?(p&&h.getAttribute("morphTarget"+b)!==p[C]&&h.setAttribute("morphTarget"+b,p[C]),c&&h.getAttribute("morphNormal"+b)!==c[C]&&h.setAttribute("morphNormal"+b,c[C]),r[b]=P,A+=P):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),c&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const E=h.morphTargetsRelative?1:1-A;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function qu(i,e,t,n){let r=new WeakMap;function s(u){const l=n.render.frame,h=u.geometry,f=e.get(u,h);return r.get(f)!==l&&(e.update(f),r.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ma=new gt,_a=new sa,ga=new Do,va=new da,Ds=[],Is=[],Ns=new Float32Array(16),Fs=new Float32Array(9),Os=new Float32Array(4);function qn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ds[r];if(s===void 0&&(s=new Float32Array(r),Ds[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ke(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function je(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Di(i,e){let t=Is[e];t===void 0&&(t=new Int32Array(e),Is[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ku(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;i.uniform2fv(this.addr,e),je(t,e)}}function ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;i.uniform3fv(this.addr,e),je(t,e)}}function Zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;i.uniform4fv(this.addr,e),je(t,e)}}function $u(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if(Ke(t,n))return;Os.set(n),i.uniformMatrix2fv(this.addr,!1,Os),je(t,n)}}function Ju(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if(Ke(t,n))return;Fs.set(n),i.uniformMatrix3fv(this.addr,!1,Fs),je(t,n)}}function Qu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if(Ke(t,n))return;Ns.set(n),i.uniformMatrix4fv(this.addr,!1,Ns),je(t,n)}}function eh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function th(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;i.uniform2iv(this.addr,e),je(t,e)}}function nh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;i.uniform3iv(this.addr,e),je(t,e)}}function ih(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;i.uniform4iv(this.addr,e),je(t,e)}}function rh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;i.uniform2uiv(this.addr,e),je(t,e)}}function ah(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;i.uniform3uiv(this.addr,e),je(t,e)}}function oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;i.uniform4uiv(this.addr,e),je(t,e)}}function lh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||ma,r)}function ch(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ga,r)}function uh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||va,r)}function hh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_a,r)}function dh(i){switch(i){case 5126:return Yu;case 35664:return Ku;case 35665:return ju;case 35666:return Zu;case 35674:return $u;case 35675:return Ju;case 35676:return Qu;case 5124:case 35670:return eh;case 35667:case 35671:return th;case 35668:case 35672:return nh;case 35669:case 35673:return ih;case 5125:return rh;case 36294:return sh;case 36295:return ah;case 36296:return oh;case 35678:case 36198:case 36298:case 36306:case 35682:return lh;case 35679:case 36299:case 36307:return ch;case 35680:case 36300:case 36308:case 36293:return uh;case 36289:case 36303:case 36311:case 36292:return hh}}function fh(i,e){i.uniform1fv(this.addr,e)}function ph(i,e){const t=qn(e,this.size,2);i.uniform2fv(this.addr,t)}function mh(i,e){const t=qn(e,this.size,3);i.uniform3fv(this.addr,t)}function _h(i,e){const t=qn(e,this.size,4);i.uniform4fv(this.addr,t)}function gh(i,e){const t=qn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vh(i,e){const t=qn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xh(i,e){const t=qn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mh(i,e){i.uniform1iv(this.addr,e)}function Sh(i,e){i.uniform2iv(this.addr,e)}function Eh(i,e){i.uniform3iv(this.addr,e)}function Th(i,e){i.uniform4iv(this.addr,e)}function yh(i,e){i.uniform1uiv(this.addr,e)}function Ah(i,e){i.uniform2uiv(this.addr,e)}function bh(i,e){i.uniform3uiv(this.addr,e)}function Rh(i,e){i.uniform4uiv(this.addr,e)}function wh(i,e,t){const n=this.cache,r=e.length,s=Di(t,r);Ke(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ma,s[o])}function Ch(i,e,t){const n=this.cache,r=e.length,s=Di(t,r);Ke(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ga,s[o])}function Lh(i,e,t){const n=this.cache,r=e.length,s=Di(t,r);Ke(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||va,s[o])}function Ph(i,e,t){const n=this.cache,r=e.length,s=Di(t,r);Ke(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_a,s[o])}function Uh(i){switch(i){case 5126:return fh;case 35664:return ph;case 35665:return mh;case 35666:return _h;case 35674:return gh;case 35675:return vh;case 35676:return xh;case 5124:case 35670:return Mh;case 35667:case 35671:return Sh;case 35668:case 35672:return Eh;case 35669:case 35673:return Th;case 5125:return yh;case 36294:return Ah;case 36295:return bh;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return wh;case 35679:case 36299:case 36307:return Ch;case 35680:case 36300:case 36308:case 36293:return Lh;case 36289:case 36303:case 36311:case 36292:return Ph}}class Dh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dh(t.type)}}class Ih{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Uh(t.type)}}class Nh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Bs(i,e){i.seq.push(e),i.map[e.id]=e}function Fh(i,e,t){const n=i.name,r=n.length;for(dr.lastIndex=0;;){const s=dr.exec(n),o=dr.lastIndex;let a=s[1];const u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===r){Bs(t,l===void 0?new Dh(a,i,e):new Ih(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Nh(a),Bs(t,f)),t=f}}}class wi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Fh(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function zs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Oh=0;function Bh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function zh(i){switch(i){case Nt:return["Linear","( value )"];case ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Gs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bh(i.getShaderSource(e),o)}else return r}function Gh(i,e){const t=zh(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hh(i,e){let t;switch(e){case $a:t="Linear";break;case Ja:t="Reinhard";break;case Qa:t="OptimizedCineon";break;case eo:t="ACESFilmic";break;case to:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vh(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jn).join(`
`)}function kh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wh(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jn(i){return i!==""}function Hs(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(i){return i.replace(Xh,qh)}function qh(i,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sr(t)}const Yh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ks(i){return i.replace(Yh,Kh)}function Kh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ws(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ks?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vt&&(e="SHADOWMAP_TYPE_VSM"),e}function Zh(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gn:case Hn:e="ENVMAP_TYPE_CUBE";break;case Li:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $h(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hn:e="ENVMAP_MODE_REFRACTION";break}return e}function Jh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $s:e="ENVMAP_BLENDING_MULTIPLY";break;case ja:e="ENVMAP_BLENDING_MIX";break;case Za:e="ENVMAP_BLENDING_ADD";break}return e}function Qh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ed(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=jh(t),l=Zh(t),h=$h(t),f=Jh(t),d=Qh(t),m=t.isWebGL2?"":Vh(t),x=kh(s),v=r.createProgram();let p,c,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Jn).join(`
`),p.length>0&&(p+=`
`),c=[m,x].filter(Jn).join(`
`),c.length>0&&(c+=`
`)):(p=[Ws(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),c=[m,Ws(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xt?"#define TONE_MAPPING":"",t.toneMapping!==Xt?be.tonemapping_pars_fragment:"",t.toneMapping!==Xt?Hh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Gh("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jn).join(`
`)),o=Sr(o),o=Hs(o,t),o=Vs(o,t),a=Sr(a),a=Hs(a,t),a=Vs(a,t),o=ks(o),a=ks(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",t.glslVersion===cs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const E=A+p+o,b=A+c+a,y=zs(r,r.VERTEX_SHADER,E),C=zs(r,r.FRAGMENT_SHADER,b);if(r.attachShader(v,y),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const g=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(y).trim(),j=r.getShaderInfoLog(C).trim();let Y=!0,D=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,y,C);else{const z=Gs(r,y,"vertex"),V=Gs(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+g+`
`+z+`
`+V)}else g!==""?console.warn("THREE.WebGLProgram: Program Info Log:",g):(T===""||j==="")&&(D=!1);D&&(this.diagnostics={runnable:Y,programLog:g,vertexShader:{log:T,prefix:p},fragmentShader:{log:j,prefix:c}})}r.deleteShader(y),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new wi(r,v)),P};let X;return this.getAttributes=function(){return X===void 0&&(X=Wh(r,v)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Oh++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=C,this}let td=0;class nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new id(e),t.set(e,n)),n}}class id{constructor(e){this.id=td++,this.code=e,this.usedTimes=0}}function rd(i,e,t,n,r,s,o){const a=new aa,u=new nd,l=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return g===1?"uv1":g===2?"uv2":g===3?"uv3":"uv"}function p(g,T,j,Y,D){const z=Y.fog,V=D.geometry,J=g.isMeshStandardMaterial?Y.environment:null,W=(g.isMeshStandardMaterial?t:e).get(g.envMap||J),k=W&&W.mapping===Li?W.image.height:null,ee=x[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=K!==void 0?K.length:0;let te=0;V.morphAttributes.position!==void 0&&(te=1),V.morphAttributes.normal!==void 0&&(te=2),V.morphAttributes.color!==void 0&&(te=3);let F,q,re,ae;if(ee){const Be=Dt[ee];F=Be.vertexShader,q=Be.fragmentShader}else F=g.vertexShader,q=g.fragmentShader,u.update(g),re=u.getVertexShaderID(g),ae=u.getFragmentShaderID(g);const w=i.getRenderTarget(),Te=D.isInstancedMesh===!0,Se=!!g.map,ie=!!g.matcap,xe=!!W,Ie=!!g.aoMap,fe=!!g.lightMap,Ce=!!g.bumpMap,Ze=!!g.normalMap,et=!!g.displacementMap,$e=!!g.emissiveMap,Ye=!!g.metalnessMap,Ne=!!g.roughnessMap,Ve=g.clearcoat>0,ut=g.iridescence>0,S=g.sheen>0,_=g.transmission>0,N=Ve&&!!g.clearcoatMap,$=Ve&&!!g.clearcoatNormalMap,Q=Ve&&!!g.clearcoatRoughnessMap,se=ut&&!!g.iridescenceMap,Me=ut&&!!g.iridescenceThicknessMap,ce=S&&!!g.sheenColorMap,G=S&&!!g.sheenRoughnessMap,he=!!g.specularMap,pe=!!g.specularColorMap,ge=!!g.specularIntensityMap,le=_&&!!g.transmissionMap,de=_&&!!g.thicknessMap,Ue=!!g.gradientMap,Fe=!!g.alphaMap,ke=g.alphaTest>0,R=!!g.extensions,O=!!V.attributes.uv1,Z=!!V.attributes.uv2,oe=!!V.attributes.uv3;return{isWebGL2:h,shaderID:ee,shaderName:g.type,vertexShader:F,fragmentShader:q,defines:g.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:Te,instancingColor:Te&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:w===null?i.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Nt,map:Se,matcap:ie,envMap:xe,envMapMode:xe&&W.mapping,envMapCubeUVHeight:k,aoMap:Ie,lightMap:fe,bumpMap:Ce,normalMap:Ze,displacementMap:d&&et,emissiveMap:$e,normalMapObjectSpace:Ze&&g.normalMapType===Eo,normalMapTangentSpace:Ze&&g.normalMapType===So,metalnessMap:Ye,roughnessMap:Ne,clearcoat:Ve,clearcoatMap:N,clearcoatNormalMap:$,clearcoatRoughnessMap:Q,iridescence:ut,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:S,sheenColorMap:ce,sheenRoughnessMap:G,specularMap:he,specularColorMap:pe,specularIntensityMap:ge,transmission:_,transmissionMap:le,thicknessMap:de,gradientMap:Ue,opaque:g.transparent===!1&&g.blending===On,alphaMap:Fe,alphaTest:ke,combine:g.combine,mapUv:Se&&v(g.map.channel),aoMapUv:Ie&&v(g.aoMap.channel),lightMapUv:fe&&v(g.lightMap.channel),bumpMapUv:Ce&&v(g.bumpMap.channel),normalMapUv:Ze&&v(g.normalMap.channel),displacementMapUv:et&&v(g.displacementMap.channel),emissiveMapUv:$e&&v(g.emissiveMap.channel),metalnessMapUv:Ye&&v(g.metalnessMap.channel),roughnessMapUv:Ne&&v(g.roughnessMap.channel),clearcoatMapUv:N&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:$&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:G&&v(g.sheenRoughnessMap.channel),specularMapUv:he&&v(g.specularMap.channel),specularColorMapUv:pe&&v(g.specularColorMap.channel),specularIntensityMapUv:ge&&v(g.specularIntensityMap.channel),transmissionMapUv:le&&v(g.transmissionMap.channel),thicknessMapUv:de&&v(g.thicknessMap.channel),alphaMapUv:Fe&&v(g.alphaMap.channel),vertexTangents:Ze&&!!V.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:O,vertexUv2s:Z,vertexUv3s:oe,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Se||Fe),fog:!!z,useFog:g.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:g.toneMapped?i.toneMapping:Xt,useLegacyLights:i.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===kt,flipSided:g.side===dt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:R&&g.extensions.derivatives===!0,extensionFragDepth:R&&g.extensions.fragDepth===!0,extensionDrawBuffers:R&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&g.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function c(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const j in g.defines)T.push(j),T.push(g.defines[j]);return g.isRawShaderMaterial===!1&&(A(T,g),E(T,g),T.push(i.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function A(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function E(g,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),g.push(a.mask)}function b(g){const T=x[g.type];let j;if(T){const Y=Dt[T];j=qo.clone(Y.uniforms)}else j=g.uniforms;return j}function y(g,T){let j;for(let Y=0,D=l.length;Y<D;Y++){const z=l[Y];if(z.cacheKey===T){j=z,++j.usedTimes;break}}return j===void 0&&(j=new ed(i,T,g,s),l.push(j)),j}function C(g){if(--g.usedTimes===0){const T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),g.destroy()}}function P(g){u.remove(g)}function X(){u.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:b,acquireProgram:y,releaseProgram:C,releaseShaderCache:P,programs:l,dispose:X}}function sd(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xs(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qs(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,m,x,v,p){let c=i[e];return c===void 0?(c={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},i[e]=c):(c.id=f.id,c.object=f,c.geometry=d,c.material=m,c.groupOrder=x,c.renderOrder=f.renderOrder,c.z=v,c.group=p),e++,c}function a(f,d,m,x,v,p){const c=o(f,d,m,x,v,p);m.transmission>0?n.push(c):m.transparent===!0?r.push(c):t.push(c)}function u(f,d,m,x,v,p){const c=o(f,d,m,x,v,p);m.transmission>0?n.unshift(c):m.transparent===!0?r.unshift(c):t.unshift(c)}function l(f,d){t.length>1&&t.sort(f||ad),n.length>1&&n.sort(d||Xs),r.length>1&&r.sort(d||Xs)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:h,sort:l}}function od(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new qs,i.set(n,[o])):r>=s.length?(o=new qs,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ld(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function cd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ud=0;function hd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dd(i,e){const t=new ld,n=cd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new I);const s=new I,o=new nt,a=new nt;function u(h,f){let d=0,m=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let v=0,p=0,c=0,A=0,E=0,b=0,y=0,C=0,P=0,X=0;h.sort(hd);const g=f===!0?Math.PI:1;for(let j=0,Y=h.length;j<Y;j++){const D=h[j],z=D.color,V=D.intensity,J=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*V*g,m+=z.g*V*g,x+=z.b*V*g;else if(D.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(D.sh.coefficients[k],V);else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*g),D.castShadow){const ee=D.shadow,K=n.get(D);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,r.directionalShadow[v]=K,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=D.shadow.matrix,b++}r.directional[v]=k,v++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(z).multiplyScalar(V*g),k.distance=J,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,r.spot[c]=k;const ee=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,ee.updateMatrices(D),D.castShadow&&X++),r.spotLightMatrix[c]=ee.matrix,D.castShadow){const K=n.get(D);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=W,C++}c++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(z).multiplyScalar(V),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),r.rectArea[A]=k,A++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*g),k.distance=D.distance,k.decay=D.decay,D.castShadow){const ee=D.shadow,K=n.get(D);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=D.shadow.matrix,y++}r.point[p]=k,p++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(V*g),k.groundColor.copy(D.groundColor).multiplyScalar(V*g),r.hemi[E]=k,E++}}A>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==v||T.pointLength!==p||T.spotLength!==c||T.rectAreaLength!==A||T.hemiLength!==E||T.numDirectionalShadows!==b||T.numPointShadows!==y||T.numSpotShadows!==C||T.numSpotMaps!==P)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=A,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=C+P-X,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=X,T.directionalLength=v,T.pointLength=p,T.spotLength=c,T.rectAreaLength=A,T.hemiLength=E,T.numDirectionalShadows=b,T.numPointShadows=y,T.numSpotShadows=C,T.numSpotMaps=P,r.version=ud++)}function l(h,f){let d=0,m=0,x=0,v=0,p=0;const c=f.matrixWorldInverse;for(let A=0,E=h.length;A<E;A++){const b=h[A];if(b.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(c),d++}else if(b.isSpotLight){const y=r.spot[x];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(c),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(c),x++}else if(b.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(c),a.identity(),o.copy(b.matrixWorld),o.premultiply(c),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(c),m++}else if(b.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(c),p++}}}return{setup:u,setupView:l,state:r}}function Ys(i,e){const t=new dd(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function u(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:l,pushLight:o,pushShadow:a}}function fd(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new Ys(i,e),t.set(s,[u])):o>=a.length?(u=new Ys(i,e),a.push(u)):u=a[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class pd extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class md extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _d=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vd(i,e,t){let n=new fa;const r=new Ge,s=new Ge,o=new tt,a=new pd({depthPacking:Mo}),u=new md,l={},h=t.maxTextureSize,f={[Jt]:dt,[dt]:Jt,[kt]:kt},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:_d,fragmentShader:gd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new vn;x.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let c=this.type;this.render=function(y,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const X=i.getRenderTarget(),g=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),j=i.state;j.setBlending($t),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=c!==Vt&&this.type===Vt,D=c===Vt&&this.type!==Vt;for(let z=0,V=y.length;z<V;z++){const J=y[z],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const k=W.getFrameExtents();if(r.multiply(k),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,W.mapSize.y=s.y)),W.map===null||Y===!0||D===!0){const K=this.type!==Vt?{minFilter:ct,magFilter:ct}:{};W.map!==null&&W.map.dispose(),W.map=new _n(r.x,r.y,K),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ee=W.getViewportCount();for(let K=0;K<ee;K++){const _e=W.getViewport(K);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),j.viewport(o),W.updateMatrices(J,K),n=W.getFrustum(),b(C,P,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Vt&&A(W,P),W.needsUpdate=!1}c=this.type,p.needsUpdate=!1,i.setRenderTarget(X,g,T)};function A(y,C){const P=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _n(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,v,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,P,m,v,null)}function E(y,C,P,X){let g=null;const T=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)g=T;else if(g=P.isPointLight===!0?u:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=g.uuid,Y=C.uuid;let D=l[j];D===void 0&&(D={},l[j]=D);let z=D[Y];z===void 0&&(z=g.clone(),D[Y]=z),g=z}if(g.visible=C.visible,g.wireframe=C.wireframe,X===Vt?g.side=C.shadowSide!==null?C.shadowSide:C.side:g.side=C.shadowSide!==null?C.shadowSide:f[C.side],g.alphaMap=C.alphaMap,g.alphaTest=C.alphaTest,g.map=C.map,g.clipShadows=C.clipShadows,g.clippingPlanes=C.clippingPlanes,g.clipIntersection=C.clipIntersection,g.displacementMap=C.displacementMap,g.displacementScale=C.displacementScale,g.displacementBias=C.displacementBias,g.wireframeLinewidth=C.wireframeLinewidth,g.linewidth=C.linewidth,P.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const j=i.properties.get(g);j.light=P}return g}function b(y,C,P,X,g){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===Vt)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const Y=e.update(y),D=y.material;if(Array.isArray(D)){const z=Y.groups;for(let V=0,J=z.length;V<J;V++){const W=z[V],k=D[W.materialIndex];if(k&&k.visible){const ee=E(y,k,X,g);i.renderBufferDirect(P,null,Y,ee,y,W)}}}else if(D.visible){const z=E(y,D,X,g);i.renderBufferDirect(P,null,Y,z,y,null)}}const j=y.children;for(let Y=0,D=j.length;Y<D;Y++)b(j[Y],C,P,X,g)}}function xd(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const O=new tt;let Z=null;const oe=new tt(0,0,0,0);return{setMask:function(ue){Z!==ue&&!R&&(i.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){R=ue},setClear:function(ue,Be,ze,it,qt){qt===!0&&(ue*=it,Be*=it,ze*=it),O.set(ue,Be,ze,it),oe.equals(O)===!1&&(i.clearColor(ue,Be,ze,it),oe.copy(O))},reset:function(){R=!1,Z=null,oe.set(-1,0,0,0)}}}function s(){let R=!1,O=null,Z=null,oe=null;return{setTest:function(ue){ue?w(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ue){O!==ue&&!R&&(i.depthMask(ue),O=ue)},setFunc:function(ue){if(Z!==ue){switch(ue){case Va:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ue}},setLocked:function(ue){R=ue},setClear:function(ue){oe!==ue&&(i.clearDepth(ue),oe=ue)},reset:function(){R=!1,O=null,Z=null,oe=null}}}function o(){let R=!1,O=null,Z=null,oe=null,ue=null,Be=null,ze=null,it=null,qt=null;return{setTest:function(We){R||(We?w(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(We){O!==We&&!R&&(i.stencilMask(We),O=We)},setFunc:function(We,xt,Pt){(Z!==We||oe!==xt||ue!==Pt)&&(i.stencilFunc(We,xt,Pt),Z=We,oe=xt,ue=Pt)},setOp:function(We,xt,Pt){(Be!==We||ze!==xt||it!==Pt)&&(i.stencilOp(We,xt,Pt),Be=We,ze=xt,it=Pt)},setLocked:function(We){R=We},setClear:function(We){qt!==We&&(i.clearStencil(We),qt=We)},reset:function(){R=!1,O=null,Z=null,oe=null,ue=null,Be=null,ze=null,it=null,qt=null}}}const a=new r,u=new s,l=new o,h=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,c=!1,A=null,E=null,b=null,y=null,C=null,P=null,X=null,g=!1,T=null,j=null,Y=null,D=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=W>=2);let ee=null,K={};const _e=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),F=new tt().fromArray(_e),q=new tt().fromArray(te);function re(R,O,Z,oe){const ue=new Uint8Array(4),Be=i.createTexture();i.bindTexture(R,Be),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Z;ze++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(O,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(O+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Be}const ae={};ae[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),l.setClear(0),w(i.DEPTH_TEST),u.setFunc(pr),et(!1),$e(Ur),w(i.CULL_FACE),Ce($t);function w(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function Te(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Se(R,O){return m[R]!==O?(i.bindFramebuffer(R,O),m[R]=O,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=O),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=O)),!0):!1}function ie(R,O){let Z=v,oe=!1;if(R)if(Z=x.get(O),Z===void 0&&(Z=[],x.set(O,Z)),R.isWebGLMultipleRenderTargets){const ue=R.texture;if(Z.length!==ue.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,ze=ue.length;Be<ze;Be++)Z[Be]=i.COLOR_ATTACHMENT0+Be;Z.length=ue.length,oe=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,oe=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,oe=!0);oe&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function xe(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const Ie={[Nn]:i.FUNC_ADD,[Pa]:i.FUNC_SUBTRACT,[Ua]:i.FUNC_REVERSE_SUBTRACT};if(n)Ie[Fr]=i.MIN,Ie[Or]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ie[Fr]=R.MIN_EXT,Ie[Or]=R.MAX_EXT)}const fe={[Da]:i.ZERO,[Ia]:i.ONE,[Na]:i.SRC_COLOR,[js]:i.SRC_ALPHA,[Ha]:i.SRC_ALPHA_SATURATE,[za]:i.DST_COLOR,[Oa]:i.DST_ALPHA,[Fa]:i.ONE_MINUS_SRC_COLOR,[Zs]:i.ONE_MINUS_SRC_ALPHA,[Ga]:i.ONE_MINUS_DST_COLOR,[Ba]:i.ONE_MINUS_DST_ALPHA};function Ce(R,O,Z,oe,ue,Be,ze,it){if(R===$t){c===!0&&(Te(i.BLEND),c=!1);return}if(c===!1&&(w(i.BLEND),c=!0),R!==La){if(R!==A||it!==g){if((E!==Nn||C!==Nn)&&(i.blendEquation(i.FUNC_ADD),E=Nn,C=Nn),it)switch(R){case On:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case Ir:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case On:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ir:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,y=null,P=null,X=null,A=R,g=it}return}ue=ue||O,Be=Be||Z,ze=ze||oe,(O!==E||ue!==C)&&(i.blendEquationSeparate(Ie[O],Ie[ue]),E=O,C=ue),(Z!==b||oe!==y||Be!==P||ze!==X)&&(i.blendFuncSeparate(fe[Z],fe[oe],fe[Be],fe[ze]),b=Z,y=oe,P=Be,X=ze),A=R,g=!1}function Ze(R,O){R.side===kt?Te(i.CULL_FACE):w(i.CULL_FACE);let Z=R.side===dt;O&&(Z=!Z),et(Z),R.blending===On&&R.transparent===!1?Ce($t):Ce(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),u.setFunc(R.depthFunc),u.setTest(R.depthTest),u.setMask(R.depthWrite),a.setMask(R.colorWrite);const oe=R.stencilWrite;l.setTest(oe),oe&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(R){T!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),T=R)}function $e(R){R!==Ra?(w(i.CULL_FACE),R!==j&&(R===Ur?i.cullFace(i.BACK):R===wa?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),j=R}function Ye(R){R!==Y&&(J&&i.lineWidth(R),Y=R)}function Ne(R,O,Z){R?(w(i.POLYGON_OFFSET_FILL),(D!==O||z!==Z)&&(i.polygonOffset(O,Z),D=O,z=Z)):Te(i.POLYGON_OFFSET_FILL)}function Ve(R){R?w(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function ut(R){R===void 0&&(R=i.TEXTURE0+V-1),ee!==R&&(i.activeTexture(R),ee=R)}function S(R,O,Z){Z===void 0&&(ee===null?Z=i.TEXTURE0+V-1:Z=ee);let oe=K[Z];oe===void 0&&(oe={type:void 0,texture:void 0},K[Z]=oe),(oe.type!==R||oe.texture!==O)&&(ee!==Z&&(i.activeTexture(Z),ee=Z),i.bindTexture(R,O||ae[R]),oe.type=R,oe.texture=O)}function _(){const R=K[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(R){F.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),F.copy(R))}function de(R){q.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),q.copy(R))}function Ue(R,O){let Z=f.get(O);Z===void 0&&(Z=new WeakMap,f.set(O,Z));let oe=Z.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(O,R.name),Z.set(R,oe))}function Fe(R,O){const oe=f.get(O).get(R);h.get(O)!==oe&&(i.uniformBlockBinding(O,oe,R.__bindingPointIndex),h.set(O,oe))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ee=null,K={},m={},x=new WeakMap,v=[],p=null,c=!1,A=null,E=null,b=null,y=null,C=null,P=null,X=null,g=!1,T=null,j=null,Y=null,D=null,z=null,F.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),l.reset()}return{buffers:{color:a,depth:u,stencil:l},enable:w,disable:Te,bindFramebuffer:Se,drawBuffers:ie,useProgram:xe,setBlending:Ce,setMaterial:Ze,setFlipSided:et,setCullFace:$e,setLineWidth:Ye,setPolygonOffset:Ne,setScissorTest:Ve,activeTexture:ut,bindTexture:S,unbindTexture:_,compressedTexImage2D:N,compressedTexImage3D:$,texImage2D:pe,texImage3D:ge,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:G,texStorage3D:he,texSubImage2D:Q,texSubImage3D:se,compressedTexSubImage2D:Me,compressedTexSubImage3D:ce,scissor:le,viewport:de,reset:ke}}function Md(i,e,t,n,r,s,o){const a=r.isWebGL2,u=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,_){return c?new OffscreenCanvas(S,_):Ci("canvas")}function E(S,_,N,$){let Q=1;if((S.width>$||S.height>$)&&(Q=$/Math.max(S.width,S.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const se=_?Ao:Math.floor,Me=se(Q*S.width),ce=se(Q*S.height);v===void 0&&(v=A(Me,ce));const G=N?A(Me,ce):v;return G.width=Me,G.height=ce,G.getContext("2d").drawImage(S,0,0,Me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+ce+")."),G}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return us(S.width)&&us(S.height)}function y(S){return a?!1:S.wrapS!==Ct||S.wrapT!==Ct||S.minFilter!==ct&&S.minFilter!==St}function C(S,_){return S.generateMipmaps&&_&&S.minFilter!==ct&&S.minFilter!==St}function P(S){i.generateMipmap(S)}function X(S,_,N,$,Q=!1){if(a===!1)return _;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let se=_;return _===i.RED&&(N===i.FLOAT&&(se=i.R32F),N===i.HALF_FLOAT&&(se=i.R16F),N===i.UNSIGNED_BYTE&&(se=i.R8)),_===i.RG&&(N===i.FLOAT&&(se=i.RG32F),N===i.HALF_FLOAT&&(se=i.RG16F),N===i.UNSIGNED_BYTE&&(se=i.RG8)),_===i.RGBA&&(N===i.FLOAT&&(se=i.RGBA32F),N===i.HALF_FLOAT&&(se=i.RGBA16F),N===i.UNSIGNED_BYTE&&(se=$===ye&&Q===!1?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)),(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function g(S,_,N){return C(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==ct&&S.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function T(S){return S===ct||S===Br||S===Bi?i.NEAREST:i.LINEAR}function j(S){const _=S.target;_.removeEventListener("dispose",j),D(_),_.isVideoTexture&&x.delete(_)}function Y(S){const _=S.target;_.removeEventListener("dispose",Y),V(_)}function D(S){const _=n.get(S);if(_.__webglInit===void 0)return;const N=S.source,$=p.get(N);if($){const Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(S),Object.keys($).length===0&&p.delete(N)}n.remove(S)}function z(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const N=S.source,$=p.get(N);delete $[_.__cacheKey],o.memory.textures--}function V(S){const _=S.texture,N=n.get(S),$=n.get(_);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(N.__webglFramebuffer[Q]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Q=0,se=_.length;Q<se;Q++){const Me=n.get(_[Q]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(_[Q])}n.remove(_),n.remove(S)}let J=0;function W(){J=0}function k(){const S=J;return S>=u&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+u),J+=1,S}function ee(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function K(S,_){const N=n.get(S);if(S.isVideoTexture&&Ve(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(N,S,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function _e(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Te(N,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function te(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Te(N,S,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function F(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Se(N,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const q={[gr]:i.REPEAT,[Ct]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},re={[ct]:i.NEAREST,[Br]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR};function ae(S,_,N){if(N?(i.texParameteri(S,i.TEXTURE_WRAP_S,q[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,q[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,q[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,re[_.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Ct||_.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T(_.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==ct&&_.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===ct||_.minFilter!==Bi&&_.minFilter!==ei||_.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===ti&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(S,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function w(S,_){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",j));const $=_.source;let Q=p.get($);Q===void 0&&(Q={},p.set($,Q));const se=ee(_);if(se!==S.__cacheKey){Q[se]===void 0&&(Q[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[se].usedTimes++;const Me=Q[S.__cacheKey];Me!==void 0&&(Q[S.__cacheKey].usedTimes--,Me.usedTimes===0&&z(_)),S.__cacheKey=se,S.__webglTexture=Q[se].texture}return N}function Te(S,_,N){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Q=w(S,_),se=_.source;t.bindTexture($,S.__webglTexture,i.TEXTURE0+N);const Me=n.get(se);if(se.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ce=y(_)&&b(_.image)===!1;let G=E(_.image,ce,!1,h);G=ut(_,G);const he=b(G)||a,pe=s.convert(_.format,_.colorSpace);let ge=s.convert(_.type),le=X(_.internalFormat,pe,ge,_.colorSpace);ae($,_,he);let de;const Ue=_.mipmaps,Fe=a&&_.isVideoTexture!==!0,ke=Me.__version===void 0||Q===!0,R=g(_,G,he);if(_.isDepthTexture)le=i.DEPTH_COMPONENT,a?_.type===un?le=i.DEPTH_COMPONENT32F:_.type===cn?le=i.DEPTH_COMPONENT24:_.type===Bn?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:_.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===hn&&le===i.DEPTH_COMPONENT&&_.type!==Qs&&_.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=cn,ge=s.convert(_.type)),_.format===Vn&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,_.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bn,ge=s.convert(_.type))),ke&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,le,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,le,G.width,G.height,0,pe,ge,null));else if(_.isDataTexture)if(Ue.length>0&&he){Fe&&ke&&t.texStorage2D(i.TEXTURE_2D,R,le,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],Fe?t.texSubImage2D(i.TEXTURE_2D,O,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(i.TEXTURE_2D,O,le,de.width,de.height,0,pe,ge,de.data);_.generateMipmaps=!1}else Fe?(ke&&t.texStorage2D(i.TEXTURE_2D,R,le,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,pe,ge,G.data)):t.texImage2D(i.TEXTURE_2D,0,le,G.width,G.height,0,pe,ge,G.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,R,le,Ue[0].width,Ue[0].height,G.depth);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],_.format!==Lt?pe!==null?Fe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,G.depth,pe,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,le,de.width,de.height,G.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,G.depth,pe,ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,le,de.width,de.height,G.depth,0,pe,ge,de.data)}else{Fe&&ke&&t.texStorage2D(i.TEXTURE_2D,R,le,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],_.format!==Lt?pe!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,O,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(i.TEXTURE_2D,O,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(i.TEXTURE_2D,O,le,de.width,de.height,0,pe,ge,de.data)}else if(_.isDataArrayTexture)Fe?(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,R,le,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,pe,ge,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,G.width,G.height,G.depth,0,pe,ge,G.data);else if(_.isData3DTexture)Fe?(ke&&t.texStorage3D(i.TEXTURE_3D,R,le,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,pe,ge,G.data)):t.texImage3D(i.TEXTURE_3D,0,le,G.width,G.height,G.depth,0,pe,ge,G.data);else if(_.isFramebufferTexture){if(ke)if(Fe)t.texStorage2D(i.TEXTURE_2D,R,le,G.width,G.height);else{let O=G.width,Z=G.height;for(let oe=0;oe<R;oe++)t.texImage2D(i.TEXTURE_2D,oe,le,O,Z,0,pe,ge,null),O>>=1,Z>>=1}}else if(Ue.length>0&&he){Fe&&ke&&t.texStorage2D(i.TEXTURE_2D,R,le,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],Fe?t.texSubImage2D(i.TEXTURE_2D,O,0,0,pe,ge,de):t.texImage2D(i.TEXTURE_2D,O,le,pe,ge,de);_.generateMipmaps=!1}else Fe?(ke&&t.texStorage2D(i.TEXTURE_2D,R,le,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,ge,G)):t.texImage2D(i.TEXTURE_2D,0,le,pe,ge,G);C(_,he)&&P($),Me.__version=se.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Se(S,_,N){if(_.image.length!==6)return;const $=w(S,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);const se=n.get(Q);if(Q.version!==se.__version||$===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,G=[];for(let O=0;O<6;O++)!Me&&!ce?G[O]=E(_.image[O],!1,!0,l):G[O]=ce?_.image[O].image:_.image[O],G[O]=ut(_,G[O]);const he=G[0],pe=b(he)||a,ge=s.convert(_.format,_.colorSpace),le=s.convert(_.type),de=X(_.internalFormat,ge,le,_.colorSpace),Ue=a&&_.isVideoTexture!==!0,Fe=se.__version===void 0||$===!0;let ke=g(_,he,pe);ae(i.TEXTURE_CUBE_MAP,_,pe);let R;if(Me){Ue&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,de,he.width,he.height);for(let O=0;O<6;O++){R=G[O].mipmaps;for(let Z=0;Z<R.length;Z++){const oe=R[Z];_.format!==Lt?ge!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,0,0,oe.width,oe.height,ge,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,0,0,oe.width,oe.height,ge,le,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,de,oe.width,oe.height,0,ge,le,oe.data)}}}else{R=_.mipmaps,Ue&&Fe&&(R.length>0&&ke++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,de,G[0].width,G[0].height));for(let O=0;O<6;O++)if(ce){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,G[O].width,G[O].height,ge,le,G[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,de,G[O].width,G[O].height,0,ge,le,G[O].data);for(let Z=0;Z<R.length;Z++){const ue=R[Z].image[O].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,0,0,ue.width,ue.height,ge,le,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,de,ue.width,ue.height,0,ge,le,ue.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ge,le,G[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,de,ge,le,G[O]);for(let Z=0;Z<R.length;Z++){const oe=R[Z];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,0,0,ge,le,oe.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,de,ge,le,oe.image[O])}}}C(_,pe)&&P(i.TEXTURE_CUBE_MAP),se.__version=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ie(S,_,N,$,Q){const se=s.convert(N.format,N.colorSpace),Me=s.convert(N.type),ce=X(N.internalFormat,se,Me,N.colorSpace);n.get(_).__hasExternalTextures||(Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,ce,_.width,_.height,_.depth,0,se,Me,null):t.texImage2D(Q,0,ce,_.width,_.height,0,se,Me,null)),t.bindFramebuffer(i.FRAMEBUFFER,S),Ne(_)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,n.get(N).__webglTexture,0,Ye(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,n.get(N).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(S,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let $=i.DEPTH_COMPONENT16;if(N||Ne(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===un?$=i.DEPTH_COMPONENT32F:Q.type===cn&&($=i.DEPTH_COMPONENT24));const se=Ye(_);Ne(_)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,$,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,$,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const $=Ye(_);N&&Ne(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,_.width,_.height):Ne(_)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<$.length;Q++){const se=$[Q],Me=s.convert(se.format,se.colorSpace),ce=s.convert(se.type),G=X(se.internalFormat,Me,ce,se.colorSpace),he=Ye(_);N&&Ne(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,G,_.width,_.height):Ne(_)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,G,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,G,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Q=Ye(_);if(_.depthTexture.format===hn)Ne(_)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Vn)Ne(_)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function fe(S){const _=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,S)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=i.createRenderbuffer(),xe(_.__webglDepthbuffer[$],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),xe(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(S,_,N){const $=n.get(S);_!==void 0&&ie($.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),N!==void 0&&fe(S)}function Ze(S){const _=S.texture,N=n.get(S),$=n.get(_);S.addEventListener("dispose",Y),S.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++);const Q=S.isWebGLCubeRenderTarget===!0,se=S.isWebGLMultipleRenderTargets===!0,Me=b(S)||a;if(Q){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)N.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),se)if(r.drawBuffers){const ce=S.texture;for(let G=0,he=ce.length;G<he;G++){const pe=n.get(ce[G]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Ne(S)===!1){const ce=se?_:[_];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let G=0;G<ce.length;G++){const he=ce[G];N.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[G]);const pe=s.convert(he.format,he.colorSpace),ge=s.convert(he.type),le=X(he.internalFormat,pe,ge,he.colorSpace,S.isXRRenderTarget===!0),de=Ye(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,le,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,N.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ae(i.TEXTURE_CUBE_MAP,_,Me);for(let ce=0;ce<6;ce++)ie(N.__webglFramebuffer[ce],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce);C(_,Me)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ce=S.texture;for(let G=0,he=ce.length;G<he;G++){const pe=ce[G],ge=n.get(pe);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),ae(i.TEXTURE_2D,pe,Me),ie(N.__webglFramebuffer,S,pe,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D),C(pe,Me)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ce=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,$.__webglTexture),ae(ce,_,Me),ie(N.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ce),C(_,Me)&&P(ce),t.unbindTexture()}S.depthBuffer&&fe(S)}function et(S){const _=b(S)||a,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0,Q=N.length;$<Q;$++){const se=N[$];if(C(se,_)){const Me=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(se).__webglTexture;t.bindTexture(Me,ce),P(Me),t.unbindTexture()}}}function $e(S){if(a&&S.samples>0&&Ne(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,$=S.height;let Q=i.COLOR_BUFFER_BIT;const se=[],Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(S),G=S.isWebGLMultipleRenderTargets===!0;if(G)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<_.length;he++){se.push(i.COLOR_ATTACHMENT0+he),S.depthBuffer&&se.push(Me);const pe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(pe===!1&&(S.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]),pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),G){const ge=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,Q,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const pe=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ye(S){return Math.min(f,S.samples)}function Ne(S){const _=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ve(S){const _=o.render.frame;x.get(S)!==_&&(x.set(S,_),S.update())}function ut(S,_){const N=S.colorSpace,$=S.format,Q=S.type;return S.isCompressedTexture===!0||S.format===xr||N!==Nt&&N!==fn&&(N===ye?a===!1?e.has("EXT_sRGB")===!0&&$===Lt?(S.format=xr,S.minFilter=St,S.generateMipmaps=!1):_=ia.sRGBToLinear(_):($!==Lt||Q!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=_e,this.setTexture3D=te,this.setTextureCube=F,this.rebindTextures=Ce,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ne}function Sd(i,e,t){const n=t.isWebGL2;function r(s,o=fn){let a;if(s===mn)return i.UNSIGNED_BYTE;if(s===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(s===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===io)return i.BYTE;if(s===ro)return i.SHORT;if(s===Qs)return i.UNSIGNED_SHORT;if(s===so)return i.INT;if(s===cn)return i.UNSIGNED_INT;if(s===un)return i.FLOAT;if(s===ti)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lo)return i.ALPHA;if(s===Lt)return i.RGBA;if(s===co)return i.LUMINANCE;if(s===uo)return i.LUMINANCE_ALPHA;if(s===hn)return i.DEPTH_COMPONENT;if(s===Vn)return i.DEPTH_STENCIL;if(s===xr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ho)return i.RED;if(s===fo)return i.RED_INTEGER;if(s===po)return i.RG;if(s===mo)return i.RG_INTEGER;if(s===_o)return i.RGBA_INTEGER;if(s===zi||s===Gi||s===Hi||s===Vi)if(o===ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zr||s===Gr||s===Hr||s===Vr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===go)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kr||s===Wr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kr)return o===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xr||s===qr||s===Yr||s===Kr||s===jr||s===Zr||s===$r||s===Jr||s===Qr||s===es||s===ts||s===ns||s===is||s===rs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$r)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===es)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ts)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ns)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===is)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rs)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ki)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ki)return o===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===vo||s===ss||s===as||s===os)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ki)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ss)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===as)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===os)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ed extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Td={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),c=this._getHandJoint(l,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&d>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yd extends gt{constructor(e,t,n,r,s,o,a,u,l,h){if(h=h!==void 0?h:hn,h!==hn&&h!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hn&&(n=cn),n===void 0&&h===Vn&&(n=Bn),super(null,r,s,o,a,u,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=u!==void 0?u:ct,this.flipY=!1,this.generateMipmaps=!1}}class Ad extends Wn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=1,l=null,h=null,f=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,c=null;const A=[],E=[],b=new Set,y=new Map,C=new Et;C.layers.enable(1),C.viewport=new tt;const P=new Et;P.layers.enable(2),P.viewport=new tt;const X=[C,P],g=new Ed;g.layers.enable(1),g.layers.enable(2);let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let q=A[F];return q===void 0&&(q=new fr,A[F]=q),q.getTargetRaySpace()},this.getControllerGrip=function(F){let q=A[F];return q===void 0&&(q=new fr,A[F]=q),q.getGripSpace()},this.getHand=function(F){let q=A[F];return q===void 0&&(q=new fr,A[F]=q),q.getHandSpace()};function Y(F){const q=E.indexOf(F.inputSource);if(q===-1)return;const re=A[q];re!==void 0&&(re.update(F.inputSource,F.frame,l||o),re.dispatchEvent({type:F.type,data:F.inputSource}))}function D(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",z);for(let F=0;F<A.length;F++){const q=E[F];q!==null&&(E[F]=null,A[F].disconnect(q))}T=null,j=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,c=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",D),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),c=new _n(m.framebufferWidth,m.framebufferHeight,{format:Lt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,re=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?Vn:hn,re=v.stencil?Bn:cn);const w={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(w),r.updateRenderState({layers:[d]}),c=new _n(d.textureWidth,d.textureHeight,{format:Lt,type:mn,depthTexture:new yd(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(c);Te.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(F){for(let q=0;q<F.removed.length;q++){const re=F.removed[q],ae=E.indexOf(re);ae>=0&&(E[ae]=null,A[ae].disconnect(re))}for(let q=0;q<F.added.length;q++){const re=F.added[q];let ae=E.indexOf(re);if(ae===-1){for(let Te=0;Te<A.length;Te++)if(Te>=E.length){E.push(re),ae=Te;break}else if(E[Te]===null){E[Te]=re,ae=Te;break}if(ae===-1)break}const w=A[ae];w&&w.connect(re)}}const V=new I,J=new I;function W(F,q,re){V.setFromMatrixPosition(q.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const ae=V.distanceTo(J),w=q.projectionMatrix.elements,Te=re.projectionMatrix.elements,Se=w[14]/(w[10]-1),ie=w[14]/(w[10]+1),xe=(w[9]+1)/w[5],Ie=(w[9]-1)/w[5],fe=(w[8]-1)/w[0],Ce=(Te[8]+1)/Te[0],Ze=Se*fe,et=Se*Ce,$e=ae/(-fe+Ce),Ye=$e*-fe;q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ye),F.translateZ($e),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ne=Se+$e,Ve=ie+$e,ut=Ze-Ye,S=et+(ae-Ye),_=xe*ie/Ve*Ne,N=Ie*ie/Ve*Ne;F.projectionMatrix.makePerspective(ut,S,_,N,Ne,Ve),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function k(F,q){q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;g.near=P.near=C.near=F.near,g.far=P.far=C.far=F.far,(T!==g.near||j!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),T=g.near,j=g.far);const q=F.parent,re=g.cameras;k(g,q);for(let ae=0;ae<re.length;ae++)k(re[ae],q);re.length===2?W(g,C,P):g.projectionMatrix.copy(C.projectionMatrix),ee(F,g,q)};function ee(F,q,re){re===null?F.matrix.copy(q.matrixWorld):(F.matrix.copy(re.matrixWorld),F.matrix.invert(),F.matrix.multiply(q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const ae=F.children;for(let w=0,Te=ae.length;w<Te;w++)ae[w].updateMatrixWorld(!0);F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Mr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(F){u=F,d!==null&&(d.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return b};let K=null;function _e(F,q){if(h=q.getViewerPose(l||o),x=q,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ae=!1;re.length!==g.cameras.length&&(g.cameras.length=0,ae=!0);for(let w=0;w<re.length;w++){const Te=re[w];let Se=null;if(m!==null)Se=m.getViewport(Te);else{const xe=f.getViewSubImage(d,Te);Se=xe.viewport,w===0&&(e.setRenderTargetTextures(c,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(c))}let ie=X[w];ie===void 0&&(ie=new Et,ie.layers.enable(w),ie.viewport=new tt,X[w]=ie),ie.matrix.fromArray(Te.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Te.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Se.x,Se.y,Se.width,Se.height),w===0&&(g.matrix.copy(ie.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ae===!0&&g.cameras.push(ie)}}for(let re=0;re<A.length;re++){const ae=E[re],w=A[re];ae!==null&&w!==void 0&&w.update(ae,q,l||o)}if(K&&K(F,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let re=null;for(const ae of b)q.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)b.delete(ae),y.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of q.detectedPlanes)if(!b.has(ae))b.add(ae),y.set(ae,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const w=y.get(ae);ae.lastChangedTime>w&&(y.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}x=null}const te=new pa;te.setAnimationLoop(_e),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}function bd(i,e){function t(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function n(p,c){c.color.getRGB(p.fogColor.value,ua(i)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,A,E,b){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),f(p,c)):c.isMeshPhongMaterial?(s(p,c),h(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,b)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?u(p,c,A,E):c.isSpriteMaterial?l(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,t(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===dt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,t(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===dt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,t(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,t(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const A=e.get(c).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const E=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*E,t(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function u(p,c,A,E){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*A,p.scale.value=E*.5,c.map&&(p.map.value=c.map,t(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function l(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function h(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function f(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,A){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===dt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const A=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rd(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(A,E){const b=E.program;n.uniformBlockBinding(A,b)}function l(A,E){let b=r[A.id];b===void 0&&(x(A),b=h(A),r[A.id]=b,A.addEventListener("dispose",p));const y=E.program;n.updateUBOMapping(A,y);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function h(A){const E=f();A.__bindingPointIndex=E;const b=i.createBuffer(),y=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],b=A.uniforms,y=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,P=b.length;C<P;C++){const X=b[C];if(m(X,C,y)===!0){const g=X.__offset,T=Array.isArray(X.value)?X.value:[X.value];let j=0;for(let Y=0;Y<T.length;Y++){const D=T[Y],z=v(D);typeof D=="number"?(X.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,g+j,X.__data)):D.isMatrix3?(X.__data[0]=D.elements[0],X.__data[1]=D.elements[1],X.__data[2]=D.elements[2],X.__data[3]=D.elements[0],X.__data[4]=D.elements[3],X.__data[5]=D.elements[4],X.__data[6]=D.elements[5],X.__data[7]=D.elements[0],X.__data[8]=D.elements[6],X.__data[9]=D.elements[7],X.__data[10]=D.elements[8],X.__data[11]=D.elements[0]):(D.toArray(X.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,g,X.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,b){const y=A.value;if(b[E]===void 0){if(typeof y=="number")b[E]=y;else{const C=Array.isArray(y)?y:[y],P=[];for(let X=0;X<C.length;X++)P.push(C[X].clone());b[E]=P}return!0}else if(typeof y=="number"){if(b[E]!==y)return b[E]=y,!0}else{const C=Array.isArray(b[E])?b[E]:[b[E]],P=Array.isArray(y)?y:[y];for(let X=0;X<C.length;X++){const g=C[X];if(g.equals(P[X])===!1)return g.copy(P[X]),!0}}return!1}function x(A){const E=A.uniforms;let b=0;const y=16;let C=0;for(let P=0,X=E.length;P<X;P++){const g=E[P],T={boundary:0,storage:0},j=Array.isArray(g.value)?g.value:[g.value];for(let Y=0,D=j.length;Y<D;Y++){const z=j[Y],V=v(z);T.boundary+=V.boundary,T.storage+=V.storage}if(g.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=b,P>0){C=b%y;const Y=y-C;C!==0&&Y-T.boundary<0&&(b+=y-C,g.__offset=b)}b+=T.storage}return C=b%y,C>0&&(b+=y-C),A.__size=b,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function p(A){const E=A.target;E.removeEventListener("dispose",p);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function c(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:u,update:l,dispose:c}}function wd(){const i=Ci("canvas");return i.style.display="block",i}class xa{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let m=null,x=null;const v=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ye,this.useLegacyLights=!0,this.toneMapping=Xt,this.toneMappingExposure=1;const c=this;let A=!1,E=0,b=0,y=null,C=-1,P=null;const X=new tt,g=new tt;let T=null,j=t.width,Y=t.height,D=1,z=null,V=null;const J=new tt(0,0,j,Y),W=new tt(0,0,j,Y);let k=!1;const ee=new fa;let K=!1,_e=!1,te=null;const F=new nt,q=new I,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return y===null?D:1}let w=n;function Te(M,U){for(let B=0;B<M.length;B++){const L=M[B],H=t.getContext(L,U);if(H!==null)return H}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tr}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),w===null){const U=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&U.shift(),w=Te(U,M),w===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,ie,xe,Ie,fe,Ce,Ze,et,$e,Ye,Ne,Ve,ut,S,_,N,$,Q,se,Me,ce,G,he,pe;function ge(){Se=new zu(w),ie=new Uu(w,Se,e),Se.init(ie),G=new Sd(w,Se,ie),xe=new xd(w,Se,ie),Ie=new Vu(w),fe=new sd,Ce=new Md(w,Se,xe,fe,ie,G,Ie),Ze=new Iu(c),et=new Bu(c),$e=new Qo(w,ie),he=new Lu(w,Se,$e,ie),Ye=new Gu(w,$e,Ie,he),Ne=new qu(w,Ye,$e,Ie),se=new Xu(w,ie,Ce),N=new Du(fe),Ve=new rd(c,Ze,et,Se,ie,he,N),ut=new bd(c,fe),S=new od,_=new fd(Se,ie),Q=new Cu(c,Ze,et,xe,Ne,d,u),$=new vd(c,Ne,ie),pe=new Rd(w,Ie,ie,xe),Me=new Pu(w,Se,Ie,ie),ce=new Hu(w,Se,Ie,ie),Ie.programs=Ve.programs,c.capabilities=ie,c.extensions=Se,c.properties=fe,c.renderLists=S,c.shadowMap=$,c.state=xe,c.info=Ie}ge();const le=new Ad(c,w);this.xr=le,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(M){M!==void 0&&(D=M,this.setSize(j,Y,!1))},this.getSize=function(M){return M.set(j,Y)},this.setSize=function(M,U,B=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,Y=U,t.width=Math.floor(M*D),t.height=Math.floor(U*D),B===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*D,Y*D).floor()},this.setDrawingBufferSize=function(M,U,B){j=M,Y=U,D=B,t.width=Math.floor(M*B),t.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,U,B,L){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,U,B,L),xe.viewport(X.copy(J).multiplyScalar(D).floor())},this.getScissor=function(M){return M.copy(W)},this.setScissor=function(M,U,B,L){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,U,B,L),xe.scissor(g.copy(W).multiplyScalar(D).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){xe.setScissorTest(k=M)},this.setOpaqueSort=function(M){z=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(M=!0,U=!0,B=!0){let L=0;M&&(L|=w.COLOR_BUFFER_BIT),U&&(L|=w.DEPTH_BUFFER_BIT),B&&(L|=w.STENCIL_BUFFER_BIT),w.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),S.dispose(),_.dispose(),fe.dispose(),Ze.dispose(),et.dispose(),Ne.dispose(),he.dispose(),pe.dispose(),Ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",ue),le.removeEventListener("sessionend",Be),te&&(te.dispose(),te=null),ze.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Ie.autoReset,U=$.enabled,B=$.autoUpdate,L=$.needsUpdate,H=$.type;ge(),Ie.autoReset=M,$.enabled=U,$.autoUpdate=B,$.needsUpdate=L,$.type=H}function Fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ke(M){const U=M.target;U.removeEventListener("dispose",ke),R(U)}function R(M){O(M),fe.remove(M)}function O(M){const U=fe.get(M).programs;U!==void 0&&(U.forEach(function(B){Ve.releaseProgram(B)}),M.isShaderMaterial&&Ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,L,H,me){U===null&&(U=re);const ve=H.isMesh&&H.matrixWorld.determinant()<0,Ee=Ta(M,U,B,L,H);xe.setMaterial(L,ve);let Ae=B.index,Re=1;L.wireframe===!0&&(Ae=Ye.getWireframeAttribute(B),Re=2);const we=B.drawRange,Le=B.attributes.position;let Oe=we.start*Re,at=(we.start+we.count)*Re;me!==null&&(Oe=Math.max(Oe,me.start*Re),at=Math.min(at,(me.start+me.count)*Re)),Ae!==null?(Oe=Math.max(Oe,0),at=Math.min(at,Ae.count)):Le!=null&&(Oe=Math.max(Oe,0),at=Math.min(at,Le.count));const Tt=at-Oe;if(Tt<0||Tt===1/0)return;he.setup(H,L,Ee,B,Ae);let Qt,Xe=Me;if(Ae!==null&&(Qt=$e.get(Ae),Xe=ce,Xe.setIndex(Qt)),H.isMesh)L.wireframe===!0?(xe.setLineWidth(L.wireframeLinewidth*ae()),Xe.setMode(w.LINES)):Xe.setMode(w.TRIANGLES);else if(H.isLine){let De=L.linewidth;De===void 0&&(De=1),xe.setLineWidth(De*ae()),H.isLineSegments?Xe.setMode(w.LINES):H.isLineLoop?Xe.setMode(w.LINE_LOOP):Xe.setMode(w.LINE_STRIP)}else H.isPoints?Xe.setMode(w.POINTS):H.isSprite&&Xe.setMode(w.TRIANGLES);if(H.isInstancedMesh)Xe.renderInstances(Oe,Tt,H.count);else if(B.isInstancedBufferGeometry){const De=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ii=Math.min(B.instanceCount,De);Xe.renderInstances(Oe,Tt,Ii)}else Xe.render(Oe,Tt)},this.compile=function(M,U){function B(L,H,me){L.transparent===!0&&L.side===kt&&L.forceSinglePass===!1?(L.side=dt,L.needsUpdate=!0,si(L,H,me),L.side=Jt,L.needsUpdate=!0,si(L,H,me),L.side=kt):si(L,H,me)}x=_.get(M),x.init(),p.push(x),M.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(x.pushLight(L),L.castShadow&&x.pushShadow(L))}),x.setupLights(c.useLegacyLights),M.traverse(function(L){const H=L.material;if(H)if(Array.isArray(H))for(let me=0;me<H.length;me++){const ve=H[me];B(ve,M,L)}else B(H,M,L)}),p.pop(),x=null};let Z=null;function oe(M){Z&&Z(M)}function ue(){ze.stop()}function Be(){ze.start()}const ze=new pa;ze.setAnimationLoop(oe),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(M){Z=M,le.setAnimationLoop(M),M===null?ze.stop():ze.start()},le.addEventListener("sessionstart",ue),le.addEventListener("sessionend",Be),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),M.isScene===!0&&M.onBeforeRender(c,M,U,y),x=_.get(M,p.length),x.init(),p.push(x),F.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(F),_e=this.localClippingEnabled,K=N.init(this.clippingPlanes,_e),m=S.get(M,v.length),m.init(),v.push(m),it(M,U,0,c.sortObjects),m.finish(),c.sortObjects===!0&&m.sort(z,V),K===!0&&N.beginShadows();const B=x.state.shadowsArray;if($.render(B,M,U),K===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(m,M),x.setupLights(c.useLegacyLights),U.isArrayCamera){const L=U.cameras;for(let H=0,me=L.length;H<me;H++){const ve=L[H];qt(m,M,ve,ve.viewport)}}else qt(m,M,U);y!==null&&(Ce.updateMultisampleRenderTarget(y),Ce.updateRenderTargetMipmap(y)),M.isScene===!0&&M.onAfterRender(c,M,U),he.resetDefaultState(),C=-1,P=null,p.pop(),p.length>0?x=p[p.length-1]:x=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function it(M,U,B,L){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)x.pushLight(M),M.castShadow&&x.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){L&&q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(F);const ve=Ne.update(M),Ee=M.material;Ee.visible&&m.push(M,ve,Ee,B,q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){M.isSkinnedMesh&&M.skeleton.frame!==Ie.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ie.render.frame);const ve=Ne.update(M),Ee=M.material;if(L&&(ve.boundingSphere===null&&ve.computeBoundingSphere(),q.copy(ve.boundingSphere.center).applyMatrix4(M.matrixWorld).applyMatrix4(F)),Array.isArray(Ee)){const Ae=ve.groups;for(let Re=0,we=Ae.length;Re<we;Re++){const Le=Ae[Re],Oe=Ee[Le.materialIndex];Oe&&Oe.visible&&m.push(M,ve,Oe,B,q.z,Le)}}else Ee.visible&&m.push(M,ve,Ee,B,q.z,null)}}const me=M.children;for(let ve=0,Ee=me.length;ve<Ee;ve++)it(me[ve],U,B,L)}function qt(M,U,B,L){const H=M.opaque,me=M.transmissive,ve=M.transparent;x.setupLightsView(B),K===!0&&N.setGlobalState(c.clippingPlanes,B),me.length>0&&We(H,me,U,B),L&&xe.viewport(X.copy(L)),H.length>0&&xt(H,U,B),me.length>0&&xt(me,U,B),ve.length>0&&xt(ve,U,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function We(M,U,B,L){if(te===null){const Ee=ie.isWebGL2;te=new _n(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ti:mn,minFilter:ei,samples:Ee&&a===!0?4:0})}const H=c.getRenderTarget();c.setRenderTarget(te),c.clear();const me=c.toneMapping;c.toneMapping=Xt,xt(M,B,L),Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te);let ve=!1;for(let Ee=0,Ae=U.length;Ee<Ae;Ee++){const Re=U[Ee],we=Re.object,Le=Re.geometry,Oe=Re.material,at=Re.group;if(Oe.side===kt&&we.layers.test(L.layers)){const Tt=Oe.side;Oe.side=dt,Oe.needsUpdate=!0,Pt(we,B,L,Le,Oe,at),Oe.side=Tt,Oe.needsUpdate=!0,ve=!0}}ve===!0&&(Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te)),c.setRenderTarget(H),c.toneMapping=me}function xt(M,U,B){const L=U.isScene===!0?U.overrideMaterial:null;for(let H=0,me=M.length;H<me;H++){const ve=M[H],Ee=ve.object,Ae=ve.geometry,Re=L===null?ve.material:L,we=ve.group;Ee.layers.test(B.layers)&&Pt(Ee,U,B,Ae,Re,we)}}function Pt(M,U,B,L,H,me){M.onBeforeRender(c,U,B,L,H,me),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(c,U,B,L,M,me),H.transparent===!0&&H.side===kt&&H.forceSinglePass===!1?(H.side=dt,H.needsUpdate=!0,c.renderBufferDirect(B,U,L,H,M,me),H.side=Jt,H.needsUpdate=!0,c.renderBufferDirect(B,U,L,H,M,me),H.side=kt):c.renderBufferDirect(B,U,L,H,M,me),M.onAfterRender(c,U,B,L,H,me)}function si(M,U,B){U.isScene!==!0&&(U=re);const L=fe.get(M),H=x.state.lights,me=x.state.shadowsArray,ve=H.state.version,Ee=Ve.getParameters(M,H.state,me,U,B),Ae=Ve.getProgramCacheKey(Ee);let Re=L.programs;L.environment=M.isMeshStandardMaterial?U.environment:null,L.fog=U.fog,L.envMap=(M.isMeshStandardMaterial?et:Ze).get(M.envMap||L.environment),Re===void 0&&(M.addEventListener("dispose",ke),Re=new Map,L.programs=Re);let we=Re.get(Ae);if(we!==void 0){if(L.currentProgram===we&&L.lightsStateVersion===ve)return Cr(M,Ee),we}else Ee.uniforms=Ve.getUniforms(M),M.onBuild(B,Ee,c),M.onBeforeCompile(Ee,c),we=Ve.acquireProgram(Ee,Ae),Re.set(Ae,we),L.uniforms=Ee.uniforms;const Le=L.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=N.uniform),Cr(M,Ee),L.needsLights=Aa(M),L.lightsStateVersion=ve,L.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix);const Oe=we.getUniforms(),at=wi.seqWithValue(Oe.seq,Le);return L.currentProgram=we,L.uniformsList=at,we}function Cr(M,U){const B=fe.get(M);B.outputColorSpace=U.outputColorSpace,B.instancing=U.instancing,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Ta(M,U,B,L,H){U.isScene!==!0&&(U=re),Ce.resetTextureUnits();const me=U.fog,ve=L.isMeshStandardMaterial?U.environment:null,Ee=y===null?c.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Nt,Ae=(L.isMeshStandardMaterial?et:Ze).get(L.envMap||ve),Re=L.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,we=!!L.normalMap&&!!B.attributes.tangent,Le=!!B.morphAttributes.position,Oe=!!B.morphAttributes.normal,at=!!B.morphAttributes.color,Tt=L.toneMapped?c.toneMapping:Xt,Qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xe=Qt!==void 0?Qt.length:0,De=fe.get(L),Ii=x.state.lights;if(K===!0&&(_e===!0||M!==P)){const ft=M===P&&L.id===C;N.setState(L,M,ft)}let Je=!1;L.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ii.state.version||De.outputColorSpace!==Ee||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ae||L.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==N.numPlanes||De.numIntersection!==N.numIntersection)||De.vertexAlphas!==Re||De.vertexTangents!==we||De.morphTargets!==Le||De.morphNormals!==Oe||De.morphColors!==at||De.toneMapping!==Tt||ie.isWebGL2===!0&&De.morphTargetsCount!==Xe)&&(Je=!0):(Je=!0,De.__version=L.version);let en=De.currentProgram;Je===!0&&(en=si(L,U,H));let Lr=!1,Yn=!1,Ni=!1;const ot=en.getUniforms(),tn=De.uniforms;if(xe.useProgram(en.program)&&(Lr=!0,Yn=!0,Ni=!0),L.id!==C&&(C=L.id,Yn=!0),Lr||P!==M){if(ot.setValue(w,"projectionMatrix",M.projectionMatrix),ie.logarithmicDepthBuffer&&ot.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),P!==M&&(P=M,Yn=!0,Ni=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const ft=ot.map.cameraPosition;ft!==void 0&&ft.setValue(w,q.setFromMatrixPosition(M.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ot.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||H.isSkinnedMesh)&&ot.setValue(w,"viewMatrix",M.matrixWorldInverse)}if(H.isSkinnedMesh){ot.setOptional(w,H,"bindMatrix"),ot.setOptional(w,H,"bindMatrixInverse");const ft=H.skeleton;ft&&(ie.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),ot.setValue(w,"boneTexture",ft.boneTexture,Ce),ot.setValue(w,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fi=B.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0&&ie.isWebGL2===!0)&&se.update(H,B,en),(Yn||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,ot.setValue(w,"receiveShadow",H.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(tn.envMap.value=Ae,tn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Yn&&(ot.setValue(w,"toneMappingExposure",c.toneMappingExposure),De.needsLights&&ya(tn,Ni),me&&L.fog===!0&&ut.refreshFogUniforms(tn,me),ut.refreshMaterialUniforms(tn,L,D,Y,te),wi.upload(w,De.uniformsList,tn,Ce)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(wi.upload(w,De.uniformsList,tn,Ce),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ot.setValue(w,"center",H.center),ot.setValue(w,"modelViewMatrix",H.modelViewMatrix),ot.setValue(w,"normalMatrix",H.normalMatrix),ot.setValue(w,"modelMatrix",H.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const ft=L.uniformsGroups;for(let Oi=0,ba=ft.length;Oi<ba;Oi++)if(ie.isWebGL2){const Pr=ft[Oi];pe.update(Pr,en),pe.bind(Pr,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function ya(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Aa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(M,U,B){fe.get(M.texture).__webglTexture=U,fe.get(M.depthTexture).__webglTexture=B;const L=fe.get(M);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=B===void 0,L.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const B=fe.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,B=0){y=M,E=U,b=B;let L=!0,H=null,me=!1,ve=!1;if(M){const Ae=fe.get(M);Ae.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(w.FRAMEBUFFER,null),L=!1):Ae.__webglFramebuffer===void 0?Ce.setupRenderTarget(M):Ae.__hasExternalTextures&&Ce.rebindTextures(M,fe.get(M.texture).__webglTexture,fe.get(M.depthTexture).__webglTexture);const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ve=!0);const we=fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=we[U],me=!0):ie.isWebGL2&&M.samples>0&&Ce.useMultisampledRTT(M)===!1?H=fe.get(M).__webglMultisampledFramebuffer:H=we,X.copy(M.viewport),g.copy(M.scissor),T=M.scissorTest}else X.copy(J).multiplyScalar(D).floor(),g.copy(W).multiplyScalar(D).floor(),T=k;if(xe.bindFramebuffer(w.FRAMEBUFFER,H)&&ie.drawBuffers&&L&&xe.drawBuffers(M,H),xe.viewport(X),xe.scissor(g),xe.setScissorTest(T),me){const Ae=fe.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,B)}else if(ve){const Ae=fe.get(M.texture),Re=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Re)}C=-1},this.readRenderTargetPixels=function(M,U,B,L,H,me,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){xe.bindFramebuffer(w.FRAMEBUFFER,Ee);try{const Ae=M.texture,Re=Ae.format,we=Ae.type;if(Re!==Lt&&G.convert(Re)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=we===ti&&(Se.has("EXT_color_buffer_half_float")||ie.isWebGL2&&Se.has("EXT_color_buffer_float"));if(we!==mn&&G.convert(we)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===un&&(ie.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-L&&B>=0&&B<=M.height-H&&w.readPixels(U,B,L,H,G.convert(Re),G.convert(we),me)}finally{const Ae=y!==null?fe.get(y).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(M,U,B=0){const L=Math.pow(2,-B),H=Math.floor(U.image.width*L),me=Math.floor(U.image.height*L);Ce.setTexture2D(U,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,M.x,M.y,H,me),xe.unbindTexture()},this.copyTextureToTexture=function(M,U,B,L=0){const H=U.image.width,me=U.image.height,ve=G.convert(B.format),Ee=G.convert(B.type);Ce.setTexture2D(B,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,L,M.x,M.y,H,me,ve,Ee,U.image.data):U.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,L,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,L,M.x,M.y,ve,Ee,U.image),L===0&&B.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B,L,H=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,Ae=G.convert(L.format),Re=G.convert(L.type);let we;if(L.isData3DTexture)Ce.setTexture3D(L,0),we=w.TEXTURE_3D;else if(L.isDataArrayTexture)Ce.setTexture2DArray(L,0),we=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const Le=w.getParameter(w.UNPACK_ROW_LENGTH),Oe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),at=w.getParameter(w.UNPACK_SKIP_PIXELS),Tt=w.getParameter(w.UNPACK_SKIP_ROWS),Qt=w.getParameter(w.UNPACK_SKIP_IMAGES),Xe=B.isCompressedTexture?B.mipmaps[0]:B.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,M.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,M.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?w.texSubImage3D(we,H,U.x,U.y,U.z,me,ve,Ee,Ae,Re,Xe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),w.compressedTexSubImage3D(we,H,U.x,U.y,U.z,me,ve,Ee,Ae,Xe.data)):w.texSubImage3D(we,H,U.x,U.y,U.z,me,ve,Ee,Ae,Re,Xe),w.pixelStorei(w.UNPACK_ROW_LENGTH,Le),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Oe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,at),w.pixelStorei(w.UNPACK_SKIP_ROWS,Tt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Qt),H===0&&L.generateMipmaps&&w.generateMipmap(we),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ce.setTextureCube(M,0):M.isData3DTexture?Ce.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ce.setTexture2DArray(M,0):Ce.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){E=0,b=0,y=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?dn:ea}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dn?ye:Nt}}class Cd extends xa{}Cd.prototype.isWebGL1Renderer=!0;class Ld extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);const Ma=new Ld,Sa=new Et(75,window.innerWidth/window.innerHeight,.1,1e3),wr=new xa;wr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(wr.domElement);const Pd=new Xn(1,1,1),Ud=new Ar({color:65280}),Er=new Wt(Pd,Ud);Ma.add(Er);Sa.position.z=5;function Ea(){requestAnimationFrame(Ea),Er.rotation.x+=.01,Er.rotation.y+=.01,wr.render(Ma,Sa)}Ea();
