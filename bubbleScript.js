/***************************************************************************
 * Animated Bubbles Example by Diane Zevenbergen, dianezev@comcast.net
 *
 * This code displays a message modal with animated bubbles in background.
 * Note that the number of bubbles is dependent on the value of 'correct'
 * which is hardcoded for this example.
 ***************************************************************************/

(function() {
  'use strict';   

  var hoverInput = false;
  var lastOption = '';
  var bubbleTimer = -1;
  var COLORS = ["CornflowerBlue", "DarkMagenta", "LimeGreen", "OrangeRed",
                "SeaGreen", "Yellow","RoyalBlue", "Coral", "Crimson",
                 "Indigo", "MediumPurple", "DarkCyan", "FireBrick",
                 "DodgerBlue", "Gold", "LightSeaGreen", "Aquamarine",
                 "ForestGreen", "HotPink", "DarkViolet"];
  var SIZES = ["3em","3.5em","4em","4.5em","5em","5.5em",
               "6em","6.5em", "7em","7.5em"];

  
  $('#myModal').on('click', function() {
    endTimedTest();
  });

  $('#closeTestResults').on('click', function() {
    handleTestResults();
  });
  
  function handleTestResults() {
    $('#topicTestResults').addClass('hidden-xs-up');

    // Send overlay to back
    $('#cover').removeClass('coverAll');
  }
  

  function endTimedTest() {
    var opName = "Addition";
    var label = "+2";
    var correct = 36;
    var attempted = 42;
    var missed = attempted - correct;
    var percent = Math.round((correct/attempted) * 100);
    var text1 = opName + ': ' + label;
    var htmlErrors = '';
    var errorArray = [];
    var tblHead = 'this is the table head...';
    var msg = 'message to highlight...';

    /*
     * If user had errors, use .slice to get an array of error
     * info for mistakes made during the just completed timed
     * test. Note that we're only displaying errors for the
     * MOST RECENT timed test, so any earlier errors at same
     * level (from practice or test)
     * are not included.
     */
    if (missed) {

      $('.errorTable').removeClass('hidden-xs-up');


      htmlErrors = "<p>the errors would go here</p>";

    // Hide error table if no errors
    } else {
        $('.errorTable').addClass('hidden-xs-up');
    }

    // Show results if user attempted at least one problem
    if (attempted > 0) {
      if (missed === 1) {
        tblHead = '1 Error';
      } else if (missed > 1) {
        tblHead = missed + ' Errors';
      }
      $('#test_level').html(text1);
      $('#test_correct').html("<p>Correct:" + correct + "</p><p>Attempted:" + attempted + "</p><p>Missed:" + missed + "</p>");
      $('#topicTestResults th').empty().append(tblHead);
      $('#topicTestResults tbody').empty().append(htmlErrors);
      $('#topicTestResults').removeClass('hidden-xs-up');
      document.activeElement.blur();

      // Bring overlay to front while displaying test results
      $('#cover').addClass('coverAll');

      /*
       * Could add conditional here
       * to vary msg
       */
      $('#test_moveUp').empty().append(msg);
    }

    // Change sidebar highlight to 'practice'
//    myThis.cancelTimer();
    makeBubbles(correct, 70, '2s');
  }





  /*
   * This function displays bubbles on the screen of various sizes & colors.
   * 'span' indicates MS time that passes from one bubble to next and 'duration'
   * is the # seconds (as string, i.e. '2s') that passes before all bubbles are
   * cleared from screen.  Note that 'duration' should exceed
   * 'span' * 'bubbleNum' otherwise not all bubbles will have time to display.
   */
  function makeBubbles(bubbleNum, span, duration) {
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

      if (i < bubbleNum) {

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


