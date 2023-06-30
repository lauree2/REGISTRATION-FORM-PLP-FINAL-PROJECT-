const firebaseConfig = {
  apiKey: "AIzaSyAaTAHTsnDQc4GEYOaUGi8AbBw45kQEyyE",
  authDomain: "laure-keir.firebaseapp.com",
  projectId: "laure-keir",
  storageBucket: "laure-keir.appspot.com",
  messagingSenderId: "18033443728",
  appId: "1:18033443728:web:d112ae0da2fe0d71642915",
  measurementId: "G-PW15WSRQV5"
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
  firebase
    .database()
    .ref("Registrationform/ + code")
    .set({
      fullName: fullName,
      IDPassportNumber: IDPassportNumber,
      Location: Location,
      Email:Email,
  
    })

  
  //document.getElementById("registration form-header").insertAdjacentHTML(
    //"afterend",
   
 

  }