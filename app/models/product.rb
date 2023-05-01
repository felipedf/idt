class Product < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :reviews, dependent: :destroy

  def overall_rating
    reviews.count.zero? ? 0 : reviews.pluck(:rating).sum / reviews.count
  end
end
