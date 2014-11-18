class TodosController < ApplicationController
  def index
  	@todos = session[:todos] ||= []
  end
  def create 
  	session[:todos] << params[:task]
  	redirect_to todos_path
  end
  def destroy
  	# thistask = Task.find(params[:id])
  	# thistask.destroy
  	puts("PARAM "+params)
  	session[:todos] = []
  	puts "destroying!!!"
  	# reset session[:todos]
  	# # redirect_to todos_path
  	redirect_to todos_path
  end
end
