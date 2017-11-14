/***************************************************************************
 * Animated Card Flip Example by Diane Zevenbergen, dianezev@comcast.net
 *  (css/html code adapted from https://davidwalsh.name/css-flip)
 *
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initFlipCard').on('click', function() {
    toggleFlipCard();
  });
 
  // Run animation example
  $('#playCard').on('click', function() {
    flipCardOver();
  });
  
  // Hide example
  $('#closeFlipCard').on('click', function() {
    toggleFlipCard();
  });

  
  function toggleFlipCard() {
    
    // Toggle class that displays/hides card
    if ($('#playCard').hasClass("hidden-xs-up")) {
      $('#playCard').removeClass("hidden-xs-up"); 
    } else {
      $('#playCard').addClass("hidden-xs-up");     
    }  
  }

  function flipCardOver() {

    // Toggle class that triggers animated card flip
    // (optionally just use the flipForward piece if no need to flip back)
    if ($('#flipThis').hasClass("showBack")) {
      $('#flipThis').removeClass("showBack"); 
    } else {
      $('#flipThis').addClass("showBack");     
    }
  }
})();
