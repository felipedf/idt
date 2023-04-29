Rails.application.routes.draw do
  namespace :api do
    resource :products, only: :index
  end

  get '/*path' => 'homepage#index'
  root 'homepage#index'
end
