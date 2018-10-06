//add fire base
//button for adding hobbies
$("#add-hobby-btn").on("click", function (event) {
    event.preventDefault();

    //grab user hobby
    var dateStarted = ($("#dateStarted-input").val().trim(), "MM/DD/YYYY").format("X");

    var hobbyName = $("#hobby-input").val().trim();

    var hours = $("#hours-input").val().trim();

    var rating = $("#rating-input").val().trim()

    //temp object for holding employee
    var newHobby = {
        date: dateStarted,
        hobby: hobbyName,
        hourz: hours,
        rate: rating
  };

//upload hobby data to firebase
  database.ref().push(newHobby);
  

//console log to console to make sure its all working
  console.log(dateStarted.date);
  console.log(hobbyName.hobby);
  console.log(hours.hourz);
  console.log(rating.rate);

  //clear text boxes
  $("#dateStarted-input").val("");
  $("#hobby-input").val("");
  $("#hours-input").val("");
  $("#rating-input").val("");


})





// hey!!



//firebase even for adding employee to database and a row in our html when user adds hobbies

//date hobby was started

//OMG PLS WORK!!!!




// add weather api
// add _ api