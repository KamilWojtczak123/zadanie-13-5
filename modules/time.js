var os = require('os');
var colors =require('colors');

function getTime(uptime) {
    var uptime = os.uptime().toFixed(0);
    var h, min, sec;
    h = Math.floor(uptime / (60*60));
    min = Math.floor(uptime%(60*60) / 60);
    sec = Math.floor(uptime % 60);
    console.log('Uptime:'.green, h, 'h', min, 'min', sec, 'sec');
}
exports.print = getTime;