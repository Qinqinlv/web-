!function(e){"use strict";function t(){v(!0)}var a={};e.respond=a,a.update=function(){};var n=[],r=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(a){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),s=function(e,t){var a=r();a&&(a.open("GET",e,!0),a.onreadystatechange=function(){4!==a.readyState||200!==a.status&&304!==a.status||t(a.responseText)},4!==a.readyState&&a.send(null))};if(a.ajax=s,a.queue=n,a.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},a.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!a.mediaQueriesSupported){var i,o,l,m=e.document,d=m.documentElement,h=[],u=[],f=[],c={},p=m.getElementsByTagName("head")[0]||d,g=m.getElementsByTagName("base")[0],y=p.getElementsByTagName("link"),x=function(){var e,t=m.createElement("div"),a=m.body,n=d.style.fontSize,r=a&&a.style.fontSize,s=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",a||((a=s=m.createElement("body")).style.background="none"),d.style.fontSize="100%",a.style.fontSize="100%",a.appendChild(t),s&&d.insertBefore(a,d.firstChild),e=t.offsetWidth,s?d.removeChild(a):a.removeChild(t),d.style.fontSize=n,r&&(a.style.fontSize=r),e=l=parseFloat(e)},v=function(t){var a=d.clientWidth,n="CSS1Compat"===m.compatMode&&a||m.body.clientWidth||a,r={},s=y[y.length-1],c=(new Date).getTime();if(t&&i&&c-i<30)return e.clearTimeout(o),void(o=e.setTimeout(v,30));i=c;for(var g in h)if(h.hasOwnProperty(g)){var E=h[g],w=E.minw,S=E.maxw,T=null===w,$=null===S;w&&(w=parseFloat(w)*(w.indexOf("em")>-1?l||x():1)),S&&(S=parseFloat(S)*(S.indexOf("em")>-1?l||x():1)),E.hasquery&&(T&&$||!(T||n>=w)||!($||n<=S))||(r[E.media]||(r[E.media]=[]),r[E.media].push(u[E.rules]))}for(var z in f)f.hasOwnProperty(z)&&f[z]&&f[z].parentNode===p&&p.removeChild(f[z]);f.length=0;for(var b in r)if(r.hasOwnProperty(b)){var C=m.createElement("style"),R=r[b].join("\n");C.type="text/css",C.media=b,p.insertBefore(C,s.nextSibling),C.styleSheet?C.styleSheet.cssText=R:C.appendChild(m.createTextNode(R)),f.push(C)}},E=function(e,t,n){var r=e.replace(a.regex.keyframes,"").match(a.regex.media),s=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var i=function(e){return e.replace(a.regex.urls,"$1"+t+"$2$3")},o=!s&&n;t.length&&(t+="/"),o&&(s=1);for(var l=0;l<s;l++){var m,d,f,c;o?(m=n,u.push(i(e))):(m=r[l].match(a.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&i(RegExp.$2))),c=(f=m.split(",")).length;for(var p=0;p<c;p++)d=f[p],h.push({media:d.split("(")[0].match(a.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(a.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(a.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},w=function(){if(n.length){var t=n.shift();s(t.href,function(a){E(a,t.href,t.media),c[t.href]=!0,e.setTimeout(function(){w()},0)})}},S=function(){for(var t=0;t<y.length;t++){var a=y[t],r=a.href,s=a.media,i=a.rel&&"stylesheet"===a.rel.toLowerCase();r&&i&&!c[r]&&(a.styleSheet&&a.styleSheet.rawCssText?(E(a.styleSheet.rawCssText,r,s),c[r]=!0):(/^([a-zA-Z:]*\/\/)/.test(r)||g)&&r.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===r.substring(0,2)&&(r=e.location.protocol+r),n.push({href:r,media:s})))}w()};S(),a.update=S,a.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);