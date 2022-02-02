json.brand do
  json.partial! 'api/brands/brand', brand: @brand
end

# @movies.each do |movie|
#   json.set! movie.id do 
#     json.partial! "api/movies/movie", movie: movie 
#   end
# end