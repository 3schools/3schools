<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>welcome back</title>
    <meta name=viewport content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="theme-color" content="#000000">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="PWA Starter Demo">
    <meta name="application-name" content="PWA Starter Demo">
    <link rel="icon" type="image/png" href="./images/icon_32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="./images/icon_16.png" sizes="16x16">
    <link rel="manifest" href="./manifest.json">
    <link rel="stylesheet" href="./css/styles.css" />
    <script src="index.js" defer></script>
</head>

<body>
    <header id="quizHeader">
	 <button onclick="share();">share</button>
         <h1>Welcome Back</h1>
	 <div class="userIcon">
         <img id="userImg" onclick="window.open('/profile.html','_self')" src="/images/icon_256.png">
        </div>
     </header>
   
   <article>
     <div class="whome">
       <h2 class="clock welcome">
     <span id="welcome"></span>  <span id="userN"></span></h2>
   </div>
  <div class="whome">
   <div class="clock">
     <p><span id="h"></span> : <span id="m"></span> : <span id="s"></span> </p>
     <span id="dayname"></span> <span id="day"></span> <span id="month"></span>
   </div>
   </div>
   
<div class="whome">
    <button class="clock" onclick="window.open('#','_self')">Start Learning </button>
   </div>
   </article>
    <footer>
         <input  class='stickB hidden' id="stickB" type='checkbox'/>
       <div class='stick'>
          <label class='stickClose' for='stickB'>❌</label>
         <div class='stickContent'>
             <button onclick="window.open('#','_self')">🔔</button>
	<button onclick="window.open('#','_self')"> 🌐</button>
             <button onclick="window.open('#','_self')">🎁</button>
             <button onclick="window.open('#','_self')">🔎</button>
             <button class="addbtn">📲</button>
          </div>
       </div>
     </footer>
   <script>	   
function updatedU(){
var userName = localStorage.getItem("userName");
var userImg = localStorage.getItem("userPic")
 if(userName != null){
     document.getElementById("userN").innerHTML= userName;
     document.getElementById("userImg").src= userImg;
}
}
updatedU(); 
displayClock();
displayDates();
function displayClock(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var wel;
if (hour < 12)
        wel = 'Good Morning';
    else if (hour >= 12 && hour <= 17)
        wel = 'Good Afternoon';
    else if (hour >= 17 && hour <= 19)
        wel = 'Good Evening';
    else if (hour >= 19 && hour <= 24)
        wel = 'Good Night';
    document.getElementById('welcome').innerHTML = wel ;
	
   
    if(hour < 10){ 
      document.getElementById('h').innerHTML = "0" + hour;
    }else{
     document.getElementById('h').innerHTML = hour;  
    }

    if(minute < 10){ 
      document.getElementById('m').innerHTML = "0" + minute;
    }else{
     document.getElementById('m').innerHTML = minute;  
    }

    if(second < 10){ 
      document.getElementById('s').innerHTML = "0" + second;
    }else{
     document.getElementById('s').innerHTML = second;  
    }
  window.setInterval(displayClock, 1000);
}

function displayDates(){

  var dateObj = new Date();
  var date = dateObj.getDate()
  var month = dateObj.getUTCMonth();
  var day = dateObj.getDay();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName = ["রবিবার", "সোমবার","মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];

 document.getElementById('day').innerHTML = date;
 document.getElementById('month').innerHTML = monthNames[month];
 document.getElementById('dayname').innerHTML = dayName[day];
}
   </script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-0M21P4SHE3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0M21P4SHE3');
</script> 

    <script src="./js/notify.js"></script>
    <script src="./js/networkChange.js"></script>
    <script defer src="./js/push.js"></script>
    <script src="./js/sync.js"></script>
    <script defer src="./js/app.js"></script>
    
</body>
</html>
