require 'spec_helper'
require_relative '../book'

describe Book do
	
	before :context do
		@book = Book.new("title", "auth", "genre")
	end

	describe "A new book" do
		it "should be a new Book class instance" do
			expect(@book).to be_instance_of(Book)
		end
	end

	describe "title" do
		it "should have correct title" do
			expect(@book.title).to eq("title")
		end
	end

	describe "author" do
		it "should have correct author" do
			expect(@book.author).to eq("auth")
		end
	end

	describe "category" do
		it "should have correct genre" do
			expect(@book.category).to eq("genre")
		end
	end

	describe "book count" do
		it "should have correct book count" do
			expect(Book.count).to eql(1)
		end
	end


end