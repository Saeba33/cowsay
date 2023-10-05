const userInfo = require('./information.js');
const  cowsay  =  require ( "cowsay" );

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and my campus is ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));