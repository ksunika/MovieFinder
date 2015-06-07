function movieParse(data){//parse json into our movie objects
    function compareTime(aDT,bDT) {//to deal with movies starting today after midnight
            
        var a = (aDT.dateTime).replace("00:","24:");
        var b = (bDT.dateTime).replace("00:","24:");
        
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
    function compareTitle(aT,bT) {//to sort movies by title
            
        var a = aT.title;
        var b = bT.title;
        
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }   

    var movieList = [];

    for (var i = 0; i < data.length; i++) {
        var entry = data[i];

        var showtimes = entry.showtimes;
        showtimes.sort(compareTime);
       
        var movie = {
            title: entry.title,
            //image: imageURL,
            desc: entry.shortDescription,
            showtimes: showtimes,
            year: entry.releaseYear,
            prefURI: entry.preferredImage.uri
        };

        movieList.push(movie);//building movie list
    }

    movieList.sort(compareTitle); //sort by title  
    
    return movieList; //movies to be shown in main screen
}

function fetchImageURL(title, year, prefURI){
	var endSubscriptionDate = new Date("1 Jul 2015"); //Gracenote API Package: Sample Plan end date
	var today = new Date();
	var subscribed = (today < endSubscriptionDate);

	if (subscribed){
		var apikey = "ds52n9brwr6dczqegp7btuad";
    	var imageLink = 'http://developer.tmsimg.com/' + prefURI + '?api_key='+apikey;
	}
	else {// alternative source of posters: omdbapi, slower
		var imageLink = getImage(title, year);	
	}

    return imageLink;
}
function getImage(title, year) {// alternative source of posters: omdbapi, slower
	var imageLink;
	$.ajax({
	    method: "GET",
	    dataType: "json",
	    url: "http://www.omdbapi.com/?t=" + title + "&y="+year,
	    success: function(data){
	        imageLink = data.Poster;
	    },
	    async:false,
	    error: function() {
	        return "Image not found.";
	    }
	});
	return imageLink;
}