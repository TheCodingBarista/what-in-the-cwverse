class AddImageUrlToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :image_url, :string
  end
end
