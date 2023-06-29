const firebaseConfig = {
    apiKey: "AIzaSyCyX5s_SRUN6X-Fb7els1csIC3mHo-d8Bs",
    authDomain: "final-project-test-d4c16.firebaseapp.com",
    databaseURL: "https://final-project-test-d4c16-default-rtdb.firebaseio.com",
    projectId: "final-project-test-d4c16",
    storageBucket: "final-project-test-d4c16.appspot.com",
    messagingSenderId: "304468731184",
    appId: "1:304468731184:web:52c6517078e66e09e994f5",
    measurementId: "G-CHDQFPEVSM"
  };

  firebase.initializeApp(firebaseConfig);

  var totalItem;
  var maxCode;
  var code;
 
  
  function enterdetails(event) {
    event.preventDefault()
  
    var fullName= document.getElementById("fullName").value;
    var IDPassportNumber = document.getElementById("IDPassportNumber").value;
    var Location= document.getElementById("Location").value;
    var Email= document.getElementById("Email").value;
    
    document.getElementById("fullName").value = "";
    document.getElementById("IDPassportNumber").value = "";
    document.getElementById("Location").value = "";
    document.getElementById("Email").value = "";
   

    //  store data to firebase
  firebase.database().ref("Registrationform/" + code).set({
    fullName: fullName,
    IDPassportNumber: IDPassportNumber,
    Location: Location,
    Email:Email,
  
  });

  
  //document.getElementById("registration form-header").insertAdjacentHTML(
    //"afterend",
   
 

  }