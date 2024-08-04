# keycode.info 
 - how to get keycode
 - queryselector
 - eventListener

# Overview
- identify the key that a user press
- play a sound when any of (a,s,f,f,g,h,j,k,l) those keys is pressed


## But how?
1. we need to associate those keys with a sound
.....
2. Listen for key press
```js
  window.addEventListener('keydown', function(e){
    console.log(e) // gives us information about the key being pressed
  }  );
```
this gives us information about a particular key being pressed
3. we need to play a sound corresponding to that key. the sounds are labels using a code, we can map that code with the keycode

4. document vs window ? for you explore
5. get the audio element which has the same keycode as the key being pressed
6. play that audio


## THings to explore
1. window
2. document
3. eventListeners: mouseover, keydown, onClick, etc
3. queryselectors - by id, by class, selecting all
4. "this"
