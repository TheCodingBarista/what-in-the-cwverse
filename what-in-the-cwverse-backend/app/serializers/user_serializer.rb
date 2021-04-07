class UserSerializer < ActiveModel::Serializer
  attributes :id, :shows, :favorites
end
