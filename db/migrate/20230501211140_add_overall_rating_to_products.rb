class AddOverallRatingToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :overall_rating, :float, default: 0.0
  end
end
