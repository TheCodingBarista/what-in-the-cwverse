class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :alias, :known_for, :show
  def show
    {show_id: self.object.show.id, 
     show_name: self.object.show.title,
    show_description: self.object.show.description}
  end
end
