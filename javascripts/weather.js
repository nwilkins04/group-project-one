settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.darksky.net/forecast/3acbfa7cea4a91d37edd64fe44ab7aaa/" + lat + "," + lon,
    "method": "GET",
    "headers": {
      'Access-Control-Allow-Origin': '*',
      "Cache-Control": "no-cache",
      "Postman-Token": "fd729064-e7a4-4955-b898-a70bdad3fa57"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });