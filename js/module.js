export function createStyle3() {
 let css3 = `
 .bj{border:4px solid red}
.p-d-btn {
    border: 1px solid #bbb;
    outline: none;
    display:block;
    color: #fff;
    font-weight:bold;
    margin:10px auto;
    padding:5px 15px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 14px;
    user-select:none;
}
.p-d-btn:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(2px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0.8;
    border-radius:14px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
 .p-down-con {
  width: 100%;
  background-color: #bbb;
  border-radius:14px;
  display:none;
}
#myBar {
  width: 1%;
  height: 30px;
  text-align:right;
  margin:0;
  border-radius:;
}
 `,
    head3 = document.head || document.getElementsByTagName('head')[0],
    style3 = document.createElement('style');

head3.appendChild(style3);
style3.type = 'text/css';
if (style3.styleSheet){
  style3.styleSheet.cssText = css3;
} else {
  style3.appendChild(document.createTextNode(css3));
}
}

export function createSecL(l){
  let downUrl = location.href; 
        let strUrl = downUrl; 
        let fDownUrl = strUrl.replace(l+'?url=', "");
        if(fDownUrl){
          return fDownUrl;
        }
  }
