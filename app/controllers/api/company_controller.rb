class Api::CompanyController < ApplicationController
  def index 
    user = User.find(current_user.id)
    companies = user.companies.find(params[:id])

    render json: companies
  end
end
