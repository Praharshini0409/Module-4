(function() {


    // Module 4 Assignment Instructions.

    /*
     Hello Yaakov
     Good Bye John
     Good Bye Jen
     Good Bye Jason
     Hello Paul
     Hello Frank
     Hello Larry
     Hello Paula
     Hello Laura
     Good Bye Jim
  
     WARNING!!! WARNING!!!
     T
  
     */


    // Wrap the entire contents of script.js inside of an IIFE
    // See Lecture 52, part 2
    // (Note, Step 2 will be done in the SpeakHello.js file.)

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];



    for (var i = 0; i < names.length; i++) {


        var firstLetter = names[i].charAt(0).toLowerCase();


        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();