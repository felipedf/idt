Rails.application.routes.draw do
  namespace :api do
    resources :products, only: :index
  end

  get '/*path' => 'homepage#index'
  root 'homepage#index'
end
