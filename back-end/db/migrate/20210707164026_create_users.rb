class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.text :first_name
      t.text :last_name
      t.text :street
      t.text :state
      t.text :zipcode
      t.text :telephone

      t.timestamps
    end
  end
end
