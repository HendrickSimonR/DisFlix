export const addLike = data => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data
  })
);

export const removeLike = data => {
  let id = data.like_id;

  return $.ajax({
    url: `/api/likes/${id}`,
    method: 'DELETE',
    data
  })
};

export const fetchLikes = data => {
  return $.ajax({
    url: '/api/likes',
    method: 'GET',
    data 
  })
};

export const addDislike = data => (
  $.ajax({
    url: '/api/dislikes',
    method: 'POST',
    data 
  }) 
);

export const removeDislike = data => {
  let id = data.dislike_id;

  return $.ajax({
    url: `/api/dislikes/${id}`,
    method: 'DELETE',
    data
  })
};

export const fetchDislikes = data => {
  // console.log('DISLIKEDATA', data);
  return $.ajax({
    url: '/api/dislikes',
    method: 'GET',
    data
  })
};