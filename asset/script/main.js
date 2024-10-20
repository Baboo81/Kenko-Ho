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

//Slider:
let next = document.querySelector('.carousel-control-next');
let prev = document.querySelector('.carousel-control-prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

