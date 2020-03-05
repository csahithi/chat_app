const functions = require("firebase-functions"),
	admin = require("firebase-admin"),
	express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	path = require('path');
	var firebaseConfig = {
		apiKey: "AIzaSyDBLiEhnCOBRBOCr00ajLDnjoCyKIz4WSo",
		authDomain: "chatapp-ec52c.firebaseapp.com",
		databaseURL: "https://chatapp-ec52c.firebaseio.com",
		projectId: "chatapp-ec52c",
		storageBucket: "chatapp-ec52c.appspot.com",
		messagingSenderId: "801791122441",
		appId: "1:801791122441:web:94cb40c9a7248d187cacd8"
	  };
	  // Initialize Firebase
	  admin.initializeApp(firebaseConfig);
	
	  // make auth and firestore references
	
	//   const auth = firebase.auth();
	//   const db = firebase.firestore();
    

/*=============================================>>>>>

				= init and config =

===============================================>>>>>*/

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
// app.use(cookieParser());
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/*=============================================>>>>>

			= authentication routes =

===============================================>>>>>*/

app.get("/", (req, res) => {
	res.render("index");
});
app.get("/register",(req,res)=> {
    res.render("7_regform");
});

app.get("/login",(req,res)=> {
    res.render("3_login");
});
app.get("/udetails",(req,res)=>{
	console.log(req.query);
	query1=req.query;
	console.log(query1)
	res.render("udetails",query1);
});



/*=============================================>>>>>

				= errors =

===============================================>>>>>*/

app.use((req, res, next) => {
	res.status(404).render("errors/404");
});

/*=============================================>>>>>

				= DO NOT PUT ANYTHING AFTER THIS =
1
===============================================>>>>>*/

exports.app = functions.https.onRequest(app);