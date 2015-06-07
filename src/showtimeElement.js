var ShowtimeElement = React.createClass({
    render: function () {

		var linkStyle = {
			display: 'inline-block',
			position: 'relative',
			paddingLeft: '6px',
			/* Font styles */
			fontFamily:'Muli',
			fontSize: '13px',
			lineHeight: '20px',
			textDecoration: 'none',
			color: '#E4DED0'
		};
	    var movie = this.props.data; // movie we are working with
	    
	    var myTime = movie.dateTime;
	    myTime = myTime.substring(myTime.indexOf('T')+1); //fetching only time, removing date

	    var theatre = movie.theatre.name;
	    var url = movie.ticketURI; //link to buy tickets


	    if (!url){  //if url for the ticket is not known
	        return (
	            <div style={linkStyle}>{myTime} {theatre}</div>
	        );
	    }

	    return (
	        <div><a href={url} target="_blank" style={linkStyle}>{myTime} {theatre} &#9654;</a></div>
	    );
    }
});