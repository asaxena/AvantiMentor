// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;

jQuery.support = jQuery.support || {}; // D6- only.

Drupal.wysiwyg = Drupal.wysiwyg || { 'instances': {} };

Drupal.wysiwyg.editor = Drupal.wysiwyg.editor || { 'init': {}, 'attach': {}, 'detach': {}, 'instance': {} };

Drupal.wysiwyg.plugins = Drupal.wysiwyg.plugins || {};

(function ($) {
  // Determine support for queryCommandEnabled().
  // An exception should be thrown for non-existing commands.
  // Safari and Chrome (WebKit based) return -1 instead.
  try {
    document.queryCommandEnabled('__wysiwygTestCommand');
    $.support.queryCommandEnabled = false;
  }
  catch (error) {
    $.support.queryCommandEnabled = true;
  }
})(jQuery);
;
// $Id: tabledrag.js,v 1.13.2.5 2009/06/18 12:24:24 goba Exp $

/**
 * Drag and drop table rows with field manipulation.
 *
 * Using the drupal_add_tabledrag() function, any table with weights or parent
 * relationships may be made into draggable tables. Columns containing a field
 * may optionally be hidden, providing a better user experience.
 *
 * Created tableDrag instances may be modified with custom behaviors by
 * overriding the .onDrag, .onDrop, .row.onSwap, and .row.onIndent methods.
 * See blocks.js for an example of adding additional functionality to tableDrag.
 */
Drupal.behaviors.tableDrag = function(context) {
  for (var base in Drupal.settings.tableDrag) {
    if (!$('#' + base + '.tabledrag-processed', context).size()) {
      var tableSettings = Drupal.settings.tableDrag[base];

      $('#' + base).filter(':not(.tabledrag-processed)').each(function() {
        // Create the new tableDrag instance. Save in the Drupal variable
        // to allow other scripts access to the object.
        Drupal.tableDrag[base] = new Drupal.tableDrag(this, tableSettings);
      });

      $('#' + base).addClass('tabledrag-processed');
    }
  }
};

/**
 * Constructor for the tableDrag object. Provides table and field manipulation.
 *
 * @param table
 *   DOM object for the table to be made draggable.
 * @param tableSettings
 *   Settings for the table added via drupal_add_dragtable().
 */
Drupal.tableDrag = function(table, tableSettings) {
  var self = this;

  // Required object variables.
  this.table = table;
  this.tableSettings = tableSettings;
  this.dragObject = null; // Used to hold information about a current drag operation.
  this.rowObject = null; // Provides operations for row manipulation.
  this.oldRowElement = null; // Remember the previous element.
  this.oldY = 0; // Used to determine up or down direction from last mouse move.
  this.changed = false; // Whether anything in the entire table has changed.
  this.maxDepth = 0; // Maximum amount of allowed parenting.
  this.rtl = $(this.table).css('direction') == 'rtl' ? -1 : 1; // Direction of the table.

  // Configure the scroll settings.
  this.scrollSettings = { amount: 4, interval: 50, trigger: 70 };
  this.scrollInterval = null;
  this.scrollY = 0;
  this.windowHeight = 0;

  // Check this table's settings to see if there are parent relationships in
  // this table. For efficiency, large sections of code can be skipped if we
  // don't need to track horizontal movement and indentations.
  this.indentEnabled = false;
  for (group in tableSettings) {
    for (n in tableSettings[group]) {
      if (tableSettings[group][n]['relationship'] == 'parent') {
        this.indentEnabled = true;
      }
      if (tableSettings[group][n]['limit'] > 0) {
        this.maxDepth = tableSettings[group][n]['limit'];
      }
    }
  }
  if (this.indentEnabled) {
    this.indentCount = 1; // Total width of indents, set in makeDraggable.
    // Find the width of indentations to measure mouse movements against.
    // Because the table doesn't need to start with any indentations, we
    // manually append 2 indentations in the first draggable row, measure
    // the offset, then remove.
    var indent = Drupal.theme('tableDragIndentation');
    // Match immediate children of the parent element to allow nesting.
    var testCell = $('> tbody > tr.draggable:first td:first, > tr.draggable:first td:first', table).prepend(indent).prepend(indent);
    this.indentAmount = $('.indentation', testCell).get(1).offsetLeft - $('.indentation', testCell).get(0).offsetLeft;
    $('.indentation', testCell).slice(0, 2).remove();
  }

  // Make each applicable row draggable.
  // Match immediate children of the parent element to allow nesting.
  $('> tr.draggable, > tbody > tr.draggable', table).each(function() { self.makeDraggable(this); });

  // Hide columns containing affected form elements.
  this.hideColumns();

  // Add mouse bindings to the document. The self variable is passed along
  // as event handlers do not have direct access to the tableDrag object.
  $(document).bind('mousemove', function(event) { return self.dragRow(event, self); });
  $(document).bind('mouseup', function(event) { return self.dropRow(event, self); });
};

/**
 * Hide the columns containing form elements according to the settings for
 * this tableDrag instance.
 */
Drupal.tableDrag.prototype.hideColumns = function(){
  for (var group in this.tableSettings) {
    // Find the first field in this group.
    for (var d in this.tableSettings[group]) {
      var field = $('.' + this.tableSettings[group][d]['target'] + ':first', this.table);
      if (field.size() && this.tableSettings[group][d]['hidden']) {
        var hidden = this.tableSettings[group][d]['hidden'];
        var cell = field.parents('td:first');
        break;
      }
    }

    // Hide the column containing this field.
    if (hidden && cell[0] && cell.css('display') != 'none') {
      // Add 1 to our indexes. The nth-child selector is 1 based, not 0 based.
      // Match immediate children of the parent element to allow nesting.
      var columnIndex = $('> td', cell.parent()).index(cell.get(0)) + 1;
      var headerIndex = $('> td:not(:hidden)', cell.parent()).index(cell.get(0)) + 1;
      $('> thead > tr, > tbody > tr, > tr', this.table).each(function(){
        var row = $(this);
        var parentTag = row.parent().get(0).tagName.toLowerCase();
        var index = (parentTag == 'thead') ? headerIndex : columnIndex;

        // Adjust the index to take into account colspans.
        row.children().each(function(n) {
          if (n < index) {
            index -= (this.colSpan && this.colSpan > 1) ? this.colSpan - 1 : 0;
          }
        });
        if (index > 0) {
          cell = row.children(':nth-child(' + index + ')');
          if (cell[0].colSpan > 1) {
            // If this cell has a colspan, simply reduce it.
            cell[0].colSpan = cell[0].colSpan - 1;
          }
          else {
            // Hide table body cells, but remove table header cells entirely
            // (Safari doesn't hide properly).
            parentTag == 'thead' ? cell.remove() : cell.css('display', 'none');
          }
        }
      });
    }
  }
};

/**
 * Find the target used within a particular row and group.
 */
Drupal.tableDrag.prototype.rowSettings = function(group, row) {
  var field = $('.' + group, row);
  for (delta in this.tableSettings[group]) {
    var targetClass = this.tableSettings[group][delta]['target'];
    if (field.is('.' + targetClass)) {
      // Return a copy of the row settings.
      var rowSettings = new Object();
      for (var n in this.tableSettings[group][delta]) {
        rowSettings[n] = this.tableSettings[group][delta][n];
      }
      return rowSettings;
    }
  }
};

/**
 * Take an item and add event handlers to make it become draggable.
 */
Drupal.tableDrag.prototype.makeDraggable = function(item) {
  var self = this;

  // Create the handle.
  var handle = $('<a href="#" class="tabledrag-handle"><div class="handle">&nbsp;</div></a>').attr('title', Drupal.t('Drag to re-order'));
  // Insert the handle after indentations (if any).
  if ($('td:first .indentation:last', item).after(handle).size()) {
    // Update the total width of indentation in this entire table.
    self.indentCount = Math.max($('.indentation', item).size(), self.indentCount);
  }
  else {
    $('td:first', item).prepend(handle);
  }

  // Add hover action for the handle.
  handle.hover(function() {
    self.dragObject == null ? $(this).addClass('tabledrag-handle-hover') : null;
  }, function() {
    self.dragObject == null ? $(this).removeClass('tabledrag-handle-hover') : null;
  });

  // Add the mousedown action for the handle.
  handle.mousedown(function(event) {
    // Create a new dragObject recording the event information.
    self.dragObject = new Object();
    self.dragObject.initMouseOffset = self.getMouseOffset(item, event);
    self.dragObject.initMouseCoords = self.mouseCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentMousePos = self.dragObject.initMouseCoords;
    }

    // If there's a lingering row object from the keyboard, remove its focus.
    if (self.rowObject) {
      $('a.tabledrag-handle', self.rowObject.element).blur();
    }

    // Create a new rowObject for manipulation of this row.
    self.rowObject = new self.row(item, 'mouse', self.indentEnabled, self.maxDepth, true);

    // Save the position of the table.
    self.table.topY = self.getPosition(self.table).y;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;

    // Add classes to the handle and row.
    $(this).addClass('tabledrag-handle-hover');
    $(item).addClass('drag');

    // Set the document to use the move cursor during drag.
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'none');
    }

    // Hack for Konqueror, prevent the blur handler from firing.
    // Konqueror always gives links focus, even after returning false on mousedown.
    self.safeBlur = false;

    // Call optional placeholder function.
    self.onDrag();
    return false;
  });

  // Prevent the anchor tag from jumping us to the top of the page.
  handle.click(function() {
    return false;
  });

  // Similar to the hover event, add a class when the handle is focused.
  handle.focus(function() {
    $(this).addClass('tabledrag-handle-hover');
    self.safeBlur = true;
  });

  // Remove the handle class on blur and fire the same function as a mouseup.
  handle.blur(function(event) {
    $(this).removeClass('tabledrag-handle-hover');
    if (self.rowObject && self.safeBlur) {
      self.dropRow(event, self);
    }
  });

  // Add arrow-key support to the handle.
  handle.keydown(function(event) {
    // If a rowObject doesn't yet exist and this isn't the tab key.
    if (event.keyCode != 9 && !self.rowObject) {
      self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
    }

    var keyChange = false;
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 63234: // Safari left arrow.
        keyChange = true;
        self.rowObject.indent(-1 * self.rtl);
        break;
      case 38: // Up arrow.
      case 63232: // Safari up arrow.
        var previousRow = $(self.rowObject.element).prev('tr').get(0);
        while (previousRow && $(previousRow).is(':hidden')) {
          previousRow = $(previousRow).prev('tr').get(0);
        }
        if (previousRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'up';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the previous top-level row..
            var groupHeight = 0;
            while (previousRow && $('.indentation', previousRow).size()) {
              previousRow = $(previousRow).prev('tr').get(0);
              groupHeight += $(previousRow).is(':hidden') ? 0 : previousRow.offsetHeight;
            }
            if (previousRow) {
              self.rowObject.swap('before', previousRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, -groupHeight);
            }
          }
          else if (self.table.tBodies[0].rows[0] != previousRow || $(previousRow).is('.draggable')) {
            // Swap with the previous row (unless previous row is the first one
            // and undraggable).
            self.rowObject.swap('before', previousRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, -parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
      case 39: // Right arrow.
      case 63235: // Safari right arrow.
        keyChange = true;
        self.rowObject.indent(1 * self.rtl);
        break;
      case 40: // Down arrow.
      case 63233: // Safari down arrow.
        var nextRow = $(self.rowObject.group).filter(':last').next('tr').get(0);
        while (nextRow && $(nextRow).is(':hidden')) {
          nextRow = $(nextRow).next('tr').get(0);
        }
        if (nextRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'down';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the next group (necessarily a top-level one).
            var groupHeight = 0;
            nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
            if (nextGroup) {
              $(nextGroup.group).each(function () {groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight});
              nextGroupRow = $(nextGroup.group).filter(':last').get(0);
              self.rowObject.swap('after', nextGroupRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, parseInt(groupHeight));
            }
          }
          else {
            // Swap with the next row.
            self.rowObject.swap('after', nextRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
    }

    if (self.rowObject && self.rowObject.changed == true) {
      $(item).addClass('drag');
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      self.oldRowElement = item;
      self.restripeTable();
      self.onDrag();
    }

    // Returning false if we have an arrow key to prevent scrolling.
    if (keyChange) {
      return false;
    }
  });

  // Compatibility addition, return false on keypress to prevent unwanted scrolling.
  // IE and Safari will supress scrolling on keydown, but all other browsers
  // need to return false on keypress. http://www.quirksmode.org/js/keys.html
  handle.keypress(function(event) {
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return false;
    }
  });
};

/**
 * Mousemove event handler, bound to document.
 */
Drupal.tableDrag.prototype.dragRow = function(event, self) {
  if (self.dragObject) {
    self.currentMouseCoords = self.mouseCoords(event);

    var y = self.currentMouseCoords.y - self.dragObject.initMouseOffset.y;
    var x = self.currentMouseCoords.x - self.dragObject.initMouseOffset.x;

    // Check for row swapping and vertical scrolling.
    if (y != self.oldY) {
      self.rowObject.direction = y > self.oldY ? 'down' : 'up';
      self.oldY = y; // Update the old value.

      // Check if the window should be scrolled (and how fast).
      var scrollAmount = self.checkScroll(self.currentMouseCoords.y);
      // Stop any current scrolling.
      clearInterval(self.scrollInterval);
      // Continue scrolling if the mouse has moved in the scroll direction.
      if (scrollAmount > 0 && self.rowObject.direction == 'down' || scrollAmount < 0 && self.rowObject.direction == 'up') {
        self.setScroll(scrollAmount);
      }

      // If we have a valid target, perform the swap and restripe the table.
      var currentRow = self.findDropTargetRow(x, y);
      if (currentRow) {
        if (self.rowObject.direction == 'down') {
          self.rowObject.swap('after', currentRow, self);
        }
        else {
          self.rowObject.swap('before', currentRow, self);
        }
        self.restripeTable();
      }
    }

    // Similar to row swapping, handle indentations.
    if (self.indentEnabled) {
      var xDiff = self.currentMouseCoords.x - self.dragObject.indentMousePos.x;
      // Set the number of indentations the mouse has been moved left or right.
      var indentDiff = Math.round(xDiff / self.indentAmount * self.rtl);
      // Indent the row with our estimated diff, which may be further
      // restricted according to the rows around this row.
      var indentChange = self.rowObject.indent(indentDiff);
      // Update table and mouse indentations.
      self.dragObject.indentMousePos.x += self.indentAmount * indentChange * self.rtl;
      self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
    }

    return false;
  }
};

/**
 * Mouseup event handler, bound to document.
 * Blur event handler, bound to drag handle for keyboard support.
 */
Drupal.tableDrag.prototype.dropRow = function(event, self) {
  // Drop row functionality shared between mouseup and blur events.
  if (self.rowObject != null) {
    var droppedRow = self.rowObject.element;
    // The row is already in the right place so we just release it.
    if (self.rowObject.changed == true) {
      // Update the fields in the dropped row.
      self.updateFields(droppedRow);

      // If a setting exists for affecting the entire group, update all the
      // fields in the entire dragged group.
      for (var group in self.tableSettings) {
        var rowSettings = self.rowSettings(group, droppedRow);
        if (rowSettings.relationship == 'group') {
          for (n in self.rowObject.children) {
            self.updateField(self.rowObject.children[n], group);
          }
        }
      }

      self.rowObject.markChanged();
      if (self.changed == false) {
        $(Drupal.theme('tableDragChangedWarning')).insertAfter(self.table).hide().fadeIn('slow');
        self.changed = true;
      }
    }

    if (self.indentEnabled) {
      self.rowObject.removeIndentClasses();
    }
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    $(droppedRow).removeClass('drag').addClass('drag-previous');
    self.oldRowElement = droppedRow;
    self.onDrop();
    self.rowObject = null;
  }

  // Functionality specific only to mouseup event.
  if (self.dragObject != null) {
    $('.tabledrag-handle', droppedRow).removeClass('tabledrag-handle-hover');

    self.dragObject = null;
    $('body').removeClass('drag');
    clearInterval(self.scrollInterval);

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'block');
    }
  }
};

/**
 * Get the position of an element by adding up parent offsets in the DOM tree.
 */
Drupal.tableDrag.prototype.getPosition = function(element){
  var left = 0;
  var top  = 0;
  // Because Safari doesn't report offsetHeight on table rows, but does on table
  // cells, grab the firstChild of the row and use that instead.
  // http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari
  if (element.offsetHeight == 0) {
    element = element.firstChild; // a table cell
  }

  while (element.offsetParent){
    left   += element.offsetLeft;
    top    += element.offsetTop;
    element = element.offsetParent;
  }

  left += element.offsetLeft;
  top  += element.offsetTop;

  return {x:left, y:top};
};

/**
 * Get the mouse coordinates from the event (allowing for browser differences).
 */
Drupal.tableDrag.prototype.mouseCoords = function(event){
  if (event.pageX || event.pageY) {
    return {x:event.pageX, y:event.pageY};
  }
  return {
    x:event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:event.clientY + document.body.scrollTop  - document.body.clientTop
  };
};

/**
 * Given a target element and a mouse event, get the mouse offset from that
 * element. To do this we need the element's position and the mouse position.
 */
Drupal.tableDrag.prototype.getMouseOffset = function(target, event) {
  var docPos   = this.getPosition(target);
  var mousePos = this.mouseCoords(event);
  return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
};

/**
 * Find the row the mouse is currently over. This row is then taken and swapped
 * with the one being dragged.
 *
 * @param x
 *   The x coordinate of the mouse on the page (not the screen).
 * @param y
 *   The y coordinate of the mouse on the page (not the screen).
 */
Drupal.tableDrag.prototype.findDropTargetRow = function(x, y) {
  var rows = this.table.tBodies[0].rows;
  for (var n=0; n<rows.length; n++) {
    var row = rows[n];
    var indentDiff = 0;
    // Safari fix see Drupal.tableDrag.prototype.getPosition()
    if (row.offsetHeight == 0) {
      var rowY = this.getPosition(row.firstChild).y;
      var rowHeight = parseInt(row.firstChild.offsetHeight)/2;
    }
    // Other browsers.
    else {
      var rowY = this.getPosition(row).y;
      var rowHeight = parseInt(row.offsetHeight)/2;
    }

    // Because we always insert before, we need to offset the height a bit.
    if ((y > (rowY - rowHeight)) && (y < (rowY + rowHeight))) {
      if (this.indentEnabled) {
        // Check that this row is not a child of the row being dragged.
        for (n in this.rowObject.group) {
          if (this.rowObject.group[n] == row) {
            return null;
          }
        }
      }
      // Check that swapping with this row is allowed.
      if (!this.rowObject.isValidSwap(row)) {
        return null;
      }

      // We may have found the row the mouse just passed over, but it doesn't
      // take into account hidden rows. Skip backwards until we find a draggable
      // row.
      while ($(row).is(':hidden') && $(row).prev('tr').is(':hidden')) {
        row = $(row).prev('tr').get(0);
      }
      return row;
    }
  }
  return null;
};

/**
 * After the row is dropped, update the table fields according to the settings
 * set for this table.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 */
Drupal.tableDrag.prototype.updateFields = function(changedRow) {
  for (var group in this.tableSettings) {
    // Each group may have a different setting for relationship, so we find
    // the source rows for each seperately.
    this.updateField(changedRow, group);
  }
};

/**
 * After the row is dropped, update a single table field according to specific
 * settings.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 * @param group
 *   The settings group on which field updates will occur.
 */
Drupal.tableDrag.prototype.updateField = function(changedRow, group) {
  var rowSettings = this.rowSettings(group, changedRow);

  // Set the row as it's own target.
  if (rowSettings.relationship == 'self' || rowSettings.relationship == 'group') {
    var sourceRow = changedRow;
  }
  // Siblings are easy, check previous and next rows.
  else if (rowSettings.relationship == 'sibling') {
    var previousRow = $(changedRow).prev('tr').get(0);
    var nextRow = $(changedRow).next('tr').get(0);
    var sourceRow = changedRow;
    if ($(previousRow).is('.draggable') && $('.' + group, previousRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', previousRow).size() == $('.indentations', changedRow)) {
          sourceRow = previousRow;
        }
      }
      else {
        sourceRow = previousRow;
      }
    }
    else if ($(nextRow).is('.draggable') && $('.' + group, nextRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', nextRow).size() == $('.indentations', changedRow)) {
          sourceRow = nextRow;
        }
      }
      else {
        sourceRow = nextRow;
      }
    }
  }
  // Parents, look up the tree until we find a field not in this group.
  // Go up as many parents as indentations in the changed row.
  else if (rowSettings.relationship == 'parent') {
    var previousRow = $(changedRow).prev('tr');
    while (previousRow.length && $('.indentation', previousRow).length >= this.rowObject.indents) {
      previousRow = previousRow.prev('tr');
    }
    // If we found a row.
    if (previousRow.length) {
      sourceRow = previousRow[0];
    }
    // Otherwise we went all the way to the left of the table without finding
    // a parent, meaning this item has been placed at the root level.
    else {
      // Use the first row in the table as source, because it's garanteed to
      // be at the root level. Find the first item, then compare this row
      // against it as a sibling.
      sourceRow = $('tr.draggable:first').get(0);
      if (sourceRow == this.rowObject.element) {
        sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
      }
      var useSibling = true;
    }
  }

  // Because we may have moved the row from one category to another,
  // take a look at our sibling and borrow its sources and targets.
  this.copyDragClasses(sourceRow, changedRow, group);
  rowSettings = this.rowSettings(group, changedRow);

  // In the case that we're looking for a parent, but the row is at the top
  // of the tree, copy our sibling's values.
  if (useSibling) {
    rowSettings.relationship = 'sibling';
    rowSettings.source = rowSettings.target;
  }

  var targetClass = '.' + rowSettings.target;
  var targetElement = $(targetClass, changedRow).get(0);

  // Check if a target element exists in this row.
  if (targetElement) {
    var sourceClass = '.' + rowSettings.source;
    var sourceElement = $(sourceClass, sourceRow).get(0);
    switch (rowSettings.action) {
      case 'depth':
        // Get the depth of the target row.
        targetElement.value = $('.indentation', $(sourceElement).parents('tr:first')).size();
        break;
      case 'match':
        // Update the value.
        targetElement.value = sourceElement.value;
        break;
      case 'order':
        var siblings = this.rowObject.findSiblings(rowSettings);
        if ($(targetElement).is('select')) {
          // Get a list of acceptable values.
          var values = new Array();
          $('option', targetElement).each(function() {
            values.push(this.value);
          });
          var maxVal = values[values.length - 1];
          // Populate the values in the siblings.
          $(targetClass, siblings).each(function() {
            // If there are more items than possible values, assign the maximum value to the row. 
            if (values.length > 0) {
              this.value = values.shift();
            }
            else {
              this.value = maxVal;
            }
          });
        }
        else {
          // Assume a numeric input field.
          var weight = parseInt($(targetClass, siblings[0]).val()) || 0;
          $(targetClass, siblings).each(function() {
            this.value = weight;
            weight++;
          });
        }
        break;
    }
  }
};

/**
 * Copy all special tableDrag classes from one row's form elements to a
 * different one, removing any special classes that the destination row
 * may have had.
 */
Drupal.tableDrag.prototype.copyDragClasses = function(sourceRow, targetRow, group) {
  var sourceElement = $('.' + group, sourceRow);
  var targetElement = $('.' + group, targetRow);
  if (sourceElement.length && targetElement.length) {
    targetElement[0].className = sourceElement[0].className;
  }
};

Drupal.tableDrag.prototype.checkScroll = function(cursorY) {
  var de  = document.documentElement;
  var b  = document.body;

  var windowHeight = this.windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth != 0 ? de.clientHeight : b.offsetHeight);
  var scrollY = this.scrollY = (document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY));
  var trigger = this.scrollSettings.trigger;
  var delta = 0;

  // Return a scroll speed relative to the edge of the screen.
  if (cursorY - scrollY > windowHeight - trigger) {
    delta = trigger / (windowHeight + scrollY - cursorY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return delta * this.scrollSettings.amount;
  }
  else if (cursorY - scrollY < trigger) {
    delta = trigger / (cursorY - scrollY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return -delta * this.scrollSettings.amount;
  }
};

Drupal.tableDrag.prototype.setScroll = function(scrollAmount) {
  var self = this;

  this.scrollInterval = setInterval(function() {
    // Update the scroll values stored in the object.
    self.checkScroll(self.currentMouseCoords.y);
    var aboveTable = self.scrollY > self.table.topY;
    var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
    if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
      window.scrollBy(0, scrollAmount);
    }
  }, this.scrollSettings.interval);
};

Drupal.tableDrag.prototype.restripeTable = function() {
  // :even and :odd are reversed because jquery counts from 0 and
  // we count from 1, so we're out of sync.
  // Match immediate children of the parent element to allow nesting.
  $('> tbody > tr.draggable, > tr.draggable', this.table)
    .filter(':odd').filter('.odd')
      .removeClass('odd').addClass('even')
    .end().end()
    .filter(':even').filter('.even')
      .removeClass('even').addClass('odd');
};

/**
 * Stub function. Allows a custom handler when a row begins dragging.
 */
Drupal.tableDrag.prototype.onDrag = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is dropped.
 */
Drupal.tableDrag.prototype.onDrop = function() {
  return null;
};

/**
 * Constructor to make a new object to manipulate a table row.
 *
 * @param tableRow
 *   The DOM element for the table row we will be manipulating.
 * @param method
 *   The method in which this row is being moved. Either 'keyboard' or 'mouse'.
 * @param indentEnabled
 *   Whether the containing table uses indentations. Used for optimizations.
 * @param maxDepth
 *   The maximum amount of indentations this row may contain.
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row = function(tableRow, method, indentEnabled, maxDepth, addClasses) {
  this.element = tableRow;
  this.method = method;
  this.group = new Array(tableRow);
  this.groupDepth = $('.indentation', tableRow).size();
  this.changed = false;
  this.table = $(tableRow).parents('table:first').get(0);
  this.indentEnabled = indentEnabled;
  this.maxDepth = maxDepth;
  this.direction = ''; // Direction the row is being moved.

  if (this.indentEnabled) {
    this.indents = $('.indentation', tableRow).size();
    this.children = this.findChildren(addClasses);
    this.group = $.merge(this.group, this.children);
    // Find the depth of this entire group.
    for (var n = 0; n < this.group.length; n++) {
      this.groupDepth = Math.max($('.indentation', this.group[n]).size(), this.groupDepth);
    }
  }
};

/**
 * Find all children of rowObject by indentation.
 *
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row.prototype.findChildren = function(addClasses) {
  var parentIndentation = this.indents;
  var currentRow = $(this.element, this.table).next('tr.draggable');
  var rows = new Array();
  var child = 0;
  while (currentRow.length) {
    var rowIndentation = $('.indentation', currentRow).length;
    // A greater indentation indicates this is a child.
    if (rowIndentation > parentIndentation) {
      child++;
      rows.push(currentRow[0]);
      if (addClasses) {
        $('.indentation', currentRow).each(function(indentNum) {
          if (child == 1 && (indentNum == parentIndentation)) {
            $(this).addClass('tree-child-first');
          }
          if (indentNum == parentIndentation) {
            $(this).addClass('tree-child');
          }
          else if (indentNum > parentIndentation) {
            $(this).addClass('tree-child-horizontal');
          }
        });
      }
    }
    else {
      break;
    }
    currentRow = currentRow.next('tr.draggable');
  }
  if (addClasses && rows.length) {
    $('.indentation:nth-child(' + (parentIndentation + 1) + ')', rows[rows.length - 1]).addClass('tree-child-last');
  }
  return rows;
};

/**
 * Ensure that two rows are allowed to be swapped.
 *
 * @param row
 *   DOM object for the row being considered for swapping.
 */
Drupal.tableDrag.prototype.row.prototype.isValidSwap = function(row) {
  if (this.indentEnabled) {
    var prevRow, nextRow;
    if (this.direction == 'down') {
      prevRow = row;
      nextRow = $(row).next('tr').get(0);
    }
    else {
      prevRow = $(row).prev('tr').get(0);
      nextRow = row;
    }
    this.interval = this.validIndentInterval(prevRow, nextRow);

    // We have an invalid swap if the valid indentations interval is empty.
    if (this.interval.min > this.interval.max) {
      return false;
    }
  }

  // Do not let an un-draggable first row have anything put before it.
  if (this.table.tBodies[0].rows[0] == row && $(row).is(':not(.draggable)')) {
    return false;
  }

  return true;
};

/**
 * Perform the swap between two rows.
 *
 * @param position
 *   Whether the swap will occur 'before' or 'after' the given row.
 * @param row
 *   DOM element what will be swapped with the row group.
 */
Drupal.tableDrag.prototype.row.prototype.swap = function(position, row) {
  $(row)[position](this.group);
  this.changed = true;
  this.onSwap(row);
};

/**
 * Determine the valid indentations interval for the row at a given position
 * in the table.
 *
 * @param prevRow
 *   DOM object for the row before the tested position
 *   (or null for first position in the table).
 * @param nextRow
 *   DOM object for the row after the tested position
 *   (or null for last position in the table).
 */
Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
  var minIndent, maxIndent;

  // Minimum indentation:
  // Do not orphan the next row.
  minIndent = nextRow ? $('.indentation', nextRow).size() : 0;

  // Maximum indentation:
  if (!prevRow || $(this.element).is('.tabledrag-root')) {
    // Do not indent the first row in the table or 'root' rows..
    maxIndent = 0;
  }
  else {
    // Do not go deeper than as a child of the previous row.
    maxIndent = $('.indentation', prevRow).size() + ($(prevRow).is('.tabledrag-leaf') ? 0 : 1);
    // Limit by the maximum allowed depth for the table.
    if (this.maxDepth) {
      maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
    }
  }

  return {'min':minIndent, 'max':maxIndent};
}

/**
 * Indent a row within the legal bounds of the table.
 *
 * @param indentDiff
 *   The number of additional indentations proposed for the row (can be
 *   positive or negative). This number will be adjusted to nearest valid
 *   indentation level for the row.
 */
Drupal.tableDrag.prototype.row.prototype.indent = function(indentDiff) {
  // Determine the valid indentations interval if not available yet.
  if (!this.interval) {
    prevRow = $(this.element).prev('tr').get(0);
    nextRow = $(this.group).filter(':last').next('tr').get(0);
    this.interval = this.validIndentInterval(prevRow, nextRow);
  }

  // Adjust to the nearest valid indentation.
  var indent = this.indents + indentDiff;
  indent = Math.max(indent, this.interval.min);
  indent = Math.min(indent, this.interval.max);
  indentDiff = indent - this.indents;

  for (var n = 1; n <= Math.abs(indentDiff); n++) {
    // Add or remove indentations.
    if (indentDiff < 0) {
      $('.indentation:first', this.group).remove();
      this.indents--;
    }
    else {
      $('td:first', this.group).prepend(Drupal.theme('tableDragIndentation'));
      this.indents++;
    }
  }
  if (indentDiff) {
    // Update indentation for this row.
    this.changed = true;
    this.groupDepth += indentDiff;
    this.onIndent();
  }

  return indentDiff;
};

/**
 * Find all siblings for a row, either according to its subgroup or indentation.
 * Note that the passed in row is included in the list of siblings.
 *
 * @param settings
 *   The field settings we're using to identify what constitutes a sibling.
 */
Drupal.tableDrag.prototype.row.prototype.findSiblings = function(rowSettings) {
  var siblings = new Array();
  var directions = new Array('prev', 'next');
  var rowIndentation = this.indents;
  for (var d in directions) {
    var checkRow = $(this.element)[directions[d]]();
    while (checkRow.length) {
      // Check that the sibling contains a similar target field.
      if ($('.' + rowSettings.target, checkRow)) {
        // Either add immediately if this is a flat table, or check to ensure
        // that this row has the same level of indentaiton.
        if (this.indentEnabled) {
          var checkRowIndentation = $('.indentation', checkRow).length
        }

        if (!(this.indentEnabled) || (checkRowIndentation == rowIndentation)) {
          siblings.push(checkRow[0]);
        }
        else if (checkRowIndentation < rowIndentation) {
          // No need to keep looking for siblings when we get to a parent.
          break;
        }
      }
      else {
        break;
      }
      checkRow = $(checkRow)[directions[d]]();
    }
    // Since siblings are added in reverse order for previous, reverse the
    // completed list of previous siblings. Add the current row and continue.
    if (directions[d] == 'prev') {
      siblings.reverse();
      siblings.push(this.element);
    }
  }
  return siblings;
};

/**
 * Remove indentation helper classes from the current row group.
 */
Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function() {
  for (n in this.children) {
    $('.indentation', this.children[n])
      .removeClass('tree-child')
      .removeClass('tree-child-first')
      .removeClass('tree-child-last')
      .removeClass('tree-child-horizontal');
  }
};

/**
 * Add an asterisk or other marker to the changed row.
 */
Drupal.tableDrag.prototype.row.prototype.markChanged = function() {
  var marker = Drupal.theme('tableDragChangedMarker');
  var cell = $('td:first', this.element);
  if ($('span.tabledrag-changed', cell).length == 0) {
    cell.append(marker);
  }
};

/**
 * Stub function. Allows a custom handler when a row is indented.
 */
Drupal.tableDrag.prototype.row.prototype.onIndent = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is swapped.
 */
Drupal.tableDrag.prototype.row.prototype.onSwap = function(swappedRow) {
  return null;
};

Drupal.theme.prototype.tableDragChangedMarker = function () {
  return '<span class="warning tabledrag-changed">*</span>';
};

Drupal.theme.prototype.tableDragIndentation = function () {
  return '<div class="indentation">&nbsp;</div>';
};

Drupal.theme.prototype.tableDragChangedWarning = function () {
  return '<div class="warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t("Changes made in this table will not be saved until the form is submitted.") + '</div>';
};
;
/*!
 * jQuery corner plugin: simple corner rounding
 * Examples and documentation at: http://jquery.malsup.com/corner/
 * version 2.11 (15-JUN-2010)
 * Requires jQuery v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Dave Methvin and Mike Alsup
 */

/**
 *  corner() takes a single string argument:  $('#myDiv').corner("effect corners width")
 *
 *  effect:  name of the effect to apply, such as round, bevel, notch, bite, etc (default is round). 
 *  corners: one or more of: top, bottom, tr, tl, br, or bl.  (default is all corners)
 *  width:   width of the effect; in the case of rounded corners this is the radius. 
 *           specify this value using the px suffix such as 10px (yes, it must be pixels).
 */
