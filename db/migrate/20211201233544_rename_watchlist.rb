class RenameWatchlist < ActiveRecord::Migration[5.2]
  def change
    rename_table :watchlist, :watchlists
  end
end
