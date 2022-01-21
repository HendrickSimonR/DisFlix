class Api::AvatarsController < ApplicationController
  def index 
    @avatars = Avatar.all 
    render :index 
  end 
  
  def show
    @avatar = Avatar.find(params[:id])
    render :show
  end
end