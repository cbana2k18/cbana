
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDexOv57o-ENKcEbI35C9bAcfUjXuYFbyI",
    authDomain: "cbana-login.firebaseapp.com",
    databaseURL: "https://cbana-login.firebaseio.com",
    projectId: "cbana-login",
    storageBucket: "",
    messagingSenderId: "628326545974"
  };
  firebase.initializeApp(config);

// References messages collection
var messagesRef = firebse.database().ref('Messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

   // Get values
   var name = getInputVal('name');
   var name = getInputVal('church'); 
   var name = getInputVal('email'); 
   var name = getInputVal('phone'); 
   var name = getInputVal('message');  

// Save message
   saveMessage(name, church, email, phone, message);

// Show alert
    document.querySelector('.alert').style.display ='block';

// Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

// Clear form
    document.getElementById('contactForm').reset();
}

// Fution to get get form values
function getInputVal(){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, church, email, phone, message);
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        church:church,
        email:email,
        phone:phone,
        message:message,

    })
