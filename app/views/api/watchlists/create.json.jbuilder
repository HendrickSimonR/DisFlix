# json.set! @watchlist.id do 
#   json.extract! @watchlist.movie_id
# end 

json.extract! @watchlist, :id, :movie_id

# json.partial! '/api/watchlists/watchlist', watchlist: @watchlist