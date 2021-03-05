class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :characters
  def characters 
    self.object.characters.map do |character|
      { name: character.name, 
        alias: character.alias,
        known_for: character.known_for,
        powerstats: character.powerstats
      }
    end 
  end
end
