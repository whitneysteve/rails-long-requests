class Api::V1::RandomController < ApplicationController
  def index
    number = rand(1..10)
    render json: { randomNumber: number }
  end
end
