class SearchController < ApplicationController

  def search_destination
      input = params[:input]
      response = RestClient::Request.execute(
      method: :get,
      url: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=#{input}&key=#{ENV['GOOGLE_PLACES_KEY']}",
      )
    render json: response
  end

  def drop_off
  end
end 