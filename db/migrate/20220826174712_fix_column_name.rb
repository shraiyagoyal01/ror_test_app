class FixColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :categories, :S_description, :s_description
    rename_column :categories, :L_description, :l_description
  end
end
