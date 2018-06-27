class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :company_users
  has_many :companies, through: :company_users

  def attributes_with_virtual
    attributes.merge('hoge' => hoge)
  end
end
