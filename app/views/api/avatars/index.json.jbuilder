json.array! @avatars do |avatar|
  json.extract! avatar, :id, :character
  json.image url_for(avatar.image)
end