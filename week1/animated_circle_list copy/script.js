$(document).ready(function() {
	$('.imenu').mouseenter( function() {
		$(this).animate( {height: '150px', width: '150px', opacity: .5});
	});
	$('.imenu').mouseleave( function() {
		$(this).stop();
		$(this).animate( {height: '100px', width: '100px', opacity: 1}, 'fast');
	});
});