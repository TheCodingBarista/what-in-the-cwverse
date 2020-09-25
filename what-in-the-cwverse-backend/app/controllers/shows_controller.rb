class ShowsController < ApplicationController
    before_action :set_show, only: :show
    
    def index
        shows = Show.all
        render json: shows
    end

    def show
        render json: @show      
    end

    private

    def set_show
        @show = Show.find(params[:id])
    end

    def show_params
        params.require(:show).permit(:title, :description)
    end
end
