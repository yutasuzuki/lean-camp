module Current
  thread_mattr_accessor :user
end

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  around_action :set_current_user
  protect_from_forgery with: :null_session

  def set_current_user
    Current.user = current_user
    yield
  ensure
    # to address the thread variable leak issues in Puma/Thin webserver
    Current.user = nil
  end     

  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  def after_sign_in_path_for(resource)
    mypage_path
  end

  def after_sign_out_path_for(resource)
    root_path
  end
end
