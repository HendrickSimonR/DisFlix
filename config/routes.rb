Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do  
    resources :users, only: [ :create, :show ] do
      resources :profiles, only: [ :index ]
    end
    
    resource :session, only: [ :create, :destroy ] 
    resources :watchlists, only: [ :index, :create, :destroy ]
    resources :movies, only: [ :index, :show ] 
    resources :avatars, only: [ :index, :show ]
    resources :brands, only: [ :index, :show ]
    resources :likes, only: [ :index, :create, :destroy ]
    resources :dislikes, only: [ :index, :create, :destroy ]
    resources :profiles, only: [ :create, :destroy, :update, :show ]
  end
  
  root to: 'static_pages#root'
end
