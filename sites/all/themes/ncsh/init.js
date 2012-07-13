jQuery(function( $ ){
	$(".zone-header-wrapper").localScroll({
		queue:true,
		duration:1000,
		offset: {'left': 0, 'top': -80},
		onBefore:function( e, anchor, $target ){
		},
		onAfter:function( anchor, settings ){
		}
	});
});

jQuery(function( $ ){
	$.waypoints.settings.scrollThrottle = 30;
	$('.zone-header-wrapper').waypoint(function(event, direction) {
		$(this).toggleClass('sticky', direction === "down");
		event.stopPropagation();
	});
});


