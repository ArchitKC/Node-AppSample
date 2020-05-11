const startup_debbuger = require('debug')('app.startup');
const db_debbuger = require('debug')('app.db');
const config = require('config');
const log = require('./middleware/logging');
const auth = require('./middleware/authentication');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

/* console.log(`this process = ${process.env.NODE_ENV}`);
console.log(`app = ${app.get('env')}`); */

app.use(helmet()); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/courses', courses);
app.use('/', home);


console.log('Application Name : ' + config.get('name'));
console.log('MailServer Name : ' + config.get('mail.host'));  

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startup_debbuger('Morgan enabled....');
}

//DB Check
db_debbuger('Database connected');

app.use(log);
 
app.use(auth);


const port = process.env.PORT || 3000;

app.listen(port, ()=> {console.log(`Lisening to Port ${port}....`)});