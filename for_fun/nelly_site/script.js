

$(document).ready(function() {
	// $('#hamburger').mouseover(function(){
	// 	$('.hiddenmenu').css("background-color", "rgba(0, 0, 0, .3)");
	// });
	$('#hamburger').click(function(){
		$('#menu').toggleClass('seemenu', 'hiddenmenu');
		// $('#list').toggleClass('hidden');
		$('#list').toggleClass('hidelist');
		$('#menudiv').fadeTo('slow', 0);
		// $('#list').toggleClass('hidden');
	});
	// $('#hamburger').mouseleave(function(){
	// 	$('.hiddenmenu').css("background-color", "rgba(0, 0, 0, 0)");
	// });
	// $('#about').click(function() {
	// 	$('#circlemenu').toggleClass('hidden');
	// });
});
