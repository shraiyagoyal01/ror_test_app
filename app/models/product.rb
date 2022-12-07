class Product < ApplicationRecord

    before_destroy :not_referenced_by_any_line_item
    has_many :product_categories, dependent: :destroy
    has_many :categories, through: :product_categories

    has_many :line_items
    mount_uploader :image, ImageUploader
    serialize :image, JSON


    validates :title, presence: true
    validates :description, presence: true, length: { minimum: 10, maximum: 300 }
    validates :brand, presence: true 
    validates :model, presence: true 
    validates :finish, presence: true
    validates :condition, presence: true
    validates :price, presence: true
    validates :quantity, presence: true

    private

    def not_referenced_by_any_line_item
        unless line_items.empty?
            error.add(:base, "Line Items Present")
            throw :abort
        end    
    end   

end


