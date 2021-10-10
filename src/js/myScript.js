"use strict"

$(document).ready(function(){


// Модальное окно, всплывающее по таймеру
var lastFocus;

$(".close-popup").click(function (e) {
  popupClose('.popup');
  e.preventDefault();
});

function popupOpen(){
  $('.popup').addClass('open');
  $('.popup').on('click', function(e) {
    if (!e.target.closest('.popup_content')) {
      popupClose(e.target.closest('.popup'));
    }
  });
}

function popupClose(){
  $('.popup').removeClass('open');
  lastFocus.focus();
}

document.addEventListener('keydown', function(e) {
  if (e.which === 27) {
    const popupActive = $('.popup.open');
    popupClose(popupActive);
  }
});

setTimeout(function() {
  lastFocus = document.activeElement;
  popupOpen();
  setTimeout(function() {
    $('#yourEmail').focus();
  }, 500);
}, 15000);



// Слайдер кейсов с вызовом модального окна при нажатии
var $projects = $('.projects');

$projects
  .slick()
  .magnificPopup({
    type: 'image',
    delegate: 'a:not(.slick-cloned)',
    gallery: {
      enabled: true
    },
    callbacks: {
      open: function() {
        var current = $projects.slick('slickCurrentSlide')++;
        $projects.magnificPopup('goTo', current);
      },
      beforeClose: function() {
        $projects.slick('slickGoTo', parseInt(this.index)-1);
      }
    }
});



// Выделение пунктов меню при прокрутке до них
$(window).scroll(() => {
  let scrollDistance = $(window).scrollTop();
  $(".section").each((i, el) => {
    if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
      $("nav a").each((i, el) => {
        if ($(el).hasClass("activeHref")){
            $(el).removeClass("activeHref");
        }
      });
      $('nav li:eq('+ i +')').find('a').addClass('activeHref');
    }
    if($(window).scrollTop() <= $("section.main").height() - $("nav").outerHeight() - 1){
      $("nav a").each((i, el) => {
        if ($(el).hasClass("activeHref")){
            $(el).removeClass("activeHref");
        }
      });
    }
  });
});



// Отложенная анимация при скролле
let options = {threshold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.element_animation');
  elements.each((i,el) => {
    observer.observe(el);
  })
function onEntry (entry){
  entry.forEach(change =>{
    if (change.isIntersecting){
      change.target.classList.add('show_animation');
    }
  });
};


// Ленивая загрузка изображений
let options2 = {threshold: [0.9]};
  let observer2 = new IntersectionObserver(onEntry2, options2);
  let lazyimgs = document.querySelectorAll('.lazyimg');
  lazyimgs.forEach(img => {
    observer2.observe(img);
  });
function onEntry2 (entry2){
  entry2.forEach(change2 =>{
    if (change2.isIntersecting){
      change2.target.src = change2.target.dataset.src;
    }
  });
};



// Плавность скролла якорных ссылок
$('a[href^="#"]').click(function(){
  let valHref = $(this).attr("href");
  $('html, body').animate({scrollTop: $(valHref).offset().top - 20 + "px"});
});



// Анимация увеличения чисел при прокрутке страницы
var show = true;
    var countbox = ".stats_inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.stats_number').css('opacity', '1');
            $('.stats_number').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
            show = false;
        }
    });



// Калькулятор расчёта стоимости
let list1 = document.querySelector('#list1');
let list2 = document.querySelector('#list2');
let list3 = document.querySelector('#list3');
let calc_btn = document.querySelector('#calc_btn');
let time_limit = document.querySelector('#time_limit');
let cost = document.querySelector('#cost');

let calculator = {

  data: [
    [5,10,15,20],
    [1000,2000,3000,4000],
  ],

  calculate: function(){

    if (list1.value === "Opt1"){
      var typeTiming = calculator.data[0][0];
      var typeCost = calculator.data[1][0];
    } else if (list1.value === "Opt2"){
      var typeTiming = calculator.data[0][2];
      var typeCost = calculator.data[1][2];
    } else if (list1.value === "Opt3"){
      var typeTiming = calculator.data[0][3];
      var typeCost = calculator.data[1][3];
    } else if (list1.value === "Opt4"){
      var typeTiming = calculator.data[0][1];
      var typeCost = calculator.data[1][1];
    } else {
      var incorrectInput = 1;
    };

    if (list2.value === "Opt1"){
      var designTiming = calculator.data[0][2];
      var designCost = calculator.data[1][2];
    } else if (list2.value === "Opt2"){
      var designTiming = calculator.data[0][0];
      var designCost = calculator.data[1][0];
    } else if (list2.value === "Opt3"){
      var designTiming = calculator.data[0][3];
      var designCost = calculator.data[1][3];
    } else if (list2.value === "Opt4"){
      var designTiming = calculator.data[0][1];
      var designCost = calculator.data[1][1];
    } else {
      var incorrectInput = 1;
    };

    if (list3.value === "Opt1"){
      var adaptiveTiming = calculator.data[0][0];
      var adaptiveCost = calculator.data[1][0];
    } else if (list3.value === "Opt2"){
      var adaptiveTiming = calculator.data[0][1];
      var adaptiveCost = calculator.data[1][1];
    } else if (list3.value === "Opt3"){
      var adaptiveTiming = calculator.data[0][2];
      var adaptiveCost = calculator.data[1][2];
    } else if (list3.value === "Opt4"){
      var adaptiveTiming = calculator.data[0][3];
      var adaptiveCost = calculator.data[1][3];
    } else {
      var incorrectInput = 1;
    };

    let resultTiming = typeTiming + designTiming + adaptiveTiming;
    let resultCost = typeCost + designCost + adaptiveCost;

    return [resultTiming, resultCost, incorrectInput];
    },

};

calc_btn.onclick = function(){
    if (calculator.calculate()[2] === 1){
      alert("Данные не указаны, либо указаны не верно");
    } else {
      time_limit.innerHTML = calculator.calculate()[0] + " д.";
      cost.innerHTML = calculator.calculate()[1] + " р.";
    };
  }


});