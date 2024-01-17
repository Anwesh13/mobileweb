import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "web"

})

app.post('/user', (req, res) => {
    const sql = "INSERT INTO users ('firstname', 'lastname', 'email', 'password', 'company', 'address', 'city', 'country', 'code') VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.company,
        req.body.address,
        req.body.city,
        req.body.country,
        req.body.code,
    ]
    db.query(sql, [values], (err, result)=> {
        if(err) return res.json({Message: "Error in Node"});
        return res.json(result);
    })
})

app.post('/login', (req, res) => {
    const sql  = "SELECT * FROM users WHERE email = ? and password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, result) =>{
        if(err) return res.json({Message : "Error in server"});
        if(result.length > 0){
            return res.json({Login: true})
        } else {
            return res.json({Login: false})
        }
    } )
})

app.listen(8082, () => {
    console.log("Connected to the server");
})