class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :rating, null: false
      t.string :runtime, null: false
      t.integer :brand_id, null: false 
      t.integer :year, null: false
      t.string :tags, null: false 
      t.timestamps
    end

    add_index :movies, :title
  end
end
