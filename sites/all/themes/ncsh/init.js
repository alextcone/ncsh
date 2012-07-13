jQuery(function( $ ){
	$(".zone-header-wrapper").localScroll({
		queue:true,
		duration:1000,
		hash:true,
		offset: {'left': 0, 'top': -10},
		onBefore:function( e, anchor, $target ){
		},
		onAfter:function( anchor, settings ){
		}
	});
});
