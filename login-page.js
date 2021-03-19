

  const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['username'].value;
  const password = loginForm['password'].value;

  // log the user in
  firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
    console.log("user signed in");
   console.log(firebase.auth().currentUser);
     
    off2();
  }).catch(function(){

      alert('Wrong user credentials');   
    
       
  });


  
});
function on2() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is logged in")
    }
    else{
      document.getElementById("overlay2").style.display = "block";
    }
  });
  
}
  function off2() {
    document.getElementById("overlay2").style.display = "none";
  }

