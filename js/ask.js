/*
Ask 3schools Main Js
*Copyright www.3schools.in
*Licensed code (no open source code)
*V8
*Last updated 5 June 2022

*/


function _0x2fe0(_0x55ff2f,_0x1fa0ec){var _0x548155=_0x5481();return _0x2fe0=function(_0x2fe046,_0x4cc63d){_0x2fe046=_0x2fe046-0x86;var _0x1b3af3=_0x548155[_0x2fe046];return _0x1b3af3;},_0x2fe0(_0x55ff2f,_0x1fa0ec);}var _0xf10e17=_0x2fe0;(function(_0x1d86e4,_0x1beca4){var _0x54e347=_0x2fe0,_0x428c5c=_0x1d86e4();while(!![]){try{var _0x5d3caa=-parseInt(_0x54e347(0xbc))/0x1*(parseInt(_0x54e347(0x8e))/0x2)+parseInt(_0x54e347(0x9c))/0x3+parseInt(_0x54e347(0x86))/0x4*(-parseInt(_0x54e347(0xc0))/0x5)+-parseInt(_0x54e347(0x8c))/0x6+-parseInt(_0x54e347(0xb4))/0x7*(parseInt(_0x54e347(0xa8))/0x8)+parseInt(_0x54e347(0xaf))/0x9*(parseInt(_0x54e347(0xb8))/0xa)+parseInt(_0x54e347(0xa3))/0xb;if(_0x5d3caa===_0x1beca4)break;else _0x428c5c['push'](_0x428c5c['shift']());}catch(_0x397eb0){_0x428c5c['push'](_0x428c5c['shift']());}}}(_0x5481,0xd6d5b),$('.searchbar\x20input')['on'](_0xf10e17(0x9a),function(_0x109548){var _0x299d32=_0xf10e17,_0x23dfd3=$(this)['val']();_0x23dfd3?$['ajax']({'type':'GET','url':_0x299d32(0x88),'data':{'max-results':0x19,'alt':_0x299d32(0xac),'q':_0x23dfd3},'dataType':_0x299d32(0xaa),'success':function(_0x3d9786){var _0x44fa6b=_0x299d32;$('.results-content')['removeClass'](_0x44fa6b(0xc4)),$(_0x44fa6b(0x90))[_0x44fa6b(0x89)]();if(_0x3d9786[_0x44fa6b(0xbf)][_0x44fa6b(0xbd)])for(var _0x31edc3=0x0;_0x31edc3<_0x3d9786['feed'][_0x44fa6b(0xbd)][_0x44fa6b(0x8f)];_0x31edc3++){for(var _0x3dac35=0x0;_0x3dac35<_0x3d9786['feed'][_0x44fa6b(0xbd)][_0x31edc3][_0x44fa6b(0x8d)][_0x44fa6b(0x8f)];_0x3dac35++){if(_0x3d9786['feed'][_0x44fa6b(0xbd)][_0x31edc3][_0x44fa6b(0x8d)][_0x3dac35][_0x44fa6b(0xbe)]==_0x44fa6b(0x9b)){var _0x50a76b=_0x3d9786[_0x44fa6b(0xbf)][_0x44fa6b(0xbd)][_0x31edc3][_0x44fa6b(0x8d)][_0x3dac35]['href'];break;}}var _0x5dd4c7=_0x3d9786[_0x44fa6b(0xbf)][_0x44fa6b(0xbd)][_0x31edc3][_0x44fa6b(0xb1)]['$t'];$('.results')[_0x44fa6b(0x91)](_0x44fa6b(0x97)+_0x50a76b+'\x20title=\x22'+_0x5dd4c7+'\x22>'+_0x44fa6b(0xba)+_0x5dd4c7+_0x44fa6b(0xb0));}else $('.results-content')[_0x44fa6b(0xa1)](_0x44fa6b(0xc4));}}):$(_0x299d32(0x87))[_0x299d32(0xa1)](_0x299d32(0xc4)),$(_0x299d32(0xa7))[_0x299d32(0xa4)](function(){var _0xdf2cd=_0x299d32;$(_0xdf2cd(0x87))[_0xdf2cd(0xa1)](_0xdf2cd(0xc4));});}));function addItem(_0x57c287){var _0xa0111d=_0xf10e17;let _0x5ede4e=localStorage['getItem']('my'),_0x321754=[];_0x5ede4e&&(_0x321754=JSON[_0xa0111d(0xb7)](_0x5ede4e));var _0x24d77d=new Date(),_0x580fb1=_0x24d77d['getDate']()+'-'+(_0x24d77d[_0xa0111d(0x9e)]()+0x1)+'-'+_0x24d77d[_0xa0111d(0xa6)](),_0x2b5915=_0x24d77d['getHours']()+':'+_0x24d77d[_0xa0111d(0x9f)]()+':'+_0x24d77d[_0xa0111d(0xa5)]();_0x321754[_0xa0111d(0xb2)]({'id':_0x580fb1+'\x20'+_0x2b5915,'title':_0x57c287[_0xa0111d(0xb1)],'url':_0x57c287[_0xa0111d(0xa2)]});const _0x367cce=_0x321754[_0xa0111d(0xb5)](_0x11e385=>_0x11e385[_0xa0111d(0xb9)]),_0x40ad06=_0x321754['filter'](({url:_0xdcf799},_0x5344e3)=>!_0x367cce[_0xa0111d(0x95)](_0xdcf799,_0x5344e3+0x1));localStorage['setItem']('my',JSON['stringify'](_0x40ad06));}var tweets=[];let gpa=localStorage[_0xf10e17(0x8b)]('my');tweets=JSON[_0xf10e17(0xb7)](gpa),tweets[_0xf10e17(0x9d)](function(_0x49ce1b){var _0xca880=_0xf10e17,_0x2f2f8a=document['createElement']('li'),_0x23d89f=document[_0xca880(0xbb)]('a'),_0x170340=document[_0xca880(0xbb)](_0xca880(0xc3));_0x170340[_0xca880(0xab)]=_0xca880(0xb3)+_0x49ce1b['id']+_0xca880(0xa0),_0x170340['classList']=_0xca880(0xa9),_0x170340[_0xca880(0x96)]=_0x14502f,_0x23d89f['href']=_0x49ce1b[_0xca880(0xb9)]+_0xca880(0xb6),_0x23d89f['text']=_0x49ce1b[_0xca880(0xb1)],_0x2f2f8a[_0xca880(0xad)]=_0xca880(0x99),_0x2f2f8a['appendChild'](_0x23d89f),_0x2f2f8a['appendChild'](_0x170340),document['querySelector'](_0xca880(0x92))[_0xca880(0xc2)](_0x2f2f8a);function _0x14502f(_0x52d6ef){var _0xd5636c=_0xca880,_0xf1ac85=document[_0xd5636c(0x94)]('list');_0xf1ac85[_0xd5636c(0x8a)](_0x2f2f8a);var _0x3c1455=_0x52d6ef[_0xd5636c(0xc1)][_0xd5636c(0x98)]('del-date');let _0x588ba5=tweets[_0xd5636c(0xb5)](_0x3c4e46=>_0x3c4e46['id'])['indexOf'](_0x3c1455);tweets['splice'](_0x588ba5,0x1),localStorage[_0xd5636c(0x93)]('my',JSON[_0xd5636c(0xae)](tweets));}});function _0x5481(){var _0x2f655c=['62515fQbfrO','target','appendChild','span','hidden','4uVfKlA','.results-content','/feeds/posts/summary','empty','removeChild','getItem','8306664xzQYtm','link','4YCCuzE','length','.results','append','#list','setItem','getElementById','includes','onclick','<li><a\x20href=','getAttribute','item-title','keyup','alternate','3129177IMGmXR','forEach','getMonth','getMinutes','\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2064\x2064\x22\x20aria-labelledby=\x22title\x22\x20aria-describedby=\x22desc\x22\x20role=\x22img\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22><path\x20data-name=\x22layer2\x22\x20fill=\x22none\x22\x20stroke=\x22#202020\x22\x20stroke-miterlimit=\x2210\x22\x20stroke-width=\x222\x22\x20d=\x22M6\x2010h52m-36\x200V5.9A3.9\x203.9\x200\x200\x201\x2025.9\x202h12.2A3.9\x203.9\x200\x200\x201\x2042\x205.9V10m10.5\x200l-2.9\x2047.1a5\x205\x200\x200\x201-4.9\x204.9H19.3a5\x205\x200\x200\x201-4.9-4.9L11.5\x2010\x22\x20stroke-linejoin=\x22round\x22\x20stroke-linecap=\x22round\x22></path><path\x20data-name=\x22layer1\x22\x20fill=\x22none\x22\x20stroke=\x22#202020\x22\x20stroke-miterlimit=\x2210\x22\x20stroke-width=\x222\x22\x20d=\x22M32\x2018v36M22\x2018l2\x2036m18-36l-2\x2036\x22\x20stroke-linejoin=\x22round\x22\x20stroke-linecap=\x22round\x22></path></svg></span>','addClass','name','19037733LczGjq','click','getSeconds','getFullYear','body','23480tWGoiv','favoriteL','jsonp','innerHTML','json','classList','stringify','5061258hqaAUe','</a></li>','title','push','<span\x20del-date=\x22','126cQBDOD','map','?rel=favorite','parse','20fZSQKx','url','<svg\x20viewBox=\x220\x200\x2048\x2048\x22><path\x20d=\x22M38\x206H10c-2.21\x200-4\x201.79-4\x204v28c0\x202.21\x201.79\x204\x204\x204h28c2.21\x200\x204-1.79\x204-4V10c0-2.21-1.79-4-4-4zm-3.98\x2012H14v-4h20.02v4zm0\x208H14v-4h20.02v4zm-6\x208H14v-4h14.02v4z\x22></path></svg>','createElement','784373kKasgo','entry','rel','feed'];_0x5481=function(){return _0x2f655c;};return _0x5481();}
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
    text.indexOf("তোমার নাম") >= 0 ||
    text.indexOf("তুমি কে") >= 0||
    text.indexOf("আপনার নাম") >= 0||
    text.indexOf("ওকে গুগল") >= 0||
    text.indexOf("হু আর ইউ") >= 0||
    text.indexOf("হোয়াট ইজ ইওর নেম") >= 0
  ) {
    speak(" ওহো, আমি নিজের পরিচয় দিতে ভুলে গেছি, হাই, আমার নাম অপু। ।।তোমার নাম কী? ");
  }else if (
    text.indexOf("হাই") >= 0 ||
    text.indexOf("হ্যালো") >= 0||
    text.indexOf("হেল্প মি") >= 0||
    text.indexOf("ওকে অপু") >= 0
  ) {
    speak(" নমস্কার ,আজ আপনাকে কিভাবে সাহায্য করতে পারি? ");
  } else if (
    text.indexOf("আমার নাম কি") >= 0 ||
    text.indexOf("আমি কে") >= 0||
    text.indexOf("আমার নাম ডাকো") >= 0||
    text.indexOf("আমার নাম বল") >= 0
  ) {
    speak("আমি তো জানি আপনার নাম কি, আপনি বলুন তো আপনার নাম কি? ");
  }
  
  else if (text.indexOf("সার্চ") >= 0) {
   
    let q = text.substr(text.indexOf("সার্চ") + 5);
speak(` আক্স থ্রি স্কুলসে সার্চ করা হল ${q}`);
    window.open(`https://ask.3schools.in/search?q=${q}`,`_self`);
  } else if (
    text.indexOf("টাইম") >= 0 ||
    text.indexOf("কয়টা বাজে") >= 0 ||
    text.indexOf("কয়টা বাজ") >=0 ||
    text.indexOf("কটা বাজ") >= 0 ||
    text.indexOf("সময়") >= 0 ||
    text.indexOf("হোয়াট ইজ দা টাইম") >=0
  ) {
    let t = currentTime();
    speak(t);
  } else if (text.indexOf("আমার নাম") >= 0) {
let name = text.substr(text.indexOf("নাম") + 3); // Split name from text
    speak(`হ্যালো...হ্যাল্লো! ${name} আশা করি আজকের দিনটা আপনার খুব ভালো  কাটছে। আমি কিভাবে সাহায্য করতে পারি ,বলুন? `);
  } else if(
    text.indexOf("ছেলে নাকি মেয়ে") >= 0 ||
    text.indexOf("কি ছেলে") >=0 ||
    text.indexOf("কি মেয়ে") >=0 ||
    text.indexOf("ছেলে না মেয়ে") >= 0 
    ) {
    speak("আপনার পরাণ যাহা চায় .....আমি তাই, আমি তাই গো,💗" );
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
    text.indexOf("তোমার সাথে কথা বলব না") >= 0 ||
    text.indexOf("তুমি কথা বলতে পারো না।") >= 0 ||
    text.indexOf("আই হেট ইউ") >=0 ||
    text.indexOf("বেকার") >=0 ||
    text.indexOf("কোন লাভ নেই") >=0 ||
    text.indexOf("তুমি খারাপ") >= 0
  ) {
    speak(` দুঃখিত, আমি কী কিছু ভুল করে ফেলেছি? এখনো আমি পুরোপুরি সব শিখিনি।`);
  }else if (
    text.indexOf("কী পার") >=0 ||
    text.indexOf("সাহায্য কর") >=0 ||
    text.indexOf("কি কি পার") >=0 ||
    text.indexOf("কি কি করতে") >=0 ||
    text.indexOf("কি করতে পার") >=0 ||
    text.indexOf("তোমার কাজ") >=0 ||
    text.indexOf("আপনার কাজ") >=0 ||
    text.indexOf("হাউ ক্যান ইউ হেল্প") >=0 ||
    text.indexOf("হেল্প কর") >=0 
    ) {
    speak(cando());
    }
  else if (
    text.indexOf("ওপেন ইউটিউব") >=0 ||
    text.indexOf("ইউটিউব খুলুন") >=0 ||
    text.indexOf("ভিডিও") >=0 ||
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
    text.indexOf("তারিখ কত") >= 0 ||
    text.indexOf("আজ কত তারিখ") >= 0 ||
    text.indexOf("বাংলা কত তারিখ") >= 0 ||
    text.indexOf("ইংলিশের কত তারিখ") >= 0 ||
    text.indexOf("ক্যালেন্ডার") >= 0 ||
    text.indexOf("আজকের তারিখ") >= 0 ||
    text.indexOf("এখন কত সাল") >= 0 ||
    text.indexOf("এখন কত খ্রিস্টাব্দ") >= 0 ||
    text.indexOf("আজকে কি বার") >= 0 ||
    text.indexOf("ডেট") >= 0 ||
    text.indexOf("ডেট") >= 0 ||
    text.indexOf("টুডে") >= 0
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
    text.indexOf("জোক") >= 0 ||
    text.indexOf("মজা") >= 0 
  ) {
    speak(jokes());
  }else if (
    text.indexOf("গাল") >= 0 ||
    text.indexOf("কুত্তা") >= 0 ||
    text.indexOf("পাদ") >= 0 ||
    text.indexOf("হারামজাদা") >= 0 ||
    text.indexOf("হারামখোর") >= 0 ||
    text.indexOf("কুত্তার") >= 0 ||
    text.indexOf("হারামি") >= 0 ||
    text.indexOf("শালা") >= 0 ||
    text.indexOf("চুদ") >= 0 ||
    text.indexOf("নোংরা") >= 0 ||
    text.indexOf("শুয়োর") >= 0
  ) {
    speak(`আমার গাল নেই তাই গালাগালি দিতে পারি না।`) ;
  }else if (
    text.indexOf("গান") >= 0 ||
    text.indexOf("মিউজিক") >= 0 ||
    text.indexOf("গাও") >= 0 ||
    text.indexOf("নাচ") >= 0
  ) {
    speak(`আমার গলা ঠিক নেই, তাই আজ আমি গান গাইতে পারব না।`) ;
  }
  
  else if (
    text.indexOf("শোনা") >= 0 ||
    text.indexOf("পোয়েম") >= 0 ||
    text.indexOf("গাও") >= 0 ||
    text.indexOf("সাইরি") >= 0 ||
    text.indexOf("কবিতা বল") >= 0 ||
    text.indexOf("ছোটোদের") >= 0
  ) {
    speak(poem());
  }else if (
    text.indexOf("আমার মন খারাপ") >= 0 ||
    text.indexOf("দুঃখে আছ") >= 0 ||
    text.indexOf("আমি ভালো নেই") >= 0
  ) {
    speak(`আমার সাধ্য থাকলে আমি আপনার সমস্ত দুঃখ শুষে নিয়ে আপনাকে আনন্দ দিয়ে ভরিয়ে দিতাম`);
  }else if (
    text.indexOf("হাউ আর ইউ") >=0 ||
    text.indexOf("আশা করি") >= 0 ||
    text.indexOf("ভালো আছ") >= 0 ||
    text.indexOf("কেমন আছ") >= 0
  ) {
    speak(`ধন্যবাদ । আমি ভালো আছি । আপনাকে কীভাবে সাহায্য করতে পারি বলুন ।`);
  } else if (
    text.indexOf("অ্যালেক্সা") >=0 ||
    text.indexOf("আলেক্সা") >= 0 ||
    text.indexOf("এলেক্স") >= 0 ||
    text.indexOf("আলেক্স") >= 0
  ) {
    speak(`অ্যালেক্সা, শুনেছি অ্যামাজনে থাকে। খুব সুন্দর গলা ওর। আমার দারুণ লাগে। `);
  }else if (
    text.indexOf("গুগল অ্যাসিস্ট্যান্ট") >=0 ||
    text.indexOf("অ্যাসিস্ট্যান্ট") >= 0 ||
    text.indexOf("গুগল এসিস্ট্যান্ট") >= 0
  ) {
    speak(`গুগল অ্যাসিস্ট্যান্ট, ও খুব বুদ্ধিমান । আমাকে নতুন কিছু শিখতে ও সাহায্য করে । আমার তো ওকে দারুণ লাগে। `);
  } else if (
    text.indexOf("কি করছো") >= 0 ||
    text.indexOf("কি হচ্ছে") >= 0 ||
    text.indexOf("কি চলছে") >= 0 ||
    text.indexOf("কি করেন") >= 0 ||
    text.indexOf("কি করছি") >= 0 ||
    text.indexOf("ফাঁকা আছ") >= 0 
  ) {
    speak(whatdo());
  }else if (
    text.indexOf("ধন্যবাদ") >= 0 ||
    text.indexOf("খুব ভালো") >= 0 ||
    text.indexOf("থ্যাংক ইউ") >= 0 ||
    text.indexOf("বুদ্ধিমান") >= 0 ||
    text.indexOf("থ্যাঙ্ক ইউ") >= 0 ||
    text.indexOf("ভালো লাগলো") >= 0 
  ) {
    speak(thankyou());
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
function whatdo(){
   const whatdo = [
    "নিজের রসিকতায় নিজেই হাসছি, ভাবছি আরও কিছু জোকস পড়ব ।", 
    "আমি কিছু ইন্টারেস্টিং তথ্য নিয়ে পড়াশোনা করে নিজের জ্ঞান বাড়াচ্ছি। ", 
    "আপনার সাথে আড্ডা মারবো ভাবছিলাম। ", 
    ]
    return `${whatdo[Math.floor(Math.random()*whatdo.length)]}`;
}
function cando(){
   const cando = [
    "আমি আপনাকে প্রশ্ন ও উত্তর সন্ধান করতে সাহায্য করতে পারি।", 
    "আমাকে শুধু মাত্র বলে দেখুন, এখন কটা বাজছে, আজকে কি বার , একটা জোক শোনাও ,ইত্যাদি । ", 
    "আপনি চাইলে, আমি আপনার সাথে আড্ডা মারতেও পারি। ", 
    ]
    return `${cando[Math.floor(Math.random()*cando.length)]}`;
}
function thankyou(){
   const thank = [
    "ওউওউওউ, ধন্যবাদের কী আছে, এটাই তো আমার কাজ।", 
    "বন্ধুকে কি কেউ ধন্যবাদ দেয়। ", 
    "আপনাকে সাহায্য করতে পেরে আমি খুব খুশি। ", 
    ]
    return `${thank[Math.floor(Math.random()*thank.length)]}`;
}

function speak(text) {
  recognition.stop();
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  return;
}
