function login()
{
    var email=document.getElementById("email_field").value;
    var pass=document.getElementById("password_field").value;

   
firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.

    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }
  );
  
  window.alert('You have successfully signed in');
  
 
}











  