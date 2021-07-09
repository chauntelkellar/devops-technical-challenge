require 'faker'

100.times do
  User.create(first_name: Faker::Name.unique.first_name,
              last_name: Faker::Name.unique.last_name,
              username: "#{Faker::Cannabis.medical_use.gsub(/\s/, '-')}_#{Faker::Hipster.word}",
              street: Faker::Address.street_address,
              state: Faker::Address.state,
              zipcode: Faker::Address.zip_code,
              telephone: Faker::PhoneNumber.cell_phone_in_e164)
end
