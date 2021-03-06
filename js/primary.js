(function() {

  var Module1 = ( function() {

    var utilities = {
    };

    var vendorMethods = {
    };


    // Core Module Functionality
    // -----------------------

    function loadView(path) {

      // if ( $('.content-info').length > 0 ) {
      //   $('.content-info').detach();
      // }

      $('.main-content article').load('views/' + path, function() {

          setTimeout(function() {
              $('.title-wrap h2').addClass('bump');
              //$('.work-item').addClass('bump');
          }, 100)

          TweenMax.staggerFrom(".work-item", .2, {scale:1, opacity:0, x:30, delay:0.4, ease:Linear.easeOut}, 0.1);

      });




    };


    function bindFunctions() {

      $('.nav-links > a').click(function() {

        if ( $(this).hasClass('active') ) {
          return;
        }

        $('.nav-links > a').removeClass('active');
        $(this).addClass('active');
        loadView($(this).data('target'));


      })



      // $('.wrapper').on('mouseover', '.work-item', function() {
      //
      //   $('.work-item').not($(this)).addClass('blur');
      //
      // })
      // $('.wrapper').on('mouseleave', '.work-item', function() {
      //
      //   $('.work-item').removeClass('blur');
      //
      // })
      //




    }

    function init() {
      loadView('portfolio.html');

      bindFunctions();
    }

    return {
      init: init
    };

  } )();

  var Module2 = ( function() {

    var utilities = {

    };

    var vendorMethods = {

    };

    // Core Module Functionality
    // -----------------------

    function example() {
    }

    function bindFunctions() {
        // event binding
    }

    function init() {
      bindFunctions();
    }

    return {
      init: init
    };

  } )();


  Module1.init();
  Module2.init();


}());
