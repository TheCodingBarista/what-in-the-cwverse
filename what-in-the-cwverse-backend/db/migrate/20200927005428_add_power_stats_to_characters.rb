class AddPowerStatsToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :powerstats, :text
  end
end
