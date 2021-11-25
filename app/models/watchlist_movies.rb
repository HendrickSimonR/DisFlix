# == Schema Information
#
# Table name: watchlist_movies
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  movie_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_watchlist_movies_on_movie_id  (movie_id)
#  index_watchlist_movies_on_user_id   (user_id)
#
class WatchlistMovies < ApplicationRecord
  validates :user_id, :movie_id, presence: true, uniqueness: true

  belongs_to :user,
    class_name: :User,
    foreign_id: :user_id

  belongs_to :movie,
    class_name: :Movie,
    foreign_id: :movie_id 
end
