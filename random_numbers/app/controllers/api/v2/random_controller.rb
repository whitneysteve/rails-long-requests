class Api::V2::RandomController < ApplicationController
  def index
    number = slow_rand
    render json: { randomNumber: number }
  end

  private

  def slow_rand()
    sleep(30)
    rand(1..10)
  end
end
