function sLink(l, callback) {
  let rSl = document.createElement('script');
  rSl.src = l;
  rSl.onload = callback;
  document.body.appendChild(rSl);
  //document.body.removeChild(rSl);
}

sLink("https://app.3schools.in/js/3schools-webstory-module.js", function() {
  let startI = 1;
  document.getElementById('nextPageButton').addEventListener('click', function() {
   if (qS('.webstories-3schools')) {
      sLink(`${hP}/feeds/pages/default?alt=json&start-index=${startI}&max-results=6&callback=webStory`);
      startI += 6;
    }
  })
  if (qS('.webstories-3schools')){
      sLink(`${hP}/feeds/pages/default?alt=json&start-index=${startI}&max-results=6&callback=webStory`);
      startI += 6;
   }

  if(qS('.trending-posts.related')){
    sLink(`${hP}/feeds/posts/default/-/${lA[Math.floor(Math.random() * lA.length)]}?alt=json&max-results=${rP.nP}&callback=rePo`);
    rePo = (k) => { reP(k, qS('.trending-posts.related')) };
  }
  if(qS('.trending-posts.webstories')){
    sLink(`${hP}/feeds/pages/default?alt=json&max-results=6&callback=wsPo`);
    wsPo = (k) => { reP(k, qS('.trending-posts.webstories')) };
  }

});
