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


// simple route i put the name of the file so i know the right terminal is running
app.get("/", (req, res) => {
    res.json({ message: 'Hello, the index.js file is running. Stay calm and drink water' });
  });

//GET SECTION


//checks to make sure the same user id doesnt register again.
//http://localhost:3001/userByName/user1
app.get('/userByEmail/:email',(req,res)=>{
    const email =req.params.email;
    poolconn.query('SELECT * FROM userdetails WHERE email=$1',[email],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});




//LOGIN
//http://localhost:3001/login/
app.get('/login/:logEmail',(req,res)=> {
    const email =req.params.logEmail;
    poolconn.query('SELECT * FROM users WHERE email=$1',[email], (error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});





//GETS COMMENTS
//http://localhost:3001/commentssection
app.get('/commentssection',(req,res)=> {
    poolconn.query('SELECT * FROM commentssection ORDER by id desc', (error,results)=>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    })

}); 








//POST SECTION

//http://localhost:3001/registration
app.post('/registration',(req,res)=>{
    let {email, firstname, lastname, password} = req.body;
    poolconn.query('INSERT INTO userdetails (email, firstname, lastname, password) VALUES ($1,$2,$3,$4) RETURNING id',
    [email, firstname, lastname, password], (error,results)=>{
        if(error){          
            throw error;
        }
        let id =results.rows[0].id;
        poolconn.query('INSERT INTO users (email, password) VALUES ($1,$2)',
        [email, password], (error,results)=>{
        if(error){          
            throw error;
        }
        res.status(201).send(`Form added with ID: ${id}`);
    });  
    }); 
});



//http://localhost:3001/commentssection
app.post('/commentssection',(req,res)=>{
    let {alias, comment} = req.body;
    poolconn.query('INSERT INTO commentssection (alias, comment) VALUES ($1,$2) RETURNING id',
    [alias, comment], (error,results)=>{
        if(error){          
            throw error;
        }
        let id =results.rows[0].id;
        res.status(201).send(`Form added with ID: ${id}`);
    });  
});


//PUT SECTION


//http://localhost:3001/commentssection
app.put('/commentssection/:Id',(req,res)=>{
    const id =req.params.Id;
    let {adminreply} = req.body;
   //INSERT or UPDATE SQL statements we can use to create or update record in table respectively
    poolconn.query('UPDATE commentssection SET adminreply=$2 WHERE id=$1',[id, adminreply],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).send(`User id: ${id} details are updated`);
    });
});




//DELETE SECTION



//http://localhost:3001/commentssection
app.delete('/commentssection/:id',(req,res)=>{
    let id = req.params.id;
    poolconn.query('DELETE FROM commentssection WHERE id=$1',[id],(error,results)=>{
        if(error){
            throw error;
        };
        res.status(200).send(`User id: ${id} deleted`);
    });
});










  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})