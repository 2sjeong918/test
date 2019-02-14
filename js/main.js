// 메뉴

$(document).ready(
  function () {
    var container = $('.menubar-container');
    var btn = $('.btn-menubar');
    var menubar = $('.menubar');
    var btn_menubar = $('.btn-menubar, .menubar');
    var menu = $('.main-menu');
    var last = $('.main-menu > li:last-child a');

    btn_menubar.click(function () {
      container.toggleClass('menubar-act');
      menu.toggleClass('menu-act');
      if (menu.hasClass('menu-act')) {
        btn.text('메인메뉴 닫기');
      }else{
        btn.text('메인메뉴 열기');
      }
    });
    last.focusout(function () {
      menu.removeClass('menu-act');
      container.removeClass('menubar-act');
    })
  }
  
);


(function(global, $){
  'use strict';
  var $scroll_down = $('.scroll-down'),
      $doc = $('html, body')

      $scroll_down.on('click', function (e) {
        var offsetTop = $('#likelion_num').offset().top - 150;
        $doc.stop().animate({ scrollTop :offsetTop }, 500);
        return false;
      });

  
})(this, this.jQuery);