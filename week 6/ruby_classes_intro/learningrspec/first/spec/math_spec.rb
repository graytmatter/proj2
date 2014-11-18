require 'spec_helper'

describe "Testing" do 

	describe "Addition" do
		it "should do something" do
			expect(1+1).to eq(2)
		end
	end 

	describe "Subtraction" do
		it "should do something" do
			expect(4-2).to eq(2)
		end
	end

	describe "Fail" do
		it "should fail" do #add an x before 'it' to make a test pending
			expect(4-2).to_not eq(6)
		end
	end

end	

# compared to java
# describe("something", functino() {
# 	it("should do something")...etc
# 	})