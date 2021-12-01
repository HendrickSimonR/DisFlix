@watchlists.each do |watchlist|
  json.set! watchlist.id, watchlist.movie_id
end