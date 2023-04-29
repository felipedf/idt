class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.text :written_review
      t.integer :rating

      t.timestamps
    end
  end
end
