json.brand do
  json.partial! 'api/brands/:id', brand: @brand
end