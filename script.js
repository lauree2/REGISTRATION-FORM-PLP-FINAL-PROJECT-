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
 
  
  function storedata(event) {
    event.preventDefault();
  
    var fullName= document.getElementById("fullName").value;
    var IDPassportNumber = document.getElementById("IDPassportNumber").value;
    var Location= document.getElementById("Location").value;
    var email= document.getElementById("email").value;
    var IMEI= document.getElementById("IMEI").value;
    var DeviceModel= document.getElementById("DeviceModel").value;
    var DeviceBrand= document.getElementById("DeviceBrand").value;

    document.getElementById("fullName").value = "";
    document.getElementById("IDPassportNumber").value = "";
    document.getElementById("Location").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("IMEI").value = "";
    document.getElementById("DeviceModel").value = "";
    document.getElementById("DeviceBrand").value = "";

    //  store data to firebase
  firebase
  .database()
  .ref("Registrationdetails/".code)
  .set({
    fullName: fullName,
    IDPassportNumber: IDPassportNumber,
    Location: Location,
    Email: Email,
    IMEI:IMEI,
    DeviceModel:DeviceModel,
    DeviceBrand: DeviceBrand,
    status: "pending",
  });


  document.getElementById("registration form-header").insertAdjacentHTML(
    "afterend",

    `
        <div class="registration details form" id="${code}">
          <div class="data" id="${fullName}" >
          <div class="data" id="${IDPassportNumber}" >
          <div class="data" id="${Location}" >
          <div class="data" id="${Email}}" >
          <div class="data" id="${IMEI}" >
          <div class="data" id="${DeviceModel}" >
          <div class="data" id="${DeviceBrand}" >
            <button class="done" id="done" onclick="changeStatus('${code}')" > <i class="far far-check-circle"></i> </button>
            <h2 class="fullName">${fullName}</h2>
            <p class="IDPassportNumber>${IDPassportNumber}</p>
            <p class="Location">${Location}</p>
            <p class="Email">${Email}</p>
            <p class="IMEI">${IMEI}</p>
            <p class="DeviceModel">${DeviceModel}</p>
            <p class="DeviceBrand">${DeviceBrand}</p>

            <p id="status"></p>
          </div>
          <hr>
          <div class="buttons">
            <button class=" button edit" id="editData" onclick = "editData('${code}')" >EDIT TASK</button>
            <button class=" button delete" id="deleteData" onclick="deleteData('${code}')"  >DELETE TASK</button>
          </div>
        </div>
      `
  );


}




