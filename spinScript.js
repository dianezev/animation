/***************************************************************************
 * SPIN transition example by Diane Zevenbergen, dianezev@comcast.net
 * Uses transition and transform: rotate() in CSS
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
  $('#closeSpin').on('click', function(e) {
    e.stopPropagation();
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

    // Toggle class that triggers animated card flip
    // (optionally just use the flipForward piece if no need to flip back)
    if ($('#spinShape').hasClass("spinIt")) {
      $('#spinShape').removeClass("spinIt"); 
    } else {
      $('#spinShape').addClass("spinIt");     
    }
  }
})();
