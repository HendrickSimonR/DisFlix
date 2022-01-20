# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  cast        :string
#  description :text             not null
#  keywords    :text
#  rating      :string           not null
#  runtime     :string           not null
#  tags        :string           not null
#  title       :string           not null
#  topic       :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  brand_id    :integer          not null
#
# Indexes
#
#  index_movies_on_title  (title)
#
class Movie < ApplicationRecord
  validates :title, :description, :runtime, :rating, :year, :brand_id, :tags, :topic, :cast, :keywords, presence: true

  belongs_to :brands,
    class_name: :Brand,
    foreign_key: :brand_id

  has_one :like,
    class_name: :Like,
    foreign_key: :movie_id
    
  has_one :dislike,
    class_name: :Dislike,
    foreign_key: :movie_id

  has_one_attached :image 
  has_one_attached :index_movie
  has_one_attached :movie
end
