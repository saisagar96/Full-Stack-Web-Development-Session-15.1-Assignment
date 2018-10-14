//Assigning values to the html elements
document.getElementById("title").innerHTML = "Arrivals"

document.getElementById("head1").innerHTML = "Malta to Amsterdam";
document.getElementById("time1").innerHTML = "08:45";
document.getElementById("status1").innerHTML = "ON TIME";

document.getElementById("head2").innerHTML = "Malta to London";
document.getElementById("time2").innerHTML = "09:45";
document.getElementById("status2").innerHTML = "DELAYED";

document.getElementById("head3").innerHTML = "Malta to Poznan";
document.getElementById("time3").innerHTML = "10:00";
document.getElementById("status3").innerHTML = "ON TIME";

document.getElementById("head4").innerHTML = "Malta to London";
document.getElementById("time4").innerHTML = "11:45";
document.getElementById("status4").innerHTML = "ON TIME";

document.getElementById("head5").innerHTML = "Malta to Rome";
document.getElementById("time5").innerHTML = "12:05";
document.getElementById("status5").innerHTML = "ON TIME";

document.getElementById("head6").innerHTML = "Malta to Paris";
document.getElementById("time6").innerHTML = "12:35";
document.getElementById("status6").innerHTML = "DELAYED";


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
        // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
//Checking for offline mode and displaying message accordingly
if(!navigator.onLine) {
  document.getElementById("conndiv").className = "heading1";
  document.getElementById("title1").innerHTML = "Please Check Your Connection Settings.";
}