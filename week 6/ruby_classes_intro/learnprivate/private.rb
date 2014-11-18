class Person
	attr_accessor :name, :age, :gender
	def initialize(name, age, gender)
		@name = name
		@age = age
		@gender = gender
	end
	def greet
		puts "Hi my name is #{name}."
	end

	private #omg wat is this
	def say_hi
		puts "Hello!"
	end
end

emmy = Person.new("Emmy",23,"female")
emmy.greet

