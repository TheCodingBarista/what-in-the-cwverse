class Character < ApplicationRecord
  belongs_to :show
  serialize :powerstats, Array
end