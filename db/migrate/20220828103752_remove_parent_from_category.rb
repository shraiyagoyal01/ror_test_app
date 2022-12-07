class RemoveParentFromCategory < ActiveRecord::Migration[7.0]
  def change
    remove_column :categories, :parent, :string
  end
end
