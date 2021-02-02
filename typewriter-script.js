// document.addEventListener('DOMContentLoaded',function(event){
//   var typetime = 1000; //time it takes to type a message in ms
//   var waittime = 2000; //time it waits between typing and deleting in ms
//   var deltime = 1000; //tme it takes to del a message in ms
//   var dataText = [" if-statements.", " Java.", " sorting."];

//   var span = document.getElementById("typewriter");

//   function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   function typer(idx) {
//     //type message
//     var typetime_char = Math.floor(typetime / dataText[idx].length);
//     for(var i = 0; i < dataText[idx].length; i++) {
//       span.textContent = dataText[idx].substring(0,i+1);
//       await sleep(100);
//     }

//     //wait
//     await sleep(2000);

//     //delete message
//     var deltime_char = Math.floor(deltime / dataText[idx].length);
//     for(var i = dataText[idx].length-1; i >= 0; i--) {
//       span.textContent = dataText[idx].substring(0,i+1);
//       await sleep(100);
//     }

//     idx++;
//     idx %= dataText.length;
//     typer(idx);
//   }
//   typer(0);
// });

  
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Amsterdam.", "Full Service.", "Webdevelopment.", "Vivank"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById("typewriter").dataText = text.substring(0, i+1);

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation((i + 1) % dataText.length);
     });
    }

  }
  // start the text animation
  StartTextAnimation(0);
});
