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

$(document).ready(function() {
  if (!$('#admin-menu').length) {
    return;
  }

  // Apply margin-top if enabled; directly applying marginTop doesn't work in IE.
  if (Drupal && Drupal.settings && Drupal.settings.admin_menu) {
    if (Drupal.settings.admin_menu.margin_top) {
      $('body').addClass('admin-menu');
    }
    if (Drupal.settings.admin_menu.position_fixed) {
      $('#admin-menu').css('position', 'fixed');
    }
    // Move page tabs into administration menu.
    if (Drupal.settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li').each(function() {
        $(this).addClass('admin-menu-tab').appendTo('#admin-menu > ul');
      });
      $('ul.tabs.secondary').appendTo('#admin-menu > ul > li.admin-menu-tab.active').removeClass('secondary');
    }
    // Collapse fieldsets on Modules page. For why multiple selectors see #111719.
    if (Drupal.settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed), #system-modules-1 fieldset:not(.collapsed)').addClass('collapsed');
    }
  }

  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('#admin-menu li').hover(function() {
      $(this).addClass('iehover');
    }, function() {
      $(this).removeClass('iehover');
    });
  }

  // Delayed mouseout.
  $('#admin-menu li').hover(function() {
    // Stop the timer.
    clearTimeout(this.sfTimer);
    // Display child lists.
    $('> ul', this).css({left: 'auto', display: 'block'})
      // Immediately hide nephew lists.
      .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
  }, function() {
    // Start the timer.
    var uls = $('> ul', this);
    this.sfTimer = setTimeout(function() {
      uls.css({left: '-999em', display: 'none'});
    }, 400);
  });
});
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
// $Id: tableheader.js,v 1.16.2.2 2009/03/30 12:48:09 goba Exp $

Drupal.tableHeaderDoScroll = function() {
  if (typeof(Drupal.tableHeaderOnScroll)=='function') {
    Drupal.tableHeaderOnScroll();
  }
};

Drupal.behaviors.tableHeader = function (context) {
  // This breaks in anything less than IE 7. Prevent it from running.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    return;
  }

  // Keep track of all cloned table headers.
  var headers = [];

  $('table.sticky-enabled thead:not(.tableHeader-processed)', context).each(function () {
    // Clone thead so it inherits original jQuery properties.
    var headerClone = $(this).clone(true).insertBefore(this.parentNode).wrap('<table class="sticky-header"></table>').parent().css({
      position: 'fixed',
      top: '0px'
    });

    headerClone = $(headerClone)[0];
    headers.push(headerClone);

    // Store parent table.
    var table = $(this).parent('table')[0];
    headerClone.table = table;
    // Finish initialzing header positioning.
    tracker(headerClone);

    $(table).addClass('sticky-table');
    $(this).addClass('tableHeader-processed');
  });

  // Define the anchor holding var.
  var prevAnchor = '';

  // Track positioning and visibility.
  function tracker(e) {
    // Save positioning data.
    var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (e.viewHeight != viewHeight) {
      e.viewHeight = viewHeight;
      e.vPosition = $(e.table).offset().top - 4;
      e.hPosition = $(e.table).offset().left;
      e.vLength = e.table.clientHeight - 100;
      // Resize header and its cell widths.
      var parentCell = $('th', e.table);
      $('th', e).each(function(index) {
        var cellWidth = parentCell.eq(index).css('width');
        // Exception for IE7.
        if (cellWidth == 'auto') {
          cellWidth = parentCell.get(index).clientWidth +'px';
        }
        $(this).css('width', cellWidth);
      });
      $(e).css('width', $(e.table).css('width'));
    }

    // Track horizontal positioning relative to the viewport and set visibility.
    var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
    var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - e.vPosition;
    var visState = (vOffset > 0 && vOffset < e.vLength) ? 'visible' : 'hidden';
    $(e).css({left: -hScroll + e.hPosition +'px', visibility: visState});

    // Check the previous anchor to see if we need to scroll to make room for the header.
    // Get the height of the header table and scroll up that amount.
    if (prevAnchor != location.hash) {
      if (location.hash != '') {
        var offset = $('td' + location.hash).offset();
        if (offset) {
          var top = offset.top;
          var scrollLocation = top - $(e).height();
          $('body, html').scrollTop(scrollLocation);
        }
      }
      prevAnchor = location.hash;
    }
  }

  // Only attach to scrollbars once, even if Drupal.attachBehaviors is called
  //  multiple times.
  if (!$('body').hasClass('tableHeader-processed')) {
    $('body').addClass('tableHeader-processed');
    $(window).scroll(Drupal.tableHeaderDoScroll);
    $(document.documentElement).scroll(Drupal.tableHeaderDoScroll);
  }

  // Track scrolling.
  Drupal.tableHeaderOnScroll = function() {
    $(headers).each(function () {
      tracker(this);
    });
  };

  // Track resizing.
  var time = null;
  var resize = function () {
    // Ensure minimum time between adjustments.
    if (time) {
      return;
    }
    time = setTimeout(function () {
      $('table.sticky-header').each(function () {
        // Force cell width calculation.
        this.viewHeight = 0;
        tracker(this);
      });
      // Reset timer
      time = null;
    }, 250);
  };
  $(window).resize(resize);
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