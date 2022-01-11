class CreateDislikes < ActiveRecord::Migration[5.2]
  def change
    create_table :dislikes do |t|
      t.integer :movie_id, null: false 
      t.integer :user_id, null: false 
      t.timestamps
    end

    add_index :dislikes, :movie_id
    add_index :dislikes, :user_id
  end
end
