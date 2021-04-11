"use strict";
//Monthly mortgage payment
function computeLoan() {
  const amount = document.querySelector("#amount").value;
  const interestRate = document.querySelector("#interestRate").value;
  const months = document.querySelector("#months").value;
  const interest = (amount * (interestRate * 0.01)) / months;
  let payment = (amount / months + interest).toFixed(2);

  
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.querySelector("#payment").innerHTML = `Monthly Payment = ${payment}`;
}

//Google Maps Platform Maps JavaScript API
//Get user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (p) {
    let LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);

    let mapOptions = {
      center: LatLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // mapTypeId: "satellite"};
 
    //Example of partner
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const beachMarker = new google.maps.Marker({
      position: { lat: 54.69439511906646, lng: 25.28150502771824 },
      map,
      title: "Citadele bankas",
      icon: image,
    });

    let marker = new google.maps.Marker({
      position: LatLng,
      map: map,
      title: "Your location " + " (Latitude: " + p.coords.latitude + " and Longitude: " + p.coords.longitude + ")"
    });
  });

} else {
  alert('Geo Location feature is disabled in your browser.');
}

//Auto-scroll using jQuery(JavaScript library designed to simplify HTML DOM )
$(document).ready(function () {
  $("#scroll").click(function () {
    $(document).scrollTop($(document).height());
  });
});

