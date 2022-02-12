export const fetchProfiles = data => {
  let id = data.user_id;
  
  return $.ajax({
    url: `/api/users/${id}/profiles`,
    method: "GET"
  })
};

export const fetchProfile = profileId => (
  $.ajax({
    url: `/api/profiles/${profileId}`,
    method: "GET"
  })
);

export const deleteProfile = profileId => (
  $.ajax({
    url: `/api/profiles/${profileId}`,
    method: "DELETE"
  })
);

export const createProfile = profile => {
  return $.ajax({
    url: `/api/profiles`,
    method: "POST",
    data: {
      profile: {
        profile_name: profile.profileName,
        user_id: profile.userId,
        avatar: profile.avatar
      }
    }
  })
};

export const updateProfile = profile => {
  return $.ajax({
    url: `/api/profiles/${profile.id}`,
    method: "PATCH",
    data: {
      profile: {
        id: profile.id,
        profile_name: profile.profileName,
        avatar: profile.avatar,
        avatar_modified: profile.avatarModified
      }
    }
  })
};
