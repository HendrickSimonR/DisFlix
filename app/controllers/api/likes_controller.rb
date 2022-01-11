class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = params[:user_id]
    @like.movie_id = params[:movie_id]

    if @dislike.save 
      render :create
    else 
      render json: ['Already liked!']
    end 
  end

  def index 
    @user = User.find(params[:user_id])
    @likes = @user.likes
    
    if !@likes.empty?
      render :index 
    else  
      render json: ['No likes!']
    end 
  end 

  def destroy
    @like = Like.find(params[:like_id])
    @like.destroy

    @likes = Like.where(user_id: params[:user_id])

    if !@likes.empty?
      render :index 
    else 
      render json: ['No likes!']
    end
  end
end
  