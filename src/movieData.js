function movieData(param1, param2) {
    var apikey = "ds52n9brwr6dczqegp7btuad";
    var baseUrl = "http://data.tmsapi.com/v1.1";
    var showtimesUrl = baseUrl + '/movies/showings';
    var radius = '5';
    var d = new Date();
    var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

    if (param2 === undefined){
        var zipCode = param1;
        //var zipCode = '10001';//testing other zip codes
    }
    else {
        var lat = param1;
        var lng = param2;
    }

    $.ajax({
        url: showtimesUrl,
        data: { 
            startDate: today,
            lat: lat,
            lng: lng,
            zip: zipCode,
            radius: radius,
            api_key: apikey
        },
        success: function(data){
            number = data.length; 
            showElements(movieParse(data), zipCode);
        },
        error: function() {
            alert( "Data not found.");
        }
    });
}



