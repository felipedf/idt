class Review < ApplicationRecord
  validates :reviewer_name, presence: true
  validates :rating, presence: true

  belongs_to :product

  after_create :update_product_overall_rating

  def update_product_overall_rating
    # This allows a better performance since it is really light on the DB
    product.update(overall_rating: weighted_average)
  end

  private

  def weighted_average
    total_reviews = product.reviews.count.to_f
    return 0 if total_reviews.zero?

    (product.overall_rating * (total_reviews - 1 / total_reviews)) + (rating * (1 / total_reviews))
  end
end
