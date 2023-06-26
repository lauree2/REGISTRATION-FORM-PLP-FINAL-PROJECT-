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

  var IMEI;
  var DEVICEModel;
  var code;
 
  
  function storedata(event) {
    event.preventDefault();
  
    var task = document.getElementById("IMEI").value;
    var desc = document.getElementById("DEVICEModel").value;
    document.getElementById("IMEI").value = "";
    document.getElementById("DEVICEModel").value = "";
   
    //  store data to firebase

  firebase
  .database()
  .ref("IMEI/" + code)
  .set({
    IMEI: IMEI,
    DEVICEModel: DEVICEModel,
    status: "pending",
  });
 
  storedata(data)
  .then (function(){
    console.log('Data stored successfully');
  })
  .catch(function(error){
    console.error('Error storing data:');
  })

  
document.getElementById("IMEI-header").insertAdjacentHTML(
  "afterend",

  `
      <div class="Task-item" id="${code}">
        <div class="data" id="${IMEI}" >
          <button class="done" id="done" onclick="changeStatus('${code}')" > <i class="far far-check-circle"></i> </button>
          <h2 class="Task">${IMEI}</h2>
          <p class="desc">${DEVICEModel}</p>
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