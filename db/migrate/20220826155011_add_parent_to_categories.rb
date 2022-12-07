class AddParentToCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :parent, :integer

  end
end
