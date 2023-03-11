class Api::V2::RandomController < ApplicationController
  def index
    sleep(30)
    number = rand(1..10)
    render json: { randomNumber: number }
  end
end
