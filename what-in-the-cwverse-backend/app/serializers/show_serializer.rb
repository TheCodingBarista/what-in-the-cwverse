class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :characters
  def characters 
    self.object.characters.map do |character|
      {name: character.name, 
        alias: character.alias        
      }
    end 
  end
end
