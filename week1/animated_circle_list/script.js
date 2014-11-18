$(document).ready(function() {
	$('.menu').mouseenter( function() {
		$(this).fadeTo('fast', .5);
		$(this).animate( {height: '150px', width: '150px'});
	});
	$('.menu').mouseleave( function() {
		$(this).fadeTo('fast', 1);
		$(this).animate( {height: '100px', width: '100px'}, 'fast');
	});
});