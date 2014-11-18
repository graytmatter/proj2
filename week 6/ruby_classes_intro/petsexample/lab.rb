require_relative 'dog' #when lab.rb is run, it will run through dog.rb also

class Lab < Dog
	attr_accessor :name
	def initialize(breed,name)
		super(breed)
		@name = name
	end
end

