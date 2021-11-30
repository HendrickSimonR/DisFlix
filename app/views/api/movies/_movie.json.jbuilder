json.extract! movie, :id, :title, :description, :runtime, :rating, :year, :genres
json.photo_url url_for(movie.photo)
json.movie_url url_for(movie.index_movie)
json.full_movie_url url_for(movie.movie)
