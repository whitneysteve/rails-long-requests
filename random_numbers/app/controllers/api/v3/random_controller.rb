class Api::V3::RandomController < ApplicationController
  def index
    request.env['rack.hijack'].call
    socket = request.env['rack.hijack_io']

    Thread.new do
      do_slow_task(socket)
    end

    response.close
  end

  private

  def do_slow_task(socket)
    sleep(30)
    number = rand(1..10)

    response_body = { randomNumber: number }.to_json

    send_headers(socket, response_body)
    socket.write(response_body)
  ensure
    socket.flush
    socket.close
  end

  def send_headers(socket, response_body)
    [
      "HTTP/1.1 200 OK",
      "Content-Type: application/json",
      "Content-Length: #{response_body.bytesize}"
    ].each { |header| socket.write("#{header}\r\n") }
    socket.write("\r\n")
  end
end
