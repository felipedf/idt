class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :product, foreign_key: true
      t.string :reviewer_name
      t.text :written_review
      t.integer :rating

      t.timestamps
    end
  end
end
