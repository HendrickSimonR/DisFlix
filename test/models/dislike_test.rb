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
require 'test_helper'

class DislikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
