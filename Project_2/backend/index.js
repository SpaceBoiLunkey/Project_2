//IMPORTED MODULES
//express writes handlers for requests with different HTTP verbs at different URL paths (routes)
const express = require('express');
const app = express();

//processes data sent through an HTTP request body
const bodyParser = require('body-parser');
//port #
const port = 3001;
//connects to dbconnections
const poolconn = require('./dbconnections');
//Cross-Origin Resource Sharing . It allows us to relax the security applied to an API
const cors = require('cors');

//PARSE SECTION 
//parses incoming JSON requests and puts the parsed data in req. body 
//urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())
//cors enables the express server to respond to preflight requests basically a OPTION request
app.use(cors());

// simple get request (i put the name of the file so i know the right terminal is running)
app.get("/", (req, res) => {
    res.json({ message: 'Hello, the index.js file is running. Stay calm and drink water' });
  });




  //GET SECTION

//checks to make sure the same employee id doesnt register again.
//http://localhost:3001/userByName/user1
app.get('/userByEmail/:Email',(req,res)=>{

    const email =req.params.Email;
    poolconn.query('SELECT * FROM userdetails WHERE email=$1',[email],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});


//POST SECTION

//http://localhost:3001/registration
app.post('/registration',(req,res)=>{
    let {email, firstname, lastname, username, password} = req.body;
    poolconn.query('INSERT INTO userdetails (email, firstname, lastname, username, password) VALUES ($1,$2,$3,$4,$5) RETURNING id',
    [email, firstname, lastname, username, password], (error,results)=>{
        if(error){          
            throw error;
        }
        let id =results.rows[0].id;
        poolconn.query('INSERT INTO users (username, password) VALUES ($1,$2)',
        [username, password], (error,results)=>{
        if(error){          
            throw error;
        }
        res.status(201).send(`Form added with ID: ${id}`);
    });  
    }); 
});


//http://localhost:3001/login/
app.get('/login/:username',(req,res)=> {
    const username =req.params.username
    poolconn.query('SELECT * FROM users WHERE username=$1',[username], (error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}); 




















  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})