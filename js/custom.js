$(document).ready(function() {
	var socialList = $('.menu-social-list'),
		socialListItem = socialList.find('li');
	socialListItem.on('mouseover', function() {
		var $this = $(this),
			linkPassive = $(this).find('a').first(),
			linkHover = $(this).find('a').last();
		linkPassive.stop().animate({
			top: -40
		});
		linkHover.stop().animate({
			top: 0
		});
	}).on('mouseleave', function() {
		var $this = $(this),
			linkPassive = $(this).find('a').first(),
			linkHover = $(this).find('a').last();
		linkPassive.stop().animate({
			top: 0
		});
		linkHover.stop().animate({
			top: 40
		});
	});
});