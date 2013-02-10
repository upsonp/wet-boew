/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-10 08:43 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#wet-fullhd");b.psnb=pe.header.find("#wet-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#wet-srchbx");b.bcrumb=pe.header.find("#wet-bc");b.title=pe.header.find("#wet-title");b.sft=pe.footer.find("#wet-sft");b.fullft=pe.footer.find("#wet-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var s,v,D="",e,l,K=pe.dic.get("%settings"),u,p,f,I,N="",r='<a data-role="button" data-iconpos="notext"',x=' data-rel="popup" data-position-to="window"',n=r+x,y='<div data-role="popup" data-overlay-theme="a"',A='<div data-role="header"',M=A+"><h1>",w=' data-theme="c" class="ui-corner-all">',o=A+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',J=r+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",G=n+' data-icon="back" class="ui-btn-left"',E=">"+pe.dic.get("%back")+"</a>",L="</div></div>",m='<ul data-role="listview">',t="",B,k,q,g,d,H,C,z,F,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");p=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");v=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?p:b.bcrumb.children(":header")[0])).innerHTML;s=y+' id="jqm-wb-mb">'+M+e+"</h1>"+J+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){z=b.bcrumb[0];F=z.getElementsByTagName("a")[0].href;s+='<section><div id="jqm-mb-location-text">'+z.innerHTML+"</div></section>"}else{s+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){D+="<section><div><h2>"+p.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";z=pe.secnav[0]}if(b.menubar.length!==0){D+="<section><div><h2>"+v+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}s+='<div id="jqm-mb-menu"></div></nav></div></div></div>';N+=s;b.menu=D;t+=n+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){l=pe.dic.get("%search");f=b.search[0].innerHTML;I=y+' id="jqm-wb-search">'+M+l+"</h1>"+J+'</div><div data-role="content"><div>'+f.substring(f.indexOf("<form"))+"</div></div></div>";N+=I;t+=n+' data-icon="search" href="#jqm-wb-search">'+l+"</a>"}j='<div data-role="header"><div class="ui-title"></div>';j+='<map id="wet-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof F!=="undefined"){j+=r+' href="'+F+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=r+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(t.length!==0){j+=t}j+=n+' href="#popupSettings" data-icon="gear">'+K+"</a></map></div>";b.fullhd.children("#wet-fullhd-in").before(j);b.title[0].className+=" ui-bar-b";pe.main[0].getElementsByTagName("h1")[0].className+=" ui-bar-c";lang_links=b.fullhd.find('li[id*="-lang"]');u=y+' id="popupSettings"'+w;u+=o+K+"</h1>"+J+"</div>";u+=h+m;if(lang_links.length>0){u+='<li><a href="#popupLanguages"'+x+">"+pe.dic.get("%languages")+"</a></li>"}u+='<li class="ui-corner-bottom"><a href="#popupAbout"'+x+">"+pe.dic.get("%about")+"</a></li>";u+="</ul>"+L;if(lang_links.length>0){u+=y+' id="popupLanguages"'+w;u+=o+pe.dic.get("%languages")+"</h1>"+G+' href="#popupSettings"'+E+"</div>";u+=h+m;if(lang_links.filter('[id*="-lang-current"]').length===0){u+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}C=lang_links.get();for(H=0,len=C.length;H!==len;H+=1){z=C[H];k=z.childNodes[0];u+="<li"+(H===(len-1)?' class="ui-corner-bottom"':"");if(z.id.indexOf("-lang-current")!==-1){u+='><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}else{u+='><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}}u+="</ul>"+L}u+=y+' id="popupAbout"'+w;u+=o+pe.dic.get("%about")+"</h1>"+G+' href="#popupSettings"'+E+"</div>";u+=h+m;u+="<li>"+b.title.text()+"</li>";z=pe.main.find("#wet-date-mod").children();if(z.length!==0){d=z[1];if(d.getElementsByTagName("time").length===0){u+="<li>"+z[0].innerHTML+" "+d.innerHTML+"</li>"}}B=b.sft.find(".wet-col-head a").get();for(H=0,len=B.length;H!==len;H+=1){k=B[H];z=k.innerHTML;d=z.toLowerCase();u+="<li"+(H===(len-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+z+"</a></li>"}u+="</ul>"+L;pe.bodydiv.append(N+u)}c(document).on("pagecreate",function(){if(b.menubar.length!==0){z=b.psnb[0];z.parentNode.removeChild(z)}if(b.search.length!==0){z=b.search[0];z.parentNode.removeChild(z)}if(t.length!==0){var R=b.fullhd.find("#wet-mnavbar"),T=pe.bodydiv.find("#jqm-mb-menu"),S,Q,O,P;R.removeClass("wb-hide");if(T.length!==0){T.append(b.menu);R.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){T.trigger("create");S=T.find(".ui-controlgroup");Q=S.get();len=Q.length;while(len--){z=Q[len];P=z.getElementsByTagName("li")[0];if(P.parentNode.parentNode.className.indexOf("ui-collapsible-content")===-1&&P.className.indexOf("ui-corner-top")===-1){P.className+=" ui-corner-top"}O=S.eq(len).find(".ui-btn").get();z=O[O.length-1];if(z.className.indexOf("ui-corner-bottom")===-1){z.className+=" ui-corner-bottom"}}})}}function i(V,U,Y,X){var W;c.mobile.showPageLoadingMsg();W=c.mobile.transitionHandlers.simultaneous("pop",U,Y,X);W.done(function(){c.mobile.hidePageLoadingMsg()});return W}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));