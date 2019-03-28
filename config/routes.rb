Rails.application.routes.draw do

  root to: 'top#index'

  get 'mypage', to: 'mypage#index'
  get 'mypage/*path', to: 'mypage#index'

  get 'users', to: 'users#index'
  get 'users/show'

  get 'privacy', to: 'privacy#index'
  get 'term', to: 'term#index'

  get 'playground/lean_canvas'

  devise_for :users
  devise_for :models

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  namespace :api, { format: 'json' } do
    resources :project, :only => [:index, :create, :show, :update, :destroy]
    resources :company, :only => [:index]
    resources :lean_canvas, :only => [:index, :create, :show, :update, :destroy]
    resources :user, :only => [:index, :update]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
