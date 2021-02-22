$(document).ready(function() {
    $(window).on("scroll", function(){
        $('.scrollfade').each( function(i){
            var bottom_of_object = $(this).position().top + ($(this).outerHeight())/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});