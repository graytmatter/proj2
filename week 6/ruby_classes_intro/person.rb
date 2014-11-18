#====================
#   BASIC EXAMPLE
#====================
class Person
	attr_accessor :name #writes "getter" so attributes can be accessed/read; allows for "writing" 
											#(updating/addnig new atribute data)]. can only be used for instance vars.
	@@population_size = 0 #class variable
	@@population_list = []
	def initialize(name) #must be called initialize. same as the function(blah,blah) {this.blah=blah} in js
		@name = name #instance variable
		@@population_size +=1
		@@population_list << self #adds new person instance to pop list
	end
	def greet
		puts "Hello, #{@name}"
	end
	def self.population_size #allows us to access class variables outside class
		@@population_size
	end
	def self.population_list #allows us to access class variables outside class
		@@population_list
	end
end

# elie = Person.new("Elie") #in js, wouldve been var elie = new Person("Ellie")
# elie.greet
# jor = Person.new("Jorge") #in js, wouldve been var elie = new Person("Ellie")
# jor.greet
# uku = Person.new("Uku") #in js, wouldve been var elie = new Person("Ellie")
# uku.greet
# puts Person.population_list

#==================
#    EXAMPLE #2
#==================
class Animal
	attr_accessor :kind, :state
	@@zoo = []
	def initialize(kind)
		@kind = kind
		@state = "awake"
		@@zoo << self
	end
	def self.zoo
		@@zoo
	end
	def eat(food="food")
		puts "Om nom #{food}" if @state == "awake"
		puts "SLEEPING" if @state == "sleeping"
		self #allows us to call multiple methods.at.once
	end
	def wake
		puts "Already awake" if @state == "awake"
		puts "Waking up" if @state == "sleeping"
		@state = "awake"
		self
	end
	def sleep
		puts "Already asleep" if @state == "sleeping"
		puts "Good night" if @state == "awake"
		@state = "sleeping"
		self
	end
end

# dog = Animal.new("dog")
# puts dog.state
# dog.eat
# dog.wake
# dog.sleep
# puts dog.state
# dog.eat
# dog.wake

# puts "OK"

# dog.sleep.wake.eat("tacos")

#==================
#   INHERITANCE
#==================
class Car
	attr_accessor :make, :model, :year
	def initialize(make, model, year)
		@make = make
		@model = model
		@year = year
	end
	def honk
		puts "BEEEP"
	end
end

class Motorcycle < Car
	attr_accessor :color #do not need to put parent's attributes here
	def initialize(make, model, year, color)
		super(make,model,year) #effectively does the below. similar to Parent.call(vars) in js
		# @make = make 
		# @model = model
		# @year = year
		@color = color
	end
	#will be able to call parent's functions
	#eg can still call honk
	#if a different honk method is redefined here, it will override the parent class
end



