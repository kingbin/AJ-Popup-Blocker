
window.addEventListener ("load", unloadFrames, false);

function unloadFrames (evt) {
  var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

  function checkForJS_Finish () {
      if ( $("#ppUI").length || $("#pressplusOverlay").length) {
          $("#ppUI").remove();
          $("#pressplusOverlay").remove();
          //clearInterval (jsInitChecktimer);
      }
  }
}
