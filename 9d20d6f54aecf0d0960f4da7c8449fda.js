var SVG={"arrow-left-mobile":'<svg class="svg-arrow-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="3" d="m27.5 36.707-18-18 18-18"/></svg>',"arrow-right-mobile":'<svg class="svg-arrow-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="3" d="m9.5 36.707 18-18-18-18"/></svg>',"arrow-left-chevron":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m27.5 36.707-18-18 18-18"/></svg>',"arrow-right-chevron":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m9.5 36.707 18-18-18-18"/></svg>',"arrow-left-chevron-square":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M37 37H1V1h36Z"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m24.539 28.693-11.077-9.734 11.077-9.651"/></svg>',"arrow-right-chevron-square":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M37 37H1V1h36Z"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m13.462 28.693 11.077-9.734-11.077-9.651"/></svg>',"arrow-left-arrow-square":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M1 1h36v36H1zm36 18H10.551"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m16.408 24.896-5.857-5.939L16.408 13"/></svg>',"arrow-right-arrow-square":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M1 1h36v36H1zm0 18h26.45"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m21.594 13 5.86 5.943-5.86 5.96"/></svg>',"arrow-left-chevron-curve":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 38.828"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m26.408 37.414-14.22-14.22a5.762 5.762 0 0 1 0-8.149l6.174-6.174 7.456-7.457"/></svg>',"arrow-right-chevron-curve":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 38.828"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m10.5 1.414 14.22 14.22a5.762 5.762 0 0 1 0 8.149l-6.174 6.174-7.46 7.457"/></svg>',"arrow-left-arrow":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M37 18.407H1"/><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M13.217 30.814 1 18.426 13.217 6"/></svg>',"arrow-right-arrow":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M1 18.407h36"/><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M24.787 6 37 18.386 24.787 30.814"/></svg>',"arrow-left-chevron-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g class="svg-colored" fill="none" stroke="#000" stroke-width="2" transform="translate(-753 -326)"><circle cx="18" cy="18" r="18" transform="translate(754 327)"/><path d="m774.302 339.488-5.6 5.6 5.6 5.6"/></g></svg>',"arrow-right-chevron-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g class="svg-colored" fill="none" stroke="#000" stroke-width="2" transform="translate(-816 -328)"><circle cx="18" cy="18" r="18" transform="translate(817 329)"/><path d="m832.698 352.512 5.6-5.6-5.6-5.6"/></g></svg>'};function _debounce(e,t,n){var o;return function(){var a=this,i=arguments,s=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(a,i)},t),s&&e.apply(a,i)}}function _isOutdatedBrowser(){if(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/MSIE 8/i.test(navigator.userAgent))return!0}function _isIE(){if(-1!==navigator.userAgent.indexOf("MSIE")||navigator.userAgent.match(/Trident.*rv\:11\./))return!0}function _isEdge(){if(-1!==navigator.userAgent.indexOf("Edge"))return!0}function _isMobile(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return!0}function _isTablet(){if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent))return!0}function _isTouchDevice(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)return!0}function _isMinBrowserWidth(e){return window.matchMedia("(min-width: "+e+"px)").matches}function _isMaxBrowserWidth(e){return window.matchMedia("(max-width: "+e+"px)").matches}function _isMinBrowserHeight(e){return window.matchMedia("(min-height: "+e+"px)").matches}function _isMaxBrowserHeight(e){return window.matchMedia("(max-height: "+e+"px)").matches}function _hasUrlQuery(e){return e.indexOf("?")>0}function _removeUrlQuery(e){return e.substring(0,e.indexOf("?"))}function _getUrlQuery(){for(var e,t=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),o=0;o<n.length;o++)e=n[o].split("="),t.push(e[0]),t[e[0]]=e[1];return t}function _getFileExtension(e){return e.substr(e.lastIndexOf(".")+1)}function _convertFileExtensionToFileType(e){if("string"!=typeof e)return console.log("The parameter for _convertFileExtensionToFileType() function is not a string"),"unknown";var t=e.toLowerCase();return-1!==["png","jpg","jpeg","gif","webp","heic","heif","bmp","tiff","raw","svg","psd","ai","eps","ico","exif","jp2","j2k","jfif","pbm","pgm","ppm","xpm","pict"].indexOf(t)?"image":-1!==["txt","pdf","xls","xlsx","doc","docx","ppt","pptx"].indexOf(t)?"doc":-1!==["mp4","avi","mkv","mov","wmv","flv","webm","rm","rmvb","mpeg","mpg","3gp","vob","asf","m4v","ts","m2ts","ogv","divx","xvid","mts"].indexOf(t)?"video":"other"}function _setupKeyboardTrap(e,t,n,o){e.on("keydown",function(e){switch(e.key){case"Tab":e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),n.focus()):e.shiftKey||document.activeElement!==n[0]||(e.preventDefault(),t.focus());break;case"Escape":o()}})}function _onClassChange(e,t){if(e){var n=e.classList.toString(),o=new MutationObserver(function(a){for(var i=0;i<a.length;i++){if("class"===a[i].attributeName){var s=e.classList.toString();if(s!==n){t(o),n=s;break}}}});return o.observe(e,{attributes:!0}),o}}function handleFocus(){var e=!1,t=function(){e&&(document.documentElement.classList.remove("is-focus-keyboard"),e=!1,document.removeEventListener("mousedown",t),document.addEventListener("keydown",n))},n=function(o){"Tab"===o.key&&(e||(document.documentElement.classList.add("is-focus-keyboard"),e=!0,document.removeEventListener("keydown",n),document.addEventListener("mousedown",t)))};document.addEventListener("keydown",n),document.addEventListener("mousedown",t)}function handleRootCSS(){var e,t,n,o=$(document),a=$(window),i=$(".header"),s=$(".header-main-wrap");function r(){e=(.01*a.innerHeight()).toFixed(2),i.length?(t=i.outerHeight(!0),n=s.outerHeight(!0)):(t=0,n=0),document.documentElement.style.setProperty("--vh",e+"px"),document.documentElement.style.setProperty("--header-height",t+"px"),document.documentElement.style.setProperty("--header-main-wrap-height",n+"px")}r(),a.on("resize",_debounce(r,250)),o.on("click","._js-reset-root-css",r),o.ajaxComplete(r)}function handleBrowserVersion(){_isOutdatedBrowser()&&$("html").addClass("_is-outdated-browser"),_isIE()&&$("html").addClass("is-ie"),_isEdge()&&$("html").addClass("is-edge"),_isMobile()?$("html").addClass("is-mobile"):$("html").addClass("is-desktop"),_isTablet()&&$("html").addClass("is-tablet"),_isTouchDevice()&&$("html").addClass("is-touch-device")}function handleFormAsterisk(){function e(){$(".Dialog").find("th:contains('*'), label:contains('*'), .icon:contains('*')").each(function(){$(this).find(".asterisk").length||$(this).html(function(e,t){return t.replace(/(\*)/g,'<span class="asterisk">$1</span>')})})}e(),$(document).ajaxComplete(function(t,n,o){e()})}function handleToggleForm(){$(document).on("change","[data-toggle-form]",function(){if($(this).is('input[type="radio"]')||$(this).is('input[type="checkbox"]'))return $($(this).attr("data-toggle-form")).toggle(!!$(this).is(":checked")),!1;if($(this).is("select:not([multiple])")){var e=$(this).find("option"),t=$(this).find("option:selected").attr("data-toggle-form-target");return $(e).each(function(){$($(this).attr("data-toggle-form-target")).hide()}),$(t).show(),!1}}),$(document).on("change","[data-toggle-form-reverse]",function(){if($(this).is('input[type="radio"]')||$(this).is('input[type="checkbox"]'))return $($(this).attr("data-toggle-form-reverse")).toggle(!$(this).is(":checked")),!1}),$("[data-toggle-form]").trigger("change"),$("[data-toggle-form-reverse]").trigger("change"),$(document).ajaxComplete(function(e,t,n){$("[data-toggle-form]").trigger("change"),$("[data-toggle-form-reverse]").trigger("change")}),$(document).on("click",".optionsPanel > ul > li",function(){$("[data-toggle-form]").trigger("change"),$("[data-toggle-form-reverse]").trigger("change")})}function handleScrollTop(){$(document).on("click","._js-scroll-top",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"slow",function(){$(this).blur()})})}function handleBackToTopBtn(){var e=$("#back-to-top-btn");window.addEventListener("scroll",_debounce(function(){$(this).scrollTop()>100?e.addClass("active"):e.removeClass("active")},250),{passive:!0}),e.on("click",function(){return $("html, body").animate({scrollTop:0},800).promise().done(function(){e.removeClass("active"),history.pushState(null,null,window.location.pathname),$(window).trigger("hashchange"),console.log('triggered "hashchange"')}),!1})}function handleCountUp(){$("._js-count-up").each(function(){var e=$(this),t=e.find(".count-up-num"),n=e.find(".count-up-prefix"),o=e.find(".count-up-suffix"),a=t.text(),i=parseFloat(a.replaceAll(",","")),s=1e3,r=!1,d=!1;if(isNaN(i))return console.error("Invalid number ("+a+") provided."),t.text("Invalid Number"),n.text(""),void o.text("");function l(e){var t=e.offset().top,n=t+e.outerHeight(),o=$(window).scrollTop(),a=o+$(window).height();return n>o&&t<a}window.addEventListener("scroll",function(){l(t)&&!r?(d=!1,r=!0,$({Counter:0}).animate({Counter:i},{duration:s,step:function(e){t.text(Math.ceil(e).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))}})):l(t)||d||(r=!1,d=!0,t.text(0))},{passive:!0})})}function handleAnchorLink(){$(document).on("click","._js-anchor-link",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top,o=$(".header").hasClass("is-sticky")?$(".header-main-wrap").height():0;$("html, body").animate({scrollTop:n-o}).promise().done(function(){history.pushState(null,null,t),$(window).trigger("hashchange"),console.log('triggered "hashchange"')})})}function handleInputMask(){var e=['input[placeholder="(999) 999-9999"]'].join(", "),t=['input[placeholder="mm/dd/yyyy"]'].join(", "),n=['input[placeholder="test@test.com"]'].join(", ");$(e).inputmask({mask:"(999) 999-9999"}),$(t).inputmask({alias:"datetime",inputFormat:"mm/dd/yyyy"}),$(n).inputmask({alias:"email"})}function handleCollapseSidebar(){var e=$("body"),t=$("._js-coll-sidebar");function n(t,n){var o=t.find(".sidebar-side .sidebar-inner"),a=t.find(".sidebar-open-btn"),i=t.find(".sidebar-close-btn");n?(e.addClass("_overflow-hidden"),t.addClass("active"),a.attr("aria-expanded","true"),o.fadeIn(200),i.focus()):(e.removeClass("_overflow-hidden"),t.removeClass("active"),o.hide(),a.attr("aria-expanded","false").focus())}t.on("click",".sidebar-open-btn",function(){n($(this).closest("._js-coll-sidebar"),!0)}),t.on("click",".sidebar-close-btn",function(){n($(this).closest("._js-coll-sidebar"),!1)}),$(window).on("resize",_debounce(function(){_isMinBrowserWidth(992)&&(e.removeClass("_overflow-hidden"),t.removeClass("active"),t.find(".sidebar-open-btn").attr("aria-expanded","false"),t.find(".sidebar-side .sidebar-inner").css({display:""}))},250)),t.on("keydown",".sidebar-side .sidebar-inner",function(e){var t=$(this).closest("._js-coll-sidebar");if(t.hasClass("active")){var o=$(this).find('a, button, :input, [tabindex]:not([tabindex="-1"])'),a=o.first(),i=o.last();switch(e.key){case"Tab":e.shiftKey&&document.activeElement===a[0]?(e.preventDefault(),i.focus()):e.shiftKey||document.activeElement!==i[0]||(e.preventDefault(),a.focus());break;case"Escape":e.preventDefault(),n(t,!1)}}})}function handleStickySidebar(){var e=$(".sidebar.is-sticky");function t(){var t=$(window).innerHeight()-$(".header-main-wrap").outerHeight();e.each(function(){var e=$(this);e.find(".sidebar-side .sidebar-inner").outerHeight()>t&&e.removeClass("is-sticky")})}t(),$(window).on("resize",_debounce(function(){t()},250))}function handleExternalURL(){function e(){$("[data-external-link]").filter(function(){return $(this).attr("data-external-link")}).attr({href:function(){return $(this).attr("data-external-link")},target:"_blank"})}e(),$(document).ajaxComplete(function(){e()})}function handleReplaceFileTitle(){var e=[".txt",".jpg",".jpeg",".png",".gif",".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx"];function t(){$("[data-no-title-reminder]").each(function(){var t=$(this),n=t.text(),o=n.slice(n.lastIndexOf(".")).toLowerCase(),a=t.attr("data-no-title-reminder");-1!==e.indexOf(o)&&t.text(a)})}t(),$(document).ajaxComplete(function(e,n,o){t()})}function handleImagePopup(){$("._js-img-popup").magnificPopup({type:"image",closeBtnInside:!1,closeOnContentClick:!1,image:{verticalFit:!0,titleSrc:"title"},gallery:{enabled:!0},callbacks:{open:function(){$(this.currItem.el).attr("aria-expanded","true")},close:function(){$(this.currItem.el).attr("aria-expanded","false")}}})}function handleVideoPopup(){$("._js-video-popup").magnificPopup({type:"iframe",preloader:!1,closeBtnInside:!1,fixedContentPos:!1,closeOnContentClick:!1,disableOn:700,removalDelay:160,callbacks:{open:function(){$(this.currItem.el).attr("aria-expanded","true")},close:function(){$(this.currItem.el).attr("aria-expanded","false")}}})}function handleApplyMWFormStyle(){styleDialog("._js-apply-mw-form-style")}function handleTabs(){$("._js-tabs").each(function(){$(this).find(".tabs-nav").first().addClass("active").attr("aria-selected","true"),$(this).find(".tabs-panel").first().addClass("active")}),$(document).on("click","._js-tabs .tabs-nav",function(){var e=$(this),t=e.closest(".tabs"),n=t.find(".tabs-nav"),o=t.find(".tabs-panel"),a=n.index(this);n.removeClass("active").attr("aria-selected","false"),o.removeClass("active"),e.addClass("active").attr("aria-selected","true"),o.eq(a).addClass("active")})}function handleHideIfEmpty(){$("[data-hide-if-empty]").each(function(){for(var e=$(this),t=!0,n=e.attr("data-hide-if-empty").toString().replace(/\s+/g,"").split("|"),o=0;o<n.length;o++)if(""!==n[o]&&"0"!==n[o]){t=!1;break}!0===t&&e.hide()})}function handleRemoveIfEmpty(){$("[data-remove-if-empty]").each(function(){for(var e=$(this),t=!0,n=e.attr("data-remove-if-empty").toString().replace(/\s+/g,"").split("|"),o=0;o<n.length;o++)if(""!==n[o]&&"0"!==n[o]){t=!1;break}!0===t&&e.remove()})}function handleShowIfEmpty(){$("[data-show-if-empty]").each(function(){for(var e=$(this),t=!0,n=e.attr("data-show-if-empty").toString().replace(/\s+/g,"").split("|"),o=0;o<n.length;o++)if(""!==n[o]&&"0"!==n[o]){t=!1;break}!0!==t&&e.hide()})}function handleCheckImg(){function e(){$("[data-check-img]").each(function(){""===$(this).attr("data-check-img")&&($(this).addClass("_img-placeholder"),$(this).find("img").hide())})}e(),$(document).ajaxComplete(function(){e()})}function handleFancyLabel(){$("._js-fancy-label input, ._js-fancy-label textarea").each(function(){var e=$(this),t=e.closest("._js-fancy-label");""===e.val().trim()?t.removeClass("active"):t.addClass("active")}),$(document).on("focus blur","._js-fancy-label input, ._js-fancy-label textarea",function(e){var t=$(this),n=t.closest("._js-fancy-label");"focusin"===e.type?n.addClass("active"):"focusout"===e.type&&""===t.val().trim()&&n.removeClass("active")}),$(document).on("change","._js-fancy-label input, ._js-fancy-label textarea",function(e){var t=$(this),n=t.closest("._js-fancy-label");""===t.val().trim()?n.removeClass("active"):n.addClass("active")})}function handleCheckboxDropdown(){var e="active";function t(e){e.val("").trigger("keyup")}function n(n,o,a,i){o.attr("aria-expanded","false"),n.removeClass(e),o.focus(),t(i)}function o(){$("._js-checkbox-dropdown").each(function(){var e=$(this),t=e.find("label").text();e.find(".mwInput");e.find("label").remove();var n=$("<label>").text(t).attr("for",e.attr("id")+"-dialog"),o=$("<button>").attr({id:e.attr("id")+"-btn",class:"dropdown-open-btn",type:"button","aria-expanded":"false","aria-controls":e.attr("id")+"-dialog"}).html("<span>All "+t+'</span><i class="fa-solid fa-chevron-down" aria-hidden="true"></i>'),a=$("<fieldset>").attr({id:e.attr("id")+"-dialog",class:"dropdown-dialog",role:"region","aria-labelledby":e.attr("id")+"-btn"}),i=$("<label>").addClass("dropdown-label").text(t),s=$("<button>").addClass("dropdown-close-btn").attr({type:"button","aria-label":"Close dropdown"}).html('<i class="fa-solid fa-times" aria-hidden="true"></i>'),r=$("<div>").addClass("dropdown-subheader").html('<div class="dropdown-search"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><input class="mw" type="text" aria-label="Search within Dropdown"><button type="button"><i class="fa-solid fa-times" aria-hidden="true"></i></button></div><button class="dropdown-reset-btn" type="button">RESET</button>'),d=$("<div>").addClass("dropdown-list"),l=$("<p>").addClass("dropdown-no-result").text("No results found");a.append(i,s,r,d.append(l)),e.find(".mwInput").appendTo(d),e.append(n,o,a)})}function a(){$("._js-checkbox-dropdown").each(function(){var t=$(this),o=t.find(".dropdown-open-btn"),a=t.find(".dropdown-reset-btn"),i=t.find(".dropdown-dialog"),s=t.find(".dropdown-search"),r=s.find("input"),d=s.find("button"),l=t.find(".dropdown-no-result"),c=t.find(".dropdown-list"),u=c.find(".mwInput"),h=o.find("span"),f=c.find('input[type="checkbox"]'),p=h.text(),m=f.filter(":checked").map(function(){return $(this).attr("cap")}).get().join(", ");m?(h.text(m),a.show()):(h.text(p),a.hide()),f.on("change",function(){(m=f.filter(":checked").map(function(){return $(this).attr("cap")}).get().join(", "))?(h.text(m),a.show()):(h.text(p),a.hide())}),r.on("keyup",function(){var e=$(this),t=e.val().toLowerCase();u.hide().filter(function(){return-1!==$(this).text().toLowerCase().indexOf(t)}).show(),l.toggle(!u.filter(":visible").length),e.val().length?d.show():d.hide()}).on("keydown",function(e){"Enter"===e.key&&e.preventDefault()});var g=i.find('a, button, :input, [tabindex]:not([tabindex="-1"])'),v=g.first(),w=g.last();_setupKeyboardTrap(i,v,w,function(){n(t,o,0,r)}),$(document).on("click",function(a){!t.hasClass(e)||$(a.target).closest(t).length||$(a.target).is(t)||n(t,o,0,r)})})}$(document).on("click","._js-checkbox-dropdown .dropdown-open-btn, ._js-checkbox-dropdown .dropdown-close-btn",function(){var t=$(this).closest("._js-checkbox-dropdown"),o=t.find(".dropdown-open-btn"),a=(t.find(".dropdown-dialog"),t.find(".dropdown-search input"));t.hasClass(e)?n(t,o,0,a):function(t,n,o,a){n.attr("aria-expanded","true"),t.addClass(e),setTimeout(()=>{a.focus()},100)}(t,o,0,a)}),$(document).on("click","._js-checkbox-dropdown .dropdown-reset-btn",function(){var e=$(this).closest("._js-checkbox-dropdown"),t=e.find('.dropdown-list input[type="checkbox"]'),n=e.find(".dropdown-search input");!function(e){e.prop("checked",!1).trigger("change")}(t),n.focus()}),$(document).on("click","._js-checkbox-dropdown .dropdown-search button",function(){var e=$(this).closest("._js-checkbox-dropdown").find(".dropdown-search input");t(e),e.focus()}),$(document).ajaxComplete(function(){o(),a()}),o(),a()}function handleDropdown(){var e=$("._js-dropdown"),t=200,n="active";function o(e,o,a){e.removeClass(n).attr("aria-expanded","false"),o.removeClass(n).fadeOut(t),a.focus()}e.each(function(){var e=$(this),a=$("#"+e.attr("aria-controls")),i=a.find('a, button, :input, [tabindex]:not([tabindex="-1"])'),s=i.first(),r=i.last();e.on("click",function(){"true"===e.attr("aria-expanded")?o(e,a,e):function(e,o,a){e.addClass(n).attr("aria-expanded","true"),o.addClass(n).fadeIn(t),a.focus()}(e,a,s)}),$(document).on("click",function(t){"true"!==e.attr("aria-expanded")||$(t.target).closest(e).length||$(t.target).closest(a).length||o(e,a,e)}),_setupKeyboardTrap(a,s,r,function(){o(e,a,e)})})}function handleExpand(){var e=200,t="active";function n(){$("._js-expand").each(function(){var e=$(this),n=$("#"+e.attr("aria-controls"));e.hasClass(t)||"true"===e.attr("aria-expanded")?(e.addClass(t).attr("aria-expanded","true"),n.addClass(t).show()):(e.removeClass(t).attr("aria-expanded","false"),n.removeClass(t).hide())})}n(),$(document).on("click","._js-expand",function(){var n=$(this),o=$("#"+n.attr("aria-controls"));"true"===n.attr("aria-expanded")?function(n,o){n.removeClass(t).attr("aria-expanded","false"),o.removeClass(t).slideUp(e)}(n,o):function(n,o){n.addClass(t).attr("aria-expanded","true"),o.addClass(t).slideDown(e)}(n,o)}),$(document).ajaxComplete(function(){n()})}function handleTimeline(){function e(){var e=$("._js-timeline");e.removeClass("is-left is-right is-first is-last"),e.each(function(t){var n="";0===t&&(n=$(this).addClass("is-first")),t===e.length-1&&(n=$(this).addClass("is-last")),t%2==0&&(n="is-left"),t%2==1&&(n="is-right"),$(this).addClass(n)})}e(),$(document).ajaxComplete(function(t,n,o){setTimeout(e,100)})}$(document).ajaxComplete(function(e,t,n){$("body").removeClass("_overflow-hidden")}),handleBrowserVersion(),$(document).ready(function(){handleFocus(),handleRootCSS(),handleScrollTop(),handleBackToTopBtn(),handleCountUp(),handleAnchorLink(),handleFormAsterisk(),handleToggleForm(),handleCollapseSidebar(),handleStickySidebar(),handleExternalURL(),handleReplaceFileTitle(),handleImagePopup(),handleVideoPopup(),handleApplyMWFormStyle(),handleTabs(),handleHideIfEmpty(),handleRemoveIfEmpty(),handleShowIfEmpty(),handleCheckImg(),handleFancyLabel(),handleCheckboxDropdown(),handleDropdown(),handleExpand(),handleTimeline()});

