export const createWatchlist = data => (
  $.ajax({
    url: '/api/watchlists',
    method: 'POST',
    data
  })
);

export const fetchWatchlist = data => {
  return $.ajax({
    url: `/api/watchlists`,
    method: 'GET',
    data
  })
};

export const deleteWatchlist = data => {
  let id = data.watchlist_id;
  
  return $.ajax({
    url: `/api/watchlists/${id}`,
    method: 'DELETE',
    data
  })
};
  