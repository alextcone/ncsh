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

jQuery(function( $ ){$('.page-faq-page-10 h1').replaceWith('<h1 class="title" id="page-title">Preguntas Más Frecuentes</h1>');});

jQuery(function( $ ){$(".page-faq-page-10 a:contains('Back to Top')").text('Volver al principio');});