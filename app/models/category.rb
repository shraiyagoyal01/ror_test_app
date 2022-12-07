class Category < ApplicationRecord
    
   has_many :subcategories, class_name: "Category", foreign_key: "parent_id"
   belongs_to :parent, class_name: "Category", optional: true

   has_many :product_categories, dependent: :destroy
   has_many :products, through: :product_categories

end