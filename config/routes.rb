Rails.application.routes.draw do
  namespace :api do
    resources :products, only: :index do
      resources :reviews, controller: 'products/reviews', only: :create
    end
  end

  get '/*path' => 'homepage#index'
  root 'homepage#index'
end
