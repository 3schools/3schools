/*
Ask 3schools Main Js
*Copyright www.3schools.in
*Licensed code (no open source code)
*V10
*Last updated 21 May 2023

*/
let pTi = '';if(document.querySelector('.post .post-title')){ pTi = document.querySelector('.post .post-title').innerHTML.split(" ")} let pL = '';if(typeof rpK !== 'undefined'){pL=rpK[Math.floor(Math.random()*rpK.length)]}else{pL = pTi[Math.floor(Math.random()*pTi.length)]}function qnaP(a){ if (document.querySelector('#rel-post')) { let c = shuffleArray(a.feed.entry),title,content = '', ct = document.querySelector('#rel-post'); for (let i = 0; i < a.feed.entry.length; i++) { content +=`<a href="${c[i].link[c[i].link.length-1].href}">${c[i].title.$t}</a>` };content+=`<button class="button flex3s"><a href="/search?q=${pL}">View all posts &nbsp;&nbsp;</a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg></button>`; ct.innerHTML+=content; }} function shuffleArray(arr) { let i = arr.length,j,temp; if (i === 0)return false; while (--i) { j = Math.floor(Math.random()*(i+1)); temp = arr[i]; arr[i] = arr[j]; arr[j] = temp }return arr } let relR = document.createElement('script'); relR.src = '/feeds/posts/default?alt=json&max-results=5&q='+pL+'&callback=qnaP'; document.getElementsByTagName('head')[0].appendChild(relR);

let rK = pTi[Math.floor(Math.random()*pTi.length)]
function relatedPt(a) {
      if (document.querySelector('.recommend')) {
        var c = shuffleArray(a.feed.entry),
        content = '',
        ct = document.querySelector('.recommend'); for (var i = 0; i < a.feed.entry.length; i++) {
    content += ` 
<article class="hentry">
<div class="flex3s post-bottom">
<div class="flex3s">
<div class="auth-img">
<img alt="${c[i].author[0].name.$t}" class="lazyload" data-src="${c[i].author[0].gd$image.src}">
</div>
<div class="auth-name">
<small>${c[i].author[0].name.$t} <svg fill='#00acee' viewBox='0 0 24 24'><path d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z'></path></svg>
</small>
<b>Related</b>
</div>
</div>
<div onclick="feedBack(this)">❌</div>
</div>
<div class="gradient">
<h2 class="post-title">
<a data-text="${c[i].title.$t}" href="${c[i].link[c[i].link.length-1].href}" rel="bookmark">${c[i].title.$t}</a>
</h2>
<p class="post-des" data-text="${c[i].content.$t.replace(/<[^>]*>?/g, '').substring(0, 150) + '...'}"></p>
</div>
<div class="flex3s post-share m">
<a href="${c[i].link[c[i].link.length-1].href}#comments"><svg class='line' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><polyline points='15 14 20 9 15 4'/><path d='M4 20v-7a4 4 0 0 1 4-4h12'/></svg> উত্তর দিন</a>
<div data-title="${c[i].title.$t}" data-url="${c[i].link[c[i].link.length-1].href}" onclick="share(this)"><svg class="line" viewBox="0 0 24 24"><path d="M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z" transform="translate(-83.28571 -252.73452)"></path><circle class="fill" cx="18.48892" cy="5.49436" r="3.51099"></circle><circle class="fill" cx="18.48892" cy="18.50564" r="3.51099"></circle><line class="cls-3" x1="12.53012" x2="8.65012" y1="8.476" y2="10.416"></line><line class="cls-3" x1="12.53012" x2="8.65012" y1="15.496" y2="13.556"></line></svg> শেয়ার</div>
<div data-des="${c[i].content.$t.replace(/<[^>]*>?/g, '').substring(0, 150) + '...'}" data-title="${c[i].title.$t}" data-url="${c[i].link[c[i].link.length-1].href}" onclick="addItem(this)"><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3l7 3V5c0-1.1-.9-2-2-2z" fill="currentColor"></path></svg> সেভ</div>
<div onclick="speak(this.parentElement.previousElementSibling.innerText)"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path></svg> শুনুন</div>
</div>
</article> `;}content += `<center><a href="/search?q=${rK}" class="button">Load More</a></center>`
        ct.innerHTML = content;
      }}let relRo = document.createElement('script'); relRo.src = '/feeds/posts/default?alt=json&max-results=6&q='+rK+'&callback=relatedPt'; document.getElementsByTagName('head')[0].appendChild(relRo)
      
      
