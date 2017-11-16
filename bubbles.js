/***************************************************************************
 * Animated Bubbles Example by Diane Zevenbergen, dianezev@comcast.net
 *
 * This code displays a message modal with animated bubbles in background.
 * Note that the number of bubbles is dependent on the value of 'bubbleCount'
 ***************************************************************************/

(function() {
  'use strict';   

  var bubbleTimer = -1;
  var COLORS = ["CornflowerBlue", "DarkMagenta", "LimeGreen", "OrangeRed",
                "SeaGreen", "Yellow","RoyalBlue", "Coral", "Crimson",
                 "Indigo", "MediumPurple", "DarkCyan", "FireBrick",
                 "DodgerBlue", "Gold", "LightSeaGreen", "Aquamarine",
                 "ForestGreen", "HotPink", "DarkViolet"];
  var SIZES = ["3em","3.5em","4em","4.5em","5em","5.5em",
               "6em","6.5em", "7em","7.5em"];

  
  $('#initBubbles').on('click', function() {
    makeBubbleBackground();
  });

  $('#closeUserMsg').on('click', function() {
    handleUserMsg();
  });
  
  function handleUserMsg() {
    $('#userMsg').addClass('hidden-xs-up');

    // Send overlay to back
    $('#coverBubbles').removeClass('coverAll');
  }
  

  function makeBubbleBackground() {
    var bubbleCount = 36;
    var msg = 'highlighted message...';

      $('#userMsg').removeClass('hidden-xs-up');
      document.activeElement.blur();

      // Bring overlay to front while displaying test results
      $('#coverBubbles').addClass('coverAll');

      // Could add conditional here to vary msg
      $('#test_moveUp').empty().append(msg);

    // Function animates bubbles (bubble count = bubbleCount)
    makeBubbles(bubbleCount, 70, '2s');
  }

  /*
   * This function displays bubbles on the screen of various sizes & colors.
   * 'span' indicates MS time that passes from one bubble to next and 'duration'
   * is the # seconds (as string, i.e. '2s') that passes before all bubbles are
   * cleared from screen.  Note that 'duration' should exceed
   * 'span' * 'bubbleCount' otherwise not all bubbles will have time to display.
   */
  function makeBubbles(bubbleCount, span, duration) {
    var animString = 'bubbles ' + duration + ' 1';
    var i = 0;
    var numSizes = SIZES.length;
    var numColors = COLORS.length;
    var bubbleHTML = '<div class="blob"></div>';
    var c;
    var s;
    var l;
    var t;

    // Run bubble animation
    bubbleTimer = window.setInterval(bubbleFlash, span);

    // Animates bubble, various sizes/colors
    function bubbleFlash() {

      if (i < bubbleCount) {

        // Add a div for a bubble
        if ($('#bubbleContainer').is(':empty')){
            $('#bubbleContainer').html(bubbleHTML);
        } else {
            $('#bubbleContainer div:last').after(bubbleHTML);
        }

        // Use randoms to pick color, size & location for bubble
        c = Math.floor(Math.random()*numColors);
        s = Math.floor(Math.random()*numSizes);
        l = Math.floor(Math.random()*90);
        t = Math.floor(Math.random()*90);

        // Assign properties to bubble & animate
        $( ".blob").last().css({
            width: SIZES[s],
            height: SIZES[s],
            backgroundColor: COLORS[c],
            left: l + '%',
            top: t + '%',
            animation: animString
        });

        i++;
      } else {

        // Fade out & remove all bubbles
        window.clearInterval(bubbleTimer);
        bubbleTimer = window.setTimeout(function() {
        $('.blob').fadeOut('slow', function() {
            $('#bubbleContainer').empty();
            window.clearInterval(bubbleTimer);
        });},2000);
      }
    }
  }
})();


