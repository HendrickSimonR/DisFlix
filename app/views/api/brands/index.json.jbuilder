json.array! @brands do |brand|
  json.extract! brand, :id, :name
  json.image_url url_for(brand.image)
  # json.button_video_url url_for(brand.button_video)
  # json.page_video_url url_for(brand.page_video)
end