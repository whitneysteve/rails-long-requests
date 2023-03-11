Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :random, only: [ :index ]
    end

    namespace :v2 do
      resources :random, only: [ :index ]
    end

    namespace :v3 do
      resources :random, only: [ :index ]
    end

    namespace :v4 do
      resources :random, only: [ :index ]
    end
  end
end
