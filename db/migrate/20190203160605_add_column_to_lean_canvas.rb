class AddColumnToLeanCanvas < ActiveRecord::Migration[5.2]
  def change
    add_column :lean_canvas, :deleted_at, :date
  end
end
