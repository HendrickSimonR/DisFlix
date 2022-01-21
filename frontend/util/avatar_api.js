export const fetchAvatars = () => (
  $.ajax({
    method: 'GET',
    url: `/api/avatars`
  })
);

export const fetchAvatar = id => (
  $.ajax({
    method: 'GET',
    url: `/api/avatars/${id}`
  })
);