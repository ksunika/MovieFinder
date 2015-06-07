#movie finder

*movie finder* is a simple web app allowing you to see movies playing in the theaters in your area
(see [demo on YouTube])

###notes

  - in-browser JSX transformer is used since the project is fairly small
  - [OnConnect API] is used since Fandango no longer provides free API to developers
  - since [OnConnect API] only allows 2 requests per second, I chose not to load all the posters initially; posters are loaded after clicking on each movie
  - [OnConnect API] does not provide free access to movie posters, they gave me sample access to this feature for one month only
  - after July 1, 2015 *movie finder* switches to [OMDb API] to load posters


### how to use
download the files, run movies.html in your Firefox or Safari
###browsers supported
  - Safari, Version 8.0.6
  - Firefox 38.0.5

###author
Xenia Serbin
###version
1.0
[demo on YouTube]:https://youtu.be/EpXV6j37FTE
[OMDb API]:http://omdbapi.com/
[OnConnect API]:http://developer.tmsapi.com/docs/data_v1_1/movies/Movie_showtimes
