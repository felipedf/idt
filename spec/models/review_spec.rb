require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:reviewer_name) }
    it { is_expected.to validate_presence_of(:rating) }

    context 'review with rating out of range' do
      let(:review) { FactoryBot.build(:review) }
      it 'refuses below one values' do
        review.rating = 0
        expect(review).not_to be_valid
      end

      it 'refuses above five values' do
        review.rating = 6
        expect(review).not_to be_valid
      end

      it 'accepts within range values' do
        review.rating = 5
        expect(review).to be_valid
      end
    end
  end

  describe 'callbacks' do
    describe 'after_create' do
      let!(:product) { FactoryBot.create(:product) }
      it 'updates the product overall rating' do
        FactoryBot.create(:review, product: product, rating: 4)
        expect(product.reload.overall_rating).to eq(4)
      end

      it 'calculates the weighted average correctly' do
        FactoryBot.create(:review, product: product, rating: 2)
        FactoryBot.create(:review, product: product, rating: 5)

        expect(product.reload.overall_rating).to eq(3.5)
      end
    end
  end
end
