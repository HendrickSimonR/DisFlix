# == Schema Information
#
# Table name: dislikes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  movie_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_dislikes_on_movie_id  (movie_id)
#  index_dislikes_on_user_id   (user_id)
#
class Dislike < ApplicationRecord
  validates :user_id, :movie_id, presence: true
  validates :movie_id, uniqueness: { scope: :user_id }

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :movie,
    class_name: :Movie,
    foreign_key: :movie_id 
end
