import { fetchAvatar, fetchAvatars } from '../util/avatar_api';

export const RECEIVE_AVATAR = 'RECEIVE_AVATAR';
export const RECEIVE_AVATARS = 'RECEIVE_AVATARS';

export const receiveAvatars = avatars => ({
  type: RECEIVE_AVATARS,
  avatars
});

export const receiveAvatar = avatar => ({
  type: RECEIVE_AVATAR,
  avatar
});


export const getAvatars = () => dispatch => {
  return fetchAvatars().then(
    avatars => dispatch(receiveAvatars(avatars))
  );
};

export const getAvatar = id => dispatch => {
  return fetchAvatar(id).then(
    avatar => dispatch(receiveAvatar(avatar))
  );
};
