class CharactersController < ApplicationController
    def index
        render json: Character.all
    end

    def show
        render json: Character.find(params[:id])
    end
end
