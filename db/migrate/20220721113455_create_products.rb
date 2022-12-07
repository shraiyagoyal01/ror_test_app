class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :Title
      t.string :Brand
      t.string :Model
      t.string :Finish
      t.string :Category
      t.string :Condition
      t.float :Price
      t.integer :Quantity
      t.text :Description
    
      t.timestamps
    end
  end
end
