class User < ActiveRecord::Base
	#validates_presence_of :first_name
	#validates_presence_of :last_name

	#validates :first_name, presence: true

	validates :first_name, :last_name,
		presence: true,
		uniqueness: true

end
