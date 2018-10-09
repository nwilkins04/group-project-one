//add fire base
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAFwVw9TJOcpi_Oll6iTMFhHiqbjwyfjQw",
  authDomain: "hobbies-41199.firebaseapp.com",
  databaseURL: "https://hobbies-41199.firebaseio.com",
  projectId: "hobbies-41199",
  storageBucket: "hobbies-41199.appspot.com",
  messagingSenderId: "867750830966"
};
firebase.initializeApp(config);

var database = firebase.database();

//button for adding hobbies
$("#add-hobby-btn").on("click", function (event) {
    event.preventDefault();

    //grab user hobby
    var dateStarted = $("#dateStarted-input").val().trim();
    var hobbyName = $("#hobby-input").val().trim();
    var hours = $("#hours-input").val().trim();
    var rating = $("#rating-input").val().trim()
    
    //temp object for holding new hobby
    var newHobby = {
        date: dateStarted,
        hobby: hobbyName,
        // changed property name to "time" from "hourz"
        time: hours,
        rate: rating
  };

//upload hobby data to firebase
  database.ref().push(newHobby);
  
  
//console log to console to make sure its all working
  // console.log(newHobby.date);
  // console.log(newHobby.hobby);
  // console.log(newHobby.time);
  // console.log(newHobby.rate);

  //clear text boxes
  $("#dateStarted-input").val("");
  $("#hobby-input").val("");
  $("#hours-input").val("");
  $("#rating-input").val("");


})


//firebase even for adding hobbies to database and a row in our html when user adds hobbies

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var dateStarted = childSnapshot.val().date;
  var hobbyName = childSnapshot.val().hobby;
  var hours = childSnapshot.val().time;
  var rating = childSnapshot.val().rate;

  // Employee Info
  console.log(dateStarted);
  console.log(hobbyName);
  console.log(hours);
  console.log(rating);

  

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(dateStarted),
    $("<td>").text(hobbyName),
    $("<td>").text(hours),
    $("<td>").text(rating),
  );

  // Append the new row to the table
  $("#hobbie-table > tbody").append(newRow);
});


//date hobby was started

//OMG PLS WORK!!!!




// add weather api
// add _ api