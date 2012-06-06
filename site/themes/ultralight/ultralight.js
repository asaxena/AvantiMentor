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
};