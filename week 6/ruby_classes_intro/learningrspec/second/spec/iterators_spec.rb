require 'spec_helper'

describe "Iterators" do


	before :each do 
		@arr = [1, 2, 3, 4, 5]
	end

	#select
	describe "#select" do
		it "should select even numbers" do
			expect(@arr.select { |x| x.even?}).to eq([2,4])
		end
	end

	#reject
	describe "#reject" do
		it "should reject the number 5" do
			expect(@arr.reject{|x| x==5}).to eq([1, 2, 3, 4])
		end
	end

	#map
	describe "#map" do
		it "should return arr with twice values" do
			expect(@arr.map{ |x| x*2 }).to eq([2, 4, 6, 8, 10])
		end
	end

	#detect
	describe "#find_all" do
		it "should return odd numbered arr" do
			expect(@arr.find_all{ |x| x % 2 != 0}).to eq([1, 3, 5])
		end
	end

	
	#inject
	describe "#inject" do
		it "should add 6 to array" do
			expect(@arr.inject(1){ |x, y| x+y}).to eq(16)	
		end
	end


	#partition
	describe "#partition" do
		it "should return arr of 3 and arr of rest" do
			expect(@arr.partition{ |x| x==3}).to eq([[3], [1,2,4,5]])
		end
	end

	#sort
	describe "sort" do
		it "should sort arr" do
			expect([3,4,5,2,1].sort).to eq([1,2,3,4,5])	
		end
	end

	#one
	describe "one" do
		it "should return true" do
			expect(@arr.one? { |x| x == 5}).to eq(true)
		end
	end

	#none
	describe "none" do
		it "should return false" do
			expect(@arr.none? { |x| x == 5}).to eq(false)
		end
	end

end