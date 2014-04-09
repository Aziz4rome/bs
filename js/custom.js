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
		currentLink = $('.current-page-link');
	setTimeout(function() {		
		window.widthCurrentPage = currentLink.outerWidth() + 1,
		window.leftCurrentLink = currentLink.offset().left - navLinksList.offset().left;
		currentPage.stop().animate({
			width: widthCurrentPage,
			left: leftCurrentLink
		}, speed);	
	}, 400)

	navLinksLi.on('mouseover', function() {
		var $this = $(this),
			newWidthCurrentPage = $this.outerWidth() + 1,
			leftCurrentPage = $this.offset().left - navLinksList.offset().left;
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

	var contentList = $('.article-list'),
		contentListItem = contentList.find('li');
	contentListItem.css({
		opacity: 0,
		top: 80
	});
	
	contentListItem.each(function(index, elem) {
		
		appendItems();

		$(document).scroll(function() {
			appendItems();
		});

		function appendItems() {
			var offsetTop = $(elem).offset().top;
			var scrollTop = $(document).scrollTop() + $(window).height()/1.2;
			if (parseInt(scrollTop) > parseInt(offsetTop)) {
				$(elem).animate({
					opacity: 1,
					top: 0
				});
			}
		}
	
	});
});