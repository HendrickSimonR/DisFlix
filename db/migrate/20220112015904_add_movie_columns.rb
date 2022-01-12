class AddMovieColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :tags, :string 
    add_column :movies, :topic, :string
  end
end
