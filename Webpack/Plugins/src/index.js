const logo = require('./assets/parrot.avif');
const logo2 = require('./assets/sea.webp');

require('./styles/style.css');
require('./styles/style.scss');
require('./assets/font/BitcountPropDoubleInk-VariableFont_CRSV,ELSH,ELXP,SZP1,SZP2,XPN1,XPN2,YPN1,YPN2,slnt,wght.woff2');


document.getElementById("logo").src = logo;
document.getElementById("logo2").src = logo2;

document.getElementById("toast").style.visibility = "hidden";

document.getElementById("title").addEventListener('click', () => {
    document.getElementById("toast").style.visibility = "visible";
});


//navigate

document.getElementById("exploreBtn").addEventListener('click' , ()=>{
    window.location.href = "explore.html"
})

