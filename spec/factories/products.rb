FactoryBot.define do
  factory :product do
    sequence(:name) {|n| "Product #{n}" }
    description { 'Lorem ipsum dolor sit amet' }
  end
end