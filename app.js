window.onload=function(){OpenSpeedTest.Start();ostOnload()};
(function(oa){function e(b){if(!(this instanceof e))return new e(b);this.el=document.getElementById(b)}var l,pa=function(b){b&&"function"===typeof b&&b()};e.prototype.fade=function(b,d,g){var f="in"===b,p=f?0:1,v=14/d,k=this;f&&(k.el.style.display="block",k.el.style.opacity=p);var q=window.setInterval(function(){p=f?p+v:p-v;k.el.style.opacity=p;0>=p&&(k.el.style.display="none");(0>=p||1<=p)&&window.clearInterval(q,pa(g))},14)};var Y=function(b,d,g,f){b/=f;b--;return g*(b*b*b+1)+d},n=function(){this.YourIP=
e("YourIP");this.ipDesk=e("ipDesk");this.ipMob=e("ipMob");this.downSymbolDesk=e("downSymbolDesk");this.upSymbolDesk=e("upSymbolDesk");this.upSymbolMob=e("upSymbolMob");this.downSymbolMob=e("downSymbolMob");this.settingsMob=e("settingsMob");this.settingsDesk=e("settingsDesk");this.oDoLiveStatus=e("oDoLiveStatus");this.ConnectErrorMob=e("ConnectErrorMob");this.ConnectErrorDesk=e("ConnectErrorDesk");this.downResult=e("downResult");this.upRestxt=e("upRestxt");this.pingResult=e("pingResult");this.jitterDesk=
e("jitterDesk");this.pingMobres=e("pingMobres");this.JitterResultMon=e("JitterResultMon");this.JitterResultms=e("JitterResultms");this.UI_Desk=e("UI-Desk");this.UI_Mob=e("UI-Mob");this.oDoTopSpeed=e("oDoTopSpeed");this.startButtonMob=e("startButtonMob");this.startButtonDesk=e("startButtonDesk");this.intro_Desk=e("intro-Desk");this.intro_Mob=e("intro-Mob");this.loader=e("loading_app");this.OpenSpeedtest=e("OpenSpeedtest");this.mainGuagebg_Desk=e("mainGuagebg-Desk");this.mainGuageBlue_Desk=e("mainGuageBlue-Desk");
this.mainGuageWhite_Desk=e("mainGuageWhite-Desk");this.mainGuagebg_Mob=e("mainGuagebg-Mob");this.mainGuageBlue_Mob=e("mainGuageBlue-Mob");this.mainGuageWhite_Mob=e("mainGuageWhite-Mob");this.oDoLiveSpeed=e("oDoLiveSpeed");this.progressStatus_Mob=e("progressStatus-Mob");this.progressStatus_Desk=e("progressStatus-Desk");this.graphc1=e("graphc1");this.graphc2=e("graphc2");this.graphMob2=e("graphMob2");this.graphMob1=e("graphMob1");this.text=e("text");this.scale=[{degree:680,value:0},{degree:570,value:.5},
{degree:460,value:1},{degree:337,value:10},{degree:220,value:100},{degree:115,value:500},{degree:0,value:1E3}];this.polygon=this.chart=this.element="";this.width=200;this.height=50;this.maxValue=0;this.values=[];this.vSteps=5;this.measurements=[];this.points=[]};n.prototype.reset=function(){this.polygon=this.chart=this.element="";this.width=200;this.height=50;this.maxValue=0;this.values=[];this.vSteps=5;this.measurements=[];this.points=[]};n.prototype.ip=function(){"block"===this.ipDesk.el.style.display?
(this.ipDesk.el.style.display="none",this.ipMob.el.style.display="none"):(this.ipDesk.el.style.display="block",this.ipMob.el.style.display="block")};n.prototype.prePing=function(){this.loader.fade("out",500);this.OpenSpeedtest.fade("in",1E3)};n.prototype.app=function(){this.loader.fade("out",500,this.ShowAppIntro())};n.prototype.ShowAppIntro=function(){this.OpenSpeedtest.fade("in",1E3)};n.prototype.userInterface=function(){this.intro_Desk.fade("out",1E3);this.intro_Mob.fade("out",1E3,this.ShowUI())};
n.prototype.ShowUI=function(){this.UI_Desk.fade("in",1E3);this.UI_Mob.fade("in",1E3,function(b){l="Loaded";console.log("Developed by Vishnu. Email --\x3e me@vishnu.pro")})};n.prototype.Symbol=function(b){0==b&&(this.downSymbolMob.el.style.display="block",this.downSymbolDesk.el.style.display="block",this.upSymbolMob.el.style.display="none",this.upSymbolDesk.el.style.display="none");1==b&&(this.downSymbolMob.el.style.display="none",this.downSymbolDesk.el.style.display="none",this.upSymbolMob.el.style.display=
"block",this.upSymbolDesk.el.style.display="block");2==b&&(this.downSymbolMob.el.style.display="none",this.downSymbolDesk.el.style.display="none",this.upSymbolMob.el.style.display="none",this.upSymbolDesk.el.style.display="none")};n.prototype.Graph=function(b,d){function g(q,D){for(k=f.maxValue=0;k<f.values.length;k++)f.values[k]>f.maxValue&&(f.maxValue=f.values[k]);f.maxValue=Math.ceil(f.maxValue);if(1<f.values.length){var x="0,"+f.height+" ";for(k=0;k<f.values.length;k++){var y=f.values[k]/f.maxValue;
y=(130/(f.values.length-1)*k).toFixed(2)+","+(f.height-f.height*y).toFixed(2)+" ";x+=y}x+="130,"+f.height;f.points=x}for(k=0;k<f.vSteps;k++)f.measurements.push(Math.ceil(f.maxValue/f.vSteps*(k+1)));f.measurements.reverse();for(x=document.getElementsByClassName(v);0<x.length;)x[0].remove();f.polygon=document.createElementNS("http://www.w3.org/2000/svg","polygon");f.polygon.setAttribute("points",f.points);f.polygon.setAttribute("class",v);1<f.values.length&&p.appendChild(f.polygon)}"remove"in Element.prototype||
(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var f=this;if(0===d){var p=this.graphc1.el;var v="line";this.graphMob2.el.style.display="none";this.graphMob1.el.style.display="block"}else p=this.graphc2.el,v="line2",this.graphMob1.el.style.display="none",this.graphMob2.el.style.display="block";isNaN(b)?this.values.push(""):this.values.push(b);var k;0<b&&g(p,b)};n.prototype.progress=function(b,d){var g=this,f=Date.now(),p=setInterval(function(){var v=(Date.now()-
f)/1E3,k=Y(v,400,400,d),q=Y(v,400,-400,d);b?(g.progressStatus_Desk.el.style.strokeDashoffset=k,g.progressStatus_Mob.el.style.strokeDashoffset=k):(g.progressStatus_Desk.el.style.strokeDashoffset=q,g.progressStatus_Mob.el.style.strokeDashoffset=q);v>=d&&(clearInterval(p),g.progressStatus_Desk.el.style.strokeDashoffset=800,g.progressStatus_Mob.el.style.strokeDashoffset=800)},14)};n.prototype.mainGuageProgress=function(b){var d=b;0>d&&(d=0);var g=this.getNonlinearDegree(d);0<b&&(this.mainGuageBlue_Desk.el.style.strokeOpacity=
1,this.mainGuageWhite_Desk.el.style.strokeOpacity=1,this.mainGuageBlue_Mob.el.style.strokeOpacity=1,this.mainGuageWhite_Mob.el.style.strokeOpacity=1,this.mainGuageBlue_Desk.el.style.strokeDashoffset=g,this.mainGuageWhite_Desk.el.style.strokeDashoffset=0==g?1:g+1,this.mainGuageBlue_Mob.el.style.strokeDashoffset=g,this.mainGuageWhite_Mob.el.style.strokeDashoffset=0==g?1:g+1);0==g&&1E3<d?(this.mainGuageBlue_Mob.el.style.strokeDashoffset=681<=g?681:g,this.mainGuageWhite_Mob.el.style.strokeDashoffset=
0==g?1:g+1,this.mainGuageWhite_Desk.el.style.strokeDashoffset=0==g?1:g+1,this.mainGuageBlue_Desk.el.style.strokeDashoffset=681<=g?681:g):0==g&&0>=d&&(this.mainGuageBlue_Mob.el.style.strokeDashoffset=681.1,this.mainGuageWhite_Mob.el.style.strokeDashoffset=.1,this.mainGuageWhite_Desk.el.style.strokeDashoffset=.1,this.mainGuageBlue_Desk.el.style.strokeDashoffset=681.1)};n.prototype.showStatus=function(b){this.oDoLiveStatus.el.textContent=b};n.prototype.ConnectionError=function(){this.ConnectErrorMob.el.style.display=
"block";this.ConnectErrorDesk.el.style.display="block"};n.prototype.uploadResult=function(b){1>b&&(this.upRestxt.el.textContent=b.toFixed(2));1<b&&(this.upRestxt.el.textContent=b.toFixed(1))};n.prototype.pingResults=function(b){"string"==typeof b?this.oDoLiveSpeed.el.textContent=b:1E3>b?(this.pingResult.el.textContent=Math.abs(b).toFixed(0),this.pingMobres.el.textContent=Math.abs(b).toFixed(0),this.oDoLiveSpeed.el.textContent=Math.abs(b).toFixed(0)):(this.pingResult.el.textContent=Math.abs(b).toFixed(0),
this.pingMobres.el.textContent=Math.abs(b).toFixed(0))};n.prototype.downloadResult=function(b){1>b&&(this.downResult.el.textContent=b.toFixed(2));1<b&&(this.downResult.el.textContent=b.toFixed(1))};n.prototype.jitterResult=function(b){this.jitterDesk.el.textContent=Math.abs(b).toFixed(0);this.JitterResultMon.el.textContent=Math.abs(b).toFixed(0)};n.prototype.LiveSpeed=function(b){var d=b;0==d&&(d=b.toFixed(1),this.oDoLiveSpeed.el.textContent=d);1>=d&&0<d&&(d=b.toFixed(2),this.oDoLiveSpeed.el.textContent=
d);1<d&&(d=b.toFixed(1),this.oDoLiveSpeed.el.textContent=d);1E3>=d&&(this.oDoTopSpeed.el.textContent="1000+",this.oDoTopSpeed.el.style.fontSize=16.9,this.oDoTopSpeed.el.style.fill="gray");1001<=d&&(this.oDoTopSpeed.el.textContent=d+"+",this.oDoTopSpeed.el.style.fill="#434040",this.oDoTopSpeed.el.style.fontSize=18)};n.prototype.GuageProgresstoZero=function(b,d){var g=this;if(0<=b)var f=Date.now(),p=0-b,v=setInterval(function(){var k=(Date.now()-f)/1E3;var q=k/3;q--;q=p*(q*q*q*q*q+1)+b;g.LiveSpeed(q);
g.mainGuageProgress(q);if(3<=k||0>=q)clearInterval(v),g.LiveSpeed(0),g.mainGuageProgress(0),l=d},16)};n.prototype.getNonlinearDegree=function(b){var d=0;if(0==b||0>=b||isNaN(b))return 0;for(;d<this.scale.length;)if(b>this.scale[d].value)d++;else return this.scale[d-1].degree+(b-this.scale[d-1].value)*(this.scale[d].degree-this.scale[d-1].degree)/(this.scale[d].value-this.scale[d-1].value);return this.scale[this.scale.length-1].degree};var E=function(){this.OverAllTimeAvg=window.performance.now();
this.SpeedSamples=[];this.FinalSpeed};E.prototype.reset=function(){this.OverAllTimeAvg=window.performance.now();this.SpeedSamples=[];this.FinalSpeed=0};E.prototype.ArraySum=function(b){return b?b.reduce(function(d,g){if("number"===typeof d&&"number"===typeof g)return d+g},0):0};E.prototype.AvgSpeed=function(b,d,g){this.timeNow=(window.performance.now()-this.OverAllTimeAvg)/1E3;this.FinalSpeed;this.timeNow>=d&&(0<b&&this.SpeedSamples.push(b),this.FinalSpeed=this.ArraySum(this.SpeedSamples)/this.SpeedSamples.length);
return this.FinalSpeed};var wa=function(){function b(){--F;c.LiveSpeed(F)}function d(){c.LiveSpeed(0);clearInterval(qa);17==location.hostname.length&&p()}function g(){c.ip()}function f(){55==ra&&(p(),c.userInterface())}function p(){c.startButtonDesk.el.removeEventListener("click",f);c.startButtonMob.el.removeEventListener("click",f);var a=setInterval(function(){"Loaded"===l&&(l="busy",y(0));"Ping"===l&&(l="busy",c.showStatus("Microseconds"));"Download"===l&&(c.showStatus("Initializing.."),A.reset(),
r=G=H=I=0,c.reset(),P=window.performance.now(),v(),l="initDown");if("Downloading"===l){c.Symbol(0);if(0==J){J=1;c.showStatus("Testing download speed..");var h=(window.performance.now()-P)/1E3;Z=h;c.progress(1,dlDuration+2.5);dlDuration+=h}Q=(window.performance.now()-P)/1E3;q("dl");c.showStatus("Mbps download");c.mainGuageProgress(r);c.LiveSpeed(r);c.Graph(r,0);A.AvgSpeed(r,dlFinal,dlDuration);Q>=dlDuration&&(c.GuageProgresstoZero(r,"Upload"),c.downloadResult(A.AvgSpeed(r,dlFinal,dlDuration)),B=1,
l="busy",r=G=H=I=0,A.reset())}"Upload"==l&&1===B&&(c.Symbol(1),l="initup",R=window.performance.now(),c.showStatus("Initializing.."),k());"Uploading"===l&&(1==J&&(J=2,c.showStatus("Testing upload speed.."),r=0,A.reset(),c.reset(),aa=h=(window.performance.now()-R)/1E3,c.progress(!1,ulDuration+2.5),ulDuration+=h),c.showStatus("Mbps upload"),K=(window.performance.now()-R)/1E3,q("up"),c.mainGuageProgress(r),c.LiveSpeed(r),c.Graph(r,1),A.AvgSpeed(r,ulFinal,ulDuration),K>=ulDuration&&1==B&&(c.uploadResult(A.AvgSpeed(r,
ulFinal,ulDuration)),c.GuageProgresstoZero(r,"SendR"),c.showStatus("All done"),c.Symbol(2),l="busy",B=0));if("SendR"===l){h=document.createElement("div");h.innerHTML='<a xlink:href="https://openspeedtest.com?ref=Offline-Outro&Auto=5" style="cursor: pointer" target="_blank"></a>';var w=h.querySelector("a");c.oDoLiveSpeed.el.textContent=ba;var t=document.getElementById("oDoLiveSpeed");w.innerHTML=t.innerHTML;t.innerHTML=h.innerHTML;l="busy";clearInterval(a)}},100)}function v(){for(var a=0;a<dlThreads;a++)setTimeout(function(h){D(h)},
dlDelay*a,a)}function k(){for(var a=0;a<ulThreads;a++)setTimeout(function(h){x(h)},ulDelay*a,a)}function q(a){if("dl"===a){var h=1E3*Q;ca=0>=L?0:L-da;da=L;M+=ca;ea=S=h-S;S=h;T+=ea;h>1E3*Z+4E3&&0===fa&&(fa=1,M=T=0);0<M&&(r=G=M/T/125*upAdjust)}"up"===a&&(a=1E3*K,ha=0>=N?0:N-ia,ia=N,O+=ha,ja=U=a-U,U=a,V+=ja,a>1E3*aa+4E3&&0===ka&&(ka=1,O=V=0),0<O&&(r=G=O/V/125*upAdjust))}function D(a){var h=0;m[a]=new XMLHttpRequest;m[a].open("GET",comopenspeedtestcdn+"/downloading?n="+Math.random(),!0);m[a].onprogress=
function(w){if(1===B)return m[a].abort(),m[a]=null,m[a]=void 0,delete m[a],!1;"initDown"==l&&(l="Downloading");var t=0>=w.loaded?0:w.loaded-h;if(isNaN(t)||!isFinite(t)||0>t)return!1;L+=t;h=w.loaded};m[a].onload=function(){m[a].abort();m[a]=null;m[a]=void 0;delete m[a];D(a)};m[a].onerror=function(w){D(a)};m[a].responseType="arraybuffer";m[a].send()}function x(a){var h=0,w=comopenspeedtestuurl.serverList[Math.floor(Math.random()*comopenspeedtestuurl.serverList.length)];u[a]=new XMLHttpRequest;u[a].open("POST",
w.hostName+"?n="+Math.random(),!0);u[a].upload.onprogress=function(t){"initup"==l&&void 0===C&&(l="Uploading");if(K>=ulDuration)return u[a].abort(),u[a]=null,u[a]=void 0,delete u[a],!1;var C=0>=t.loaded?0:t.loaded-h;if(isNaN(C)||!isFinite(C)||0>C)return!1;N+=C;h=t.loaded};u[a].onload=function(){u[a].abort();u[a]=null;u[a]=void 0;delete u[a];x(a)};u[a].onerror=function(t){x(a)};u[a].setRequestHeader("Content-Type","application/octet-stream");u[a].send(sa)}function y(a){if(a<comopenspeedtesturl.serverList.length)W=
0,la(a,comopenspeedtesturl.serverList[a].hostName);else{a=Math.min.apply(Math,z);z.indexOf(a);var h=Math.min.apply(Math,ma);Infinity==a?(c.ConnectionError(),c.pingResults("Network Error")):(l="Download",c.LiveSpeed(a),c.pingResults(a),c.jitterResult(h))}}function la(a,h){m[a]=new XMLHttpRequest;I[a]=window.performance.now();m[a].open("HEAD",h+"?n="+Math.random(),!0);m[a].timeout=5E3;m[a].send();m[a].onload=function(){if(200===this.status){H[a]=window.performance.now()-I[a];var w=parseInt(H[a].toFixed(1));
if(W<=ta){l="Ping";z.push(w);ua.push(h);if(1<z.length){var t=Math.abs(z[z.length-1]-z[z.length-2]);c.LiveSpeed(w);c.pingResults(w);c.jitterResult(t);ma.push(t)}W++;la(a,h)}else y(a+1)}else y(a+1)};m[a].onerror=function(w){y(a+1)};m[a].ontimeout=function(w){y(a+1)}}var A=new E,c=new n;c.app();for(var va=new ArrayBuffer(1048576),X=[],na=0;na<ulDataSize;na++)X.push(va);var sa=X=new Blob(X,{type:"application/octet-stream"}),m=[],I=[],H=[],G,L=0,N=0,r=0,K,Q,P,R,B=0,J=0;if("undefined"!==typeof comopenspeedtestAuto){c.userInterface();
var F=Math.ceil(Math.abs(comopenspeedtestAuto));c.showStatus("Automatic test starts in...");c.LiveSpeed(F);var qa=setInterval(b,1E3);setTimeout(d,1E3*F)}c.settingsMob.el.addEventListener("click",g);c.settingsDesk.el.addEventListener("click",g);var ba="OpenSpeedTest\u2122",ra=c.text.el.href.length+ba.length;c.startButtonDesk.el.addEventListener("click",f);c.startButtonMob.el.addEventListener("click",f);var ca=0,da=0,M=0,ea=0,S=0,T=0,fa=0,Z,aa,ha=0,ia=0,O=0,ja=0,U=0,V=0,ka=0,u=[],W=0,z=[],ua=[],ma=
[],ta=2};oa.Start=function(){new wa}})(window.OpenSpeedTest=window.OpenSpeedTest||{});