jQuery(function( $ ) {
	var nav_container = $(".zone-header");
	var nav = $(".zone-header-wrapper");
	
	var top_spacing = 0;
	var waypoint_offset = 0;

	nav_container.waypoint({
		handler: function(event, direction) {
			if (direction == 'down') {
				nav_container.css({ 'height':nav.outerHeight() });		
				nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});
			} else {
				nav_container.css({ 'height':'auto' });
				nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});
			}
		},
		offset: function() {
			return -nav.outerHeight()-waypoint_offset;
		}
	});
});
jQuery(function( $ ){
	$(".zone-header-wrapper").localScroll({
		queue:true,
		duration:1000,
		hash:true,
		offset: {'left': 0, 'top': -0.1*$(window).height()},
		onBefore:function( e, anchor, $target ){
		},
		onAfter:function( anchor, settings ){
		}
	});
});
