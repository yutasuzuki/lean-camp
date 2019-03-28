require 'securerandom'

class Api::ProjectController < ApplicationController
  before_action :set_project
  skip_before_action :verify_authenticity_token

  def index 
    @project = Project.where(user_id: current_user.id, deleted_at: nil).order('updated_at DESC')
    render json: @project
  end

  def create
    project = Project.new
    project.name = params[:name]
    project.user_id = current_user.id
    project.slug = SecureRandom.urlsafe_base64
    project.save
    render json: project
  end

  def show
    render json: @project.find(params[:id])
  end

  def destroy
    project = Project.find(params[:id])
    project.update_attributes(deleted_at: Time.now)
    render json: project
  end

  def update
    project = @project.find(params[:id])
    project.update_attributes(name: params[:name])
    render json: project
  end

  private

  def set_project
    @project = Project.where(user_id: current_user.id)
  end
end
