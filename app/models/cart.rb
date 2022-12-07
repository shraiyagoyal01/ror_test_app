class Cart < ApplicationRecord
    has_many :line_items, dependent: :destroy


    def add_product(product, quantity)
  
      current_item = LineItem.find_by(product_id: product.id)
      if current_item
          current_item.quantity = current_item.quantity.to_i + quantity.to_i
      else
          current_item = line_items.build(product_id: product.id, quantity: quantity)
      end
      current_item
    end
      

  def total_price
    line_items.to_a.sum { |item| item.total_price }
  end

end

