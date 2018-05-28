class MypageController < ApplicationController
  before_action :authenticate_user!
  layout 'mypage.html'

  def index
  end
end
