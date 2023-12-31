function qS(e) {
  return document.querySelector(e);
}
function fDate(i) {
  const os = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(i).toLocaleDateString('en-US', os);
}
function webStory(k) {
  qS('.webstories-3schools').innerHTML = '';
  k.feed.entry.forEach((e) => {
    let webS = `
    <a href="${e.link[e.link.length - 1].href}">
    <div class="story-img">
    ${e.media$thumbnail ? `<img src="${e.media$thumbnail.url.replace(/s\B\d{2,4}-c/, 's1200')}" alt="${e.title.$t}" class="lazyload" src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='>`: `<img alt="${e.title.$t}" src="https://app.3schools.in/img/no.png">`}
    </div>
    <span>${e.title.$t}<br><small>${fDate(e.updated.$t)}</small></span>
    </a>
    `;
    qS('.webstories-3schools').insertAdjacentHTML('beforeend', webS);
  });
}
const reP = (p, c) => {
  p.feed.entry.forEach((e)=> {
    let con = `
    <a class="flex3s swiper-slide" href="${e.link[e.link.length-1].href}">
    <div class="post-thumbnail">
    ${e.media$thumbnail ? `<img data-src="${e.media$thumbnail.url.replace(/s\B\d{2,4}-c/, 's1200')}" alt="${e.title.$t}" class="lazyload" src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='>`: ''}
    </div>
    <span class="post-title">${e.title.$t}</span>
    </a>
    `;
    c.insertAdjacentHTML('beforeend', con);
  })
}
