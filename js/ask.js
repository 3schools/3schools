/*
Ask 3schools Main Js
*Copyright www.3schools.in
*Licensed code (no open source code)
*V10.6
*Last updated 20 Jan 2024
*/
const _0x4b6bbc=_0x231e;(function(_0x58c04c,_0x5c7a90){const _0xffb0ea=_0x231e,_0x24b133=_0x58c04c();while(!![]){try{const _0x3c1875=-parseInt(_0xffb0ea(0x12a))/0x1*(parseInt(_0xffb0ea(0x129))/0x2)+parseInt(_0xffb0ea(0x136))/0x3+parseInt(_0xffb0ea(0x15f))/0x4*(-parseInt(_0xffb0ea(0x12c))/0x5)+-parseInt(_0xffb0ea(0x167))/0x6*(-parseInt(_0xffb0ea(0x113))/0x7)+-parseInt(_0xffb0ea(0xc0))/0x8+parseInt(_0xffb0ea(0x143))/0x9+parseInt(_0xffb0ea(0x109))/0xa;if(_0x3c1875===_0x5c7a90)break;else _0x24b133['push'](_0x24b133['shift']());}catch(_0x530bf6){_0x24b133['push'](_0x24b133['shift']());}}}(_0x4786,0x4437e));function qS(_0x184123){const _0x5d2a37=_0x231e;return document[_0x5d2a37(0x161)](_0x184123);}function sLink(_0x2fb267){const _0x95f17e=_0x231e;let _0x59e196=document[_0x95f17e(0x156)]('script');_0x59e196['src']=_0x2fb267,document[_0x95f17e(0xc1)]['appendChild'](_0x59e196),document['body'][_0x95f17e(0x17e)](_0x59e196);}async function loadVotes(){const _0x42f68e=_0x231e,_0x76edb2=document[_0x42f68e(0xfb)](_0x42f68e(0x14e));for(const _0xd48c4c of _0x76edb2){const _0x225c02=_0xd48c4c[_0x42f68e(0xd3)][_0x42f68e(0x173)],_0x376984=_0xd48c4c[_0x42f68e(0xd3)][_0x42f68e(0x158)];await loadVote(_0x225c02,_0x376984,_0xd48c4c);}}async function loadVote(_0x502c73,_0x1edbef,_0x3460d8){const _0x449e73=_0x231e;try{const _0x2e9f78=await getVoteCounts(_0x502c73);updateUI(_0x502c73,_0x1edbef,_0x2e9f78,_0x3460d8);}catch(_0x597e14){console[_0x449e73(0x14f)](_0x449e73(0x154),_0x597e14);}}function updateUI(_0x3f062b,_0x22af13,_0x5f42b0){const _0x456e80=_0x231e,_0x3b6fcf=document[_0x456e80(0xfb)](_0x456e80(0x110)+_0x3f062b+_0x456e80(0x120)+_0x22af13+'\x22]');_0x3b6fcf[_0x456e80(0xea)]>0x0&&_0x3b6fcf[_0x456e80(0x13d)](_0x94f542=>{const _0x465711=_0x456e80;if(_0x22af13==='up')_0x94f542[_0x465711(0xe6)]='<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M23\x2010a2\x202\x200\x200\x200-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17\x201L7.59\x207.58C7.22\x207.95\x207\x208.45\x207\x209v10a2\x202\x200\x200\x200\x202\x202h9c.83\x200\x201.54-.5\x201.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1\x2021h4V9H1z\x22/></svg>'+_0x5f42b0[_0x465711(0x164)],_0x94f542[_0x465711(0xd7)]['remove']('d');else _0x22af13===_0x465711(0x152)&&(_0x94f542[_0x465711(0xe6)]='<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M19\x2015h4V3h-4m-4\x200H6c-.83\x200-1.54.5-1.84\x201.22l-3.02\x207.05c-.09.23-.14.47-.14.73v2a2\x202\x200\x200\x200\x202\x202h6.31l-.95\x204.57c-.02.1-.03.2-.03.31c0\x20.42.17.79.44\x201.06L9.83\x2023l6.58-6.59c.37-.36.59-.86.59-1.41V5a2\x202\x200\x200\x200-2-2\x22/></svg>'+_0x5f42b0[_0x465711(0x145)],_0x94f542['classList'][_0x465711(0x121)]('d'));});}async function vote(_0x267a9c,_0x49fc60){if(!hasVoted(_0x49fc60)){markVoted(_0x49fc60);const _0x50bad9=updateLocalUI(_0x49fc60,_0x267a9c);await updateGoogleSheet(_0x49fc60,_0x267a9c);const _0x361712=await getVoteCounts(_0x49fc60);}else alert('আপনি\x20ভোট\x20করেছেন!');}function updateLocalUI(_0x22079f,_0x1364ac){const _0x2ed7ef=_0x231e,_0x5f16fb=document[_0x2ed7ef(0xfb)](_0x2ed7ef(0x110)+_0x22079f+'\x22][data-action=\x22'+_0x1364ac+'\x22]'),_0x3f5dff={'upvotes':0x0,'downvotes':0x0};return _0x5f16fb['length']>0x0&&_0x5f16fb[_0x2ed7ef(0x13d)](_0x33776e=>{const _0xd6bab8=_0x2ed7ef;if(_0x1364ac==='up')_0x3f5dff[_0xd6bab8(0x164)]=parseInt(_0x33776e[_0xd6bab8(0x14d)])+0x1,_0x33776e[_0xd6bab8(0xe6)]='<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M23\x2010a2\x202\x200\x200\x200-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17\x201L7.59\x207.58C7.22\x207.95\x207\x208.45\x207\x209v10a2\x202\x200\x200\x200\x202\x202h9c.83\x200\x201.54-.5\x201.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1\x2021h4V9H1z\x22/></svg>'+_0x3f5dff['upvotes'];else _0x1364ac==='down'&&(_0x3f5dff[_0xd6bab8(0x145)]=parseInt(_0x33776e[_0xd6bab8(0x14d)])+0x1,_0x33776e['innerHTML']=_0xd6bab8(0xda)+_0x3f5dff[_0xd6bab8(0x145)]);}),_0x3f5dff;}function hasVoted(_0x4a26fb){const _0x224d5e=_0x231e;return localStorage[_0x224d5e(0xe3)](_0x4a26fb)===_0x224d5e(0xbd);}function _0x231e(_0x4d9c20,_0x28af3a){const _0x478629=_0x4786();return _0x231e=function(_0x231ee3,_0xb7c0cd){_0x231ee3=_0x231ee3-0xbc;let _0x245e4e=_0x478629[_0x231ee3];return _0x245e4e;},_0x231e(_0x4d9c20,_0x28af3a);}function markVoted(_0x5ee5fc){const _0x1ceab4=_0x231e;localStorage[_0x1ceab4(0x178)](_0x5ee5fc,_0x1ceab4(0xbd));}function updateGoogleSheet(_0x29a0b7,_0x587034){const _0x1b844a=_0x231e,_0x5ed1cb=_0x1b844a(0xd5),_0x124b47=_0x5ed1cb+_0x1b844a(0x172)+_0x587034+'&uniqueId='+_0x29a0b7;fetch(_0x124b47)['then'](_0x4028ea=>{const _0x355f7b=_0x1b844a;if(!_0x4028ea['ok'])throw new Error('HTTP\x20error!\x20Status:\x20'+_0x4028ea[_0x355f7b(0x14a)]);return _0x4028ea[_0x355f7b(0x165)]();});}function _0x4786(){const _0x2b1427=['&callback=qnaR','\x22\x20class=\x22lazyload\x22\x20data-src=\x22','link','media$thumbnail','32814BKaBTK','style','downvotes','\x22\x20class=\x22rTitle\x22\x20data-text=\x22','ভারত','aDs','getLocalCartItems','status','fromEntries','name','textContent','[data-vote].d','error','askCollection','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dComment\x22>\x0a\x20\x20\x20\x20\x20\x20\x20<center>','down','https://ask.3schools.in/feeds/posts/default?alt=json&max-results=145&q=','Error:','.pBo','createElement','.record-de','action','#dCP','pTi','<br>https://ask.3schools.in\x20>\x20','\x22\x20alt=\x22','.bre-t','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record-trans\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22r-lang\x22>A</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22record-line\x22\x20data-text=\x22','24rRuoaX','in-cart','querySelector','<img\x20alt=\x22blank\x22\x20id=\x22pDimg\x22\x20src=\x22https://img1.blogblog.com/img/blank.gif\x22\x20onload=\x22this.style.height\x20=\x20qS(\x27#dCP\x27).scrollHeight\x20+\x20\x27px\x27\x22>','\x22\x20alt=\x22ads\x20via\x203schools\x22\x20class=\x22lazyload\x22></a></div>','upvotes','json','replace','6kdhtyS','parse','\x20>\x20','#load-now','\x0a</small>\x0a</div>\x0a</div>\x0a<div\x20data-t=\x22','\x22><br><small><a\x20href=\x22','addEventListener','active','#collection','thr$total','</a></small></p>\x0a\x20\x20\x20\x20</details>','?action=','vote','.t-coll','DOMContentLoaded','কাকে','<details\x20open=\x22\x22><summary\x20class=\x22post-share\x22><b>সম্পর্কিত\x20:-\x20','setItem','min','term','floor','scroll','push','removeChild','top','\x22\x20class=\x22lazyload\x22></a></div>','content','split','voted','\x27\x20onclick=\x27vote(&apos;up&apos;,\x20this.dataset.vote)\x27><svg\x20height=\x2724\x27\x20viewBox=\x270\x200\x2024\x2024\x27\x20width=\x2724\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27><path\x20d=\x27M23\x2010a2\x202\x200\x200\x200-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17\x201L7.59\x207.58C7.22\x207.95\x207\x208.45\x207\x209v10a2\x202\x200\x200\x200\x202\x202h9c.83\x200\x201.54-.5\x201.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1\x2021h4V9H1z\x27\x20fill=\x27currentColor\x27/></svg></span>\x0a<span\x20class=\x27d\x27\x20data-action=\x27down\x27\x20data-vote=\x27','trText','1451192tEjNYk','body','innerText','innerHeight','keys','\x0a<div\x20class=\x22flex3s\x20post-bottom\x22>\x0a<div\x20class=\x22flex3s\x22>\x0a<div\x20class=\x22auth-img\x22><img\x20alt=\x22Profile\x20photo\x22\x20class=\x22lazyload\x22\x20data-src=\x22','\x20.\x20','key','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22rpS\x22\x20href=\x22','rel-p','\x22\x20onclick=\x22speak(this.parentElement.previousElementSibling.children[0].innerText\x20+\x27\x27+\x20this.parentElement.previousElementSibling.querySelector(\x27.post-des\x27).dataset.text)\x22><svg\x20class=\x22w-6\x20h-6\x22\x20fill=\x22currentColor\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M13.5\x204.06c0-1.336-1.616-2.005-2.56-1.06l-4.5\x204.5H4.508c-1.141\x200-2.318.664-2.66\x201.905A9.76\x209.76\x200\x20001.5\x2012c0\x20.898.121\x201.768.35\x202.595.341\x201.24\x201.518\x201.905\x202.659\x201.905h1.93l4.5\x204.5c.945.945\x202.561.276\x202.561-1.06V4.06zM18.584\x205.106a.75.75\x200\x20011.06\x200c3.808\x203.807\x203.808\x209.98\x200\x2013.788a.75.75\x200\x2011-1.06-1.06\x208.25\x208.25\x200\x20000-11.668.75.75\x200\x20010-1.06z\x22></path><path\x20d=\x22M15.932\x207.757a.75.75\x200\x20011.061\x200\x206\x206\x200\x20010\x208.486.75.75\x200\x2001-1.06-1.061\x204.5\x204.5\x200\x20000-6.364.75.75\x200\x20010-1.06z\x22></path></svg>\x20শুনুন</div>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','sLI','&callback=fPo','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>','join','appendChild','\x20টি\x20উত্তর\x20\x20.\x20','.pBo[data-url=\x22','then','dataset','delete','https://script.google.com/macros/s/AKfycbx3bb2CHCJmqAQ2s2Os27YhHu3V6lkzWvCwxXexQLdtjS2Kv0BZr_DDYGYOLN2ZwRhc/exec','</center><hr>\x0a\x20\x20\x20\x20\x20\x20\x20','classList','trim','author','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M19\x2015h4V3h-4m-4\x200H6c-.83\x200-1.54.5-1.84\x201.22l-3.02\x207.05c-.09.23-.14.47-.14.73v2a2\x202\x200\x200\x200\x202\x202h6.31l-.95\x204.57c-.02.1-.03.2-.03.31c0\x20.42.17.79.44\x201.06L9.83\x2023l6.58-6.59c.37-.36.59-.86.59-1.41V5a2\x202\x200\x200\x200-2-2\x22/></svg>','\x22\x20onclick=\x22share(this)\x22><svg\x20class=\x22line\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z\x22\x20transform=\x22translate(-83.28571\x20-252.73452)\x22></path><circle\x20class=\x22fill\x22\x20cx=\x2218.48892\x22\x20cy=\x225.49436\x22\x20r=\x223.51099\x22></circle><circle\x20class=\x22fill\x22\x20cx=\x2218.48892\x22\x20cy=\x2218.50564\x22\x20r=\x223.51099\x22></circle><line\x20class=\x22cls-3\x22\x20x1=\x2212.53012\x22\x20x2=\x228.65012\x22\x20y1=\x228.476\x22\x20y2=\x2210.416\x22></line><line\x20class=\x22cls-3\x22\x20x1=\x2212.53012\x22\x20x2=\x228.65012\x22\x20y1=\x2215.496\x22\x20y2=\x2213.556\x22></line></svg>\x20শেয়ার</div>\x0a<div\x20class=\x22pBo\x22\x20data-des=\x22','stringify','add','</b><small>বিজ্ঞাপন</small></div>\x0a</div>\x0a<div\x20onclick=\x22feedBack(this)\x22\x20id=\x22feedback\x22\x20data-t=\x22','.recommend','map','\x22\x20onclick=\x22addItem(this)\x22><svg\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M17\x203H7c-1.1\x200-1.99.9-1.99\x202L5\x2021l7-3l7\x203V5c0-1.1-.9-2-2-2z\x22\x20fill=\x22currentColor\x22></path></svg>\x20সেভ</div>\x0a<div\x20class=\x22pSp\x22\x20data-t=\x22','substring','getItem','কাকে\x20বলে','</a>\x0a<a\x20href=\x22/p/sponsor.html\x22\x20target=\x22_blank\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202zm1\x2015h-2v-6h2v6zm0-8h-2V7h2v2z\x22/></svg>এই\x20বিজ্ঞাপনটি\x20কেন?</a>\x0a<div\x20onclick=\x22speak(this.parentElement.previousElementSibling.innerText\x20+\x27\x27+\x20this.parentElement.previousElementSibling.querySelector(\x27.post-des\x27).dataset.text)\x22><svg\x20fill=\x22currentColor\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M13.5\x204.06c0-1.336-1.616-2.005-2.56-1.06l-4.5\x204.5H4.508c-1.141\x200-2.318.664-2.66\x201.905A9.76\x209.76\x200\x20001.5\x2012c0\x20.898.121\x201.768.35\x202.595.341\x201.24\x201.518\x201.905\x202.659\x201.905h1.93l4.5\x204.5c.945.945\x202.561.276\x202.561-1.06V4.06zM18.584\x205.106a.75.75\x200\x20011.06\x200c3.808\x203.807\x203.808\x209.98\x200\x2013.788a.75.75\x200\x2011-1.06-1.06\x208.25\x208.25\x200\x20000-11.668.75.75\x200\x20010-1.06z\x22></path><path\x20d=\x22M15.932\x207.757a.75.75\x200\x20011.061\x200\x206\x206\x200\x20010\x208.486.75.75\x200\x2001-1.06-1.061\x204.5\x204.5\x200\x20000-6.364.75.75\x200\x20010-1.06z\x22></path></svg>\x20শুনুন</div>\x0a</div>\x0a\x20\x20','innerHTML','src','?alt=json&max-results=145&callback=horPo','.auth-name','length','?utm_source=ask_3schools_in\x22\x20rel=\x22noopener\x20sponsored\x22\x20target=\x22_blank\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M10\x206H6a2\x202\x200\x200\x200-2\x202v10a2\x202\x200\x200\x200\x202\x202h10a2\x202\x200\x200\x200\x202-2v-4M14\x204h6m0\x200v6m0-6L10\x2014\x22/></svg>','clear','size','some','addItemToLocalCart','\x0a\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record-de\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20d=\x22M13.5\x206.5V7h5v-.5a2.5\x202.5\x200\x200\x200-5\x200Zm-2\x20.5v-.5a4.5\x204.5\x200\x201\x201\x209\x200V7H28a1\x201\x200\x201\x201\x200\x202h-1.508L24.6\x2025.568A5\x205\x200\x200\x201\x2019.63\x2030h-7.26a5\x205\x200\x200\x201-4.97-4.432L5.508\x209H4a1\x201\x200\x200\x201\x200-2h7.5Zm2.5\x206.5a1\x201\x200\x201\x200-2\x200v10a1\x201\x200\x201\x200\x202\x200v-10Zm5-1a1\x201\x200\x200\x200-1\x201v10a1\x201\x200\x201\x200\x202\x200v-10a1\x201\x200\x200\x200-1-1Z\x22\x20/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22r-lang\x22>Q</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22record-line\x22>','removeItemFromCart','\x22\x20onclick=\x22feedBack(this)\x22\x20id=\x22feedback\x22>❌</div>\x0a</div>\x0a<div\x20class=\x22gradient\x22>\x0a<h2\x20class=\x22post-title\x22>\x0a<a\x20data-t=\x22','<a\x20href=\x22/search/label/','catch','&q=','\x22></div>\x0a<div\x20class=\x22auth-name\x22><b>','href','\x22\x20href=\x22','\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20','.dp-cl','querySelectorAll','\x22\x20data-title=\x22','...','des','\x22>\x0a</div>\x0a<div\x20class=\x22auth-name\x22>\x0a<b>','পূর্ণরূপ','<div\x20class=\x22item-thumbnail\x22><a\x20href=\x22','text','feed','getBoundingClientRect','toggle','?alt=json&callback=aCom','</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>','random','3933690CjMfxq','--after-content','\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20','parentElement','insertAdjacentElement','\x22></p>\x20\x0a</div>\x0a<div\x20class=\x22flex3s\x20post-share\x20m\x22>\x0a<a\x20href=\x22','indexOf','[data-vote=\x22','\x22>#','set','1856155LgTljD','?action=getCounts&uniqueId=',':root','\x22>❌</div>\x0a</div>\x0a<div\x20class=\x22gradient\x22>\x0a<h2\x20class=\x22post-title\x22>\x0a<a\x20href=\x22','</b></summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex3s\x20post-share\x20m\x20s\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','&callback=qnaPO','\x22\x20data-url=\x22','title','s1200','slice','reText','setProperty','&callback=horPo','\x22][data-action=\x22','remove','\x22\x20class=\x22post-des\x22>\x20\x20<span\x20data-t=\x22','click','\x22\x20class=\x22lMBtn\x22\x20onclick=\x22sPost(this)\x22>..আরও\x20পড়ুন</span></p>\x0a</div>\x0a<div\x20class=\x22flex3s\x20post-share\x20m\x22>\x0a<span\x20class=\x27d\x27\x20data-action=\x27up\x27\x20data-vote=\x27','reverse','entry','<center><p>আপনার\x20ইনপুট\x20এই\x20পৃষ্ঠাটিকে\x20সবার\x20জন্য\x20উন্নত\x20করতে\x20আমাদের\x20সাহায্য\x20করে।</p></center>','</a>\x0a</h2>\x0a<p\x20data-text=\x22','158086Bmowkw','7kOzIoY','filter','74700IUpdUu','রাজধানী','#rel-post','.record','https://ask.3schools.in/feeds/posts/default?alt=json&max-results=','has','</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>','</a>\x0a</h2>\x0a<p\x20class=\x22post-des\x22\x20data-text=\x22','article','\x20_\x20','1324746EooSWz','url','\x22\x20style=\x22min-width:40px;display:flex\x22\x20class=\x22flex3s\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22><g\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x221.5\x22><path\x20d=\x22m11\x208.5l3.5\x203.5l-3.5\x203.5\x22/><path\x20d=\x22M12\x2022c5.523\x200\x2010-4.477\x2010-10S17.523\x202\x2012\x202S2\x206.477\x202\x2012s4.477\x2010\x2010\x2010Z\x22/></g></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>','পশ্চিমবঙ্গ','category','afterend','<center>খুঁজে\x20পাওয়া\x20যায়\x20নি!\x20🕵</center>','forEach','.noemp'];_0x4786=function(){return _0x2b1427;};return _0x4786();}function getVoteCounts(_0x1ccd8f){return new Promise((_0x2028fd,_0x535ce2)=>{const _0x20137a=_0x231e,_0x1a1789=_0x20137a(0xd5),_0x725c63=_0x1a1789+_0x20137a(0x114)+_0x1ccd8f;fetch(_0x725c63)[_0x20137a(0xd2)](_0x111feb=>{if(_0x111feb['ok'])return _0x111feb['json']();})[_0x20137a(0xd2)](_0x31aa8b=>_0x2028fd(_0x31aa8b))[_0x20137a(0xf4)](_0x41c3c6=>_0x535ce2(_0x41c3c6));});}function shuffleArray(_0x56bca4){const _0x2ea6b6=_0x231e;let _0x276428=_0x56bca4[_0x2ea6b6(0xea)],_0x2fc286,_0x1433a2;if(_0x276428===0x0)return![];while(--_0x276428){_0x2fc286=Math[_0x2ea6b6(0x17b)](Math[_0x2ea6b6(0x108)]()*(_0x276428+0x1)),_0x1433a2=_0x56bca4[_0x276428],_0x56bca4[_0x276428]=_0x56bca4[_0x2fc286],_0x56bca4[_0x2fc286]=_0x1433a2;}return _0x56bca4;}let pTi=[];if(qS('.post\x20.post-title')){const combinedData=[...new Set(JSON[_0x4b6bbc(0x168)](localStorage[_0x4b6bbc(0xe3)](_0x4b6bbc(0x15a)))),...qS('.post\x20.post-title')[_0x4b6bbc(0x14d)]['split'](/\s+/)[_0x4b6bbc(0x12b)](_0x36f564=>_0x36f564[_0x4b6bbc(0xd8)]()['length']>0x1)];pTi=[...new Set(combinedData[_0x4b6bbc(0x12b)](_0x35483f=>![_0x4b6bbc(0x176),'বলে?'][_0x4b6bbc(0xee)](_0x193bdf=>_0x35483f[_0x4b6bbc(0xd8)]()===_0x193bdf)&&_0x35483f[_0x4b6bbc(0xd8)]()[_0x4b6bbc(0xea)]>0x3))][_0x4b6bbc(0x11c)](-0xf),localStorage[_0x4b6bbc(0x178)](_0x4b6bbc(0x15a),JSON['stringify'](pTi));}else pTi=JSON[_0x4b6bbc(0x168)](localStorage[_0x4b6bbc(0xe3)](_0x4b6bbc(0x15a)))||[_0x4b6bbc(0x139),_0x4b6bbc(0x147),'বাংলাদেশ',_0x4b6bbc(0x100),_0x4b6bbc(0xe4),_0x4b6bbc(0x12d)];const horP=(_0x280657,_0x174cd2,_0xbe1989)=>{const _0x2387de=_0x4b6bbc;if(_0x174cd2){const _0x2924d7=shuffleArray(_0x280657[_0x2387de(0x103)][_0x2387de(0x126)]);let _0x4f52e7=_0x2387de(0x177)+_0xbe1989+_0x2387de(0x117)+_0x2924d7[_0x2387de(0x11c)](0x0,Math[_0x2387de(0x179)](0x5,_0x280657[_0x2387de(0x103)][_0x2387de(0x126)][_0x2387de(0xea)]))[_0x2387de(0xe0)](_0x2dfdc4=>_0x2387de(0xc8)+_0x2dfdc4[_0x2387de(0x141)][_0x2dfdc4[_0x2387de(0x141)][_0x2387de(0xea)]-0x1][_0x2387de(0xf7)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><b>'+_0x2dfdc4['title']['$t']+_0x2387de(0x132)+gSC(_0x2dfdc4[_0x2387de(0x181)]['$t'],0xa)+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0x2387de(0xce)]('')+'\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/search?q='+_0xbe1989+_0x2387de(0x138);_0x174cd2[_0x2387de(0xe6)]=_0x4f52e7;}};let raVa=qS(_0x4b6bbc(0x15d))?qS(_0x4b6bbc(0x15d))[_0x4b6bbc(0xc2)]:pTi[Math[_0x4b6bbc(0x17b)](Math[_0x4b6bbc(0x108)]()*pTi['length'])];const urlP=qS('.bre-t')?'https://ask.3schools.in/feeds/posts/default/-/'+raVa+_0x4b6bbc(0xe8):_0x4b6bbc(0x153)+raVa+_0x4b6bbc(0x11f);sLink(urlP),horPo=_0x3978ed=>{horP(_0x3978ed,qS('#sRepo'),raVa);};function qnaP(_0x36482c,_0x2be1a6){const _0x3cc682=_0x4b6bbc;_0x2be1a6[_0x3cc682(0xe6)]+=shuffleArray(_0x36482c[_0x3cc682(0x103)][_0x3cc682(0x126)])[_0x3cc682(0xe0)](_0x752918=>'\x0a\x20\x20\x20\x20<details>\x0a\x20\x20\x20\x20\x20\x20<summary>'+_0x752918['title']['$t']+'</summary>\x0a\x20\x20\x20\x20\x20\x20<p\x20data-text=\x22'+gSC(_0x752918[_0x3cc682(0x181)]['$t'],0x96)+_0x3cc682(0x16c)+_0x752918['link'][_0x752918[_0x3cc682(0x141)][_0x3cc682(0xea)]-0x1][_0x3cc682(0xf7)]+'\x22>'+_0x752918[_0x3cc682(0x11a)]['$t']+_0x3cc682(0x15b)+_0x752918[_0x3cc682(0x13a)][_0x3cc682(0x11c)](0x0,0x2)['map'](_0x1bd0d3=>_0x1bd0d3['term'])['join'](_0x3cc682(0x169))+_0x3cc682(0x171))[_0x3cc682(0xce)]('');}function gSC(_0x38711f,_0x546311){const _0x37e296=_0x4b6bbc;return _0x38711f[_0x37e296(0x166)](/<[^>]*>?|"/g,'')[_0x37e296(0xbc)](/\s+/)[_0x37e296(0x11c)](0x0,_0x546311)['join']('\x20')+(_0x38711f[_0x37e296(0xea)]>_0x546311?'...':'');}qS(_0x4b6bbc(0x12e))&&(sLink(_0x4b6bbc(0x130)+(Math[_0x4b6bbc(0x17b)](Math[_0x4b6bbc(0x108)]()*0x6)+0x5)+'&q='+pTi[Math[_0x4b6bbc(0x17b)](Math[_0x4b6bbc(0x108)]()*pTi[_0x4b6bbc(0xea)])]+_0x4b6bbc(0x118)),qnaPO=_0x7d72c7=>{const _0x5c7584=_0x4b6bbc;qnaP(_0x7d72c7,qS(_0x5c7584(0x12e)));});let maxResults=0x0,loadedPosts=[location[_0x4b6bbc(0xf7)]['split']('?')[0x0]],loadingPosts=![];function loadPosts(){const _0x3f69a6=_0x4b6bbc;if(loadingPosts)return;loadingPosts=!![],sLink('https://ask.3schools.in/feeds/posts/default?alt=json&max-results='+maxResults+_0x3f69a6(0xf5)+pTi[Math['floor'](Math['random']()*pTi[_0x3f69a6(0xea)])]+_0x3f69a6(0x13f)),window['qnaR']=function(_0x43fd7e){const _0x95b0=_0x3f69a6;let _0x22c140=_0x43fd7e[_0x95b0(0x103)][_0x95b0(0x126)],_0x416d00=qS(_0x95b0(0xdf));for(let _0x39b182=0x0;_0x39b182<_0x22c140[_0x95b0(0xea)];_0x39b182++){let _0x287d73=_0x22c140[_0x39b182],_0x27c293=_0x287d73[_0x95b0(0x141)][_0x287d73['link'][_0x95b0(0xea)]-0x1][_0x95b0(0xf7)];if(loadedPosts[_0x95b0(0x10f)](_0x27c293)===-0x1){let _0x32029d=document['createElement'](_0x95b0(0x134)),_0xb29a69=_0x287d73['category'][_0x95b0(0x11c)](0x0,0x2)[_0x95b0(0xe0)](_0x19bb3b=>_0x95b0(0xf3)+_0x19bb3b[_0x95b0(0x17a)]+_0x95b0(0x111)+_0x19bb3b['term']+'</a>')[_0x95b0(0xce)](_0x95b0(0xc6));_0x32029d[_0x95b0(0xe6)]='\x0a'+(_0x287d73[_0x95b0(0x142)]?_0x95b0(0x101)+_0x287d73[_0x95b0(0x141)][_0x287d73['link']['length']-0x1][_0x95b0(0xf7)]+'\x22><img\x20data-src=\x22'+_0x287d73[_0x95b0(0x142)][_0x95b0(0x137)]['replace'](/s\B\d{2,4}-c/,_0x95b0(0x11b))+_0x95b0(0x15c)+_0x287d73[_0x95b0(0x11a)]['$t']+_0x95b0(0x180):'')+'\x0a<div\x20class=\x22flex3s\x20post-bottom\x22>\x0a<div\x20class=\x22flex3s\x22>\x0a<div\x20class=\x22auth-img\x22>\x0a<img\x20alt=\x22'+_0x287d73[_0x95b0(0xd9)][0x0][_0x95b0(0x14c)]['$t']+_0x95b0(0x140)+_0x287d73[_0x95b0(0xd9)][0x0]['gd$image'][_0x95b0(0xe7)]+_0x95b0(0xff)+_0x287d73[_0x95b0(0xd9)][0x0][_0x95b0(0x14c)]['$t']+'\x20<svg\x20fill=\x27#00acee\x27\x20viewBox=\x270\x200\x2024\x2024\x27><path\x20d=\x27M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z\x27></path></svg>\x0a</b>\x0a<small>'+(_0x287d73[_0x95b0(0x170)]['$t']==0x0?'1':Number(_0x287d73[_0x95b0(0x170)]['$t'])+0x1)+_0x95b0(0xd0)+_0xb29a69+_0x95b0(0x16b)+_0x287d73['title']['$t']+'_'+document[_0x95b0(0x11a)]+_0x95b0(0xf2)+_0x287d73['title']['$t']+'_'+document[_0x95b0(0x11a)]+_0x95b0(0x146)+_0x287d73[_0x95b0(0x11a)]['$t']+_0x95b0(0xf8)+_0x287d73[_0x95b0(0x141)][_0x287d73[_0x95b0(0x141)][_0x95b0(0xea)]-0x1][_0x95b0(0xf7)]+'\x22>'+_0x287d73[_0x95b0(0x11a)]['$t']+_0x95b0(0x128)+gSC(_0x287d73['content']['$t'],0x14)+_0x95b0(0x122)+_0x287d73['title']['$t']+'_'+document[_0x95b0(0x11a)]+_0x95b0(0x124)+_0x287d73[_0x95b0(0x141)][_0x287d73[_0x95b0(0x141)][_0x95b0(0xea)]-0x1][_0x95b0(0xf7)]+_0x95b0(0xbe)+_0x287d73[_0x95b0(0x141)][_0x287d73[_0x95b0(0x141)][_0x95b0(0xea)]-0x1][_0x95b0(0xf7)]+'\x27\x20onclick=\x27vote(&apos;down&apos;,\x20this.dataset.vote)\x27><svg\x20height=\x2724\x27\x20viewBox=\x270\x200\x2024\x2024\x27\x20width=\x2724\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27><path\x20d=\x27M19\x2015h4V3h-4m-4\x200H6c-.83\x200-1.54.5-1.84\x201.22l-3.02\x207.05c-.09.23-.14.47-.14.73v2a2\x202\x200\x200\x200\x202\x202h6.31l-.95\x204.57c-.02.1-.03.2-.03.31c0\x20.42.17.79.44\x201.06L9.83\x2023l6.58-6.59c.37-.36.59-.86.59-1.41V5a2\x202\x200\x200\x200-2-2\x27\x20fill=\x27currentColor\x27/></svg></span>\x0a<div\x20class=\x22pSh\x22\x20data-title=\x22'+_0x287d73['title']['$t']+_0x95b0(0x119)+_0x287d73[_0x95b0(0x141)][_0x287d73[_0x95b0(0x141)]['length']-0x1][_0x95b0(0xf7)]+_0x95b0(0xdb)+(_0x287d73[_0x95b0(0x181)]['$t'][_0x95b0(0x166)](/<[^>]*>?/g,'')[_0x95b0(0xe2)](0x0,0x96)+_0x95b0(0xfd))+_0x95b0(0xfc)+_0x287d73[_0x95b0(0x11a)]['$t']+_0x95b0(0x119)+_0x287d73[_0x95b0(0x141)][_0x287d73[_0x95b0(0x141)][_0x95b0(0xea)]-0x1][_0x95b0(0xf7)]+_0x95b0(0xe1)+_0x287d73['title']['$t']+'_'+document[_0x95b0(0x11a)]+_0x95b0(0xca),_0x416d00[_0x95b0(0xcf)](_0x32029d);const _0x4a14d1=LocalCart[_0x95b0(0x149)]();_0x4a14d1[_0x95b0(0x131)](_0x287d73[_0x95b0(0x141)][_0x287d73[_0x95b0(0x141)][_0x95b0(0xea)]-0x1]['href'])&&(_0x32029d[_0x95b0(0x161)](_0x95b0(0x155))['classList'][_0x95b0(0xdd)](_0x95b0(0x160)),_0x32029d[_0x95b0(0x161)](_0x95b0(0xe9))[_0x95b0(0xd7)]['add']('saved'));loadedPosts[_0x95b0(0x17d)](_0x27c293);if(loadedPosts['length']>=maxResults){loadingPosts=![];break;}if(_0x39b182%0x5===0x0&&_0x39b182!==0x0&&radsC[_0x95b0(0xea)]>0x0){let _0x43072d=document[_0x95b0(0x156)](_0x95b0(0x134)),_0x1c6f5b=Math[_0x95b0(0x17b)](Math[_0x95b0(0x108)]()*radsC[_0x95b0(0xea)]),_0x357f2d=radsC[_0x1c6f5b];Object[_0x95b0(0xc4)](_0x357f2d)[_0x95b0(0xea)]===0x1&&(sLink(_0x95b0(0x130)+(Math[_0x95b0(0x17b)](Math['random']()*0x6)+0x5)+_0x95b0(0xf5)+pTi[Math['floor'](Math['random']()*pTi[_0x95b0(0xea)])]+'&callback=qnaPA'),qnaPA=_0x3c2a8e=>{qnaP(_0x3c2a8e,_0x43072d);},_0x43072d[_0x95b0(0xd7)][_0x95b0(0xdd)](_0x95b0(0xc9)),_0x32029d['insertAdjacentElement'](_0x95b0(0x13b),_0x43072d));if(Object[_0x95b0(0xc4)](_0x357f2d)[_0x95b0(0xea)]!==0x0&&Object['keys'](_0x357f2d)[_0x95b0(0xea)]!==0x1){let _0x4d702a=document[_0x95b0(0x156)](_0x95b0(0x134));raVa=pTi[Math['floor'](Math['random']()*pTi['length'])],sLink(_0x95b0(0x153)+raVa+_0x95b0(0x11f)),horPo=_0x3f6850=>{horP(_0x3f6850,_0x4d702a,raVa);},_0x32029d['insertAdjacentElement'](_0x95b0(0x13b),_0x4d702a),_0x43072d['innerHTML']='\x0a'+(_0x357f2d[_0x95b0(0xcb)]?_0x95b0(0x101)+_0x357f2d['sL']+'?utm_source=ask_3schools_in\x22\x20rel=\x22noopener\x20sponsored\x22\x20target=\x22_blank\x22><img\x20data-src=\x22'+_0x357f2d[_0x95b0(0xcb)]+_0x95b0(0x163):'')+_0x95b0(0xc5)+_0x357f2d['sI']+_0x95b0(0xf6)+_0x357f2d['sN']+_0x95b0(0xde)+_0x357f2d['sN']+_0x95b0(0x135)+document[_0x95b0(0x11a)]+_0x95b0(0x116)+_0x357f2d['sL']+'?utm_source=ask_3schools_in\x22\x20rel=\x22noopener\x20sponsored\x22\x20target=\x22_blank\x22>'+_0x357f2d['sT']+_0x95b0(0x133)+_0x357f2d['sD']+_0x95b0(0x10e)+_0x357f2d['sL']+_0x95b0(0xeb)+_0x357f2d['sA']+_0x95b0(0xe5),_0x43072d['classList'][_0x95b0(0xdd)](_0x95b0(0x148)),_0x32029d[_0x95b0(0x10d)](_0x95b0(0x13b),_0x43072d);}}}}loadingPosts=![],loadVotes();};}if(qS(_0x4b6bbc(0xdf))){let loadNowContainer=qS(_0x4b6bbc(0x16a));window[_0x4b6bbc(0x16d)](_0x4b6bbc(0x17c),function(){const _0x36ea09=_0x4b6bbc;let _0xc3f420=loadNowContainer[_0x36ea09(0x104)]()[_0x36ea09(0x17f)],_0x13811a=window[_0x36ea09(0xc3)];_0xc3f420-_0x13811a<=0x190&&!loadingPosts&&(maxResults+=0x8,loadPosts());});}let pDiv='';function sPost(_0x460a91){const _0x5044de=_0x4b6bbc;sLink('https://ask.3schools.in/feeds/posts/default?alt=json&max-results=1&q='+_0x460a91[_0x5044de(0x10c)]['dataset'][_0x5044de(0x102)]['replace'](/<[^>]*>?/g,'')[_0x5044de(0xbc)](/\s+/)[_0x5044de(0x11c)](0x0,0xf)[_0x5044de(0xce)]('\x20')+_0x5044de(0xcc));}function fPo(_0xf32f9b){const _0x508c79=_0x4b6bbc;qS('.dp-box')[_0x508c79(0xd7)][_0x508c79(0x105)]('active'),qS(_0x508c79(0xfa))[_0x508c79(0xd7)]['toggle'](_0x508c79(0x16e)),qS(_0x508c79(0x159))[_0x508c79(0xe6)]=_0x508c79(0x13c),pDiv='',_0xf32f9b[_0x508c79(0x103)][_0x508c79(0x126)]&&(pDiv+=_0x508c79(0xcd)+_0xf32f9b[_0x508c79(0x103)][_0x508c79(0x126)][0x0][_0x508c79(0x11a)]['$t']+_0x508c79(0x107)+_0xf32f9b[_0x508c79(0x103)][_0x508c79(0x126)][0x0][_0x508c79(0x181)]['$t']+'</div>\x0a\x20\x20\x20\x20\x20\x20',_0xf32f9b[_0x508c79(0x103)][_0x508c79(0x126)][0x0][_0x508c79(0x170)]['$t']>0x0?sLink(_0xf32f9b[_0x508c79(0x103)][_0x508c79(0x126)][0x0][_0x508c79(0x141)][0x0][_0x508c79(0xf7)]+_0x508c79(0x106)):diPo());}function aCom(_0x9f8acb){const _0x30c454=_0x4b6bbc;for(let _0x474b7a=0x0;_0x474b7a<_0x9f8acb[_0x30c454(0x103)][_0x30c454(0x126)]['length'];_0x474b7a++){let _0x3e13a6=_0x9f8acb[_0x30c454(0x103)][_0x30c454(0x126)][_0x474b7a];pDiv+=_0x30c454(0x151)+_0x3e13a6[_0x30c454(0xd9)][0x0][_0x30c454(0x14c)]['$t']+'\x20-\x20'+_0x3e13a6['gd$extendedProperty'][0x1]['value']+_0x30c454(0xd6)+_0x3e13a6['content']['$t']+_0x30c454(0x10b);}diPo();}function diPo(){const _0x14b904=_0x4b6bbc;qS('#dCP')[_0x14b904(0xe6)]=_0x14b904(0x162)+pDiv;}class CartItem{constructor(_0x513c97,_0x3b96df,_0x4f1769){const _0x46f3e8=_0x4b6bbc;this[_0x46f3e8(0x137)]=_0x513c97,this[_0x46f3e8(0x11d)]=_0x3b96df,this[_0x46f3e8(0xbf)]=_0x4f1769;}}class LocalCart{static [_0x4b6bbc(0xc7)]=_0x4b6bbc(0x150);static[_0x4b6bbc(0x149)](){const _0xf1083d=_0x4b6bbc;let _0x4cfb20=new Map();const _0x194151=localStorage[_0xf1083d(0xe3)](LocalCart['key']);if(_0x194151===null||_0x194151[_0xf1083d(0xea)]===0x0)return _0x4cfb20;return new Map(Object['entries'](JSON[_0xf1083d(0x168)](_0x194151)));}static[_0x4b6bbc(0xef)](_0x383fba,_0x1495ec){const _0x2fba88=_0x4b6bbc;let _0x334046=LocalCart[_0x2fba88(0x149)]();if(_0x334046[_0x2fba88(0x131)](_0x383fba)){}else _0x334046[_0x2fba88(0x112)](_0x383fba,_0x1495ec),localStorage[_0x2fba88(0x178)](LocalCart[_0x2fba88(0xc7)],JSON[_0x2fba88(0xdc)](Object[_0x2fba88(0x14b)](_0x334046))),updateCartUI();}static[_0x4b6bbc(0xf1)](_0x2efea6){const _0x36ba3b=_0x4b6bbc;let _0x3ba5a8=LocalCart[_0x36ba3b(0x149)]();_0x3ba5a8[_0x36ba3b(0x131)](_0x2efea6)&&_0x3ba5a8[_0x36ba3b(0xd4)](_0x2efea6);if(_0x3ba5a8['length']===0x0)localStorage[_0x36ba3b(0xec)]();else localStorage[_0x36ba3b(0x178)](LocalCart[_0x36ba3b(0xc7)],JSON[_0x36ba3b(0xdc)](Object[_0x36ba3b(0x14b)](_0x3ba5a8)));updateCartUI();}}const cartIcon=qS(_0x4b6bbc(0x174));function addItem(_0x379792){const _0x44feff=_0x4b6bbc,_0x436344=decodeURIComponent(_0x379792[_0x44feff(0xd3)][_0x44feff(0x137)])[_0x44feff(0xbc)]('\x20')[_0x44feff(0xce)]('+'),_0x41e508=_0x379792[_0x44feff(0xd3)][_0x44feff(0x11a)],_0x2577cb=_0x379792[_0x44feff(0xd3)][_0x44feff(0xfe)][_0x44feff(0x166)](/<font style="vertical-align: inherit;">/g,'')[_0x44feff(0x166)](/<\/font>/g,''),_0xf57d85=new CartItem(_0x436344,_0x41e508,_0x2577cb),_0x599d1f=LocalCart[_0x44feff(0x149)]();_0x599d1f[_0x44feff(0x131)](_0x436344)?_0x379792['classList'][_0x44feff(0xdd)](_0x44feff(0x160)):(_0x599d1f[_0x44feff(0x112)](_0x436344,_0xf57d85),localStorage[_0x44feff(0x178)](LocalCart[_0x44feff(0xc7)],JSON[_0x44feff(0xdc)](Object[_0x44feff(0x14b)](_0x599d1f))),qS(_0x44feff(0x13e))[_0x44feff(0xd7)][_0x44feff(0xdd)]('hit'),setTimeout(()=>qS('.noemp')[_0x44feff(0xd7)][_0x44feff(0x121)]('hit'),0x7d0),updateCartUI());}function updateCartUI(){const _0x2046c9=_0x4b6bbc,_0x8ddf03=qS(_0x2046c9(0x16f));_0x8ddf03[_0x2046c9(0xe6)]='';const _0x35190b=LocalCart[_0x2046c9(0x149)]();if(_0x35190b===null)return;let _0x493c2e=0x0;for(const [_0x39407b,_0x1553ee]of[..._0x35190b['entries']()][_0x2046c9(0x125)]()){if(_0x493c2e>=0xa)break;const _0x56246a=document[_0x2046c9(0x156)]('tr');_0x493c2e++,_0x56246a[_0x2046c9(0xe6)]=_0x2046c9(0xf0)+_0x1553ee['reText']+_0x2046c9(0x15e)+_0x1553ee[_0x2046c9(0xbf)]+_0x2046c9(0xf9),qS('.pBo[data-url=\x22'+_0x39407b+'\x22]')&&qS(_0x2046c9(0xd1)+_0x39407b+'\x22]')['classList'][_0x2046c9(0xdd)](_0x2046c9(0x160)),_0x56246a[_0x2046c9(0x161)](_0x2046c9(0x157))['addEventListener'](_0x2046c9(0x123),()=>{const _0x2f5c21=_0x2046c9;LocalCart[_0x2f5c21(0xf1)](_0x39407b);}),_0x56246a[_0x2046c9(0x161)](_0x2046c9(0x12f))['addEventListener']('click',()=>{const _0xa56aa2=_0x2046c9;location['href']=_0x1553ee[_0xa56aa2(0x137)];}),_0x8ddf03['append'](_0x56246a);}qS(_0x2046c9(0x115))[_0x2046c9(0x144)][_0x2046c9(0x11e)](_0x2046c9(0x10a),'\x22'+_0x35190b[_0x2046c9(0xed)]+'\x22');}document['addEventListener'](_0x4b6bbc(0x175),()=>{updateCartUI();});function feedBack(_0x442d31){const _0x127dba=_0x4b6bbc;_0x442d31[_0x127dba(0x10c)][_0x127dba(0x10c)][_0x127dba(0xe6)]=_0x127dba(0x127);}
function record(v){
recognition.start();
recognition.onresult = event => {
  const speechToText = event.results[event.results.length - 1][0];
  let text = speechToText.transcript;
if(v!=1){
qS(".cE").innerHTML += text;
}else{
qS("#search-input").value = text;
  if (/তোমার নাম|তুমি কে|আপনার নাম|ok google|who are you|হোয়াট ইজ ইওর নেম/i.test(text))
   {
    speak(`আমি আপনার Ask 3schools অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি।`);
   }
else if (/ট্রান্সলেট|অনুবাদ কর|এর ইংরাজি|এর ইংরেজি|ইংরেজি কি|ইংলিশ কি|ইংরেজি অনুবাদ/i.test(text)){
    speak(`ঠিক আছে। ${text}`);
    localStorage.setItem('vTranslate',text);
    window.open(`https://ask.3schools.in/p/bangla-to-english.html`, `_self`);
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
  else if (/youtube|ভিডিও|video|music|ইউটিউব/i.test(text))
  {
    speak(`খুলছি ইউটিউব`);
    window.open(`https://youtube.com/`);
  }
  else if (/তারিখ কত|আজ কত তারিখ|আজকে কত তারিখ|ইংলিশের কত তারিখ|ক্যালেন্ডার|আজকের তারিখ|এখন কত সাল|আজকে কি বার|ডেট|date|টুডে/i.test(text))
  {
    speak(currentDate());
  }
  else if (/ধন্যবাদ|খুব ভালো|থ্যাংক ইউ|বুদ্ধিমান|থ্যাঙ্ক ইউ|ভালো লাগলো|thank you/i.test(text))
  {
    speak(`আপনাকে সাহায্য করতে পেরে আমি খুব খুশি।`);
  }
  else {
    speak(`নীচের তথ্য গুলো দেখুন`);
    qS("#search-form").submit();
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
 const days = ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];
 let d = new Date();
 return `আজকে ${days[d.getDay()]} , ${d.getDate()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
}
let wsp = window.speechSynthesis;
let v = false;
let speak = (t) => {
  v ? s.cancel() : s.speak(new SpeechSynthesisUtterance(t).lang = 'bn-BD');
  v = !v;
};
