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
    
    var name=document.querySelector('#name').value;
    var Dob=document.querySelector('#Dob').value;
    var email=document.querySelector('#email').value;
    var phno=document.querySelector('#phno').value;
    var password=document.querySelector('#password').value;
    var Doorno=document.querySelector('#Doorno').value;
    var city=document.querySelector('#city').value;
    var postalcode=document.querySelector('#postalcode').value;
    var KYCtype=document.querySelector('#KYCtype').value;
    var Kycid=document.querySelector('#Kycid').value;
    var Kycimg=document.querySelector('#Kycimg').value;

    saveMessage(name,Dob,email,phno,password,Doorno,city,postalcode,KYCtype,Kycid,Kycimg);
}
//function to get form values
function getInputVal(id){
    return document.getElementById(id).nodeValue;
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