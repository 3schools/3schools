function addItem(t) {
    let alo = localStorage.getItem('my');
    let target = [];
    if (alo) {
      target = JSON.parse(alo);

    }
    
  var today = new Date();
  var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
 

    target.push({
      id:date + ' ' + time,
      title:t.title,
      url: t.name
    });

const ids = target.map(o => o.url)
const unique = target.filter(({url}, index) => !ids.includes(url, index + 1))
    localStorage.setItem('my', JSON.stringify(unique));
  }


var tweets = [];
let gpa = localStorage.getItem("my");

tweets = JSON.parse(gpa);
tweets.forEach(function (a) {
        var li = document.createElement('li'),
            anchor = document.createElement('a'),
  buttonDelete = document.createElement("span");
  buttonDelete.innerHTML = '<span del-date="'+a.id+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink"><path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M6 10h52m-36 0V5.9A3.9 3.9 0 0 1 25.9 2h12.2A3.9 3.9 0 0 1 42 5.9V10m10.5 0l-2.9 47.1a5 5 0 0 1-4.9 4.9H19.3a5 5 0 0 1-4.9-4.9L11.5 10" stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M32 18v36M22 18l2 36m18-36l-2 36" stroke-linejoin="round" stroke-linecap="round"></path></svg></span>';
 // buttonDelete.classList="fpdB";
buttonDelete.classList="favoriteL";
  buttonDelete.onclick = deleteItem;
        anchor.href = a.url;
        //anchor.target = '_blank';
        anchor.text = a.title;
        li.classList="item-title";
        li.appendChild(anchor);
        li.appendChild(buttonDelete);
document.querySelector("#list").appendChild(li);
  

function deleteItem(e) {
    var ul = document.getElementById('list');
    ul.removeChild(li);
    var delDate = e.target.getAttribute('del-date');
      let index = tweets.map((item) => item.id).indexOf(delDate);
      tweets.splice(index, 1);
localStorage.setItem('my', JSON.stringify(tweets));


 
}
})


if (
  "SpeechRecognition" in window ||
  "webkitSpeechRecognition" in window ||
  "mozSpeechRecognition" in window ||
  "msSpeechRecognition" in window
) {
  var recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
} else {
  console.error("Sorry, Speech Recognition is not supported in your browser.");
}

recognition.continuous = true;
recognition.lang = "bn";
recognition.rate=7;
recognition.volume=9;
recognition.pitch=9;
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
    text.indexOf("তোমার নাম কি") >= 0 ||
    text.indexOf("তুমি কে") >= 0||
    text.indexOf("আপনি কে") >= 0||
    text.indexOf("হোয়াট ইজ ইওর নেম") >= 0
  ) {
    speak(" ওহো, আমি নিজের পরিচয় দিতে ভুলে গেছি ? হাই, আমার নাম অপু। ।।তোমার নাম কী? ");
  } else if (text.indexOf("সার্চ") >= 0) {
   
    let q = text.substr(text.indexOf("সার্চ") + 5);
speak(` আক্স থ্রি স্কুলসে সার্চ করা হল ${q}`);
    window.open(`https://ask.3schools.in/search?q=${q}`,`_self`);
  } else if (
    text.indexOf("টাইম") >= 0 ||
    text.indexOf("এখন কটা বাজছে") >= 0 ||
    text.indexOf("সময়") >= 0 ||
    text.indexOf("হোয়াট ইজ দা টাইম") >=0
  ) {
    let t = currentTime();
    speak(t);
  } else if (text.indexOf("আমার নাম") >= 0) {
let name = text.substr(text.indexOf("নাম") + 3); // Split name from text
    speak(`হ্যালো...হ্যাল্লো! ${name} আশা করি আজকের দিনটা আপনার খুব ভালো  কাটছে। আমি কিভাবে সাহায্য করতে পারি ,বলুন? `);
  } else if(
    text.indexOf("তুমি ছেলে না মেয়ে") >= 0 ||
    text.indexOf("ছেলে না মেয়ে") >= 0 
    ) {
    speak("আপনার পরাণ যাহা চায় .....আমি তাই, আমি তাই গো,💗"
      );
  } else if (
    text.indexOf("গুডবাই") >= 0||
    text.indexOf("বাই") >= 0||
    text.indexOf("রাখ") >= 0 ||
    text.indexOf("ঠিক আছে ") >= 0 ||
    text.indexOf("আমি কিন্তু রেগে যাচ্ছি") >= 0 ||
    text.indexOf("চুপ") >= 0
    ){
    speak("ঠিক আছে, আমি চুপ করে যাচ্ছি!");
  } else if (
    text.indexOf("আমি তোমার সাথে কথা বলব না") >= 0 ||
    text.indexOf("তুমি কথা বলতে পারো না।") >= 0 ||
    text.indexOf("তুমি খারাপ") >= 0
  ) {
    speak(` দুঃখিত, আমি কী কিছু ভুল করে ফেলেছি? এখনো আমি পুরোপুরি সব শিখিনি।`);
  } else {
    speak(`আক্স থ্রি স্কুলসে আমি এইগুলো খুজে পেয়েছি`);
    document.querySelector("#search-form").submit();
  }
};

}
}
function currentTime() {
  let date = new Date();
  return `এখন সময় ${date.getHours()} ${date.getMinutes()} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`;
}


function speak(text) {
  recognition.stop();

  let msg = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(msg);
  return;
}
