json.extract! brand, :id, :name
json.image_url url_for(brand.image)
json.movie_url url_for(brand.movie)