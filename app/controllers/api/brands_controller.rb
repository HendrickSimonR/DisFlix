class Api::BrandsController < ApplicationController
  def index 
    @brands = Brand.all 
    render :index 
  end 
  
  def show
    @brand = Brand.find(params[:id])
    @movies = Movie.select{ |movie| @brand.id == movie.brand_id }
    render :show
  end
end