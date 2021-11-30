# == Schema Information
#
# Table name: brands
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_brands_on_name  (name) UNIQUE
#
class Brand < ApplicationRecord
  validates :name, presence: true

  has_many :movies,
    class_name: :Movie,
    foreign_key: :brand_id

  has_one_attached :button_video
  has_one_attached :page_video
  has_one_attached :image
end
