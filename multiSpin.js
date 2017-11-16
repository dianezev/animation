/***************************************************************************
 * MULTI-SPIN transition example by Diane Zevenbergen, dianezev@comcast.net
 * Uses transition and transform: rotate() in CSS
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initMultiSpin').on('click', function() {
    toggleMultiSpinSample();
  });
 
  // Run animation example
  $('#multiSpinShape').on('click', function() {
    multiSpinStuff();
  });

  // Hide example
  $('#closeMultiSpin').on('click', function(e) {
    e.stopPropagation();
    toggleMultiSpinSample();
  });

  
  function toggleMultiSpinSample() {
    
    // Toggle class that displays/hides multi spin sample
    if ($('#playMultiSpin').hasClass("hidden-xs-up")) {
      $('#playMultiSpin').removeClass("hidden-xs-up"); 
    } else {
      $('#playMultiSpin').addClass("hidden-xs-up");     
    }  
  }

  function multiSpinStuff() {

    // Toggle class that triggers animated card flip
    // (optionally just use the flipForward piece if no need to flip back)
    if ($('.multiShape').hasClass("spinIt")) {
      $('.multiShape').removeClass("spinIt"); 
    } else {
      $('.multiShape').addClass("spinIt");     
    }
  }
})();
