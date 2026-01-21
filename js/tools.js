(function() {
    'use strict';
     window.sec = 5;

    const css = `
        .nav-menu.is-open{display:flex!important;flex-direction:column;position:fixed;top:76px;left:0;right:0;background:#030712;padding:20px;border-bottom:1px solid rgba(255,255,255,.1);z-index:1000}
        .mobile-toggle{display:flex;flex-direction:column;justify-content:space-between;width:30px;height:21px;background:0 0;border:0;cursor:pointer;padding:0;z-index:1001}
        .mobile-bar{width:100%;height:3px;background:#fff;transition:.3s;transform-origin:left}
        .mobile-toggle.is-active .mobile-bar:first-child{transform:rotate(45deg)}
        .mobile-toggle.is-active .mobile-bar:nth-child(2){opacity:0}
        .mobile-toggle.is-active .mobile-bar:last-child{transform:rotate(-45deg)}
        @media(min-width:1024px){.mobile-toggle{display:none!important}.sidebar{position:sticky!important;top:100px!important;align-self:start!important;height:fit-content!important}}
        .appsWrap{position:fixed;inset:0;z-index:99999;background:#0e0e0e;display:flex;flex-direction:column;opacity:0;visibility:hidden;transform:scale(.98) translateY(10px);transition:.4s cubic-bezier(.16,1,.3,1);font-family:system-ui}
        .appsActive{opacity:1;visibility:visible;transform:scale(1) translateY(0)}
        .appsHead{display:flex;justify-content:space-between;align-items:center;padding:0 24px;height:64px;border-bottom:1px solid #303134;color:#fff}
        .appsClose{background:#2c2c2e;border:0;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}
        .appsContent{position:relative;flex:1}
        .appsFrame{width:100%;height:100%;border:0;background:#0e0e0e}
        .appsLoader{position:absolute;inset:0;background:#0e0e0e;z-index:10;padding:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;align-content:start;transition:opacity .3s}
        .as-card{display:flex;align-items:center;padding:20px;background:#161616;border-radius:16px;gap:16px;border:1px solid #222}
        .as-i{width:60px;height:60px;background:#222;border-radius:12px;position:relative;overflow:hidden;flex-shrink:0}
        .as-l{height:12px;background:#222;border-radius:4px;margin-bottom:10px;width:80%;position:relative;overflow:hidden}
        .as-i::after,.as-l::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.05),transparent);animation:s 1.5s infinite linear}
        @keyframes s{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
    `;

    const run = () => {
        if (!document.getElementById('acss')) {
            const s = document.createElement('style');
            s.id = 'acss';
            s.textContent = css;
            document.head.appendChild(s);
        }
        const btn = document.querySelector('.mobile-toggle');
        const menu = document.querySelector('.nav-menu');
        const yr = document.getElementById('currentYear');
        if(yr) yr.textContent = new Date().getFullYear();
        if(btn && menu) {
            btn.onclick = () => {
                menu.classList.toggle('is-open');
                btn.classList.toggle('is-active');
            };
        }
        try {
            const l = document.querySelector("link[rel='canonical']")?.href || location.href;
            const t = document.title.split(" ").slice(0, 3).join(" ");
            let s = JSON.parse(localStorage.getItem('toolsSaved') || '[]');
            if (!s.some(x => x.link === l)) {
                s.unshift({ title: t, link: l });
                localStorage.setItem('toolsSaved', JSON.stringify(s.slice(0, 15)));
            }
        } catch(e){}
    };

    window.appsOpen = (u) => {
        let b = document.getElementById('appsRoot');
        if (!b) {
            if(!document.getElementById('acss')) run();
            b = document.createElement('div');
            b.id = 'appsRoot';
            b.className = 'appsWrap';
            b.innerHTML = `<div class="appsHead"><span style="font-weight:600;font-size:1.1rem">3schools Apps</span><button class="appsClose" onclick="appsClose()">✕</button></div><div class="appsContent"><div id="appsLoader" class="appsLoader">${'<div class="as-card"><div class="as-i"></div><div style="flex:1"><div class="as-l"></div><div class="as-l" style="width:40%"></div></div></div>'.repeat(12)}</div><iframe class="appsFrame" id="appsIframe"></iframe></div>`;
            document.body.appendChild(b);
        }
        const f = document.getElementById('appsIframe');
        const l = document.getElementById('appsLoader');
        if (f.src !== u) {
            l.style.opacity = '1';
            l.style.display = 'grid';
            f.src = u;
            f.onload = () => { l.style.opacity = '0'; setTimeout(() => l.style.display = 'none', 300); };
        }
        b.classList.add('appsActive');
        document.body.style.overflow = 'hidden';
    };

    window.appsClose = () => {
        const b = document.getElementById('appsRoot');
        if (b) { b.classList.remove('appsActive'); document.body.style.overflow = ''; }
    };
    
    document.addEventListener('keydown', e => e.key === 'Escape' && window.appsClose());
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', run) : run();
})();
