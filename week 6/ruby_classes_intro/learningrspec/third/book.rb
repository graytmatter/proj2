class Book
	attr_accessor :title, :author, :category
	@@count = 0
	@@library = []
	def initialize(title, author, category)
		@title = title
		@author = author
		@category = category
		@@count += 1
	end
	def self.count
		@@count
	end	
end

# gatsby = Book.new("Great Gatsby", "Fitz", "Classic")
# p Book.count
# p gatsby