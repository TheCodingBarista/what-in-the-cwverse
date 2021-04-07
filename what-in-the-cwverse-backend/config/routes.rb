Rails.application.routes.draw do
  resources :favorites
  resources :users
  resources :shows, only: [:index, :show]
  resources :characters, only: [:index, :show]
end
