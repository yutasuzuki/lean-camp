class AddColumnToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :user_id, :bigint
  end
end
