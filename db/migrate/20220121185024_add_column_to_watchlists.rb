class AddColumnToWatchlists < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :profile_id, :integer
  end
end
