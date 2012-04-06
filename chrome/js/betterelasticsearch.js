(function($, window, undefined) {
        $('.es-header-uri').live('keydown', function(event) {
            if (13 == event.keyCode || 10 == event.keyCode) {
                event.preventDefault();
                $('.es-cluster button').click();
                //setTimeout($.proxy(function() { this.rebind(); }, this), 1000);
            }
        });
        $('select').live('change', function(event) {
            var nearest = $(this).nearest('input[type=text]');
            nearest.focus();
        });
        $('.es-filterBrowser-filters').live('keydown', function(event) {
            if (13 == event.keyCode || 10 == event.keyCode) {
                event.preventDefault();
                $($.grep($('.es-structuredQuery-body button'), function(ele) {
                    return $(ele).html() == 'Search'; // Find the search button.
                })[0]).click();
            }
        });
})(jQuery, window);
