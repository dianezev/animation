/***************************************************************************
 * SLIDE IN animation example by Diane Zevenbergen, dianezev@comcast.net
 * Uses animation and @keyframes
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initSlideIn').on('click', function() {
    toggleSlideInSample();
  });
 

  // Hide example
  $('#closeSlideIn').on('click', function(e) {
    e.stopPropagation();
    toggleSlideInSample();
  });

  
  function toggleSlideInSample() {
    
    // Toggle class that displays/hides slide-in sample
    if ($('#playSlideIn').hasClass("hidden-xs-up")) {
      $('#playSlideIn').removeClass("hidden-xs-up"); 
    } else {
      $('#playSlideIn').addClass("hidden-xs-up");     
    }  
  }
})();
