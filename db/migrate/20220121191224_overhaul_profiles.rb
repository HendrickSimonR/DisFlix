class OverhaulProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :maturity_setting
    remove_column :profiles, :autoplay_next_episode 
    remove_column :profiles, :autoplay_preview
  end
end
