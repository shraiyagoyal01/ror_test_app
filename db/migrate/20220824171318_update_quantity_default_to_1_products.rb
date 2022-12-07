class UpdateQuantityDefaultTo1Products < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :quantity, :integer, default: 1
  end
end
