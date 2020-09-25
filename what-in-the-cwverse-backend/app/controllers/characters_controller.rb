class CharactersController < ApplicationController
    before_action :set_character, only: [:show, :update, :destroy]
    
    def index
        characters = Character.all
        render json: characters
    end

    def show
        render json: character
    end
    
    private

    def set_character
        character = Character.find(params[:id])
    end

    def character_params
        params.require(:character).permit(:name, :alias, :known_for, :show_id)
    end
end
