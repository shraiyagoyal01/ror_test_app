Rails.application.routes.draw do
  resources :ponies
  get 'welcome/index'
  get 'welcome/update_cities', as: 'update_cities'
  get 'welcome/show'


  
end
