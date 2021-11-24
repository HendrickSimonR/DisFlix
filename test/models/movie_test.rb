# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  rating      :string           not null
#  runtime     :string           not null
#  title       :string           not null
#  video_url   :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  brand_id    :integer          not null
#
# Indexes
#
#  index_movies_on_title  (title)
#
require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
