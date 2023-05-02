FactoryBot.define do
  factory :review do
    association :product
    reviewer_name { 'user name' }
    rating { rand(1..5) }
    written_review { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  end
end