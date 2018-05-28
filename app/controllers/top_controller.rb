class TopController < ApplicationController
  def index
  end

  def show
    @lean_canvas = LeanCanva.where(user_id: current_user.id)
  end
end
