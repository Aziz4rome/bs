$(document).ready(function() {
	var speed = 200;

	var socialList = $('.menu-social-list'),
		socialListItem = socialList.find('li');
	socialListItem.on('mouseover', function() {
		var $this = $(this),
			linkPassive = $(this).find('a').first(),
			linkHover = $(this).find('a').last();
		linkPassive.stop().animate({
			top: -40
		}, speed);
		linkHover.stop().animate({
			top: 0
		}, speed);
	}).on('mouseleave', function() {
		var $this = $(this),
			linkPassive = $(this).find('a').first(),
			linkHover = $(this).find('a').last();
		linkPassive.stop().animate({
			top: 0
		}, speed);
		linkHover.stop().animate({
			top: 40
		}, speed);
	});


	var currentPage = $('.current-page'),
		navLinksList = $('.menu-list'),
		navLinksLi = navLinksList.find('a'),
		currentLink = $('.current-page-link'),
		widthCurrentPage = currentLink.outerWidth() - 1,
		leftCurrentLink = currentLink.offset().left - navLinksList.offset().left + 1;
	currentPage.css({
		width: widthCurrentPage
	});
	navLinksLi.on('mouseover', function() {
		var $this = $(this),
			newWidthCurrentPage = $this.outerWidth(),
			leftCurrentPage = $this.offset().left - navLinksList.offset().left + 1;
		currentPage.stop().animate({
			left: leftCurrentPage,
			width: newWidthCurrentPage
		}, speed);
		}).on('mouseleave', function() {
		currentPage.stop().animate({
			left: leftCurrentLink,
			width: widthCurrentPage
		}, speed);
	});

	var searchForm = $('.search-form'),
		searchField = searchForm.find('.search-field');
	searchForm.append('<span class="search-span-submit"></span><span class="search-form-close">X</span>');

	$('.search').on('click', function(e) {
		e.preventDefault();
		socialList.fadeOut(function() {
			searchForm.fadeIn();
		});
		searchField.attr('autofocus', true);
	});
	$('.search-form-close').on('click', function() {
		searchForm.fadeOut(function() {
			socialList.fadeIn();
		});
	});


	
});