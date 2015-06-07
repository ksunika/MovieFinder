function getCoordinates(){
    document.getElementById("message").innerHTML += "<p>determining your location</p>";
	var pos = navigator.geolocation.getCurrentPosition(function(position) {
        var mylat = position.coords.latitude;
        var mylong = position.coords.longitude;
        
        var zip;

        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(mylat, mylong);
        geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    zip = results[0].formatted_address.match(/,\s\w{2}\s(\d{5})/)[1];//parse to get zip only
                } 
            }
            if (zip){
        		document.getElementById("message").innerHTML += "<p>looking for movies at your zip "+zip+"</p>";
        		movieData(zip);
        	}
        	else { //if no zip retrieved search by coordinates
        		document.getElementById("message").innerHTML += "<p>looking for movies at your latitude of " + mylat + " and longitude of "+mylong+"</p>";
        		movieData(mylat, mylong);
        	}
        });
    });
}