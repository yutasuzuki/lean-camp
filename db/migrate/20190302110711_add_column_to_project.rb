class AddColumnToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :deleted_at :datetime
    add_column :projects, :user_id, :bigint
  end
end