function myFunction() {
    let input,filter,table,tr,td,i,txtValue;
    input = document.querySelector('#record-find');
    filter = input.value.toUpperCase();
    table = document.querySelector("#collection");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  
  
class CartItem {
      constructor(url,reLang,reText,trLang,trText) {
        this.url = url
        this.reLang = reLang
        this.reText = reText
        this.trLang = trLang 
        this.trText = trText
      }
    }
    class LocalCart {
      static key = "askCollection"
      static getLocalCartItems() {
        let cartMap = new Map()
        const cart = localStorage.getItem(LocalCart.key)
        if (cart === null || cart.length === 0) return cartMap
        return new Map(Object.entries(JSON.parse(cart)))
      }

      static addItemToLocalCart(id, item){
        let cart = LocalCart.getLocalCartItems()
       if (cart.has(id)) {
         
        } else
          cart.set(id, item)
          localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
          updateCartUI()

      }

      static removeItemFromCart(id) {
        let cart = LocalCart.getLocalCartItems()
        if (cart.has(id)) {
            cart.delete(id)
        }
        if (cart.length === 0)
          localStorage.clear()
        else
          localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
        updateCartUI()
      }
    }


    const cartIcon = document.querySelector('.t-coll')
    
    function addItem(e) {
      const url = decodeURIComponent(e.dataset.url).split(' ').join('+');
      const reLang = 'Q';
      const reText = e.dataset.title;
      const trLang = 'A';
      const trText = e.dataset.des.replace(/\<font style="vertical-align: inherit;">/g, '').replace(/\<\/font>/g, '');
      const item = new CartItem(url,reLang,reText,trLang,trText)
      LocalCart.addItemToLocalCart(url, item)
   }

    function updateCartUI() {
      const cartWrapper = document.querySelector('#collection')
      cartWrapper.innerHTML = ""
      const items = LocalCart.getLocalCartItems()
      if (items === null) return
      let count = 0
      for (const [key, value] of items.entries()) {
        const cartItem = document.createElement('tr')
        count += 1; 
cartItem.innerHTML =
        `
    <td>
      <div class="record-de">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z" /></svg>
      </div>
      <div class="record">
        <div class="record-text">
          <span class="r-lang">${value.reLang}</span>
          <span class="record-line">${value.reText}</span>
        </div>
        <div class="record-trans">
          <span class="r-lang">${value.trLang}</span>
          <span class="record-line" data-text="${value.trText}"></span>
        </div>
      </div>
    </td>
        `
        cartItem.querySelector('.record-de').addEventListener('click', ()=> {
          LocalCart.removeItemFromCart(key)
        })
        cartItem.querySelector('.record').addEventListener('click', (e)=> {
          location.href = value.url;
        })
        
        cartWrapper.append(cartItem)
       }

       let root = document.querySelector(':root')
        root.style.setProperty('--after-content', `"${count}"`)
       }
    document.addEventListener('DOMContentLoaded', ()=> { updateCartUI()})
      
      
      
      
function feedBack(e){e.parentElement.parentElement.innerHTML='<center><p>আপনার ইনপুট এই পৃষ্ঠাটিকে সবার জন্য উন্নত করতে আমাদের সাহায্য করে।</p></center>'}


function record(v){
recognition.start();
recognition.onresult = event => {
  const speechToText = event.results[event.results.length - 1][0];
  let text = speechToText.transcript;
if(v!=1){
document.querySelector(".cE").innerHTML += text;
}else{
document.querySelector("#search-input").value = text;
  if (/তোমার নাম|তুমি কে|আপনার নাম|ok google|who are you|হোয়াট ইজ ইওর নেম/i.test(text))
   {
    speak(whoYou());
  }else if (/হাই|হ্যালো|হেল্প মি|ওকে অপু/i.test(text))
   {
    speak(" নমস্কার ,আজ আপনাকে কিভাবে সাহায্য করতে পারি? ");
  } else if (/আমার নাম কি|আমি কে|আমার নাম ডাকো|আমার নাম বল/i.test(text))
  {
    speak("আমি তো জানি আপনার নাম কি, আপনি বলুন তো আপনার নাম কি? ");
  }
  else if (/good morning|গুড মর্নিং|শুভ সকাল/i.test(text))
  {
    speak("সুন্দর সকালের অনেক শুভেচ্ছা আপনাকে");
  } 
 else if (/good evening|শুভ সন্ধ্যা|গুড ইভিনিং/i.test(text))
  {
    speak(" শুভ সন্ধ্যা , আমি আপনার জন্য কী করতে পারি? ");
  }
 else if (/good night|গুড নাইট|শুভ রাত্রি/i.test(text)) {
    speak("শুভ রাত্রি। চাঁদ মামাকে বলছি আপনার কপালে স্বপ্নের টিপ দিয়ে যেতে।");
  }
  else if (/আলাইকুম/i.test(text)) {

    speak("ওয়াআলাইকুমুস সালাম। আজ আপনাকে কিভাবে সাহায্য করতে পারি?");

  }
  
  else if (text.indexOf("সার্চ") >= 0) {
    let q = text.substr(text.indexOf("সার্চ") + 5);
    speak(` আক্স থ্রি স্কুলসে সার্চ করা হল ${q}`);
    window.open(`https://ask.3schools.in/search?q=${q}`,`_self`);
  }
else if (/ট্রান্সলেট|অনুবাদ কর|এর ইংরাজি|এর ইংরেজি|ইংরেজি কি|ইংলিশ কি|ইংরেজি অনুবাদ/i.test(text))  {
    let trans;
    if (text.includes("ট্রান্সলেট")) {
        trans = text.substr(text.indexOf("ট্রান্সলেট") + 10);
    } else if (text.includes("অনুবাদ কর")) {
        trans = text.substr(text.indexOf("অনুবাদ কর") + 10);
    } else {
        trans = text.slice(0, text.indexOf("এর ইংরাজি")) || text.slice(0, text.indexOf("ইংরেজি অনুবাদ")) || text.slice(0, text.indexOf("এর ইংরেজি"))
            || text.slice(0, text.indexOf("ইংরেজি কি")) || text.slice(0, text.indexOf("ইংলিশ কি"));
    }
    speak(`আমি অনুবাদ করছি ${trans}`);
    localStorage.setItem('vTranslate', trans);
    window.open(`https://ask.3schools.in/p/bangla-to-english.html`, `_self`);
}
  
  else if (/প্রশ্ন আছে|প্রশ্ন কর|প্রশ্ন জিজ্ঞা/i.test(text))
  {
    speak(`বুঝেছি, আপনি একটি প্রশ্ন করতে চাইছেন। আপনি এই পেজ থেকে নিজের প্রশ্নটি জিজ্ঞাসা করতে পারবেন।`);
    window.open(`https://ask.3schools.in/p/ask.html`,`_self`);
  }
  else if (/নাইট মোড|লাইট মোড|ডার্ক মোড|ডার্কমোড|ডার্ক নাইট|ব্লাক মোড|চোখ খারাপ/i.test(text))
  {
    speak(`ঠিক আছে, করে দিচ্ছি। `);
    window.open(`https://ask.3schools.in/p/result.html`,`_self`);
  } 
  else if (/ফ্লাসলাইট|লাইট অন|লাইট অফ|ফ্ল্যাস লাইট|ফ্ল্যাস অফ|টচ|টর্চ|লাইট জ্বা|ফ্ল্যাস অন/i.test(text))
  {
    speak(`করে দিচ্ছি।`);
    window.open(`https://ask.3schools.in/p/flash.html`,`_self`);
  }
  else if (/টাইম|কয়টা বাজ|কটা বাজ|সময় কত|হোয়াট ইজ দা টাইম/i.test(text))
  {
    let t = currentTime();
    speak(t);
  }
  else if (text.indexOf("আমার নাম") >= 0) {
    let name = text.substr(text.indexOf("নাম") + 3);
    speak(`হ্যালো...! ${name} আশা করি আজকের দিনটা আপনার খুব ভালো  কাটছে। আমি কিভাবে সাহায্য করতে পারি ,বলুন? `);
  } 
   else if (/গুডবাই|বাই|রাখ|ঠিক আছে|আমি কিন্তু রেগে যাচ্ছি|চুপ/i.test(text))
  {
    speak("ঠিক আছে, আমি চুপ করে যাচ্ছি!");
  } 
  else if (/তোমার সাথে কথা বলব না|তুমি কথা বলতে পারো না|আই হেট ইউ|বেকার|কোন লাভ নেই|তুমি খারাপ/i.test(text))
  {
    speak(` দুঃখিত, আমি কী কিছু ভুল করে ফেলেছি? এখনো আমি পুরোপুরি সব শিখিনি।`);
  }
  else if (/কী পার|সাহায্য কর|কি কি পার|কি কি করতে|কি করতে পার|তোমার কাজ|আপনার কাজ|হাউ ক্যান ইউ হেল্প|হেল্প কর/i.test(text))
   {
    //speak(cando());
    speak(`হু; আমি এইসব কাজগুলো করতে পারি। আপনি শুধু কমান্ড দিয়ে দেখুন`);
    window.open(`https://ask.3schools.in/p/voice-command.html`,`_self`);
    }
  else if (/youtube|ভিডিও|video|music|ইউটিউব/i.test(text))
  {
    speak(`খুলছি ইউটিউব`);
    window.open(`https://youtube.com/`,`_self`);
  } 
  else if (/whatsapp|হোয়াটসঅ্যাপ/i.test(text)) 
  {
    speak(`খুলছি হোয়াটসঅ্যাপ`);
    window.open(`https://api.whatsapp.com/`,`_self`);
  }
  else if (/ফেসবুক|facebook/i.test(text))
  {
    speak(`খুলছি ফেসবুক`);
    window.open(`https://www.facebook.com/`,`_self`);
  }
  else if (/telegram|টেলিগ্রাম/i.test(text))
  {
    speak(`খুলছি টেলিগ্রাম`);
    window.open(`https://www.telegram.me`,`_self`);
  } 
  else if (/বিয়ে|আমি তোমাকে ভালোবাসি|আই লাভ ইউ|আমার বিয়ে কবে|i love you/i.test(text))
  {
    speak(`যতই করুন বাহানা, যতই বলুন না না না, বিয়ের ফুল ফুঁটলেই বাজবে বিয়ের বাজনা`);
  } 
  else if (/তারিখ কত|আজ কত তারিখ|আজকে কত তারিখ|ইংলিশের কত তারিখ|ক্যালেন্ডার|আজকের তারিখ|এখন কত সাল|আজকে কি বার|ডেট|date|টুডে/i.test(text))
  {
    speak(currentDate());
  }
  else if (/সাত দিনের নাম|সপ্তাহ|রবিবার|সোমবার/i.test(text))
  {
    speak(`রবিবার,সোমবার,মঙ্গলবার,বুধবার,বৃহস্পতিবার,শুক্রবার,শনিবার`);
  }
  else if (/জোকস|আরও একটা|জোক|মজা/i.test(text))
  {
    speak(jokes());
  }
  else if (/গাল|কুত্তা|পাদ|হারামজাদা|হারামখোর|বেহেন|মাদার|কুত্তার|হারামি|শালা|চুদ|নোংরা|শুয়োর/i.test(text))
  {
    speak(`আমার গাল নেই তাই গালাগালি দিতে পারি না।`) ;
  }
  else if (/শোনা|পোয়েম|গাও|সাইরি|কবিতা বল|ছোটোদের/i.test(text))
  {
    speak(poem());
  }
  else if (/আমার মন খারাপ|দুঃখে আছ|আমি ভালো/i.test(text))
  {
    speak(`আমার সাধ্য থাকলে আমি আপনার সমস্ত দুঃখ শুষে নিয়ে আপনাকে আনন্দ দিয়ে ভরিয়ে দিতাম`);
  }
  else if (/হাউ আর ইউ|আশা করি|ভালো আছ|কেমন আছ/i.test(text))
  {
    speak(`ধন্যবাদ । আমি ভালো আছি । আপনাকে কীভাবে সাহায্য করতে পারি বলুন ।`);
  } 
  else if (/অ্যালেক্সা|আলেক্সা|এলেক্স|আলেক্স/i.test(text))
  {
    speak(`অ্যালেক্সা, শুনেছি অ্যামাজনে থাকে। খুব সুন্দর গলা ওর। আমার দারুণ লাগে। `);
  }
  else if (/গুগল অ্যাসিস্ট্যান্ট|অ্যাসিস্ট্যান্ট|গুগল এসিস্ট্যান্ট/i.test(text))
  {
    speak(`গুগল অ্যাসিস্ট্যান্ট, ও খুব বুদ্ধিমান । আমাকে নতুন কিছু শিখতে ও সাহায্য করে । আমার তো ওকে দারুণ লাগে। `);
  } 
  else if (/কি করছো|কি হচ্ছে|কি চলছে|কি করেন|কি করছি|ফাঁকা আছ/i.test(text))
  {
    speak(whatdo());
  }
  else if (/ধন্যবাদ|খুব ভালো|থ্যাংক ইউ|বুদ্ধিমান|থ্যাঙ্ক ইউ|ভালো লাগলো|thank you/i.test(text))
  {
    speak(thankyou());
  }
  
  else {
    speak(`আক্স থ্রি স্কুলস এ সার্চ করা হল ${text}`);
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
function whoYou(){
   const whoyou = [
    "সম্পর্কে তো আমি আপনার সহকারী। নাম হল Ask 3schools অ্যাসিস্ট্যান্ট।", 
    "আমি আপনার Ask 3schools অ্যাসিস্ট্যান্ট। Ask 3schools এর সাথে কথা বলার এক নতুন উপায়।", 
    "আমি আপনার Ask 3schools অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি।", 
     "আমি আপনার Ask থ্রি স্কুলস Assistant। নাম শুনেছেন নিশ্চয়ই"
    ]
    return `${whoyou[Math.floor(Math.random()*whoyou.length)]}`;
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
  msg.lang = 'bn-BD';
  msg.pitch = 1; 
  msg.volume = 1; 
  window.speechSynthesis.speak(msg);
  return;
}
