window.onload = function() {
  const myInput = document.getElementById('password');
  myInput.onpaste = function(e) {
    e.preventDefault();
  }
 }
var admin=require("firebase-admin")
function login() {
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
            console.log(userId);
          } else {
            // No user is signed in.
          }
        });
        window.location="/udetails?userId="+userId 
    }
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

admin.auth().getUserByEmail(email)
  .then(function(userRecord) {
    var rec=userRecord
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', rec.toJSON());
  })
  .catch(function(error) {
   console.log('Error fetching user data:', error);
  });