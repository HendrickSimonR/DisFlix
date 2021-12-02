# @watchlists.each do |watchlist|
#   json.set! watchlist.id do
#     json.extract! watchlist.movie_id
#   end
# end

json.array! @watchlists

# @watchlists.each do |watchlist|
#   json.set! watchlist.id, watchlist.movie_id
# end
