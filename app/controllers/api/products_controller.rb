module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.all.order(created_at: :desc)
      render json: @products, status: :ok
    end
  end
end
