class Api::WatchlistsController < ApplicationController
  def create
    @watchlist = Watchlist.new
    @watchlist.movie_id = params[:movie_id]
    @watchlist.user_id = params[:user_id]
    
    if @watchlist.save      
      render :create
    else 
      render json: ['Movie already inside watchlist!']
    end 
  end
  
  def index
    @user = User.find(params[:user_id])
    @watchlists = @user.watchlists

    if !@watchlists.empty?
      render :index
    else 
      render json: ['No watchlists!']
    end
  end

  def destroy
    @watchlist = Watchlist.find(params[:id])
    @watchlist.destroy
    @watchlists = Watchlist.where(user_id: params[:user_id])
    
    if !@watchlists.empty?
      render :index
    else 
      render json: ['No watchlists!']
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end