;(function($) { 

var style = document.createElement('div').style;
var moz = style['MozBorderRadius'] !== undefined;
var webkit = style['WebkitBorderRadius'] !== undefined;
var radius = style['borderRadius'] !== undefined || style['BorderRadius'] !== undefined;
var mode = document.documentMode || 0;
var noBottomFold = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);

$.support = $.support || {};
$.support.borderRadius = moz || webkit || radius; // so you can do:  if (!$.support.borderRadius) $('#myDiv').corner();

var expr = $.browser.msie && (function() {
    var div = document.createElement('div');
    try { div.style.setExpression('width','0+0'); div.style.removeExpression('width'); }
    catch(e) { return false; }
    return true;
})();
    
function sz(el, p) { 
    return parseInt($.css(el,p))||0; 
};
function hex2(s) {
    var s = parseInt(s).toString(16);
    return ( s.length < 2 ) ? '0'+s : s;
};
function gpc(node) {
    while(node) {
        var v = $.css(node,'backgroundColor');
        if (v && v != 'transparent' && v != 'rgba(0, 0, 0, 0)') {
	        if (v.indexOf('rgb') >= 0) { 
	            var rgb = v.match(/\d+/g); 
	            return '#'+ hex2(rgb[0]) + hex2(rgb[1]) + hex2(rgb[2]);
	        }
            return v;
		}
		if (node.nodeName.toLowerCase() == 'html')
		    break;
		node = node.parentNode; // keep walking if transparent
    }
    return '#ffffff';
};

function getWidth(fx, i, width) {
    switch(fx) {
    case 'round':  return Math.round(width*(1-Math.cos(Math.asin(i/width))));
    case 'cool':   return Math.round(width*(1+Math.cos(Math.asin(i/width))));
    case 'sharp':  return Math.round(width*(1-Math.cos(Math.acos(i/width))));
    case 'bite':   return Math.round(width*(Math.cos(Math.asin((width-i-1)/width))));
    case 'slide':  return Math.round(width*(Math.atan2(i,width/i)));
    case 'jut':    return Math.round(width*(Math.atan2(width,(width-i-1))));
    case 'curl':   return Math.round(width*(Math.atan(i)));
    case 'tear':   return Math.round(width*(Math.cos(i)));
    case 'wicked': return Math.round(width*(Math.tan(i)));
    case 'long':   return Math.round(width*(Math.sqrt(i)));
    case 'sculpt': return Math.round(width*(Math.log((width-i-1),width)));
	case 'dogfold':
    case 'dog':    return (i&1) ? (i+1) : width;
    case 'dog2':   return (i&2) ? (i+1) : width;
    case 'dog3':   return (i&3) ? (i+1) : width;
    case 'fray':   return (i%2)*width;
    case 'notch':  return width; 
	case 'bevelfold':
    case 'bevel':  return i+1;
    }
};

$.fn.corner = function(options) {
    // in 1.3+ we can fix mistakes with the ready state
	if (this.length == 0) {
        if (!$.isReady && this.selector) {
            var s = this.selector, c = this.context;
            $(function() {
                $(s,c).corner(options);
            });
        }
        return this;
	}

    return this.each(function(index){
		var $this = $(this);
		// meta values override options
		var o = [$this.attr($.fn.corner.defaults.metaAttr) || '', options || ''].join(' ').toLowerCase();
		var keep = /keep/.test(o);                       // keep borders?
		var cc = ((o.match(/cc:(#[0-9a-f]+)/)||[])[1]);  // corner color
		var sc = ((o.match(/sc:(#[0-9a-f]+)/)||[])[1]);  // strip color
		var width = parseInt((o.match(/(\d+)px/)||[])[1]) || 10; // corner width
		var re = /round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog/;
		var fx = ((o.match(re)||['round'])[0]);
		var fold = /dogfold|bevelfold/.test(o);
		var edges = { T:0, B:1 };
		var opts = {
			TL:  /top|tl|left/.test(o),       TR:  /top|tr|right/.test(o),
			BL:  /bottom|bl|left/.test(o),    BR:  /bottom|br|right/.test(o)
		};
		if ( !opts.TL && !opts.TR && !opts.BL && !opts.BR )
			opts = { TL:1, TR:1, BL:1, BR:1 };
			
		// support native rounding
		if ($.fn.corner.defaults.useNative && fx == 'round' && (radius || moz || webkit) && !cc && !sc) {
			if (opts.TL)
				$this.css(radius ? 'border-top-left-radius' : moz ? '-moz-border-radius-topleft' : '-webkit-border-top-left-radius', width + 'px');
			if (opts.TR)
				$this.css(radius ? 'border-top-right-radius' : moz ? '-moz-border-radius-topright' : '-webkit-border-top-right-radius', width + 'px');
			if (opts.BL)
				$this.css(radius ? 'border-bottom-left-radius' : moz ? '-moz-border-radius-bottomleft' : '-webkit-border-bottom-left-radius', width + 'px');
			if (opts.BR)
				$this.css(radius ? 'border-bottom-right-radius' : moz ? '-moz-border-radius-bottomright' : '-webkit-border-bottom-right-radius', width + 'px');
			return;
		}
			
		var strip = document.createElement('div');
		$(strip).css({
			overflow: 'hidden',
			height: '1px',
			minHeight: '1px',
			fontSize: '1px',
			backgroundColor: sc || 'transparent',
			borderStyle: 'solid'
		});
	
        var pad = {
            T: parseInt($.css(this,'paddingTop'))||0,     R: parseInt($.css(this,'paddingRight'))||0,
            B: parseInt($.css(this,'paddingBottom'))||0,  L: parseInt($.css(this,'paddingLeft'))||0
        };

        if (typeof this.style.zoom != undefined) this.style.zoom = 1; // force 'hasLayout' in IE
        if (!keep) this.style.border = 'none';
        strip.style.borderColor = cc || gpc(this.parentNode);
        var cssHeight = $(this).outerHeight();

        for (var j in edges) {
            var bot = edges[j];
            // only add stips if needed
            if ((bot && (opts.BL || opts.BR)) || (!bot && (opts.TL || opts.TR))) {
                strip.style.borderStyle = 'none '+(opts[j+'R']?'solid':'none')+' none '+(opts[j+'L']?'solid':'none');
                var d = document.createElement('div');
                $(d).addClass('jquery-corner');
                var ds = d.style;

                bot ? this.appendChild(d) : this.insertBefore(d, this.firstChild);

                if (bot && cssHeight != 'auto') {
                    if ($.css(this,'position') == 'static')
                        this.style.position = 'relative';
                    ds.position = 'absolute';
                    ds.bottom = ds.left = ds.padding = ds.margin = '0';
                    if (expr)
                        ds.setExpression('width', 'this.parentNode.offsetWidth');
                    else
                        ds.width = '100%';
                }
                else if (!bot && $.browser.msie) {
                    if ($.css(this,'position') == 'static')
                        this.style.position = 'relative';
                    ds.position = 'absolute';
                    ds.top = ds.left = ds.right = ds.padding = ds.margin = '0';
                    
                    // fix ie6 problem when blocked element has a border width
                    if (expr) {
                        var bw = sz(this,'borderLeftWidth') + sz(this,'borderRightWidth');
                        ds.setExpression('width', 'this.parentNode.offsetWidth - '+bw+'+ "px"');
                    }
                    else
                        ds.width = '100%';
                }
                else {
                	ds.position = 'relative';
                    ds.margin = !bot ? '-'+pad.T+'px -'+pad.R+'px '+(pad.T-width)+'px -'+pad.L+'px' : 
                                        (pad.B-width)+'px -'+pad.R+'px -'+pad.B+'px -'+pad.L+'px';                
                }

                for (var i=0; i < width; i++) {
                    var w = Math.max(0,getWidth(fx,i, width));
                    var e = strip.cloneNode(false);
                    e.style.borderWidth = '0 '+(opts[j+'R']?w:0)+'px 0 '+(opts[j+'L']?w:0)+'px';
                    bot ? d.appendChild(e) : d.insertBefore(e, d.firstChild);
                }
				
				if (fold && $.support.boxModel) {
					if (bot && noBottomFold) continue;
					for (var c in opts) {
						if (!opts[c]) continue;
						if (bot && (c == 'TL' || c == 'TR')) continue;
						if (!bot && (c == 'BL' || c == 'BR')) continue;
						
						var common = { position: 'absolute', border: 'none', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: strip.style.borderColor };
						var $horz = $('<div/>').css(common).css({ width: width + 'px', height: '1px' });
						switch(c) {
						case 'TL': $horz.css({ bottom: 0, left: 0 }); break;
						case 'TR': $horz.css({ bottom: 0, right: 0 }); break;
						case 'BL': $horz.css({ top: 0, left: 0 }); break;
						case 'BR': $horz.css({ top: 0, right: 0 }); break;
						}
						d.appendChild($horz[0]);
						
						var $vert = $('<div/>').css(common).css({ top: 0, bottom: 0, width: '1px', height: width + 'px' });
						switch(c) {
						case 'TL': $vert.css({ left: width }); break;
						case 'TR': $vert.css({ right: width }); break;
						case 'BL': $vert.css({ left: width }); break;
						case 'BR': $vert.css({ right: width }); break;
						}
						d.appendChild($vert[0]);
					}
				}
            }
        }
    });
};

$.fn.uncorner = function() { 
	if (radius || moz || webkit)
		this.css(radius ? 'border-radius' : moz ? '-moz-border-radius' : '-webkit-border-radius', 0);
	$('div.jquery-corner', this).remove();
	return this;
};

// expose options
$.fn.corner.defaults = {
	useNative: true, // true if plugin should attempt to use native browser support for border radius rounding
	metaAttr:  'data-corner' // name of meta attribute to use for options
};
    
})(jQuery);
;
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.65 (07-APR-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 *
 * Originally based on the work of:
 *	1) Matt Oakes
 *	2) Torsten Baldes (http://medienfreunde.com/lab/innerfade/)
 *	3) Benjamin Sterling (http://www.benjaminsterling.com/experiments/jqShuffle/)
 */
;(function($){var ver="2.65";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length==0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){options=handleArguments(this,options,arg2);if(options===false){return;}if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=options.slideExpr?$(options.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts=buildOptions($cont,$slides,els,options,o);if(opts===false){return;}if(opts.timeout||opts.continuous){this.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},opts.continuous?10:opts.timeout+(opts.delay||0));}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"stop":cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;if(arg2===true){options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,1);}return false;default:options={fx:options};}}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,!opts.rev);});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=0;opts.startingSlide=opts.randomMap[0];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z=first?i>=first?els.length-(i-first):first-i:els.length-i;$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var i=0;i<els.length;i++){var $e=$(els[i]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth;}if(!h){h=e.offsetHeight;}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:$el.height();this.cycleW=(opts.fit&&opts.width)?opts.width:$el.width();if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingOp=($.browser.opera&&this.cycleW==42&&this.cycleH==19&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}while((opts.timeout-opts.speed)<250){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){opts.nextSlide=opts.currSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).click(function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).click(function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(var i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];var tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){var tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(var i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}log("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){$(els).stop(true,true);opts.busy=false;}if(opts.busy){return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}if(manual||!p.cyclePause){var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};if(opts.nextSlide!=opts.currSlide){opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after);}else{$.fn.cycle.custom(curr,next,opts,after,manual&&opts.fastOnEvent);}}}opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{var roll=(opts.nextSlide+1)==els.length;opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}if(opts.pager){$.fn.cycle.updateActivePagerLink(opts.pager,opts.currSlide);}}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(curr,next,opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide){$(pager).find("a").removeClass("activeSlide").filter("a:eq("+currSlide+")").addClass("activeSlide");};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn(curr,next,opts,fwd);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}if($.isFunction(opts.prevNextClick)){opts.prevNextClick(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});$.fn.cycle.updateActivePagerLink(opts.pager,opts.startingSlide);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a=($.isFunction(opts.pagerAnchorBuilder))?opts.pagerAnchorBuilder(i,el):'<a href="#">'+(i+1)+"</a>";if(!a){return;}var $a=$(a);if($a.parents("body").length==0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone);});$a=$(arr);}else{$a.appendTo($p);}}$a.bind(opts.pagerEvent,function(){opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if($.isFunction(opts.pagerClick)){opts.pagerClick(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);return false;});if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,prevNextClick:null,pager:null,pagerClick:null,pagerEvent:"click",pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250};})(jQuery);

/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2008 M. Alsup
 * Version:	 2.52
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($){$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});opts.speed=opts.speed/2;opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(var i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(var i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var t=parseInt(h/2);var l=parseInt(w/2);clip="rect("+t+"px "+l+"px "+t+"px "+l+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);
;
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());;
/*!
 * Copyright (c) Andrew Paglinawan, 2008. All rights reserved.
 */
Cufon.registerFont({"w":220,"face":{"font-family":"Quicksand","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 7 3 3 0 0 0 6 0 0","ascent":"288","descent":"-72","bbox":"-8.91478 -331.632 401 74","underline-thickness":"18","underline-position":"-18","unicode-range":"U+0020-U+2122"},"glyphs":{" ":{"w":108},"B":{"d":"37,-9r0,-234v6,-18,44,-7,65,-9v58,-5,85,80,39,112v28,10,49,36,49,68v0,40,-32,72,-72,72r-72,0v-5,0,-9,-4,-9,-9xm55,-18r63,0v30,0,54,-24,54,-54v0,-55,-58,-58,-117,-54r0,108xm55,-144v47,4,92,-2,92,-45v0,-43,-45,-49,-92,-45r0,90","w":213,"k":{"?":2,"A":7,"y":4,"w":4,"v":14,"i":14,"Y":11,"X":7,"W":5,"V":7,"T":7,"I":4,"B":25}},"C":{"d":"26,-127v0,-105,132,-168,213,-101v9,7,-3,22,-11,15v-68,-58,-184,-6,-184,86v0,88,115,143,183,85v9,-7,22,7,12,15v-80,65,-213,3,-213,-100","w":277,"k":{"\u2014":4,"\u2013":4,"\u0153":4,"-":4,"A":5,"y":4,"x":4,"w":4,"v":4,"q":4,"o":4,"l":12,"g":4,"e":4,"d":4,"c":4,"Y":7,"X":4,"Q":7,"O":7,"G":7,"C":7}},"D":{"d":"219,-126v0,86,-72,139,-174,126v-4,0,-8,-4,-8,-9r0,-234v4,-18,37,-9,56,-9v69,0,126,57,126,126xm55,-18v86,10,147,-34,147,-108v0,-73,-61,-118,-147,-108r0,216","w":258,"k":{"\u00c6":16,"}":7,"]":7,"\u2026":14,"\\":14,",":14,"\/":14,"?":7,".":14,"A":23,")":11,"x":4,"w":8,"a":32,"Z":16,"Y":23,"X":20,"W":13,"V":16,"T":20,"S":4,"R":7,"O":5,"N":22,"J":14,"I":18,"H":18,"E":18,"D":11}},"E":{"d":"37,-9r0,-234v0,-5,4,-9,10,-9r129,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-121,0r0,99r106,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-106,0r0,99r121,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-131,0v-4,0,-8,-4,-8,-9","w":213,"k":{"\u0153":4,"y":4,"w":4,"v":4,"o":4,"e":4,"d":4,"c":4,"R":-7}},"F":{"d":"37,-9r0,-234v0,-5,4,-9,10,-9r129,0v5,0,9,4,9,9v0,5,-4,9,-9,9r-121,0r0,99r106,0v5,0,9,4,9,9v0,5,-4,9,-9,9r-106,0r0,108v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9","w":217,"k":{"\u00bb":5,"\u203a":5,"\u00c6":29,"\u0153":5,"\u2026":36,"\u2019":-7,"\u201d":-7,",":36,"\/":25,"?":-4,".":36,"A":29,"z":5,"y":5,"w":4,"v":5,"u":26,"s":4,"q":4,"o":26,"m":26,"g":4,"e":5,"d":4,"c":5,"a":9,"&":11,"Z":4,"Q":7,"O":7,"J":40,"G":7,"C":7}},"G":{"d":"242,-36v-13,29,-54,36,-85,36v-72,0,-131,-57,-131,-128v0,-103,133,-168,213,-99v8,6,-3,21,-11,14v-67,-58,-184,-4,-184,85v0,87,108,142,180,89r0,-74r-69,0v-5,0,-9,-4,-9,-9v0,-5,4,-9,9,-9r79,0v4,0,8,4,8,9r0,86","w":293,"k":{"\\":5,"?":4,"y":2,"w":19,"v":2,"o":7,"a":-4,"Y":11,"X":4,"W":5,"V":7,"T":7,"L":18,"H":16,"F":18}},"H":{"d":"185,-9r0,-108r-130,0r0,108v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-234v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,108r130,0r0,-108v0,-5,3,-9,8,-9v5,0,9,4,9,9r0,234v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9","w":255,"k":{"A":23,"Y":16,"W":18,"O":11,"I":18}},"I":{"d":"40,-243v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,234v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-234","w":109},"J":{"d":"17,-59v-1,-5,0,-10,5,-11v5,-1,10,1,11,5v9,28,35,47,65,47v37,0,68,-30,68,-67r0,-158v0,-5,4,-9,9,-9v5,0,8,4,8,9r0,158v0,48,-38,85,-85,85v-38,0,-70,-25,-81,-59","w":213,"k":{"\u00c6":9,"\u2026":5,",":5,".":5,"A":9,"i":-11,"h":-8,"e":-15,"a":-19,"J":7}},"K":{"d":"37,-9r0,-233v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,146r152,-153v9,-7,22,4,13,13r-97,96r99,126v5,5,-1,14,-7,14v-3,0,-5,0,-7,-3r-97,-124r-56,55r0,63v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9","w":257,"k":{"\u00ab":7,"\u2039":7,"\u2014":18,"\u2013":18,"\u0153":11,"-":18,"y":18,"w":18,"v":22,"u":7,"t":9,"q":9,"o":11,"g":9,"f":7,"e":11,"d":9,"c":11,"a":4,"&":4,"Y":14,"W":11,"V":11,"U":5,"T":4,"S":4,"Q":18,"O":18,"G":18,"C":18,"B":16}},"L":{"d":"176,0r-130,0v-5,0,-9,-4,-9,-9r0,-234v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,225r121,0v5,0,9,4,9,9v0,5,-4,9,-9,9","w":202,"k":{"\u2014":14,"\u2013":14,"\u0153":4,"\u2122":32,"\u2019":14,"\u2018":14,"\u201d":14,"\u201c":14,"\\":43,"*":29,"-":14,"?":22,"w":18,"v":22,"t":7,"q":2,"o":4,"g":2,"f":7,"e":4,"d":2,"c":4,"&":4,"Y":47,"W":36,"V":41,"U":7,"T":36,"Q":14,"O":14,"I":-2,"G":14,"C":14}},"M":{"d":"232,-9r0,-207r-81,112v-3,6,-11,6,-15,0r-81,-112r0,207v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-233v0,-8,12,-12,17,-5r90,124r89,-124v5,-7,17,-3,16,5r0,233v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9","w":303,"k":{"A":23,"P":18,"O":16,"M":12,"E":18}},"N":{"d":"224,-9v1,9,-14,13,-17,4r-151,-210r0,206v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9r0,-231v-3,-8,10,-15,15,-7r153,211r0,-205v0,-5,3,-8,8,-8v5,0,9,3,9,8r0,232","w":277,"k":{"Y":16,"U":18,"T":4,"O":18,"N":12,"I":13,"G":18,"E":23,"D":18}},"O":{"d":"26,-128v0,-71,54,-128,122,-128v67,0,121,57,121,128v0,71,-54,128,-121,128v-68,0,-122,-57,-122,-128xm44,-128v0,62,47,110,104,110v55,0,103,-48,103,-110v0,-62,-48,-110,-103,-110v-57,0,-104,48,-104,110","w":306,"k":{"\u00c6":14,"}":7,"]":7,"\u2026":14,"\\":14,",":14,"\/":14,"?":7,".":14,"A":14,")":11,"x":2,"Z":14,"Y":22,"X":18,"W":13,"V":14,"U":16,"T":20,"S":2,"O":4,"N":9,"M":14,"L":2,"K":11,"J":11,"I":18,"H":14,"D":11,"C":11,"B":13}},"P":{"d":"37,-9r0,-234v0,-5,4,-9,10,-9r70,0v40,0,72,32,72,72v0,40,-32,72,-72,72r-62,0r0,99v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9xm55,-125r62,0v30,0,55,-25,55,-55v0,-54,-58,-58,-117,-54r0,109","w":209,"k":{"\u00ab":-4,"\u2039":-4,"\u00c6":25,"\u0153":2,"\u2026":36,"\u2019":-7,"\u201d":-7,",":36,"\/":22,".":36,"A":25,"y":-4,"w":-4,"v":-4,"u":-2,"t":-5,"o":5,"g":8,"f":11,"e":4,"d":8,"c":2,"&":7,"Z":5,"Y":4,"X":11,"W":2,"V":4,"J":36}},"Q":{"d":"155,8v43,13,79,46,122,8v4,-3,9,-2,12,2v3,4,3,10,-1,13v-20,15,-39,21,-57,21v-41,1,-86,-46,-127,-21v-6,4,-12,0,-13,-4v-2,-19,26,-18,38,-27v-60,-8,-105,-63,-105,-127v0,-70,54,-129,121,-129v67,0,121,59,121,129v0,71,-53,116,-111,135xm42,-127v0,61,47,110,103,110v56,0,103,-49,103,-110v0,-62,-47,-110,-103,-110v-56,0,-103,48,-103,110","w":303,"k":{"?":7,")":4,"Y":23,"W":13,"V":14,"T":20}},"R":{"d":"191,-4v-25,0,-26,-21,-28,-53v-3,-51,-56,-55,-113,-51r0,99v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-234v0,-5,4,-10,10,-9r70,0v76,-4,97,111,31,137v18,10,37,28,37,58v0,28,4,32,17,41v1,5,-1,10,-6,12xm167,-180v0,-54,-58,-58,-117,-54r0,108v59,4,117,1,117,-54","w":225,"k":{"\u0153":4,"t":-4,"q":2,"o":4,"g":2,"f":-4,"e":4,"d":2,"c":4,"Y":9,"W":5,"V":7,"U":22,"T":7,"O":6,"J":2}},"S":{"d":"68,-225v-47,36,1,79,53,85v44,5,92,24,92,70v0,43,-46,71,-93,70v-39,0,-72,-19,-93,-36v-3,-3,-4,-8,-1,-11v3,-4,8,-4,11,-1v36,40,155,48,160,-22v-10,-77,-165,-32,-165,-120v0,-40,43,-66,87,-66v33,0,58,17,78,30v4,3,5,7,2,11v-2,4,-7,5,-11,2v-29,-25,-86,-38,-120,-12","w":240,"k":{"\u00c6":5,"\\":7,"?":4,"A":5,"z":2,"y":5,"x":5,"w":4,"v":5,"t":2,"f":2,"Z":4,"Y":11,"X":9,"W":9,"V":11,"T":5,"S":4}},"T":{"d":"103,-9r0,-225r-76,0v-5,0,-9,-4,-9,-9v0,-5,4,-9,9,-9r169,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-76,0r0,225v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9","w":233,"k":{"\u00ab":32,"\u00bb":25,"\u2039":32,"\u203a":25,"\u00c6":32,"\u2014":32,"\u2013":32,"\u0153":49,"\u2026":36,",":36,";":18,":":18,"\/":32,"-":32,".":36,"A":34,"z":40,"y":36,"x":36,"w":36,"v":36,"u":36,"t":18,"s":41,"r":36,"q":45,"p":36,"o":49,"n":36,"m":36,"l":5,"j":14,"i":14,"h":7,"g":45,"f":18,"e":49,"d":45,"c":49,"a":49,"&":25,"Z":7,"S":5,"Q":20,"O":20,"J":40,"G":20,"D":5,"C":20}},"U":{"d":"38,-243v0,-5,3,-9,8,-9v5,0,9,4,9,9r0,141v0,46,38,84,84,84v47,0,85,-38,85,-84r0,-141v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,141v0,56,-46,102,-103,102v-56,0,-101,-46,-101,-102r0,-141","w":293,"k":{"\u00c6":9,"\u2026":5,",":5,"\/":5,".":5,"A":18,"x":2,"Z":16,"X":4,"W":18,"T":11,"R":9,"O":14,"N":5,"M":18,"L":17,"K":18,"J":7,"I":18,"H":18,"F":18,"E":18,"D":11}},"V":{"d":"137,-8v0,9,-16,11,-17,2r-98,-232v-4,-9,11,-19,16,-8r90,215r91,-215v1,-4,7,-6,11,-4v4,2,6,8,4,12","w":270,"k":{"\u00ab":22,"\u00bb":14,"\u2039":22,"\u203a":14,"\u00c6":36,"\u2014":14,"\u2013":14,"\u0153":25,"\u2026":43,",":43,";":7,":":7,"\/":43,"-":14,".":43,"A":49,"z":20,"y":14,"x":18,"w":13,"v":14,"u":14,"t":7,"s":22,"r":14,"q":23,"p":14,"o":25,"n":14,"m":14,"l":4,"j":7,"i":7,"g":23,"f":9,"e":25,"d":23,"c":25,"a":25,"&":20,"Z":4,"Y":7,"X":7,"W":4,"V":4,"S":9,"Q":14,"O":14,"J":43,"I":18,"G":14,"E":11,"C":14}},"W":{"d":"283,-6v-2,8,-14,7,-17,0r-64,-152r-67,157v-5,3,-14,0,-14,-6r-97,-231v-5,-10,11,-18,16,-8r90,215r64,-152v4,-7,13,-6,17,0r64,152r90,-215v2,-4,7,-6,12,-4v4,2,6,8,4,12","w":396,"k":{"\u00ab":18,"\u00bb":13,"\u2039":18,"\u203a":13,"\u00c6":32,"\u2014":13,"\u2013":13,"\u0153":23,"\u2026":36,",":36,";":5,":":5,"\/":36,"-":13,".":36,"A":43,"z":20,"y":13,"x":14,"w":13,"v":13,"u":13,"t":9,"s":22,"r":13,"q":22,"p":13,"o":23,"n":13,"m":13,"l":4,"j":5,"i":5,"g":22,"f":11,"e":23,"d":22,"c":23,"a":25,"&":16,"Z":4,"Y":7,"X":5,"W":4,"V":4,"S":7,"Q":13,"O":13,"J":38,"I":18,"G":13,"E":7,"C":13}},"X":{"d":"36,0v-6,0,-11,-8,-6,-14r81,-111r-81,-112v-3,-4,-3,-9,1,-12v4,-3,9,-2,12,2r78,107r78,-107v3,-4,9,-5,13,-2v4,3,4,8,1,12r-81,112r81,111v5,6,0,14,-6,14v-3,0,-6,-1,-8,-4r-78,-107r-78,107v-1,3,-4,4,-7,4","w":259,"k":{"\u00ab":18,"\u00bb":7,"\u2039":18,"\u203a":7,"\u2014":18,"\u2013":18,"\u0153":16,"-":18,"?":5,"A":18,"y":14,"w":14,"v":18,"u":7,"t":7,"q":14,"o":16,"l":4,"j":4,"i":4,"g":14,"f":7,"e":16,"d":14,"c":16,"a":4,"&":4,"Y":7,"W":5,"V":7,"U":18,"S":11,"Q":18,"O":18,"J":4,"I":18,"G":18,"E":16,"C":18}},"Y":{"d":"107,-9r0,-112r-85,-116v-3,-4,-2,-9,2,-12v4,-3,9,-2,12,2r79,108r79,-108v3,-4,8,-5,12,-2v4,3,5,8,2,12r-84,115r0,113v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9","w":217,"k":{"\u00ab":36,"\u00bb":27,"\u2039":36,"\u203a":27,"\u00c6":40,"\u2014":29,"\u2013":29,"\u0153":40,"\u2026":47,",":47,";":14,":":14,"\/":40,"-":29,".":47,"A":17,"z":29,"y":22,"x":25,"w":20,"v":22,"u":27,"t":11,"s":36,"r":27,"q":38,"p":27,"o":40,"n":27,"m":27,"l":4,"j":7,"i":7,"g":38,"f":14,"e":40,"d":38,"c":40,"a":36,"&":25,"Z":4,"X":7,"W":7,"V":7,"S":13,"R":-11,"Q":22,"O":22,"L":-18,"J":47,"I":-18,"G":22,"C":22}},"Z":{"d":"35,0v-8,1,-10,-10,-6,-15r159,-218r-153,0v-5,0,-8,-4,-8,-9v0,-5,3,-9,8,-9r177,4v3,3,3,7,0,10r-160,219r154,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-171,0","w":240,"k":{"\u00ab":7,"\u2039":7,"\u2014":11,"\u2013":11,"\u0153":9,"-":11,"y":5,"w":5,"v":7,"q":7,"o":9,"g":7,"f":4,"e":9,"d":7,"c":9,"&":5,"Z":4,"T":-13,"S":4,"Q":14,"O":14,"G":14,"C":14}},"&":{"d":"202,-145v5,24,-5,40,-21,46v11,54,-31,97,-81,99v-78,3,-111,-111,-47,-150v-36,-36,-6,-102,45,-102v33,0,61,27,61,61v0,5,-4,8,-9,8v-5,0,-9,-3,-9,-8v0,-24,-19,-43,-43,-43v-24,0,-43,19,-43,43v-6,22,34,37,15,51v-57,25,-38,125,30,122v40,-2,73,-35,63,-79v-35,-4,-64,5,-57,36v1,6,-3,11,-8,12v-10,-2,-11,-5,-11,-19v0,-35,37,-52,84,-47v22,3,6,-30,21,-37v5,-1,9,3,10,7","w":250,"k":{"Y":25,"W":18,"V":22,"T":32,"S":4}},"\u00a0":{"w":108},"0":{"d":"111,0v-116,-5,-116,-247,0,-252v115,5,115,248,0,252xm159,-204v-51,-72,-118,1,-118,78v0,78,69,148,118,78v26,-37,26,-119,0,-156","w":255,"k":{",":7,"\/":13,".":7,"7":11,"3":4,"2":4,"1":2}},"1":{"d":"61,-9r0,-217v-16,5,-32,27,-48,18v-3,-5,0,-10,4,-12r48,-30v6,-3,13,2,13,10r0,231v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9","w":120},"2":{"d":"26,-219v43,-62,150,-27,150,49v0,22,-9,44,-27,61r-101,91r119,0v5,0,9,4,9,9v0,5,-4,9,-9,9v-48,-2,-105,5,-148,-3v-3,-4,-4,-8,0,-12r118,-107v46,-37,13,-112,-43,-112v-22,0,-43,13,-56,27v-4,4,-9,4,-12,0v-4,-4,-4,-9,0,-12","w":212,"k":{"7":5,"4":11}},"3":{"d":"157,-86v0,-34,-33,-68,-67,-67v-7,0,-16,-10,-8,-17r63,-64r-97,0v-5,0,-9,-4,-9,-9v0,-5,4,-9,9,-9r118,0v8,0,12,11,6,16r-65,67v36,6,68,44,68,83v0,70,-94,118,-146,61v-4,-3,-4,-9,0,-13v3,-4,9,-4,13,0v40,44,115,8,115,-48","w":219,"k":{"\/":4,"9":2,"7":9,"5":2}},"4":{"d":"173,0v-17,-3,-6,-35,-9,-52r-143,-2v-4,-3,-4,-8,-1,-12r146,-182v6,-7,16,-1,16,6r0,173v11,0,26,-3,26,9v0,11,-15,7,-26,8v-3,18,8,49,-9,52xm45,-69r119,0r0,-148","w":239,"k":{"\/":7,"9":4,"7":14,"1":7}},"5":{"d":"171,-85v0,70,-95,116,-146,60v-4,-4,-4,-9,0,-12v4,-4,9,-4,13,0v41,43,115,7,115,-48v0,-58,-75,-92,-115,-48v-7,7,-17,1,-15,-9r12,-101v0,-6,4,-9,10,-9r117,0v5,0,9,4,9,9v0,5,-4,9,-9,9r-110,0r-9,75v57,-36,128,14,128,74","w":217,"k":{"\/":7,"9":2,"7":11,"3":2,"2":4}},"6":{"d":"107,0v-51,-1,-86,-41,-84,-97v3,-73,35,-155,113,-155v5,0,9,4,9,9v0,5,-4,9,-9,9v-54,2,-81,47,-91,96v44,-56,145,-20,145,55v0,46,-37,83,-83,83xm107,-149v-38,1,-71,33,-65,74v4,32,32,57,65,57v37,0,66,-29,66,-65v0,-36,-29,-66,-66,-66","w":231,"k":{"\/":4,"9":4,"7":9,"3":4,"1":7}},"7":{"d":"165,-251v8,-1,14,8,9,14r-97,232v-5,11,-20,2,-17,-7r93,-221r-121,0v-5,0,-9,-4,-9,-9v0,-5,4,-9,9,-9r133,0","w":211,"k":{"\u2014":11,"\u2013":11,",":36,"\/":50,"-":11,".":36,"9":5,"8":4,"6":7,"5":9,"4":31,"3":7,"2":5,"1":-4,"0":7}},"8":{"d":"70,-157v-39,-26,-19,-95,32,-95v50,0,70,70,30,95v30,12,51,41,51,75v0,45,-36,82,-81,82v-45,0,-82,-37,-82,-82v0,-34,20,-63,50,-75xm37,-82v0,36,29,65,65,65v36,0,64,-29,64,-65v0,-35,-28,-64,-64,-64v-36,0,-65,29,-65,64xm67,-200v0,19,16,36,35,36v19,0,35,-17,35,-36v0,-19,-16,-35,-35,-35v-19,0,-35,16,-35,35","w":226,"k":{"9":2,"7":4}},"9":{"d":"190,-179v8,88,-27,176,-112,179v-5,0,-9,-3,-9,-8v0,-5,4,-10,9,-10v55,-1,83,-46,92,-96v-44,55,-146,21,-146,-55v0,-46,37,-83,83,-83v43,0,79,32,83,73xm107,-104v37,0,66,-28,66,-65v0,-36,-29,-65,-66,-65v-36,0,-66,29,-66,65v0,37,30,65,66,65","w":231,"k":{",":4,"\/":9,".":4,"7":9,"5":2,"3":4,"2":4}},"a":{"d":"173,-176v5,0,8,3,8,8r0,159v0,5,-3,9,-8,9v-14,-1,-8,-22,-9,-35v-41,66,-150,29,-150,-53v0,-80,108,-120,150,-54v1,-13,-5,-34,9,-34xm98,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71","w":222,"k":{"\\":27,"*":5,"?":13,"y":-11,"w":7,"v":7,"n":4,"l":-5,"j":-43,"g":-13}},"b":{"d":"33,-9r0,-234v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,101v42,-64,153,-29,153,54v0,81,-110,119,-153,54v4,18,-6,49,-18,25xm119,-159v-37,0,-68,30,-68,71v0,39,31,70,68,70v37,0,67,-31,67,-70v0,-39,-30,-71,-67,-71","w":237,"k":{"\u00bb":2,"\u203a":2,"}":5,"]":7,"\u2026":4,"\u2018":4,"\u201c":4,"\\":25,"*":5,",":4,"?":13,".":4,")":11,"z":5,"y":9,"x":11,"w":7,"v":9}},"c":{"d":"169,-31v3,24,-36,31,-57,31v-50,1,-90,-39,-91,-89v-2,-71,92,-113,147,-68v4,3,4,8,1,12v-19,6,-35,-19,-57,-14v-41,0,-73,31,-74,70v-2,58,74,94,119,56v4,-3,9,-1,12,2","w":205,"k":{"\u00ab":4,"\u00bb":-4,"\u2039":4,"\u203a":-4,"\u0153":5,"\u2019":-5,"\u2018":-4,"\u201d":-5,"\u201c":-4,"\\":14,"?":5,")":5,"y":2,"x":4,"w":2,"v":2,"q":4,"o":5,"g":4,"e":5,"d":4,"c":5}},"d":{"d":"184,0v-14,0,-8,-21,-9,-34v-42,64,-153,28,-153,-54v0,-82,110,-119,153,-54r0,-101v0,-5,4,-9,9,-9v5,0,8,4,8,9r0,234v0,5,-3,9,-8,9xm107,-18v38,-1,70,-31,68,-73v-1,-38,-32,-68,-68,-68v-37,0,-68,32,-68,71v0,39,31,70,68,70","w":237,"k":{"e":5}},"e":{"d":"107,0v-48,0,-86,-40,-86,-88v0,-49,38,-88,86,-88v45,0,82,36,85,83v0,5,-4,8,-9,8r-145,0v0,67,94,93,125,36v6,-10,21,0,15,9v-15,24,-41,40,-71,40xm173,-102v-10,-74,-124,-73,-134,0r134,0","w":219,"k":{"}":4,"]":7,"\u2026":4,"\\":29,"*":7,",":4,"?":14,".":4,")":11,"z":5,"y":-11,"x":11,"w":9,"v":9,"t":14,"r":8}},"f":{"d":"55,-179v-4,-43,9,-74,48,-73v5,0,8,4,8,9v0,5,-3,9,-8,9v-33,-2,-29,22,-30,55v18,-4,49,5,25,17r-25,0r0,154v0,5,-4,8,-9,8v-5,0,-9,-3,-9,-8r0,-154v-17,5,-46,-7,-23,-17r23,0","w":130,"k":{"\u00ab":5,"\u2039":5,"\u0153":4,"\u2122":-20,"}":-11,"]":-7,"\u2026":16,"\u2019":-13,"\u2018":-11,"\u201d":-13,"\u201c":-11,"\\":-11,"*":-11,",":16,"\/":16,"?":-13,".":16,")":-11,"z":4,"q":4,"o":4,"g":4,"e":4,"d":4,"c":4,"a":5}},"g":{"d":"188,-168r0,154v1,58,-64,102,-120,74v-4,-3,-6,-7,-4,-11v9,-13,24,6,40,2v45,-2,72,-36,66,-87v-41,65,-148,30,-148,-53v0,-81,106,-118,148,-53v-4,-18,4,-49,18,-26xm104,-18v36,0,66,-31,66,-71v0,-39,-30,-70,-66,-70v-36,0,-65,31,-65,70v0,40,29,71,65,71","w":237,"k":{"\\":18}},"h":{"d":"51,-6v-2,9,-19,7,-18,-3r0,-234v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,93v36,-49,130,-24,130,43r0,98v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-98v0,-31,-25,-52,-56,-52v-31,0,-56,21,-56,52r0,101","k":{"\\":27,"*":5,"?":11,"y":5,"w":5,"v":7,"a":-14}},"i":{"d":"34,-168v0,-5,3,-8,8,-8v5,0,9,3,9,8r0,159v0,5,-4,9,-9,9v-5,0,-8,-4,-8,-9r0,-159xm34,-217v-5,-17,15,-23,17,-8v5,16,-16,24,-17,8","w":101,"k":{"l":8}},"j":{"d":"30,-208v-13,0,-12,-27,0,-26v8,0,9,8,8,17v0,5,-3,9,-8,9xm-2,60v1,-13,22,-6,22,-22r0,-205v0,-5,4,-9,9,-9v5,0,8,4,8,9r0,205v3,20,-30,44,-39,22","w":89,"k":{"a":7}},"k":{"d":"33,-9r0,-234v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,169r105,-104v4,-4,8,-4,12,0v4,3,4,8,0,12r-68,68r68,84v5,5,0,14,-6,14v-3,0,-6,0,-7,-3r-68,-82r-36,36v-3,17,7,46,-9,49v-5,0,-9,-4,-9,-9","w":201,"k":{"\u00ab":7,"\u00bb":4,"\u2039":7,"\u203a":4,"\u2014":7,"\u2013":7,"\u0153":9,"\\":14,"-":7,"y":5,"w":7,"v":7,"u":4,"t":4,"q":9,"o":9,"g":9,"e":9,"d":9,"c":9,"a":4}},"l":{"d":"36,-243v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,234v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-234","w":89,"k":{"y":-23,"e":-16}},"m":{"d":"50,-8v1,10,-15,10,-17,2r0,-162v0,-10,18,-11,17,0r0,17v29,-37,99,-30,118,12v30,-62,135,-39,135,35r0,96v0,4,-4,8,-9,8v-5,0,-8,-4,-8,-8r0,-96v-1,-30,-25,-55,-55,-55v-30,0,-54,25,-54,55r0,97v-2,8,-18,10,-18,-1r0,-96v0,-30,-24,-55,-54,-55v-30,0,-55,25,-55,55r0,96","w":342,"k":{"\\":27,"*":5,"?":11,"y":5,"w":5,"v":7}},"n":{"d":"50,-9v3,11,-14,11,-16,4v-3,-49,0,-108,-1,-162v0,-5,4,-9,9,-9v11,0,7,15,8,26v37,-50,127,-20,127,46r0,95v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-95v0,-30,-24,-55,-54,-55v-30,0,-55,25,-55,55r0,95","k":{"\\":27,"*":5,"?":11,"y":5,"w":5,"v":7,"d":7}},"o":{"d":"25,-88v0,-48,38,-88,84,-88v46,0,83,40,83,88v0,48,-37,88,-83,88v-46,0,-84,-40,-84,-88xm42,-88v0,39,31,71,67,71v36,0,66,-32,66,-71v0,-39,-30,-71,-66,-71v-36,0,-67,32,-67,71","w":225,"k":{"\u00bb":4,"\u203a":4,"}":5,"]":7,"\u2026":7,"\u2018":7,"\u201c":7,"\\":29,"*":7,",":7,"?":18,".":7,")":11,"z":7,"y":-16,"x":13,"w":14,"v":11,"u":6,"t":7,"r":7,"f":13}},"p":{"d":"33,65r0,-233v0,-5,4,-8,9,-8v14,0,8,21,9,34v42,-64,152,-28,152,53v0,81,-110,120,-152,53r0,101v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9xm118,-159v-37,1,-67,30,-67,70v0,39,31,71,67,71v37,0,68,-32,68,-71v0,-39,-31,-70,-68,-70","w":237,"k":{"\u00bb":2,"\u203a":2,"}":5,"]":7,"\u2026":4,"\u2018":4,"\u201c":4,"\\":25,"*":5,",":4,"?":13,".":4,")":11,"z":5,"y":9,"x":11,"w":7,"v":9,"l":7,"i":11,"e":4}},"q":{"d":"174,65r0,-101v-42,65,-152,30,-152,-53v0,-81,110,-118,152,-53v1,-13,-5,-34,9,-34v5,0,9,3,9,8r0,233v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9xm39,-89v0,39,30,71,67,71v37,0,68,-32,68,-71v0,-39,-31,-70,-68,-70v-37,0,-67,31,-67,70","w":237,"k":{"\\":18}},"r":{"d":"124,-159v-39,-3,-67,49,-73,73r0,77v0,11,-18,12,-18,0r0,-158v0,-5,4,-9,9,-9v16,2,7,31,9,47v13,-24,37,-46,73,-47v5,0,8,4,8,9v0,5,-3,8,-8,8","w":158,"k":{"\u00ab":4,"\u2039":4,"\u0153":9,"\u2026":32,"\u2019":-13,"\u2018":-7,"\u201d":-13,"\u201c":-7,"\\":11,"*":-7,",":32,"\/":27,".":32,"z":4,"q":9,"o":9,"e":18,"d":9,"c":9,"a":9}},"s":{"d":"53,-150v-48,69,99,27,99,100v0,15,-9,26,-21,36v-30,25,-89,11,-109,-11v-4,-3,-4,-8,-1,-12v21,-8,37,25,66,20v33,1,66,-32,35,-54v-28,-20,-97,-12,-98,-59v0,-51,85,-57,115,-27v4,3,6,8,3,12v-18,10,-33,-20,-55,-15v-14,0,-26,4,-34,10","w":177,"k":{"\u00ab":4,"\u2039":4,"}":4,"]":5,"\u2018":4,"\u201c":4,"\\":27,"?":13,")":7,"z":4,"y":-13,"x":9,"w":5,"v":7,"t":-5,"s":4}},"t":{"d":"64,-176v12,1,30,-3,31,8v-1,12,-18,9,-31,9r0,128v1,17,20,9,22,22v0,4,-5,9,-9,9v-18,0,-31,-13,-31,-31r0,-128v-11,0,-34,3,-31,-9v-3,-11,21,-7,31,-8r0,-66v0,-4,4,-9,8,-9v5,0,10,5,10,9r0,66","w":144,"k":{"\u00ab":4,"\u2039":4,"\u0153":5,"\u2019":-4,"\u201d":-4,"\\":14,"t":23,"r":25,"q":5,"o":5,"h":7,"g":5,"e":14,"d":5,"c":5,"a":11}},"u":{"d":"30,-168v0,-5,4,-9,9,-9v5,0,8,4,8,9r0,96v0,30,24,55,54,55v30,0,55,-25,55,-55r0,-96v0,-11,18,-12,18,0r0,96v0,40,-33,72,-73,72v-40,0,-71,-32,-71,-72r0,-96","k":{"\\":18,"n":9,"l":11}},"v":{"d":"103,-7v0,7,-13,10,-16,2r-66,-158v-2,-4,0,-9,4,-11v4,-2,10,0,11,4r59,139r59,-139v1,-4,7,-6,11,-4v4,2,6,7,4,11","w":209,"k":{"\u00ab":11,"\u00bb":5,"\u2039":11,"\u203a":5,"\u2014":5,"\u2013":5,"\u0153":11,"}":4,"]":7,"\u2026":31,"\\":18,",":31,"\/":25,"-":5,"?":4,".":31,"z":2,"y":5,"x":4,"w":5,"v":5,"s":7,"q":9,"o":11,"g":9,"e":11,"d":9,"c":11,"a":9}},"w":{"d":"203,-6v-2,7,-15,9,-16,0r-41,-97r-41,98v-2,7,-14,6,-16,0r-66,-158v-2,-4,0,-9,4,-11v4,-2,10,0,11,4r59,139r41,-96v2,-7,13,-7,16,0r41,96r58,-139v5,-9,21,-3,16,7","w":309,"k":{"\u00ab":7,"\u00bb":4,"\u2039":7,"\u203a":4,"\u2014":4,"\u2013":4,"\u0153":9,"}":4,"]":7,"\u2026":25,"\\":18,",":25,"\/":22,"-":4,"?":4,".":25,"z":2,"y":4,"x":4,"w":4,"v":5,"s":5,"q":7,"o":9,"l":21,"i":22,"g":7,"e":22,"d":7,"c":9,"a":7}},"x":{"d":"33,0v-5,0,-11,-8,-6,-14r54,-73r-54,-75v-3,-4,-3,-9,1,-12v4,-3,9,-2,12,2r51,70r51,-70v3,-4,9,-5,12,-2v4,3,5,8,2,12r-54,75r54,73v5,6,-1,14,-7,14v-3,0,-6,-1,-7,-4r-51,-69r-51,69v-1,3,-4,4,-7,4","w":205,"k":{"\u00ab":16,"\u00bb":5,"\u2039":16,"\u203a":5,"\u2014":11,"\u2013":11,"\u0153":13,"}":4,"]":4,"\\":18,"-":11,"?":5,"y":4,"w":4,"v":4,"s":7,"q":11,"o":13,"i":16,"g":11,"e":13,"d":11,"c":13,"a":16}},"y":{"d":"145,-168v-2,-9,14,-11,16,-4v3,49,0,104,1,158v1,58,-64,102,-120,74v-9,-5,-3,-18,7,-15v50,20,102,-14,96,-71v-37,49,-126,21,-126,-46r0,-96v0,-5,4,-8,8,-8v5,0,9,3,9,8r0,96v0,30,24,54,54,54v30,0,55,-24,55,-54r0,-96","w":211,"k":{"\u00ab":11,"\u00bb":5,"\u2039":11,"\u203a":5,"\u2014":5,"\u2013":5,"\u0153":11,"}":4,"]":7,"\u2026":31,"\\":18,",":31,"\/":25,"-":5,"?":4,".":31,"z":2,"y":4,"x":4,"w":4,"v":5,"s":7,"q":9,"o":11,"l":11,"g":9,"e":11,"d":9,"c":11,"a":9}},"z":{"d":"145,-175v9,-1,13,11,6,16r-104,142r99,0v5,0,8,3,8,8v0,5,-3,9,-8,9r-115,0v-8,1,-12,-11,-6,-15r104,-143r-98,0v-5,0,-9,-3,-9,-8v0,-5,4,-9,9,-9r114,0","w":199,"k":{"\u00ab":5,"\u2039":5,"\u0153":5,"\\":16,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5}},"!":{"d":"33,-243v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,180v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-180xm33,-9v-5,-17,16,-23,18,-8v5,17,-16,23,-18,8","w":90},"(":{"d":"105,35v-92,-5,-93,-167,-62,-243v11,-27,32,-45,62,-45v5,0,10,5,10,10v0,5,-5,10,-10,10v-73,6,-69,155,-44,214v10,23,23,34,44,34v5,0,10,5,10,10v0,6,-5,10,-10,10","w":154,"k":{"\u0153":11,"s":5,"q":11,"o":11,"j":-11,"g":7,"e":11,"d":11,"c":11,"Q":11,"O":11,"J":5,"G":11,"C":11}},")":{"d":"111,-109v0,71,-16,141,-80,144v-5,0,-9,-4,-9,-10v0,-5,4,-10,9,-10v49,-3,60,-65,60,-124v0,-60,-11,-120,-60,-124v-11,0,-12,-20,0,-20v64,3,80,74,80,144","w":154},"+":{"d":"113,-36v-24,-6,-7,-53,-12,-78r-66,0v-7,0,-12,-5,-12,-12v6,-24,53,-7,78,-12v4,-26,-12,-71,12,-78v24,7,7,52,12,78v26,4,71,-12,78,12v-7,24,-52,7,-78,12r0,66v0,7,-5,12,-12,12","w":223},"<":{"d":"25,-118v-5,-3,-2,-12,0,-15r114,-115v4,-4,11,-4,15,0v4,4,4,11,0,15r-108,108r108,108v7,7,0,18,-8,17v-3,0,-5,-1,-7,-3","w":223},">":{"d":"43,0v-8,1,-14,-11,-7,-17r107,-108r-107,-108v-4,-4,-4,-11,0,-15v4,-4,10,-4,14,0r115,116v3,4,2,11,-1,14r-114,115v-2,2,-4,3,-7,3","w":223},"A":{"d":"198,-6r-23,-59r-115,0r-22,59v-1,5,-5,6,-11,6v-4,-2,-7,-8,-5,-12r87,-234v2,-6,15,-7,17,0r88,234v2,4,-1,13,-8,12v-3,0,-7,-2,-8,-6xm118,-218r-51,135r102,0","w":232,"k":{"\u00ab":7,"\u2039":7,"\u2014":14,"\u2013":14,"\u0153":9,"\u2122":36,"\u2019":29,"\u2018":29,"\u201d":29,"\u201c":29,"\\":43,"*":36,"-":14,"?":22,"y":4,"w":16,"v":22,"u":4,"t":11,"q":9,"o":9,"g":9,"f":7,"e":9,"d":9,"c":9,"Z":-13,"Y":27,"W":29,"V":32,"U":9,"T":36,"S":6,"O":14,"H":7,"G":12,"C":14}},".":{"d":"30,-18v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18","w":82,"k":{"\u0153":7,"\u2019":14,"\u201d":14,"y":22,"w":25,"v":31,"t":9,"q":4,"o":7,"g":4,"f":5,"e":7,"d":4,"c":7,"7":7,"1":18,"0":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"?":{"d":"83,-50v-16,-5,-5,-37,-8,-55v0,-5,4,-8,8,-8v34,0,61,-28,61,-61v0,-62,-90,-83,-114,-30v-2,4,-7,5,-11,2v-4,-3,-6,-7,-3,-11v31,-66,145,-40,145,39v0,40,-31,73,-70,77v-3,16,7,44,-8,47xm83,0v-7,0,-9,-8,-8,-16v0,-5,4,-9,8,-9v8,0,9,8,8,17v0,5,-3,8,-8,8","w":192},"=":{"d":"39,-77v-6,0,-11,-4,-11,-10v0,-5,5,-10,11,-10r128,0v6,0,10,5,10,10v0,6,-4,10,-10,10r-128,0xm39,-155v-6,0,-11,-5,-11,-10v0,-6,5,-10,11,-10r128,0v6,0,10,4,10,10v0,5,-4,10,-10,10r-128,0","w":223},"-":{"d":"31,-118v-4,0,-7,-3,-7,-7v0,-4,3,-7,7,-7r76,0v4,0,7,3,7,7v0,4,-3,7,-7,7r-76,0","w":146,"k":{"\u00c6":14,"A":14,"z":4,"y":5,"x":11,"w":4,"v":5,"7":14,"3":4,"1":11,"Z":11,"Y":29,"X":18,"W":13,"V":14,"T":32}},"\u00ad":{"d":"31,-118v-4,0,-7,-3,-7,-7v0,-4,3,-7,7,-7r76,0v4,0,7,3,7,7v0,4,-3,7,-7,7r-76,0","w":146},"\/":{"d":"44,-5v-5,11,-20,2,-16,-7r98,-234v4,-10,22,-3,17,7","w":151,"k":{"\u00c6":43,"\u0153":29,"\/":61,"A":43,"z":22,"y":18,"x":18,"w":18,"v":18,"u":18,"t":7,"s":31,"r":18,"q":25,"p":18,"o":29,"n":18,"m":18,"g":25,"f":9,"e":29,"d":25,"c":29,"a":23,"9":7,"8":5,"7":4,"6":13,"5":7,"4":34,"3":4,"2":7,"1":-4,"0":13,"Z":7,"S":11,"Q":14,"O":14,"J":47,"G":14,"C":14}},":":{"d":"31,-18v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18xm31,-169v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18","w":86,"k":{"Y":14,"W":5,"V":7,"T":18}},";":{"d":"24,-169v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18xm55,-20v3,34,-10,53,-28,58v-17,-10,24,-21,14,-38v-7,-1,-11,-9,-10,-20v0,-7,5,-12,12,-12v7,0,12,5,12,12","w":86,"k":{"Y":14,"W":5,"V":7,"T":18}},"\u037e":{"d":"24,-169v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18xm55,-20v3,34,-10,53,-28,58v-17,-10,24,-21,14,-38v-7,-1,-11,-9,-10,-20v0,-7,5,-12,12,-12v7,0,12,5,12,12","w":86},",":{"d":"53,-20v3,34,-9,53,-28,58v-17,-10,24,-21,14,-38v-12,-1,-14,-33,2,-32v7,0,12,5,12,12","w":82,"k":{"\u0153":7,"\u2019":14,"\u201d":14,"y":16,"w":25,"v":31,"t":9,"q":4,"o":7,"j":-5,"g":4,"f":5,"e":7,"d":4,"c":7,"7":7,"1":18,"0":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"'":{"d":"25,-166r11,-77v-1,-11,20,-15,23,-4r-23,81v-1,5,-3,7,-6,7v-3,0,-6,-2,-5,-7","w":82},"\"":{"d":"90,-166r11,-77v-1,-11,20,-16,22,-4v-4,30,-15,54,-22,81v-1,5,-3,7,-6,7v-3,0,-6,-2,-5,-7xm25,-166r11,-77v-1,-11,20,-15,23,-4r-23,81v-1,5,-3,7,-6,7v-3,0,-6,-2,-5,-7","w":147},"_":{"d":"-1,58v-12,0,-9,-16,0,-16r218,0v12,0,9,16,0,16r-218,0","w":216},"*":{"d":"77,-145v-14,-5,-2,-32,-4,-47r-38,25v-8,0,-11,-11,-3,-15r37,-17v-13,-9,-34,-11,-42,-25v12,-18,32,13,46,17v1,-15,-10,-41,4,-47v16,4,3,32,5,47v13,-8,23,-19,38,-24v8,-1,9,13,2,14r-37,18v13,9,35,9,42,24v0,7,-8,10,-13,5r-32,-22v-1,16,11,42,-5,47","w":154,"k":{"\u00c6":36,"\u0153":7,"A":36,"t":-4,"s":4,"q":5,"o":7,"g":5,"e":7,"d":5,"c":7,"a":4,"J":29}},"@":{"d":"145,-18v13,3,35,-10,38,4v3,14,-24,14,-38,14v-70,0,-126,-56,-126,-126v0,-70,56,-126,126,-126v70,0,126,56,126,126v0,43,-6,74,-53,85v-22,-1,-27,-17,-26,-39v-35,45,-111,14,-111,-46v0,-37,28,-68,64,-68v59,0,68,62,65,125v1,6,2,12,11,11v27,-12,33,-37,33,-68v0,-59,-50,-109,-109,-109v-60,0,-108,50,-108,109v0,60,48,108,108,108xm100,-126v0,28,20,49,45,49v25,0,47,-21,47,-49v0,-27,-22,-50,-47,-50v-25,0,-45,23,-45,50","w":352},"\\":{"d":"139,-13v2,6,-1,13,-9,12v-3,0,-7,-1,-8,-5r-98,-233v-2,-5,0,-10,5,-12v5,-2,9,1,11,5","w":161,"k":{"y":22,"w":22,"v":25,"t":11,"j":-11,"f":4,"Y":40,"W":36,"V":43,"U":5,"T":32,"Q":14,"O":14,"G":14,"C":14}},"\u201c":{"d":"93,-195v-3,-34,9,-54,28,-58v6,-1,7,8,2,10v-13,7,-17,15,-16,28v13,2,13,33,-3,32v-6,0,-11,-6,-11,-12xm28,-195v-3,-34,9,-54,28,-58v6,-1,8,8,3,10v-13,7,-18,15,-17,28v13,1,13,32,-2,32v-6,0,-12,-6,-12,-12","w":147,"k":{"\u00c6":32,"\u0153":5,"\u00bf":13,"A":32,"z":4,"t":-5,"s":4,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":4,"J":29}},"\u201d":{"d":"55,-242v2,34,-9,54,-28,58v-6,1,-8,-8,-3,-10v13,-7,18,-14,17,-27v-8,-1,-11,-10,-10,-21v1,-14,23,-14,24,0xm120,-242v2,34,-10,54,-29,58v-6,1,-7,-8,-2,-10v13,-7,18,-14,17,-27v-8,-1,-11,-10,-10,-21v1,-14,23,-14,24,0","w":147},"\u201a":{"w":82,"k":{"\u0153":7,"y":16,"w":25,"v":31,"t":9,"q":4,"o":7,"j":-5,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"\u2018":{"d":"28,-195v-3,-34,9,-54,28,-58v6,-1,8,8,3,10v-13,7,-18,15,-17,28v13,1,13,32,-2,32v-6,0,-12,-6,-12,-12","w":82,"k":{"\u00c6":32,"\u0153":5,"\u00bf":13,"A":32,"z":4,"t":-5,"s":4,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":4,"J":29}},"\u2019":{"d":"55,-242v2,34,-9,54,-28,58v-6,1,-8,-8,-3,-10v13,-7,18,-14,17,-27v-8,-1,-11,-10,-10,-21v1,-14,23,-14,24,0","w":82,"k":{"\u00c6":36,"\u0153":16,"A":36,"s":11,"q":14,"o":16,"g":14,"e":16,"d":14,"c":16,"a":7,"J":36}},"`":{"d":"108,-216v-21,8,-36,-24,-49,-36v1,-7,19,-12,25,-2","w":180},"\u00d2":{"d":"26,-128v0,71,54,128,122,128v67,0,121,-57,121,-128v0,-71,-54,-128,-121,-128v-68,0,-122,57,-122,128xm44,-128v0,-62,47,-110,104,-110v55,0,103,48,103,110v0,62,-48,110,-103,110v-57,0,-104,-48,-104,-110xm172,-288v-21,7,-35,-25,-49,-36v1,-7,20,-12,25,-2v7,13,18,23,24,38","w":306},"\u00d9":{"d":"33,-102v0,56,46,102,102,102v57,0,102,-46,102,-102r0,-141v0,-5,-4,-9,-9,-9v-5,0,-8,4,-8,9r0,141v0,46,-38,84,-85,84v-46,0,-84,-38,-84,-84r0,-141v0,-5,-4,-9,-9,-9v-5,0,-9,4,-9,9r0,141xm160,-288v-21,7,-35,-25,-49,-36v1,-7,19,-12,25,-2","w":273},"\u2026":{"d":"30,-18v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18xm111,-18v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18xm193,-18v0,-10,8,-18,18,-18v10,0,18,8,18,18v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18","w":244,"k":{"\u0153":7,"y":22,"w":25,"v":31,"t":9,"q":4,"o":7,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"\u00a8":{"d":"48,-229v0,-9,6,-16,15,-16v9,0,16,7,16,16v0,9,-7,15,-16,15v-9,0,-15,-6,-15,-15xm107,-229v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15","w":180},"\u00e0":{"d":"181,-176v5,0,9,3,9,8r0,159v0,5,-4,9,-9,9v-14,-1,-8,-22,-9,-35v-41,66,-149,29,-149,-53v0,-81,107,-120,149,-54v1,-13,-5,-34,9,-34xm106,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm131,-208v-21,7,-35,-25,-49,-36v1,-7,20,-12,25,-2v7,13,18,23,24,38","w":206},"\u00f2":{"d":"21,-88v0,48,37,88,83,88v46,0,84,-40,84,-88v0,-48,-38,-88,-84,-88v-46,0,-83,40,-83,88xm38,-88v0,-39,30,-71,66,-71v36,0,67,32,67,71v0,39,-31,71,-67,71v-36,0,-66,-32,-66,-71xm129,-208v-21,7,-35,-25,-49,-36v1,-7,19,-12,25,-2","w":230},"\u00f9":{"d":"30,-72v0,40,31,72,71,72v40,0,73,-32,73,-72r0,-96v0,-5,-4,-9,-9,-9v-4,0,-9,4,-9,9r0,96v0,30,-25,55,-55,55v-30,0,-54,-25,-54,-55r0,-96v0,-5,-3,-9,-8,-9v-5,0,-9,4,-9,9r0,96xm126,-208v-21,7,-35,-25,-49,-36v1,-7,20,-12,25,-2v7,13,18,23,24,38"},"~":{"d":"60,-105v-12,-3,-12,16,-23,19v-5,0,-7,-5,-6,-11v10,-46,48,-18,75,-12v12,3,12,-17,23,-19v6,-1,7,6,5,11v-11,47,-47,18,-74,12","w":165},"\u02dc":{"d":"67,-229v-12,-3,-12,17,-23,19v-6,1,-7,-6,-5,-11v11,-47,47,-18,74,-12v12,3,12,-17,23,-19v6,-1,7,6,5,11v-11,47,-47,18,-74,12","w":180},"\u00d1":{"d":"207,-5v3,9,18,5,17,-4r0,-232v0,-5,-4,-8,-9,-8v-5,0,-8,3,-8,8r0,205r-153,-211v-5,-8,-18,-1,-15,7r0,231v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-206xm108,-301v-12,-3,-12,17,-23,19v-6,1,-7,-6,-5,-11v11,-47,47,-18,74,-12v12,3,12,-16,23,-19v6,0,7,5,6,11v-10,46,-48,18,-75,12","w":284},"\u00f1":{"d":"34,-6v2,8,17,7,17,-3r0,-95v1,-30,24,-55,54,-55v30,0,55,25,55,55r0,95v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-95v4,-64,-89,-97,-126,-46v0,-11,3,-26,-9,-26v-5,0,-8,4,-8,9r0,161xm83,-220v-12,-3,-12,15,-23,18v-6,0,-6,-4,-6,-10v11,-46,48,-18,75,-12v12,3,12,-17,23,-19v6,-1,7,6,5,10v-11,46,-47,19,-74,13"},"#":{"d":"51,-9r10,-58v-16,-2,-43,7,-45,-9v3,-15,32,-5,48,-8r15,-85v-16,-3,-45,8,-48,-8v2,-18,34,-6,51,-9r10,-60v1,-5,4,-7,9,-7v6,0,9,5,8,10r-10,57r75,0r10,-60v1,-5,4,-7,9,-7v6,0,9,5,8,10r-10,57v15,2,42,-7,44,8v-2,17,-31,6,-47,9r-15,85v16,3,44,-7,48,8v-3,17,-34,6,-51,9r-10,61v-1,5,-4,7,-9,7v-6,0,-9,-5,-8,-10r10,-58r-75,0r-10,61v-1,5,-4,7,-9,7v-6,0,-9,-5,-8,-10xm81,-84r75,0r15,-85r-75,0","w":252},"$":{"d":"31,-52v24,16,46,34,77,35r0,-102v-54,-12,-77,-32,-77,-68v0,-36,32,-64,76,-65v-5,-16,11,-32,17,-14r0,15v28,3,55,12,69,33v0,5,-4,9,-9,9v-22,-9,-39,-26,-61,-26r0,101v55,12,78,32,78,67v0,38,-32,66,-77,67v4,18,-3,53,-17,28r0,-28v-31,-3,-56,-15,-81,-35v-7,-6,-4,-17,5,-17xm183,-65v0,-25,-13,-41,-60,-51r0,100v36,-1,60,-22,60,-49xm50,-188v0,24,12,39,58,50r0,-98v-35,1,-58,22,-58,48","w":227,"k":{"7":4}},"[":{"d":"35,37r0,-280v0,-5,5,-9,10,-9r83,0v4,0,7,3,7,7v0,4,-3,7,-7,7r-76,0r0,271r76,0v4,0,7,3,7,7v0,4,-3,7,-7,7r-83,0v-5,0,-10,-5,-10,-10","w":154,"k":{"\u0153":7,"y":4,"x":4,"w":7,"v":7,"s":5,"q":7,"o":7,"j":-11,"e":7,"d":7,"c":7,"a":4,"Q":7,"O":7,"J":4,"G":7,"C":7}},"]":{"d":"120,-243r0,280v0,5,-5,10,-10,10r-83,0v-4,0,-7,-3,-7,-7v0,-4,3,-7,7,-7r76,0r0,-271r-76,0v-4,0,-7,-3,-7,-7v0,-4,3,-7,7,-7r83,0v5,0,10,4,10,9","w":154},"^":{"d":"90,-238r-44,57v-3,5,-15,8,-17,1v14,-25,33,-45,49,-68v6,-9,18,-9,24,0v16,23,35,43,49,68v-1,7,-16,4,-18,-1","w":180},"{":{"d":"146,50v-74,-16,-73,-40,-72,-101v0,-28,-9,-45,-46,-45v-6,0,-8,-3,-8,-7v0,-4,2,-7,8,-7v49,0,47,-31,46,-74v0,-37,11,-61,72,-73v10,-2,10,10,3,12v-64,16,-58,34,-58,90v0,32,-14,45,-37,52v33,7,37,36,37,79v0,36,6,49,58,63v2,1,5,2,5,5v0,4,-4,7,-8,6","w":172,"k":{"\u0153":5,"z":4,"y":4,"x":4,"w":4,"v":4,"s":4,"q":5,"o":5,"j":-13,"g":4,"e":5,"d":5,"c":5,"Q":7,"O":7,"J":4,"G":7,"C":7}},"}":{"d":"27,-257v73,16,73,40,72,101v0,28,8,46,45,46v6,0,9,3,9,7v0,4,-3,7,-9,7v-50,-1,-45,32,-45,74v0,37,-11,60,-72,72v-7,2,-11,-9,-4,-11v64,-16,58,-34,58,-90v0,-32,15,-45,38,-52v-33,-7,-38,-36,-38,-79v0,-36,-6,-49,-58,-63v-7,-2,-4,-14,4,-12","w":172},"|":{"d":"44,40r0,-321v0,-4,3,-8,7,-8v4,0,8,4,8,8r0,321v0,11,-15,10,-15,0","w":102},"\u00bf":{"d":"80,-147v3,-19,-8,-50,8,-55v17,2,6,31,9,47v39,4,69,37,69,77v0,78,-113,106,-145,39v-3,-4,-1,-8,3,-11v4,-3,10,-2,12,2v24,53,113,32,113,-30v0,-33,-27,-61,-61,-61v-4,0,-8,-3,-8,-8xm80,-236v-5,-16,15,-22,17,-8v5,16,-15,24,-17,8","w":192,"k":{"y":13,"w":13,"v":16,"t":5,"f":4,"a":-4,"Y":25,"X":4,"W":18,"V":22,"U":5,"T":22,"Q":7,"O":7,"G":7,"C":7}},"\u2122":{"d":"44,-148r0,-96v-11,-1,-44,4,-32,-8r72,0v6,0,5,8,0,8r-33,0v-2,32,5,73,-3,100v-2,0,-4,-2,-4,-4xm194,-144v-9,-23,0,-64,-3,-93v-13,16,-23,35,-38,50v-16,-13,-25,-34,-38,-50r0,89v0,5,-8,5,-8,0v2,-33,-4,-74,2,-103v2,-1,4,-1,5,1r39,53r38,-53v1,-3,8,-2,7,2r0,100v0,2,-2,4,-4,4","w":248},"\u02c6":{"d":"90,-239v-11,8,-19,24,-35,26v-5,-1,-5,-5,-2,-8v13,-12,26,-51,49,-32v9,12,19,23,27,36v-15,12,-29,-16,-39,-22","w":180},"\u00f4":{"d":"21,-88v0,48,37,88,83,88v46,0,84,-40,84,-88v0,-48,-38,-88,-84,-88v-46,0,-83,40,-83,88xm38,-88v0,-39,30,-71,66,-71v36,0,67,32,67,71v0,39,-31,71,-67,71v-36,0,-66,-32,-66,-71xm104,-231v-11,6,-25,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":230},"\u00b4":{"d":"121,-252v-13,13,-27,43,-49,36v11,-15,27,-60,49,-36","w":180},"\u00f3":{"d":"21,-88v0,48,37,88,83,88v46,0,84,-40,84,-88v0,-48,-38,-88,-84,-88v-46,0,-83,40,-83,88xm38,-88v0,-39,30,-71,66,-71v36,0,67,32,67,71v0,39,-31,71,-67,71v-36,0,-66,-32,-66,-71xm130,-244v-13,13,-29,42,-49,36v8,-18,27,-59,49,-36","w":230},"\u00f5":{"d":"21,-88v0,48,37,88,83,88v46,0,84,-40,84,-88v0,-48,-38,-88,-84,-88v-46,0,-83,40,-83,88xm38,-88v0,-39,30,-71,66,-71v36,0,67,32,67,71v0,39,-31,71,-67,71v-36,0,-66,-32,-66,-71xm81,-224v-12,-5,-18,32,-29,13v7,-49,46,-26,75,-17v13,5,20,-33,30,-12v-8,48,-47,25,-76,16","w":230},"\u00e1":{"d":"181,-176v5,0,9,3,9,8r0,159v0,5,-4,9,-9,9v-14,-1,-8,-22,-9,-35v-41,66,-149,29,-149,-53v0,-81,107,-120,149,-54v1,-13,-5,-34,9,-34xm106,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm131,-244v-13,13,-29,42,-49,36v8,-18,28,-59,49,-36","w":206},"\u00e2":{"d":"181,-176v5,0,9,3,9,8r0,159v0,5,-4,9,-9,9v-14,-1,-8,-22,-9,-35v-41,66,-149,29,-149,-53v0,-81,107,-120,149,-54v1,-13,-5,-34,9,-34xm106,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm106,-231v-11,6,-25,34,-39,22v13,-14,27,-54,51,-36v9,12,21,21,27,36v-15,12,-28,-17,-39,-22","w":206},"\u00e3":{"d":"181,-176v5,0,9,3,9,8r0,159v0,5,-4,9,-9,9v-14,-1,-8,-22,-9,-35v-41,66,-149,29,-149,-53v0,-81,107,-120,149,-54v1,-13,-5,-34,9,-34xm106,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm83,-224v-12,-3,-12,17,-23,19v-6,1,-7,-6,-5,-11v11,-47,47,-18,74,-12v12,3,12,-16,23,-19v5,0,7,5,6,11v-10,46,-48,18,-75,12","w":206},"\u00cc":{"d":"69,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-234v0,-5,-4,-9,-9,-9v-5,0,-8,4,-8,9r0,234xm102,-288v-20,8,-36,-25,-49,-36v1,-7,20,-12,25,-2v7,13,18,23,24,38","w":125},"\u00cd":{"d":"46,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-234v0,-5,-4,-9,-9,-9v-5,0,-8,4,-8,9r0,234xm79,-324v-13,13,-28,42,-49,36v9,-17,28,-58,49,-36","w":98},"\u00ce":{"d":"31,-9v0,5,4,9,9,9v5,0,9,-4,9,-9r0,-234v0,-5,-4,-9,-9,-9v-5,0,-9,4,-9,9r0,234xm39,-311v-11,7,-24,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":98},"\u00c2":{"d":"198,-6v2,5,6,6,12,6v4,-2,6,-8,4,-12r-87,-234v-2,-6,-16,-7,-18,0r-87,234v-2,4,1,13,8,12v4,0,8,-2,9,-6r22,-59r115,0xm67,-83r51,-135r51,135r-102,0xm118,-311v-11,6,-25,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":239},"\u00c3":{"d":"198,-6v2,5,6,6,12,6v4,-2,6,-8,4,-12r-87,-234v-2,-6,-16,-7,-18,0r-87,234v-2,4,1,13,8,12v4,0,8,-2,9,-6r22,-59r115,0xm67,-83r51,-135r51,135r-102,0xm95,-301v-12,-5,-18,32,-29,13v7,-49,47,-27,75,-17v13,5,20,-32,30,-13v-7,49,-47,27,-76,17","w":239},"\u00fa":{"d":"30,-72v0,40,31,72,71,72v40,0,73,-32,73,-72r0,-96v0,-5,-4,-9,-9,-9v-4,0,-9,4,-9,9r0,96v0,30,-25,55,-55,55v-30,0,-54,-25,-54,-55r0,-96v0,-5,-3,-9,-8,-9v-5,0,-9,4,-9,9r0,96xm126,-244v-13,13,-28,42,-49,36v9,-17,28,-58,49,-36"},"\u00fb":{"d":"30,-72v0,40,31,72,71,72v40,0,73,-32,73,-72r0,-96v0,-5,-4,-9,-9,-9v-4,0,-9,4,-9,9r0,96v0,30,-25,55,-55,55v-30,0,-54,-25,-54,-55r0,-96v0,-5,-3,-9,-8,-9v-5,0,-9,4,-9,9r0,96xm102,-231v-11,8,-19,24,-35,26v-5,-1,-5,-4,-3,-8v14,-12,26,-50,49,-32v9,12,20,23,28,36v-15,12,-29,-16,-39,-22"},"\u0192":{"d":"142,-254v17,-4,41,11,21,18v-27,-5,-47,0,-53,34r-9,48v19,3,51,-8,57,8v-6,17,-41,4,-60,8v-15,49,-5,138,-64,140v-17,0,-19,-16,-3,-16v15,0,26,-10,30,-30r17,-94v-14,-2,-38,6,-40,-8v3,-15,28,-5,43,-8v9,-42,14,-106,61,-100","w":182,"k":{"5":4,"4":11,"1":-11}},"\u0153":{"d":"331,-40v-33,57,-130,49,-151,-13v-13,31,-41,53,-76,53v-46,0,-83,-40,-83,-88v0,-48,37,-88,83,-88v34,0,63,21,76,52v13,-31,44,-53,79,-53v45,0,83,36,86,83v0,5,-4,9,-9,9r-146,0v-1,68,95,92,126,36v6,-10,20,0,15,9xm38,-88v0,40,30,71,66,71v36,0,66,-31,66,-71v0,-39,-30,-71,-66,-71v-36,0,-66,32,-66,71xm259,-160v-33,0,-61,24,-67,57r134,0v-6,-33,-34,-57,-67,-57","w":379,"k":{"}":4,"]":7,"\u2026":4,"\\":29,"*":7,",":4,"?":14,".":4,")":11,"z":5,"y":9,"x":11,"w":9,"v":9}},"\u00eb":{"d":"108,0v30,0,56,-16,71,-40v3,-4,1,-9,-3,-12v-4,-2,-8,-1,-11,3v-31,56,-126,32,-126,-36r145,0v5,0,9,-3,9,-9v-4,-46,-40,-82,-85,-82v-48,0,-86,39,-86,88v0,48,38,88,86,88xm108,-159v32,0,60,24,66,57r-134,0v6,-33,35,-57,68,-57xm62,-221v0,-9,7,-15,16,-15v9,0,15,6,15,15v0,9,-6,16,-15,16v-9,0,-16,-7,-16,-16xm122,-221v0,-9,6,-15,15,-15v9,0,16,6,16,15v0,9,-7,16,-16,16v-9,0,-15,-7,-15,-16","w":210},"\u00cb":{"d":"37,-9v0,6,4,10,10,9r129,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-121,0r0,-99r106,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-106,0r0,-99r121,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-130,0v-5,0,-9,4,-9,9r0,234xm65,-301v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15xm125,-301v0,-9,6,-16,15,-16v9,0,16,7,16,16v0,9,-7,15,-16,15v-9,0,-15,-6,-15,-15","w":241},"\u00f6":{"d":"21,-88v0,48,37,88,83,88v46,0,84,-40,84,-88v0,-48,-38,-88,-84,-88v-46,0,-83,40,-83,88xm38,-88v0,-39,30,-71,66,-71v36,0,67,32,67,71v0,39,-31,71,-67,71v-36,0,-66,-32,-66,-71xm59,-221v0,-9,7,-15,16,-15v9,0,15,6,15,15v0,9,-6,16,-15,16v-9,0,-16,-7,-16,-16xm118,-221v0,-9,7,-15,16,-15v9,0,15,6,15,15v0,9,-6,16,-15,16v-9,0,-16,-7,-16,-16","w":230},"\u00fc":{"d":"30,-72v0,40,31,72,71,72v40,0,73,-32,73,-72r0,-96v0,-5,-4,-9,-9,-9v-4,0,-9,4,-9,9r0,96v0,30,-25,55,-55,55v-30,0,-54,-25,-54,-55r0,-96v0,-5,-3,-9,-8,-9v-5,0,-9,4,-9,9r0,96xm57,-221v0,-9,6,-15,15,-15v9,0,16,6,16,15v0,9,-7,16,-16,16v-9,0,-15,-7,-15,-16xm116,-221v0,-9,7,-15,16,-15v9,0,15,6,15,15v0,9,-6,16,-15,16v-9,0,-16,-7,-16,-16"},"\u00c4":{"d":"198,-6v2,5,6,6,12,6v4,-2,6,-8,4,-12r-87,-234v-2,-6,-16,-7,-18,0r-87,234v-2,4,1,13,8,12v4,0,8,-2,9,-6r22,-59r115,0xm67,-83r51,-135r51,135r-102,0xm73,-301v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15xm133,-301v0,-9,6,-16,15,-16v9,0,16,7,16,16v0,9,-7,15,-16,15v-9,0,-15,-6,-15,-15","w":238},"\u00e4":{"d":"181,-176v5,0,9,3,9,8r0,159v0,5,-4,9,-9,9v-14,-1,-8,-22,-9,-35v-41,66,-149,29,-149,-53v0,-81,107,-120,149,-54v1,-13,-5,-34,9,-34xm106,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm62,-221v0,-9,6,-15,15,-15v9,0,16,6,16,15v0,9,-7,16,-16,16v-9,0,-15,-7,-15,-16xm121,-221v0,-9,6,-15,15,-15v9,0,16,6,16,15v0,9,-7,16,-16,16v-9,0,-15,-7,-15,-16","w":206},"\u00e6":{"d":"185,-139v39,-66,157,-38,157,45v0,5,-4,9,-9,9r-145,0v-1,68,94,91,125,36v6,-10,20,0,15,9v-29,51,-115,52,-143,1v3,18,-3,55,-17,30r0,-26v-41,66,-150,29,-150,-53v0,-80,108,-120,150,-54v1,-13,-5,-34,9,-34v14,1,6,24,8,37xm102,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm189,-103r134,0v-6,-33,-34,-57,-67,-57v-33,0,-61,24,-67,57","w":343},"\u201e":{"d":"53,-20v3,34,-9,53,-28,58v-17,-10,24,-21,14,-38v-12,-1,-14,-33,2,-32v7,0,12,5,12,12xm118,-20v3,34,-10,53,-28,58v-17,-10,24,-21,14,-38v-13,-1,-14,-32,2,-32v6,0,12,6,12,12","w":147,"k":{"\u0153":7,"y":16,"w":25,"v":31,"t":9,"q":4,"o":7,"j":-5,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"\u2022":{"d":"85,-82v-24,0,-45,-20,-45,-45v0,-24,22,-44,45,-44v23,0,44,20,44,45v0,24,-20,44,-44,44","w":169},"\u2013":{"d":"33,-98v-5,0,-9,-4,-9,-9v0,-5,4,-9,9,-9r124,0v5,0,9,4,9,9v0,5,-4,9,-9,9r-124,0","w":190,"k":{"\u00c6":14,"A":14,"z":4,"y":5,"x":11,"w":4,"v":5,"7":14,"3":4,"1":11,"Z":11,"Y":29,"X":18,"W":13,"V":14,"T":32}},"\u2014":{"d":"33,-98v-5,0,-9,-4,-9,-9v0,-5,4,-9,9,-9r257,0v5,0,10,4,10,9v0,5,-5,9,-10,9r-257,0","w":323,"k":{"\u00c6":14,"A":14,"z":4,"y":5,"x":11,"w":4,"v":5,"7":14,"3":4,"1":11,"Z":11,"Y":29,"X":18,"W":13,"V":14,"T":32}},"\u0178":{"d":"107,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-113r84,-115v3,-4,2,-9,-2,-12v-4,-3,-9,-2,-12,2r-79,108r-79,-108v-3,-4,-8,-5,-12,-2v-4,3,-5,8,-2,12r85,116r0,112xm70,-301v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15xm130,-301v0,-9,6,-16,15,-16v9,0,16,7,16,16v0,9,-7,15,-16,15v-9,0,-15,-6,-15,-15","w":257},"\u00fd":{"d":"161,-172v-2,-7,-18,-5,-16,4r0,96v0,30,-25,54,-55,54v-30,0,-54,-24,-54,-54r0,-96v0,-5,-4,-8,-9,-8v-4,0,-8,3,-8,8r0,96v-3,66,89,96,126,46v6,56,-44,91,-96,71v-10,-3,-17,10,-7,15v55,28,120,-15,120,-74xm115,-244v-13,13,-28,42,-49,36v9,-17,28,-58,49,-36","w":211},"\u00ff":{"d":"161,-172v-2,-7,-18,-5,-16,4r0,96v0,30,-25,54,-55,54v-30,0,-54,-24,-54,-54r0,-96v0,-5,-4,-8,-9,-8v-4,0,-8,3,-8,8r0,96v-3,66,89,96,126,46v6,56,-44,91,-96,71v-10,-3,-17,10,-7,15v55,28,120,-15,120,-74xm45,-221v0,-9,6,-15,15,-15v9,0,16,6,16,15v0,9,-7,16,-16,16v-9,0,-15,-7,-15,-16xm104,-221v0,-9,7,-15,16,-15v9,0,15,6,15,15v0,9,-6,16,-15,16v-9,0,-16,-7,-16,-16","w":211},"\u00dd":{"d":"107,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-113r84,-115v3,-4,2,-9,-2,-12v-4,-3,-9,-2,-12,2r-79,108r-79,-108v-3,-4,-8,-5,-12,-2v-4,3,-5,8,-2,12r85,116r0,112xm140,-324v-13,13,-29,42,-49,36v8,-18,28,-59,49,-36","w":257},"\u00dc":{"d":"33,-102v0,56,46,102,102,102v57,0,102,-46,102,-102r0,-141v0,-5,-4,-9,-9,-9v-5,0,-8,4,-8,9r0,141v0,46,-38,84,-85,84v-46,0,-84,-38,-84,-84r0,-141v0,-5,-4,-9,-9,-9v-5,0,-9,4,-9,9r0,141xm90,-301v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15xm150,-301v0,-9,6,-16,15,-16v9,0,16,7,16,16v0,9,-7,15,-16,15v-9,0,-15,-6,-15,-15","w":273},"\u00db":{"d":"33,-102v0,56,46,102,102,102v57,0,102,-46,102,-102r0,-141v0,-5,-4,-9,-9,-9v-5,0,-8,4,-8,9r0,141v0,46,-38,84,-85,84v-46,0,-84,-38,-84,-84r0,-141v0,-5,-4,-9,-9,-9v-5,0,-9,4,-9,9r0,141xm135,-311v-11,7,-24,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":273},"\u00da":{"d":"33,-102v0,56,46,102,102,102v57,0,102,-46,102,-102r0,-141v0,-5,-4,-9,-9,-9v-5,0,-8,4,-8,9r0,141v0,46,-38,84,-85,84v-46,0,-84,-38,-84,-84r0,-141v0,-5,-4,-9,-9,-9v-5,0,-9,4,-9,9r0,141xm160,-324v-13,13,-28,42,-49,36v9,-17,28,-58,49,-36","w":273},"\u00d6":{"d":"26,-128v0,71,54,128,122,128v67,0,121,-57,121,-128v0,-71,-54,-128,-121,-128v-68,0,-122,57,-122,128xm44,-128v0,-62,47,-110,104,-110v55,0,103,48,103,110v0,62,-48,110,-103,110v-57,0,-104,-48,-104,-110xm102,-301v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15xm162,-301v0,-9,6,-16,15,-16v9,0,16,7,16,16v0,9,-7,15,-16,15v-9,0,-15,-6,-15,-15","w":306},"\u00d5":{"d":"26,-128v0,71,54,128,122,128v67,0,121,-57,121,-128v0,-71,-54,-128,-121,-128v-68,0,-122,57,-122,128xm44,-128v0,-62,47,-110,104,-110v55,0,103,48,103,110v0,62,-48,110,-103,110v-57,0,-104,-48,-104,-110xm124,-301v-13,-4,-18,32,-29,13v7,-49,46,-26,75,-17v12,4,12,-16,23,-19v6,0,7,5,6,11v-10,46,-48,20,-75,12","w":306},"\u00d4":{"d":"26,-128v0,71,54,128,122,128v67,0,121,-57,121,-128v0,-71,-54,-128,-121,-128v-68,0,-122,57,-122,128xm44,-128v0,-62,47,-110,104,-110v55,0,103,48,103,110v0,62,-48,110,-103,110v-57,0,-104,-48,-104,-110xm147,-311v-11,7,-24,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":306},"\u00d3":{"d":"26,-128v0,71,54,128,122,128v67,0,121,-57,121,-128v0,-71,-54,-128,-121,-128v-68,0,-122,57,-122,128xm44,-128v0,-62,47,-110,104,-110v55,0,103,48,103,110v0,62,-48,110,-103,110v-57,0,-104,-48,-104,-110xm171,-324v-13,13,-27,43,-49,36v11,-15,27,-60,49,-36","w":306},"\u00cf":{"d":"33,-9v0,5,4,9,9,9v5,0,9,-4,9,-9r0,-234v0,-5,-4,-9,-9,-9v-5,0,-9,4,-9,9r0,234xm-3,-301v0,-9,7,-16,16,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-16,-6,-16,-15xm57,-301v0,-9,6,-16,15,-16v9,0,15,7,15,16v0,9,-6,15,-15,15v-9,0,-15,-6,-15,-15","w":98},"\u00a1":{"d":"33,-189v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,180v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9r0,-180xm33,-235v-5,-17,16,-23,18,-8v5,17,-16,23,-18,8","w":90},"\u00b2":{"w":142},"\u00b0":{"d":"81,-148v-28,0,-54,-25,-54,-54v0,-28,26,-52,54,-52v28,0,54,24,54,53v0,28,-26,53,-54,53xm81,-164v21,0,36,-18,36,-38v0,-19,-15,-36,-36,-36v-21,0,-36,17,-36,37v0,19,15,37,36,37","w":162},"\u00ae":{"d":"75,-130v-35,0,-63,-28,-63,-63v0,-34,28,-63,63,-63v35,0,63,29,63,63v0,34,-28,63,-63,63xm75,-136v31,0,55,-26,55,-57v0,-31,-23,-56,-55,-56v-31,0,-56,25,-56,57v0,31,24,56,56,56xm93,-170v-4,15,15,23,6,9v-1,-11,-3,-25,-13,-27v21,-8,14,-45,-9,-43v-8,1,-22,-4,-25,3v2,24,-5,57,3,76v7,-5,1,-24,3,-34v18,-1,34,1,35,16xm94,-208v0,16,-18,17,-36,16r0,-33v18,-1,36,0,36,17","w":149},"\u00a9":{"d":"149,4v-73,0,-130,-58,-130,-130v0,-71,58,-130,131,-130v73,0,130,58,130,130v0,71,-58,130,-131,130xm149,-6v68,0,120,-54,120,-121v0,-66,-51,-119,-119,-119v-68,0,-120,54,-120,121v0,66,51,119,119,119xm202,-85v-30,49,-124,19,-117,-43v-6,-61,85,-92,116,-44v-11,21,-30,-16,-50,-10v-28,0,-50,24,-50,54v0,29,22,54,50,54v18,0,29,-10,43,-18v4,0,8,3,8,7","w":298},"\u00f7":{"d":"32,-118r160,0v5,0,8,-4,8,-9v0,-5,-3,-8,-8,-8r-160,0v-5,0,-9,3,-9,8v0,5,4,9,9,9xm112,-213v10,0,15,8,14,20v0,8,-6,14,-14,14v-10,0,-15,-8,-15,-20v0,-8,7,-14,15,-14xm112,-75v10,0,15,9,14,21v0,8,-6,14,-14,14v-10,0,-15,-8,-15,-20v0,-8,7,-15,15,-15","w":223},"\u00df":{"d":"110,1v-10,0,-9,-16,0,-16v41,-2,71,-18,71,-53v0,-33,-30,-49,-69,-54v-11,0,-12,-15,-2,-18v32,-10,55,-29,55,-62v0,-27,-21,-47,-53,-47v-35,0,-61,27,-61,69r0,173v0,5,-4,8,-9,8v-5,0,-9,-3,-9,-8r0,-173v0,-50,31,-85,80,-85v43,0,71,28,71,63v0,35,-28,59,-56,69v38,6,73,25,73,65v0,44,-39,67,-91,69","w":223,"k":{"y":4,"x":4,"w":2,"v":4}},"\u00c6":{"d":"21,2v-7,0,-11,-8,-7,-14r142,-234v2,-4,5,-6,10,-6r179,0v5,0,8,4,8,9v0,5,-3,8,-8,8r-148,0r0,99r131,0v5,0,9,4,9,9v0,5,-4,9,-9,9r-131,0r0,101r149,0v5,0,9,3,9,8v0,5,-4,9,-9,9r-159,0v-5,0,-9,-4,-9,-9r0,-62r-108,0r-41,68v-2,3,-5,5,-8,5xm80,-87r98,0r0,-148r-10,0","w":376,"k":{"\u00f8":4,"\u00ff":4,"\u00fd":4,"\u00f6":4,"\u00eb":4,"\u0153":4,"\u00f5":4,"\u00f3":4,"\u00f4":4,"\u00f2":4,"y":4,"w":4,"v":4,"o":4,"e":4,"d":4,"c":4}},"\u00a3":{"d":"133,-239v-54,2,-62,53,-58,112r100,0v5,0,8,4,8,9v0,5,-3,8,-8,8r-100,0r0,93r127,0v5,0,9,4,9,9v0,5,-4,8,-9,8r-174,0v-5,0,-6,-9,0,-10r28,-6r0,-94v-17,4,-46,-4,-24,-17r24,0v-6,-72,13,-129,78,-129v37,0,62,15,74,41v0,5,-4,8,-9,8v-21,-12,-33,-33,-66,-32","w":231,"k":{"4":5}},"\u00a2":{"d":"189,-69v-16,28,-47,39,-87,37v-5,12,-1,33,-15,36v-17,-4,-3,-28,-2,-41v-37,-13,-63,-49,-63,-91v1,-52,42,-98,99,-96v4,-11,1,-30,14,-32v15,2,5,23,4,35v22,7,40,15,49,34v0,5,-3,9,-8,9v-17,-7,-27,-24,-46,-27r-30,156v35,6,54,-13,77,-29v4,0,8,5,8,9xm41,-129v0,35,20,63,48,75r30,-153v-45,-1,-77,33,-78,78","w":209},"\u0161":{"d":"92,-234v11,-7,22,-31,39,-22v-11,16,-21,36,-41,43v-16,-9,-27,-28,-38,-43v17,-10,29,16,40,22xm24,-130v1,58,100,30,110,80v-4,43,-80,37,-101,12v-4,-3,-9,-3,-12,1v-3,4,-3,9,1,12v29,35,128,34,130,-25v1,-49,-69,-44,-100,-62v-7,-4,-10,-11,-10,-18v4,-36,66,-37,88,-13v4,3,9,2,12,-2v-1,-33,-74,-39,-98,-20v-11,8,-20,21,-20,35","w":178},"\u203a":{"d":"24,-161v0,-7,11,-9,15,-3v16,25,39,44,53,72v-13,28,-37,48,-53,73v-4,7,-15,3,-15,-4v14,-25,33,-45,48,-68v-16,-24,-34,-44,-48,-70","w":111,"k":{"\u00c6":7,"A":7,"z":7,"y":11,"x":16,"w":7,"v":11,"t":4,"s":4,"f":4,"Z":5,"Y":36,"X":18,"W":18,"V":22,"T":32,"S":4}},"\u00e5":{"d":"177,-176v5,0,8,3,8,8r0,159v0,5,-3,9,-8,9v-14,-1,-8,-22,-9,-35v-41,66,-150,29,-150,-53v0,-80,108,-120,150,-54v1,-13,-5,-34,9,-34xm102,-17v36,0,66,-31,66,-71v0,-40,-30,-71,-66,-71v-36,0,-66,31,-66,71v0,40,30,71,66,71xm102,-202v-17,0,-32,-14,-32,-31v0,-17,15,-32,32,-32v18,0,33,15,33,32v0,17,-15,31,-33,31xm102,-216v23,0,23,-35,0,-35v-21,0,-22,35,0,35","w":206},"\u00d0":{"d":"57,-119v-13,-2,-35,6,-37,-7v3,-12,25,-4,37,-6r0,-111v4,-18,38,-9,56,-9v69,0,126,57,126,126v0,86,-72,139,-174,126v-4,0,-8,-4,-8,-9r0,-110xm75,-18v86,10,146,-34,146,-108v0,-73,-60,-118,-146,-108r0,102v14,-2,49,0,28,13r-28,0r0,101","w":292},"\u00f0":{"d":"171,-152r-53,-75v-16,7,-31,17,-48,23v-8,0,-11,-13,-3,-15r42,-21v-5,-6,-16,-22,0,-24v10,0,12,10,16,16v12,-5,22,-13,36,-17v8,0,9,14,2,16r-29,14v25,43,70,84,70,146v0,50,-36,93,-93,93v-52,0,-90,-42,-90,-92v0,-81,101,-110,150,-64xm185,-87v0,-39,-33,-72,-76,-72v-43,0,-69,31,-69,72v0,39,31,75,73,75v43,0,72,-35,72,-75","w":226},"\u00f8":{"d":"210,-93v0,77,-96,127,-155,76v-8,5,-23,31,-31,13v4,-11,14,-16,20,-24v-51,-58,-10,-163,72,-160v23,0,44,8,60,22v8,-7,21,-33,31,-15v-4,11,-14,16,-21,25v15,17,24,39,24,63xm66,-31v46,44,124,5,124,-61v0,-19,-6,-37,-17,-51xm115,-171v-65,-3,-97,82,-58,130r107,-111v-13,-12,-30,-19,-49,-19","w":230},"\u00d8":{"d":"153,4v-33,0,-61,-11,-82,-29v-11,9,-18,22,-31,28v-7,0,-9,-8,-5,-13r24,-26v-71,-78,-21,-223,94,-220v33,0,61,12,82,30v11,-9,18,-23,31,-29v7,0,10,9,5,13r-24,27v71,77,20,219,-94,219xm153,-239v-94,0,-139,121,-81,189r151,-162v-18,-17,-42,-27,-70,-27xm82,-40v65,62,178,8,178,-86v0,-29,-9,-55,-26,-75","w":306},"\u00d7":{"d":"187,-194v-16,27,-44,44,-64,67v21,23,47,40,64,67v0,8,-11,12,-16,6r-60,-61v-23,21,-41,46,-66,64v-8,0,-12,-10,-6,-15r61,-60v-21,-23,-47,-40,-64,-67v0,-8,11,-12,16,-6r60,60v23,-20,40,-46,67,-63v5,0,8,3,8,8","w":223},"\u0160":{"d":"118,-298v11,-8,19,-24,35,-26v5,1,5,4,3,8v-14,12,-26,50,-49,32v-9,-12,-20,-23,-28,-36v15,-12,29,16,39,22xm32,-190v0,85,152,42,165,120v-1,33,-39,55,-77,54v-33,0,-64,-17,-83,-32v-3,-3,-8,-3,-11,1v-3,3,-2,8,1,11v42,49,186,52,186,-34v0,-69,-102,-60,-146,-89v-49,-32,7,-85,52,-81v28,3,49,14,69,27v4,3,9,2,11,-2v3,-4,2,-8,-2,-11v-42,-44,-165,-38,-165,36","w":230},"\u2020":{"d":"66,-93r2,-96v-16,-1,-42,10,-47,-5v4,-15,31,-5,46,-6v2,-17,-11,-49,7,-53v16,5,4,36,6,53v15,2,42,-9,46,6v-4,16,-31,3,-46,5r2,96v0,11,-16,12,-16,0","w":147},"\u2021":{"d":"77,1v-16,-5,-4,-36,-6,-53v-15,-2,-42,9,-46,-6v4,-16,31,-3,46,-5r-2,-63r2,-63v-15,-1,-42,11,-46,-5v4,-16,31,-4,46,-6v2,-17,-10,-47,6,-53v18,4,4,36,7,53v15,2,42,-9,46,6v-4,16,-31,3,-46,5r0,126v15,1,42,-11,46,5v-4,16,-31,4,-46,6v-2,17,11,49,-7,53","w":154},"\u2039":{"d":"87,-23v0,8,-10,11,-14,4v-16,-25,-39,-45,-53,-73v13,-28,37,-47,53,-72v3,-7,14,-5,14,3v-11,27,-32,45,-47,69v15,24,34,43,47,69","w":111,"k":{"\u0153":4,"y":5,"x":5,"w":4,"v":5,"q":2,"o":4,"g":2,"e":4,"d":2,"c":4,"Y":27,"X":7,"W":13,"V":14,"T":25}},"\u00bb":{"d":"98,-161v0,-7,11,-9,15,-3v16,25,38,46,53,72v-14,27,-36,48,-53,73v-4,7,-15,3,-15,-4v12,-26,32,-45,47,-68v-15,-24,-35,-43,-47,-70xm24,-161v0,-7,11,-9,15,-3v16,25,39,44,53,72v-13,28,-37,48,-53,73v-4,7,-15,3,-15,-4v14,-25,33,-45,48,-68v-16,-24,-34,-44,-48,-70","w":185,"k":{"\u00c6":7,"A":7,"z":7,"y":11,"x":16,"w":7,"v":11,"t":4,"s":4,"f":4,"Z":5,"Y":36,"X":18,"W":18,"V":22,"T":32,"S":4}},"\u00ba":{"d":"70,-148v-30,0,-52,-24,-52,-53v0,-28,23,-53,53,-53v30,0,51,24,51,53v0,28,-22,53,-52,53xm24,-105v-4,0,-7,-4,-7,-8v0,-4,3,-7,7,-7r92,0v4,0,7,3,7,7v0,4,-3,8,-7,8r-92,0xm71,-162v21,0,36,-17,36,-39v0,-22,-16,-39,-37,-39v-21,0,-36,17,-36,39v0,22,16,39,37,39","w":140},"\u00b8":{"d":"106,-4r-23,48v-3,11,-22,7,-22,-2v8,-17,20,-31,30,-46r15,0","w":180},"\u00b7":{"d":"30,-102v-7,-22,21,-30,23,-10v7,21,-21,31,-23,10","w":82},"\u00b6":{"d":"120,-8v-2,-29,4,-67,-2,-92v-55,0,-99,-27,-99,-76v0,-52,47,-80,110,-76v5,0,10,5,10,10r0,234v0,5,-4,9,-9,9v-5,0,-10,-4,-10,-9","w":172},"\u00ab":{"d":"161,-23v0,7,-10,11,-15,4v-17,-25,-38,-46,-53,-73v14,-27,37,-47,53,-72v4,-7,15,-4,15,3v-11,27,-33,45,-48,69v15,24,35,43,48,69xm87,-23v0,8,-10,11,-14,4v-16,-25,-39,-45,-53,-73v13,-28,37,-47,53,-72v3,-7,14,-5,14,3v-11,27,-32,45,-47,69v15,24,34,43,47,69","w":185,"k":{"\u0153":4,"y":5,"x":5,"w":4,"v":5,"q":2,"o":4,"g":2,"e":4,"d":2,"c":4,"Y":27,"X":7,"W":13,"V":14,"T":25}},"\u00aa":{"d":"38,-105v-4,0,-7,-4,-7,-8v0,-4,3,-7,7,-7r79,0v4,0,8,3,8,7v0,4,-4,8,-8,8r-79,0xm127,-243r0,101v0,3,-3,5,-6,5v-8,0,-4,-14,-5,-22v-27,41,-95,19,-95,-34v0,-52,68,-76,95,-34v-3,-12,4,-31,11,-16xm74,-148v23,0,42,-19,42,-45v0,-25,-19,-45,-42,-45v-23,0,-42,20,-42,45v0,26,19,45,42,45","w":140},"\u00a5":{"d":"115,0v-18,-5,-5,-41,-9,-60v-21,-4,-60,10,-65,-10v5,-19,44,-6,65,-10r0,-36v-21,-3,-60,9,-65,-10v3,-19,36,-7,54,-10r-73,-101v-3,-4,-3,-9,1,-12v4,-3,10,-2,13,2r78,108r80,-108v3,-4,8,-5,12,-2v4,3,5,8,2,12r-74,101v19,3,52,-9,55,10v-5,20,-45,6,-66,10r0,36v22,3,60,-9,66,10v-5,20,-45,6,-66,10v-3,20,8,54,-8,60","w":246,"k":{"4":7}},"\u00fe":{"d":"33,50r0,-305v0,-5,4,-9,9,-9v5,0,9,4,9,9r0,112v38,-72,165,-53,165,51v0,103,-128,124,-165,52r0,90v0,5,-4,9,-9,9v-5,0,-9,-4,-9,-9xm125,-13v40,0,72,-29,72,-79v0,-48,-33,-79,-72,-79v-38,0,-75,32,-75,80v0,47,37,78,75,78","w":237},"\u00de":{"d":"37,-8r0,-236v0,-12,19,-11,19,0r0,38v82,-5,168,1,166,77v-2,78,-82,86,-166,81v-3,17,7,46,-9,49v-5,0,-10,-4,-10,-9xm56,-65v70,4,148,0,148,-63v0,-65,-79,-63,-148,-61r0,124","w":242},"\u00c0":{"d":"198,-6v2,5,5,6,11,6v4,-2,7,-8,5,-12r-88,-234v-2,-7,-15,-6,-17,0r-87,234v-2,4,1,13,8,12v4,0,7,-2,8,-6r22,-59r115,0xm67,-83r51,-135r51,135r-102,0xm142,-288v-20,8,-36,-25,-49,-36v1,-7,20,-12,25,-2v7,13,18,23,24,38","w":233},"\u00c1":{"d":"198,-6v2,5,5,6,11,6v4,-2,7,-8,5,-12r-88,-234v-2,-7,-15,-6,-17,0r-87,234v-2,4,1,13,8,12v4,0,7,-2,8,-6r22,-59r115,0xm67,-83r51,-135r51,135r-102,0xm143,-324v-13,13,-29,42,-49,36v8,-18,27,-59,49,-36","w":232},"\u00c8":{"d":"37,-9v0,6,4,10,10,9r129,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-121,0r0,-99r106,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-106,0r0,-99r121,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-130,0v-5,0,-9,4,-9,9r0,234xm136,-288v-21,7,-35,-25,-49,-36v1,-7,19,-12,25,-2","w":213},"\u00c9":{"d":"37,-9v0,6,4,10,10,9r129,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-121,0r0,-99r106,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-106,0r0,-99r121,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-130,0v-5,0,-9,4,-9,9r0,234xm135,-324v-13,13,-29,42,-49,36v8,-18,28,-59,49,-36","w":213},"\u00ca":{"d":"37,-9v0,6,4,10,10,9r129,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-121,0r0,-99r106,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-106,0r0,-99r121,0v5,0,8,-4,8,-9v0,-5,-3,-9,-8,-9r-130,0v-5,0,-9,4,-9,9r0,234xm110,-311v-11,6,-25,34,-39,22v13,-14,27,-54,51,-36v9,12,21,21,27,36v-15,12,-29,-16,-39,-22","w":213},"\u00e8":{"d":"107,0v30,0,56,-16,71,-40v3,-4,1,-9,-3,-12v-4,-2,-9,-1,-12,3v-31,56,-125,32,-125,-36r145,0v5,0,9,-3,9,-9v-4,-46,-40,-82,-85,-82v-48,0,-86,39,-86,88v0,48,38,88,86,88xm107,-159v32,0,60,24,66,57r-134,0v6,-33,35,-57,68,-57xm131,-208v-21,8,-36,-24,-49,-36v1,-7,19,-12,25,-2","w":219},"\u00e9":{"d":"107,0v30,0,56,-16,71,-40v3,-4,1,-9,-3,-12v-4,-2,-9,-1,-12,3v-31,56,-125,32,-125,-36r145,0v5,0,9,-3,9,-9v-4,-46,-40,-82,-85,-82v-48,0,-86,39,-86,88v0,48,38,88,86,88xm107,-159v32,0,60,24,66,57r-134,0v6,-33,35,-57,68,-57xm131,-244v-13,13,-29,42,-49,36v8,-18,28,-59,49,-36","w":219},"\u00ea":{"d":"107,0v30,0,56,-16,71,-40v3,-4,1,-9,-3,-12v-4,-2,-9,-1,-12,3v-31,56,-125,32,-125,-36r145,0v5,0,9,-3,9,-9v-4,-46,-40,-82,-85,-82v-48,0,-86,39,-86,88v0,48,38,88,86,88xm107,-159v32,0,60,24,66,57r-134,0v6,-33,35,-57,68,-57xm106,-231v-11,7,-24,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":219},"\u00ec":{"d":"34,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-159v0,-5,-4,-8,-9,-8v-5,0,-8,3,-8,8r0,159xm67,-208v-21,7,-35,-25,-49,-36v1,-7,20,-12,25,-2v7,13,18,23,24,38","w":101},"\u00ed":{"d":"34,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-159v0,-5,-4,-8,-9,-8v-5,0,-8,3,-8,8r0,159xm67,-244v-13,13,-28,42,-49,36v9,-17,28,-58,49,-36","w":101},"\u00ee":{"d":"34,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-159v0,-5,-4,-8,-9,-8v-5,0,-8,3,-8,8r0,159xm42,-231v-11,6,-25,34,-39,22v13,-14,27,-54,51,-36v9,12,20,23,28,36v-15,12,-29,-16,-40,-22","w":101},"\u00ef":{"d":"34,-9v0,5,3,9,8,9v5,0,9,-4,9,-9r0,-159v0,-5,-4,-8,-9,-8v-5,0,-8,3,-8,8r0,159xm-2,-221v0,-9,6,-15,15,-15v9,0,16,6,16,15v0,9,-7,16,-16,16v-9,0,-15,-7,-15,-16xm57,-221v0,-9,7,-15,16,-15v9,0,15,6,15,15v0,9,-6,16,-15,16v-9,0,-16,-7,-16,-16","w":101},"\u00c7":{"d":"26,-127v0,-105,132,-168,213,-101v9,7,-3,22,-11,15v-68,-58,-184,-6,-184,86v0,88,115,143,183,85v9,-7,22,7,12,15v-80,65,-213,3,-213,-100xm161,-4r-23,48v-2,12,-21,6,-22,-2v8,-17,20,-31,30,-46r15,0","w":277},"\u00e7":{"d":"169,-31v3,24,-36,31,-57,31v-50,1,-90,-39,-91,-89v-2,-71,92,-113,147,-68v4,3,4,8,1,12v-19,6,-35,-19,-57,-14v-41,0,-73,31,-74,70v-2,58,74,94,119,56v4,-3,9,-1,12,2xm125,-4r-23,48v-2,12,-21,6,-22,-2v8,-17,20,-31,30,-46r15,0","w":205},"\u00c5":{"d":"210,-12v2,4,-1,13,-8,12v-3,0,-8,-2,-9,-6r-22,-59r-115,0r-22,59v-1,5,-6,6,-12,6v-4,-2,-7,-8,-5,-12r81,-216v-27,-13,-16,-59,16,-59v33,0,45,48,15,60xm114,-273v-20,0,-21,35,0,35v10,0,18,-9,18,-17v0,-9,-8,-18,-18,-18xm63,-83r102,0r-51,-135","w":232},"\u0152":{"d":"262,0v-15,-9,-4,-47,-7,-68v-20,41,-61,68,-107,68v-68,0,-122,-57,-122,-128v0,-71,54,-128,122,-128v46,0,87,28,107,68r0,-55v0,-5,3,-9,8,-9r130,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-121,0r0,99r106,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-106,0r0,99r121,0v5,0,8,4,8,9v0,5,-3,9,-8,9r-131,0xm44,-128v0,62,47,110,104,110v55,0,103,-48,103,-110v0,-62,-48,-110,-103,-110v-57,0,-104,48,-104,110","w":519}}});
/*!
 * Copyright (c) Andrew Paglinawan, 2008. All rights reserved.
 */
Cufon.registerFont({"w":180,"face":{"font-family":"Quicksand","font-weight":700,"font-stretch":"normal","units-per-em":"360","panose-1":"0 0 0 0 0 0 0 0 0 0","ascent":"288","descent":"-72","x-height":"1","bbox":"-9 -342 395 68","underline-thickness":"18","underline-position":"-18","unicode-range":"U+0020-U+2122"},"glyphs":{" ":{"w":108},"B":{"d":"122,0v-32,-2,-85,12,-85,-20r0,-212v0,-29,43,-18,71,-20v54,-2,90,66,55,109v63,35,35,148,-41,143xm77,-212r0,58v31,3,60,-1,60,-30v0,-28,-30,-30,-60,-28xm77,-114r0,74v40,2,82,2,82,-37v0,-39,-41,-39,-82,-37","w":213,"k":{"?":2,"y":4,"w":4,"v":14,"A":7,"i":14,"Y":11,"X":7,"W":5,"V":7,"T":7,"I":4,"B":25}},"C":{"d":"67,-130v0,72,93,117,149,69v8,-6,22,-5,29,4v6,9,6,22,-3,29v-81,67,-216,4,-216,-102v0,-105,134,-168,216,-101v22,17,-8,48,-26,33v-55,-47,-149,-3,-149,68","w":277,"k":{"\u2014":4,"\u2013":4,"\u0153":4,"-":4,"y":4,"x":4,"w":4,"v":4,"A":5,"q":4,"o":4,"l":12,"g":4,"e":4,"d":4,"c":4,"Y":7,"X":4,"Q":7,"O":7,"G":7,"C":7}},"D":{"d":"37,-20r0,-212v0,-27,37,-19,63,-20v69,0,125,57,125,126v0,85,-68,126,-168,126v-11,0,-20,-9,-20,-20xm77,-212r0,172v64,7,108,-30,108,-86v0,-54,-44,-94,-108,-86","w":258,"k":{"\u00c6":16,"}":7,"\u2026":14,"]":7,"\\":14,"\/":14,",":14,".":14,"?":7,")":11,"x":4,"w":8,"A":23,"a":32,"Z":16,"Y":23,"X":20,"W":13,"V":16,"T":20,"S":4,"R":7,"O":5,"N":22,"J":14,"I":18,"H":18,"E":18,"D":11}},"E":{"d":"58,0v-12,0,-21,-9,-21,-20r0,-212v0,-11,9,-20,21,-20r117,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-98,0r0,66v36,5,98,-15,104,20v-5,36,-68,14,-104,20r0,66r98,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-117,0","w":213,"k":{"\u0153":4,"y":4,"w":4,"v":4,"o":4,"e":4,"d":4,"c":4,"R":-7}},"F":{"d":"57,0v-11,0,-20,-9,-20,-20r0,-212v0,-11,9,-20,21,-20r117,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-98,0r0,66v36,5,98,-15,104,20v-5,36,-68,14,-104,20v-5,37,17,106,-20,106","w":217,"k":{"\u00bb":5,"\u00c6":29,"\u203a":5,"\u0153":5,"\u2026":36,"\/":25,"\u201d":-7,"\u2019":-7,",":36,".":36,"?":-4,"&":11,"z":5,"y":5,"w":4,"v":5,"u":26,"A":29,"s":4,"q":4,"o":26,"m":26,"g":4,"e":5,"d":4,"c":5,"a":9,"Z":4,"Q":7,"O":7,"J":40,"G":7,"C":7}},"G":{"d":"249,-45v-8,36,-56,45,-90,45v-73,0,-133,-57,-133,-129v0,-105,134,-170,215,-102v9,7,11,20,4,29v-7,9,-20,10,-29,3v-56,-46,-149,-3,-149,70v0,67,81,112,141,74r0,-49v-29,-2,-72,9,-72,-21v0,-35,59,-15,93,-20v36,3,14,66,20,100","w":293,"k":{"\\":5,"?":4,"y":2,"w":19,"v":2,"o":7,"a":-4,"Y":11,"X":4,"W":5,"V":7,"T":7,"L":18,"H":16,"F":18}},"H":{"d":"57,0v-11,0,-20,-9,-20,-20r0,-212v0,-11,9,-20,20,-20v37,0,14,70,20,106r94,0r0,-86v0,-11,8,-20,19,-20v11,0,21,9,21,20r0,212v0,11,-10,20,-21,20v-36,0,-13,-70,-19,-106r-94,0v-5,37,17,106,-20,106","w":255,"k":{"A":23,"Y":16,"W":18,"O":11,"I":18}},"I":{"d":"40,-232v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,212v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-212","w":109},"J":{"d":"31,-87v11,-4,23,3,26,13v12,50,96,40,96,-15r0,-143v0,-11,10,-20,21,-20v11,0,19,9,19,20r0,143v0,49,-40,89,-89,89v-40,0,-73,-26,-85,-62v-4,-11,2,-22,12,-25","w":213,"k":{"\u00c6":9,"\u2026":5,",":5,".":5,"A":9,"i":-11,"h":-8,"e":-15,"a":-19,"J":7}},"K":{"d":"57,0v-11,0,-20,-9,-20,-20r0,-210v0,-10,9,-20,20,-20v11,0,20,10,20,20r0,103r117,-117v8,-8,20,-8,28,0v8,8,8,20,0,28r-79,79r79,105v12,12,0,33,-15,32v-5,0,-11,-2,-15,-7r-78,-102r-37,38v-2,28,9,70,-20,71","w":257,"k":{"\u2039":7,"\u00ab":7,"\u2014":18,"\u2013":18,"\u0153":11,"-":18,"&":4,"y":18,"w":18,"v":22,"u":7,"t":9,"q":9,"o":11,"g":9,"f":7,"e":11,"d":9,"c":11,"a":4,"Y":14,"W":11,"V":11,"U":5,"T":4,"S":4,"Q":18,"O":18,"G":18,"C":18,"B":16}},"L":{"d":"58,0v-12,0,-21,-9,-21,-20r0,-212v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,192r98,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-117,0","w":202,"k":{"\u2014":14,"\u2013":14,"\u0153":4,"\u2122":32,"*":29,"-":14,"\\":43,"\u201c":14,"\u201d":14,"\u2018":14,"\u2019":14,"?":22,"&":4,"w":18,"v":22,"t":7,"q":2,"o":4,"g":2,"f":7,"e":4,"d":2,"c":4,"Y":47,"W":36,"V":41,"U":7,"T":36,"Q":14,"O":14,"I":-2,"G":14,"C":14}},"M":{"d":"217,-244v11,-15,38,-7,37,12r0,212v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-151r-52,72v-8,11,-25,11,-33,0r-52,-72r0,151v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-212v-1,-19,26,-27,37,-12r72,100","w":303,"k":{"A":23,"P":18,"O":16,"M":12,"E":18}},"N":{"d":"229,-20v1,20,-27,26,-37,11r-115,-160r0,149v0,11,-9,20,-19,20v-11,0,-20,-9,-20,-20r0,-209v-2,-17,23,-29,35,-13r116,161r0,-148v0,-10,9,-19,20,-19v11,0,20,9,20,19r0,209","w":277,"k":{"Y":16,"U":18,"T":4,"O":18,"N":12,"I":13,"G":18,"E":23,"D":18}},"O":{"d":"26,-130v0,-70,54,-129,124,-129v69,0,123,60,123,129v0,70,-55,130,-123,130v-70,0,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89","w":306,"k":{"\u00c6":14,"}":7,"\u2026":14,"]":7,"\\":14,"\/":14,",":14,".":14,"?":7,")":11,"x":2,"A":14,"Z":14,"Y":22,"X":18,"W":13,"V":14,"U":16,"T":20,"S":2,"O":4,"N":9,"M":14,"L":2,"K":11,"J":11,"I":18,"H":14,"D":11,"C":11,"B":13}},"P":{"d":"199,-175v-1,59,-52,86,-122,77v-5,34,15,98,-20,98v-11,0,-20,-9,-20,-20r0,-212v2,-32,54,-20,85,-20v43,0,77,34,77,77xm77,-212r0,74v40,2,82,1,82,-37v0,-39,-41,-39,-82,-37","w":209,"k":{"\u2039":-4,"\u00c6":25,"\u00ab":-4,"\u0153":2,"\u2026":36,"\/":22,"\u201d":-7,"\u2019":-7,",":36,".":36,"&":7,"y":-4,"w":-4,"v":-4,"u":-2,"A":25,"t":-5,"o":5,"g":8,"f":11,"e":4,"d":8,"c":2,"Z":5,"Y":4,"X":11,"W":2,"V":4,"J":36}},"Q":{"d":"150,-256v111,0,167,152,89,227v-13,14,-29,25,-48,32v31,15,46,21,75,-1v9,-7,24,-6,30,4v20,34,-43,52,-65,52v-34,0,-57,-23,-88,-27v-26,2,-42,19,-54,-4v-6,-11,0,-24,11,-28v-42,-19,-77,-66,-76,-122v0,-72,56,-133,126,-133xm150,-213v-48,0,-84,41,-84,90v0,49,36,90,84,91v47,0,84,-42,84,-91v0,-49,-37,-90,-84,-90","w":303,"k":{"?":7,")":4,"Y":23,"W":13,"V":14,"T":20}},"R":{"d":"166,-116v19,13,25,46,26,74v21,6,15,41,-9,38v-27,-4,-32,-25,-33,-59v-1,-36,-39,-37,-78,-35v-5,34,15,98,-20,98v-11,0,-20,-9,-20,-20r0,-212v2,-32,54,-18,85,-20v71,-5,104,96,49,136xm72,-138v40,2,82,1,82,-37v0,-39,-41,-39,-82,-37r0,74","w":225,"k":{"\u0153":4,"t":-4,"q":2,"o":4,"g":2,"f":-4,"e":4,"d":2,"c":4,"Y":9,"W":5,"V":7,"U":22,"T":7,"O":6,"J":2}},"S":{"d":"70,-188v6,42,76,31,107,51v48,14,60,87,14,116v-19,12,-40,21,-66,21v-39,0,-72,-19,-93,-36v-20,-16,6,-44,24,-29v28,37,141,40,126,-23v-34,-44,-149,-17,-149,-100v0,-44,46,-71,91,-71v35,0,60,17,78,29v8,6,11,17,5,25v-24,26,-53,-25,-83,-17v-25,0,-53,14,-54,34","w":240,"k":{"\u00c6":5,"\\":7,"?":4,"z":2,"y":5,"x":5,"w":4,"v":5,"A":5,"t":2,"f":2,"Z":4,"Y":11,"X":9,"W":9,"V":11,"T":5,"S":4}},"T":{"d":"211,-232v-1,31,-48,17,-77,20r0,192v0,11,-9,20,-20,20v-11,0,-19,-9,-19,-20r0,-192v-29,-3,-76,11,-77,-20v0,-11,9,-20,20,-20r154,0v11,0,19,9,19,20","w":233,"k":{"\u2039":32,"\u00bb":25,"\u00c6":32,"\u00ab":32,"\u203a":25,"\u2014":32,"\u2013":32,"\u0153":49,"\u2026":36,"-":32,"\/":32,";":18,":":18,",":36,".":36,"&":25,"z":40,"y":36,"x":36,"w":36,"v":36,"u":36,"A":34,"t":18,"s":41,"r":36,"q":45,"p":36,"o":49,"n":36,"m":36,"l":5,"j":14,"i":14,"h":7,"g":45,"f":18,"e":49,"d":45,"c":49,"a":49,"Z":7,"S":5,"Q":20,"O":20,"J":40,"G":20,"D":5,"C":20}},"U":{"d":"246,-104v0,57,-46,104,-104,104v-58,0,-104,-47,-104,-104r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128v0,35,29,64,64,64v36,0,64,-29,64,-64r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128","w":293,"k":{"\u00c6":9,"\u2026":5,"\/":5,",":5,".":5,"x":2,"A":18,"Z":16,"X":4,"W":18,"T":11,"R":9,"O":14,"N":5,"M":18,"L":17,"K":18,"J":7,"I":18,"H":18,"F":18,"E":18,"D":11}},"V":{"d":"149,-12v-2,15,-33,15,-36,0r-89,-210v-4,-10,1,-22,11,-26v10,-4,22,1,26,11r70,166r70,-166v4,-10,16,-15,26,-11v10,4,15,16,11,26","w":270,"k":{"\u2039":22,"\u00bb":14,"\u00c6":36,"\u00ab":22,"\u203a":14,"\u2014":14,"\u2013":14,"\u0153":25,"\u2026":43,"-":14,"\/":43,";":7,":":7,",":43,".":43,"&":20,"z":20,"y":14,"x":18,"w":13,"v":14,"u":14,"A":49,"t":7,"s":22,"r":14,"q":23,"p":14,"o":25,"n":14,"m":14,"l":4,"j":7,"i":7,"g":23,"f":9,"e":25,"d":23,"c":25,"a":25,"Z":4,"Y":7,"X":7,"W":4,"V":4,"S":9,"Q":14,"O":14,"J":43,"I":18,"G":14,"E":11,"C":14}},"W":{"d":"150,-12v-3,16,-33,14,-36,0r-88,-210v-4,-10,0,-22,10,-26v10,-4,22,1,26,11r70,166r47,-110v6,-16,31,-16,37,0r47,110r70,-166v4,-10,16,-15,26,-11v10,4,14,16,10,26r-92,217v-9,8,-30,5,-32,-7r-47,-112","w":396,"k":{"\u2039":18,"\u00bb":13,"\u00c6":32,"\u00ab":18,"\u203a":13,"\u2014":13,"\u2013":13,"\u0153":23,"\u2026":36,"-":13,"\/":36,";":5,":":5,",":36,".":36,"&":16,"z":20,"y":13,"x":14,"w":13,"v":13,"u":13,"A":43,"t":9,"s":22,"r":13,"q":22,"p":13,"o":23,"n":13,"m":13,"l":4,"j":5,"i":5,"g":22,"f":11,"e":23,"d":22,"c":23,"a":25,"Z":4,"Y":7,"X":5,"W":4,"V":4,"S":7,"Q":13,"O":13,"J":38,"I":18,"G":13,"E":7,"C":13}},"X":{"d":"213,-245v9,6,11,18,5,27r-69,93r69,94v15,22,-18,42,-32,23r-61,-83r-61,83v-6,9,-18,11,-27,4v-9,-6,-11,-18,-5,-27r69,-94r-69,-93v-6,-9,-4,-21,5,-27v9,-7,21,-5,27,4r61,83r61,-83v7,-9,18,-11,27,-4","w":259,"k":{"\u2039":18,"\u00bb":7,"\u00ab":18,"\u203a":7,"\u2014":18,"\u2013":18,"\u0153":16,"-":18,"?":5,"&":4,"y":14,"w":14,"v":18,"u":7,"A":18,"t":7,"q":14,"o":16,"l":4,"j":4,"i":4,"g":14,"f":7,"e":16,"d":14,"c":16,"a":4,"Y":7,"W":5,"V":7,"U":18,"S":11,"Q":18,"O":18,"J":4,"I":18,"G":18,"E":16,"C":18}},"Y":{"d":"208,-246v9,6,11,19,5,28r-74,101r0,97v0,11,-9,20,-20,20v-10,0,-20,-9,-20,-20r0,-97r-73,-101v-7,-9,-5,-22,4,-28v9,-6,22,-4,28,5r61,84r62,-84v7,-9,18,-11,27,-5","w":217,"k":{"\u2039":36,"\u00bb":27,"\u00c6":40,"\u00ab":36,"\u203a":27,"\u2014":29,"\u2013":29,"\u0153":40,"\u2026":47,"-":29,"\/":40,";":14,":":14,",":47,".":47,"&":25,"z":29,"y":22,"x":25,"w":20,"v":22,"u":27,"A":17,"t":11,"s":36,"r":27,"q":38,"p":27,"o":40,"n":27,"m":27,"l":4,"j":7,"i":7,"g":38,"f":14,"e":40,"d":38,"c":40,"a":36,"Z":4,"X":7,"W":7,"V":7,"S":13,"R":-11,"Q":22,"O":22,"L":-18,"J":47,"I":-18,"G":22,"C":22}},"Z":{"d":"201,-252v17,0,25,20,16,32r-132,180r116,0v11,0,20,9,20,20v0,11,-9,20,-20,20r-175,-15v1,-5,-1,-14,4,-16r132,-181r-117,0v-11,0,-19,-9,-19,-20v0,-11,8,-20,19,-20r156,0","w":240,"k":{"\u2039":7,"\u00ab":7,"\u2014":11,"\u2013":11,"\u0153":9,"-":11,"&":5,"y":5,"w":5,"v":7,"q":7,"o":9,"g":7,"f":4,"e":9,"d":7,"c":9,"Z":4,"T":-13,"S":4,"Q":14,"O":14,"G":14,"C":14}},"a":{"d":"14,-90v0,-68,78,-116,134,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-134,-8,-134,-75xm100,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51","w":222,"k":{"*":5,"\\":27,"?":13,"y":-11,"w":7,"v":7,"n":4,"l":-5,"j":-43,"g":-13}},"b":{"d":"53,0v-34,-3,-20,-57,-20,-90r0,-143v0,-10,9,-19,20,-19v33,3,16,55,20,87v56,-40,135,7,135,75v0,68,-78,115,-136,75v-2,9,-9,15,-19,15xm121,-141v-26,0,-48,23,-48,51v0,28,22,51,48,51v26,0,48,-23,48,-51v0,-28,-22,-51,-48,-51","w":237,"k":{"\u00bb":2,"}":5,"\u203a":2,"\u2026":4,"]":7,"*":5,"\\":25,"\u201c":4,"\u2018":4,",":4,".":4,"?":13,")":11,"z":5,"y":9,"x":11,"w":7,"v":9}},"c":{"d":"21,-90v0,-74,93,-117,149,-70v8,6,11,19,4,26v-19,22,-38,-7,-62,-7v-29,0,-53,23,-53,51v0,42,55,68,88,40v8,-6,20,-5,27,4v14,32,-34,45,-62,46v-50,0,-91,-41,-91,-90","w":205,"k":{"\u2039":4,"\u00bb":-4,"\u00ab":4,"\u203a":-4,"\u0153":5,"\\":14,"\u201c":-4,"\u201d":-5,"\u2018":-4,"\u2019":-5,"?":5,")":5,"y":2,"x":4,"w":2,"v":2,"q":4,"o":5,"g":4,"e":5,"d":4,"c":5}},"d":{"d":"197,-90v-4,33,14,87,-20,90v-10,0,-17,-6,-19,-15v-57,40,-136,-6,-136,-75v0,-68,78,-115,135,-75v4,-32,-13,-84,20,-87v11,0,20,9,20,19r0,143xm157,-90v0,-28,-22,-51,-48,-51v-26,0,-48,23,-48,51v0,28,22,51,48,51v26,0,48,-23,48,-51","w":237,"k":{"e":5}},"e":{"d":"173,-24v-52,54,-152,11,-152,-66v0,-49,39,-90,88,-90v48,1,86,36,86,89v0,9,-9,14,-19,14r-114,0v4,35,54,54,84,31v18,-14,44,4,27,22xm109,-146v-31,0,-46,23,-49,38r102,0v-4,-14,-22,-38,-53,-38","w":219,"k":{"}":4,"\u2026":4,"]":7,"*":7,"\\":29,",":4,".":4,"?":14,")":11,"z":5,"y":-11,"x":11,"w":9,"v":9,"t":14,"r":8}},"f":{"d":"107,-212v-17,-1,-11,3,-14,25v17,-2,30,5,30,20v0,15,-13,22,-30,20r0,127v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-127v-17,2,-30,-6,-30,-20v0,-14,13,-22,30,-20v-2,-40,16,-66,54,-65v11,0,20,8,20,19v0,11,-9,21,-20,21","w":130,"k":{"\u2039":5,"}":-11,"\u00ab":5,"\u0153":4,"\u2026":16,"\u2122":-20,"]":-7,"*":-11,"\\":-11,"\/":16,"\u201c":-11,"\u201d":-13,"\u2018":-11,"\u2019":-13,",":16,".":16,"?":-13,")":-11,"z":4,"q":4,"o":4,"g":4,"e":4,"d":4,"c":4,"a":5}},"g":{"d":"22,-89v0,-68,77,-117,134,-76v3,-21,38,-18,38,4r0,139v1,60,-65,106,-124,77v-9,-4,-13,-15,-8,-25v10,-20,28,-5,46,-4v23,0,42,-17,47,-39v-57,39,-133,-9,-133,-76xm108,-37v28,0,48,-22,48,-52v0,-28,-20,-53,-48,-52v-27,0,-48,25,-48,52v0,29,21,52,48,52","w":237,"k":{"\\":18}},"h":{"d":"112,-140v-51,0,-38,69,-39,120v0,28,-40,24,-40,0r0,-212v0,-11,9,-20,20,-20v32,2,17,52,20,82v53,-30,122,12,117,69v-3,35,15,95,-19,101v-52,-11,18,-140,-59,-140","w":220,"k":{"*":5,"\\":27,"?":11,"y":5,"w":5,"v":7,"a":-14}},"i":{"d":"53,-180v11,0,20,8,20,20r0,141v0,11,-9,19,-20,19v-11,0,-19,-8,-19,-19r0,-141v0,-12,8,-20,19,-20xm53,-252v14,0,20,11,20,27v0,11,-9,20,-20,20v-14,0,-19,-12,-19,-28v0,-11,8,-19,19,-19","w":101,"k":{"l":8}},"j":{"d":"38,-205v-13,-1,-20,-12,-20,-27v0,-12,9,-20,20,-20v13,0,20,11,20,27v0,10,-9,20,-20,20xm18,64v-12,0,-20,-8,-20,-20v0,-10,8,-19,20,-19r0,-185v0,-11,9,-20,19,-20v11,0,20,9,20,20r0,185v0,21,-17,39,-39,39","w":89,"k":{"a":7}},"k":{"d":"53,0v-11,0,-20,-9,-20,-20r0,-212v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,124r74,-73v8,-8,20,-8,28,0v8,8,8,20,0,28r-54,54r56,66v12,13,-1,33,-16,33v-6,0,-11,-2,-15,-7r-53,-64r-20,20v0,24,3,51,-20,51","w":201,"k":{"\u2039":7,"\u00bb":4,"\u00ab":7,"\u203a":4,"\u2014":7,"\u2013":7,"\u0153":9,"-":7,"\\":14,"y":5,"w":7,"v":7,"u":4,"t":4,"q":9,"o":9,"g":9,"e":9,"d":9,"c":9,"a":4}},"l":{"d":"36,-232v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,212v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-212","w":89,"k":{"y":-23,"e":-16}},"m":{"d":"221,-141v-52,0,-34,73,-37,122v0,10,-9,19,-19,19v-53,0,18,-141,-57,-141v-53,0,-28,80,-37,129v-3,18,-38,14,-38,-7r0,-142v0,-20,31,-26,37,-8v31,-20,74,-10,95,14v40,-50,137,-17,131,51v-3,36,16,97,-19,104v-50,-12,18,-141,-56,-141","w":342,"k":{"*":5,"\\":27,"?":11,"y":5,"w":5,"v":7}},"n":{"d":"72,-19v0,11,-9,20,-19,19v-37,-4,-14,-69,-20,-105v3,-29,-11,-74,20,-75v8,0,14,4,17,11v49,-31,119,9,114,64v-3,36,16,98,-19,105v-51,-12,20,-141,-57,-141v-51,0,-36,73,-36,122","w":220,"k":{"*":5,"\\":27,"?":11,"y":5,"w":5,"v":7,"d":7}},"o":{"d":"112,1v-50,0,-87,-41,-87,-91v0,-48,38,-90,87,-90v48,0,85,43,85,90v0,49,-37,91,-85,91xm112,-141v-29,0,-48,22,-48,51v0,29,18,52,48,52v28,0,47,-24,47,-52v0,-28,-20,-50,-47,-51","w":225,"k":{"\u00bb":4,"}":5,"\u203a":4,"\u2026":7,"]":7,"*":7,"\\":29,"\u201c":7,"\u2018":7,",":7,".":7,"?":18,")":11,"z":7,"y":-16,"x":13,"w":14,"v":11,"u":6,"t":7,"r":7,"f":13}},"p":{"d":"53,68v-10,0,-20,-10,-20,-20r0,-209v-1,-22,37,-25,39,-4v57,-40,136,6,136,75v0,68,-78,115,-135,75v-4,31,13,80,-20,83xm121,-141v-26,0,-48,23,-48,51v0,28,22,51,48,51v26,0,48,-23,48,-51v0,-28,-22,-51,-48,-51","w":237,"k":{"\u00bb":2,"}":5,"\u203a":2,"\u2026":4,"]":7,"*":5,"\\":25,"\u201c":4,"\u2018":4,",":4,".":4,"?":13,")":11,"z":5,"y":9,"x":11,"w":7,"v":9,"l":7,"i":11,"e":4}},"q":{"d":"177,67v-33,-2,-16,-52,-20,-82v-57,40,-135,-6,-135,-75v0,-68,78,-115,136,-75v3,-23,39,-18,39,4r0,209v0,10,-9,19,-20,19xm157,-90v0,-28,-21,-51,-48,-51v-27,0,-49,24,-49,51v0,28,22,51,49,51v27,0,48,-23,48,-51","w":237,"k":{"\\":18}},"r":{"d":"72,-158v11,-18,72,-38,72,-3v0,10,-8,19,-19,19v-30,-1,-49,37,-53,55v-6,31,14,87,-19,87v-10,0,-20,-9,-20,-19r0,-142v0,-10,10,-19,20,-19v12,0,20,10,19,22","w":158,"k":{"\u2039":4,"\u00ab":4,"\u0153":9,"\u2026":32,"*":-7,"\\":11,"\/":27,"\u201c":-7,"\u201d":-13,"\u2018":-7,"\u2019":-13,",":32,".":32,"z":4,"q":9,"o":9,"e":18,"d":9,"c":9,"a":9}},"s":{"d":"63,-127v25,26,98,12,98,71v1,64,-103,69,-134,31v-8,-6,-8,-18,-2,-26v27,-24,54,32,91,6v19,-46,-91,-14,-91,-82v0,-58,90,-65,120,-33v9,6,10,17,5,26v-23,27,-62,-35,-87,7","w":177,"k":{"\u2039":4,"}":4,"\u00ab":4,"]":5,"\\":27,"\u201c":4,"\u2018":4,"?":13,")":7,"z":4,"y":-13,"x":9,"w":5,"v":7,"t":-5,"s":4}},"t":{"d":"85,-180v17,-2,29,6,29,20v0,14,-12,22,-29,20r0,100v11,0,20,9,20,20v0,11,-9,20,-20,20v-58,-1,-36,-85,-40,-140v-17,2,-30,-5,-30,-20v0,-15,13,-22,30,-20v2,-29,-9,-72,21,-72v29,0,17,45,19,72","w":144,"k":{"\u2039":4,"\u00ab":4,"\u0153":5,"\\":14,"\u201d":-4,"\u2019":-4,"t":23,"r":25,"q":5,"o":5,"h":7,"g":5,"e":14,"d":5,"c":5,"a":11}},"A":{"d":"209,-1v-33,6,-31,-39,-43,-58r-88,0v-12,21,-10,63,-43,58v-10,-4,-16,-16,-12,-26r80,-212v6,-17,32,-17,38,0r80,212v4,10,-2,22,-12,26xm93,-99r58,0r-29,-77","w":232,"k":{"\u2039":7,"\u00ab":7,"\u2014":14,"\u2013":14,"\u0153":9,"\u2122":36,"*":36,"-":14,"\\":43,"\u201c":29,"\u201d":29,"\u2018":29,"\u2019":29,"?":22,"y":4,"w":16,"v":22,"u":4,"t":11,"q":9,"o":9,"g":9,"f":7,"e":9,"d":9,"c":9,"Z":-13,"Y":27,"W":29,"V":32,"U":9,"T":36,"S":6,"O":14,"H":7,"G":12,"C":14}},"u":{"d":"181,-75v0,41,-35,75,-76,75v-41,0,-75,-34,-75,-75v0,-36,-16,-98,19,-105v52,12,-20,140,56,142v53,1,35,-73,38,-123v0,-10,7,-19,18,-19v36,0,20,69,20,105","w":220,"k":{"\\":18,"n":9,"l":11}},"v":{"d":"117,-12v-3,14,-32,15,-35,0r-59,-139v-4,-10,1,-21,11,-25v9,-4,20,1,24,11r41,98r42,-98v4,-10,15,-15,24,-11v10,4,15,15,11,25","w":209,"k":{"\u2039":11,"\u00bb":5,"}":4,"\u00ab":11,"\u203a":5,"\u2014":5,"\u2013":5,"\u0153":11,"\u2026":31,"]":7,"-":5,"\\":18,"\/":25,",":31,".":31,"?":4,"z":2,"y":5,"x":4,"w":5,"v":5,"s":7,"q":9,"o":11,"g":9,"e":11,"d":9,"c":11,"a":9}},"w":{"d":"119,-12v-4,15,-29,14,-35,0r-59,-139v-4,-10,1,-21,11,-25v9,-4,19,1,23,11r43,97r25,-61v5,-14,29,-14,35,0r26,61r42,-97v4,-10,16,-15,25,-11v10,4,14,15,10,25r-66,148v-39,12,-38,-48,-54,-71","w":309,"k":{"\u2039":7,"\u00bb":4,"}":4,"\u00ab":7,"\u203a":4,"\u2014":4,"\u2013":4,"\u0153":9,"\u2026":25,"]":7,"-":4,"\\":18,"\/":22,",":25,".":25,"?":4,"z":2,"y":4,"x":4,"w":4,"v":5,"s":5,"q":7,"o":9,"l":21,"i":22,"g":7,"e":22,"d":7,"c":9,"a":7}},"x":{"d":"132,-170v14,-19,47,2,31,22r-42,59r42,59v15,22,-16,41,-31,22r-36,-49v-17,18,-25,47,-50,57v-15,1,-25,-18,-16,-30r43,-59r-43,-59v-6,-8,-4,-20,4,-26v9,-6,20,-4,26,4r36,48","w":205,"k":{"\u2039":16,"\u00bb":5,"}":4,"\u00ab":16,"\u203a":5,"\u2014":11,"\u2013":11,"\u0153":13,"]":4,"-":11,"\\":18,"?":5,"y":4,"w":4,"v":4,"s":7,"q":11,"o":13,"i":16,"g":11,"e":13,"d":11,"c":13,"a":16}},"y":{"d":"150,-180v35,0,13,69,19,104v14,92,-40,161,-123,128v-10,-4,-14,-15,-9,-25v9,-19,29,-4,46,-3v21,0,39,-14,45,-33v-50,28,-109,-14,-109,-67r0,-85v0,-11,8,-19,18,-19v54,0,-19,141,57,141v52,0,34,-73,37,-122v0,-11,8,-19,19,-19","w":211,"k":{"\u2039":11,"\u00bb":5,"}":4,"\u00ab":11,"\u203a":5,"\u2014":5,"\u2013":5,"\u0153":11,"\u2026":31,"]":7,"-":5,"\\":18,"\/":25,",":31,".":31,"?":4,"z":2,"y":4,"x":4,"w":4,"v":5,"s":7,"q":9,"o":11,"l":11,"g":9,"e":11,"d":9,"c":11,"a":9}},"z":{"d":"145,-180v16,-1,23,19,15,30r-81,112v31,4,85,-13,85,19v0,10,-9,19,-19,19r-115,-4v-7,-3,-12,-19,-4,-26r81,-112v-31,-4,-85,13,-85,-19v0,-10,9,-19,19,-19r104,0","w":199,"k":{"\u2039":5,"\u00ab":5,"\u0153":5,"\\":16,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5}},"&":{"d":"81,-74v0,-39,43,-61,89,-55v-11,-32,32,-45,38,-17v6,21,-2,43,-18,51v7,54,-36,93,-86,95v-77,3,-115,-103,-58,-150v-28,-44,7,-102,57,-102v37,0,67,30,67,67v0,11,-9,20,-20,20v-29,-1,-13,-47,-47,-47v-15,0,-27,12,-27,27v0,20,38,42,8,56v-40,19,-30,92,20,89v27,0,48,-20,47,-49v-53,-5,-10,38,-49,45v-14,-2,-21,-10,-21,-30","w":250,"k":{"Y":25,"W":18,"V":22,"T":32,"S":4}},"@":{"d":"215,-79v42,-51,-4,-133,-70,-133v-47,0,-86,39,-86,86v1,54,48,96,107,84v10,-3,21,4,24,14v6,23,-23,29,-45,28v-69,0,-126,-56,-126,-126v0,-69,57,-126,126,-126v70,0,126,57,126,126v0,44,-14,85,-61,89v-17,1,-29,-11,-33,-24v-48,25,-103,-14,-102,-65v0,-39,31,-73,70,-73v56,0,78,53,70,120xm145,-93v17,0,30,-15,30,-33v0,-18,-13,-33,-30,-33v-18,0,-30,15,-30,33v0,18,12,33,30,33","w":352},"(":{"d":"112,34v-92,-3,-96,-133,-77,-218v9,-35,33,-70,77,-70v13,0,22,11,22,23v0,33,-46,13,-50,45v-18,44,-26,174,28,174v13,0,22,10,22,23v0,13,-9,23,-22,23","w":154,"k":{"\u0153":11,"s":5,"q":11,"o":11,"j":-11,"g":7,"e":11,"d":11,"c":11,"Q":11,"O":11,"J":5,"G":11,"C":11}},")":{"d":"130,-110v0,71,-17,140,-86,144v-13,0,-22,-10,-22,-23v0,-13,9,-23,22,-23v37,0,41,-54,41,-98v0,-47,-2,-98,-41,-98v-13,0,-22,-10,-22,-23v0,-12,9,-23,22,-23v70,5,86,71,86,144","w":154},"+":{"d":"114,-36v-30,0,-18,-43,-20,-71v-28,-2,-71,9,-71,-20v0,-29,43,-18,71,-20v2,-27,-10,-70,20,-70v30,0,19,42,21,70v28,2,71,-9,71,20v0,29,-43,18,-71,20v-1,29,8,71,-21,71","w":223},"0":{"d":"115,0v-121,-4,-122,-247,0,-252v119,5,120,247,0,252xm115,-40v67,-7,67,-165,0,-172v-67,6,-69,166,0,172","w":255,"k":{"\/":13,",":7,".":7,"7":11,"3":4,"2":4,"1":2}},"1":{"d":"23,-223v21,-9,59,-48,75,-13r0,216v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-177v-11,8,-31,18,-41,1v-6,-9,-3,-22,6,-27","w":120},"2":{"d":"31,-220v48,-60,158,-26,155,54v-2,62,-64,90,-96,126v34,5,96,-15,96,20v0,11,-9,20,-20,20r-128,0v-16,2,-29,-22,-14,-35r107,-96v31,-27,9,-84,-31,-81v-29,-6,-44,44,-71,20v-8,-7,-5,-19,2,-28","w":212,"k":{"7":5,"4":11}},"3":{"d":"145,-90v0,-26,-23,-50,-48,-49v-16,1,-29,-22,-16,-35r37,-38v-30,-3,-77,12,-79,-20v0,-11,9,-20,20,-20r107,0v19,-1,25,23,14,35r-45,46v28,12,51,47,51,81v0,74,-100,122,-153,63v-8,-8,-9,-21,0,-28v23,-20,40,19,63,14v26,1,49,-23,49,-49","w":219,"k":{"\/":4,"9":2,"7":9,"5":2}},"4":{"d":"157,-245v10,-13,35,-7,35,13r0,145v14,-1,24,8,24,20v0,12,-10,21,-24,20v1,23,2,47,-20,47v-21,0,-20,-25,-19,-47v-41,-2,-92,5,-126,-4v-9,-7,-10,-19,-3,-28xm153,-87r0,-89r-72,89r72,0","w":239,"k":{"\/":7,"9":4,"7":14,"1":7}},"5":{"d":"35,-234v2,-10,9,-18,21,-18r106,0v12,0,21,9,21,21v0,37,-73,14,-110,20r-4,35v61,-17,114,33,114,87v0,73,-99,122,-153,63v-8,-8,-9,-22,0,-29v23,-20,40,20,63,14v25,2,49,-24,49,-48v0,-40,-53,-67,-83,-35v-13,13,-38,4,-35,-17","w":217,"k":{"\/":7,"9":2,"7":11,"3":2,"2":4}},"6":{"d":"24,-78v-6,-90,27,-167,112,-174v11,0,20,8,21,19v1,28,-38,19,-53,31v-11,9,-21,21,-28,35v60,-25,123,20,122,80v0,48,-39,87,-87,87v-45,0,-84,-34,-87,-78xm111,-40v26,0,47,-21,47,-47v0,-26,-21,-48,-47,-48v-26,0,-47,22,-47,48v0,26,21,47,47,47","w":231,"k":{"\/":4,"9":4,"7":9,"3":4,"1":7}},"7":{"d":"43,-252v47,0,121,-19,143,16v0,4,0,8,-1,11r-90,213v-4,10,-14,14,-26,11v-10,-5,-15,-16,-11,-26r78,-185r-93,0v-11,0,-20,-9,-20,-20v0,-11,9,-20,20,-20","w":211,"k":{"\u2014":11,"\u2013":11,"-":11,"\/":50,",":36,".":36,"9":5,"8":4,"6":7,"5":9,"4":31,"3":7,"2":5,"1":-4,"0":7}},"8":{"d":"153,-157v23,15,39,41,39,71v0,47,-39,86,-86,86v-84,0,-116,-118,-48,-157v-30,-38,0,-95,48,-95v46,0,77,58,47,95xm106,-213v-12,0,-20,9,-20,20v0,11,8,21,20,21v11,0,20,-10,20,-21v0,-11,-9,-20,-20,-20xm106,-39v26,0,47,-21,47,-47v0,-26,-21,-46,-47,-46v-26,0,-47,20,-47,46v0,26,21,47,47,47","w":226,"k":{"9":2,"7":4}},"9":{"d":"198,-174v6,90,-27,167,-112,174v-11,0,-20,-8,-21,-19v0,-27,38,-19,53,-31v11,-9,21,-21,28,-35v-60,25,-123,-20,-122,-80v0,-48,39,-87,87,-87v45,0,84,34,87,78xm111,-212v-26,0,-47,21,-47,47v0,26,21,48,47,48v26,0,47,-22,47,-48v0,-26,-21,-47,-47,-47","w":231,"k":{"\/":9,",":4,".":4,"7":9,"5":2,"3":4,"2":4}},"!":{"d":"53,-67v-11,0,-20,-9,-20,-20r0,-145v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,145v0,11,-9,20,-20,20xm53,-47v29,0,25,48,0,47v-13,-1,-20,-11,-20,-27v0,-11,9,-20,20,-20","w":90},"?":{"d":"84,-42v12,0,17,10,17,24v0,10,-7,18,-17,18v-11,0,-18,-10,-18,-24v0,-10,9,-18,18,-18xm159,-176v0,36,-25,65,-58,73v1,19,2,41,-17,41v-23,0,-18,-32,-18,-56v0,-9,9,-18,18,-18v23,0,41,-18,41,-40v0,-41,-59,-55,-76,-21v-5,9,-16,12,-25,7v-26,-31,29,-62,60,-62v42,0,75,34,75,76","w":192},"<":{"d":"28,-109v-8,-7,-7,-25,0,-32r102,-102v9,-9,23,-9,32,0v9,9,9,23,0,32r-85,86r85,86v21,20,-11,54,-32,33","w":223},">":{"d":"175,-141v8,7,7,25,0,32r-102,103v-8,8,-23,8,-32,0v-9,-9,-9,-24,0,-33r85,-86r-85,-86v-9,-9,-9,-23,0,-32v9,-9,23,-9,32,0","w":223},"=":{"d":"108,-93v-27,0,-74,12,-80,-13v5,-25,53,-13,80,-13v7,0,13,6,13,13v0,7,-6,13,-13,13xm108,-134v-27,0,-74,12,-80,-13v7,-24,54,-8,80,-12v7,-1,13,5,13,12v0,7,-6,13,-13,13","w":223},".":{"d":"30,-24v0,-15,11,-27,26,-27v15,0,27,12,27,27v0,15,-12,27,-27,27v-15,0,-26,-12,-26,-27","w":82,"k":{"\u0153":7,"\u201d":14,"\u2019":14,"7":7,"1":18,"0":7,"y":22,"w":25,"v":31,"t":9,"q":4,"o":7,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},",":{"d":"82,-20v0,41,-20,70,-51,72v-15,1,-15,-17,-3,-20v17,-4,25,-16,24,-32v-25,-3,-29,-52,4,-51v16,0,26,12,26,31","w":82,"k":{"\u0153":7,"\u201d":14,"\u2019":14,"7":7,"1":18,"0":7,"y":16,"w":25,"v":31,"t":9,"q":4,"o":7,"j":-5,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},":":{"d":"31,-24v0,-15,12,-27,27,-27v15,0,27,12,27,27v0,15,-12,27,-27,27v-15,0,-27,-12,-27,-27xm31,-167v0,-15,12,-27,27,-27v15,0,27,12,27,27v0,15,-12,26,-27,26v-15,0,-27,-11,-27,-26","w":86,"k":{"Y":14,"W":5,"V":7,"T":18}},";":{"d":"35,-164v0,-18,13,-31,31,-31v18,0,31,13,31,31v0,17,-13,31,-31,31v-18,0,-31,-14,-31,-31xm96,-19v2,44,-24,75,-61,77v-19,0,-17,-21,-3,-24v18,-3,29,-17,28,-34v-31,-4,-34,-61,4,-60v20,0,32,16,32,41","w":86,"k":{"Y":14,"W":5,"V":7,"T":18}},"\u037e":{"d":"35,-164v0,-18,13,-31,31,-31v18,0,31,13,31,31v0,17,-13,31,-31,31v-18,0,-31,-14,-31,-31xm96,-19v2,44,-24,75,-61,77v-19,0,-17,-21,-3,-24v18,-3,29,-17,28,-34v-31,-4,-34,-61,4,-60v20,0,32,16,32,41","w":86},"\u2019":{"d":"84,-222v0,42,-21,69,-52,72v-14,1,-14,-19,-2,-20v17,-5,25,-17,24,-33v-26,-2,-30,-52,4,-51v16,0,26,13,26,32","w":82,"k":{"\u00c6":36,"\u0153":16,"A":36,"s":11,"q":14,"o":16,"g":14,"e":16,"d":14,"c":16,"a":7,"J":36}},"\u2018":{"d":"28,-182v0,-41,20,-69,52,-71v15,-1,14,18,2,19v-17,5,-25,16,-24,32v25,3,29,53,-4,52v-16,0,-26,-13,-26,-32","w":82,"k":{"\u00c6":32,"\u00bf":13,"\u0153":5,"z":4,"A":32,"t":-5,"s":4,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":4,"J":29}},"\u201d":{"d":"84,-222v0,42,-21,69,-52,72v-14,1,-14,-19,-2,-20v17,-5,25,-17,24,-33v-26,-2,-30,-52,4,-51v16,0,26,13,26,32xm167,-222v0,41,-20,69,-51,72v-14,1,-16,-17,-3,-20v17,-4,26,-17,25,-33v-25,-2,-30,-52,3,-51v16,0,26,13,26,32","w":187},"\u201c":{"d":"105,-182v0,-41,20,-69,52,-71v14,-1,14,17,3,19v-17,4,-26,16,-25,32v26,3,30,53,-4,52v-16,0,-26,-13,-26,-32xm22,-182v0,-41,20,-69,52,-71v15,-1,14,18,2,19v-17,5,-25,16,-24,32v25,3,29,53,-4,52v-16,0,-26,-13,-26,-32","w":187,"k":{"\u00c6":32,"\u00bf":13,"\u0153":5,"z":4,"A":32,"t":-5,"s":4,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":4,"J":29}},"\/":{"d":"67,-12v-12,27,-45,6,-36,-15r88,-210v4,-10,16,-15,26,-11v10,4,14,16,10,26","w":151,"k":{"\u00c6":43,"\u0153":29,"\/":61,"9":7,"8":5,"7":4,"6":13,"5":7,"4":34,"3":4,"2":7,"1":-4,"0":13,"z":22,"y":18,"x":18,"w":18,"v":18,"u":18,"A":43,"t":7,"s":31,"r":18,"q":25,"p":18,"o":29,"n":18,"m":18,"g":25,"f":9,"e":29,"d":25,"c":29,"a":23,"Z":7,"S":11,"Q":14,"O":14,"J":47,"G":14,"C":14}},"\\":{"d":"151,-27v5,12,-3,27,-18,27v-8,0,-16,-4,-19,-12r-88,-210v-4,-10,0,-22,10,-26v10,-4,23,1,27,11","w":161,"k":{"y":22,"w":22,"v":25,"t":11,"j":-11,"f":4,"Y":40,"W":36,"V":43,"U":5,"T":32,"Q":14,"O":14,"G":14,"C":14}},"\u00a0":{"w":108},"-":{"d":"113,-89v-33,0,-89,14,-89,-21v0,-35,56,-22,89,-22v12,0,21,10,21,22v0,12,-9,21,-21,21","w":146,"k":{"\u00c6":14,"7":14,"3":4,"1":11,"z":4,"y":5,"x":11,"w":4,"v":5,"A":14,"Z":11,"Y":29,"X":18,"W":13,"V":14,"T":32}},"'":{"d":"25,-156v10,-36,-15,-97,41,-97v10,0,14,9,11,20r-27,80v-3,15,-25,14,-25,-3","w":82},"\"":{"d":"104,-156v8,-37,-15,-97,41,-97v9,0,13,10,10,20r-26,80v-3,16,-28,13,-25,-3xm25,-156v10,-36,-15,-97,41,-97v10,0,13,10,10,20r-26,80v-3,15,-25,14,-25,-3","w":147},"#":{"d":"63,2v-29,0,-14,-38,-12,-60v-34,10,-48,-33,-16,-37r23,0r11,-63v-20,2,-40,-1,-40,-19v0,-20,25,-19,46,-18v6,-22,0,-59,26,-59v29,0,16,38,12,59r57,0v6,-22,-1,-59,26,-59v29,0,16,37,12,59v19,-2,36,1,36,18v0,19,-21,21,-42,19r-11,63v20,-1,39,0,39,18v0,21,-23,20,-45,19v-7,22,-1,60,-27,60v-29,0,-14,-38,-11,-60r-57,0v-7,22,1,60,-27,60xm96,-95r57,0r10,-63r-56,0","w":252},"$":{"d":"22,-46v13,-45,58,9,85,8r0,-71v-53,-14,-77,-33,-77,-74v0,-39,30,-65,75,-69v-1,-13,4,-23,16,-23v12,0,18,10,16,24v25,7,60,9,66,37v0,11,-9,20,-20,20v-17,-5,-33,-17,-48,-19r0,69v55,14,78,35,78,74v0,40,-30,66,-76,70v1,18,2,37,-16,37v-18,0,-17,-20,-16,-38v-27,-3,-51,-13,-73,-28v-6,-4,-10,-9,-10,-17xm135,-36v46,-6,51,-55,0,-66r0,66xm107,-216v-45,6,-50,53,0,64r0,-64","w":227,"k":{"7":4}},"*":{"d":"83,-136v-19,0,-8,-29,-8,-45v-13,7,-39,38,-48,11v5,-16,27,-17,40,-25v-13,-8,-35,-9,-40,-25v9,-26,35,2,48,11v0,0,-11,-46,8,-46v19,0,7,30,7,46v12,-8,38,-38,48,-11v-4,17,-27,16,-40,25v13,9,35,8,40,25v-9,27,-35,-4,-48,-11v0,16,12,45,-7,45","w":154,"k":{"\u00c6":36,"\u0153":7,"A":36,"t":-4,"s":4,"q":5,"o":7,"g":5,"e":7,"d":5,"c":7,"a":4,"J":29}},"[":{"d":"35,25r0,-255v3,-36,61,-22,96,-22v9,0,17,8,17,17v-2,27,-45,14,-71,17r0,231v26,3,69,-10,71,17v-5,31,-60,17,-91,17v-12,0,-22,-10,-22,-22","w":154,"k":{"\u0153":7,"y":4,"x":4,"w":7,"v":7,"s":5,"q":7,"o":7,"j":-11,"e":7,"d":7,"c":7,"a":4,"Q":7,"O":7,"J":4,"G":7,"C":7}},"]":{"d":"132,-230r0,255v-2,37,-60,22,-95,22v-9,0,-17,-8,-17,-17v2,-27,45,-14,71,-17r0,-231v-26,-3,-69,10,-71,-17v5,-31,60,-17,91,-17v12,0,21,10,21,22","w":154},"\u00e5":{"d":"104,-205v-24,0,-46,-20,-46,-45v0,-24,22,-44,46,-44v24,0,46,20,46,45v0,24,-22,44,-46,44xm104,-233v10,0,18,-7,18,-17v0,-9,-8,-17,-18,-17v-10,0,-17,8,-17,18v0,9,7,16,17,16xm18,-90v0,-68,78,-116,134,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-134,-8,-134,-75xm104,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51","w":206},"\u00e6":{"d":"193,-159v52,-52,154,-15,149,66v-1,9,-9,15,-19,15r-117,0v6,34,55,54,86,31v19,-14,45,5,28,23v-32,33,-95,32,-127,0v5,27,-34,32,-38,8v-57,42,-137,-6,-137,-75v0,-70,79,-120,137,-77v3,-22,39,-20,38,4r0,5xm106,-39v27,0,48,-24,48,-52v0,-29,-21,-53,-48,-53v-27,0,-48,24,-48,53v0,28,21,52,48,52xm254,-149v-31,0,-47,24,-50,39r104,0v-4,-15,-22,-39,-54,-39","w":343},"\u00a3":{"d":"138,-215v-37,2,-42,36,-39,77v32,5,87,-14,91,19v-3,33,-59,14,-91,19r0,61r99,0v11,0,20,9,20,20v0,11,-9,19,-20,19r-157,0v-20,1,-23,-26,-5,-31r18,-6r0,-63v-32,9,-41,-35,-12,-38r12,0v-6,-71,18,-118,83,-118v38,0,67,15,77,45v0,12,-10,22,-22,22v-24,0,-28,-28,-54,-26","w":231,"k":{"4":5}},"\u00f0":{"d":"154,-160r-37,-52v-15,6,-27,17,-45,19v-16,2,-18,-21,-4,-27r32,-14v-9,-14,2,-32,17,-32v11,0,16,9,21,16v15,-6,45,-28,51,-1v-2,17,-23,17,-35,24v24,36,63,83,63,134v0,53,-37,97,-99,97v-56,0,-97,-42,-97,-94v0,-72,79,-107,133,-70xm175,-89v0,-30,-24,-54,-57,-54v-33,0,-54,23,-54,54v0,30,23,56,56,56v33,0,55,-25,55,-56","w":226},"\u00f7":{"d":"187,-108r-145,0v-10,0,-19,-9,-19,-19v0,-10,9,-18,19,-18r145,0v10,0,19,8,19,18v0,10,-9,19,-19,19xm114,-226v15,0,26,10,25,25v0,13,-11,24,-25,24v-15,0,-25,-11,-24,-26v0,-13,10,-23,24,-23xm114,-77v15,0,26,11,25,26v0,13,-11,24,-25,24v-15,0,-25,-11,-24,-26v0,-13,10,-24,24,-24","w":223},"\u00f8":{"d":"48,-44v-38,-59,7,-143,74,-141v22,0,43,9,58,23v7,-8,25,-24,37,-16v13,14,-13,29,-20,37v37,60,-9,142,-75,141v-22,0,-42,-9,-58,-23v-8,8,-24,24,-37,16v-13,-13,14,-30,21,-37xm150,-135v-38,-30,-93,15,-72,64xm93,-49v40,29,95,-15,74,-66","w":230},"\u2122":{"d":"90,-244v0,14,-19,8,-32,9r0,82v0,4,-4,9,-9,9v-5,0,-8,-5,-8,-9r0,-82v-17,4,-47,-5,-25,-17r66,0v4,0,8,3,8,8xm158,-206v13,-15,20,-37,38,-46v5,0,8,3,8,8r0,91v0,4,-3,9,-8,9v-5,0,-9,-5,-9,-9r0,-65v-11,10,-18,42,-36,31r-22,-31r0,65v0,4,-4,9,-9,9v-4,0,-8,-5,-8,-9r0,-91v0,-9,11,-10,16,-4","w":248},"\u00a9":{"d":"149,4v-73,0,-130,-58,-130,-130v0,-71,58,-130,131,-130v73,0,130,58,130,130v0,71,-58,130,-131,130xm149,-9v67,0,117,-53,117,-118v0,-64,-50,-116,-116,-116v-67,0,-117,53,-117,118v0,64,50,116,116,116xm205,-85v-27,55,-132,23,-123,-43v-9,-63,94,-96,122,-44v-8,30,-33,-3,-52,-2v-24,2,-43,21,-43,47v0,25,19,45,43,45v18,0,26,-11,41,-16v7,0,12,6,12,13","w":298},"\u00ae":{"d":"75,-130v-35,0,-63,-28,-63,-63v0,-34,28,-63,63,-63v35,0,63,29,63,63v0,34,-28,63,-63,63xm75,-136v31,0,55,-26,55,-57v0,-31,-23,-56,-55,-56v-31,0,-56,25,-56,57v0,31,24,56,56,56xm91,-188v5,6,19,28,6,32v-17,-1,-1,-34,-33,-27v2,12,-1,40,-11,23r0,-62v7,-14,50,-7,47,16v0,7,-4,14,-9,18xm64,-195v21,7,34,-18,13,-21r-13,0r0,21","w":149},"\u00a1":{"d":"53,-185v11,0,20,9,20,20r0,145v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20r0,-145v0,-11,9,-20,20,-20xm53,-252v13,1,20,11,20,27v0,11,-9,20,-20,20v-13,-1,-20,-11,-20,-27v0,-11,9,-20,20,-20","w":90},"\u00a2":{"d":"100,-57v34,16,52,-28,78,-5v12,41,-56,56,-93,41v-5,15,-12,39,-34,30v-21,-10,-7,-35,0,-50v-61,-51,-16,-163,66,-158v8,-16,14,-47,38,-38v20,8,8,33,1,47v13,5,35,20,22,38v-11,15,-28,6,-37,-2xm100,-157v-30,9,-50,44,-32,75","w":209},"\u00df":{"d":"131,1v-23,1,-27,-32,-5,-35v26,-4,42,-16,42,-38v0,-21,-17,-34,-41,-39v-16,-3,-21,-29,-7,-37v38,-11,49,-79,-3,-80v-24,0,-40,18,-40,46r0,163v0,12,-10,21,-22,21v-12,0,-22,-9,-22,-21r0,-162v0,-52,33,-84,86,-84v88,0,100,105,38,130v28,9,55,28,55,64v0,47,-40,71,-81,72","w":223,"k":{"y":4,"x":4,"w":2,"v":4}},"\u2026":{"d":"30,-24v0,-15,11,-27,26,-27v15,0,27,12,27,27v0,15,-12,27,-27,27v-15,0,-26,-12,-26,-27xm133,-24v0,-15,11,-27,26,-27v15,0,27,12,27,27v0,15,-12,27,-27,27v-15,0,-26,-12,-26,-27xm236,-24v0,-15,12,-27,27,-27v15,0,27,12,27,27v0,15,-12,27,-27,27v-15,0,-27,-12,-27,-27","w":244,"k":{"\u0153":7,"y":22,"w":25,"v":31,"t":9,"q":4,"o":7,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"\u201e":{"d":"82,-20v0,41,-20,70,-51,72v-15,1,-15,-17,-3,-20v17,-4,25,-16,24,-32v-25,-3,-29,-52,4,-51v16,0,26,12,26,31xm166,-20v0,42,-19,69,-52,72v-14,0,-14,-17,-3,-20v17,-4,26,-16,25,-32v-26,-2,-30,-52,4,-51v16,0,26,12,26,31","w":147,"k":{"\u0153":7,"y":16,"w":25,"v":31,"t":9,"q":4,"o":7,"j":-5,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"\u0153":{"d":"182,-141v39,-73,169,-46,164,48v-1,9,-9,15,-19,15r-117,0v5,35,56,54,86,31v19,-14,46,5,28,23v-39,40,-116,29,-141,-17v-16,22,-42,43,-74,42v-49,-1,-88,-41,-88,-92v0,-50,38,-93,88,-93v31,0,60,20,73,43xm109,-144v-27,0,-49,25,-49,53v0,28,21,52,49,52v28,0,49,-24,49,-52v0,-28,-22,-53,-49,-53xm258,-149v-31,0,-47,24,-50,39r104,0v-4,-15,-22,-39,-54,-39","w":379,"k":{"}":4,"\u2026":4,"]":7,"*":7,"\\":29,",":4,".":4,"?":14,")":11,"z":5,"y":9,"x":11,"w":9,"v":9}},"\u2022":{"d":"91,-76v-28,0,-51,-22,-51,-51v0,-28,23,-51,51,-51v27,0,51,23,51,52v0,28,-23,50,-51,50","w":169},"\u2013":{"d":"44,-90v-11,0,-20,-9,-20,-20v0,-12,9,-21,20,-21r113,0v11,0,20,9,20,21v0,11,-9,20,-20,20r-113,0","w":190,"k":{"\u00c6":14,"7":14,"3":4,"1":11,"z":4,"y":5,"x":11,"w":4,"v":5,"A":14,"Z":11,"Y":29,"X":18,"W":13,"V":14,"T":32}},"\u02dc":{"d":"80,-229v-14,0,-15,19,-29,19v-7,0,-13,-6,-13,-12v4,-25,18,-42,38,-41v20,0,39,15,52,15v14,0,15,-19,28,-19v7,0,14,6,14,12v-5,23,-18,41,-39,41v-20,0,-38,-15,-51,-15"},"\u0161":{"d":"42,-261v14,-23,43,8,55,18v12,-9,27,-26,46,-26v11,0,12,10,6,16v-17,16,-22,46,-58,41v-27,-4,-35,-31,-49,-49xm63,-127v25,26,98,12,98,71v1,64,-103,69,-134,31v-8,-6,-8,-18,-2,-26v27,-24,54,32,91,6v19,-46,-91,-14,-91,-82v0,-58,90,-65,120,-33v9,6,10,17,5,26v-23,27,-62,-35,-87,7","w":178},"\u2014":{"d":"44,-90v-11,0,-20,-9,-20,-20v0,-12,9,-21,20,-21r246,0v11,0,20,9,20,21v0,11,-9,20,-20,20r-246,0","w":323,"k":{"\u00c6":14,"7":14,"3":4,"1":11,"z":4,"y":5,"x":11,"w":4,"v":5,"A":14,"Z":11,"Y":29,"X":18,"W":13,"V":14,"T":32}},"\u203a":{"d":"24,-157v-1,-18,25,-23,33,-10v16,25,41,42,52,72v-10,30,-35,47,-51,71v-9,15,-34,10,-34,-9v10,-24,30,-40,43,-61v-14,-21,-33,-38,-43,-63","w":111,"k":{"\u00c6":7,"z":7,"y":11,"x":16,"w":7,"v":11,"A":7,"t":4,"s":4,"f":4,"Z":5,"Y":36,"X":18,"W":18,"V":22,"T":32,"S":4}},"\u201a":{"d":"82,-20v0,41,-20,70,-51,72v-15,1,-15,-17,-3,-20v17,-4,25,-16,24,-32v-25,-3,-29,-52,4,-51v16,0,26,12,26,31","w":82,"k":{"\u0153":7,"y":16,"w":25,"v":31,"t":9,"q":4,"o":7,"j":-5,"g":4,"f":5,"e":7,"d":4,"c":7,"Y":47,"W":36,"V":43,"U":5,"T":36,"Q":14,"O":14,"G":14,"C":14}},"\u00aa":{"d":"21,-198v0,-41,47,-69,81,-45v1,-13,23,-11,23,2r0,86v0,15,-22,15,-23,2v-33,26,-81,-4,-81,-45xm73,-167v17,0,29,-14,29,-31v0,-17,-12,-31,-29,-31v-17,0,-29,14,-29,31v0,17,12,31,29,31xm36,-107v-7,0,-13,-5,-13,-12v0,-7,6,-12,13,-12r78,0v6,0,12,5,12,12v0,7,-6,12,-12,12r-78,0","w":140},"\u00ab":{"d":"195,-33v1,18,-25,23,-33,10v-16,-25,-39,-44,-52,-72v12,-28,35,-47,51,-71v9,-15,34,-10,34,9v-9,26,-30,41,-43,62v14,21,33,37,43,62xm104,-33v1,18,-25,24,-33,10v-16,-25,-40,-42,-51,-72v10,-29,35,-47,50,-71v8,-14,35,-11,34,9v-9,26,-30,41,-43,62v14,21,35,36,43,62","w":185,"k":{"\u0153":4,"y":5,"x":5,"w":4,"v":5,"q":2,"o":4,"g":2,"e":4,"d":2,"c":4,"Y":27,"X":7,"W":13,"V":14,"T":25}},"\u00b0":{"d":"87,-137v-32,0,-60,-27,-60,-59v0,-31,28,-58,60,-58v31,0,60,27,60,59v0,31,-29,58,-60,58xm87,-161v19,0,34,-16,34,-35v0,-18,-15,-34,-34,-34v-20,0,-34,16,-34,35v0,18,14,34,34,34","w":162},"{":{"d":"142,49v-67,-17,-70,-39,-70,-96v0,-26,-10,-38,-34,-39v-24,0,-24,-35,0,-35v34,0,33,-31,33,-65v0,-35,15,-57,71,-69v11,-3,20,5,20,15v0,9,-6,13,-10,14v-77,10,-7,109,-77,123v33,9,37,34,37,76v0,24,5,35,40,46v4,1,10,6,10,15v0,10,-9,18,-20,15","w":172,"k":{"\u0153":5,"z":4,"y":4,"x":4,"w":4,"v":4,"s":4,"q":5,"o":5,"j":-13,"g":4,"e":5,"d":5,"c":5,"Q":7,"O":7,"J":4,"G":7,"C":7}},"}":{"d":"39,-255v67,16,70,37,70,95v0,27,10,38,34,39v23,0,24,35,0,35v-34,-1,-34,30,-34,65v0,35,-14,58,-70,70v-11,3,-20,-5,-20,-15v0,-9,6,-14,11,-15v46,-14,39,-31,38,-73v0,-28,14,-41,38,-49v-33,-8,-37,-36,-37,-76v0,-24,-4,-36,-39,-47v-5,-1,-11,-5,-11,-14v0,-10,9,-18,20,-15","w":172},"~":{"d":"72,-100v-16,0,-14,17,-28,18v-7,0,-13,-6,-13,-12v4,-25,18,-41,38,-41v20,0,38,14,51,14v16,0,15,-18,29,-18v7,0,13,6,13,12v-4,25,-18,42,-38,41v-20,0,-39,-14,-52,-14","w":165},"|":{"d":"44,31r0,-303v0,-10,8,-17,17,-17v10,0,17,7,17,17r0,303v0,10,-7,17,-17,17v-9,0,-17,-7,-17,-17","w":102},"\u0192":{"d":"149,-254v33,-10,48,33,17,37v-34,-6,-38,23,-42,52v22,-1,47,-3,47,19v0,24,-31,17,-54,18v-10,54,-9,131,-73,131v-29,0,-32,-34,-6,-37v34,-4,25,-63,35,-94v-32,9,-40,-34,-12,-37r19,0v7,-46,16,-92,69,-89","w":182,"k":{"5":4,"4":11,"1":-11}},"\u00fe":{"w":237},"\u00bf":{"d":"89,-210v-11,0,-18,-10,-18,-24v0,-10,9,-18,18,-18v12,0,18,10,18,24v0,10,-8,18,-18,18xm165,-76v0,76,-109,103,-141,39v-5,-9,-2,-21,6,-25v25,-12,31,33,59,27v23,0,41,-18,41,-41v0,-22,-18,-40,-41,-40v-24,0,-17,-31,-18,-56v0,-10,9,-18,18,-18v19,0,19,21,18,41v33,8,58,37,58,73","w":192,"k":{"y":13,"w":13,"v":16,"t":5,"f":4,"a":-4,"Y":25,"X":4,"W":18,"V":22,"U":5,"T":22,"Q":7,"O":7,"G":7,"C":7}},"\u00c3":{"d":"209,-1v-33,6,-31,-39,-43,-58r-87,0v-12,20,-11,63,-43,58v-10,-4,-16,-16,-12,-26r79,-212v6,-17,32,-17,38,0r80,212v4,10,-2,22,-12,26xm93,-99r59,0r-30,-77xm99,-301v-14,0,-15,19,-29,19v-7,0,-13,-6,-13,-12v4,-25,18,-42,38,-41v20,0,39,15,52,15v14,0,15,-19,28,-19v7,0,14,6,14,12v-5,23,-18,41,-39,41v-20,0,-38,-15,-51,-15","w":239},"\u00c6":{"d":"32,2v-16,0,-24,-17,-16,-31r122,-208v5,-10,12,-15,25,-15r174,0v11,0,19,9,19,20v0,11,-8,20,-19,20r-117,0r0,65r100,0v11,0,20,9,20,20v0,11,-9,20,-20,20r-100,0r0,67r118,0v11,0,20,9,20,20v0,11,-9,20,-20,20r-140,0v-28,1,-22,-34,-22,-61r-95,0v-16,20,-21,56,-49,63xm103,-100r73,0r0,-113r-8,0","w":376,"k":{"\u00ff":4,"\u00fd":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u0153":4,"\u00f8":4,"y":4,"w":4,"v":4,"o":4,"e":4,"d":4,"c":4}},"\u00a7":{"w":227},"\u00d0":{"d":"54,-105v-36,10,-47,-41,-13,-43r13,0v5,-36,-16,-99,20,-104v99,-13,168,41,168,126v0,85,-69,138,-168,126v-36,-5,-14,-69,-20,-105xm94,-212r0,64v38,-11,49,40,15,43r-15,0r0,65v64,7,108,-30,108,-86v0,-54,-44,-94,-108,-86","w":292},"\u00d7":{"d":"195,-187v-9,28,-37,39,-53,60v17,21,44,32,53,60v1,18,-23,26,-34,14r-46,-47v-21,17,-32,44,-60,53v-16,1,-25,-21,-13,-33r47,-46v-17,-21,-44,-32,-53,-61v-1,-18,23,-25,34,-13r46,47v21,-17,32,-44,60,-53v11,0,19,8,19,19","w":223},"\u00d8":{"d":"290,-127v0,103,-127,168,-211,107v-9,13,-39,39,-46,9v2,-15,16,-21,23,-31v-69,-80,-11,-214,102,-214v30,0,58,9,79,24v9,-12,39,-39,46,-10v-2,16,-15,21,-23,32v19,23,30,51,30,83xm158,-216v-70,-3,-109,84,-71,141r120,-125v-14,-10,-30,-16,-49,-16xm108,-51v57,40,136,-5,136,-75v0,-19,-6,-36,-15,-51","w":306},"^":{"d":"91,-225v-14,15,-29,48,-52,49v-12,0,-12,-10,-6,-18v18,-22,49,-86,82,-46v14,17,30,34,38,57v-23,25,-48,-28,-62,-42"},"_":{"d":"8,58v-9,0,-17,-8,-17,-17v0,-9,8,-17,17,-17r218,0v9,0,17,8,17,17v0,9,-8,17,-17,17r-218,0","w":216},"\u00b8":{"d":"122,-4r-22,51v-4,20,-37,8,-39,-5v5,-19,20,-30,29,-46r32,0"},"\u02c6":{"d":"106,-238v-12,9,-26,27,-46,26v-9,0,-11,-11,-5,-16v17,-16,22,-46,58,-41v27,4,34,32,49,49v-14,23,-45,-9,-56,-18"},"\u0160":{"d":"78,-338v20,-1,34,17,46,26v12,-9,27,-26,45,-26v11,0,13,9,6,16v-17,15,-21,45,-57,40v-28,-4,-35,-30,-49,-48v0,-5,4,-8,9,-8xm70,-188v6,42,76,31,107,51v48,14,60,87,14,116v-19,12,-40,21,-66,21v-39,0,-72,-19,-93,-36v-20,-16,6,-44,24,-29v28,37,141,40,126,-23v-34,-44,-149,-17,-149,-100v0,-44,46,-71,91,-71v35,0,60,17,78,29v8,6,11,17,5,25v-24,26,-53,-25,-83,-17v-25,0,-53,14,-54,34","w":230},"\u00a5":{"d":"146,-95r0,26v26,3,71,-11,71,16v0,27,-46,13,-71,16v2,21,-2,39,-21,39v-19,0,-24,-17,-22,-39v-26,-3,-71,11,-71,-16v0,-27,46,-13,71,-16r0,-26v-26,-3,-71,11,-71,-16v0,-24,36,-14,59,-16r-67,-91v-12,-15,-2,-36,17,-36v9,0,16,4,21,12r63,94r64,-93v7,-18,42,-17,41,8v0,6,-2,11,-5,15r-67,91v23,2,59,-8,59,16v0,27,-46,13,-71,16","w":246,"k":{"4":7}},"\u00bb":{"d":"199,-33v1,18,-25,23,-33,10v-16,-25,-39,-44,-52,-72v12,-28,35,-47,51,-71v9,-15,34,-10,34,9v-9,26,-30,41,-43,62v14,21,35,36,43,62xm109,-33v1,18,-25,24,-33,10v-17,-25,-41,-42,-52,-72v10,-30,36,-46,51,-71v9,-14,34,-10,33,9v-8,27,-29,40,-42,62v14,21,33,37,43,62","w":185,"k":{"\u00c6":7,"z":7,"y":11,"x":16,"w":7,"v":11,"A":7,"t":4,"s":4,"f":4,"Z":5,"Y":36,"X":18,"W":18,"V":22,"T":32,"S":4}},"\u00a8":{"d":"48,-229v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm120,-229v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23"},"\u2039":{"d":"72,-167v8,-13,34,-8,33,10v-9,25,-30,41,-43,63v13,21,33,36,42,61v1,19,-24,24,-33,9v-16,-24,-40,-42,-51,-71v11,-30,37,-47,52,-72","w":111,"k":{"\u0153":4,"y":5,"x":5,"w":4,"v":5,"q":2,"o":4,"g":2,"e":4,"d":2,"c":4,"Y":27,"X":7,"W":13,"V":14,"T":25}},"\u0178":{"d":"208,-246v9,6,11,19,5,28r-74,101r0,97v0,11,-9,20,-20,20v-10,0,-20,-9,-20,-20r0,-97r-73,-101v-7,-9,-5,-22,4,-28v9,-6,22,-4,28,5r61,84r62,-84v7,-9,18,-11,27,-5xm60,-301v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm132,-301v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":257},"\u00b4":{"d":"139,-256v-10,21,-44,58,-67,36v11,-19,18,-44,41,-50v12,0,26,7,26,14"},"`":{"d":"126,-220v-23,23,-57,-17,-67,-36v1,-13,36,-21,43,-4v6,14,17,25,24,40"},"\u00c1":{"d":"209,-1v-33,6,-31,-39,-43,-58r-88,0v-12,21,-10,63,-43,58v-10,-4,-16,-16,-12,-26r80,-212v6,-17,32,-17,38,0r80,212v4,10,-2,22,-12,26xm93,-99r58,0r-29,-77xm156,-328v-10,20,-44,58,-66,36v10,-19,17,-44,40,-50v12,0,26,7,26,14","w":232},"\u00c0":{"d":"209,-1v-33,6,-31,-39,-43,-58r-88,0v-12,21,-10,63,-43,58v-10,-4,-16,-16,-12,-26r80,-212v6,-17,32,-17,38,0r80,212v4,10,-2,22,-12,26xm93,-99r58,0r-29,-77xm155,-292v-19,24,-48,-15,-61,-25v-4,-3,-6,-7,-6,-11v1,-13,36,-21,43,-4v6,14,18,24,24,40","w":233},"\u00c2":{"d":"209,-1v-33,6,-31,-39,-43,-58r-87,0v-12,20,-11,63,-43,58v-10,-4,-16,-16,-12,-26r79,-212v6,-17,32,-17,38,0r80,212v4,10,-2,22,-12,26xm93,-99r59,0r-30,-77xm122,-310v-12,9,-26,27,-45,26v-10,0,-13,-10,-6,-16v17,-16,22,-46,58,-41v27,4,35,31,49,49v-14,23,-45,-9,-56,-18","w":239},"\u00c4":{"d":"209,-1v-33,6,-31,-39,-43,-58r-87,0v-12,20,-11,63,-43,58v-10,-4,-16,-16,-12,-26r79,-212v6,-17,32,-17,38,0r80,212v4,10,-2,22,-12,26xm93,-99r59,0r-30,-77xm64,-301v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm136,-301v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":238},"\u00c8":{"d":"58,0v-12,0,-21,-9,-21,-20r0,-212v0,-11,9,-20,21,-20r117,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-98,0r0,66v36,5,98,-15,104,20v-5,36,-68,14,-104,20r0,66r98,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-117,0xm150,-292v-19,24,-48,-15,-60,-25v-14,-12,1,-25,19,-25v25,0,30,32,41,50","w":213},"\u00c9":{"d":"58,0v-12,0,-21,-9,-21,-20r0,-212v0,-11,9,-20,21,-20r117,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-98,0r0,66v36,5,98,-15,104,20v-5,36,-68,14,-104,20r0,66r98,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-117,0xm150,-328v-10,20,-44,58,-66,36v6,-29,43,-70,66,-36","w":213},"\u00ca":{"d":"58,0v-12,0,-21,-9,-21,-20r0,-212v0,-11,9,-20,21,-20r117,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-98,0r0,66v36,5,98,-15,104,20v-5,36,-68,14,-104,20r0,66r98,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-117,0xm116,-310v-12,9,-26,27,-45,26v-10,0,-13,-10,-6,-16v17,-16,22,-46,58,-41v27,4,34,32,49,49v-14,23,-45,-9,-56,-18","w":213},"\u00cb":{"d":"58,0v-12,0,-21,-9,-21,-20r0,-212v0,-11,9,-20,21,-20r117,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-98,0r0,66v36,5,98,-15,104,20v-5,36,-68,14,-104,20r0,66r98,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-117,0xm57,-301v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23xm129,-301v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23","w":241},"\u00cc":{"d":"58,-20v0,11,9,20,20,20v11,0,20,-9,20,-20r0,-212v0,-11,-9,-20,-20,-20v-11,0,-20,9,-20,20r0,212xm111,-292v-19,24,-48,-15,-61,-25v-4,-3,-6,-7,-6,-11v1,-13,36,-21,43,-4v6,14,18,24,24,40","w":125},"\u00cd":{"d":"30,-20v0,11,9,20,20,20v11,0,20,-9,20,-20r0,-212v0,-11,-9,-20,-20,-20v-11,0,-20,9,-20,20r0,212xm84,-328v-12,19,-44,59,-67,36v11,-19,17,-45,41,-50v12,0,26,7,26,14","w":98},"\u00ce":{"d":"37,-20v0,11,9,20,20,20v11,0,20,-9,20,-20r0,-212v0,-11,-9,-20,-20,-20v-11,0,-20,9,-20,20r0,212xm56,-310v-12,9,-26,27,-46,26v-9,0,-11,-11,-5,-16v17,-16,22,-46,58,-41v27,4,34,32,49,49v-14,23,-45,-9,-56,-18","w":98},"\u00cf":{"d":"37,-20v0,11,9,20,20,20v11,0,20,-9,20,-20r0,-212v0,-11,-9,-20,-20,-20v-11,0,-20,9,-20,20r0,212xm-3,-301v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23xm69,-301v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23","w":98},"\u00d1":{"d":"229,-20v1,20,-27,26,-37,11r-115,-160r0,149v0,11,-9,20,-19,20v-11,0,-20,-9,-20,-20r0,-209v-2,-17,23,-29,35,-13r116,161r0,-148v0,-10,9,-19,20,-19v11,0,20,9,20,19r0,209xm109,-301v-14,0,-14,19,-28,19v-7,0,-14,-6,-14,-12v5,-22,17,-41,38,-41v20,0,39,15,52,15v14,0,16,-19,29,-19v7,0,13,6,13,12v-4,25,-18,42,-38,41v-20,0,-39,-15,-52,-15","w":284},"\u00d2":{"d":"26,-130v0,-70,54,-129,124,-129v69,0,123,60,123,129v0,70,-55,130,-123,130v-70,0,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89xm184,-292v-19,24,-48,-15,-61,-25v-4,-3,-6,-7,-6,-11v1,-13,36,-21,43,-4v6,14,18,24,24,40","w":306},"\u00d3":{"d":"26,-130v0,-70,54,-129,124,-129v69,0,123,60,123,129v0,70,-55,130,-123,130v-70,0,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89xm184,-328v-10,21,-44,58,-67,36v11,-19,18,-44,41,-50v12,0,26,7,26,14","w":306},"\u00d4":{"d":"26,-130v0,-70,54,-129,124,-129v69,0,123,60,123,129v0,70,-55,130,-123,130v-70,0,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89xm149,-310v-12,9,-26,27,-45,26v-10,0,-13,-10,-6,-16v17,-16,22,-46,58,-41v27,4,35,31,49,49v-14,23,-45,-9,-56,-18","w":306},"\u00d5":{"d":"26,-130v0,-70,54,-129,124,-129v69,0,123,60,123,129v0,70,-55,130,-123,130v-70,0,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89xm126,-301v-14,0,-15,19,-29,19v-7,0,-13,-6,-13,-12v4,-25,18,-42,38,-41v20,0,39,15,52,15v14,0,15,-19,28,-19v7,0,14,6,14,12v-5,23,-18,41,-39,41v-20,0,-38,-15,-51,-15","w":306},"\u00d6":{"d":"26,-130v0,-70,54,-129,124,-129v69,0,123,60,123,129v0,70,-55,130,-123,130v-70,0,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89xm90,-301v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23xm162,-301v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23","w":306},"\u00d9":{"d":"242,-104v0,57,-46,104,-104,104v-58,0,-105,-47,-105,-104r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128v0,35,30,64,65,64v36,0,64,-29,64,-64r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128xm171,-292v-19,24,-48,-15,-61,-25v-4,-3,-6,-7,-6,-11v1,-13,36,-21,43,-4v6,14,18,24,24,40","w":273},"\u00da":{"d":"242,-104v0,57,-46,104,-104,104v-58,0,-105,-47,-105,-104r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128v0,35,30,64,65,64v36,0,64,-29,64,-64r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128xm171,-328v-10,21,-44,58,-67,36v11,-19,18,-44,41,-50v12,0,26,7,26,14","w":273},"\u00db":{"d":"242,-104v0,57,-46,104,-104,104v-58,0,-105,-47,-105,-104r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128v0,35,30,64,65,64v36,0,64,-29,64,-64r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128xm137,-310v-12,9,-26,27,-46,26v-9,0,-11,-11,-5,-16v17,-16,22,-46,58,-41v27,4,34,32,49,49v-14,23,-45,-9,-56,-18","w":273},"\u00dc":{"d":"242,-104v0,57,-46,104,-104,104v-58,0,-105,-47,-105,-104r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128v0,35,30,64,65,64v36,0,64,-29,64,-64r0,-128v0,-11,9,-20,20,-20v11,0,20,9,20,20r0,128xm78,-301v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm150,-301v0,-13,10,-23,23,-23v13,0,23,10,23,23v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":273},"\u00dd":{"d":"208,-246v9,6,11,19,5,28r-74,101r0,97v0,11,-9,20,-20,20v-10,0,-20,-9,-20,-20r0,-97r-73,-101v-7,-9,-5,-22,4,-28v9,-6,22,-4,28,5r61,84r62,-84v7,-9,18,-11,27,-5xm165,-328v-10,21,-44,58,-67,36v11,-19,18,-44,41,-50v12,0,26,7,26,14","w":257},"\u00e0":{"d":"23,-90v0,-69,77,-116,133,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-133,-7,-133,-75xm108,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51xm150,-213v-19,24,-48,-15,-60,-25v-14,-12,1,-25,19,-25v24,5,30,32,41,50","w":206},"\u00e1":{"d":"23,-90v0,-69,77,-116,133,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-133,-7,-133,-75xm108,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51xm183,-249v-10,21,-44,58,-67,36v10,-19,19,-43,41,-50v12,0,26,7,26,14","w":206},"\u00e2":{"d":"23,-90v0,-69,77,-116,133,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-133,-7,-133,-75xm108,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51xm108,-231v-12,9,-26,26,-45,26v-11,0,-12,-10,-6,-16v16,-16,21,-44,58,-40v28,4,35,31,49,49v-15,21,-45,-9,-56,-19","w":206},"\u00e3":{"d":"23,-90v0,-69,77,-116,133,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-133,-7,-133,-75xm108,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51xm84,-224v-14,0,-14,19,-28,19v-7,0,-14,-6,-14,-12v5,-23,18,-41,39,-41v20,0,38,14,51,14v14,0,16,-18,29,-18v7,0,13,5,13,11v-3,25,-18,42,-38,41v-20,0,-39,-14,-52,-14","w":206},"\u00e4":{"d":"23,-90v0,-69,77,-116,133,-74v3,-21,38,-21,38,3r0,142v0,22,-34,26,-38,4v-57,41,-133,-7,-133,-75xm108,-39v27,0,48,-22,48,-51v0,-29,-21,-51,-48,-51v-28,0,-47,23,-47,51v0,28,19,51,47,51xm49,-228v0,-13,10,-24,23,-24v13,0,24,11,24,24v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23xm121,-228v0,-13,10,-24,23,-24v13,0,24,11,24,24v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23","w":206},"\u00c7":{"d":"67,-130v0,72,93,117,149,69v8,-6,22,-5,29,4v6,9,6,22,-3,29v-81,67,-216,4,-216,-102v0,-105,134,-168,216,-101v22,17,-8,48,-26,33v-55,-47,-149,-3,-149,68xm169,-4r-22,51v-4,20,-37,8,-39,-5v5,-19,19,-30,28,-46r33,0","w":277},"\u00e7":{"d":"21,-90v0,-74,93,-117,149,-70v8,6,11,19,4,26v-19,22,-38,-7,-62,-7v-29,0,-53,23,-53,51v0,42,55,68,88,40v8,-6,20,-5,27,4v14,32,-34,45,-62,46v-50,0,-91,-41,-91,-90xm133,-4r-22,51v-4,20,-37,8,-39,-5v5,-19,19,-30,28,-46r33,0","w":205},"\u00e8":{"d":"173,-24v-52,54,-152,11,-152,-66v0,-49,39,-90,88,-90v48,1,86,36,86,89v0,9,-9,14,-19,14r-114,0v4,35,54,54,84,31v18,-14,44,4,27,22xm109,-146v-31,0,-46,23,-49,38r102,0v-4,-14,-22,-38,-53,-38xm141,-213v-19,24,-48,-15,-61,-25v-4,-3,-6,-7,-6,-11v1,-13,38,-21,43,-3v8,13,19,23,24,39","w":219},"\u00e9":{"d":"173,-24v-52,54,-152,11,-152,-66v0,-49,39,-90,88,-90v48,1,86,36,86,89v0,9,-9,14,-19,14r-114,0v4,35,54,54,84,31v18,-14,44,4,27,22xm109,-146v-31,0,-46,23,-49,38r102,0v-4,-14,-22,-38,-53,-38xm141,-249v-10,20,-44,58,-66,36v9,-21,19,-43,40,-50v12,0,26,7,26,14","w":219},"\u00ea":{"d":"173,-24v-52,54,-152,11,-152,-66v0,-49,39,-90,88,-90v48,1,86,36,86,89v0,9,-9,14,-19,14r-114,0v4,35,54,54,84,31v18,-14,44,4,27,22xm109,-146v-31,0,-46,23,-49,38r102,0v-4,-14,-22,-38,-53,-38xm108,-231v-12,9,-26,26,-45,26v-11,0,-12,-10,-6,-16v16,-16,21,-44,58,-40v28,4,35,31,49,49v-15,21,-45,-9,-56,-19","w":219},"\u00eb":{"d":"174,-24v-52,54,-152,11,-152,-66v0,-49,39,-90,88,-90v47,0,89,38,86,89v-1,9,-9,14,-19,14r-114,0v4,35,54,54,84,31v18,-14,44,4,27,22xm110,-146v-31,0,-46,23,-49,38r102,0v-4,-14,-22,-38,-53,-38xm50,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm122,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":210},"\u00ec":{"d":"42,-180v11,0,20,8,20,20r0,141v0,11,-9,19,-20,19v-11,0,-19,-8,-19,-19r0,-141v0,-12,8,-20,19,-20xm76,-213v-23,23,-57,-17,-67,-36v1,-13,38,-21,43,-3v8,13,17,24,24,39","w":101},"\u00ed":{"d":"37,-180v11,0,20,8,20,20r0,141v0,11,-9,19,-20,19v-11,0,-19,-8,-19,-19r0,-141v0,-12,8,-20,19,-20xm72,-249v-11,20,-44,58,-67,36v7,-27,43,-70,67,-36","w":101},"\u00ee":{"d":"59,-180v11,0,19,8,19,20r0,141v0,11,-8,19,-19,19v-11,0,-20,-8,-20,-19r0,-141v0,-12,9,-20,20,-20xm58,-231v-12,10,-26,26,-45,26v-11,0,-11,-10,-5,-16v16,-16,21,-45,57,-40v27,4,36,30,49,49v-15,21,-45,-9,-56,-19","w":101},"\u00ef":{"d":"57,-180v11,0,20,8,20,20r0,141v0,11,-9,19,-20,19v-11,0,-19,-8,-19,-19r0,-141v0,-12,8,-20,19,-20xm-2,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm70,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":101},"\u00f1":{"d":"109,-141v-73,0,-4,131,-56,141v-36,-6,-13,-70,-19,-105v3,-29,-11,-73,19,-75v8,0,15,4,18,11v49,-31,118,9,113,64v-3,36,16,98,-19,105v-51,-12,19,-141,-56,-141xm85,-224v-14,0,-15,19,-29,19v-7,0,-13,-6,-13,-12v4,-25,18,-42,38,-41v20,0,39,14,52,14v14,0,15,-18,28,-18v7,0,14,5,14,11v0,24,-18,41,-39,41v-20,0,-38,-14,-51,-14","w":220},"\u00f2":{"d":"108,1v-50,0,-87,-41,-87,-91v0,-48,38,-90,87,-90v48,0,85,43,85,90v0,49,-37,91,-85,91xm108,-141v-29,0,-48,22,-48,51v0,29,18,52,48,52v28,0,47,-24,47,-52v0,-28,-20,-50,-47,-51xm140,-213v-23,24,-55,-18,-67,-36v2,-13,37,-20,44,-3v6,14,18,23,23,39","w":230},"\u00f3":{"d":"108,1v-50,0,-87,-41,-87,-91v0,-48,38,-90,87,-90v48,0,85,43,85,90v0,49,-37,91,-85,91xm108,-141v-29,0,-48,22,-48,51v0,29,18,52,48,52v28,0,47,-24,47,-52v0,-28,-20,-50,-47,-51xm139,-249v-10,20,-43,58,-66,36v10,-19,18,-43,40,-50v12,0,26,7,26,14","w":230},"\u00f4":{"d":"108,1v-50,0,-87,-41,-87,-91v0,-48,38,-90,87,-90v48,0,85,43,85,90v0,49,-37,91,-85,91xm108,-141v-29,0,-48,22,-48,51v0,29,18,52,48,52v28,0,47,-24,47,-52v0,-28,-20,-50,-47,-51xm107,-231v-12,9,-26,26,-46,26v-11,0,-12,-10,-5,-16v16,-16,21,-45,57,-40v27,4,36,30,49,49v-14,21,-44,-9,-55,-19","w":230},"\u00f5":{"d":"108,1v-50,0,-87,-41,-87,-91v0,-48,38,-90,87,-90v48,0,85,43,85,90v0,49,-37,91,-85,91xm108,-141v-29,0,-48,22,-48,51v0,29,18,52,48,52v28,0,47,-24,47,-52v0,-28,-20,-50,-47,-51xm83,-224v-14,0,-15,19,-29,19v-7,0,-13,-6,-13,-12v4,-25,18,-42,38,-41v20,0,39,14,52,14v14,0,16,-17,28,-18v7,0,14,5,14,11v-5,23,-17,41,-38,41v-20,0,-39,-14,-52,-14","w":230},"\u00f6":{"d":"108,1v-50,0,-87,-41,-87,-91v0,-48,38,-90,87,-90v48,0,85,43,85,90v0,49,-37,91,-85,91xm108,-141v-29,0,-48,22,-48,51v0,29,18,52,48,52v28,0,47,-24,47,-52v0,-28,-20,-50,-47,-51xm48,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm120,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":230},"\u00f9":{"d":"181,-75v0,41,-35,75,-76,75v-41,0,-75,-34,-75,-75v0,-36,-16,-98,19,-105v52,12,-20,140,56,142v53,1,35,-73,38,-123v0,-10,7,-19,18,-19v36,0,20,69,20,105xm139,-213v-19,24,-48,-15,-61,-25v-4,-3,-6,-7,-6,-11v1,-13,38,-21,43,-3v8,13,19,23,24,39","w":220},"\u00fa":{"d":"181,-75v0,41,-35,75,-76,75v-41,0,-75,-34,-75,-75v0,-36,-16,-98,19,-105v52,12,-20,140,56,142v53,1,35,-73,38,-123v0,-10,7,-19,18,-19v36,0,20,69,20,105xm138,-249v-10,21,-44,58,-67,36v10,-19,19,-43,41,-50v12,0,26,7,26,14","w":220},"\u00fb":{"d":"181,-75v0,41,-35,75,-76,75v-41,0,-75,-34,-75,-75v0,-36,-16,-98,19,-105v52,12,-20,140,56,142v53,1,35,-73,38,-123v0,-10,7,-19,18,-19v36,0,20,69,20,105xm105,-231v-12,9,-26,26,-45,26v-11,0,-12,-10,-6,-16v16,-16,21,-45,58,-40v27,4,36,30,49,49v-15,21,-45,-9,-56,-19","w":220},"\u00fc":{"d":"181,-75v0,41,-35,75,-76,75v-41,0,-75,-34,-75,-75v0,-36,-16,-98,19,-105v52,12,-20,140,56,142v53,1,35,-73,38,-123v0,-10,7,-19,18,-19v36,0,20,69,20,105xm46,-228v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23xm118,-228v0,-13,10,-23,23,-23v13,0,24,10,24,23v0,13,-11,23,-24,23v-13,0,-23,-10,-23,-23","w":220},"\u00fd":{"d":"150,-180v35,0,13,69,19,104v14,92,-40,161,-123,128v-10,-4,-14,-15,-9,-25v9,-19,29,-4,46,-3v21,0,39,-14,45,-33v-50,28,-109,-14,-109,-67r0,-85v0,-11,8,-19,18,-19v54,0,-19,141,57,141v52,0,34,-73,37,-122v0,-11,8,-19,19,-19xm134,-249v-10,20,-44,58,-66,36v10,-19,18,-43,40,-50v12,0,26,7,26,14","w":211},"\u00ff":{"d":"150,-180v35,0,13,69,19,104v14,92,-40,161,-123,128v-10,-4,-14,-15,-9,-25v9,-19,29,-4,46,-3v21,0,39,-14,45,-33v-50,28,-109,-14,-109,-67r0,-85v0,-11,8,-19,18,-19v54,0,-19,141,57,141v52,0,34,-73,37,-122v0,-11,8,-19,19,-19xm35,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23xm107,-228v0,-13,10,-24,23,-24v13,0,23,11,23,24v0,13,-10,23,-23,23v-13,0,-23,-10,-23,-23","w":211},"\u00c5":{"d":"89,-99r58,0r-29,-77xm204,-1v-32,5,-31,-38,-42,-58r-88,0v-12,21,-10,63,-43,58v-10,-4,-16,-16,-12,-26r75,-199v-39,-20,-22,-83,23,-83v44,0,63,63,24,83r75,199v4,10,-2,22,-12,26xm117,-247v10,0,18,-8,18,-17v0,-9,-8,-17,-18,-17v-10,0,-17,8,-17,17v0,9,7,17,17,17","w":232},"\u0152":{"d":"26,-130v0,-70,54,-129,124,-129v34,0,67,16,88,40v-2,-18,3,-33,19,-33r118,0v10,0,20,9,20,20v-8,38,-78,13,-117,20r0,66v36,5,98,-15,103,20v-5,36,-68,14,-103,20r0,66r97,0v10,0,20,9,20,20v0,11,-10,20,-20,20r-118,0v-19,0,-20,-20,-19,-40v-23,22,-53,41,-88,40v-70,-1,-123,-59,-124,-130xm150,-41v45,0,81,-41,81,-89v0,-47,-35,-88,-81,-88v-47,0,-83,41,-83,88v0,48,36,89,83,89","w":519}}});;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;

/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */

;(function($){ // $ will refer to jQuery within this closure

	$.fn.supersubs = function(options){
		var opts = $.extend({}, $.fn.supersubs.defaults, options);
		// return original object to support chaining
		return this.each(function() {
			// cache selections
			var $$ = $(this);
			// support metadata
			var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
			// get the font size of menu.
			// .css('fontSize') returns various results cross-browser, so measure an em dash instead
			var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
				'padding' : 0,
				'position' : 'absolute',
				'top' : '-999em',
				'width' : 'auto'
			}).appendTo($$).width(); //clientWidth is faster, but was incorrect here
			// remove em dash
			$('#menu-fontsize').remove();
			// cache all ul elements
			$ULs = $$.find('ul');
			// loop through each ul in menu
			$ULs.each(function(i) {	
				// cache this ul
				var $ul = $ULs.eq(i);
				// get all (li) children of this ul
				var $LIs = $ul.children();
				// get all anchor grand-children
				var $As = $LIs.children('a');
				// force content to one line and save current float property
				var liFloat = $LIs.css('white-space','nowrap').css('float');
				// remove width restrictions and floats so elements remain vertically stacked
				var emWidth = $ul.add($LIs).add($As).css({
					'float' : 'none',
					'width'	: 'auto'
				})
				// this ul will now be shrink-wrapped to longest li due to position:absolute
				// so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
				.end().end()[0].clientWidth / fontsize;
				// add more width to ensure lines don't turn over at certain sizes in various browsers
				emWidth += o.extraWidth;
				// restrict to at least minWidth and at most maxWidth
				if (emWidth > o.maxWidth)		{ emWidth = o.maxWidth; }
				else if (emWidth < o.minWidth)	{ emWidth = o.minWidth; }
				emWidth += 'em';
				// set ul to width in ems
				$ul.css('width',emWidth);
				// restore li floats to avoid IE bugs
				// set li width to full width of this ul
				// revert white-space to normal
				$LIs.css({
					'float' : liFloat,
					'width' : '100%',
					'white-space' : 'normal'
				})
				// update offset position of descendant ul to reflect new width of parent
				.each(function(){
					var $childUl = $('>ul',this);
					var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';
					$childUl.css(offsetDirection,emWidth);
				});
			});
			
		});
	};
	// expose defaults
	$.fn.supersubs.defaults = {
		minWidth		: 9,		// requires em unit.
		maxWidth		: 25,		// requires em unit.
		extraWidth		: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
	};
	
})(jQuery); // plugin code ends
;
/*
 * jQuery UI 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.3",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(j,k){return this.each(function(){if(!k){if(!j||c.filter(j,[this]).length){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")})}}return i.call(c(this),j,k)})},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;
/*
 * jQuery UI Datepicker 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	ui.core.js
 */(function($){$.extend($.ui,{datepicker:{version:"1.7.3"}});var PROP_NAME="datepicker";function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dateFormat:"mm/dd/yy",firstDay:0,isRTL:false};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,showMonthAfterYear:false,yearRange:"-10:+10",showOtherMonths:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"normal",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",log:function(){if(this.debug){console.log.apply("",arguments)}},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){target.id="dp"+(++this.uuid)}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([:\[\]\.])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==target){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(target)}return false})}input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst)},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst));this._updateDatepicker(inst);this._updateAlternate(inst)},_dialogDatepicker:function(input,dateText,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id="dp"+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" size="1" style="position: absolute; top: -100px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});this._dialogInput.val(dateText);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var browserHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",this._pos[0]+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker(null)}var date=this._getDateDatepicker(target);extendRemove(inst.settings,settings);this._setDateDatepicker(target,date);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker(null,"");break;case 13:var sel=$("td."+$.datepicker._dayOverClass+", td."+$.datepicker._currentClass,inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}else{$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"))}return false;break;case 27:$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"));break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);var beforeShow=$.datepicker._get(inst,"beforeShow");extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepicker._hideDatepicker(null,"");$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.rangeStart=null;inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim")||"show";var duration=$.datepicker._get(inst,"duration");var postProcess=function(){$.datepicker._datepickerShowing=true;if($.browser.msie&&parseInt($.browser.version,10)<7){$("iframe.ui-datepicker-cover").css({width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4})}};if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim](duration,postProcess)}if(duration==""){postProcess()}if(inst.input[0].type!="hidden"){inst.input[0].focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var dims={width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4};var self=this;inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({width:dims.width,height:dims.height}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).bind("mouseover",function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}else{inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst.input&&inst.input[0].type!="hidden"&&inst==$.datepicker._curInst){$(inst.input[0]).focus()}},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)+$(document).scrollLeft();var viewHeight=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0;offset.top-=(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(offset.top+dpHeight+inputHeight*2-viewHeight):0;return offset},_findPos:function(obj){while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){obj=obj.nextSibling}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input,duration){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(inst.stayOpen){this._selectDate("#"+inst.id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))}inst.stayOpen=false;if(this._datepickerShowing){duration=(duration!=null?duration:this._get(inst,"duration"));var showAnim=this._get(inst,"showAnim");var postProcess=function(){$.datepicker._tidyDialog(inst)};if(duration!=""&&$.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(duration==""?"hide":(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide")))](duration,postProcess)}if(duration==""){this._tidyDialog(inst)}var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}this._curInst=null},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if(($target.parents("#"+$.datepicker._mainDivId).length==0)&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker(null,"")}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){inst.input[0].focus()}inst._selectingMonthYear=!inst._selectingMonthYear},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;if(inst.stayOpen){inst.endDay=inst.endMonth=inst.endYear=null}this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));if(inst.stayOpen){inst.rangeStart=this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));this._updateDatepicker(inst)}},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);inst.stayOpen=false;inst.endDay=inst.endMonth=inst.endYear=inst.rangeStart=null;this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{if(!inst.stayOpen){this._hideDatepicker(null,this._get(inst,"duration"));this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input[0].focus()}this._lastInput=null}}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());var firstMon=new Date(checkDate.getFullYear(),1-1,4);var firstDay=firstMon.getDay()||7;firstMon.setDate(firstMon.getDate()+1-firstDay);if(firstDay<4&&checkDate<firstMon){checkDate.setDate(checkDate.getDate()-3);return $.datepicker.iso8601Week(checkDate)}else{if(checkDate>new Date(checkDate.getFullYear(),12-1,28)){firstDay=new Date(checkDate.getFullYear()+1,1-1,4).getDay()||7;if(firstDay>4&&(checkDate.getDay()||7)<firstDay-3){return 1}}}return Math.floor(((checkDate-firstMon)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){lookAhead(match);var origSize=(match=="@"?14:(match=="y"?4:(match=="o"?3:2)));var size=origSize;var num=0;while(size>0&&iValue<value.length&&value.charAt(iValue)>="0"&&value.charAt(iValue)<="9"){num=num*10+parseInt(value.charAt(iValue++),10);size--}if(size==origSize){throw"Missing number at position "+iValue}return num};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);var size=0;for(var j=0;j<names.length;j++){size=Math.max(size,names[j].length)}var name="";var iInit=iValue;while(size>0&&iValue<value.length){name+=value.charAt(iValue++);for(var i=0;i<names.length;i++){if(name==names[i]){return i+1}}size--}throw"Unknown name at position "+iInit};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TIMESTAMP:"@",W3C:"yy-mm-dd",formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":var doy=date.getDate();for(var m=date.getMonth()-1;m>=0;m--){doy+=this._getDaysInMonth(date.getFullYear(),m)}output+=formatNumber("o",doy,3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst){var dateFormat=this._get(inst,"dateFormat");var dates=inst.input?inst.input.val():null;inst.endDay=inst.endMonth=inst.endYear=null;var date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);date=defaultDate}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){var date=this._determineDate(this._get(inst,"defaultDate"),new Date());var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date},_determineDate:function(date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset,getDaysInMonth){var date=new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=="string"?offsetString(date,this._getDaysInMonth):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));date=(date&&date.toString()=="Invalid Date"?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,endDate){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._determineDate(date,new Date());inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if(origMonth!=inst.selectedMonth||origYear!=inst.selectedYear){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var stepBigMonths=this._get(inst,"stepBigMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[1]+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery.datepicker._gotoToday(\'#'+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var endDate=inst.endDay?this._daylightSavingAdjust(new Date(inst.endYear,inst.endMonth,inst.endDay)):currentDate;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group ui-datepicker-group-';switch(col){case 0:calender+="first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+="last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+="middle";cornerClass="";break}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead="";for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody="";for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=otherMonth||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":" onclick=\"DP_jQuery.datepicker._selectDay('#"+inst.id+"',"+drawMonth+","+drawYear+', this);return false;"')+">"+(otherMonth?(showOtherMonths?printDate.getDate():"&#xa0;"):(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" ui-state-active":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,secondary,monthNames,monthNamesShort){minDate=(inst.rangeStart&&minDate&&selectedDate<minDate?selectedDate:minDate);var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span> "}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'M');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+((secondary||changeMonth||changeYear)&&(!(changeMonth&&changeYear))?"&#xa0;":"")}if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var year=0;var endYear=0;if(years.length!=2){year=drawYear-10;endYear=drawYear+10}else{if(years[0].charAt(0)=="+"||years[0].charAt(0)=="-"){year=drawYear+parseInt(years[0],10);endYear=drawYear+parseInt(years[1],10)}else{year=parseInt(years[0],10);endYear=parseInt(years[1],10)}}year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-year" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}html+="</select>"}if(showMonthAfterYear){html+=(secondary||changeMonth||changeYear?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._daylightSavingAdjust(new Date(year,month,day));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(this._get(inst,minMax+"Date"),null);return(!checkRange||!inst.rangeStart?date:(!date||inst.rangeStart>date?inst.rangeStart:date))},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var newMinDate=(!inst.rangeStart?null:this._daylightSavingAdjust(new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay)));newMinDate=(newMinDate&&inst.rangeStart<newMinDate?inst.rangeStart:newMinDate);var minDate=newMinDate||this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.7.3";window.DP_jQuery=$})(jQuery);;
/* http://keith-wood.name/timeEntry.html
   Time entry for jQuery v1.4.8.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2007.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(r($){r 1n(){p.Y=[];p.26=[];p.26[\'\']={1c:B,1d:\':\',1o:\'\',Z:[\'3J\',\'3K\'],2C:[\'3L\',\'3M 2D\',\'3N 2D\',\'3O\',\'3P\']};p.1B={2E:\'\',1C:B,27:[1,1,1],2F:0,2G:L,2H:v,2I:v,2J:v,2K:\'3Q.3R\',1p:[20,20,8],2L:\'\',1D:[40,40,16],2M:B,28:[3S,3T],2N:v,2O:v};$.1q(p.1B,p.26[\'\'])}7 m=\'o\';$.1q(1n.2P,{1e:\'3U\',3V:r(a){1E(p.1B,a||{});u p},2Q:r(b,c){7 d=$(b);q(d.2R(p.1e)){u}7 e={};e.1r=$.1q({},c);e.E=0;e.13=0;e.14=0;e.x=0;e.w=$(b);$.y(b,m,e);7 f=p.t(e,\'2K\');7 g=p.t(e,\'3W\');7 h=p.t(e,\'1p\');7 i=p.t(e,\'2E\');7 j=(!f?v:$(\'<15 1F="3X" 2S="3Y: 3Z-41; \'+\'29: 2T(\\\'\'+f+\'\\\') 0 0 2U-2V; \'+\'2a: \'+h[0]+\'O; 2W: \'+h[1]+\'O;\'+($.K.2X&&$.K.42<\'1.9\'?\' 2Y-U: \'+h[0]+\'O; 2Y-43: \'+(h[1]-18)+\'O;\':\'\')+\'"></15>\'));d.44(\'<15 1F="45"></15>\').2Z(i?\'<15 1F="47">\'+i+\'</15>\':\'\').2Z(j||\'\');d.49(p.1e).17(\'2b.o\',p.2c).17(\'4a.o\',p.30).17(\'4b.o\',p.31).17(\'4c.o\',p.32).17(\'4d.o\',p.33);q($.K.2X){d.17(\'w.o\',r(a){$.o.1f(e)})}q($.K.2d){d.17(\'4e.o\',r(a){1G(r(){$.o.1f(e)},1)})}q(p.t(e,\'2G\')&&$.1H.2e){d.2e(p.34)}q(j){j.3a(p.2f).2g(p.1I).4f(p.3b).2h(p.1I).3c(p.2i)}},4g:r(a){p.2j(a,B)},4h:r(a){p.2j(a,L)},2j:r(b,c){7 d=$.y(b,m);q(!d){u}b.3d=c;q(b.2k&&b.2k.1J.1g()==\'15\'){$.o.1K(d,b.2k,(c?5:-1))}$.o.Y=$.3e($.o.Y,r(a){u(a==b?v:a)});q(c){$.o.Y.4i(b)}},1s:r(a){u $.3f(a,p.Y)>-1},4j:r(a,b,c){7 d=$.y(a,m);q(d){q(1h b==\'1L\'){7 e=b;b={};b[e]=c}7 f=p.1i(d);1E(d.1r,b||{});q(f){p.19(d,F J(0,0,0,f[0],f[1],f[2]))}}$.y(a,m,d)},4k:r(b){$w=$(b);q(!$w.2R(p.1e)){u}$w.4l(p.1e).4m(\'.o\');q($.1H.2e){$w.4n()}p.Y=$.3e(p.Y,r(a){u(a==b?v:a)});$w.4o().4p($w);$.4q(b,m)},4r:r(a,b){7 c=$.y(a,m);q(c){p.19(c,b?(1h b==\'4s\'?F J(b.2l()):b):v)}},3g:r(a){7 b=$.y(a,m);7 c=(b?p.1i(b):v);u(!c?v:F J(0,0,0,c[0],c[1],c[2]))},4t:r(a){7 b=$.y(a,m);7 c=(b?p.1i(b):v);u(!c?0:(c[0]*4u+c[1]*2m+c[2])*3h)},2c:r(a){7 b=(a.1J&&a.1J.1g()==\'w\'?a:p);q($.o.P==b||$.o.1s(b)){$.o.1M=B;u}7 c=$.y(b,m);$.o.1M=L;$.o.P=b;$.o.1j=v;7 d=$.o.t(c,\'2N\');1E(c.1r,(d?d.1N(b,[b]):{}));$.y(b,m,c);$.o.1f(c);1G(r(){$.o.1a(c)},10)},30:r(a){$.o.1j=$.o.P;$.o.P=v},31:r(b){7 c=b.1k;7 d=$.y(c,m);q(!$.o.1M){7 e=$.o.t(d,\'1d\').G+2;d.x=0;q(c.3i!=v){1O(7 f=0;f<=I.1l(1,d.V,d.D);f++){7 g=(f!=d.D?(f*e)+2:(d.D*e)+$.o.t(d,\'1o\').G+$.o.t(d,\'Z\')[0].G);d.x=f;q(c.3i<g){C}}}N q(c.1P){7 h=$(b.3j);7 i=c.1P();7 j=r(a){u{4v:2,4w:4,4x:6}[a]||a};7 k=b.3k+1t.2n.1u-(h.1Q().U+Q(j(h.1v(\'4y-U-2a\')),10))-i.2o;1O(7 f=0;f<=I.1l(1,d.V,d.D);f++){7 g=(f!=d.D?(f*e)+2:(d.D*e)+$.o.t(d,\'1o\').G+$.o.t(d,\'Z\')[0].G);i.4z();i.3l(\'2p\',g);d.x=f;q(k<i.4A){C}}}}$.y(c,m,d);$.o.1a(d);$.o.1M=B},32:r(a){q(a.2q>=48){u L}7 b=$.y(a.1k,m);2r(a.2q){A 9:u(a.4B?$.o.W(b,-1,L):$.o.W(b,+1,L));A 35:q(a.3m){$.o.1R(b,\'\')}N{b.x=I.1l(1,b.V,b.D);$.o.R(b,0)}C;A 36:q(a.3m){$.o.19(b)}N{b.x=0;$.o.R(b,0)}C;A 37:$.o.W(b,-1,B);C;A 38:$.o.R(b,+1);C;A 39:$.o.W(b,+1,B);C;A 40:$.o.R(b,-1);C;A 46:$.o.1R(b,\'\');C}u B},33:r(a){7 b=4C.4D(a.3n==4E?a.2q:a.3n);q(b<\' \'){u L}7 c=$.y(a.1k,m);$.o.3o(c,b);u B},34:r(a,b){q($.o.1s(a.1k)){u}b=($.K.3p?-b/I.1S(b):($.K.2s?b/I.1S(b):b));7 c=$.y(a.1k,m);c.w.2b();q(!c.w.T()){$.o.1f(c)}$.o.R(c,b);a.4F()},3b:r(b){7 c=$.o.1b(b);7 d=$.y($.o.1m(c),m);7 e=$.o.t(d,\'2L\');q(e){d.1T=L;7 f=$(c).1Q();7 g=v;$(c).3q().2t(r(){7 a=$(p);q(a.1v(\'1w\')==\'4G\'||a.1v(\'1w\')==\'3r\'){g=a.1Q()}u!g});7 h=$.o.t(d,\'1p\');7 i=$.o.t(d,\'1D\');$(\'<3s 1F="4H" 2S="1w: 3r; U: \'+(f.U-(i[0]-h[0])/2-(g?g.U:0))+\'O; 1x: \'+(f.1x-(i[1]-h[1])/2-(g?g.1x:0))+\'O; 2a: \'+i[0]+\'O; 2W: \'+i[1]+\'O; 29: 4I 2T(\'+e+\') 2U-2V 2u 2u; z-4J: 10;"></3s>\').3a($.o.2f).2g($.o.1I).2h($.o.3t).3c($.o.2i).4K(c)}},1m:r(a){u $(a).4L(\'.\'+$.o.1e)[0]},2i:r(a){7 b=$.o.1b(a);7 c=$.y($.o.1m(b),m);b.4M=$.o.t(c,\'2C\')[$.o.2v(c,a)]},2f:r(a){7 b=$.o.1b(a);7 c=$.o.1m(b);q($.o.1s(c)){u}q(c==$.o.1j){$.o.P=c;$.o.1j=v}7 d=$.y(c,m);$.o.2c(c);7 e=$.o.2v(d,a);$.o.1K(d,b,e);$.o.2w(d,e);$.o.X=v;$.o.1U=L;7 f=$.o.t(d,\'28\');q(e>=3&&f[0]){$.o.X=1G(r(){$.o.2x(d,e)},f[0]);$(b).3u(\'2h\',$.o.2y).3u(\'2g\',$.o.2y)}},2w:r(a,b){q(!a.w.T()){$.o.1f(a)}2r(b){A 0:p.19(a);C;A 1:p.W(a,-1,B);C;A 2:p.W(a,+1,B);C;A 3:p.R(a,+1);C;A 4:p.R(a,-1);C}},2x:r(a,b){q(!$.o.X){u}$.o.P=$.o.1j;p.2w(a,b);p.X=1G(r(){$.o.2x(a,b)},p.t(a,\'28\')[1])},2y:r(a){4N($.o.X);$.o.X=v},3t:r(a){$.o.X=v;7 b=$.o.1b(a);7 c=$.o.1m(b);7 d=$.y(c,m);$(b).4O();d.1T=B},1I:r(a){$.o.X=v;7 b=$.o.1b(a);7 c=$.o.1m(b);7 d=$.y(c,m);q(!$.o.1s(c)){$.o.1K(d,b,-1)}q($.o.1U){$.o.P=$.o.1j}q($.o.P&&$.o.1U){$.o.1a(d)}$.o.1U=B},1b:r(a){u a.1k||a.3j},2v:r(a,b){7 c=p.1b(b);7 d=($.K.3p||$.K.2s?$.o.3v(c):$(c).1Q());7 e=($.K.2s?$.o.3w(c):[1t.2n.1u||1t.3x.1u,1t.2n.1V||1t.3x.1V]);7 f=p.t(a,\'2M\');7 g=(f?3y:b.3k+e[0]-d.U-($.K.2d?2:0));7 h=b.4P+e[1]-d.1x-($.K.2d?2:0);7 i=p.t(a,(a.1T?\'1D\':\'1p\'));7 j=(f?3y:i[0]-1-g);7 k=i[1]-1-h;q(i[2]>0&&I.1S(g-j)<=i[2]&&I.1S(h-k)<=i[2]){u 0}7 l=I.3z(g,h,j,k);u(l==g?1:(l==j?2:(l==h?3:4)))},1K:r(a,b,c){$(b).1v(\'29-1w\',\'-\'+((c+1)*p.t(a,(a.1T?\'1D\':\'1p\'))[0])+\'O 2u\')},3v:r(a){7 b=1W=0;q(a.3A){b=a.2o;1W=a.3B;2z(a=a.3A){7 c=b;b+=a.2o;q(b<0){b=c}1W+=a.3B}}u{U:b,1x:1W}},3w:r(a){7 b=B;$(a).3q().2t(r(){b|=$(p).1v(\'1w\')==\'4Q\'});q(b){u[0,0]}7 c=a.1u;7 d=a.1V;2z(a=a.4R){c+=a.1u||0;d+=a.1V||0}u[c,d]},t:r(a,b){u(a.1r[b]!=v?a.1r[b]:$.o.1B[b])},1f:r(a){7 b=p.1i(a);7 c=p.t(a,\'1C\');q(b){a.E=b[0];a.13=b[1];a.14=b[2]}N{7 d=p.1y(a);a.E=d[0];a.13=d[1];a.14=(c?d[2]:0)}a.V=(c?2:-1);a.D=(p.t(a,\'1c\')?-1:(c?3:2));a.1X=\'\';a.x=I.1l(0,I.3z(I.1l(1,a.V,a.D),p.t(a,\'2F\')));q(a.w.T()!=\'\'){p.2A(a)}},1i:r(a,b){b=b||a.w.T();7 c=p.t(a,\'1d\');7 d=b.4S(c);q(c==\'\'&&b!=\'\'){d[0]=b.1z(0,2);d[1]=b.1z(2,4);d[2]=b.1z(4,6)}7 e=p.t(a,\'Z\');7 f=p.t(a,\'1c\');q(d.G>=2){7 g=!f&&(b.3C(e[0])>-1);7 h=!f&&(b.3C(e[1])>-1);7 i=Q(d[0],10);i=(2B(i)?0:i);i=((g||h)&&i==12?0:i)+(h?12:0);7 j=Q(d[1],10);j=(2B(j)?0:j);7 k=(d.G>=3?Q(d[2],10):0);k=(2B(k)||!p.t(a,\'1C\')?0:k);u p.1y(a,[i,j,k])}u v},1y:r(a,b){7 c=(b!=v);q(!c){7 d=p.1A(a,p.t(a,\'2H\'))||F J();b=[d.1Y(),d.1Z(),d.21()]}7 e=B;7 f=p.t(a,\'27\');1O(7 i=0;i<f.G;i++){q(e){b[i]=0}N q(f[i]>1){b[i]=I.4T(b[i]/f[i])*f[i];e=L}}u b},2A:r(a){7 b=p.t(a,\'1c\');7 c=p.t(a,\'1d\');7 d=(p.22(b?a.E:((a.E+11)%12)+1)+c+p.22(a.13)+(p.t(a,\'1C\')?c+p.22(a.14):\'\')+(b?\'\':p.t(a,\'1o\')+p.t(a,\'Z\')[(a.E<12?0:1)]));p.1R(a,d);p.1a(a)},1a:r(a){7 b=a.w[0];q(a.w.4U(\':4V\')||$.o.P!=b){u}7 c=p.t(a,\'1d\');7 d=c.G+2;7 e=(a.x!=a.D?(a.x*d):(a.D*d)-c.G+p.t(a,\'1o\').G);7 f=e+(a.x!=a.D?2:p.t(a,\'Z\')[0].G);q(b.3D){b.3D(e,f)}N q(b.1P){7 g=b.1P();g.4W(\'2p\',e);g.3l(\'2p\',f-a.w.T().G);g.4X()}q(!b.3d){b.2b()}},22:r(a){u(a<10?\'0\':\'\')+a},1R:r(a,b){q(b!=a.w.T()){a.w.T(b).4Y(\'4Z\')}},W:r(a,b,c){7 d=(a.w.T()==\'\'||a.x==(b==-1?0:I.1l(1,a.V,a.D)));q(!d){a.x+=b}p.1a(a);a.1X=\'\';$.y(a.w[0],m,a);u(d&&c)},R:r(a,b){q(a.w.T()==\'\'){b=0}7 c=p.t(a,\'27\');p.19(a,F J(0,0,0,a.E+(a.x==0?b*c[0]:0)+(a.x==a.D?b*12:0),a.13+(a.x==1?b*c[1]:0),a.14+(a.x==a.V?b*c[2]:0)))},19:r(a,b){b=p.1A(a,b);7 c=p.1y(a,b?[b.1Y(),b.1Z(),b.21()]:v);b=F J(0,0,0,c[0],c[1],c[2]);7 b=p.25(b);7 d=p.25(p.1A(a,p.t(a,\'2I\')));7 e=p.25(p.1A(a,p.t(a,\'2J\')));b=(d&&b<d?d:(e&&b>e?e:b));7 f=p.t(a,\'2O\');q(f){b=f.1N(a.w[0],[p.3g(a.w[0]),b,d,e])}a.E=b.1Y();a.13=b.1Z();a.14=b.21();p.2A(a);$.y(a.w[0],m,a)},25:r(a){q(!a){u v}a.50(51);a.52(0);a.53(0);u a},1A:r(i,j){7 k=r(a){7 b=F J();b.54(b.2l()+a*3h);u b};7 l=r(a){7 b=$.o.1i(i,a);7 c=F J();7 d=(b?b[0]:c.1Y());7 e=(b?b[1]:c.1Z());7 f=(b?b[2]:c.21());q(!b){7 g=/([+-]?[0-9]+)\\s*(s|S|m|M|h|H)?/g;7 h=g.3E(a);2z(h){2r(h[2]||\'s\'){A\'s\':A\'S\':f+=Q(h[1],10);C;A\'m\':A\'M\':e+=Q(h[1],10);C;A\'h\':A\'H\':d+=Q(h[1],10);C}h=g.3E(a)}}c=F J(0,0,10,d,e,f,0);q(/^!/.55(a)){q(c.3F()>10){c=F J(0,0,10,23,59,59)}N q(c.3F()<10){c=F J(0,0,10,0,0,0)}}u c};u(j?(1h j==\'1L\'?l(j):(1h j==\'56\'?k(j):j)):v)},3o:r(a,b){q(b==p.t(a,\'1d\')){p.W(a,+1,B)}N q(b>=\'0\'&&b<=\'9\'){7 c=Q(b,10);7 d=Q(a.1X+b,10);7 e=p.t(a,\'1c\');7 f=(a.x!=0?a.E:(e?(d<24?d:c):(d>=1&&d<=12?d:(c>0?c:a.E))%12+(a.E>=12?12:0)));7 g=(a.x!=1?a.13:(d<2m?d:c));7 h=(a.x!=a.V?a.14:(d<2m?d:c));7 i=p.1y(a,[f,g,h]);p.19(a,F J(0,0,0,i[0],i[1],i[2]));a.1X=b}N q(!p.t(a,\'1c\')){b=b.1g();7 j=p.t(a,\'Z\');q((b==j[0].1z(0,1).1g()&&a.E>=12)||(b==j[1].1z(0,1).1g()&&a.E<12)){7 k=a.x;a.x=a.D;p.R(a,+1);a.x=k;p.1a(a)}}}});r 1E(a,b){$.1q(a,b);1O(7 c 57 b){q(b[c]==v){a[c]=v}}u a}7 n=[\'58\',\'2l\',\'5a\'];$.1H.o=r(c){7 d=5b.2P.5c.5d(5e,1);q(1h c==\'1L\'&&$.3f(c,n)>-1){u $.o[\'3G\'+c+\'1n\'].1N($.o,[p[0]].3H(d))}u p.2t(r(){7 a=p.1J.1g();q(a==\'w\'){q(1h c==\'1L\'){$.o[\'3G\'+c+\'1n\'].1N($.o,[p].3H(d))}N{7 b=($.1H.3I?$(p).3I():{});$.o.2Q(p,$.1q(b,c))}}})};$.o=F 1n()})(5f);',62,326,'|||||||var|||||||||||||||||timeEntry|this|if|function||_get|return|null|input|_field|data||case|false|break|_ampmField|_selectedHour|new|length||Math|Date|browser|true||else|px|_lastInput|parseInt|_adjustField||val|left|_secondField|_changeField|_timer|_disabledInputs|ampmNames||||_selectedMinute|_selectedSecond|span||bind||_setTime|_showField|_getSpinnerTarget|show24Hours|separator|markerClassName|_parseTime|toLowerCase|typeof|_extractTime|_blurredInput|target|max|_getInput|TimeEntry|ampmPrefix|spinnerSize|extend|options|_isDisabledTimeEntry|document|scrollLeft|css|position|top|_constrainTime|substring|_determineTime|_defaults|showSeconds|spinnerBigSize|extendRemove|class|setTimeout|fn|_endSpinner|nodeName|_changeSpinner|string|_focussed|apply|for|createTextRange|offset|_setValue|abs|_expanded|_handlingSpinner|scrollTop|curTop|_lastChr|getHours|getMinutes||getSeconds|_formatNumber|||_normaliseTime|regional|timeSteps|spinnerRepeat|background|width|focus|_doFocus|msie|mousewheel|_handleSpinner|mouseup|mouseout|_describeSpinner|_enableDisable|nextSibling|getTime|60|documentElement|offsetLeft|character|keyCode|switch|safari|each|0px|_getSpinnerRegion|_actionSpinner|_repeatSpinner|_releaseSpinner|while|_showTime|isNaN|spinnerTexts|field|appendText|initialField|useMouseWheel|defaultTime|minTime|maxTime|spinnerImage|spinnerBigImage|spinnerIncDecOnly|beforeShow|beforeSetTime|prototype|_connectTimeEntry|hasClass|style|url|no|repeat|height|mozilla|padding|after|_doBlur|_doClick|_doKeyDown|_doKeyPress|_doMouseWheel||||||mousedown|_expandSpinner|mousemove|disabled|map|inArray|_getTimeTimeEntry|1000|selectionStart|srcElement|clientX|moveEnd|ctrlKey|charCode|_handleKeyPress|opera|parents|absolute|div|_endExpand|one|_findPos|_findScroll|body|99|min|offsetParent|offsetTop|indexOf|setSelectionRange|exec|getDate|_|concat|metadata|AM|PM|Now|Previous|Next|Increment|Decrement|spinnerDefault|png|500|250|hasTimeEntry|setDefaults|spinnerText|timeEntry_control|display|inline||block|version|bottom|wrap|timeEntry_wrap||timeEntry_append||addClass|blur|click|keydown|keypress|paste|mouseover|_enableTimeEntry|_disableTimeEntry|push|_changeTimeEntry|_destroyTimeEntry|removeClass|unbind|unmousewheel|parent|replaceWith|removeData|_setTimeTimeEntry|object|_getOffsetTimeEntry|3600|thin|medium|thick|border|collapse|boundingWidth|shiftKey|String|fromCharCode|undefined|preventDefault|relative|timeEntry_expand|transparent|index|insertAfter|siblings|title|clearTimeout|remove|clientY|fixed|parentNode|split|round|is|hidden|moveStart|select|trigger|change|setFullYear|1900|setMonth|setDate|setTime|test|number|in|getOffset||isDisabled|Array|slice|call|arguments|jQuery'.split('|'),0,{}));
// $Id: date_popup.js,v 1.1.2.4 2010/11/20 12:03:36 karens Exp $

/**
 * Attaches the calendar behavior to all required fields
 */
Drupal.behaviors.date_popup = function (context) {
  for (var id in Drupal.settings.datePopup) {
    $('#'+ id).bind('focus', Drupal.settings.datePopup[id], function(e) {
      if (!$(this).hasClass('date-popup-init')) {
        var datePopup = e.data;
        // Explicitely filter the methods we accept.
        switch (datePopup.func) {
          case 'datepicker':
            $(this)
              .datepicker(datePopup.settings)
              .addClass('date-popup-init')
            $(this).click(function(){
              $(this).focus();
            });
            break;

          case 'timeEntry':
            $(this)
              .timeEntry(datePopup.settings)
              .addClass('date-popup-init')
            $(this).click(function(){
              $(this).focus();
            });
            break;
        }
      }
    });
  }
};
;
// $Id: jquery.form.js,v 1.2 2007/11/19 10:05:48 goba Exp $

/*
 * jQuery Form Plugin
 * version: 2.01 (10/31/2007)
 * @requires jQuery v1.1 or later
 *
 * Examples at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.7.1j=5(o){2(P o==\'5\')o={L:o};o=$.2h({1h:4.X(\'2i\')||1E.2u.3D(),I:4.X(\'2g\')||\'29\'},o||{});3 p={};$.M.N(\'R.2P.2L\',[4,o,p]);2(p.1Q)6 4;3 a=4.1z(o.2r);2(o.V){H(3 n 3u o.V)a.C({z:n,A:o.V[n]})}2(o.28&&o.28(a,4,o)===E)6 4;$.M.N(\'R.K.36\',[a,4,o,p]);2(p.1Q)6 4;3 q=$.1x(a);2(o.I.31()==\'29\'){o.1h+=(o.1h.2Z(\'?\')>=0?\'&\':\'?\')+q;o.V=B}8 o.V=q;3 r=4,U=[];2(o.1r)U.C(5(){r.1r()});2(o.1o)U.C(5(){r.1o()});2(!o.18&&o.14){3 u=o.L||5(){};U.C(5(a){2(4.1N)$(o.14).X("1M",a).1N().D(u,1L);8 $(o.14).2t(a).D(u,1L)})}8 2(o.L)U.C(o.L);o.L=5(a,b){H(3 i=0,F=U.G;i<F;i++)U[i](a,b,r)};3 v=$(\'19:3v\',4).15();3 w=E;H(3 j=0;j<v.G;j++)2(v[j])w=T;2(o.2f||w){2($.1i.3o&&o.2a)$.3l(o.2a,1l);8 1l()}8 $.3h(o);$.M.N(\'R.K.3f\',[4,o]);6 4;5 1l(){3 d=r[0];3 f=$.2h({},$.39,o);3 h=\'35\'+$.7.1j.1a++;3 i=$(\'<2f 33="\'+h+\'" z="\'+h+\'" />\');3 j=i[0];3 k=$.1i.20&&1E.20.30()<9;2($.1i.1X||k)j.2Y=\'2W:E;1w.2U("");\';i.2S({2R:\'2Q\',23:\'-24\',1R:\'-24\'});3 l={Z:B,1b:B,2K:0,2J:\'n/a\',2H:5(){},2F:5(){},2E:5(){}};3 g=f.2B;2(g&&!$.1O++)$.M.N("2x");2(g)$.M.N("2w",[l,f]);3 m=0;3 n=0;1f(5(){i.2v(\'1n\');j.1K?j.1K(\'1J\',12):j.2s(\'1I\',12,E);3 a=d.1H?\'1H\':\'2q\';3 t=r.X(\'14\');r.X({14:h,2g:\'3C\',2i:f.1h});d[a]=\'3B/R-V\';2(f.1G)1f(5(){n=T;12()},f.1G);d.K();r.X(\'14\',t)},10);5 12(){2(m++)6;j.2o?j.2o(\'1J\',12):j.3A(\'1I\',12,E);3 a=T;3z{2(n)3x\'1G\';3 b,O;O=j.2n?j.2n.1w:j.2l?j.2l:j.1w;l.Z=O.1n?O.1n.1M:B;l.1b=O.2k?O.2k:O;2(f.18==\'2j\'||f.18==\'3s\'){3 c=O.1D(\'1C\')[0];b=c?c.A:l.Z;2(f.18==\'2j\')3r("V = "+b);8 $.3q(b)}8 2(f.18==\'2m\'){b=l.1b;2(!b&&l.Z!=B)b=2d(l.Z)}8{b=l.Z}}3p(e){a=E;$.3n(f,l,\'2b\',e)}2(a){f.L(b,\'L\');2(g)$.M.N("3m",[l,f])}2(g)$.M.N("3k",[l,f]);2(g&&!--$.1O)$.M.N("3j");2(f.27)f.27(l,a?\'L\':\'2b\');1f(5(){i.3i();l.1b=B},3g)};5 2d(s,a){2(1E.26){a=25 26(\'3d.3c\');a.3b=\'E\';a.3a(s)}8 a=(25 38()).37(s,\'1A/2m\');6(a&&a.22&&a.22.1e!=\'34\')?a:B}}};$.7.1j.1a=0;$.7.W=5(a){6 4.21().K(1m).D(5(){4.1u=$.7.W.1a++;$.7.W.1t[4.1u]=a;$(":K,19:Y",4).1Z(1s)})};$.7.W.1a=1;$.7.W.1t={};5 1s(e){3 a=4.R;a.Q=4;2(4.I==\'Y\'){2(e.1Y!=S){a.11=e.1Y;a.16=e.2X}8 2(P $.7.1U==\'5\'){3 b=$(4).1U();a.11=e.1V-b.1R;a.16=e.1W-b.23}8{a.11=e.1V-4.2V;a.16=e.1W-4.32}}1f(5(){a.Q=a.11=a.16=B},10)};5 1m(){3 a=4.1u;3 b=$.7.W.1t[a];$(4).1j(b);6 E};$.7.21=5(){4.1T(\'K\',1m);6 4.D(5(){$(":K,19:Y",4).1T(\'1Z\',1s)})};$.7.1z=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1D(\'*\'):c.2T;2(!d)6 a;H(3 i=0,F=d.G;i<F;i++){3 e=d[i];3 n=e.z;2(!n)1v;2(b&&c.Q&&e.I=="Y"){2(!e.1d&&c.Q==e)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16});1v}3 v=$.15(e,T);2(v&&v.1c==1g){H(3 j=0,1S=v.G;j<1S;j++)a.C({z:n,A:v[j]})}8 2(v!==B&&P v!=\'S\')a.C({z:n,A:v})}2(!b&&c.Q){3 f=c.1D("19");H(3 i=0,F=f.G;i<F;i++){3 g=f[i];3 n=g.z;2(n&&!g.1d&&g.I=="Y"&&c.Q==g)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16})}}6 a};$.7.2O=5(a){6 $.1x(4.1z(a))};$.7.2N=5(b){3 a=[];4.D(5(){3 n=4.z;2(!n)6;3 v=$.15(4,b);2(v&&v.1c==1g){H(3 i=0,F=v.G;i<F;i++)a.C({z:n,A:v[i]})}8 2(v!==B&&P v!=\'S\')a.C({z:4.z,A:v})});6 $.1x(a)};$.7.15=5(a){H(3 b=[],i=0,F=4.G;i<F;i++){3 c=4[i];3 v=$.15(c,a);2(v===B||P v==\'S\'||(v.1c==1g&&!v.G))1v;v.1c==1g?$.3e(b,v):b.C(v)}6 b};$.15=5(b,c){3 n=b.z,t=b.I,13=b.1e.1F();2(P c==\'S\')c=T;2(c&&(!n||b.1d||t==\'17\'||t==\'2M\'||(t==\'1q\'||t==\'1B\')&&!b.1p||(t==\'K\'||t==\'Y\')&&b.R&&b.R.Q!=b||13==\'J\'&&b.1y==-1))6 B;2(13==\'J\'){3 d=b.1y;2(d<0)6 B;3 a=[],1k=b.2I;3 e=(t==\'J-2e\');3 f=(e?d+1:1k.G);H(3 i=(e?d:0);i<f;i++){3 g=1k[i];2(g.2c){3 v=$.1i.1X&&!(g.2G[\'A\'].3t)?g.1A:g.A;2(e)6 v;a.C(v)}}6 a}6 b.A};$.7.1o=5(){6 4.D(5(){$(\'19,J,1C\',4).2p()})};$.7.2p=$.7.2D=5(){6 4.D(5(){3 t=4.I,13=4.1e.1F();2(t==\'1A\'||t==\'3w\'||13==\'1C\')4.A=\'\';8 2(t==\'1q\'||t==\'1B\')4.1p=E;8 2(13==\'J\')4.1y=-1})};$.7.1r=5(){6 4.D(5(){2(P 4.17==\'5\'||(P 4.17==\'2C\'&&!4.17.3y))4.17()})};$.7.2A=5(b){2(b==S)b=T;6 4.D(5(){4.1d=!b})};$.7.J=5(b){2(b==S)b=T;6 4.D(5(){3 t=4.I;2(t==\'1q\'||t==\'1B\')4.1p=b;8 2(4.1e.1F()==\'1P\'){3 a=$(4).2z(\'J\');2(b&&a[0]&&a[0].I==\'J-2e\'){a.2y(\'1P\').J(E)}4.2c=b}})}})(3E);',62,227,'||if|var|this|function|return|fn|else|||||||||||||||||||||||||||name|value|null|push|each|false|max|length|for|type|select|submit|success|event|trigger|doc|typeof|clk|form|undefined|true|callbacks|data|ajaxForm|attr|image|responseText||clk_x|cb|tag|target|fieldValue|clk_y|reset|dataType|input|counter|responseXML|constructor|disabled|tagName|setTimeout|Array|url|browser|ajaxSubmit|ops|fileUpload|submitHandler|body|clearForm|checked|checkbox|resetForm|clickHandler|optionHash|formPluginId|continue|document|param|selectedIndex|formToArray|text|radio|textarea|getElementsByTagName|window|toLowerCase|timeout|encoding|load|onload|attachEvent|arguments|innerHTML|evalScripts|active|option|veto|left|jmax|unbind|offset|pageX|pageY|msie|offsetX|click|opera|ajaxFormUnbind|documentElement|top|1000px|new|ActiveXObject|complete|beforeSubmit|GET|closeKeepAlive|error|selected|toXml|one|iframe|method|extend|action|json|XMLDocument|contentDocument|xml|contentWindow|detachEvent|clearFields|enctype|semantic|addEventListener|html|location|appendTo|ajaxSend|ajaxStart|find|parent|enable|global|object|clearInputs|setRequestHeader|getResponseHeader|attributes|getAllResponseHeaders|options|statusText|status|serialize|button|fieldSerialize|formSerialize|pre|absolute|position|css|elements|write|offsetLeft|javascript|offsetY|src|indexOf|version|toUpperCase|offsetTop|id|parsererror|jqFormIO|validate|parseFromString|DOMParser|ajaxSettings|loadXML|async|XMLDOM|Microsoft|merge|notify|100|ajax|remove|ajaxStop|ajaxComplete|get|ajaxSuccess|handleError|safari|catch|globalEval|eval|script|specified|in|file|password|throw|nodeType|try|removeEventListener|multipart|POST|toString|jQuery'.split('|'),0,{}))
;
// $Id: ahah.js,v 1.7.2.1 2008/02/11 14:46:27 goba Exp $

/**
 * Provides AJAX-like page updating via AHAH (Asynchronous HTML and HTTP).
 *
 * AHAH is a method of making a request via Javascript while viewing an HTML
 * page. The request returns a small chunk of HTML, which is then directly
 * injected into the page.
 *
 * Drupal uses this file to enhance form elements with #ahah[path] and
 * #ahah[wrapper] properties. If set, this file will automatically be included
 * to provide AHAH capabilities.
 */

/**
 * Attaches the ahah behavior to each ahah form element.
 */
Drupal.behaviors.ahah = function(context) {
  for (var base in Drupal.settings.ahah) {
    if (!$('#'+ base + '.ahah-processed').size()) {
      var element_settings = Drupal.settings.ahah[base];

      $(element_settings.selector).each(function() {
        element_settings.element = this;
        var ahah = new Drupal.ahah(base, element_settings);
      });

      $('#'+ base).addClass('ahah-processed');
    }
  }
};

/**
 * AHAH object.
 */
Drupal.ahah = function(base, element_settings) {
  // Set the properties for this object.
  this.element = element_settings.element;
  this.selector = element_settings.selector;
  this.event = element_settings.event;
  this.keypress = element_settings.keypress;
  this.url = element_settings.url;
  this.wrapper = '#'+ element_settings.wrapper;
  this.effect = element_settings.effect;
  this.method = element_settings.method;
  this.progress = element_settings.progress;
  this.button = element_settings.button || { };

  if (this.effect == 'none') {
    this.showEffect = 'show';
    this.hideEffect = 'hide';
    this.showSpeed = '';
  }
  else if (this.effect == 'fade') {
    this.showEffect = 'fadeIn';
    this.hideEffect = 'fadeOut';
    this.showSpeed = 'slow';
  }
  else {
    this.showEffect = this.effect + 'Toggle';
    this.hideEffect = this.effect + 'Toggle';
    this.showSpeed = 'slow';
  }

  // Record the form action and target, needed for iFrame file uploads.
  var form = $(this.element).parents('form');
  this.form_action = form.attr('action');
  this.form_target = form.attr('target');
  this.form_encattr = form.attr('encattr');

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ahah = this;
  var options = {
    url: ahah.url,
    data: ahah.button,
    beforeSubmit: function(form_values, element_settings, options) {
      return ahah.beforeSubmit(form_values, element_settings, options);
    },
    success: function(response, status) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof(response) == 'string') {
        response = Drupal.parseJson(response);
      }
      return ahah.success(response, status);
    },
    complete: function(response, status) {
      if (status == 'error' || status == 'parsererror') {
        return ahah.error(response, ahah.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(element_settings.element).bind(element_settings.event, function() {
    $(element_settings.element).parents('form').ajaxSubmit(options);
    return false;
  });
  // If necessary, enable keyboard submission so that AHAH behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(element_settings.element).keypress(function(event) {
      // Detect enter key.
      if (event.keyCode == 13) {
        $(element_settings.element).trigger(element_settings.event);
        return false;
      }
    });
  }
};

/**
 * Handler for the form redirection submission.
 */
Drupal.ahah.prototype.beforeSubmit = function (form_values, element, options) {
  // Disable the element that received the change.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ahah-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ahah-progress ahah-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>')
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ahah.prototype.success = function (response, status) {
  var wrapper = $(this.wrapper);
  var form = $(this.element).parents('form');
  // Manually insert HTML into the jQuery object, using $() directly crashes
  // Safari with long string lengths. http://dev.jquery.com/ticket/1152
  var new_content = $('<div></div>').html(response.data);

  // Restore the previous action and target to the form.
  form.attr('action', this.form_action);
  this.form_target ? form.attr('target', this.form_target) : form.removeAttr('target');
  this.form_encattr ? form.attr('target', this.form_encattr) : form.removeAttr('encattr');

  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').attr('disabled', false);

  // Add the new content to the page.
  Drupal.freezeHeight();
  if (this.method == 'replace') {
    wrapper.empty().append(new_content);
  }
  else {
    wrapper[this.method](new_content);
  }

  // Immediately hide the new content if we're using any effects.
  if (this.showEffect != 'show') {
    new_content.hide();
  }

  // Determine what effect use and what content will receive the effect, then
  // show the new content. For browser compatibility, Safari is excluded from
  // using effects on table rows.
  if (($.browser.safari && $("tr.ahah-new-content", new_content).size() > 0)) {
    new_content.show();
  }
  else if ($('.ahah-new-content', new_content).size() > 0) {
    $('.ahah-new-content', new_content).hide();
    new_content.show();
    $(".ahah-new-content", new_content)[this.showEffect](this.showSpeed);
  }
  else if (this.showEffect != 'show') {
    new_content[this.showEffect](this.showSpeed);
  }

  // Attach all javascript behaviors to the new content, if it was successfully
  // added to the page, this if statement allows #ahah[wrapper] to be optional.
  if (new_content.parents('html').length > 0) {
    Drupal.attachBehaviors(new_content);
  }

  Drupal.unfreezeHeight();
};

/**
 * Handler for the form redirection error.
 */
Drupal.ahah.prototype.error = function (response, uri) {
  alert(Drupal.ahahError(response, uri));
  // Resore the previous action and target to the form.
  $(this.element).parent('form').attr( { action: this.form_action, target: this.form_target} );
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progess-disabled').attr('disabled', false);
};
;
// $Id: progress.js,v 1.20 2008/01/04 11:53:21 goba Exp $

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || "GET";
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  this.element = document.createElement('div');
  this.element.id = id;
  this.element.className = 'progress';
  $(this.element).html('<div class="bar"><div class="filled"></div></div>'+
                       '<div class="percentage"></div>'+
                       '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage +'%');
    $('div.percentage', this.element).html(percentage +'%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer
        pb.timer = setTimeout(function() { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ahahError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = string;

  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};
;
// $Id: textarea.js,v 1.22 2008/01/17 19:31:56 goba Exp $

Drupal.behaviors.textarea = function(context) {
  $('textarea.resizable:not(.textarea-processed)', context).each(function() {
    // Avoid non-processed teasers.
    if ($(this).is(('textarea.teaser:not(.teaser-processed)'))) {
      return false;  
    }
    var textarea = $(this).addClass('textarea-processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
      .parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

    function startDrag(e) {
      staticOffset = textarea.height() - e.pageY;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
      return false;
    }

    function endDrag(e) {
      $(document).unbind("mousemove", performDrag).unbind("mouseup", endDrag);
      textarea.css('opacity', 1);
    }
  });
};
;
(function($) {

/**
 * Initialize editor instances.
 *
 * @todo Is the following note still valid for 3.x?
 * This function needs to be called before the page is fully loaded, as
 * calling tinyMCE.init() after the page is loaded breaks IE6.
 *
 * @param editorSettings
 *   An object containing editor settings for each input format.
 */
Drupal.wysiwyg.editor.init.tinymce = function(settings) {
  // @see #454992: drupal_get_js() must not use 'q' as query string.
  if (tinymce.query == 'q') {
    tinymce.query = '';
  }
  // If JS compression is enabled, TinyMCE is unable to autodetect its global
  // settinge, hence we need to define them manually.
  // @todo Move global library settings somewhere else.
  tinyMCE.baseURL = settings.global.editorBasePath;
  tinyMCE.srcMode = (settings.global.execMode == 'src' ? '_src' : '');
  tinyMCE.gzipMode = (settings.global.execMode == 'gzip');

  // Initialize editor configurations.
  for (var format in settings) {
    if (format == 'global') {
      continue;
    };
    tinyMCE.init(settings[format]);
    if (Drupal.settings.wysiwyg.plugins[format]) {
      // Load native external plugins.
      // Array syntax required; 'native' is a predefined token in JavaScript.
      for (var plugin in Drupal.settings.wysiwyg.plugins[format]['native']) {
        tinymce.PluginManager.load(plugin, Drupal.settings.wysiwyg.plugins[format]['native'][plugin]);
      }
      // Load Drupal plugins.
      for (var plugin in Drupal.settings.wysiwyg.plugins[format].drupal) {
        Drupal.wysiwyg.editor.instance.tinymce.addPlugin(plugin, Drupal.settings.wysiwyg.plugins[format].drupal[plugin], Drupal.settings.wysiwyg.plugins.drupal[plugin]);
      }
    }
  }
};

/**
 * Attach this editor to a target element.
 *
 * See Drupal.wysiwyg.editor.attach.none() for a full desciption of this hook.
 */
Drupal.wysiwyg.editor.attach.tinymce = function(context, params, settings) {
  // Configure editor settings for this input format.
  var ed = new tinymce.Editor(params.field, settings);
  // Reset active instance id on any event.
  ed.onEvent.add(function(ed, e) {
    Drupal.wysiwyg.activeId = ed.id;
  });
  // Make toolbar buttons wrappable (required for IE).
  ed.onPostRender.add(function (ed) {
    var $toolbar = $('<div class="wysiwygToolbar"></div>');
    $('#' + ed.editorContainer + ' table.mceToolbar > tbody > tr > td').each(function () {
      $('<div></div>').addClass(this.className).append($(this).children()).appendTo($toolbar);
    });
    $('#' + ed.editorContainer + ' table.mceLayout td.mceToolbar').append($toolbar);
    $('#' + ed.editorContainer + ' table.mceToolbar').remove();
  });

  // Remove TinyMCE's internal mceItem class, which was incorrectly added to
  // submitted content by Wysiwyg <2.1. TinyMCE only temporarily adds the class
  // for placeholder elements. If preemptively set, the class prevents (native)
  // editor plugins from gaining an active state, so we have to manually remove
  // it prior to attaching the editor. This is done on the client-side instead
  // of the server-side, as Wysiwyg has no way to figure out where content is
  // stored, and the class only affects editing.
  $field = $('#' + params.field);
  $field.val($field.val().replace(/(<.+?\s+class=['"][\w\s]*?)\bmceItem\b([\w\s]*?['"].*?>)/ig, '$1$2'));

  // Attach editor.
  ed.render();
};

/**
 * Detach a single or all editors.
 *
 * See Drupal.wysiwyg.editor.detach.none() for a full desciption of this hook.
 */
Drupal.wysiwyg.editor.detach.tinymce = function(context, params) {
  if (typeof params != 'undefined') {
    var instance = tinyMCE.get(params.field);
    if (instance) {
      instance.save();
      instance.remove();
    }
  }
  else {
    // Save contents of all editors back into textareas.
    tinyMCE.triggerSave();
    // Remove all editor instances.
    for (var instance in tinyMCE.editors) {
      tinyMCE.editors[instance].remove();
    }
  }
};

Drupal.wysiwyg.editor.instance.tinymce = {
  addPlugin: function(plugin, settings, pluginSettings) {
    if (typeof Drupal.wysiwyg.plugins[plugin] != 'object') {
      return;
    }
    tinymce.create('tinymce.plugins.' + plugin, {
      /**
       * Initialize the plugin, executed after the plugin has been created.
       *
       * @param ed
       *   The tinymce.Editor instance the plugin is initialized in.
       * @param url
       *   The absolute URL of the plugin location.
       */
      init: function(ed, url) {
        // Register an editor command for this plugin, invoked by the plugin's button.
        ed.addCommand(plugin, function() {
          if (typeof Drupal.wysiwyg.plugins[plugin].invoke == 'function') {
            var data = { format: 'html', node: ed.selection.getNode(), content: ed.selection.getContent() };
            // TinyMCE creates a completely new instance for fullscreen mode.
            var instanceId = ed.id == 'mce_fullscreen' ? ed.getParam('fullscreen_editor_id') : ed.id;
            Drupal.wysiwyg.plugins[plugin].invoke(data, pluginSettings, instanceId);
          }
        });

        // Register the plugin button.
        ed.addButton(plugin, {
          title : settings.iconTitle,
          cmd : plugin,
          image : settings.icon
        });

        // Load custom CSS for editor contents on startup.
        ed.onInit.add(function() {
          if (settings.css) {
            ed.dom.loadCSS(settings.css);
          }
        });

        // Attach: Replace plain text with HTML representations.
        ed.onBeforeSetContent.add(function(ed, data) {
          if (typeof Drupal.wysiwyg.plugins[plugin].attach == 'function') {
            data.content = Drupal.wysiwyg.plugins[plugin].attach(data.content, pluginSettings, ed.id);
            data.content = Drupal.wysiwyg.editor.instance.tinymce.prepareContent(data.content);
          }
        });

        // Detach: Replace HTML representations with plain text.
        ed.onGetContent.add(function(ed, data) {
          if (typeof Drupal.wysiwyg.plugins[plugin].detach == 'function') {
            data.content = Drupal.wysiwyg.plugins[plugin].detach(data.content, pluginSettings, ed.id);
          }
        });

        // isNode: Return whether the plugin button should be enabled for the
        // current selection.
        ed.onNodeChange.add(function(ed, command, node) {
          if (typeof Drupal.wysiwyg.plugins[plugin].isNode == 'function') {
            command.setActive(plugin, Drupal.wysiwyg.plugins[plugin].isNode(node));
          }
        });
      },

      /**
       * Return information about the plugin as a name/value array.
       */
      getInfo: function() {
        return {
          longname: settings.title
        };
      }
    });

    // Register plugin.
    tinymce.PluginManager.add(plugin, tinymce.plugins[plugin]);
  },

  openDialog: function(dialog, params) {
    var instanceId = this.isFullscreen() ? 'mce_fullscreen' : this.field;
    var editor = tinyMCE.get(instanceId);
    editor.windowManager.open({
      file: dialog.url + '/' + instanceId,
      width: dialog.width,
      height: dialog.height,
      inline: 1
    }, params);
  },

  closeDialog: function(dialog) {
    var instanceId = this.isFullscreen() ? 'mce_fullscreen' : this.field;
    var editor = tinyMCE.get(instanceId);
    editor.windowManager.close(dialog);
  },

  prepareContent: function(content) {
    // Certain content elements need to have additional DOM properties applied
    // to prevent this editor from highlighting an internal button in addition
    // to the button of a Drupal plugin.
    var specialProperties = {
      img: { 'class': 'mceItem' }
    };
    var $content = $('<div>' + content + '</div>'); // No .outerHTML() in jQuery :(
    // Find all placeholder/replacement content of Drupal plugins.
    $content.find('.drupal-content').each(function() {
      // Recursively process DOM elements below this element to apply special
      // properties.
      var $drupalContent = $(this);
      $.each(specialProperties, function(element, properties) {
        $drupalContent.find(element).andSelf().each(function() {
          for (var property in properties) {
            if (property == 'class') {
              $(this).addClass(properties[property]);
            }
            else {
              $(this).attr(property, properties[property]);
            }
          }
        });
      });
    });
    return $content.html();
  },

  insert: function(content) {
    content = this.prepareContent(content);
    var instanceId = this.isFullscreen() ? 'mce_fullscreen' : this.field;
    tinyMCE.execInstanceCommand(instanceId, 'mceInsertContent', false, content);
  },

  isFullscreen: function() {
    // TinyMCE creates a completely new instance for fullscreen mode.
    return tinyMCE.activeEditor.id == 'mce_fullscreen' && tinyMCE.activeEditor.getParam('fullscreen_editor_id') == this.field;
  }
};

})(jQuery);
;
(function($) {

/**
 * Attach this editor to a target element.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   An object containing input format parameters. Default parameters are:
 *   - editor: The internal editor name.
 *   - theme: The name/key of the editor theme/profile to use.
 *   - field: The CSS id of the target element.
 * @param settings
 *   An object containing editor settings for all enabled editor themes.
 */
Drupal.wysiwyg.editor.attach.none = function(context, params, settings) {
  if (params.resizable) {
    $('#' + params.field).addClass('resizable');
    $('#' + params.field).css({display: ''});
    if (Drupal.behaviors.textarea) {
      Drupal.behaviors.textarea();
    }
  }
};

/**
 * Detach a single or all editors.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   (optional) An object containing input format parameters. If defined,
 *   only the editor instance in params.field should be detached. Otherwise,
 *   all editors should be detached and saved, so they can be submitted in
 *   AJAX/AHAH applications.
 */
Drupal.wysiwyg.editor.detach.none = function(context, params) {
  if (typeof params != 'undefined') {
    var $textarea = $('#' + params.field, context).removeClass('textarea-processed');
    var $div = $textarea.parents('div.resizable-textarea');
    $div.before($textarea);
    $div.remove();
  }
};

/**
 * Instance methods for plain text areas.
 */
Drupal.wysiwyg.editor.instance.none = {
  insert: function(content) {
    var editor = document.getElementById(this.field);

    // IE support.
    if (document.selection) {
      editor.focus();
      var sel = document.selection.createRange();
      sel.text = content;
    }
    // Mozilla/Firefox/Netscape 7+ support.
    else if (editor.selectionStart || editor.selectionStart == '0') {
      var startPos = editor.selectionStart;
      var endPos = editor.selectionEnd;
      editor.value = editor.value.substring(0, startPos) + content + editor.value.substring(endPos, editor.value.length);
    }
    // Fallback, just add to the end of the content.
    else {
      editor.value += content;
    }
  }
};

})(jQuery);
;
// $Id: collapse.js,v 1.17 2008/01/29 10:58:25 goba Exp $

/**
 * Toggle the visibility of a fieldset using smooth animations
 */
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    // Action div containers are processed separately because of a IE bug
    // that alters the default submit button behavior.
    var content = $('> div:not(.action)', fieldset);
    $(fieldset).removeClass('collapsed');
    content.hide();
    content.slideDown( {
      duration: 'fast',
      easing: 'linear',
      complete: function() {
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
        $('div.action', fieldset).show();
      },
      step: function() {
        // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
  }
  else {
    $('div.action', fieldset).hide();
    var content = $('> div:not(.action)', fieldset).slideUp('fast', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = self.innerHeight || document.documentElement.clientHeight || $('body')[0].clientHeight || 0;
  var offset = self.pageYOffset || document.documentElement.scrollTop || $('body')[0].scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    } else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = function (context) {
  $('fieldset.collapsible > legend:not(.collapse-processed)', context).each(function() {
    var fieldset = $(this.parentNode);
    // Expand if there are errors inside
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      fieldset.removeClass('collapsed');
    }

    // Turn the legend into a clickable link and wrap the contents of the fieldset
    // in a div for easier animation
    var text = this.innerHTML;
      $(this).empty().append($('<a href="#">'+ text +'</a>').click(function() {
        var fieldset = $(this).parents('fieldset:first')[0];
        // Don't animate multiple times
        if (!fieldset.animating) {
          fieldset.animating = true;
          Drupal.toggleFieldset(fieldset);
        }
        return false;
      }))
      .after($('<div class="fieldset-wrapper"></div>')
      .append(fieldset.children(':not(legend):not(.action)')))
      .addClass('collapse-processed');
  });
};
;
/* $Id: ultralight.js 3 2010-08-06 17:17:56Z jackncoke $ */
if (Drupal.jsEnabled){
$(document).ready(function(){

	/* Top navigation */ 
	$("#navmenu ul.sf-menu").supersubs({ 
            minWidth:    12,   // minimum width of sub-menus in em units 
            maxWidth:    27,   // maximum width of sub-menus in em units 
            extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
                               // due to slight rounding differences and font-family 
        }).superfish({ 
            delay:       1000,                            // one second delay on mouseout 
            animation:   {
				height: 'toggle',
			},  // slide-down animation 
            speed:       'fast',                          // faster animation speed 
            autoArrows:  true,                           // disable generation of arrow mark-up 
            dropShadows: false                           // disable drop shadows 
        }); 
	
	/*
    $("#navmenu ul.sf-menu").superfish({ 
            delay:       1000,                            // one second delay on mouseout 
            animation:   {
				height: 'toggle',
			},  // slide-down animation 
            speed:       'fast',                          // faster animation speed 
            autoArrows:  true,                           // disable generation of arrow mark-up 
            dropShadows: false                           // disable drop shadows 
        }); */
	
/* SLIDE SHOW STYLES */
	
	$('#slideshow1').before('<ul id="blog-pager">').cycle({ 

	fx:      'fade', 
    speed:    'slow', 
    timeout:  5000,
	pause:1,
	pager:  '#blog-pager',
	pagerEvent: 'click',
	pauseOnPagerHover: true,
	// callback fn that creates a thumbnail to use as pager anchor 

		pagerAnchorBuilder: function(idx, slide) {
			var cap = (slide + 1) ;
			var src = $('img',slide).attr('src'); 
			return '<li><a href="#">'+idx+'</a></li>'; 
		} 
	});
	
	$('.slideshow').before('<ul id="blog-pager">').cycle({ 

		fx:      'fade', 
	    speed:    'slow', 
	    timeout:  5000,
		pause:1,
		pager:  '#blog-pager',
		pagerEvent: 'click',
		pauseOnPagerHover: true,
		// callback fn that creates a thumbnail to use as pager anchor 

		pagerAnchorBuilder: function(idx, slide) {
			var cap = (slide + 1) ;
	        return '<li><a href="#">'+idx+'</a></li>'; 
	    }
	});
	
	
	/* Cufon replace */
	Cufon.replace('h1');
	Cufon.replace('h2');
	Cufon.replace('h1.style1');
		
	/* Corner style */	
	$('#content .comment_add a').corner("5px");
	$('.node_read_more a').corner("5px");
	$('.comment_add a').corner("5px");
	$('.comment_comments a').corner("5px");
	
	
	$('h1.style3').corner("10px");
	$('h1.style5').corner("10px");
	$('blockquote.style4').corner("15px");
	$('.blog-style-1 ul.links li').corner("10px");
	$('#navmenu ul.sf-menu:first').corner("10px");
	$('.blog-pager').corner('5px');
	}); 
};;
