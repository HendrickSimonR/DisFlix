export const createUser = user => (
 $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const getUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

