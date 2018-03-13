/***** RADP CONFIG *****/

/***** Main navigation *****/

$.navigation = $('nav > ul.nav');

$.panelIconOpened = 'icon-arrow-up';
$.panelIconClosed = 'icon-arrow-down';

//Default colours
$.brandPrimary = '#20a8d8';
$.brandSuccess = '#4dbd74';
$.brandInfo = '#63c2de';
$.brandWarning = '#f8cb00';
$.brandDanger = '#f86c6b';

$.grayDark = '#2a2c36';
$.gray = '#55595c';
$.grayLight = '#818a91';
$.grayLighter = '#d1d4d7';
$.grayLightest = '#f8f9fa';

'use strict';

/***** Main Nav*****/

$(document).ready(function ($) {

	// Add class .active to current link
	$.navigation.find('a').each(function () {

		var cUrl = String(window.location).split('?')[0];

		if (cUrl.substr(cUrl.length - 1) == '#') {
			cUrl = cUrl.slice(0, -1);
		}

		if ($($(this))[0].href == cUrl) {
			$(this).addClass('active');

			$(this).parents('ul').add(this).each(function () {
				$(this).parent().addClass('open');
			});
		}
	});

	// Dropdown Menu
	$.navigation.on('click', 'a', function (e) {

		if ($.ajaxLoad) {
			e.preventDefault();
		}

		if ($(this).hasClass('nav-dropdown-toggle')) {
			$(this).parent().toggleClass('open');
			resizeBroadcast();
		}

	});

	function resizeBroadcast() {

		var timesRun = 0;
		var interval = setInterval(function () {
			timesRun += 1;
			if (timesRun === 5) {
				clearInterval(interval);
			}
			if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
				var evt = document.createEvent('UIEvents');
				evt.initUIEvent('resize', true, false, window, 0);
				window.dispatchEvent(evt);
			} else {
				window.dispatchEvent(new Event('resize'));
			}
		}, 62.5);
	}

	/* ---------- Main Menu Open/Close, Min/Full ---------- */
	$('.sidebar-toggler').click(function () {
		$('body').toggleClass('sidebar-hidden');
		resizeBroadcast();
	});

	$('.sidebar-minimizer').click(function () {
		$('body').toggleClass('sidebar-minimized');
		resizeBroadcast();
	});

	$('.brand-minimizer').click(function () {
		$('body').toggleClass('brand-minimized');
	});

	$('.aside-menu-toggler').click(function () {
		$('body').toggleClass('aside-menu-hidden');
		resizeBroadcast();
	});

	$('.mobile-sidebar-toggler').click(function () {
		$('body').toggleClass('sidebar-mobile-show');
		resizeBroadcast();
	});

	$('.sidebar-close').click(function () {
		$('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
	});

	/* ---------- Disable moving to top ---------- */
	$('a[href="#"][data-top!=true]').click(function (e) {
		e.preventDefault();
	});

});

/***** Card Action *****/

$(document).on('click', '.card-actions a', function (e) {
	e.preventDefault();

	if ($(this).hasClass('btn-close')) {
		$(this).parent().parent().parent().fadeOut();
	} else if ($(this).hasClass('btn-minimize')) {
		var $target = $(this).parent().parent().next('.card-body');
		if (!$(this).hasClass('collapsed')) {
			$('i', $(this)).removeClass($.panelIconOpened).addClass($.panelIconClosed);
		} else {
			$('i', $(this)).removeClass($.panelIconClosed).addClass($.panelIconOpened);
		}

	} else if ($(this).hasClass('btn-setting')) {
		$('#myModal').modal('show');
	}

});

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function init(url) {

	/* ---------- Tooltip ---------- */
	$('[rel="tooltip"],[data-rel="tooltip"]').tooltip({
		"placement": "bottom",
		delay: {
			show: 400,
			hide: 200
		}
	});

	/* ---------- Popover ---------- */
	$('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

}

/***** Full Screen *****/
$(document).ready(function () {
	//Toggle fullscreen
	$("#panel-fullscreen").click(function (e) {
		e.preventDefault();

		var $this = $(this);

		if ($this.children('i').hasClass('glyphicon-resize-full')) {
			$this.children('i').removeClass('glyphicon-resize-full');
			$this.children('i').addClass('glyphicon-resize-small');
		} else if ($this.children('i').hasClass('glyphicon-resize-small')) {
			$this.children('i').removeClass('glyphicon-resize-small');
			$this.children('i').addClass('glyphicon-resize-full');
		}
		$(this).closest('.panel').toggleClass('panel-fullscreen');
	});
});

		$(function () {
			$('#error').click(function () {
				// make it not dissappear
				toastr.error("Error", "Page Title Here", {});
			});
			$('#info').click(function () {
				// title is optional
				toastr.info("Info Message", "Title");
			});
			$('#warning').click(function () {
				toastr.warning("Warning");
			});
			$('#success').click(function () {
				toastr.success("Success");
			});
		});

/* tabs 

		$(".nav-tabs").on("click", "a", function (e) {
        e.preventDefault();
        if (!$(this).hasClass('add-contact')) {
            $(this).tab('show');
        }
    })
    .on("click", "span", function () {
        var anchor = $(this).siblings('a');
        $(anchor.attr('href')).remove();
        $(this).parent().remove();
        $(".nav-tabs li").children('a').first().click();
    });

$('.add-contact').click(function (e) {
    e.preventDefault();
    var id = $(".nav-tabs").children().length; //think about it ;)
    var tabId = 'contact_' + id;
    $(this).closest('li').before('<li class="nav-item" ><a class="nav-link" href="#contact_' + id + '"> New Tab <span> x </span></a> </li>');
    $('.tab-content').append('<div class="tab-pane" id="' + tabId + '">Contact Form: New Contact ' + id + '</div>');
   $('.nav-tabs li:nth-child(' + id + ') a').click();
});


$('.content-link').on('click', function () {
	$('.content-link').removeClass('selected');
	$(this).addClass('selected');
});


*/
