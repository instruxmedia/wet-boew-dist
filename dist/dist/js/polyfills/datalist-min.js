/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.html / wet-boew.github.io/wet-boew/Licence-fra.html
 *
 * Version: v3.1.4-development Build: 2013-08-20 03:36 PM EDT
 *
 */
(function(a){a.fn.datalist=function(){return a(this).each(function(g){var h=a(this),k=this.id,e=k+"-label",i=pe.main.find("label").filter("[for="+k+"]"),m=a("#"+h.attr("list")),f,n,d=[],j,c,l,b;if(i.length!==0){i.attr("id",e)}j=function(q){var o,p;if(q.length!==0){o=q.toLowerCase();p=n.filter(function(){var s=a(this),r=s.find("span.al-value").html();if(r.length===0){r=s.find("span.al-label").html()}return(o.length===0||r.toLowerCase().indexOf(o)!==-1)})}else{p=n}f.empty().append(p);if(p.length!==0){l();f.removeClass("al-hide");h.attr("aria-expanded","true")}else{f.addClass("al-hide");h.attr("aria-expanded","false")}};c=function(){f.addClass("al-hide").empty();h.attr({"aria-expanded":"false","aria-activedescendent":""})};l=function(){f.css("width",h.innerWidth());if(pe.preIE8){f.css("top",h.innerHeight()+13)}};pe.resize(l);m.find("option").each(function(r){var q=a(this),p=q.attr("value"),o=q.attr("label");if(typeof p==="undefined"){p=q.text()}d.push('<li class="al-option" id="al-option-'+g+"-"+r+'"><a href="javascript:;"><span class="al-value">'+(typeof p!=="undefined"?p:"")+'</span><span class="al-label">'+(typeof o!=="undefined"&&p!==o?o:"")+"</span></a></li>")});h.attr({autocomplete:"off",role:"textbox","aria-haspopup":"true","aria-autocomplete":"list","aria-owns":"wb-autolist-"+g,"aria-activedescendent":""}).wrap('<div class="wb-al-container" role="application" aria-'+(i.length!==0?'labelledby="'+e:'-label="'+h.attr("title"))+'"/>');b=h.parent();f=a('<ul role="listbox" id="wb-autolist-'+g+'" class="wb-autolist al-hide" aria-hidden="true" aria-live="polite"></ul>');n=a(d.join(""));h.after(f);h.on("keyup keydown click vclick touchstart focus",function(s){var r=s.type,q=s.button,o=s.keyCode,p;if(r==="keyup"){if(!(s.ctrlKey||s.altKey||s.metaKey)){if((o>47&&o<58)||(o>64&&o<91)||o===32||o===8){j(h.val())}}}else{if(r==="keydown"){if(!(s.ctrlKey||s.metaKey)){if(!s.altKey&&!f.hasClass("al-hide")){if(o===27){c();return false}else{if((o===38||o===40)&&h.attr("aria-activedescendent")===""){if(o===38){p=f.find("a").last()}else{p=f.find("a").eq(0)}h.attr("aria-activedescendent",p.parent().attr("id"));pe.focus(p);return false}}}else{if(o===38||o===40){j("");return false}}}}else{if(r==="click"||r==="vclick"){if(typeof q==="undefined"||q===pe.leftMouseButton){if(!f.hasClass("al-hide")){c()}}return false}else{if(pe.preIE8&&r==="focus"){f.addClass("al-hide").empty()}}}}});f.on("keyup keydown click vclick touchstart","a, span",function(s){var v=s.type,u=s.keyCode,q=s.button,t=a(s.target),o,r,x,p=h.val(),w;if(v==="keyup"){if(!(s.ctrlKey||s.altKey||s.metaKey)){if((u>47&&u<58)||(u>64&&u<91)||u===32){h.val(p+String.fromCharCode(u));pe.focus(h);j(h.val())}else{if(u===8){if(h.val().length>0){h.val(p.substring(0,p.length-1));j(h.val())}pe.focus(h)}}}}else{if(v==="keydown"){if(!(s.ctrlKey||s.altKey||s.metaKey)){if(u===13){w=t.find("span.al-value").html();if(w.length===0){w=t.find("span.al-label").html()}h.val(w);pe.focus(h);c();return false}else{if(u===9||u===27){pe.focus(h);c();return false}else{if(u===38||u===40){o=f.find("a");if(o.length!==0){r=o.index(t);if(u===38){x=((r-1)===-1?o.last():o.eq(r-1))}else{x=((r+1)===o.length?o.eq(0):o.eq(r+1))}h.attr("aria-activedescendent",x.parent().attr("id"));pe.focus(x)}return false}}}}}else{if(v==="click"||v==="vclick"||v==="touchstart"){if(typeof q==="undefined"||q===pe.leftMouseButton){if(!t.hasClass("al-option")){t=t.parent()}w=t.find("span.al-value").html();if(w.length===0){w=t.find("span.al-label").html()}h.val(w);pe.focus(h);c()}}}}});pe.document.on("click vclick touchstart",function(p){var o=p.button;if(typeof o==="undefined"||o===pe.leftMouseButton){if(!f.hasClass("al-hide")&&!a(p.target).is(h)){c()}}})})};a("input[list]").datalist()}(jQuery));