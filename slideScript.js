/***************************************************************************
 * SLIDE transition example by Diane Zevenbergen, dianezev@comcast.net
 * Uses transition & transform
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initSlide').on('click', function() {
    toggleSlideSample();
  });
 
 
  // Run transition example
  $('#playSlide').on('click', function() {
    slideStuff();
  });


  // Hide example
  $('#closeSlide').on('click', function(e) {
    e.stopPropagation();
    toggleSlideSample();
  });

  
  function toggleSlideSample() {
    
    // Toggle class that displays/hides slide sample
    if ($('#playSlide').hasClass("hidden-xs-up")) {
      $('#playSlide').removeClass("hidden-xs-up"); 
    } else {
      $('#playSlide').addClass("hidden-xs-up");     
      $('#slideIntoView').removeClass("inView");     
    }  
  }
  function slideStuff() {

    // Toggle class that triggers transition
    if ($('#slideIntoView').hasClass("inView")) {
      $('#slideIntoView').removeClass("inView"); 
    } else {
      $('#slideIntoView').addClass("inView");     
    }
  }

})();
