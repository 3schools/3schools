
function record(v){
recognition.start();
recognition.onresult = event => {
  const speechToText = event.results[event.results.length - 1][0];
  let text = speechToText.transcript;
if(v!=1){
document.querySelector(".cE").innerHTML += text;
}else{
document.querySelector("#search-input").value = text;
if (
    text.indexOf("What is your name") >= 0 ||
    text.indexOf("What's your name") >= 0||
    text.indexOf("Who are you") >= 0
  ) {
    speak(`Hello, I am your 3schools's assistant.`);
  } else if (
    text.indexOf("time") >= 0 ||
    text.indexOf("what's the time") >= 0 ||
    text.indexOf("what is the day") >= 0 ||
    text.indexOf("date") >=0
  ) {
    let t = currentTime();
    speak(t);
  }
  
else {
    speak(`I have founded these results`);
    document.querySelector("#search-form").submit();
  }
};

}
}
function currentTime() {
  let date = new Date();
  return ` ${date.getHours()} ${date.getMinutes()} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`;
}
 
