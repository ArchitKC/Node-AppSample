const EventEmitter = require('events');

var url ='https://google.com';

class Logger extends EventEmitter{   
    log(message){
        console.log(message);

    //call the event
        this.emit('messageevent', {id: 1, url: 'https://google.com'});
    }
}

//module.exports.logg = log;

module.exports = Logger;