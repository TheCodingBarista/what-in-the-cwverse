class ShowsController < ApplicationController
    def index
        render json: Show.all
    end

    def show
        render json: Show.find(params[:id])       
    end
end
