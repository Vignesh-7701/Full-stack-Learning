const dayjs = require('dayjs');


const logo = require('./assets/parrot.avif');
const logo2 = require('./assets/sea.webp');

require('./styles/style.css');
require('./styles/style.scss');
require('./assets/font/BitcountPropDoubleInk-VariableFont_CRSV,ELSH,ELXP,SZP1,SZP2,XPN1,XPN2,YPN1,YPN2,slnt,wght.woff2');

const element = document.getElementById("toast");
document.getElementById("logo").src = logo;
document.getElementById("logo2").src = logo2;

element.style.visibility = "hidden";


//Lazy Loading (or) Dynamic Import
document.getElementById("title").addEventListener('click', () => {
    import("lodash").then(({default : _})=>{
        element.innerHTML = `Your bill is ${_.add(700 , 50)}`;
        element.style.visibility = "visible";
    })
});


//navigate

document.getElementById("exploreBtn").addEventListener('click' , ()=>{
    window.location.href = "explore.html"
})

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
