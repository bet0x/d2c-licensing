$(document).ready(function() {

	$('[data-toggle="offcanvas"]').on('click', function() {
		$('.row-offcanvas').toggleClass('active')
	});

	// Bootstrap >> dropdown
	$('.dropdown-toggle').dropdown();

});