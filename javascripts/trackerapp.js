// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0fV7aGHpPQW652dB7Gz2L3T8axhF2c8U",
  authDomain: "personal-hobbies.firebaseapp.com",
  databaseURL: "https://personal-hobbies.firebaseio.com",
  projectId: "personal-hobbies",
  storageBucket: "personal-hobbies.appspot.com",
  messagingSenderId: "1122835426"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit-btn").on("click", function (event) {
  event.preventDefault();
//Grab the users input
  var hobbyName = $("#name-input").val().trim();
  var dateStarted = $("#destination-input").val().trim();
  var hours = $("#time-input").val().trim();
  var rating = $("#frequency-input").val().trim()
// Object for the hobby fields 
  var newHobby = {
    hobbyName: hobbyName,
    dateStarted: dateStarted,
    hours: hours,
    rating: rating
  };
//upload data to the database
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

      var uid = user.uid;
      console.log(uid);
      var userRef = database.ref("/users/" + uid);

      userRef.child("app").push(newHobby);

    }
  });

  
//clear text boxes
  $("#name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    var uid = user.uid;
    console.log(uid);
    var userRef = database.ref("/users/" + uid);

    userRef.child("app").on("child_added", function (childSnapshot) {

      var name = childSnapshot.val().hobbyName;
      var date = childSnapshot.val().dateStarted;
      var time = childSnapshot.val().hours;
      var rating = childSnapshot.val().rating;
// add data to the table 
      var newRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(date),
        $("<td>").text(time),
        $("<td>").text(rating),
       
      );

      $("#schedule-table > tbody").append(newRow);
    });


    $("#sign-in-form").hide();
    $("#loged-in").show();

  } else {
    $("#sign-in-form").show();
    window.location = 'login.html';

  }

});

$("#log-out").on("click", function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });

});