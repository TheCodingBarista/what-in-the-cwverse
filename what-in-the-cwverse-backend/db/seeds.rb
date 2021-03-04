#Character.create([
 #   {name: 'Felicity Smoak', show: shows.second, known_for: ["intelligence", "technology"]},
 #   {name: 'John Diggle', show: shows.second, known_for: "combat"},
#])
require 'pry'
require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)
Show.destroy_all
Character.destroy_all

@show_ids = ["3", "430", "605"]

    @show_ids.each do |id|
        response = JSON.parse(RestClient.get("https://www.comicvine.com/api/series_list/?api_key=3f76c9a84c976ae891f3ae40cbb2526dd6fac07b&filter=id:#{id}&field_list=name,deck,description,image,last_episode,api_detail_url&format=json").body)
        show = Show.create!(
            :title => response["results"][0]["name"],
            :description => response["results"][0]["deck"] || response["results"][0]["description"],
            :image_url => response["results"][0]["image"]["original_url"]
        )
    end

    @arrow_ids = ["5936", "2541", "86315"]
    @flash_ids = ["22804", "11278", "107901"]
    @supergirl_ids = ["2351", "125954"]

    @arrow_ids.each do |id|
        response = JSON.parse(RestClient.get("https://www.comicvine.com/api/character/4005-#{id}/?api_key=3f76c9a84c976ae891f3ae40cbb2526dd6fac07b&field_list=real_name,powers,name,deck,image,api_detail_url&format=json").body)
        arrow_powers = []
        @arrow_powers = response["results"]["powers"]
        @arrow_powers.each do |power|
          arrow_powers << power["name"]
        end

        character = Character.create!(
            :show_id => "1",
            :name => response["results"]["real_name"],
            :alias => response["results"]["name"],
            :known_for => response["results"]["deck"],
            :powerstats => arrow_powers
        )
    end

    @flash_ids.each do |id|
        response = JSON.parse(RestClient.get("https://www.comicvine.com/api/character/4005-#{id}/?api_key=3f76c9a84c976ae891f3ae40cbb2526dd6fac07b&field_list=real_name,powers,name,deck,image,api_detail_url&format=json").body)
        flash_powers = []
        @flash_powers = response["results"]["powers"]
        @flash_powers.each do |power|
          flash_powers << power["name"]
        end

        character = Character.create!(
            :show_id => "2",
            :name => response["results"]["real_name"],
            :alias => response["results"]["name"],
            :known_for => response["results"]["deck"],
            :powerstats => flash_powers
        )
    end

    @supergirl_ids.each do |id|
        response = JSON.parse(RestClient.get("https://www.comicvine.com/api/character/4005-#{id}/?api_key=3f76c9a84c976ae891f3ae40cbb2526dd6fac07b&field_list=real_name,powers,name,deck,image,api_detail_url&format=json").body)
        super_powers = []
        @super_powers = response["results"]["powers"]
        @super_powers.each do |power|
          super_powers << power["name"]
        end
        
        character = Character.create!(
            :show_id => "3",
            :name => response["results"]["real_name"],
            :alias => response["results"]["name"],
            :known_for => response["results"]["deck"],
            :powerstats => super_powers
        )
    end