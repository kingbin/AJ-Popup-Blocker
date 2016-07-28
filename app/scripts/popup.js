'use strict';

function unloadFrames (evt) {
  /* jshint unused: false */
  function checkForJSFinish () {
      if ( $('#syncronexOverlayContainer').length) {
        $('#syncronexOverlayContainer').remove();
        $('#syncronexOverlay').remove();
        //clearInterval (jsInitChecktimer);
      }
    }
  setInterval (checkForJSFinish, 111);
}

window.addEventListener ('load', unloadFrames, false);
