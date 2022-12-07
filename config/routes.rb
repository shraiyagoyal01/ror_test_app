Rails.application.routes.draw do

  resources :line_items
  resources :carts
  resources :cart_items

  namespace :admin do
      get 'product/update_subcategories', as: 'update_subcategories'
      resources :users
      resources :categories
      resources :products 
      root to: "users#index"
      
    end
  
  devise_for :users
 root 'pages#home'
  resources :categories
 resources :products   
end
