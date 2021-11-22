class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def show
    @user = selected_user
    if @user
      render :show
    else
      render json: ['An error occurred'], status: 400
    end
  end
  
  private
  
  def selected_user
    User.find_by({id: params[:id]})
  end
  
  def user_params
    params.require(:user).permit(:username, :email, :password, :confirm_password)
  end
end
