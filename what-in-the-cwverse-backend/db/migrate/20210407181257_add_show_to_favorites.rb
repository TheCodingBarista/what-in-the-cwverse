class AddShowToFavorites < ActiveRecord::Migration[6.0]
  def change
    add_reference :favorites, :show, null: false, foreign_key: true
  end
end
