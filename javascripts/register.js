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

  $("#submit-register").on("click", function (event) {
      event.preventDefault();

      var inputEmail = $("#input-email").val();
      var inputPassword = $("#input-password").val();

      firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
      });

      $("#input-password").val("");
      $("#input-email").val("");
  });


  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

          $("#loged-in").hide();

          var uid = user.uid;

          console.log(uid);

          var userRef = database.ref("/users/" + uid);

          userRef.once("value", function (snapshot) {
              if (!snapshot.val()) {
                  // User does not exist, create user entry
                  userRef.set({
                      email: user.email,
                  });

                  window.location = "trackerapp.html";
              }
          });

      } else {
          $("#loged-in").hide();
      }
  });

  $("#log-out").on("click", function () {
      firebase.auth().signOut().then(function () {
          // Sign-out successful.

          window.location = "login.html";
      }).catch(function (error) {
          // An error happened.
      });
  });