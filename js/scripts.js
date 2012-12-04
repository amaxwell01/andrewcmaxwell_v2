var acm = {
    init : function() {
    },

    // Reize the sidebar so that it is always 100% height when the resolution is above 1200px
    resizeSidebar : function() {
        var windowWidth = $(window).width();
        var header = $('#main_header');
        var inner_container = $('.inner_container');

        if( windowWidth >= 800 ) {
            header.css('height', inner_container.outerHeight(true));
        } else {
            header.css('height', '');
        }
    }
};


$(document).ready( function() {
    acm.init();
});

$(window).resize( function() {
    
});