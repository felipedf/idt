class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :thumbnail, :overall_rating
end
