'use strict';

function unloadFrames (evt) {
  /* jshint unused: false */
  function checkForJSFinish () {
      if ( $('#ppUI').length || $('#pressplusOverlay').length) {
        $('#ppUI').remove();
        $('#pressplusOverlay').remove();
        //clearInterval (jsInitChecktimer);
      }
    }
  setInterval (checkForJSFinish, 111);
}

window.addEventListener ('load', unloadFrames, false);
