$(document).ready(function () {
 
  var show = true;
  var countbox = ".statistics__count";
  $(window).on("scroll load resize", function () {
      if (!show) return false;
      var w_top = $(window).scrollTop(); 
      var e_top = $(countbox).offset().top; 
      var w_height = $(window).height(); 
      var d_height = $(document).height(); 
      var e_height = $(countbox).outerHeight(); 
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.count').css('opacity', '1');
          $('.count').spincrement({
              thousandSeparator: " ",
              duration: 1500,
              from: 18180,
          });
           
          show = false;
      }
  });

});
