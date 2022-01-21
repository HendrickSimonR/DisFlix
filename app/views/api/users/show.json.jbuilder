json.extract! @user, :id, :username
json.username @user.username
json.profile_ids @user.profiles.map{ |profile| profile.id} 
