let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(40.9974994, 28.850556),
    zoom: 11,
    disableDefaultUI: true,
    gestureHandling: "greedy",
  });

  const icons = {
    office: {
      icon: "custom-marker.png",
    },
  };

  const features = [
    {
      let: "41.0333423",
      lng: "29.1009205",
      type: "office",
      title: "Test Title",
      url: "https://github.com/umitunver",
    },
    {
      let: "41.049797",
      lng: "28.6612256",
      type: "office",
      title: "Test Title 2",
      url: "https://github.com/umitunver",
    },
  ];

  const infowindow = new google.maps.InfoWindow({
    content: "",
  });

  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(features[i].let, features[i].lng),
      icon: icons[features[i].type].icon,
      map: map,
      label: { text: features[i].labelText, color: "white" },
    });

    google.maps.event.addListener(marker, "mouseover", function () {
      infowindow.setContent(
        `<div class="custom-area"><div class="title">${features[i].title}</div></div>`
      );
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(marker, "mouseout", function () {
      infowindow.close();
    });

    google.maps.event.addListener(marker, "click", function () {
      window.open(features[i].url, "_blank"); 
    });
  }
}
