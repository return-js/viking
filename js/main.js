$(function(){

  $('[data-fancybox]').fancybox({
     youtube: {
       controls: 0,
       showinfo: 0
     }
   });

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ' <button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
    nextArrow: ' <button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
    asNavFor: '.heroes__slider-text'
  });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    arrows: false
  });

});
