import express from 'express';

const router = express.Router();

router.post('/',(req,res) =>{
	const {credentials} = req.body;
	if(credentials.email ==="ex@ex.com" && credentials.password ==="pass"){
		res.json({user: {email: credentials.email, token: 123}});
	}else{
		res.status(400).json({errors: {global: "Invalid credentials"}});
	}
});

export default router