console.log ("weather js linked")

//ajax for button called
$.ajax ({
    url: "https://openweathermap.org/current" + "&api_key=2286d2850daceff12f84b544e1d347c2";
    method: "GET"
}).then(function(response) {
    var results = response.data;
    $("#weather-info")
});