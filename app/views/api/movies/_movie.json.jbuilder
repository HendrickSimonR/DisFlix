json.extract! movie, :id, :title, :description, :runtime, :rating, :year, :brand_id, :tags, :topic, :cast, :keywords
json.image_url url_for(movie.image)
json.movie_url url_for(movie.movie)