"use strict"

//NavBar Slide Toggle:
$(document).ready(function(){

    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
});

//Stickey NavBar:
$(window).scroll(function(){

    var scroll = $(this).scrollTop();

    if(scroll > 100){
       $('header').addClass('sticky');
    }else{
       $('header').removeClass('sticky');
    }
});

