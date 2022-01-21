class Avatar < ApplicationRecord
  validates :character, presence: true
  has_one_attached :image
end
