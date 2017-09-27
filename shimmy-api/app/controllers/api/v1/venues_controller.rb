module Api::V1
  class VenuesController < ApplicationController
    def index
      @venues = Venue.order("created_at DESC")
      render json: @venues
    end

    def create
      @venue = Venue.create(venue_params)
      render json: @venue
    end

    def update
      @venue = Venue.find(params[:id])
      @venue.update_attributes(venue_params)
      render json: @venue
    end

    def destroy
      @venue = Venue.find(params[:id])
      if @venue.destroy
        head :no_content, status: :ok
      else
        render json: @venue.errors, status: :unprocessable_entity
      end
    end

    private

      def venue_params
        params.require(:venue).permit(:name, :address)
      end
  end
end
