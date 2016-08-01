$(document).ready (function () {
	window.sr = ScrollReveal();

	
	sr.reveal('div[navbar]', { duration: 1000 }, 200);
	sr.reveal('.landing', { duration: 1000 }, 200);
	sr.reveal('div[policy]', { duration: 1000, origin: 'left', reset: true}, 200);
	sr.reveal('div[image]', { duration: 1000, origin: 'bottom' }, 200);
	sr.reveal('div[contact]', { duration: 1000, origin: 'left' }, 200);

	$("div[image]").imagefill();
	$(".bg-container").imagefill();
});