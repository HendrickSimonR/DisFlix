class Api::BrandsController < ApplicationController
  def index 
    @brands = Brand.all 
    render :index 
  end 
  
  def show
    @brand = Brand.find(params[:id])
    render :show
  end

  def brand_params
    params.requite(:brand).permit(:name, :button_video, :page_video, :image)
  end
end