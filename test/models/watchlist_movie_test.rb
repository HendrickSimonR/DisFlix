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
require 'test_helper'

class WatchlistMovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
