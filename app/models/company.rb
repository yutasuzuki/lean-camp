class Company < ApplicationRecord
  has_many :company_users
  has_many :users, through: :company_users
  accepts_nested_attributes_for :company_users
end
