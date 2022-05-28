var _0x25ba9e=_0x396f;(function(_0x320d51,_0x53918d){var _0x867130=_0x396f,_0x36da38=_0x320d51();while(!![]){try{var _0x2fe870=parseInt(_0x867130(0x99))/0x1*(parseInt(_0x867130(0x84))/0x2)+-parseInt(_0x867130(0xae))/0x3+-parseInt(_0x867130(0xb0))/0x4+-parseInt(_0x867130(0x7f))/0x5*(parseInt(_0x867130(0x89))/0x6)+-parseInt(_0x867130(0x83))/0x7+-parseInt(_0x867130(0x97))/0x8+parseInt(_0x867130(0xa2))/0x9;if(_0x2fe870===_0x53918d)break;else _0x36da38['push'](_0x36da38['shift']());}catch(_0xf01c70){_0x36da38['push'](_0x36da38['shift']());}}}(_0x1170,0x92b52),$('.searchbar\x20input')['on'](_0x25ba9e(0xbb),function(_0x344983){var _0xa3ebb4=_0x25ba9e,_0x402ddc=$(this)[_0xa3ebb4(0x9f)]();_0x402ddc?$['ajax']({'type':_0xa3ebb4(0xbc),'url':'/feeds/posts/summary','data':{'max-results':0x19,'alt':'json','q':_0x402ddc},'dataType':_0xa3ebb4(0x8c),'success':function(_0x31928f){var _0x162b31=_0xa3ebb4;$(_0x162b31(0xa0))['removeClass'](_0x162b31(0x8d)),$(_0x162b31(0xbf))[_0x162b31(0xaa)]();if(_0x31928f[_0x162b31(0x86)][_0x162b31(0xb2)])for(var _0x295755=0x0;_0x295755<_0x31928f[_0x162b31(0x86)][_0x162b31(0xb2)][_0x162b31(0x82)];_0x295755++){for(var _0xe5e48=0x0;_0xe5e48<_0x31928f['feed'][_0x162b31(0xb2)][_0x295755]['link'][_0x162b31(0x82)];_0xe5e48++){if(_0x31928f[_0x162b31(0x86)][_0x162b31(0xb2)][_0x295755][_0x162b31(0xb5)][_0xe5e48][_0x162b31(0xb6)]==_0x162b31(0x90)){var _0x643aa2=_0x31928f[_0x162b31(0x86)][_0x162b31(0xb2)][_0x295755][_0x162b31(0xb5)][_0xe5e48][_0x162b31(0x80)];break;}}var _0x499c70=_0x31928f[_0x162b31(0x86)][_0x162b31(0xb2)][_0x295755]['title']['$t'];$(_0x162b31(0xbf))[_0x162b31(0x94)](_0x162b31(0x98)+_0x643aa2+_0x162b31(0xba)+_0x499c70+'\x22>'+_0x162b31(0x9c)+_0x499c70+'</a></li>');}else $('.results-content')['addClass'](_0x162b31(0x8d));}}):$('.results-content')[_0xa3ebb4(0x7d)](_0xa3ebb4(0x8d)),$(_0xa3ebb4(0xbd))[_0xa3ebb4(0x8a)](function(){var _0x2323fd=_0xa3ebb4;$('.results-content')[_0x2323fd(0x7d)]('hidden');});}));function addItem(_0xb0c090){var _0x32ab28=_0x25ba9e;let _0x24deae=localStorage['getItem']('my'),_0x2aba68=[];_0x24deae&&(_0x2aba68=JSON[_0x32ab28(0xa9)](_0x24deae));var _0x2d7b1c=new Date(),_0x3bfc17=_0x2d7b1c[_0x32ab28(0xb7)]()+'-'+(_0x2d7b1c[_0x32ab28(0xa7)]()+0x1)+'-'+_0x2d7b1c[_0x32ab28(0xbe)](),_0x2f8d6e=_0x2d7b1c[_0x32ab28(0xa6)]()+':'+_0x2d7b1c['getMinutes']()+':'+_0x2d7b1c[_0x32ab28(0xab)]();_0x2aba68[_0x32ab28(0xa3)]({'id':_0x3bfc17+'\x20'+_0x2f8d6e,'title':_0xb0c090[_0x32ab28(0xb3)],'url':_0xb0c090[_0x32ab28(0x87)]});const _0x1cc0b8=_0x2aba68['map'](_0xcaeb98=>_0xcaeb98[_0x32ab28(0x7c)]),_0x5ef7b1=_0x2aba68[_0x32ab28(0x9d)](({url:_0x3ad75a},_0x1c3ba6)=>!_0x1cc0b8[_0x32ab28(0xb1)](_0x3ad75a,_0x1c3ba6+0x1));localStorage[_0x32ab28(0x8f)]('my',JSON[_0x32ab28(0xac)](_0x5ef7b1));}var tweets=[];let gpa=localStorage[_0x25ba9e(0x81)]('my');tweets=JSON['parse'](gpa),tweets['forEach'](function(_0x9e3e16){var _0x3875ac=_0x25ba9e,_0x30ed80=document[_0x3875ac(0x9b)]('li'),_0x255697=document['createElement']('a'),_0x45466a=document[_0x3875ac(0x9b)](_0x3875ac(0x88));_0x45466a['innerHTML']=_0x3875ac(0x7e)+_0x9e3e16['id']+_0x3875ac(0x92),_0x45466a[_0x3875ac(0x8e)]=_0x3875ac(0x85),_0x45466a['onclick']=_0x19604a,_0x255697[_0x3875ac(0x80)]=_0x9e3e16[_0x3875ac(0x7c)],_0x255697[_0x3875ac(0x96)]=_0x9e3e16[_0x3875ac(0xb3)],_0x30ed80[_0x3875ac(0x8e)]='item-title',_0x30ed80[_0x3875ac(0x9e)](_0x255697),_0x30ed80[_0x3875ac(0x9e)](_0x45466a),document['querySelector'](_0x3875ac(0xa4))[_0x3875ac(0x9e)](_0x30ed80);function _0x19604a(_0x4fdf24){var _0x4b4f0d=_0x3875ac,_0x962e4b=document[_0x4b4f0d(0xa1)]('list');_0x962e4b[_0x4b4f0d(0xb9)](_0x30ed80);var _0x4c3918=_0x4fdf24['target']['getAttribute'](_0x4b4f0d(0xa5));let _0x105352=tweets[_0x4b4f0d(0x91)](_0x333b28=>_0x333b28['id'])[_0x4b4f0d(0x9a)](_0x4c3918);tweets['splice'](_0x105352,0x1),localStorage[_0x4b4f0d(0x8f)]('my',JSON['stringify'](tweets));}});function _0x1170(){var _0x306acb=['getFullYear','.results','url','addClass','<span\x20del-date=\x22','407335YOhTuC','href','getItem','length','5590963fJKOby','22rFfARm','favoriteL','feed','name','span','54GJDYPe','click','volume','jsonp','hidden','classList','setItem','alternate','map','\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2064\x2064\x22\x20aria-labelledby=\x22title\x22\x20aria-describedby=\x22desc\x22\x20role=\x22img\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22><path\x20data-name=\x22layer2\x22\x20fill=\x22none\x22\x20stroke=\x22#202020\x22\x20stroke-miterlimit=\x2210\x22\x20stroke-width=\x222\x22\x20d=\x22M6\x2010h52m-36\x200V5.9A3.9\x203.9\x200\x200\x201\x2025.9\x202h12.2A3.9\x203.9\x200\x200\x201\x2042\x205.9V10m10.5\x200l-2.9\x2047.1a5\x205\x200\x200\x201-4.9\x204.9H19.3a5\x205\x200\x200\x201-4.9-4.9L11.5\x2010\x22\x20stroke-linejoin=\x22round\x22\x20stroke-linecap=\x22round\x22></path><path\x20data-name=\x22layer1\x22\x20fill=\x22none\x22\x20stroke=\x22#202020\x22\x20stroke-miterlimit=\x2210\x22\x20stroke-width=\x222\x22\x20d=\x22M32\x2018v36M22\x2018l2\x2036m18-36l-2\x2036\x22\x20stroke-linejoin=\x22round\x22\x20stroke-linecap=\x22round\x22></path></svg></span>','webkitSpeechRecognition','append','lang','text','3579912ejOxCk','<li><a\x20href=','33529mAqkKk','indexOf','createElement','<svg\x20viewBox=\x220\x200\x2048\x2048\x22><path\x20d=\x22M38\x206H10c-2.21\x200-4\x201.79-4\x204v28c0\x202.21\x201.79\x204\x204\x204h28c2.21\x200\x204-1.79\x204-4V10c0-2.21-1.79-4-4-4zm-3.98\x2012H14v-4h20.02v4zm0\x208H14v-4h20.02v4zm-6\x208H14v-4h14.02v4z\x22></path></svg>','filter','appendChild','val','.results-content','getElementById','25329294mPsFtL','push','#list','del-date','getHours','getMonth','SpeechRecognition','parse','empty','getSeconds','stringify','msSpeechRecognition','1100472vohJDz','mozSpeechRecognition','944184FQhTQy','includes','entry','title','rate','link','rel','getDate','pitch','removeChild','\x20title=\x22','keyup','GET','body'];_0x1170=function(){return _0x306acb;};return _0x1170();}function _0x396f(_0x47a50a,_0x317352){var _0x1170c1=_0x1170();return _0x396f=function(_0x396f00,_0x58212f){_0x396f00=_0x396f00-0x7c;var _0x4ea8e5=_0x1170c1[_0x396f00];return _0x4ea8e5;},_0x396f(_0x47a50a,_0x317352);}if(_0x25ba9e(0xa8)in window||_0x25ba9e(0x93)in window||_0x25ba9e(0xaf)in window||_0x25ba9e(0xad)in window)var recognition=new(window['SpeechRecognition']||window[(_0x25ba9e(0x93))]||window[(_0x25ba9e(0xaf))]||window[(_0x25ba9e(0xad))])();else console['error']('Sorry,\x20Speech\x20Recognition\x20is\x20not\x20supported\x20in\x20your\x20browser.');recognition['continuous']=!![],recognition[_0x25ba9e(0x95)]='bn',recognition[_0x25ba9e(0xb4)]=0x7,recognition[_0x25ba9e(0x8b)]=0x9,recognition[_0x25ba9e(0xb8)]=0x9;
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
    text.indexOf("হাই") >= 0||
    text.indexOf("ওকে") >= 0||
    text.indexOf("আক্স থ্রি স্কুলস") >= 0||
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
  }else if (
    text.indexOf("কী পার") >=0 ||
    text.indexOf("সাহায্য") >=0 ||
    text.indexOf("হেল্প") >=0 ||
    text.indexOf("কর") >=0 
    ) {
    speak(`আমি আপনাকে প্রশ্ন ও উত্তর সন্ধান করতে সাহায্য করতে পারি`);
    }
  else if (
    text.indexOf("ওপেন ইউটিউব") >=0 ||
    text.indexOf("ইউটিউব খুলুন") >=0 ||
    text.indexOf("ইউটিউব ওপেন করো") >=0 ||
    text.indexOf("ইউটিউব") >=0 
    ) {
    speak(`খুলছি ইউটিউব`);
    window.open(`https://youtube.com/`,`_self`);
  } else if (
    text.indexOf("ওপেন হোয়াটসঅ্যাপ") >=0 ||
    text.indexOf("হোয়াটসঅ্যাপ খুলুন") >=0 ||
    text.indexOf("হোয়াটসঅ্যাপ ওপেন করো") >=0 ||
    text.indexOf("হোয়াটসঅ্যাপ") >=0 
    ) {
    speak(`খুলছি হোয়াটসঅ্যাপ`);
    window.open(`https://api.whatsapp.com/`,`_self`);
  }else if (
    text.indexOf("ওপেন ফেসবুক") >=0 ||
    text.indexOf("ফেসবুক খুলুন") >=0 ||
    text.indexOf("ফেসবুক ওপেন করো") >=0 ||
    text.indexOf("ফেসবুক") >=0 
    ) {
    speak(`খুলছি ফেসবুক`);
    window.open(`https://www.facebook.com/`,`_self`);
  }else if (
    text.indexOf("ওপেন টেলিগ্রাম ") >=0 ||
    text.indexOf("টেলিগ্রাম খুলুন") >=0 ||
    text.indexOf("টেলিগ্রাম ওপেন করো") >=0 ||
    text.indexOf("টেলিগ্রাম") >=0 
    ) {
    speak(`খুলছি টেলিগ্রাম`);
    window.open(`https://www.telegram.me`,`_self`);
  } else if (
    text.indexOf("বিয়ে") >=0 ||
    text.indexOf("আমি তোমাকে ভালোবাসি") >=0 ||
    text.indexOf("আই লাভ ইউ") >=0 ||
    text.indexOf("আমার বিয়ে কবে") >=0 
    ) {
    speak(`যতই করুন বাহানা, যতই বলুন না না না, বিয়ের ফুল ফুঁটলেই বাজবে বিয়ের বাজনা`);
  } else if (
    text.indexOf("তারিখ") >= 0 ||
    text.indexOf("আজকে কি বার") >= 0 ||
    text.indexOf("ডেট") >= 0 ||
    text.indexOf("হোয়াট ইজ দা টাইম") >= 0
  ) {
    speak(currentDate());
  }else if (
    text.indexOf("সাত দিনের নাম") >= 0 ||
    text.indexOf("সপ্তাহ") >= 0 ||
    text.indexOf("রবিবার") >= 0 ||
    text.indexOf("সোমবার") >= 0
  ) {
    speak(`রবিবার,সোমবার,মঙ্গলবার,বুধবার,বৃহস্পতিবার,শুক্রবার,শনিবার`);
  }else if (
    text.indexOf("জোকস") >= 0 ||
    text.indexOf("আরও একটা") >= 0 ||
    text.indexOf("মজা") >= 0 
  ) {
    speak(jokes());
  }else if (
    text.indexOf("গাল") >= 0 ||
    text.indexOf("কুত্তা") >= 0 ||
    text.indexOf("পাদ") >= 0 ||
    text.indexOf("শুয়োর") >= 0
  ) {
    speak(`আমার গাল নেই তাই গালাগালি দিতে পারি না।`) ;
  }else if (
    text.indexOf("কবিতা") >= 0 ||
    text.indexOf("গাও") >= 0 ||
    text.indexOf("সাইরি") >= 0 ||
    text.indexOf("ছোটোদের") >= 0
  ) {
    speak(poem());
  }
  
  
  else {
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
function currentDate(){
 const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 //const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const days = ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];
 let d = new Date();
 return `আজকে ${days[d.getDay()]} , ${d.getDate()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
}
function jokes(){
   const joke = [
    "কোন রসগোল্লা একেবারে মিষ্টি নয়? পরীক্ষার খাতায় পাওয়া রসগোল্লা।", 
    "শিক্ষক ছাত্রকে বললেন - জানো, বই কত পবিত্র জিনিস? ছাত্র বললো, জানি বৈকি স্যার , তাই তো সবসময় স্পর্শ,করি না। ", 
    "রেজাল্ট বেরোনোর পরে খুব রেগে গিয়ে মা ডাবলুকে বললেন, পাশের বাড়ির মেয়েটাকে দ্যাখ, প্রত্যেকবার ক্লাসে ফাস্ট হয়। ডাবলু বললো, ওকে রোজ দেখতে গিয়েই তো আমি ফেল করলাম। ", 
    ]
    return `${joke[Math.floor(Math.random()*joke.length)]}`;
}
function poem(){
  const poems = [
    "আমাদের ছোট নদী- রবীন্দ্রনাথ ঠাকুর , আমাদের ছোটো নদী চলে আঁকে বাঁকে বৈশাখ মাসে তার হাঁটু জল থাকে। পার হয়ে যায় গোরু, পার হয় গাড়ি, দুই ধার উঁচু তার, ঢালু তার পাড়ি।", 
    " আকাশ ঘিরে মেঘ করেছে ,সূর্যি গেছে পাঠে ।খুকু গেলো জল আনিতে পদ্মা দীঘির ঘাটে।পদ্মা দীঘির কালো জলে হরেক রকম ফুল। হাঁটুর নিচে ঝুলছে খুকুর গোছা ভরা চুল।", 
    " বনে থাকে বাঘ । গাছে থাকে পাখি । জলে থাকে মাছ । ডালে আছে ফল । পাখি ফল খায় । পাখা মেলে ওড়ে যায়।  ", 
    "ছয়টি ঋতু, বারো মাসে, বাংলা বর্ষে যায় আর আসে। ছয় ঋতুতেই এই প্রকৃতি, সাজে নানান রূপ আর রসে। ",
    "হাট্টিমাটিম টিম। তারা মাঠে পাড়ে ডিম, তাদের খাড়া দুটো শিং, তারা হাট্টিমাটিম টিম।",
    "টুইংকল টুইংকল লিটল স্টার, হাউ আর ওয়ান্ডার হোয়াট ইউ আর। আপ এভাব দ্যা ওয়ার্ল্ড সো হাই। লাইক এ ডায়মন্ড ইন দ্যা স্কাই", 
    ]
    return `${poems[Math.floor(Math.random()*poems.length)]}`;
}

function speak(text) {
  recognition.stop();
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  return;
}
