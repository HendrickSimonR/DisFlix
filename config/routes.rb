Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do  
    resources :users, only: [ :create, :show ]
    resource :session, only: [ :create, :destroy ]
    resources :movies, only: [ :index, :show ] 
    resources :brands, only: [ :index, :show ]
    resources :watchlist, only: [ :index, :create, :destroy ]
  end
  root to: 'static_pages#root'
end
