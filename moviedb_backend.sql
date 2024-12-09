-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb;

-- -----------------------------------------------------
-- Table `mydb`.`Favourites list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Favourites_list (
  listId INT NOT NULL,
  userId VARCHAR(45) NOT NULL,
  PRIMARY KEY (listId, userId),
  CONSTRAINT idFavourites_list_UNIQUE UNIQUE (listId),
  CONSTRAINT Favourites_listcol_UNIQUE UNIQUE (userId)
);


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.User (
  userId INT NOT NULL,
  username VARCHAR(45) NULL,
  Favourites_list_listId INT NOT NULL,
  PRIMARY KEY (userId, Favourites_list_listId),
  CONSTRAINT idUser_UNIQUE UNIQUE (userId),
  CONSTRAINT Usercol_UNIQUE UNIQUE (username),
  CONSTRAINT fk_User_Favourites_list FOREIGN KEY (Favourites_list_listId)
    REFERENCES mydb."Favourites_list" (listId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);


-- -----------------------------------------------------
-- Table `mydb`.`Movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Movies (
  movieId INT NOT NULL,
  movieTitle VARCHAR(45) NOT NULL,
  relaseDate VARCHAR(45) NULL,
  movieGenre VARCHAR(45) NULL,
  movieDescription VARCHAR(45) NULL,
  screeningTime VARCHAR(45) NULL,
  PRIMARY KEY (movieId, movieTitle)
);


-- -----------------------------------------------------
-- Table `mydb`.`Favourite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Favourite (
  Movies_idMovies INT NOT NULL,
  Favourites_list_listId INT NOT NULL,
  PRIMARY KEY (Movies_idMovies, Favourites_list_listId),
  CONSTRAINT fk_Favourite_Movies1 FOREIGN KEY (Movies_idMovies)
    REFERENCES mydb."Movies" (movieId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Favourite_Favourites_list1 FOREIGN KEY (Favourites_list_listId)
    REFERENCES mydb."Favourites list" (listId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);



-- -----------------------------------------------------
-- Table `mydb`.`Group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Group (
  idGroup INT NOT NULL,
  GroupName VARCHAR(45) NOT NULL,
  owner VARCHAR(45) NULL,
  PRIMARY KEY (idGroup, GroupName)
);


-- -----------------------------------------------------
-- Table `mydb`.`GroupMembers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.GroupMembers (
  idGroupMembers VARCHAR(45) NOT NULL,
  userId INT NOT NULL,
  groupId VARCHAR(45) NULL,
  Group_idGroup INT NOT NULL,
  PRIMARY KEY (idGroupMembers, userId, Group_idGroup),
  CONSTRAINT fk_GroupMembers_User1 FOREIGN KEY (userId)
    REFERENCES mydb."User" (userId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_GroupMembers_Group1 FOREIGN KEY (Group_idGroup)
    REFERENCES mydb."Group" (idGroup)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);