function showElements(movieList, zip){

    var App = React.createClass({
		render: function () {
			var message = number + ' movies today';
			if (zip){
				message += ' at your zip code '+ zip;
			}          
            return (
                <div>
                    <MovieList header={message} data={movieList}/>
                </div>
            );
        }
    });

    document.getElementById("message").innerHTML = "";//no more messages needed

	React.render(<App/>, document.getElementById('container'));

}