CREATE TABLE pet_inventory(id SERIAL PRIMARY KEY, name varchar(200), breed varchar(200), color varchar(200), checkedIn BOOLEAN); 

INSERT INTO pet_inventory(name, breed, color, checkedIn) VALUES('ben','retriever','golden',true);


INSERT INTO pet_inventory(name, breed, color, checkedIn) VALUES('lucy','terrier','black',false);

INSERT INTO pet_inventory(name, breed, color, checkedIn) VALUES('poe','siamese','tan',true);

INSERT INTO pet_inventory(name, breed, color, checkedIn) VALUES('mini','shorthair','gray',true);