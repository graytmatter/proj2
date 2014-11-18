class PlanesController < ApplicationController

	def index
		@planes = Plane.all
	end

	def new
		@plane = Plane.new
	end

	def create
		plane = params[:planes].permit(:name, :kind, :description)
		Plane.create plane
		redirect_to '/planes'
	end

	def show
		@plane = Plane.find params[:id]
	end
end