!/**
 * Highstock JS v11.4.8 (2024-08-29)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/aroon",["highcharts","highcharts/modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function o(e,o,i,n){e.hasOwnProperty(o)||(e[o]=n.apply(null,i),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:e[o]}})))}o(e,"Stock/Indicators/MultipleLinesComposition.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var o;let{sma:{prototype:i}}=t.seriesTypes,{defined:n,error:r,merge:a}=e;return function(t){let e=["bottomLine"],o=["top","bottom"],s=["top"];function p(t){return"plot"+t.charAt(0).toUpperCase()+t.slice(1)}function l(t,e){let o=[];return(t.pointArrayMap||[]).forEach(t=>{t!==e&&o.push(p(t))}),o}function h(){let t=this,e=t.pointValKey,o=t.linesApiNames,s=t.areaLinesNames,h=t.points,c=t.options,u=t.graph,f={options:{gapSize:c.gapSize}},d=[],m=l(t,e),y=h.length,g;if(m.forEach((t,e)=>{for(d[e]=[];y--;)g=h[y],d[e].push({x:g.x,plotX:g.plotX,plotY:g[t],isNull:!n(g[t])});y=h.length}),t.userOptions.fillColor&&s.length){let e=d[m.indexOf(p(s[0]))],o=1===s.length?h:d[m.indexOf(p(s[1]))],n=t.color;t.points=o,t.nextPoints=e,t.color=t.userOptions.fillColor,t.options=a(h,f),t.graph=t.area,t.fillGraph=!0,i.drawGraph.call(t),t.area=t.graph,delete t.nextPoints,delete t.fillGraph,t.color=n}o.forEach((e,o)=>{d[o]?(t.points=d[o],c[e]?t.options=a(c[e].styles,f):r('Error: "There is no '+e+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),t.graph=t["graph"+e],i.drawGraph.call(t),t["graph"+e]=t.graph):r('Error: "'+e+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),t.points=h,t.options=c,t.graph=u,i.drawGraph.call(t)}function c(t){let e,o=[],n=[];if(t=t||this.points,this.fillGraph&&this.nextPoints){if((e=i.getGraphPath.call(this,this.nextPoints))&&e.length){e[0][0]="L",o=i.getGraphPath.call(this,t),n=e.slice(0,o.length);for(let t=n.length-1;t>=0;t--)o.push(n[t])}}else o=i.getGraphPath.apply(this,arguments);return o}function u(t){let e=[];return(this.pointArrayMap||[]).forEach(o=>{e.push(t[o])}),e}function f(){let t=this.pointArrayMap,e=[],o;e=l(this),i.translate.apply(this,arguments),this.points.forEach(i=>{t.forEach((t,n)=>{o=i[t],this.dataModify&&(o=this.dataModify.modifyValue(o)),null!==o&&(i[e[n]]=this.yAxis.toPixels(o,!0))})})}t.compose=function(t){let i=t.prototype;return i.linesApiNames=i.linesApiNames||e.slice(),i.pointArrayMap=i.pointArrayMap||o.slice(),i.pointValKey=i.pointValKey||"top",i.areaLinesNames=i.areaLinesNames||s.slice(),i.drawGraph=h,i.getGraphPath=c,i.toYData=u,i.translate=f,t}}(o||(o={})),o}),o(e,"Stock/Indicators/Aroon/AroonIndicator.js",[e["Stock/Indicators/MultipleLinesComposition.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,o){let{sma:i}=e.seriesTypes,{extend:n,merge:r,pick:a}=o;function s(t,e){let o=t[0],i=0,n;for(n=1;n<t.length;n++)("max"===e&&t[n]>=o||"min"===e&&t[n]<=o)&&(o=t[n],i=n);return i}class p extends i{getValues(t,e){let o,i,n,r,p;let l=e.period,h=t.xData,c=t.yData,u=c?c.length:0,f=[],d=[],m=[];for(r=l-1;r<u;r++)n=s((p=c.slice(r-l+1,r+2)).map(function(t){return a(t[2],t)}),"min"),o=s(p.map(function(t){return a(t[1],t)}),"max")/l*100,i=n/l*100,h[r+1]&&(f.push([h[r+1],o,i]),d.push(h[r+1]),m.push([o,i]));return{values:f,xData:d,yData:m}}}return p.defaultOptions=r(i.defaultOptions,{params:{index:void 0,period:25},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">●</span><b> {series.name}</b><br/>Aroon Up: {point.y}<br/>Aroon Down: {point.aroonDown}<br/>'},aroonDown:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}}),n(p.prototype,{areaLinesNames:[],linesApiNames:["aroonDown"],nameBase:"Aroon",pointArrayMap:["y","aroonDown"],pointValKey:"y"}),t.compose(p),e.registerSeriesType("aroon",p),p}),o(e,"masters/indicators/aroon.src.js",[e["Core/Globals.js"]],function(t){return t})});