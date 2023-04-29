# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
8.times do |i|
  Product.create(
    name: "Product #{i + 1}",
    description: "This is the description for product #{i + 1}, which is really cool! It's a great product. You should buy it.",
    thumbnail: "https://picsum.photos/seed/#{i + 1}/200",
  )
end