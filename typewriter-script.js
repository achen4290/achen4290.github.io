document.addEventListener('DOMContentLoaded',function(event){
  var typetime = 600; //time it takes to type a message in ms
  var waittime = 1500; //time it waits between typing and deleting
  var deltime = 600; //tme it takes to del a message in ms

  //array with texts to type in typewriter
  var dataText = [" if-statements.", " Java.", " sorting."];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.getElementById("typewriter").textContent = text.substring(0, i+1);
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, typetime/text.length);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, waittime);
    }
  }

  function delWriter(text, i, fnCallback) {
    if (i >= 0) {
      document.getElementById("typewriter").textContent = text.substring(0, i+1);
      setTimeout(function() {
        delWriter(text, i-1, fnCallback)
      }, deltime/text.length);
    }
    else if(typeof fnCallback == 'function') {
      setTimeout(fnCallback, 500);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 500);
    }
    if (i < dataText[i].length) {
      setTimeout(typeWriter(dataText[i], 0, function() {
        delWriter(dataText[i], dataText[i].length-1, function(){
          StartTextAnimation(i+1);
        });
      }), 500);
    }
  }
  StartTextAnimation(0);
});