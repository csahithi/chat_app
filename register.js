// Your web app's Firebase configuration
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
firebase.initializeApp(firebaseConfig);
var messageref=firebase.database().ref('messages');


document.getElementById('Register').addEventListener('submit',submitForm);
function submitForm(e)
{
e.preventDefault();

var name=getInputVal('name');
var Dob=getInputVal('Dob');
var email=getInputVal('email');
var phno=getInputVal('phno');
var password=getInputVal('password');
var Doorno=getInputVal('Doorno');
var city=getInputVal('city');
var postalcode=getInputVal('postalcode');
var KYCtype=getInputVal('KYCtype');
var Kycid=getInputVal('Kycid');
var Kycimg=getInputVal('Kycimg');

saveMessage(name,Dob,email,phno,password,Doorno,city,postalcode,KYCtype,Kycid,Kycimgv);
}
//function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}


function saveMessage(name,Dob,email,phno,password,Doorno,city,postalcode,KYCtype,Kycid,Kycimg){
var newmessage = messageref.push()

newmessage.set({
name: name,
Dob: Dob,
email: email,
phno: phno,
password: password,
Doorno: Doorno,
city: city,
postalcode: postalcode,
KYCtype: KYCtype,
Kycid: Kycid,
Kycimg: Kycimg
});

}