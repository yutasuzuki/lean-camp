class Api::UserController < ApplicationController
  def index 
    render json: User.find(current_user.id)
  end
end
