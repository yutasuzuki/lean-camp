class AddServiceNameToLeanCanvas < ActiveRecord::Migration[5.2]
  def change
    add_column :lean_canvas, :service_name, :string
  end
end
