class CreateAvatars < ActiveRecord::Migration[5.2]
  def change
    create_table :avatars do |t|
      t.string :character, null: false
      t.timestamps
    end
  end
end
