require 'securerandom'

class Api::ProjectController < ApplicationController
  before_action :set_project
  skip_before_action :verify_authenticity_token

  def index 
    @project = Project.where(user_id: current_user.id, deleted_at: nil).order('updated_at DESC')
    render json: @project
  end

  def create
    puts 'create'
    project = Project.new
    project.name = params[:name]
    project.user_id = current_user.id
    project.slug = SecureRandom.urlsafe_base64
    project.save
    logger.debug project.inspect
    render json: params
  end

  def show
    render json: @project.find(params[:id])
  end

  def update
  end
  private

  def set_project
    @project = Project.where(user_id: current_user.id)
  end
end
