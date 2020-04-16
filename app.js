const Logger = require('./logger');
const logger = new Logger();
 

const EventEmitter = require('events');
 
//Register a event
logger.on('messageevent', (args)=>{
    console.log('messageevent called',args);
});

logger.log('Hello');


const Http = require('http');

const server  = Http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('connection established');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});

 

server.listen(3000);

console.log('Listening to port 3000....');
