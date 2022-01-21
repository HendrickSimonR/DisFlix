class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      @intro_profile = Profile.create!(user_id: @user.id, profile_name: "Mickey", maturity_setting: "NC-17", autoplay_next_episode: true, autoplay_preview: true)
      avatar = open("#{Rails.root}/app/assets/images/mickey.png")
      @intro_profile.avatar.attach(io: avatar, filename: "mickey.png")
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
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
    params.require(:user).permit(:username, :password)
  end
end
