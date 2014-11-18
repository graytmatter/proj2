class Student < ActiveRecord::Base

	validates :first_name, :last_name,
		presence: true,
		minimum: 4

	validates :last_name, uniqueness: true

end
