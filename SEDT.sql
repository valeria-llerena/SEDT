-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sedt2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sedt2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sedt2` DEFAULT CHARACTER SET utf8mb3 ;
USE `sedt2` ;

-- -----------------------------------------------------
-- Table `sedt2`.`metrica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sedt2`.`metrica` (
  `idmetrica` INT NOT NULL AUTO_INCREMENT,
  `tipo` TINYINT(1) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idmetrica`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sedt2`.`objetivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sedt2`.`objetivo` (
  `idobjetivo` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(400) NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `porcentaje` FLOAT NOT NULL,
  `persona` INT NOT NULL,
  `id_metrica` INT NOT NULL,
  `fechainicio` DATETIME NOT NULL,
  `fechafin` DATETIME NOT NULL,
  `meta` VARCHAR(45) NOT NULL,
  `aceptable` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idobjetivo`),
  INDEX `fk_objetivo_persona_idx` (`persona` ASC) ,
  INDEX `fk_objetivo_metrica_idx` (`id_metrica` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sedt2`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sedt2`.`persona` (
  `dni` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `puesto` VARCHAR(45) NOT NULL,
  `foto` LONGBLOB NULL DEFAULT NULL,
  `supervisor` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`dni`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sedt2`.`progreso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sedt2`.`progreso` (
  `idprogreso` INT NOT NULL AUTO_INCREMENT,
  `fecha` VARCHAR(45) NOT NULL,
  `porcentaje` FLOAT NOT NULL,
  `idobjetivo` INT NOT NULL,
  `descripcion` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`idprogreso`),
  INDEX `fk_progreso_objetivo` (`idobjetivo` ASC) ,
  CONSTRAINT `fk_progreso_objetivo`
    FOREIGN KEY (`idobjetivo`)
    REFERENCES `sedt2`.`objetivo` (`idobjetivo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8mb3;

USE `sedt2` ;

-- -----------------------------------------------------
-- procedure sumar
-- -----------------------------------------------------

DELIMITER $$
USE `sedt2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sumar`(in A int, in id int )
BEGIN
	declare suma int; 
    set suma = (
		select porcentaje from objetivo where idobjetivo = id 
    );
    update objetivo set porcentaje = suma + A where idobjetivo = id; 
END$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
