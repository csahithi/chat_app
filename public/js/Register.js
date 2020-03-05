const signupForm=document.querySelector('#Register');
signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  // get user info
  const name=signupForm['name'].value;
  const Dob=signupForm['Dob'].value;
  const email=signupForm['email'].value;
  const phno=signupForm['phno'].value;
  const password=signupForm['password'].value;
  const Doorno=signupForm['Doorno'].value;
  const Streetname=signupForm['Streetname'].value;
  const city=signupForm['city'].value;
  const postalcode=signupForm['postalcode'].value;
  const KYCtype=signupForm['KYCtype'].value;
  const KYCid=signupForm['Kycid'].value;
  const KYCimg=signupForm['Kycimg'].value;
  console.log(email,password);
  
  // db.collection('Users').doc(userId).set({
  //   name: name,
  //   dob: Dob,
  //   email: email,
  //   phno: phno,
  //   password: password,
  //   doorno: Doorno,
  //   streetname: Streetname,
  //   city: city,
  //   postalcode: postalcode,
  //   kyctype: KYCtype,
  //   kycid: KYCid,
  //   kycimg: KYCimg
  // });

  auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    console.log(cred.user);
    firebase
    .auth()
    .signInWithEmailAndPassword(
      document.getElementById("email").value,
      document.getElementById("password").value
      
    )
    .then(function(user){
      if(user){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            userId=user.uid;
            
  db.collection('Users').doc(userId).set({
    name: name,
    dob: Dob,
    email: email,
    phno: phno,
    password: password,
    doorno: Doorno,
    streetname: Streetname,
    city: city,
    postalcode: postalcode,
    kyctype: KYCtype,
    kycid: KYCid,
    kycimg: KYCimg
  });
            console.log(userId);

          } else {
            // No user is signed in.
          }
        });
        //window.location="/udetails" 
    }
    })
    .catch(function(error) {
      console.log(error.message);
    });
});
    // window.location='/login'
    
    // signupForm.reset();
  });
  


 //});

// function signup() {
//   email=document.getElementById('email').value;
//   password=document.getElementById('password').value;
//   window.alert('1'+email);
//   firebase.auth().createUserWithEmailAndPassword(email,password)
//   .catch(function(error) {
//     // Handle Errors here.
//     window.alert('2'+email);
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     window.alert(errorCode)
//     // ...
  
//   })
//   .then(function (user) {
//     window.alert(email)
//     // body...
//   });
//   
