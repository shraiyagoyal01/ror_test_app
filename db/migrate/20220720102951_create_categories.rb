class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      
      t.string :name
      t.text :S_description
      t.text :L_description
      t.timestamps
    end
  end
end
