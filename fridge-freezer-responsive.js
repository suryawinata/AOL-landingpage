$(function() {
    var height = $(window).height();
    var width = $(window).width();
    if (width <= 767) {
        $('.accordion').hide();
        if (height > width)
            $('#top-button').show();
        else if (height < width)
            $('#top-button').hide();
    }
});
$(window).on("orientationchange", function() {
    var height = $(window).height();
    var width = $(window).width();
    if (width <= 767) {
        $('.accordion').hide();
        if (height > width)
            $('#top-button').show();
        else if (height < width)
            $('#top-button').hide();
    }
});
$(function() {
    $('.accordion-heading').click(function() {
        var $toggle = $(this).children('.text-toggle');
        if ($toggle.hasClass('on'))
            $toggle.removeClass('on');
        else
            $toggle.addClass('on');
    });
});