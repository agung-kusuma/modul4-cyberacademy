const api_url =
  "https://api.thingspeak.com/channels/{Channel ID}/feeds.json?api_key={API key Read}&results=1";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1;
      document.getElementById("field-2").innerHTML = obj.field2;
    });
}, 1000);
