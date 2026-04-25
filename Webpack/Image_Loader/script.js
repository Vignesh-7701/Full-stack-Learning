const logo = require('./assets/parrot.avif');
const logo2 = require('./assets/sea.webp');
require('./style/style.css');
require('./style/style.scss');
require('./assets/BitcountPropDoubleInk-VariableFont_CRSV,ELSH,ELXP,SZP1,SZP2,XPN1,XPN2,YPN1,YPN2,slnt,wght.ttf')

document.getElementById("toast").style.visibility="hidden";

document.getElementById("title").addEventListener(
    'click' , ()=>{
        document.getElementById("toast").style.visibility="visible";
    }
)

document.getElementById("logo").src = logo;
document.getElementById("logo2").src = logo2;