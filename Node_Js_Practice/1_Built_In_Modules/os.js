const os = require('os');

console.log(os.platform());   //OS Platform
console.log(os.arch());       //CPU Architecture / Processor
console.log(os.type());


console.log(os.cpus().length); //CPU Cores

console.log(os.freemem()); //Free Momory
console.log(os.totalmem());

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.userInfo());

//console.log(os.networkInterfaces());

console.log(os.uptime(), "seconds");