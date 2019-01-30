'use strict';

$(function () {
	$('a').smoothScroll({
		offset: 0,
		speed: 1000,
		easing: 'swing'
	});

	$('.hamburger').on('click', function () {
		$('.menu').toggleClass('overlay');
		$('.mobileMenu').toggleClass('open');
	});
});