function clock() {
  const fDate = new Date();
  var hours = fDate.getHours();
  var mins = fDate.getMinutes();
  var secs = fDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = ": " + mins;
  document.getElementById("sec").innerHTML = ": " + secs;
}

setInterval(clock, 100);
