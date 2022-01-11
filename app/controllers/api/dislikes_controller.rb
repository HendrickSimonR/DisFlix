class Api::DislikesController < ApplicationController
  def create
    @dislike = Dislike.new
    @dislike.user_id = params[:user_id]
    @dislike.movie_id = params[:movie_id]

    if @dislike.save 
      render :create
    else 
      render json: ['Already disliked!']
    end 
  end

  def index 
    @user = User.find(params[:user_id])
    @dislikes = @user.dislikes
    
    if !@dislikes.empty?
      render :index 
    else  
      render json: ['No dislikes!']
    end 
  end 

  def destroy
    @dislike = Dislike.find(params[:id])
    @dislike.destroy
    @dislikes = Dislike.where(user_id: params[:user_id])

    if !@dislikes.empty?
      render :index
    else  
      render json: ['No dislikes!']
    end
  end
end