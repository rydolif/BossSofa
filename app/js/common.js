$(function() {

$(".preloader").delay(1000).fadeOut();

//------------------------------гамбургер-----------------------------
$('.hamburger--3dx').click(function() {
  $(this).toggleClass('is-active');
  $('nav').toggleClass('nav-active');
  $('header').toggleClass('header__menu');
  $('.main').toggleClass('main__menu');
});

//-------------------------------переключатель---------------------------------------
$('.button').click(function (){
  $(this).toggleClass('button-active');
  $(this).next().toggleClass('underline');
  $(this).prev().toggleClass('underline');
});

//----------------------------------slider------------------------------------------
var swiper = new Swiper('.articles__list', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

var swiper = new Swiper('.reviews__list', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

var swiper = new Swiper('#one', {
  slidesPerView: 1,
  spaceBetween: 30,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});


var swiper = new Swiper('#two', {
  slidesPerView: 1,
  spaceBetween: 30,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

var swiper = new Swiper('#three', {
  slidesPerView: 1,
  spaceBetween: 30,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

var swiper = new Swiper('#four', {
  slidesPerView: 1,
  spaceBetween: 30,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
//---------------------------------------card tabs----------------------------------
$('.card__wrap').hide();
$('.card__wrap:first').show();
$('.tabs ul a:first').addClass('active');

$('.tabs ul a').click(function(event){
  event.preventDefault();
  $('.tabs ul a').removeClass('active');
  $(this).addClass('active');
  $('.card__wrap').hide();

  var selectTab = $(this).attr('href');
  $(selectTab).fadeIn();
});

//---------------------------------------documentation tabs----------------------------------


//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

  $(".consultation-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".consultation-form").find("input[name=name]").val(),
        phone: jQuery(".consultation-form").find("input[name=phone]").val(),
        subject: jQuery(".consultation-form").find("input[name=subject]").val()
      };
      ajaxSend('.consultation-form', t);
    }
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>5){
          $('.header').addClass('header__active');
      }
      else if ($(this).scrollTop()<5){
          $('.header').removeClass('header__active');
      }
  });

});

