class ProductSerializer < ActiveModel::Serializer
  attributes :name, :description, :thumbnail, :overall_rating
end
