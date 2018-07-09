var os = require('os');

function getTime() {
    var uptime = os.uptime();
    var minute = Math.floor(uptime / 60);
    var hours = Math.floor(uptime / 3600);
    var sec = Math.floor(uptime % 60);
    if (uptime < 60) {        
            console.log('Uptime: '.green + sec + 'sek.')
    } else if (uptime < 3600){
            console.log('Uptime: '.green + minute + 'min.' + sec + 'sek.');

    } else {       
        console.log(('Uptime: '.green + hours + 'godz. ' + (minute - 60 * hours) + 'min. ' + sec + 'sek.'))
    }
}

exports.print = getTime;