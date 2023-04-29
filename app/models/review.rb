class Review < ApplicationRecord
  validates :reviewer_name, presence: true
  validates :rating, presence: true
end
