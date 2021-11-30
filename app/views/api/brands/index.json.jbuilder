json.array! @brands do |brand|
  json.extract! brand, :id, :name
  json.button_video_url url_for(brand.button_video)
  json.page_video_url url_for(brand.page_video)
  json.image_url url_for(brand.image)
end