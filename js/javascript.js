
      $(document).ready(function(){
        $(".hamburger-icon").click(function(){
          $(".hamburger-text").slideDown(1000);
        });
       
      
        $(".hamburger-text i").click(function(){
          $(".hamburger-text").slideUp(1000);
        });
        
      }); 
   $('.partners-logo-row').slick({
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        prevArrow: 0,
        nextArrow: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });




AOS.init({
            duration: 1000
          });

          var btn = $('#button');

          $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
              btn.addClass('show');
            } else {
              btn.removeClass('show');
            }
          });
          
          btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '3000');
          });
          
          