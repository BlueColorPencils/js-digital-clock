setInterval(function() {
  var y = Date.now()
  var x = new Date(y)

  var z = new Date()
  var UTCseconds = (z.getTime() + z.getTimezoneOffset()*60*1000);

  var arrayOfTimes = [-7, -4, 8, 9];
  var arrayOfDates = [];

  for (var i of arrayOfTimes) {
    var num = i*60*60*1000 //conversion
    arrayOfDates.push(new Date(UTCseconds+num))
  }

  for (var j in arrayOfDates) {
    var output = arrayOfDates[j].toString().split(' ');
    (document.body.getElementsByTagName("h2")[j].innerHTML = output[0] + ", " + output[1] + " " + output[2] + " " + output[3]),
    (document.body.getElementsByTagName("p")[j].innerHTML = output[4])
  }
}, 1000)


setTimeout(function() {
  var arrayOfPlaces = ["Seattle", "New York", "Singapore", "Tokyo"];
  for (var k in arrayOfPlaces) {
    (document.body.getElementsByTagName("h1")[k].innerHTML = arrayOfPlaces[k])
  }
}, 1000)
