class AddKeywordsColumnToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :keywords, :text
  end
end
