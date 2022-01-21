class DeleteColumnFromWatchlists < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :profile_id
  end
end
