Rails.application.routes.draw do
  resources :shows, only: [:index, :show]
  resources :characters, only: [:index, :show]
  get '/test', to: 'application#test'
end
