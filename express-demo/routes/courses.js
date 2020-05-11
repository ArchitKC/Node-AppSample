const express = require('express');
const router = express.Router();

const Joi = require('joi');

const courses = [
    {id : 1, name: 'Course1'},
    {id : 2, name: 'Course2'},
    {id : 3, name: 'Course3'}
];


//GET
router.get('/', (req,res)=>{
    
    //res.render('index',{title: "My Course Page", message: "Courses Details"});
    res.send(courses);
});

//GET with ID
router.get('/:id', (req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send(`The course with ${req.params.id} doesnt exist` );
    //res.send(`This is the requested ${course}`);
    res.send(course);
});

//GET PARAMETER
router.get('/api/posts/:month/:year', (req,res) =>{
    res.send(req.params);
    //res.send(req.query);
});

//POST

router.post('/', (req,res)=>{
    const {error} = validateCourse(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id : courses.length + 1,
        name : req.body.name
    };

    courses.push(course);
    res.send(courses);  

});

//DELETE
router.delete('/:id',(req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send(`The course with ${req.params.id} doesnt exist` );

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(courses);
});

//PUT
router.put('/:id',(req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send(`The course with ${req.params.id} doesnt exist` );

    const {error} = validateCourse(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course){
   
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course,schema);
}


module.exports = router;