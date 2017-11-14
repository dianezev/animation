/***************************************************************************
 * Animated Card Flip Example by Diane Zevenbergen, dianezev@comcast.net
 *  (css/html code adapted from https://davidwalsh.name/css-flip)
 *
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initSpin').on('click', function() {
    toggleSpinSample();
  });
 
  // Run animation example
  $('#playSpin').on('click', function() {
    spinStuff();
  });

  // Hide example
  $('#closeSpin').on('click', function() {
    toggleSpinSample();
  });

  
  function toggleSpinSample() {
    
    // Toggle class that displays/hides spin sample
    if ($('#playSpin').hasClass("hidden-xs-up")) {
      $('#playSpin').removeClass("hidden-xs-up"); 
    } else {
      $('#playSpin').addClass("hidden-xs-up");     
    }  
  }

  function spinStuff() {

//    // Toggle class that triggers animated card flip
//    // (optionally just use the flipForward piece if no need to flip back)
//    if ($('#flipThis').hasClass("showBack")) {
//      $('#flipThis').removeClass("showBack"); 
//    } else {
//      $('#flipThis').addClass("showBack");     
//    }
  }
})();
