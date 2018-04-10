document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in myText

  var dataText = ["You've accessed the mainframe using a double-handshake attack on the firewall,<br>you need to brute-force the password..."];
  // option 2 aboutMe text
  // var dataText = [ "My Name is James.", "I Love Learning", "Web-Development.", 'All ways be # coding'];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function myText(text, i, fnCallback) {
    // chekc if text is not finished yet
    if (i < (text.length)) {
      // adding plus lining next character to my h1 in .html
     document.getElementById("intro").innerHTML = text.substring(0, i + 1) +'<span Helvetica ="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        myText(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start anima for myText in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start myText animation
     myText(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

