class CreateWatchlistMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist do |t|
      t.integer :movie_id, null: false 
      t.integer :user_id, null: false 
      t.timestamps
    end

    add_index :watchlist, :movie_id
    add_index :watchlist, :user_id
  end
end
