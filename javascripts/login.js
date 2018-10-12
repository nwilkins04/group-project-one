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

  $("#submit-sign-in").on("click", function (event) {
      event.preventDefault();

      var inputEmail = $("#input-email").val();
      var inputPassword = $("#input-password").val();

      firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {

          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorMessage);
      });

      $("#input-password").val("");
      $("#input-email").val("");

  });

  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

          $("#sign-in-form").hide();
          $("#loged-in").show();

          window.location = "trackerapp.html";

      } else {
          $("#loged-in").hide();

          $("#sign-in-form").show();
      }
  });

  $("#log-out").on("click", function () {
      firebase.auth().signOut().then(function () {
          // Sign-out successful.
      }).catch(function (error) {
          // An error happened.
      });
  });