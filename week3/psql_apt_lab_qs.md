1)	Show all the tables. 
	
	SELECT * FROM owners, properties;

2)	Show all the users. 

	\dt

3)	Show all the data in the owners table.

	SELECT * FROM owners;

4)	Show the names of all owners.

	SELECT name FROM owners;

5)	Show the ages of all of the owners in ascending order. 

	SELECT * FROM owners ORDER BY age ASC;

6)	Show the name of an owner whose name is Donald. 

	SELECT * FROM owners WHERE name = ('Sarah');

7)	Show the age of all owners who are older than 30. 

	SELECT * FROM owners WHERE age > 30;

8)	Show the name of all owners whose name starts with an E. 

	SELECT * FROM owners WHERE name LIKE 'E%';
	
9)	Add an owner named John who is 33 years old to the owners table.

	INSERT INTO owners (name,age) VALUES ('John', 33);
	
10)	Add an owner named Jane who is 43 years old to the owners table. 

	INSERT INTO owners (name,age) VALUES ('Jane', 43);

11)	Change Jane's age to 30. 

	UPDATE owners SET age = 30 WHERE name = 'Jane';
	
12)	Change Jane's name to Janet. 

	UPDATE owners SET name = 'Janet' WHERE name = 'Jane';
	
13)	Add a property named Archstone that has 20 units. 

	INSERT INTO properties (name,num_units,owner_id) VALUES ('Archstone', 20, 1);	

14)	Delete the owner named Jane. 

	DELETE FROM owners WHERE name = 'Jane';
	
15)	Show all of the properties in alphabetical order that are not named Archstone and do not have an id of 3 or 5. 

	SELECT * FROM properties WHERE name NOT IN ('Archstone') AND property_id NOT IN (3,5) ORDER BY name ASC;

16)	Count the total number of rows in the properties table.

	SELECT count(*) FROM properties;

17)	Show the highest age of all owners.
	
	SELECT max(age) FROM owners;
	
18)	Show the names of the first three owners in your owners table.

	SELECT name FROM owners LIMIT 3;
	
19)	Create a foreign key that references the owner_id in the owners table and forces the constraint ON DELETE NO ACTION. 

	ALTER TABLE properties ADD CONSTRAINT owner_fk FOREIGN KEY (owner_id) REFERENCES owners (owner_id) ON DELETE NO ACTION;

20)	Show all of the information from the owners table and the properties table in one joined table. 

	SELECT * FROM owners JOIN properties ON owners.owner_id  = properties.owner_id 