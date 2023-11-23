CREATE DATABASE  IF NOT EXISTS `cliniq_systems` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cliniq_systems`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cliniq_systems
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `AdminID` int NOT NULL AUTO_INCREMENT,
  `AdminName` varchar(16) DEFAULT NULL,
  `AdminEmail` varchar(45) DEFAULT NULL,
  `AdminPassword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`AdminID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'hihe','hihe@gmail.com','xWx5sDTh+Ljy7KWOPhAJmw==|e2c950dd320a9ce5b9bbfdb8361c8035|e0410dec10b995fbf73c9a421f79208b');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_appts`
--

DROP TABLE IF EXISTS `book_appts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_appts` (
  `AppointmentID` int NOT NULL AUTO_INCREMENT,
  `AppointmentTicketNo` varchar(255) DEFAULT NULL,
  `FullName` varchar(45) DEFAULT NULL,
  `PhoneNo` int DEFAULT NULL,
  `Doctor` varchar(45) DEFAULT NULL,
  `AppointmentTime` varchar(45) DEFAULT NULL,
  `AppointmentDate` varchar(45) DEFAULT NULL,
  `Services` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`AppointmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_appts`
--

LOCK TABLES `book_appts` WRITE;
/*!40000 ALTER TABLE `book_appts` DISABLE KEYS */;
INSERT INTO `book_appts` VALUES (9,'60deb3c8-a466-47c5-b306-236dba6b7b2b','aaa',4353,'dsf','asdf','2023-10-12','3424'),(11,'852b9017-5c8b-42d6-8e64-608deda3e21a','aaa',4534325,'mamamo','000','2023-10-11','adfasdf');
/*!40000 ALTER TABLE `book_appts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `UserFName` varchar(45) DEFAULT NULL,
  `UserLName` varchar(45) DEFAULT NULL,
  `Birthday` varchar(45) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `UserEmail` varchar(45) DEFAULT NULL,
  `UserPassword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='User Tables';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gggg','gggg','2009-10-30',22,'dasf','mB2R33/p90Ixtnxb7PKN4A==|5a474f34f84d103361ca477d21c3f3cd|75b8a6ddf00c3ae9a81226ba7a324daf'),(4,'aaa','aa','2009-10-28',22,'aa@aa.com','koLH3S8wmtRsv050jNnMhg==|c78935cb6a5805d6778968a106eb7a38|6f0f64745276d2011031b2fe1e9110e2'),(6,'11','11','2023-10-10',11,'11','B5rM1V6tvr59hMAUwqgWuA==|fc466765f1f2ae4855dd2f14a8810fa0|ef68d9125d540a8b70331f980c8dd77e'),(7,'waley','mamamo','2023-10-18',44,'waley@gmail.com','+Yq8F+j2jZOxcYUlvr5GvQ==|931d71a0b6be5106f8829b7eb9314b0e|44d499d2d38ac9c5574201570601d0e5');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cliniq_systems'
--

--
-- Dumping routines for database 'cliniq_systems'
--
/*!50003 DROP PROCEDURE IF EXISTS `usp_admin_add_or_edit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_admin_add_or_edit`(
IN _AdminID INT,
IN _AdminName VARCHAR(16),
IN _AdminEmail VARCHAR(45),
IN _AdminPassword VARCHAR(255)
)
BEGIN
	IF _AdminID = 0 THEN
		INSERT INTO admin (AdminName, AdminEmail, AdminPassword)
        VALUES(_AdminName, _AdminEmail, _AdminPassword);
	ELSE
		UPDATE admin
        SET UserFName =_AdminName, 
        AdminEmail = _AdminEmail, 
        AdminPassword = _AdminPassword
        WHERE AdminID = _AdminID;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_book_appts_add_or_edit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_book_appts_add_or_edit`(
IN _AppointmentID INT,
IN _AppointmentTicketNo VARCHAR(255),
IN _FullName VARCHAR(45),
IN _PhoneNo INT,
IN _Doctor VARCHAR(45),
IN _AppointmentTime VARCHAR(45),
IN _AppointmentDate VARCHAR(45),
IN _Services VARCHAR(45)
)
BEGIN
	IF _AppointmentID = 0 THEN
		INSERT INTO book_appts(AppointmentTicketNo, FullName, PhoneNo, Doctor, AppointmentTime, AppointmentDate, Services)
        VALUES(_AppointmentTicketNo, _FullName, _PhoneNo, _Doctor, _AppointmentTime, _AppointmentDate, _Services);
	ELSE
		UPDATE book_appts
        SET AppointmentTicketNo = _AppointmentTicketNo, 
        FullName = _FullName, 
        PhoneNo = _PhoneNo, 
        Doctor =  _Doctor, 
        AppointmentTime = _AppointmentTime, 
        AppointmentDate = _AppointmentDate,
        Services = _Services
        WHERE AppointmentID = _AppointmentID;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_user_add_or_edit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_user_add_or_edit`(
IN _UserID INT,
IN _UserFName VARCHAR(45),
IN _UserLName VARCHAR(45),
IN _Birthday VARCHAR(45),
IN _Age INT,
IN _UserEmail VARCHAR(45),
IN _UserPassword VARCHAR(255)
)
BEGIN
	IF _UserID = 0 THEN
		INSERT INTO users(UserFName, UserLName, Birthday, Age, UserEmail, UserPassword)
        VALUES(_UserFName, _UserLName, _Birthday, _Age, _UserEmail, _UserPassword);
	ELSE
		UPDATE users
        SET UserFName =_UserFName, 
        UserLName = _UserLName, 
        Birthday = _Birthday, 
        Age = _Age, 
        UserEmail = _UserEmail, 
        UserPassword = _UserPassword
        WHERE UserID = _UserID;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-15 18:16:20
