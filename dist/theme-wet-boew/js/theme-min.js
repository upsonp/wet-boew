/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-01-21 05:23 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#base-fullhd");b.psnb=pe.header.find("#base-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#base-srchbx");b.bcrumb=pe.header.find("#base-bc");b.title=pe.header.find("#base-title");b.sft=pe.footer.find("#base-sft");b.fullft=pe.footer.find("#base-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var p,w,f="",o=pe.dic.get("%menu"),m=pe.dic.get("%search"),g,q,u="",j='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-'+((pe.rtl)?"left":"right")+'">'+pe.dic.get("%close")+"</a>",l="",r,d,h,k,v,x,s,t,n;if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){v=b.menubar.find("ul.mb-menu li");p="<div "+j+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");w=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?g:b.bcrumb.children(":header")[0])).innerHTML;p+="<h1>"+o+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){n=b.bcrumb[0];p+='<section><div id="jqm-mb-location-text">'+n.innerHTML+"</div></section>";n.parentNode.removeChild(n)}else{p+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){f+="<section><div><h2>"+g.innerHTML+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></div></section>";n=pe.secnav[0];n.parentNode.removeChild(n)}if(b.menubar.length!==0){f+="<section><div><h2>"+w+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(v,3,"a",true,true,"c",true,true)+"</div></div></section>"}p+='<div id="jqm-mb-menu"></div></nav></div></div></div>';u+=p;b.menu=f;l+='<li><a data-rel="popup" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+o+"</a></li>"}if(b.search.length!==0){q="<div "+j+' id="jqm-wb-search"><div data-role="header"><h1>'+m+"</h1>"+e+'</div><div data-role="content"><div>'+b.search[0].getElementsByTagName("form")[0].innerHTML+"</div></div></div>";u+=q;l+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+m+"</a></li>"}pe.bodydiv.append(u);if(l.length!==0){r=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+l+"</ul></div>");b.title.after(r)}if(b.sft.length!==0){d=b.sft.find(".base-col-head a").get();x=document.getElementById("base-sft-in");if(b.fullft.length!==0){n=b.fullft[0];n.parentNode.removeChild(n)}k='<ul class="ui-grid-a">';for(s=0,t=d.length;s<t;s+=1){h=d[s];k+='<li class="ui-block-'+(s%2!==0?"b":"a")+'"><a href="'+h.href+'" data-role="button" data-theme="c" data-corners="false">'+h.innerHTML+"</a></li>"}k+="</ul>";x.id="";x.className="";x.setAttribute("data-role","footer");x.innerHTML=k}c(document).on("pagecreate",function(){if(b.menubar.length!==0){n=b.psnb[0];n.parentNode.removeChild(n)}if(b.search.length!==0){n=b.search[0];n.parentNode.removeChild(n)}if(l.length!==0){r.children().removeClass("wb-hide");var y=pe.bodydiv.find("#jqm-mb-menu");if(y.length!==0){y.append(b.menu);r.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){y.trigger("create");pe.menu.correctmobile(y)})}}function i(A,z,D,C){var B;c.mobile.showPageLoadingMsg();B=c.mobile.transitionHandlers.simultaneous("pop",z,D,C);B.done(function(){c.mobile.hidePageLoadingMsg()});return B}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("mobileviewloaded");return},desktopview:function(){var e=document.getElementById("base-srchbx"),f,d;if(e.length!==0){f=e.getElementsByTagName("input");d=f.length;while(d--){f[d].setAttribute("data-role","none")}}}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));