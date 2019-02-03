class TopController < ApplicationController 
  def index
    if user_signed_in? 
      redirect_to(mypage_path)
    end
  end

  def show
    @lean_canvas = LeanCanva.where(user_id: current_user.id)
  end
end
