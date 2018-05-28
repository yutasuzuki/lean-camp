class CreateLeanCanvas < ActiveRecord::Migration[5.2]
  def change
    create_table :lean_canvas do |t|
      t.bigint :user_id
      t.text :problem
      t.text :solution
      t.text :unique_value
      t.text :advantage
      t.text :customer_segments
      t.text :existing
      t.text :key_metrics
      t.text :concept
      t.text :channels
      t.text :early_adopter
      t.text :cost
      t.text :revenue

      t.timestamps
    end
  end
end
