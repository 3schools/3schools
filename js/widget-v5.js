(function(){
function isAllowedHost(h){
var host=String(h||'').toLowerCase();
return host==='3schools.in'||host.endsWith('.3schools.in')||host==='webtools62.blogspot.com';
}
function isAllowedUrl(href){
try{
return isAllowedHost(new URL(href).hostname);
}catch(e){return false;}
}
function injectStyles(){
if(document.getElementById('t3s-w-css'))return;
var st=document.createElement('style');
st.id='t3s-w-css';
st.textContent='@keyframes t3sSk{100%{transform:translateX(100%)}}'+
'.t3s-w-box{position:relative;width:100%;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;background:#ffffff;box-sizing:border-box}'+
'.t3s-w-box.dark{background:#0f172a;border-color:rgba(148,163,184,0.2)}'+
'.t3s-w-box.nobdr{border:none;background:transparent}'+
'.t3s-w-stage{position:relative;width:100%;min-height:260px}'+
'.t3s-w-skel{position:absolute;inset:0;padding:18px;background:#ffffff;display:flex;flex-direction:column;gap:14px;z-index:2;transition:opacity .25s ease}'+
'.t3s-w-box.dark .t3s-w-skel{background:#0f172a}'+
'.t3s-sk-line{position:relative;overflow:hidden;background:#e2e8f0;border-radius:8px;height:14px}'+
'.t3s-w-box.dark .t3s-sk-line{background:#1e293b}'+
'.t3s-sk-line::after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent);animation:t3sSk 1.3s infinite}'+
'.t3s-w-box.dark .t3s-sk-line::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)}'+
'.t3s-w-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-top:1px solid #e2e8f0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:13px;line-height:1.4;box-sizing:border-box;width:100%}'+
'.t3s-w-box.dark .t3s-w-foot{background:#111827;border-top-color:rgba(148,163,184,0.2)}'+
'.t3s-w-foot a{color:#0f172a !important;font-weight:700 !important;text-decoration:none !important;display:block !important;flex:1;min-width:0;white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;visibility:visible !important;opacity:1 !important}'+
'.t3s-w-box.dark .t3s-w-foot a{color:#f8fafc !important}'+
'.t3s-w-foot a:hover{color:#0284c7 !important}'+
'.t3s-w-brand{font-size:11px;font-weight:700;color:#0284c7;background:rgba(2,132,199,0.1);padding:3px 10px;border-radius:99px;white-space:nowrap;flex-shrink:0}'+
'.t3s-w-toast-wrap{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);z-index:2147483647;display:flex;flex-direction:column;gap:8px;align-items:center;pointer-events:none;width:90%;max-width:360px}'+
'.t3s-w-toast{background:#0f172a;color:#ffffff;padding:11px 18px;border-radius:99px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:13px;font-weight:700;display:inline-flex;align-items:center;gap:8px;box-shadow:0 10px 28px rgba(0,0,0,0.26);opacity:0;transform:translateY(14px) scale(0.95);transition:all .24s ease;border:1px solid rgba(255,255,255,0.12)}'+
'.t3s-w-toast.show{opacity:1;transform:translateY(0) scale(1)}';
document.head.appendChild(st);
}
function showParentToast(msg){
injectStyles();
var wrap=document.getElementById('t3s-w-toast-wrap');
if(!wrap){
wrap=document.createElement('div');
wrap.id='t3s-w-toast-wrap';
wrap.className='t3s-w-toast-wrap';
document.body.appendChild(wrap);
}
var el=document.createElement('div');
el.className='t3s-w-toast';
el.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>';
var sp=document.createElement('span');
sp.textContent=msg;
el.appendChild(sp);
wrap.appendChild(el);
requestAnimationFrame(function(){el.classList.add('show');});
setTimeout(function(){
el.classList.remove('show');
setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},260);
},2600);
}
function init(){
injectStyles();
var widgets=document.querySelectorAll('.t3s-widget');
for(var i=0;i<widgets.length;i++){
var w=widgets[i];
if(w.dataset.initialized)continue;
var a=w.querySelector('a');
if(!a||!isAllowedUrl(a.href)){
w.innerHTML='<div style="padding:18px;background:#fee2e2;color:#991b1b;border-radius:10px;font-family:sans-serif;font-size:13px;text-align:center;border:1px solid #fca5a5;">Embed disabled: Official tools.3schools.in link missing.</div>';
continue;
}
var cs=window.getComputedStyle(a);
if(cs.display==='none'||cs.visibility==='hidden'||cs.opacity==='0'){
w.innerHTML='<div style="padding:18px;background:#fee2e2;color:#991b1b;border-radius:10px;font-family:sans-serif;font-size:13px;text-align:center;border:1px solid #fca5a5;">Embed disabled: Attribution link cannot be hidden.</div>';
continue;
}
var parsed=new URL(a.href);
var baseUrl=parsed.origin+parsed.pathname;
var customTheme=w.getAttribute('data-theme')||'';
var customBorder=w.getAttribute('data-border')||'';
var id='t3s_ifr_'+Math.random().toString(36).slice(2,10);

var box=document.createElement('div');
box.className='t3s-w-box'+(customTheme==='dark'?' dark':'')+(customBorder==='none'?' nobdr':'');
var stage=document.createElement('div');
stage.className='t3s-w-stage';

var skel=document.createElement('div');
skel.className='t3s-w-skel';
skel.innerHTML='<div style="display:flex;gap:8px"><div class="t3s-sk-line" style="height:34px;flex:1"></div><div class="t3s-sk-line" style="height:34px;flex:1"></div></div>'+
'<div class="t3s-sk-line" style="height:110px;border-radius:12px"></div>'+
'<div class="t3s-sk-line" style="height:42px;border-radius:12px"></div>'+
'<div style="display:flex;gap:10px"><div class="t3s-sk-line" style="width:40%"></div><div class="t3s-sk-line" style="width:30%"></div></div>';

var ifr=document.createElement('iframe');
var hashParts=[];
if(customTheme)hashParts.push('theme='+encodeURIComponent(customTheme));
if(customBorder)hashParts.push('border='+encodeURIComponent(customBorder));
ifr.src=baseUrl+'?embed=true'+(hashParts.length?'#'+hashParts.join('&'):'');
ifr.id=id;
ifr.title=a.textContent||'3schools Tool';
ifr.style.cssText='width:100%;height:260px;border:none;display:block;background:transparent;opacity:0;transition:opacity .28s ease;';

var foot=document.createElement('div');
foot.className='t3s-w-foot';
a.setAttribute('target','_blank');
a.setAttribute('rel','noopener');
a.setAttribute('title',a.textContent||'');
foot.appendChild(a);
var brand=document.createElement('span');
brand.className='t3s-w-brand';
brand.textContent='tools.3schools.in';
foot.appendChild(brand);

stage.appendChild(skel);
stage.appendChild(ifr);
box.appendChild(stage);
box.appendChild(foot);
w.innerHTML='';
w.appendChild(box);
w.dataset.id=id;
w.dataset.initialized='1';
w.dataset.ready='0';

(function(widgetEl,skelEl,linkEl){
setTimeout(function(){
if(widgetEl.dataset.ready==='0'){
skelEl.innerHTML='<div style="margin:auto;text-align:center;font-family:sans-serif;font-size:13px;color:#64748b;display:flex;flex-direction:column;align-items:center;gap:10px;"><span>Tool preview took too long to respond.</span><a href="'+linkEl.href+'" target="_blank" rel="noopener" style="padding:8px 16px;border-radius:10px;background:#0284c7;color:#fff;text-decoration:none;font-weight:700;">Open Tool Directly</a></div>';
}
},14000);
})(w,skel,a);
}
}
window.addEventListener('message',function(e){
var data=e.data;
if(!data||!data.type)return;
var senderHost='';
try{senderHost=new URL(e.origin).hostname.toLowerCase();}catch(err){return;}
if(!isAllowedHost(senderHost))return;

if(data.type==='T3S_TOAST'&&data.msg){
showParentToast(String(data.msg).slice(0,180));
return;
}
if(data.type==='T3S_EMBED_CHALLENGE'&&data.token){
var widgets=document.querySelectorAll('.t3s-widget');
for(var i=0;i<widgets.length;i++){
var w=widgets[i];
var ifr=w.querySelector('iframe');
if(ifr&&ifr.contentWindow===e.source){
var a=w.querySelector('.t3s-w-foot a');
if(a&&isAllowedUrl(a.href)){
var cs=window.getComputedStyle(a);
if(cs.display!=='none'&&cs.visibility!=='hidden'&&cs.opacity!=='0'){
e.source.postMessage({type:'T3S_EMBED_UNLOCK',token:data.token,id:w.dataset.id},'*');
}
}
break;
}
}
}
if(data.type==='T3S_RESIZE'&&data.id){
var w2=document.querySelector('.t3s-widget[data-id="'+data.id+'"]');
if(!w2)return;
var frame=w2.querySelector('iframe');
var stage=w2.querySelector('.t3s-w-stage');
var skel=w2.querySelector('.t3s-w-skel');
var h=Math.max(180,parseInt(data.height,10)||300);
if(frame)frame.style.height=h+'px';
if(stage)stage.style.minHeight='0';
if(w2.dataset.ready==='0'){
if(skel){skel.style.opacity='0';setTimeout(function(){if(skel.parentNode)skel.parentNode.removeChild(skel);},260);}
if(frame)frame.style.opacity='1';
w2.dataset.ready='1';
}
}
});
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
