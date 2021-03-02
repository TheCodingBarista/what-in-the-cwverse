class Show < ApplicationRecord
    has_many :characters

    @show_ids = ["3", "430", "605", "616"]

    def self.get_shows
        @show_ids.each do |id|
            response = JSON.parse(RestClient.get("https://www.comicvine.com/api/series_list/?api_key=3f76c9a84c976ae891f3ae40cbb2526dd6fac07b&filter=id:#{id}&field_list=name,deck,description,image,last_episode,api_detail_url&format=json").body)
            show = Show.create!(
                :title => response["results"][0]["name"],
                :description => response["results"][0]["deck"] || response["results"][0]["description"]
            )
        end    
    end            
end
