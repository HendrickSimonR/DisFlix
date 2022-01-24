# == Schema Information
#
# Table name: profiles
#
#  id           :bigint           not null, primary key
#  profile_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer          not null
#
# Indexes
#
#  index_profiles_on_user_id  (user_id)
#
class Profile < ApplicationRecord
  validates :user_id, presence: true
  validates :profile_name, presence: true, uniqueness: { scope: :user_id }

  has_one_attached :avatar
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
