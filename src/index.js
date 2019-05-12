import express from 'express'
import path from 'path';
import bodyParser from 'body-parser';
import auth from "./routes/auth";
import users from "./routes/users";
import books from "./routes/books";

const app = express();
app.use(bodyParser.json());
/*
app.post('/api/auth',(req,res) => {
	 
	res.status(400).json({errors: {global: req.body}});
});*/
app.use('/api/auth',auth);
app.use('/api/users',users);
app.use('/api/books',books);

app.get('/*',(req,res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080,()=> console.log('Running on localhost:8080'));