function shout(hello) {
    return hello.toUpperCase();
  }
function whisper(hello) {
    return hello.toLowerCase()
}
function logShout(hello) {
  console.log("HELLO");
}
logShout("HELLO")
function logWhisper(hello){
  console.log("hello");
}
logWhisper("hello")
function sayHiToHeadphonedRoommate(hello) {
  if (hello === hello.toLowerCase()) {
    return "I can't hear you!"
  }
   else if (hello === hello.toUpperCase()) {
    return "YES INDEED!";
   } 
   else if (hello === "Let's have dinner together!") {
    return "I would love to!"
   }
}

