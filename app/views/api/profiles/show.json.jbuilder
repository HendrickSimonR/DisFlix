json.extract! @profile, :id, :profile_name, :user_id
json.avatar url_for(@profile.avatar)