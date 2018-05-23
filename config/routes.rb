Rails.application.routes.draw do

  root to: 'top#index'
  get 'top/index'
  get 'top/show'

  get 'users', to: 'users#index'
  get 'users/show'
  devise_for :users


  get 'playground/lean_canvas'

  devise_for :models

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
