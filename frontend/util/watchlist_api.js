export const createWatchlist = data => (
  $.ajax({
    url: 'api/watchlists',
    method: 'POST',
    data
  })
);

export const fetchWatchlist = data => (
  $.ajax({
    url: 'api/watchlists',
    method: 'GET',
    data
  })
);

export const deleteWatchlist = data => (
  $.ajax({
    url: 'api/lists/',
    method: 'DELETE',
    data
  })
);
  