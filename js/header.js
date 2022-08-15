/** For Navbar Scroll hide and show */
$(function(){
    var scroll = $(document).scrollTop();
    var navHight = $('.navbar').outerHeight();
    $(window).scroll(function(){
        var scrolled =$(document).scrollTop();

        if(scrolled > navHight){
            $('.navbar').addClass('animate');
        }else{
            $('.navbar').removeClass('animate');
        }

       /* if(scrolled > scroll){
            $('.navbar').removeClass('sticky');
        }else{
            $('.navbar').addClass('sticky');
        }*/

        scroll=$(document).scrollTop();

    });

});

