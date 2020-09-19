class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :alias
      t.string :known_for
      t.references :show, null: false, foreign_key: true

      t.timestamps
    end
  end
end
