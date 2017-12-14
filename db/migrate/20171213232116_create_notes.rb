class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.string :body
      t.string :color, default: 'yellow'

      t.timestamps
    end
  end
end
