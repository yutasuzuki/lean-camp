class Api::UserController < ApplicationController
  def index 
    u = User.find(current_user.id)
    c = u.companies

    render json: {
      :id => u.id,
      :username => u.username,
      :email => u.email,
      :companies => c,
      :created_at => u.created_at,
      :updated_at => u.updated_at
    }
  end
end
