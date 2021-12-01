class Api::WatchlistController < ApplicationController
  def create
    @watchlist = Watchist.new
    @watchlist.movie_id = params[:movieId]
    @watchlist.user_id = params[:userId]
    @watchlist.save      
    @watchlists = Watchlist.where(user_id: params[:userId])
    render :index
  end
  
  def index
    @watchlists = Wacthlist.where(user_id: params[:userId])
    render :index
  end

  def destroy
    @watchlist = Watchlist.find_by(user_id: params[:userId],movie_id: params[:movieId])
    @watchlist.destroy
    @watchlists = Watchlist.where(user_id: params[:userId])
    render :index
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end