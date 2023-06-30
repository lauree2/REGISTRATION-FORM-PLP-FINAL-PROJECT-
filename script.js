const firebaseConfig = {
  apiKey: "AIzaSyAvL_RpXngQ-OK8Gz8ZDBWYkfew8pXM-54",
  authDomain: "keir-care-ee286.firebaseapp.com",
  projectId: "keir-care-ee286",
  storageBucket: "keir-care-ee286.appspot.com",
  messagingSenderId: "852048266705",
  appId: "1:852048266705:web:e2b659d5f2fda40eb78cf0",
  measurementId: "G-5BXDM0CFTV"
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
  firebase.database().ref("Registrationform/ + code").set({
    fullName: fullName,
    IDPassportNumber: IDPassportNumber,
    Location: Location,
    Email:Email,
  
  });

  
  //document.getElementById("registration form-header").insertAdjacentHTML(
    //"afterend",
   
 

  }