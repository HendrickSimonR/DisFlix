import { 
  fetchProfiles, 
  fetchProfile,
  deleteProfile,
  createProfile,
  updateProfile
} from "../util/profile_api";

export const RECEIVE_SELECTED_PROFILE = 'RECEIVE_SELECTED_PROFILE';
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const REMOVE_PROFILE_ERRORS = 'REMOVE_PROFILE_ERRORS';

export const receiveSelectedProfile = profileId => {
  return {
    type: RECEIVE_SELECTED_PROFILE,
    profileId
  }
}

export const receiveProfiles = profiles => {
  return {
    type: RECEIVE_PROFILES,
    profiles
  }
}

export const receiveProfile = profile => {
  return {
    type: RECEIVE_PROFILE,
    profile
  }
}

export const receiveProfileErrors = errors => {
  return {
    type: RECEIVE_PROFILE_ERRORS,
    errors
  }
}

export const removeProfileErrors = errors => {
  return {
    type: REMOVE_PROFILE_ERRORS,
    errors
  }
}

export const removeProfile = profileId => {
  return {
    type: REMOVE_PROFILE,
    profileId
  }
}

export const getProfiles = userId => dispatch => {
  return fetchProfiles(userId).then(
    profiles => dispatch(receiveProfiles(profiles))
  );
};

export const getProfile = profileId => dispatch => {
  return fetchProfile(profileId).then(
    profile => dispatch(receiveProfile(profile))
  );
};

export const newProfile = profileInfo => dispatch => {
  return createProfile(profileInfo).then(
    profile => { return dispatch(receiveProfile(profile)) },
    res => dispatch(receiveProfileErrors(res.responseJSON)))
};

export const destroyProfile = profileId => dispatch => {
  return deleteProfile(profileId).then( 
    () => dispatch(removeProfile(profileId))
  );
};

export const reformProfile = profileInfo => dispatch => {
  return updateProfile(profileInfo).then(
    profile => { return dispatch(receiveProfile(profile)) },
    (res) => dispatch(receiveProfileErrors(res.responseJSON)))
};
