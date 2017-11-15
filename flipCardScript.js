/***************************************************************************
 * FLIP CARD TRANSITION: Uses transitions and transform: rotateY in CSS
 * by Diane Zevenbergen, dianezev@comcast.net
 *  (css/html code adapted from https://davidwalsh.name/css-flip)
 *
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initFlipCard').on('click', function() {
    toggleFlipCard();
  });
 
  // Run transition example
  $('#playCard').on('click', function() {
    flipCardOver();
  });
  
  // Hide example
  $('#closeFlipCard').on('click', function(e) {
    e.stopPropagation();
    toggleFlipCard();
  });

  
  function toggleFlipCard() {
    
    // Toggle class that displays/hides card
    if ($('#playCard').hasClass("hidden-xs-up")) {
      $('#flipThis').removeClass("showBack"); 
      $('#playCard').removeClass("hidden-xs-up"); 
    } else {
      $('#playCard').addClass("hidden-xs-up");     
    }  
  }

  function flipCardOver() {

    // Toggle class that triggers card flip
    if ($('#flipThis').hasClass("showBack")) {
      $('#flipThis').removeClass("showBack"); 
    } else {
      $('#flipThis').addClass("showBack");     
    }
  }
})();
