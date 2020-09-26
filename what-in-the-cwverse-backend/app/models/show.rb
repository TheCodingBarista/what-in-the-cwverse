class Show < ApplicationRecord
    has_many :characters

    @show_ids = ["60735", "1412", "62688", "62643"]

    def self.get_shows
        @show_ids.each do |id|
            response = JSON.parse(RestClient.get("https://api.themoviedb.org/3/tv/#{id}?api_key=#{ENV['api_key']}&language=en-US").body)
            show = Show.create!(
                :title => response["name"],
                :description => response["overview"]
            )
        end
    end            
end
