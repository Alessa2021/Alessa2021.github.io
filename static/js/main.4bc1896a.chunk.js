(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,r){},15:function(e,a,r){},18:function(e,a,r){},20:function(e,a,r){},22:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),i=r(3),l=r.n(i),o=(r(13),r(15),r(1)),u={aniosap:[{dias:1461,array:[365,365,365,366]},{dias:1460,array:[365,365,365,365]},{dias:1451,array:[365,355,365,366]}],tipoanio:["Asume","Asimila","Desafia","Decide"],meses:[{nombre:"Enero",numero:1},{nombre:"Febrero",numero:2},{nombre:"Marzo",numero:3},{nombre:"Abril",numero:4},{nombre:"Mayo",numero:5},{nombre:"Junio",numero:6},{nombre:"Julio",numero:7},{nombre:"Agosto",numero:8},{nombre:"Septiembre",numero:9},{nombre:"Octubre",numero:10},{nombre:"Noviembre",numero:11},{nombre:"Diciembre",numero:12}],diasmeses:[{dias:365,array:[31,28,31,30,31,30,31,31,30,31,30,31]},{dias:366,array:[31,29,31,30,31,30,31,31,30,31,30,31]},{dias:355,array:[31,28,31,30,31,30,31,31,30,21,30,31]}],diasvueltas:[{dias:365,array:[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,13]},{dias:366,array:[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,14]},{dias:355,array:[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,6,16,16,16,16,13]}]};function c(e){return u.aniosap.find(function(a){return a.dias===e})}function s(e){return 1582===e?355:e<1582&&e%4===0?366:e<1582&&e%4!==0?365:e>1582&&e%4===0&&e%100!==0||e%400===0?366:365}function m(e,a,r){var n=[];1===a&&n.push(r[0]),2===a&&n.push(r[0],r[1]),3===a&&n.push(r[0],r[1],r[2]),n.push(e);return n.reduce(function(e,a){return e+a},0)}function d(e,a,r){var n=[],t=u.diasmeses.find(function(e){return e.dias===r});2===a&&(n=t.array.slice(0,-11)),3===a&&(n=t.array.slice(0,-10)),4===a&&(n=t.array.slice(0,-9)),5===a&&(n=t.array.slice(0,-8)),6===a&&(n=t.array.slice(0,-7)),7===a&&(n=t.array.slice(0,-6)),8===a&&(n=t.array.slice(0,-5)),9===a&&(n=t.array.slice(0,-4)),10===a&&(n=t.array.slice(0,-3)),11===a&&(n=t.array.slice(0,-2)),12===a&&(n=t.array.slice(0,-1)),n.push(e);return n.reduce(function(e,a){return e+a},0)}function f(e,a){return e-a}function h(e){return e%7===0?"viernes":e%7===1?"s\xe1bado":e%7===2?"domingo":e%7===3?"lunes":e%7===4?"martes":e%7===5?"mi\xe9rcoles":e%7===6?"jueves":void 0}function p(e){return e%4===0?"contexto":e%4===1?"l\xf3gica":e%4===2?"inhumano":e%4===3?"humano":void 0}function v(e,a){if(355!==a)return e<=352?p(e):function(e){return 353===e||366===e?"centro":354===e?"norte":355===e||356===e?"noroeste":357===e?"oeste":358===e||359===e?"suroeste":360===e?"sur":361===e||362===e?"sureste":363===e?"este":364===e||365===e?"noreste":void 0}(e);if(355===a){if(e<=277)return p(e);if(e>277&&e<=342){if(e%4===0)return"inhumano";if(e%4===1)return"humano";if(e%4===2)return"contexto";if(e%4===3)return"l\xf3gica"}if(343===e)return"centro";if(344===e)return"norte";if(345===e||346===e)return"noroeste";if(347===e)return"oeste";if(348===e||349===e)return"suroeste";if(350===e)return"sur";if(351===e||352===e)return"sureste";if(353===e)return"este";if(354===e||355===e)return"noreste"}}function E(e,a){if(e<23){if(a<=4)return"SO";if(a>4&&a<=8)return"NE";if(a>8&&a<=12)return"NO";if(a>12&&a<=16)return"SE"}return"AF"}function b(e,a,r,n){arguments.length>4&&void 0!==arguments[4]&&arguments[4];for(var t=function(e){return u.diasvueltas.find(function(a){return a.dias===e}).array}(r),i=n,l=[],o=1,c=0;c<23;c++)l.push({tipoanio:e,anio:a,vuelta:o,diasvuelta:t[c],diaSolInicial:i,diaSolFinal:i+t[c]-1}),i+=t[c],o++;return l}function y(){for(var e=[{aparato:0,dias:0,diasalinicio:0,diasTotales:0}],a=/425|450|475|525|550|575|625|650|675|725|750|775|825|850|875/,r=0,n=1,t=1;t<876;t++)a.test(t)?(e.push({aparato:t,dias:1460,diasalinicio:n,diasTotales:r+1460}),r+=1460,n+=1460):396===t?(e.push({aparato:t,dias:1451,diasalinicio:n,diasTotales:r+1451}),r+=1451,n+=1451):(e.push({aparato:t,dias:1461,diasalinicio:n,diasTotales:r+1461}),r+=1461,n+=1461);return e}function g(e,a,r,n){for(var t=1,i=n,l=[{dia:0,mes:0,anio:0,diasolar:0}],o=1;o<=a;o++)l.push({dia:t,vuelta:e,anio:r,diasolar:i}),t++,i++;return l}var S=function(e,a,r){var n=y(),t=function(e){switch(e%4){case 0:return"Decide";case 1:return"Asume";case 2:return"Asimila";case 3:return"Desaf\xeda"}}(r),i=function(e){return Math.ceil(e/4)}(r),l=function(e){var a=0;return e%4===0&&(a=3),e%4===1&&(a=0),e%4===2&&(a=1),e%4===3&&(a=2),a}(r),o=n.find(function(e){return e.aparato===i}),s=c(o.dias),p=s.array,S=s.array[l],A=o.diasalinicio,F=d(e,a,S),O=function(e,a,r){var n=[],t=u.diasmeses.find(function(e){return e.dias===r}),i=t.array[a-1]-e;return 1===a&&(n=t.array.slice(1)),2===a&&(n=t.array.slice(2)),3===a&&(n=t.array.slice(3)),4===a&&(n=t.array.slice(4)),5===a&&(n=t.array.slice(5)),6===a&&(n=t.array.slice(6)),7===a&&(n=t.array.slice(7)),8===a&&(n=t.array.slice(8)),9===a&&(n=t.array.slice(9)),10===a&&(n=t.array.slice(10)),11===a&&(n=t.array.slice(11)),12===a&&(n=t.array.slice(12)),n.push(i),n.reduce(function(e,a){return e+a},0)}(e,a,S),N=m(A,l,p),C=b(t,r,S,N),D=m(F,l,p),j=A+D-F-734793,w=function(e,a,r){return function(e,a,r){var n=[];return 0===a&&n.push(r[1],r[2],r[3]),1===a&&n.push(r[2],r[3]),2===a&&n.push(r[3]),n.push(e),n.reduce(function(e,a){return e+a},0)}(e,a,r)}(O,l,p),x=function(e,a,r,n){return d(n,r,a)+e-1}(N,S,a,e),I=C.find(function(e){return e.diaSolInicial<=x&&e.diaSolFinal>=x}),M=I.diaSolInicial,k=I.vuelta,T=g(k,I.diasvuelta,r,M).find(function(e){return e.diasolar===x}).dia,z=E(k,T),B=f(F,O),J=f(D,w),L=h(x),G=v(F,S);return 5===e&&10===a&&1582===r?[577738,396,1582,"Asimila",10,15,"viernes",278,77,201,643,-808,-165,18,16,"SE","contexto"]:6===e&&10===a&&1582===r?[577739,396,1582,"Asimila",10,16,"s\xe1bado",279,76,203,644,-807,-163,19,1,"SO","l\xf3gica"]:7===e&&10===a&&1582===r?[577740,396,1582,"Asimila",10,17,"domingo",280,75,205,645,-806,-161,19,2,"SO","inhumano"]:8===e&&10===a&&1582===r?[577741,396,1582,"Asimila",10,18,"lunes",281,74,207,646,-805,-159,19,3,"SO","humano"]:9===e&&10===a&&1582===r?[577742,396,1582,"Asimila",10,19,"martes",282,73,209,647,-804,-157,19,4,"SO","contexto"]:10===e&&10===a&&1582===r?[577743,396,1582,"Asimila",10,20,"mi\xe9rcoles",283,72,211,648,-803,-155,19,5,"NE","l\xf3gica"]:11===e&&10===a&&1582===r?[577744,396,1582,"Asimila",10,21,"jueves",284,71,213,649,-802,-153,19,6,"NE","inhumano"]:12===e&&10===a&&1582===r?[577745,396,1582,"Asimila",10,22,"viernes",285,70,215,650,-801,-151,19,7,"NE","humano"]:13===e&&10===a&&1582===r?[577746,396,1582,"Asimila",10,23,"s\xe1bado",286,69,217,651,-800,-149,19,8,"NE","contexto"]:14===e&&10===a&&1582===r?[577747,396,1582,"Asimila",10,24,"domingo",287,68,219,652,-799,-147,19,9,"NO","l\xf3gica"]:15===e&&10===a&&1582===r?[577748,396,1582,"Asimila",10,25,"lunes",288,67,221,653,-798,-145,19,10,"NO","inhumano"]:16===e&&10===a&&1582===r?[577749,396,1582,"Asimila",10,26,"martes",289,66,223,654,-797,-143,19,11,"NO","humano"]:17===e&&10===a&&1582===r?[577750,396,1582,"Asimila",10,27,"mi\xe9rcoles",290,65,225,655,-796,-141,19,12,"NO","contexto"]:18===e&&10===a&&1582===r?[577751,396,1582,"Asimila",10,28,"jueves",291,64,227,656,-795,-139,19,13,"SE","l\xf3gica"]:19===e&&10===a&&1582===r?[577752,396,1582,"Asimila",10,29,"viernes",292,63,229,657,-794,-137,19,14,"SE","inhumano"]:20===e&&10===a&&1582===r?[577753,396,1582,"Asimila",10,30,"s\xe1bado",293,62,231,658,-793,-135,19,15,"SE","humano"]:21===e&&10===a&&1582===r?[577754,396,1582,"Asimila",10,31,"domingo",294,61,233,659,-792,-133,19,16,"SE","contento"]:[x,r,F,j,i,t,a,e,L,O,B,D,w,J,k,T,z,G]};function A(e,a,r,n,t){for(var i=function(e){return u.diasmeses.find(function(a){return a.dias===e}).array}(r),l=n,o=[],c=1,s=0;s<12;s++)o.push({tipoanio:e,anio:a,mes:c,diasMes:i[s],diaSolInicial:l,diaSolFinal:l+i[s]-1}),l+=i[s],c++;return o}var F=function(e){var a=y(),r=h(e),n=function(e,a){return a.find(function(a){return a.diasalinicio<=e&&a.diasTotales>=e}).aparato}(e,a),t=a[n].diasalinicio,i=a[n].diasTotales,l=function(e,a,r,n){for(var t=c(a),i=["Asume","Asimila","Desafia","Decide"],l=4*e-3,o=r,u=[],s=0;s<4;s++)u.push({tipoanio:i[s],anio:l,diasAnio:t.array[s],diaSolInicial:o,diaSolFinal:o+t.array[s]-1}),l+=1,o+=t.array[s];return u}(n,a[n].dias,t).filter(function(a){return a.diaSolInicial<=e&&a.diaSolFinal>=e})[0],o=l.tipoanio,u=l.anio,s=l.diasAnio,m=l.diaSolInicial,d=l.diaSolFinal,f=A(o,u,s,m),p=d-734793;console.log(p);var S=f.find(function(a){return a.diaSolInicial<=e&&a.diaSolFinal>=e}),F=function(e,a,r,n){for(var t=1,i=n,l=[{dia:0,mes:0,anio:0,diasolar:0}],o=1;o<=a;o++)l.push({dia:t,mes:e,anio:r,diasolar:i}),t++,i++;return l}(S.mes,S.diasMes,u,S.diaSolInicial).find(function(a){return a.diasolar===e}),O=F.dia,N=F.mes,C=F.anio,D=F.diasolar,j=b(o,C,s,m).find(function(e){return e.diaSolInicial<=D&&e.diaSolFinal>=D}),w=j.diaSolInicial,x=j.vuelta,I=g(x,j.diasvuelta,C,w).find(function(e){return e.diasolar===D}).dia,M=E(x,I),k=e-t+1,T=i-e,z=k-T,B=e-m+1,J=d-e,L=B-J,G=v(B,s);return[D,C,B,p,n,o,N,O,r,J,L,k,T,z,x,I,M,G]},O=(r(18),r(20),function(e){var a=e.onSubmit,r=Object(n.useState)(Number((new Date).getFullYear())),i=Object(o.a)(r,2),l=i[0],c=i[1],m=Object(n.useState)(Number((new Date).getMonth()+1)),d=Object(o.a)(m,2),f=d[0],h=d[1],p=Object(n.useState)(Number((new Date).getDate())),v=Object(o.a)(p,2),E=v[0],b=v[1],y=Object(n.useState)(Number(365)),g=Object(o.a)(y,2),S=g[0],A=g[1],F=Object(n.useState)(D(S,f)),O=Object(o.a)(F,2),N=O[0],C=O[1];function D(e,a){for(var r=u.diasmeses.find(function(a){return a.dias===e}).array[a-1],n=[],t=1;t<=r;t++)n.push({index:t,mostrar:t});return 355===e&&10===a&&(n[4].mostrar=15,n[5].mostrar=16,n[6].mostrar=17,n[7].mostrar=18,n[8].mostrar=19,n[9].mostrar=20,n[10].mostrar=21,n[11].mostrar=22,n[12].mostrar=23,n[13].mostrar=24,n[14].mostrar=25,n[15].mostrar=26,n[16].mostrar=27,n[17].mostrar=28,n[18].mostrar=29,n[19].mostrar=30,n[20].mostrar=31),n}var j=u.meses;return t.a.createElement("form",{onSubmit:a},t.a.createElement("div",null,t.a.createElement("p",null,E,"  ",f,"  ",l),t.a.createElement("label",{htmlFor:"year"},"A\xf1o"),t.a.createElement("input",{type:"text",name:"year",onBlur:function(e){return function(e){var a=Number(e.target.value);c(a);var r=s(a);A(r);var n=D(r,f);C(n)}(e)},autoComplete:"off",placeholder:"new year"}),t.a.createElement("label",{htmlFor:"month"},"Mes"),t.a.createElement("select",{name:"month",onChange:function(e){return function(e){var a=Number(e.target.value);h(a);var r=D(S,a);C(r)}(e)}},t.a.createElement("option",null,"Mes:"),j.map(function(e){return t.a.createElement("option",{key:e.numero,value:e.numero},e.nombre)})),t.a.createElement("label",{htmlFor:"date"},"D\xeda"),t.a.createElement("select",{name:"date",onChange:function(e){return function(e){var a=Number(e.target.value);b(a)}(e)}},t.a.createElement("option",null,"Dia:"),N.map(function(e){return t.a.createElement("option",{key:e.index,value:e.index},e.mostrar)})),t.a.createElement("button",{type:"submit"},"Actualizar")))}),N=function(e){for(var a=e.ds,r=e.anio,n=e.fpos,i=e.cte,l=[r],o=[n],u=[i],c=n,m=i,d=r-1;d>2012;d--){var f=s(d);l.push(d),o.push(c+f),u.push(m-f),c+=f,m-=f}var h=a-735888;l.push(2012),o.push(h),u.push(1096);for(var p=[],v=0;v<l.length;v++)p.push({anio:l[v],valor:o[v],constante:u[v]});for(var E=0,b=0;b<o.length;b++)E+=o[b];return 735887===a?t.a.createElement("h3",null,"Falta 1 d\xeda para el inicio del calendario LGC"):a<735888?t.a.createElement("h3",null,"Faltan ",735888-a," d\xedas para el inicio del calendario LGC"):(a>735888&&a<=734870&&p.shift(),t.a.createElement(t.a.Fragment,null,t.a.createElement("h1",null,"cal lgc"),p.map(function(e){return t.a.createElement("h3",{key:e.anio},e.anio,": ",e.valor," (",e.constante,")")}),t.a.createElement("h3",null,"Total: ",E)))},C=function(e){var a=e.ds;if(a<734792)return t.a.createElement("h3",null,"Cuarentena: - ");var r=a-734792,n=Math.ceil(r/39),i=r%39,l="";0!==i&&i<4&&(l="ladrillo 1"),i>3&&i<7&&(l="ladrillo 2"),i>6&&i<10&&(l="ladrillo 3"),i>9&&i<13&&(l="ladrillo 4"),i>12&&i<16&&(l="ladrillo 5"),i>15&&i<19&&(l="ladrillo 6"),i>18&&i<22&&(l="ladrillo 7"),i>21&&i<25&&(l="ladrillo 8"),i>24&&i<28&&(l="ladrillo 9"),i>27&&i<31&&(l="ladrillo 10"),i>30&&i<34&&(l="ladrillo 11"),i>33&&i<37&&(l="ladrillo 12"),(0===i||i>36)&&(l="ladrillo 13");var o="";return[1,4,7,10,13,16,19,22,25,28,31,34,37].includes(i)&&(o="d\xeda 1 del "),[2,5,8,11,14,17,20,23,26,29,32,35,38].includes(i)&&(o="d\xeda 2 del "),[3,6,9,12,15,18,21,24,27,30,33,36,0].includes(i)&&(o="d\xeda 3 del "),t.a.createElement(t.a.Fragment,null,t.a.createElement("h3",null,"Cuarentena: ",n," (",o,l,") "))},D=function(e){var a=e.fecha,r=a.getDate(),i=a.getMonth()+1,l=a.getFullYear(),u=Object(n.useState)(S(r,i,l)),c=Object(o.a)(u,2),s=c[0],m=c[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),h=f[0],p=f[1],v=Object(o.a)(s,4),E=v[0],b=v[1],y=v[2],g=v[3];console.log(s);return t.a.createElement(t.a.Fragment,null,t.a.createElement("h3",null,s[8]," ",s[7],"/ ",s[6],"/ ",s[1],"  | D\xeda Solar: ",s[0]),t.a.createElement("button",{onClick:function(){return m(F(s[0]-1))}},"Anterior"),t.a.createElement("button",{onClick:function(){return m(F(s[0]+1))}},"Siguiente"),t.a.createElement("br",null),t.a.createElement("button",{onClick:function(){return m(F(s[0]-h))}},"-"),t.a.createElement("input",{type:"text",id:"desplazar",onBlur:function(e){return function(e){e.preventDefault(),p(Number(e.target.value))}(e)},autoComplete:"off",placeholder:"desplazar dias"}),t.a.createElement("button",{onClick:function(){return m(F(s[0]+h))}},"+"),t.a.createElement("br",null),t.a.createElement("button",{onClick:function(){return m(S(r,i,l))}},"Volver a fecha Actual"),t.a.createElement("hr",null),t.a.createElement("h3",null,"Frec. Anual: ",s[2]," / -",s[9]),t.a.createElement("h3",null,"Frec. Anulaci\xf3n anual: ",s[10]),t.a.createElement("hr",null),t.a.createElement("h3",null,"A\xf1o ",s[5]," Aparato ",s[4]),t.a.createElement("h3",null,"Frec. Aparato: ",s[11]," / -",s[12]),t.a.createElement("h3",null,"Frec. Anulaci\xf3n aparato: ",s[13]),t.a.createElement("hr",null),t.a.createElement("h3",null,"Fecha Calendaria: dia ",s[15]," / vuelta ",s[14]),t.a.createElement("h3",null,"Cardinalidad: ",s[16]," Posici\xf3n: ",s[17]),t.a.createElement("hr",null),t.a.createElement("h3",null,"D\xeda de CG: ",s[0]-734792),t.a.createElement(C,{ds:s[0]}),t.a.createElement("hr",null),t.a.createElement("h3",null,"Cambiar la Fecha del Calendario:"),t.a.createElement(O,{onSubmit:function(e){e.preventDefault();var a=Number(e.target.year.value),r=Number(e.target.month.value),n=Number(e.target.date.value),t=S(n,r,a);m(t),e.target.reset()}}),t.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=Number(e.target.ds.value),r=F(a);m(r),e.target.reset()}},t.a.createElement("label",{htmlFor:"ds"},"D\xeda solar"),t.a.createElement("input",{type:"text",name:"ds",autoComplete:"off",placeholder:"new solar day"}),t.a.createElement("button",{type:"submit"},"Actualizar")),t.a.createElement(N,{ds:E,anio:b,fpos:y,cte:g}))},j=function(){var e=new Date;return t.a.createElement(t.a.Fragment,null,t.a.createElement(D,{fecha:e}))};var w=function(){return t.a.createElement("div",{className:"App"},t.a.createElement("div",{className:"contenedor-principal"},t.a.createElement("h1",null,"Fecha Actual del Calendario"),t.a.createElement(j,null)))},x=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,23)).then(function(a){var r=a.getCLS,n=a.getFID,t=a.getFCP,i=a.getLCP,l=a.getTTFB;r(e),n(e),t(e),i(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(w,null))),x()},4:function(e,a,r){e.exports=r(22)}},[[4,3,2]]]);
//# sourceMappingURL=main.4bc1896a.chunk.js.map