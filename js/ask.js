/*
Ask 3schools Main Js
*Copyright www.3schools.in
*Licensed code (no open source code)
*V10.6
*Last updated 20 Jan 2024
*/
const _0x56d2b3=_0x35a2;(function(_0x2397db,_0x423ca6){const _0x44273f=_0x35a2,_0x2ccc57=_0x2397db();while(!![]){try{const _0x29a93f=-parseInt(_0x44273f(0x12c))/0x1*(parseInt(_0x44273f(0xf6))/0x2)+parseInt(_0x44273f(0xaa))/0x3+-parseInt(_0x44273f(0x105))/0x4+-parseInt(_0x44273f(0xd2))/0x5+-parseInt(_0x44273f(0xfc))/0x6*(parseInt(_0x44273f(0x116))/0x7)+parseInt(_0x44273f(0xe5))/0x8+-parseInt(_0x44273f(0xc4))/0x9*(-parseInt(_0x44273f(0xbd))/0xa);if(_0x29a93f===_0x423ca6)break;else _0x2ccc57['push'](_0x2ccc57['shift']());}catch(_0x32d15d){_0x2ccc57['push'](_0x2ccc57['shift']());}}}(_0xa0f7,0x23623));function qS(_0x947e49){const _0x2f5ca4=(function(){let _0x2fb138=!![];return function(_0x32d7bd,_0x443822){const _0x59d80e=_0x2fb138?function(){const _0xe9ae98=_0x35a2;if(_0x443822){const _0x19f58a=_0x443822[_0xe9ae98(0xd1)](_0x32d7bd,arguments);return _0x443822=null,_0x19f58a;}}:function(){};return _0x2fb138=![],_0x59d80e;};}()),_0x15ba8e=_0x2f5ca4(this,function(){const _0x32e2d0=_0x35a2;return _0x15ba8e[_0x32e2d0(0xc8)]()[_0x32e2d0(0xca)]('(((.+)+)+)+$')[_0x32e2d0(0xc8)]()[_0x32e2d0(0xa9)](_0x15ba8e)[_0x32e2d0(0xca)]('(((.+)+)+)+$');});_0x15ba8e();const _0x5e9cac=(function(){let _0x5c9178=!![];return function(_0x58e6ed,_0x1d97e7){const _0x574dbe=_0x5c9178?function(){const _0xff1a48=_0x35a2;if(_0x1d97e7){const _0x34720d=_0x1d97e7[_0xff1a48(0xd1)](_0x58e6ed,arguments);return _0x1d97e7=null,_0x34720d;}}:function(){};return _0x5c9178=![],_0x574dbe;};}()),_0xdc7e78=_0x5e9cac(this,function(){const _0x450020=_0x35a2,_0xdf0fd=function(){const _0x5edd18=_0x35a2;let _0x49f225;try{_0x49f225=Function(_0x5edd18(0xb6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x260712){_0x49f225=window;}return _0x49f225;},_0x1fd219=_0xdf0fd(),_0x24a424=_0x1fd219[_0x450020(0xa4)]=_0x1fd219['console']||{},_0x4b0541=['log',_0x450020(0xe9),_0x450020(0x8a),_0x450020(0xdf),'exception',_0x450020(0x99),'trace'];for(let _0x16a557=0x0;_0x16a557<_0x4b0541[_0x450020(0xdc)];_0x16a557++){const _0x1c76a8=_0x5e9cac['constructor']['prototype'][_0x450020(0xb8)](_0x5e9cac),_0x1df780=_0x4b0541[_0x16a557],_0x4f2634=_0x24a424[_0x1df780]||_0x1c76a8;_0x1c76a8['__proto__']=_0x5e9cac[_0x450020(0xb8)](_0x5e9cac),_0x1c76a8[_0x450020(0xc8)]=_0x4f2634['toString'][_0x450020(0xb8)](_0x4f2634),_0x24a424[_0x1df780]=_0x1c76a8;}});return _0xdc7e78(),document['querySelector'](_0x947e49);}function sLink(_0x5808fd){const _0x1de306=_0x35a2;let _0x47243d=document[_0x1de306(0x122)](_0x1de306(0xfd));_0x47243d['src']=_0x5808fd,document[_0x1de306(0x9d)]['appendChild'](_0x47243d),document[_0x1de306(0x9d)][_0x1de306(0xdd)](_0x47243d);}async function loadVotes(){const _0x155104=_0x35a2,_0x37f22b=document[_0x155104(0xe8)](_0x155104(0x121));for(const _0x5f3db3 of _0x37f22b){const _0x8636e5=_0x5f3db3[_0x155104(0xcd)][_0x155104(0xf7)],_0x16b43c=_0x5f3db3[_0x155104(0xcd)][_0x155104(0x126)];await loadVote(_0x8636e5,_0x16b43c,_0x5f3db3);}}async function loadVote(_0xe87c18,_0xb030f9,_0x26c9ad){try{const _0x4db9cf=await getVoteCounts(_0xe87c18);updateUI(_0xe87c18,_0xb030f9,_0x4db9cf,_0x26c9ad);}catch(_0x4ec9e3){console['error']('Error:',_0x4ec9e3);}}function updateUI(_0x5d53ed,_0x44a01c,_0x56b378){const _0x444f9f=_0x35a2,_0x3f69cd=document[_0x444f9f(0xe8)]('[data-vote=\x22'+_0x5d53ed+'\x22][data-action=\x22'+_0x44a01c+'\x22]');_0x3f69cd[_0x444f9f(0xdc)]>0x0&&_0x3f69cd['forEach'](_0x31d016=>{const _0x2f45d5=_0x444f9f;if(_0x44a01c==='up')_0x31d016[_0x2f45d5(0xa7)]='<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M23\x2010a2\x202\x200\x200\x200-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17\x201L7.59\x207.58C7.22\x207.95\x207\x208.45\x207\x209v10a2\x202\x200\x200\x200\x202\x202h9c.83\x200\x201.54-.5\x201.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1\x2021h4V9H1z\x22/></svg>'+_0x56b378[_0x2f45d5(0x12a)],_0x31d016[_0x2f45d5(0xa6)][_0x2f45d5(0x124)]('d');else _0x44a01c===_0x2f45d5(0xc5)&&(_0x31d016[_0x2f45d5(0xa7)]=_0x2f45d5(0x13f)+_0x56b378[_0x2f45d5(0x91)],_0x31d016['classList'][_0x2f45d5(0x124)]('d'));});}async function vote(_0x855aa2,_0x52365f){const _0x3d2d5f=_0x35a2;if(!hasVoted(_0x52365f)){markVoted(_0x52365f);const _0x3eff2c=updateLocalUI(_0x52365f,_0x855aa2);await updateGoogleSheet(_0x52365f,_0x855aa2);const _0x2fa83a=await getVoteCounts(_0x52365f);}else alert(_0x3d2d5f(0xba));}function _0x35a2(_0x8c748f,_0x5eb0a8){const _0xc582a5=_0xa0f7();return _0x35a2=function(_0x2f0c12,_0x365ec4){_0x2f0c12=_0x2f0c12-0x73;let _0x4aeec1=_0xc582a5[_0x2f0c12];return _0x4aeec1;},_0x35a2(_0x8c748f,_0x5eb0a8);}function updateLocalUI(_0xb91e65,_0x39ecf9){const _0x2d01c1=_0x35a2,_0x1d08e8=document[_0x2d01c1(0xe8)]('[data-vote=\x22'+_0xb91e65+'\x22][data-action=\x22'+_0x39ecf9+'\x22]'),_0x33ee1c={'upvotes':0x0,'downvotes':0x0};return _0x1d08e8[_0x2d01c1(0xdc)]>0x0&&_0x1d08e8[_0x2d01c1(0x11f)](_0x5eda48=>{const _0x17e04a=_0x2d01c1;if(_0x39ecf9==='up')_0x33ee1c[_0x17e04a(0x12a)]=parseInt(_0x5eda48[_0x17e04a(0x130)])+0x1,_0x5eda48[_0x17e04a(0xa7)]=_0x17e04a(0xb5)+_0x33ee1c[_0x17e04a(0x12a)];else _0x39ecf9===_0x17e04a(0xc5)&&(_0x33ee1c[_0x17e04a(0x91)]=parseInt(_0x5eda48[_0x17e04a(0x130)])+0x1,_0x5eda48[_0x17e04a(0xa7)]=_0x17e04a(0x13f)+_0x33ee1c[_0x17e04a(0x91)]);}),_0x33ee1c;}function hasVoted(_0x754efc){const _0x330935=_0x35a2;return localStorage[_0x330935(0x9b)](_0x754efc)===_0x330935(0xed);}function markVoted(_0xda8681){const _0x2307e5=_0x35a2;localStorage[_0x2307e5(0x8e)](_0xda8681,_0x2307e5(0xed));}function updateGoogleSheet(_0x24d9d2,_0x154d76){const _0x43fc2b=_0x35a2,_0x2d56fb=_0x43fc2b(0x120),_0x1b4146=_0x2d56fb+_0x43fc2b(0x83)+_0x154d76+_0x43fc2b(0x136)+_0x24d9d2;fetch(_0x1b4146)[_0x43fc2b(0xbc)](_0x193d77=>{const _0x52b439=_0x43fc2b;if(!_0x193d77['ok'])throw new Error(_0x52b439(0xdb)+_0x193d77[_0x52b439(0x139)]);return _0x193d77[_0x52b439(0xd0)]();});}function getVoteCounts(_0x7a202a){return new Promise((_0x1d0e93,_0x32eb39)=>{const _0x2bd199=_0x35a2,_0x1dbb3e=_0x2bd199(0x120),_0x38965f=_0x1dbb3e+_0x2bd199(0xd6)+_0x7a202a;fetch(_0x38965f)[_0x2bd199(0xbc)](_0x3e4892=>{const _0x5514f6=_0x2bd199;if(_0x3e4892['ok'])return _0x3e4892[_0x5514f6(0xd0)]();})['then'](_0x2cf7a7=>_0x1d0e93(_0x2cf7a7))[_0x2bd199(0xd8)](_0x456126=>_0x32eb39(_0x456126));});}function shuffleArray(_0x2032e3){const _0xac9d2b=_0x35a2;let _0x36a367=_0x2032e3[_0xac9d2b(0xdc)],_0x1eca69,_0x127f59;if(_0x36a367===0x0)return![];while(--_0x36a367){_0x1eca69=Math[_0xac9d2b(0xd9)](Math[_0xac9d2b(0xeb)]()*(_0x36a367+0x1)),_0x127f59=_0x2032e3[_0x36a367],_0x2032e3[_0x36a367]=_0x2032e3[_0x1eca69],_0x2032e3[_0x1eca69]=_0x127f59;}return _0x2032e3;}let pTi=[];if(qS('.post\x20.post-title')){const combinedData=[...new Set(JSON[_0x56d2b3(0x104)](localStorage[_0x56d2b3(0x9b)]('pTi'))),...qS(_0x56d2b3(0xda))[_0x56d2b3(0x130)][_0x56d2b3(0xde)](/\s+/)[_0x56d2b3(0xb2)](_0x238a52=>_0x238a52['trim']()[_0x56d2b3(0xdc)]>0x1)];pTi=[...new Set(combinedData[_0x56d2b3(0xb2)](_0x288282=>!['কাকে',_0x56d2b3(0x8b)][_0x56d2b3(0x117)](_0x11ba18=>_0x288282['trim']()===_0x11ba18)&&_0x288282[_0x56d2b3(0x137)]()[_0x56d2b3(0xdc)]>0x3))][_0x56d2b3(0x9c)](-0xf),localStorage[_0x56d2b3(0x8e)]('pTi',JSON[_0x56d2b3(0x97)](pTi));}else pTi=JSON[_0x56d2b3(0x104)](localStorage[_0x56d2b3(0x9b)](_0x56d2b3(0xae)))||[_0x56d2b3(0x96),_0x56d2b3(0x140),_0x56d2b3(0x111),_0x56d2b3(0x125),_0x56d2b3(0xc9),_0x56d2b3(0x90)];const horP=(_0x57597d,_0xf0323c,_0x3081e5)=>{const _0xa20783=_0x56d2b3;if(_0xf0323c){const _0x48766c=shuffleArray(_0x57597d[_0xa20783(0xf4)][_0xa20783(0x129)]);let _0x3f987f=_0xa20783(0x8d)+_0x3081e5+_0xa20783(0xb7)+_0x48766c[_0xa20783(0x9c)](0x0,Math['min'](0x5,_0x57597d['feed'][_0xa20783(0x129)]['length']))['map'](_0xd6896f=>'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22rpS\x22\x20href=\x22'+_0xd6896f[_0xa20783(0x89)][_0xd6896f[_0xa20783(0x89)]['length']-0x1][_0xa20783(0x100)]+_0xa20783(0xfa)+_0xd6896f[_0xa20783(0xd3)]['$t']+'</b></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>'+gSC(_0xd6896f[_0xa20783(0x138)]['$t'],0xa)+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0xa20783(0x135)]('')+_0xa20783(0xf2)+_0x3081e5+_0xa20783(0xc7);_0xf0323c['innerHTML']=_0x3f987f;}};let raVa=qS(_0x56d2b3(0x133))?qS('.bre-t')[_0x56d2b3(0xee)]:pTi[Math[_0x56d2b3(0xd9)](Math[_0x56d2b3(0xeb)]()*pTi[_0x56d2b3(0xdc)])];const urlP=qS('.bre-t')?_0x56d2b3(0xfe)+raVa+_0x56d2b3(0xa8):'https://ask.3schools.in/feeds/posts/default?alt=json&max-results=145&q='+raVa+_0x56d2b3(0x73);sLink(urlP),horPo=_0x4aa77d=>{const _0x3c81a0=_0x56d2b3;horP(_0x4aa77d,qS(_0x3c81a0(0x109)),raVa);};function qnaP(_0x54951b,_0x399317){const _0x475098=_0x56d2b3;_0x399317[_0x475098(0xa7)]+=shuffleArray(_0x54951b[_0x475098(0xf4)][_0x475098(0x129)])[_0x475098(0xd5)](_0x23384a=>'\x0a\x20\x20\x20\x20<details>\x0a\x20\x20\x20\x20\x20\x20<summary>'+_0x23384a[_0x475098(0xd3)]['$t']+_0x475098(0x115)+gSC(_0x23384a[_0x475098(0x138)]['$t'],0x96)+_0x475098(0xef)+_0x23384a[_0x475098(0x89)][_0x23384a['link'][_0x475098(0xdc)]-0x1]['href']+'\x22>'+_0x23384a[_0x475098(0xd3)]['$t']+_0x475098(0x10b)+_0x23384a['category']['slice'](0x0,0x2)[_0x475098(0xd5)](_0x26ee60=>_0x26ee60[_0x475098(0xea)])['join']('\x20>\x20')+_0x475098(0xb1))[_0x475098(0x135)]('');}function gSC(_0x3c6676,_0x48bd61){const _0xecb917=_0x56d2b3;return _0x3c6676['replace'](/<[^>]*>?|"/g,'')[_0xecb917(0xde)](/\s+/)[_0xecb917(0x9c)](0x0,_0x48bd61)[_0xecb917(0x135)]('\x20')+(_0x3c6676[_0xecb917(0xdc)]>_0x48bd61?_0xecb917(0x11a):'');}qS(_0x56d2b3(0x114))&&(sLink(_0x56d2b3(0xfb)+(Math[_0x56d2b3(0xd9)](Math[_0x56d2b3(0xeb)]()*0x6)+0x5)+'&q='+pTi[Math[_0x56d2b3(0xd9)](Math['random']()*pTi['length'])]+'&callback=qnaPO'),qnaPO=_0x57b26f=>{qnaP(_0x57b26f,qS('#rel-post'));});let maxResults=0x0,loadedPosts=[location[_0x56d2b3(0x100)][_0x56d2b3(0xde)]('?')[0x0]],loadingPosts=![];function loadPosts(){const _0xde901d=_0x56d2b3;if(loadingPosts)return;loadingPosts=!![],sLink(_0xde901d(0xfb)+maxResults+'&q='+pTi[Math[_0xde901d(0xd9)](Math['random']()*pTi[_0xde901d(0xdc)])]+_0xde901d(0xc1)),window[_0xde901d(0x87)]=function(_0x28eb88){const _0x54af6b=_0xde901d;let _0x1a0a2a=_0x28eb88[_0x54af6b(0xf4)][_0x54af6b(0x129)],_0x1067d6=qS(_0x54af6b(0x92));for(let _0x4d1648=0x0;_0x4d1648<_0x1a0a2a['length'];_0x4d1648++){let _0x456958=_0x1a0a2a[_0x4d1648],_0x41b152=_0x456958[_0x54af6b(0x89)][_0x456958['link']['length']-0x1][_0x54af6b(0x100)];if(loadedPosts['indexOf'](_0x41b152)===-0x1){let _0x4b349e=document[_0x54af6b(0x122)]('article'),_0x591290=_0x456958[_0x54af6b(0xe7)][_0x54af6b(0x9c)](0x0,0x2)[_0x54af6b(0xd5)](_0x1831f0=>'<a\x20href=\x22/search/label/'+_0x1831f0['term']+_0x54af6b(0xac)+_0x1831f0[_0x54af6b(0xea)]+_0x54af6b(0x76))[_0x54af6b(0x135)](_0x54af6b(0xa0));_0x4b349e[_0x54af6b(0xa7)]='\x0a'+(_0x456958[_0x54af6b(0xad)]?'<div\x20class=\x22item-thumbnail\x22><a\x20href=\x22'+_0x456958[_0x54af6b(0x89)][_0x456958[_0x54af6b(0x89)][_0x54af6b(0xdc)]-0x1][_0x54af6b(0x100)]+_0x54af6b(0x110)+_0x456958[_0x54af6b(0xad)][_0x54af6b(0xe4)][_0x54af6b(0xe1)](/s\B\d{2,4}-c/,'s1200')+_0x54af6b(0x7c)+_0x456958[_0x54af6b(0xd3)]['$t']+_0x54af6b(0xcb):'')+_0x54af6b(0x11c)+_0x456958[_0x54af6b(0x13a)][0x0][_0x54af6b(0xe6)]['$t']+'\x22\x20class=\x22lazyload\x22\x20data-src=\x22'+_0x456958[_0x54af6b(0x13a)][0x0][_0x54af6b(0x13e)]['src']+_0x54af6b(0x11b)+_0x456958[_0x54af6b(0x13a)][0x0][_0x54af6b(0xe6)]['$t']+_0x54af6b(0x10e)+(_0x456958['thr$total']['$t']==0x0?'1':Number(_0x456958['thr$total']['$t'])+0x1)+_0x54af6b(0x74)+_0x591290+_0x54af6b(0x12e)+_0x456958[_0x54af6b(0xd3)]['$t']+'_'+document['title']+_0x54af6b(0xa3)+_0x456958[_0x54af6b(0xd3)]['$t']+'_'+document[_0x54af6b(0xd3)]+'\x22\x20class=\x22rTitle\x22\x20data-text=\x22'+_0x456958[_0x54af6b(0xd3)]['$t']+_0x54af6b(0xb3)+_0x456958[_0x54af6b(0x89)][_0x456958['link'][_0x54af6b(0xdc)]-0x1][_0x54af6b(0x100)]+'\x22>'+_0x456958[_0x54af6b(0xd3)]['$t']+'</a>\x0a</h2>\x0a<p\x20data-text=\x22'+gSC(_0x456958['content']['$t'],0x14)+_0x54af6b(0xf0)+_0x456958[_0x54af6b(0xd3)]['$t']+'_'+document[_0x54af6b(0xd3)]+_0x54af6b(0xbb)+_0x456958[_0x54af6b(0x89)][_0x456958['link']['length']-0x1]['href']+_0x54af6b(0xc0)+_0x456958[_0x54af6b(0x89)][_0x456958[_0x54af6b(0x89)][_0x54af6b(0xdc)]-0x1][_0x54af6b(0x100)]+_0x54af6b(0x11d)+_0x456958[_0x54af6b(0xd3)]['$t']+_0x54af6b(0xff)+_0x456958[_0x54af6b(0x89)][_0x456958[_0x54af6b(0x89)][_0x54af6b(0xdc)]-0x1][_0x54af6b(0x100)]+_0x54af6b(0x7d)+(_0x456958['content']['$t'][_0x54af6b(0xe1)](/<[^>]*>?/g,'')[_0x54af6b(0xbe)](0x0,0x96)+'...')+_0x54af6b(0xe0)+_0x456958[_0x54af6b(0xd3)]['$t']+'\x22\x20data-url=\x22'+_0x456958[_0x54af6b(0x89)][_0x456958[_0x54af6b(0x89)][_0x54af6b(0xdc)]-0x1][_0x54af6b(0x100)]+_0x54af6b(0x12b)+_0x456958[_0x54af6b(0xd3)]['$t']+'_'+document[_0x54af6b(0xd3)]+_0x54af6b(0xb9),_0x1067d6[_0x54af6b(0x8c)](_0x4b349e);const _0x1aaa7a=LocalCart[_0x54af6b(0x79)]();_0x1aaa7a['has'](_0x456958[_0x54af6b(0x89)][_0x456958[_0x54af6b(0x89)][_0x54af6b(0xdc)]-0x1][_0x54af6b(0x100)])&&(_0x4b349e[_0x54af6b(0xc2)](_0x54af6b(0x12d))['classList'][_0x54af6b(0x81)]('in-cart'),_0x4b349e[_0x54af6b(0xc2)](_0x54af6b(0x88))[_0x54af6b(0xa6)]['add'](_0x54af6b(0x123)));loadedPosts[_0x54af6b(0x101)](_0x41b152);if(loadedPosts['length']>=maxResults){loadingPosts=![];break;}if(_0x4d1648%0x5===0x0&&_0x4d1648!==0x0&&radsC[_0x54af6b(0xdc)]>0x0){let _0x53ff55=document[_0x54af6b(0x122)](_0x54af6b(0xc3)),_0x42a193=Math['floor'](Math[_0x54af6b(0xeb)]()*radsC[_0x54af6b(0xdc)]),_0x1b3de0=radsC[_0x42a193];Object[_0x54af6b(0xcc)](_0x1b3de0)['length']===0x1&&(sLink(_0x54af6b(0xfb)+(Math[_0x54af6b(0xd9)](Math[_0x54af6b(0xeb)]()*0x6)+0x5)+_0x54af6b(0x86)+pTi[Math[_0x54af6b(0xd9)](Math[_0x54af6b(0xeb)]()*pTi['length'])]+_0x54af6b(0xd4)),qnaPA=_0x353d22=>{qnaP(_0x353d22,_0x53ff55);},_0x53ff55[_0x54af6b(0xa6)][_0x54af6b(0x81)](_0x54af6b(0xb4)),_0x4b349e[_0x54af6b(0xf8)]('afterend',_0x53ff55));if(Object[_0x54af6b(0xcc)](_0x1b3de0)[_0x54af6b(0xdc)]!==0x0&&Object[_0x54af6b(0xcc)](_0x1b3de0)[_0x54af6b(0xdc)]!==0x1){let _0x5f3915=document['createElement']('article');raVa=pTi[Math[_0x54af6b(0xd9)](Math[_0x54af6b(0xeb)]()*pTi[_0x54af6b(0xdc)])],sLink('https://ask.3schools.in/feeds/posts/default?alt=json&max-results=145&q='+raVa+_0x54af6b(0x73)),horPo=_0x384b1a=>{horP(_0x384b1a,_0x5f3915,raVa);},_0x4b349e['insertAdjacentElement'](_0x54af6b(0x84),_0x5f3915),_0x53ff55['innerHTML']='\x0a'+(_0x1b3de0['sLI']?_0x54af6b(0x8f)+_0x1b3de0['sL']+_0x54af6b(0xab)+_0x1b3de0[_0x54af6b(0x107)]+_0x54af6b(0x102):'')+'\x0a<div\x20class=\x22flex3s\x20post-bottom\x22>\x0a<div\x20class=\x22flex3s\x22>\x0a<div\x20class=\x22auth-img\x22><img\x20alt=\x22Profile\x20photo\x22\x20class=\x22lazyload\x22\x20data-src=\x22'+_0x1b3de0['sI']+_0x54af6b(0x9a)+_0x1b3de0['sN']+_0x54af6b(0xaf)+_0x1b3de0['sN']+_0x54af6b(0x95)+document[_0x54af6b(0xd3)]+'\x22>❌</div>\x0a</div>\x0a<div\x20class=\x22gradient\x22\x20onclick=\x22window.open(\x27'+_0x1b3de0['sL']+'?utm_source=ask_3schools_in\x27)\x22>\x0a<h2\x20class=\x22post-title\x22>'+_0x1b3de0['sT']+_0x54af6b(0x10d)+_0x1b3de0['sD']+_0x54af6b(0xf5)+_0x1b3de0['sL']+_0x54af6b(0xc0)+_0x1b3de0['sL']+_0x54af6b(0x132),_0x53ff55['classList'][_0x54af6b(0x81)](_0x54af6b(0x131)),_0x4b349e[_0x54af6b(0xf8)](_0x54af6b(0x84),_0x53ff55);}}}}loadingPosts=![],loadVotes();};}if(qS(_0x56d2b3(0x92))){let loadNowContainer=qS(_0x56d2b3(0xce));window[_0x56d2b3(0xa5)]('scroll',function(){const _0x3cb5d9=_0x56d2b3;let _0xa2e9f1=loadNowContainer[_0x3cb5d9(0x82)]()['top'],_0x37813e=window[_0x3cb5d9(0x78)];_0xa2e9f1-_0x37813e<=0x190&&!loadingPosts&&(maxResults+=0x8,loadPosts());});}let pDiv='';function sPost(_0x4b54d8){const _0xd5a43e=_0x56d2b3;sLink('https://ask.3schools.in/feeds/posts/default?alt=json&max-results=1&q='+_0x4b54d8[_0xd5a43e(0x80)][_0xd5a43e(0xcd)][_0xd5a43e(0x93)][_0xd5a43e(0xe1)](/<[^>]*>?/g,'')[_0xd5a43e(0xde)](/\s+/)[_0xd5a43e(0x9c)](0x0,0xf)[_0xd5a43e(0x135)]('\x20')+_0xd5a43e(0x85));}function fPo(_0x3308bb){const _0x2c5d84=_0x56d2b3;qS(_0x2c5d84(0x13b))[_0x2c5d84(0xa6)][_0x2c5d84(0x9f)](_0x2c5d84(0x7a)),qS(_0x2c5d84(0xcf))['classList'][_0x2c5d84(0x9f)]('active'),qS('#dCP')['innerHTML']=_0x2c5d84(0x108),pDiv='',_0x3308bb[_0x2c5d84(0xf4)][_0x2c5d84(0x129)]&&(pDiv+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>'+_0x3308bb[_0x2c5d84(0xf4)]['entry'][0x0][_0x2c5d84(0xd3)]['$t']+_0x2c5d84(0xf9)+_0x3308bb['feed'][_0x2c5d84(0x129)][0x0][_0x2c5d84(0x138)]['$t']+_0x2c5d84(0x9e),_0x3308bb[_0x2c5d84(0xf4)][_0x2c5d84(0x129)][0x0][_0x2c5d84(0xf1)]['$t']>0x0?sLink(_0x3308bb[_0x2c5d84(0xf4)]['entry'][0x0][_0x2c5d84(0x89)][0x0][_0x2c5d84(0x100)]+_0x2c5d84(0xec)):diPo());}function aCom(_0x4337a4){const _0x382d93=_0x56d2b3;for(let _0x21954d=0x0;_0x21954d<_0x4337a4['feed']['entry']['length'];_0x21954d++){let _0x45fc74=_0x4337a4['feed']['entry'][_0x21954d];pDiv+=_0x382d93(0x13d)+_0x45fc74[_0x382d93(0x13a)][0x0]['name']['$t']+_0x382d93(0x12f)+_0x45fc74['gd$extendedProperty'][0x1][_0x382d93(0xc6)]+_0x382d93(0xe3)+_0x45fc74[_0x382d93(0x138)]['$t']+_0x382d93(0xb0);}diPo();}function _0xa0f7(){const _0x4b052e=['.bre-t','trText','join','&uniqueId=','trim','content','status','author','.dp-box','in-cart','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dComment\x22>\x0a\x20\x20\x20\x20\x20\x20\x20<center>','gd$image','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M19\x2015h4V3h-4m-4\x200H6c-.83\x200-1.54.5-1.84\x201.22l-3.02\x207.05c-.09.23-.14.47-.14.73v2a2\x202\x200\x200\x200\x202\x202h6.31l-.95\x204.57c-.02.1-.03.2-.03.31c0\x20.42.17.79.44\x201.06L9.83\x2023l6.58-6.59c.37-.36.59-.86.59-1.41V5a2\x202\x200\x200\x200-2-2\x22/></svg>','ভারত','&callback=horPo','\x20টি\x20উত্তর\x20\x20.\x20','.t-coll','</a>','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record-trans\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22r-lang\x22>A</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22record-line\x22\x20data-text=\x22','innerHeight','getLocalCartItems','active','removeItemFromCart','\x22\x20alt=\x22','\x22\x20onclick=\x22share(this)\x22><svg\x20class=\x22line\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z\x22\x20transform=\x22translate(-83.28571\x20-252.73452)\x22></path><circle\x20class=\x22fill\x22\x20cx=\x2218.48892\x22\x20cy=\x225.49436\x22\x20r=\x223.51099\x22></circle><circle\x20class=\x22fill\x22\x20cx=\x2218.48892\x22\x20cy=\x2218.50564\x22\x20r=\x223.51099\x22></circle><line\x20class=\x22cls-3\x22\x20x1=\x2212.53012\x22\x20x2=\x228.65012\x22\x20y1=\x228.476\x22\x20y2=\x2210.416\x22></line><line\x20class=\x22cls-3\x22\x20x1=\x2212.53012\x22\x20x2=\x228.65012\x22\x20y1=\x2215.496\x22\x20y2=\x2213.556\x22></line></svg>\x20শেয়ার</div>\x0a<div\x20class=\x22pBo\x22\x20data-des=\x22','des','reText','parentElement','add','getBoundingClientRect','?action=','afterend','&callback=fPo','&q=','qnaR','.auth-name','link','info','বলে?','appendChild','<details\x20open=\x22\x22><summary\x20class=\x22post-share\x22><b>সম্পর্কিত\x20:-\x20','setItem','<div\x20class=\x22item-thumbnail\x22\x20onclick=\x22window.open(\x27','রাজধানী','downvotes','.recommend','text',':root','\x20_\x20','পশ্চিমবঙ্গ','stringify','entries','table','\x22></div>\x0a<div\x20class=\x22auth-name\x22><b>','getItem','slice','body','</div>\x0a\x20\x20\x20\x20\x20\x20','toggle','\x20.\x20','\x0a\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record-de\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20d=\x22M13.5\x206.5V7h5v-.5a2.5\x202.5\x200\x200\x200-5\x200Zm-2\x20.5v-.5a4.5\x204.5\x200\x201\x201\x209\x200V7H28a1\x201\x200\x201\x201\x200\x202h-1.508L24.6\x2025.568A5\x205\x200\x200\x201\x2019.63\x2030h-7.26a5\x205\x200\x200\x201-4.97-4.432L5.508\x209H4a1\x201\x200\x200\x201\x200-2h7.5Zm2.5\x206.5a1\x201\x200\x201\x200-2\x200v10a1\x201\x200\x201\x200\x202\x200v-10Zm5-1a1\x201\x200\x200\x200-1\x201v10a1\x201\x200\x201\x200\x202\x200v-10a1\x201\x200\x200\x200-1-1Z\x22\x20/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22record-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22r-lang\x22>Q</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22record-line\x22>','askCollection','\x22\x20onclick=\x22feedBack(this)\x22\x20id=\x22feedback\x22>❌</div>\x0a</div>\x0a<div\x20class=\x22gradient\x22>\x0a<h2\x20class=\x22post-title\x22>\x0a<a\x20data-t=\x22','console','addEventListener','classList','innerHTML','?alt=json&max-results=145&callback=horPo','constructor','390492HipANn','?utm_source=ask_3schools_in\x27)\x22><img\x20data-src=\x22','\x22>#','media$thumbnail','pTi','</b><small>বিজ্ঞাপন</small></div>\x0a</div>\x0a<div\x20onclick=\x22feedBack(this)\x22\x20id=\x22feedback\x22\x20data-t=\x22','\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20','</a></small></p>\x0a\x20\x20\x20\x20</details>','filter','\x22\x20href=\x22','rel-p','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M23\x2010a2\x202\x200\x200\x200-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17\x201L7.59\x207.58C7.22\x207.95\x207\x208.45\x207\x209v10a2\x202\x200\x200\x200\x202\x202h9c.83\x200\x201.54-.5\x201.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1\x2021h4V9H1z\x22/></svg>','return\x20(function()\x20','</b></summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex3s\x20post-share\x20m\x20s\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','bind','\x22\x20onclick=\x22speak(this.parentElement.previousElementSibling.children[0].innerText\x20+\x27\x27+\x20this.parentElement.previousElementSibling.querySelector(\x27.post-des\x27).dataset.text)\x22><svg\x20class=\x22w-6\x20h-6\x22\x20fill=\x22currentColor\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M13.5\x204.06c0-1.336-1.616-2.005-2.56-1.06l-4.5\x204.5H4.508c-1.141\x200-2.318.664-2.66\x201.905A9.76\x209.76\x200\x20001.5\x2012c0\x20.898.121\x201.768.35\x202.595.341\x201.24\x201.518\x201.905\x202.659\x201.905h1.93l4.5\x204.5c.945.945\x202.561.276\x202.561-1.06V4.06zM18.584\x205.106a.75.75\x200\x20011.06\x200c3.808\x203.807\x203.808\x209.98\x200\x2013.788a.75.75\x200\x2011-1.06-1.06\x208.25\x208.25\x200\x20000-11.668.75.75\x200\x20010-1.06z\x22></path><path\x20d=\x22M15.932\x207.757a.75.75\x200\x20011.061\x200\x206\x206\x200\x20010\x208.486.75.75\x200\x2001-1.06-1.061\x204.5\x204.5\x200\x20000-6.364.75.75\x200\x20010-1.06z\x22></path></svg>\x20শুনুন</div>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','আপনি\x20ভোট\x20করেছেন!','\x22\x20class=\x22lMBtn\x22\x20onclick=\x22sPost(this)\x22>..আরও\x20পড়ুন</span></p>\x0a</div>\x0a<div\x20class=\x22flex3s\x20post-share\x20m\x22>\x0a<span\x20class=\x27d\x27\x20data-action=\x27up\x27\x20data-vote=\x27','then','3490450oiaGoy','substring','--after-content','\x27\x20onclick=\x27vote(&apos;up&apos;,\x20this.dataset.vote)\x27><svg\x20height=\x2724\x27\x20viewBox=\x270\x200\x2024\x2024\x27\x20width=\x2724\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27><path\x20d=\x27M23\x2010a2\x202\x200\x200\x200-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17\x201L7.59\x207.58C7.22\x207.95\x207\x208.45\x207\x209v10a2\x202\x200\x200\x200\x202\x202h9c.83\x200\x201.54-.5\x201.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1\x2021h4V9H1z\x27\x20fill=\x27currentColor\x27/></svg></span>\x0a<span\x20class=\x27d\x27\x20data-action=\x27down\x27\x20data-vote=\x27','&callback=qnaR','querySelector','article','9TDzltZ','down','value','\x22\x20style=\x22min-width:40px;display:flex\x22\x20class=\x22flex3s\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22><g\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x221.5\x22><path\x20d=\x22m11\x208.5l3.5\x203.5l-3.5\x203.5\x22/><path\x20d=\x22M12\x2022c5.523\x200\x2010-4.477\x2010-10S17.523\x202\x2012\x202S2\x206.477\x202\x2012s4.477\x2010\x2010\x2010Z\x22/></g></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>','toString','কাকে\x20বলে','search','\x22\x20class=\x22lazyload\x22></a></div>','keys','dataset','#load-now','.dp-cl','json','apply','387105tSMNNE','title','&callback=qnaPA','map','?action=getCounts&uniqueId=','reverse','catch','floor','.post\x20.post-title','HTTP\x20error!\x20Status:\x20','length','removeChild','split','error','\x22\x20data-title=\x22','replace','setProperty','</center><hr>\x0a\x20\x20\x20\x20\x20\x20\x20','url','1767944YpRAmL','name','category','querySelectorAll','warn','term','random','?alt=json&callback=aCom','voted','innerText','\x22><br><small><a\x20href=\x22','\x22\x20class=\x22post-des\x22>\x20\x20<span\x20data-t=\x22','thr$total','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/search?q=','clear','feed','\x22></p>\x20\x0a</div>\x0a<div\x20class=\x22flex3s\x20post-share\x20m\x22>\x0a<span\x20class=\x27d\x27\x20data-action=\x27up\x27\x20data-vote=\x27','459916pvDWPj','vote','insertAdjacentElement','</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><b>','https://ask.3schools.in/feeds/posts/default?alt=json&max-results=','6FaCHKG','script','https://ask.3schools.in/feeds/posts/default/-/','\x22\x20data-url=\x22','href','push','\x22\x20alt=\x22ads\x20via\x203schools\x22\x20class=\x22lazyload\x22></div>','has','parse','591704RzohaN','append','sLI','<center>খুঁজে\x20পাওয়া\x20যায়\x20নি!\x20🕵</center>','#sRepo','.record','<br>https://ask.3schools.in\x20>\x20','.pBo[data-url=\x22','</h2>\x0a<p\x20class=\x22post-des\x22\x20data-text=\x22','\x20<svg\x20fill=\x27#00acee\x27\x20viewBox=\x270\x200\x2024\x2024\x27><path\x20d=\x27M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z\x27></path></svg>\x0a</b>\x0a<small>','<center><p>আপনার\x20ইনপুট\x20এই\x20পৃষ্ঠাটিকে\x20সবার\x20জন্য\x20উন্নত\x20করতে\x20আমাদের\x20সাহায্য\x20করে।</p></center>','\x22><img\x20data-src=\x22','বাংলাদেশ','#dCP','key','#rel-post','</summary>\x0a\x20\x20\x20\x20\x20\x20<p\x20data-text=\x22','699762HzbWZA','some','click','\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20','...','\x22>\x0a</div>\x0a<div\x20class=\x22auth-name\x22>\x0a<b>','\x0a<div\x20class=\x22flex3s\x20post-bottom\x22>\x0a<div\x20class=\x22flex3s\x22>\x0a<div\x20class=\x22auth-img\x22>\x0a<img\x20alt=\x22','\x27\x20onclick=\x27vote(&apos;down&apos;,\x20this.dataset.vote)\x27><svg\x20height=\x2724\x27\x20viewBox=\x270\x200\x2024\x2024\x27\x20width=\x2724\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27><path\x20d=\x27M19\x2015h4V3h-4m-4\x200H6c-.83\x200-1.54.5-1.84\x201.22l-3.02\x207.05c-.09.23-.14.47-.14.73v2a2\x202\x200\x200\x200\x202\x202h6.31l-.95\x204.57c-.02.1-.03.2-.03.31c0\x20.42.17.79.44\x201.06L9.83\x2023l6.58-6.59c.37-.36.59-.86.59-1.41V5a2\x202\x200\x200\x200-2-2\x27\x20fill=\x27currentColor\x27/></svg></span>\x0a<div\x20class=\x22pSh\x22\x20data-title=\x22','fromEntries','forEach','https://script.google.com/macros/s/AKfycbyv_S9CuTzU-STGpxHSez3RqU_nrzEW8SoySEmBdYX9u1MMOc-dVS_PwlG91MUDo3JI/exec','[data-vote].d','createElement','saved','remove','পূর্ণরূপ','action','.noemp','addItemToLocalCart','entry','upvotes','\x22\x20onclick=\x22addItem(this)\x22><svg\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M17\x203H7c-1.1\x200-1.99.9-1.99\x202L5\x2021l7-3l7\x203V5c0-1.1-.9-2-2-2z\x22\x20fill=\x22currentColor\x22></path></svg>\x20সেভ</div>\x0a<div\x20class=\x22pSp\x22\x20data-t=\x22','1gNjFBU','.pBo','\x0a</small>\x0a</div>\x0a</div>\x0a<div\x20data-t=\x22','\x20-\x20','textContent','aDs','\x27\x20onclick=\x27vote(&apos;down&apos;,\x20this.dataset.vote)\x27><svg\x20height=\x2724\x27\x20viewBox=\x270\x200\x2024\x2024\x27\x20width=\x2724\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27><path\x20d=\x27M19\x2015h4V3h-4m-4\x200H6c-.83\x200-1.54.5-1.84\x201.22l-3.02\x207.05c-.09.23-.14.47-.14.73v2a2\x202\x200\x200\x200\x202\x202h6.31l-.95\x204.57c-.02.1-.03.2-.03.31c0\x20.42.17.79.44\x201.06L9.83\x2023l6.58-6.59c.37-.36.59-.86.59-1.41V5a2\x202\x200\x200\x200-2-2\x27\x20fill=\x27currentColor\x27/></svg></span>\x0a<a\x20href=\x22/p/sponsor.html\x22\x20target=\x22_blank\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202zm1\x2015h-2v-6h2v6zm0-8h-2V7h2v2z\x22/></svg>এই\x20বিজ্ঞাপনটি\x20কেন?</a>\x0a<div\x20onclick=\x22speak(this.parentElement.previousElementSibling.innerText\x20+\x27\x27+\x20this.parentElement.previousElementSibling.querySelector(\x27.post-des\x27).dataset.text)\x22><svg\x20fill=\x22currentColor\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M13.5\x204.06c0-1.336-1.616-2.005-2.56-1.06l-4.5\x204.5H4.508c-1.141\x200-2.318.664-2.66\x201.905A9.76\x209.76\x200\x20001.5\x2012c0\x20.898.121\x201.768.35\x202.595.341\x201.24\x201.518\x201.905\x202.659\x201.905h1.93l4.5\x204.5c.945.945\x202.561.276\x202.561-1.06V4.06zM18.584\x205.106a.75.75\x200\x20011.06\x200c3.808\x203.807\x203.808\x209.98\x200\x2013.788a.75.75\x200\x2011-1.06-1.06\x208.25\x208.25\x200\x20000-11.668.75.75\x200\x20010-1.06z\x22></path><path\x20d=\x22M15.932\x207.757a.75.75\x200\x20011.061\x200\x206\x206\x200\x20010\x208.486.75.75\x200\x2001-1.06-1.061\x204.5\x204.5\x200\x20000-6.364.75.75\x200\x20010-1.06z\x22></path></svg>\x20শুনুন</div>\x0a</div>\x0a\x20\x20'];_0xa0f7=function(){return _0x4b052e;};return _0xa0f7();}function diPo(){const _0x25a2f2=_0x56d2b3;qS(_0x25a2f2(0x112))[_0x25a2f2(0xa7)]='<img\x20alt=\x22blank\x22\x20id=\x22pDimg\x22\x20src=\x22https://img1.blogblog.com/img/blank.gif\x22\x20onload=\x22this.style.height\x20=\x20qS(\x27#dCP\x27).scrollHeight\x20+\x20\x27px\x27\x22>'+pDiv;}class CartItem{constructor(_0x45d55d,_0x347a9b,_0x7acd76){const _0x105800=_0x56d2b3;this[_0x105800(0xe4)]=_0x45d55d,this[_0x105800(0x7f)]=_0x347a9b,this[_0x105800(0x134)]=_0x7acd76;}}class LocalCart{static [_0x56d2b3(0x113)]=_0x56d2b3(0xa2);static[_0x56d2b3(0x79)](){const _0x8c7b93=_0x56d2b3;let _0x52bbb8=new Map();const _0x1be00f=localStorage[_0x8c7b93(0x9b)](LocalCart[_0x8c7b93(0x113)]);if(_0x1be00f===null||_0x1be00f['length']===0x0)return _0x52bbb8;return new Map(Object[_0x8c7b93(0x98)](JSON[_0x8c7b93(0x104)](_0x1be00f)));}static[_0x56d2b3(0x128)](_0x4ded4a,_0x18ffcf){const _0x4c8b69=_0x56d2b3;let _0x52d75d=LocalCart[_0x4c8b69(0x79)]();if(_0x52d75d[_0x4c8b69(0x103)](_0x4ded4a)){}else _0x52d75d['set'](_0x4ded4a,_0x18ffcf),localStorage[_0x4c8b69(0x8e)](LocalCart[_0x4c8b69(0x113)],JSON[_0x4c8b69(0x97)](Object[_0x4c8b69(0x11e)](_0x52d75d))),updateCartUI();}static['removeItemFromCart'](_0x37532f){const _0x1a8eef=_0x56d2b3;let _0x36f147=LocalCart[_0x1a8eef(0x79)]();_0x36f147[_0x1a8eef(0x103)](_0x37532f)&&_0x36f147['delete'](_0x37532f);if(_0x36f147[_0x1a8eef(0xdc)]===0x0)localStorage[_0x1a8eef(0xf3)]();else localStorage[_0x1a8eef(0x8e)](LocalCart[_0x1a8eef(0x113)],JSON['stringify'](Object['fromEntries'](_0x36f147)));updateCartUI();}}const cartIcon=qS(_0x56d2b3(0x75));function addItem(_0x493312){const _0x21cf14=_0x56d2b3,_0x3f71b8=decodeURIComponent(_0x493312['dataset'][_0x21cf14(0xe4)])[_0x21cf14(0xde)]('\x20')[_0x21cf14(0x135)]('+'),_0x1e6700=_0x493312['dataset']['title'],_0x2a68bf=_0x493312[_0x21cf14(0xcd)][_0x21cf14(0x7e)]['replace'](/<font style="vertical-align: inherit;">/g,'')[_0x21cf14(0xe1)](/<\/font>/g,''),_0x2b271a=new CartItem(_0x3f71b8,_0x1e6700,_0x2a68bf),_0x30f47d=LocalCart['getLocalCartItems']();_0x30f47d[_0x21cf14(0x103)](_0x3f71b8)?_0x493312[_0x21cf14(0xa6)]['add'](_0x21cf14(0x13c)):(_0x30f47d['set'](_0x3f71b8,_0x2b271a),localStorage[_0x21cf14(0x8e)](LocalCart[_0x21cf14(0x113)],JSON[_0x21cf14(0x97)](Object['fromEntries'](_0x30f47d))),qS(_0x21cf14(0x127))[_0x21cf14(0xa6)][_0x21cf14(0x81)]('hit'),setTimeout(()=>qS('.noemp')[_0x21cf14(0xa6)][_0x21cf14(0x124)]('hit'),0x7d0),updateCartUI());}function updateCartUI(){const _0x4a6854=_0x56d2b3,_0x12be91=qS('#collection');_0x12be91['innerHTML']='';const _0x5d3812=LocalCart[_0x4a6854(0x79)]();if(_0x5d3812===null)return;let _0x16a27a=0x0;for(const [_0x1183fd,_0x3e804d]of[..._0x5d3812[_0x4a6854(0x98)]()][_0x4a6854(0xd7)]()){if(_0x16a27a>=0xa)break;const _0x4589d3=document[_0x4a6854(0x122)]('tr');_0x16a27a++,_0x4589d3[_0x4a6854(0xa7)]=_0x4a6854(0xa1)+_0x3e804d[_0x4a6854(0x7f)]+_0x4a6854(0x77)+_0x3e804d[_0x4a6854(0x134)]+_0x4a6854(0x119),qS(_0x4a6854(0x10c)+_0x1183fd+'\x22]')&&qS(_0x4a6854(0x10c)+_0x1183fd+'\x22]')['classList'][_0x4a6854(0x81)]('in-cart'),_0x4589d3['querySelector']('.record-de')[_0x4a6854(0xa5)](_0x4a6854(0x118),()=>{const _0x379638=_0x4a6854;LocalCart[_0x379638(0x7b)](_0x1183fd);}),_0x4589d3[_0x4a6854(0xc2)](_0x4a6854(0x10a))[_0x4a6854(0xa5)](_0x4a6854(0x118),()=>{const _0x52a1da=_0x4a6854;location[_0x52a1da(0x100)]=_0x3e804d[_0x52a1da(0xe4)];}),_0x12be91[_0x4a6854(0x106)](_0x4589d3);}qS(_0x4a6854(0x94))['style'][_0x4a6854(0xe2)](_0x4a6854(0xbf),'\x22'+_0x5d3812['size']+'\x22');}document['addEventListener']('DOMContentLoaded',()=>{updateCartUI();});function feedBack(_0x49c817){const _0x3b8260=_0x56d2b3;_0x49c817[_0x3b8260(0x80)][_0x3b8260(0x80)][_0x3b8260(0xa7)]=_0x3b8260(0x10f);}
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
    location.href="/p/bangla-to-english.html"
}
  else if (/নাইট মোড|লাইট মোড|ডার্ক মোড|ডার্কমোড|ডার্ক নাইট|ব্লাক মোড|চোখ খারাপ/i.test(text))
  {
    speak(`ঠিক আছে, করে দিচ্ছি। `);
    location.href="/p/result.html"
  } 
  else if (/ফ্লাসলাইট|লাইট অন|লাইট অফ|ফ্ল্যাস লাইট|ফ্ল্যাস অফ|টচ|টর্চ|লাইট জ্বা|ফ্ল্যাস অন/i.test(text))
  {
    speak(`করে দিচ্ছি।`);
    location.href="/p/flash.html"
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
let ks = window.speechSynthesis;
let kv = false;
let speak = (text) => {
  let ku = new SpeechSynthesisUtterance(text);
  ku.lang = 'bn-BD';
  kv ? ks.cancel() : ks.speak(ku);
  kv = !kv;
  ku.onend = () => (kv = false);
};
