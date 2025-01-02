
  AOS.init({
    duration:1000
  });


  $('.sliderRapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow:'<i class="fa-solid fa-arrow-left prev">',
    nextArrow:'<i class="fa-solid fa-arrow-right next">'
  });
  

    //  /==== Animate the scroll to top 
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
  