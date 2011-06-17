/*
	# rwAddLinks (jQuery plugin) #
	
	AUTHOR:	Adam Merrifield <http://adam.merrifield.ca>
	VERSION: v1.0.0
	DATE: 06-17-11 07:54

	USAGE:
	- include this plugin code along with jQuery
	- include an array of URL's with as many items as
		there are elements to link
	- select a group of elements to link
	- invoke .rwAddLinks()
	
	EXAMPLE:
		var someLinks = [
			"http://www.google.com",
			"http://www.twitter.com",
			"http://www.facebook.com"
		];
		$('.someDiv').rwAddLinks(someLinks);
*/
(function($) {
    $.fn.rwAddLinks = function(linkArr) {
        var i = 0;
        $(this).each(function(i) {
            $(this).click(function() {
                location.href = linkArr[i++];
            }).hover(function() {
                $(this).css("cursor", "pointer");
            });
        });
    };
})(jQuery);