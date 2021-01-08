var GoogleMapsController = {

  latElementId: 'lat'
  ,lngElementId: 'lng'

  ,postSearchMarker: null
  ,lat: null
  ,lng: null

  // Adds a marker to the map.
  ,addMarker: function(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
      position: location
      ,map: map
    });
    return marker;
  }

  ,createMap: function() {
    var map = new google.maps.Map(document.getElementById('map-container'), {
      center: {lat: 32.878484, lng: -117.213509}
      ,zoom: 14
      ,mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);
      }, function() {
        // error handling code
      });
    } else {
      // Browser doesn't support Geolocation
      alert("Geolocation is not supported by the current web browser, so we set your current location to San Diego. You can change the location manually with the search box above");
    }
    return map;
  }

  // Include the places libraries
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  ,postInitMap: function() {
    var base = this;
    var map = base.createMap();
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    google.maps.event.addListener(map, 'click', function(e) {
      if (base.postSearchMarker) {
        base.postSearchMarker.setMap(null);
      }
      base.postSearchMarker = base.addMarker(e.latLng, map);
      base.lat.value = e.latLng.lat();
      base.lng.value = e.latLng.lng();
    });
  }

  ,searchInitMap: function() {
    var base = this;
    console.log("a");
    var map = base.createMap();
    var markers = [];
    // fetch the lat and lng data of each location from the hidden fields
    console.log("b");
    var numOfPoints = parseInt(document.getElementById('len').value);
    var bounds = new google.maps.LatLngBounds();
    console.log("c");
    /* NaN causing a weird behavior in google.maps.LatLng? */
    for (var i = 0; i < numOfPoints; ++i) {
      var latLng = new google.maps.LatLng(
        parseFloat(document.getElementById('lat'+i).value),
        parseFloat(document.getElementById('lng'+i).value)
        //null,null
      );
      var marker = new google.maps.Marker({
        map: map
        ,title: (i+1).toString()
        ,position: latLng
      });

      var name = document.getElementById('name'+i).value;
      var price = '$'+document.getElementById('price'+i).value;
      var description = document.getElementById('description'+i).value;
      var contentString = name + ', ' + description + '<br>' + price + '<br><a href="foodinfo?id='+document.getElementById('createdOnId'+i).value+'">view</a>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      markers.push(marker);
      console.log("d");
      bounds.extend(latLng);
      console.log("e");
    }
    console.log("z");
    map.fitBounds(bounds);    
    console.log("z1");
  }

  ,foodinfoInitMap: function() {
    var lat = parseFloat(document.getElementById('lat').value);
    var lng = parseFloat(document.getElementById('lng').value);
    var latLng = new google.maps.LatLng(lat, lng);
    var map = new google.maps.Map(document.getElementById('map-container'), {
      center: { lat: lat, lng: lng }
      ,zoom: 13
    });
    var marker = new google.maps.Marker({
      map: map
      ,position: latLng
    });
  }

  ,fixElements: function() {
    var base = this;
    base.lat = document.getElementById(base.latElementId);
    base.lng = document.getElementById(base.lngElementId);
    return base;
  }

  ,initialize: function() {
    console.log("z2");
    var base = this;
    console.log("z3");
    base.fixElements();
    console.log("z4");
  }
};

var GoogleMapsController = GoogleMapsController || {};

$(document).ready(function() {
  console.log("-a");
  GoogleMapsController.initialize();
  console.log("-b");
});