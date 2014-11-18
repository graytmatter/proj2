class AccessController < ApplicationController
  def signup
  	@user = User.new
  end

  def login
  end

  def home
  	if (session[:user_id] == nil)
  		redirect_to signup_path, flash: { alert: "NO WAY JOSE" }
  	end
  end

  def logout
  	session[:user_id] = nil
  	redirect_to signup_path, flash: { alert: "You have successfully logged out" }
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
  		#set session to logged in state
  		session[:user_id] = @user.id
  		redirect_to home_path
  	elsif (@user.username.length < 1)
  		redirect_to signup_path, flash: { alert: "You must choose a username." }
  	else 
  		redirect_to signup_path, flash: { alert: "You must have a password." }
  	end
  end

def attempt_login
	if params[:username].present? && params[:password].present?
      found_user = User.where(username: params[:username]).first
      if found_user
         authorized_user = found_user.authenticate(params[:password])
         session[:user_id] = authorized_user.id
         redirect_to home_path
      else 
      	redirect_to signup_path, flash: { alert: "Invalid login" }
      end
	else 
		redirect_to signup_path, flash: { alert: "Please enter a username and password" }
	end
end

private
  def user_params
   params.require(:user).permit(:username, :password, :password_digest)
  end

end
