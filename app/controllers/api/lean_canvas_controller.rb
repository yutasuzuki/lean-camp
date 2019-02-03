class Api::LeanCanvasController < ApplicationController
  before_action :set_lean_canvas, only: [:show, :create]
  skip_before_action :verify_authenticity_token

  def index 
    @lean_canvas = LeanCanva.where(user_id: current_user.id, deleted_at: nil).order('updated_at DESC')
    render json: @lean_canvas
  end

  def show
    render json: @lean_canvas.find(params[:id])
  end

  def create
    puts 'create'
    lean_canvas = LeanCanva.find_or_initialize_by(id: params[:id])
    lean_canvas.user_id = current_user.id
    lean_canvas.update_attributes(lean_canvas_params)
    render json: params
  end

  def update
    puts 'update'
    puts params
  end

  def destroy
    lean_canvas = LeanCanva.find(params[:id])
    lean_canvas.update_attributes(deleted_at: Time.now)
    render json: params
  end

  private

  def set_lean_canvas
    @lean_canvas = LeanCanva.where(user_id: current_user.id)
  end

  def lean_canvas_params
    params.permit(
      :id,
      :user_id,
      :problem,
      :solution,
      :unique_value,
      :advantage,
      :customer_segments,
      :existing,
      :key_metrics,
      :concept,
      :channels,
      :early_adopter,
      :cost,
      :revenue,
      :service_name
    )
  end 
end
