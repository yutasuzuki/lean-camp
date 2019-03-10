class AddProjectIdColumnToLeanCanvas < ActiveRecord::Migration[5.2]
  def change
    add_column :lean_canvas, :project_id, :bigint, :null => false
  end
end
