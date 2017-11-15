/***************************************************************************
 * ZOOM transition example by Diane Zevenbergen, dianezev@comcast.net
 *
 ***************************************************************************/

(function() {
  'use strict';  
  
  // Click sample button to show or hide example
  $('#initZoom').on('click', function() {
    toggleZoomSample();
  });
 
 
  // Run transition example
  $('#playZoom').on('click', function() {
    zoomStuff();
  });


  // Hide example
  $('#closeZoom').on('click', function(e) {
    e.stopPropagation();
    toggleZoomSample();
  });

  
  function toggleZoomSample() {

    // Toggle class that displays/hides zoom sample
    if ($('#playZoom').hasClass("hidden-xs-up")) {
      $('#playZoom').removeClass("hidden-xs-up"); 
    } else {
      $('#playZoom').addClass("hidden-xs-up");
      $('#zoomIntoView').removeClass("inView"); 
    }  
  }
  function zoomStuff() {

    // Toggle class that triggers transition
    if ($('#zoomIntoView').hasClass("inView")) {
      $('#zoomIntoView').removeClass("inView"); 
    } else {
      $('#zoomIntoView').addClass("inView");     
    }
  }

})();
