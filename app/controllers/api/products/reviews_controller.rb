module Api
  module Products
    class ReviewsController < ApplicationController
      before_action :set_product

      def create
        @review = @product.reviews.new(review_params)

        if @review.save
          render json: @review, status: :created
        else
          render json: @review.errors.full_messages, status: :unprocessable_entity
        end
      end

      private

      def review_params
        params.require(:review).permit(:reviewer_name, :written_review, :rating)
      end

      def set_product
        @product = Product.find(params[:product_id])
      end
    end
  end
end
