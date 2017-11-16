/***************************************************************************
 * Animated Boxes Example by Diane Zevenbergen, dianezev@comcast.net
 *
 * This code displays a message modal with animated boxes in background.
 * Note that the number of boxes is dependent on the value of 'boxCount'
 ***************************************************************************/


(function() {
  'use strict';   

  var boxTimer = -1;
  var COLORS = ["#d31b1b", "#fa7808", "#ffff3a", "#27be27",
                "#3333b2", "#be32be"];
  var SIZES = ["3em","3.5em","4em","4.5em","5em","5.5em",
               "6em","6.5em", "7em","7.5em"];
  
  $('#initBoxes').on('click', function() {
    makeBoxBackground();
  });

  $('#closeUserMsg2').on('click', function() {
    handleUserMsg2();
  });
  
  function handleUserMsg2() {
    $('#userMsg2').addClass('hidden-xs-up');

    // Send sheer overlay to back
    $('#coverBoxes').removeClass('coverItUp');
  }
  

  function makeBoxBackground() {
    var boxCount = 36;
    var msg = 'highlighted message...';

      $('#userMsg2').removeClass('hidden-xs-up');
      document.activeElement.blur();

      // Bring sheer overlay to front while displaying message
      $('#coverBoxes').addClass('coverItUp');

      // Could add conditional here to vary msg
      $('#msg_moveUp').empty().append(msg);

    // Function animates boxes
    makeBoxes(boxCount, 70, '2s');
  }

  /*
   * This function displays boxes on the screen of various sizes & colors.
   * 'span' indicates MS time that passes from one box to next and 'duration'
   * is the # seconds (as string, i.e. '2s') that passes before all boxes are
   * cleared from screen.  Note that 'duration' should exceed
   * 'span' * 'boxCount' otherwise not all boxes will have time to display.
   */
  function makeBoxes(boxCount, span, duration) {
    var animString = 'growSpin 6s 1';
    var i = 0;
    var numSizes = SIZES.length;
    var numColors = COLORS.length;
    var boxHTML = '<div class="box"></div>';
    var c;
    var s;
    var l;
    var t;

    // Run box animation
    boxTimer = window.setInterval(boxFlash, span);

    // Animates box, various sizes/colors
    function boxFlash() {

      if (i < boxCount) {

        // Add a div for a box
        if ($('#boxContainer').is(':empty')){
            $('#boxContainer').html(boxHTML);
        } else {
            $('#boxContainer div:last').after(boxHTML);
        }

        // Use randoms to pick color, size & location for box
        c = Math.floor(Math.random()*numColors);
        s = Math.floor(Math.random()*numSizes);
        l = Math.floor(Math.random()*90);
        t = Math.floor(Math.random()*90);

        // Assign properties to box & animate
        $( ".box").last().css({
            width: SIZES[s],
            height: SIZES[s],
            backgroundColor: COLORS[c],
            left: l + '%',
            top: t + '%',
            animation: animString
        });

        i++;
      } else {

        // Fade out & remove all boxes
        window.clearInterval(boxTimer);
        boxTimer = window.setTimeout(function() {
        $('.box').fadeOut('slow', function() {
            $('#boxContainer').empty();
            window.clearInterval(boxTimer);
        });},3000);
      }
    }
  }
})();


