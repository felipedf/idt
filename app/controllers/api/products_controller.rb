class Api::ProductsController < ApplicationController
  def index
    products = Product.all.order(created_at: :desc)
    render json: products
  end
end
