-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `inventory` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'1','Java核心技术卷II','编程','凯S.霍斯特曼',95.20,'本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。',1000,'http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg'),(2,'2','深入理解计算机系统','编程','兰德尔·E·布莱恩特',136.90,'程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！',1200,'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg'),(3,'3','Effective C++','编程','梅耶',51.30,'大师名著纵横二十载，稳居任一荐书单三甲；称职程序员傍身绝学，通向C++精微奥妙之门。',1000,'http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg'),(4,'4','小王子','儿童文学','圣-埃克苏佩里',8.89,'豆瓣9.7高分推荐！旅法翻译家梅子涵之女梅思繁法文直译，舒朗大开本，央美教授高精度还原原作插画。首次收录全球舞台剧、音乐会、电影、动画片等对《小王子》的精彩诠释，通晓名作的前世今生。',1000,'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg'),(5,'5','Java编程思想','编程','Bruce Eckel',91.20,'Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。',9096,'http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg'),(6,'6','魔兽世界编年史套装(全三卷)','魔幻小说','克里斯˙梅森',449.20,'暴雪官方历时二十年编纂而成的史料！三卷《魔兽世界编年史》将呈现大量从未公布的精美原画和插图，读者在阅读故事之余，更能享受一次视觉上的饕餮盛宴，是魔兽粉丝收藏的优选。',123,'http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg'),(7,'7','三体：全三册','科幻小说','刘慈欣',50.20,'刘慈欣代表作，亚洲首部“雨果奖”获奖作品！',14414,'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg'),(8,'8','悲惨世界（上中下）（精装版）','世界名著','雨果',104.00,'《悲惨世界》是雨果在流亡期间写的长篇小说，是他的代表作，也是世界文学宝库的珍品之一。\r\n    《悲惨世界》通过冉阿让等人的悲惨遭遇以及冉阿让被卞福汝主教感化后一系列令人感动的事迹，深刻揭露和批判了19世纪法国封建专制社会的腐朽本质及其罪恶现象，对穷苦人民在封建重压下所遭受的剥削欺诈和残酷迫害表示了悲悯和同情。',388,'http://img3m7.ddimg.cn/13/15/27912667-1_u_1.jpg'),(9,'9','动物农场','社会小说','乔治·奥威尔',20.40,'也译“动物庄园”，是“一代人的冷峻良知”乔治·奥威尔经典的讽喻之作。虽然这一场荒诞的动物革命走向歧途，但正是因为这样我们才了解“把权力关进制度的笼子”的重要性。',123,'http://img3m1.ddimg.cn/82/3/25229341-1_w_2.jpg'),(10,'10','机器学习','编程','周志华',61.60,'击败AlphaGo的武林秘籍，赢得人机大战的必由之路：人工智能大牛周志华教授巨著，全面揭开机器学习的奥秘。',2525,'http://img3m0.ddimg.cn/20/24/23898620-1_w_3.jpg'),(11,'11','纳尼亚传奇','魔幻小说','刘易斯',86.20,'刘易斯基金会独家授权插图！翻译家吴岩，陈良廷，刘文澜经典译本！',123,'http://img3m7.ddimg.cn/1/32/22474387-1_u_2.jpg'),(12,'12','老人与海','世界名著','海明威',27.80,'收录诺贝尔文学奖获奖作品《老人与海》《乞力马扎罗的雪》，深深影响了马尔克斯、塞林格等文学家的创作理念。',2414,'http://img3m6.ddimg.cn/94/11/27891166-1_u_2.jpg'),(13,'13','魔力的胎动','悬疑/推理小说','东野圭吾',35.90,'喜欢《解忧杂货店》，就一定要读这本书。珍藏印签。有了想要守护的东西，生命就会变得有力量。悲凉的人生、千疮百孔的命运、一桩桩悲剧的发生与救赎，读来令人喟叹不已。',1232,'http://img3m4.ddimg.cn/68/35/28484744-2_u_6.jpg'),(14,'14','我不怕这漫长黑夜','青春文学','苑子豪',37.50,'七篇寻光故事，七种奇遇人生，送给成长路上孤独前行的你，每个人的生活都有被困在井里一样的绝望时刻，而这本书就想做点亮黑夜的那束光芒。耐心一些，保持相信，我们终会穿越漫长黑夜，抵达属于自己的黎明。',1142,'http://img3m0.ddimg.cn/9/18/28486170-1_u_8.jpg'),(15,'15','永久记录','传记文学','爱德华·斯诺登',56.70,'美国政府不想让全世界读到这本书，欧美上市当日作者便被美国司法部起诉！“棱镜门”主角爱德华·斯诺登首次亲自披露美国政府滥用NSA系统监控世界的真相，袒露从“爱国者”到“叛国者”的心路历程。',124,'http://img3m5.ddimg.cn/86/22/28475555-2_u_9.jpg'),(16,'16','探索月球','儿童文学','安妮·詹克利奥维奇',133.20,'嫦娥五号探测器系统副总设计师彭兢诚意推荐！纪念人类登月50周年，五大精妙立体机关直观呈现月球的运行轨迹，全方位揭秘人类探月登月的过程，普及基本的航天知识，与孩子一起解读月球的奥秘，种下探索宇宙的种子。',1516,'http://img3m4.ddimg.cn/13/30/28481224-1_w_3.jpg'),(17,'17','高考英语 五年高考三年模拟','中小学教辅','曲一线',70.80,'五年高考三年模拟，英语五三高考练习册，五三高中同步53全练全解，你值得拥有！',12332,'http://img3m4.ddimg.cn/62/14/27883214-1_w_2.jpg'),(18,'18','红楼梦','世界名著','曹雪芹',18.80,'中国古典小说佳作，影响整个华人世界的经典！轻松易学、国家教育部推荐读物！',2441,'http://img3m6.ddimg.cn/31/22/23828836-1_w_8.jpg'),(19,'19','草房子','儿童文学','曹文轩',22.50,'人民文学出版社天天出版社出品，经典作品，教师推荐，已有超过150000读者给予好评！',1235,'http://img3m2.ddimg.cn/32/4/23662022-1_w_9.jpg'),(20,'20','追风筝的人','世界名著','卡勒德·胡赛尼',35.30,'“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。回首前尘，我意识到在过去二十六年里，自己始终在窥视着那荒芜的小径。”',14141,'http://img3m5.ddimg.cn/26/14/25238195-1_w_3.jpg'),(21,'21','软件工程原理','编程','沈备军、陈昊鹏、陈雨亭',35.90,'从软件工程的本质出发、结合实际案例，系统全面地介绍软件过程、软件建模技术与方法及软件工程管理同时介绍一些热点新技术和新方法。',1024,'http://img3m6.ddimg.cn/32/30/1204489076-1_w_1.jpg'),(22,'22','数据库系统概念','编程','西尔伯沙茨',74.20,'本书内容丰富，不仅讨论了关系数据模型和关系语言、数据库设计过程、关系数据库理论、数据库应用设计和开发、数据存储结构、数据存取技术、查询优化方法、事务处理系统和并发控制、故障恢复技术、数据仓库和数据挖掘，而且对性能调整、性能评测标准、数据库应用测试和标准化等高级应用主题进行了广泛讨论。',244,'http://img3m2.ddimg.cn/83/5/22632572-1_w_1.jpg'),(23,'23','算法导论','编程','科尔曼',77.63,'全书选材经典、内容丰富、结构合理、逻辑清晰，对本科生的数据结构课程和研究生的算法课程都是非常实用的教材，在IT专业人员的职业生涯中，本书也是一本案头必备的参考书或工程实践手册。',144,'http://img3m8.ddimg.cn/89/15/1517005898-1_w_1.jpg'),(24,'24','史记（文白对照本）','古籍','司马迁',237.10,'荣获商务印书馆2019人文社科十大好书，张大可先生《史记》研究的集成之作，精细考证，廓清原书真伪；题解语译，展现著者史观，是一部人人都能读懂、人人都会爱读的文白对照本《史记》。',4141,'http://img3m7.ddimg.cn/14/14/27915737-1_w_3.jpg'),(25,'25','天龙八部(全五册)','武侠小说','金庸',102.30,'《天龙八部》一书以北宋、辽、西夏、大理并立的历史为宏大背景，将儒释道、琴棋书画等中国传统文化融会贯通其中，书中人物繁多，个性鲜明，情节离奇，尽显芸芸众生百态。',74747,'http://img3m2.ddimg.cn/84/17/23273202-1_w_1.jpg'),(26,'26','笑傲江湖(全四册)','武侠小说','金庸',80.10,'一部《辟邪剑谱》引发灭门血案，阴险狡诈，机关算尽，只为争霸武林，真相往往出人意表。酒后高歌磨剑，梦中快意恩仇，一曲《笑傲江湖》，传一段天荒地老。 ',2522,'http://img3m0.ddimg.cn/82/15/23273200-1_w_1.jpg'),(27,'27','楚留香传奇(全三册)','武侠小说','古龙',224.50,'《楚留香传奇》无疑乃古龙诸作中*为烩炙人口之作，此作固成就古龙之盛名，更成为武侠文学之重要里程碑。楚留香有西方007罗杰摩尔之冷静、优雅、明快及幽默，更因他没有复仇及情爱之纠葛（例如他从来不杀人）而超越007，颇有“本来无一物，何处惹尘埃”的意境。',551,'http://img3m4.ddimg.cn/4/22/1592963464-1_w_1.jpg'),(28,'28','哈利波特与魔法石','魔幻小说','J·K·罗琳',30.20,'“沉湎于虚幻的梦想，而忘记现实的生活，这是毫无益处的，千万记住。”                                ——阿不思·邓布利多',1000,'http://img3m1.ddimg.cn/88/0/25479421-1_w_1.jpg'),(29,'29','哈利·波特与死亡圣器','魔幻小说','J·K·罗琳',56.20,'两个人不能都活着，只有一个生存下来，我们中的一个将要永远离开……',1551,'http://img3m4.ddimg.cn/71/20/25479404-1_w_1.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cartid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `num` int DEFAULT '1',
  `id` int DEFAULT NULL,
  PRIMARY KEY (`cartid`)
) ENGINE=InnoDB AUTO_INCREMENT=407 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (5,1,1,2),(9,1,1,8),(10,1,1,3),(11,1,1,3),(12,1,1,1),(13,1,1,1),(14,1,1,7),(15,1,1,7),(16,1,1,29),(17,1,1,29),(18,1,1,29),(19,1,1,1),(20,1,1,1),(21,1,1,6),(22,1,1,6),(23,1,1,1),(24,1,1,1),(25,1,1,1),(26,1,1,1),(27,1,1,1),(28,1,1,1),(29,1,1,1),(30,1,1,1),(31,1,1,1),(32,1,1,1),(33,1,1,1),(34,1,1,1),(35,1,1,1),(36,1,1,1),(37,1,1,1),(38,1,1,1),(39,1,1,1),(40,1,1,1),(41,1,1,1),(42,1,1,1),(43,1,1,1),(44,1,1,1),(45,1,1,1),(46,1,1,1),(47,1,1,1),(48,1,1,1),(49,1,1,1),(50,1,1,1),(51,1,1,1),(52,1,1,1),(53,1,1,1),(54,1,1,1),(55,1,1,1),(56,1,1,1),(57,1,1,1),(58,1,1,1),(59,1,1,1),(60,1,1,1),(61,1,1,1),(62,1,1,1),(63,1,1,1),(64,1,1,1),(65,1,1,1),(66,1,1,1),(67,1,1,1),(68,1,1,1),(69,1,1,1),(70,1,1,1),(71,1,1,1),(72,1,1,1),(73,1,1,1),(74,1,1,1),(75,1,1,1),(76,1,1,1),(77,1,1,1),(78,1,1,1),(79,1,1,1),(80,1,1,1),(81,1,1,1),(82,1,1,1),(83,1,1,1),(84,1,1,1),(85,1,1,1),(86,1,1,1),(87,1,1,1),(88,1,1,1),(89,1,1,1),(90,1,1,1),(91,1,1,1),(92,1,1,1),(93,1,1,1),(94,1,1,1),(95,1,1,1),(96,1,1,1),(97,1,1,1),(98,1,1,1),(99,1,1,1),(100,1,1,1),(101,1,1,1),(102,1,1,1),(103,1,1,1),(104,1,1,1),(105,1,1,1),(106,1,1,1),(107,1,1,1),(108,1,1,1),(109,1,1,1),(110,1,1,1),(111,1,1,1),(112,1,1,1),(113,1,1,1),(114,1,1,1),(115,1,1,1),(116,1,1,1),(117,1,1,1),(118,1,1,1),(119,1,1,1),(120,1,1,1),(121,1,1,1),(122,1,1,1),(123,1,1,1),(124,1,1,1),(125,1,1,1),(126,1,1,1),(127,1,1,1),(128,1,1,1),(129,1,1,1),(130,1,1,1),(131,1,1,1),(132,1,1,1),(133,1,1,1),(134,1,1,1),(135,1,1,1),(136,1,1,1),(137,1,1,1),(138,1,1,1),(139,1,1,1),(140,1,1,1),(141,1,1,1),(142,1,1,1),(143,1,1,1),(144,1,1,1),(145,1,1,1),(146,1,1,1),(147,1,1,1),(148,1,1,1),(149,1,1,1),(150,1,1,1),(151,1,1,1),(152,1,1,1),(153,1,1,1),(154,1,1,1),(155,1,1,1),(156,1,1,1),(157,1,1,1),(158,1,1,1),(159,1,1,1),(160,1,1,1),(161,1,1,1),(162,1,1,1),(163,1,1,1),(164,1,1,1),(165,1,1,1),(166,1,1,1),(167,1,1,1),(168,1,1,1),(169,1,1,1),(170,1,1,1),(171,1,1,1),(172,1,1,1),(173,1,1,1),(174,1,1,1),(175,1,1,1),(176,1,1,1),(177,1,1,1),(178,1,1,1),(179,1,1,1),(180,1,1,1),(181,1,1,1),(182,1,1,1),(183,1,1,1),(184,1,1,1),(185,1,1,1),(186,1,1,1),(187,1,1,1),(188,1,1,1),(189,1,1,1),(190,1,1,1),(191,1,1,1),(192,1,1,1),(193,1,1,1),(194,1,1,1),(195,1,1,1),(196,1,1,1),(197,1,1,1),(198,1,1,1),(199,1,1,1),(200,1,1,1),(201,1,1,1),(202,1,1,1),(203,1,1,1),(204,1,1,1),(205,1,1,1),(206,1,1,1),(207,1,1,1),(208,1,1,1),(209,1,1,1),(210,1,1,1),(211,1,1,1),(212,1,1,1),(213,1,1,1),(214,1,1,1),(215,1,1,1),(216,1,1,1),(217,1,1,1),(218,1,1,1),(219,1,1,1),(220,1,1,1),(221,1,1,1),(222,1,1,1),(223,1,1,1),(224,1,1,1),(225,1,1,1),(226,1,1,1),(227,1,1,1),(228,1,1,1),(229,1,1,1),(230,1,1,1),(231,1,1,1),(232,1,1,1),(233,1,1,1),(234,1,1,1),(235,1,1,1),(236,1,1,1),(237,1,1,1),(238,1,1,1),(239,1,1,1),(240,1,1,1),(241,1,1,1),(242,1,1,1),(243,1,1,1),(244,1,1,1),(245,1,1,1),(246,1,1,1),(247,1,1,1),(248,1,1,1),(249,1,1,1),(250,1,1,1),(251,1,1,1),(252,1,1,1),(253,1,1,1),(254,1,1,1),(255,1,1,1),(256,1,1,1),(257,1,1,1),(258,1,1,1),(259,1,1,1),(260,1,1,1),(261,1,1,1),(262,1,1,1),(263,1,1,1),(264,1,1,1),(265,1,1,1),(266,1,1,1),(267,1,1,1),(268,1,1,1),(269,1,1,1),(270,1,1,1),(271,1,1,1),(272,1,1,1),(273,1,1,1),(274,1,1,1),(275,1,1,1),(276,1,1,1),(277,1,1,1),(278,1,1,1),(279,1,1,1),(280,1,1,1),(281,1,1,1),(282,1,1,1),(283,1,1,1),(284,1,1,1),(285,1,1,1),(286,1,1,1),(287,1,1,1),(288,1,1,1),(289,1,1,1),(290,1,1,1),(291,1,1,1),(292,1,1,1),(293,1,1,1),(294,1,1,1),(295,1,1,1),(296,1,1,1),(297,1,1,1),(298,1,1,1),(299,1,1,1),(300,1,1,1),(301,1,1,1),(302,1,1,1),(303,1,1,1),(304,1,1,1),(305,1,1,3),(306,1,1,3),(307,1,1,3),(308,1,1,3),(309,1,1,3),(310,1,1,3),(311,1,1,3),(312,1,1,3),(313,1,1,3),(314,1,1,3),(315,1,1,3),(316,1,1,3),(317,1,1,3),(318,1,1,3),(319,1,1,3),(320,1,1,3),(321,1,1,3),(322,1,1,3),(323,1,1,3),(324,1,1,3),(325,1,1,3),(326,1,1,3),(327,1,1,3),(328,1,1,3),(329,1,1,3),(330,1,1,3),(331,1,1,3),(332,1,1,3),(333,1,1,3),(334,1,1,3),(335,1,1,3),(336,1,1,3),(337,1,1,3),(338,1,1,3),(339,1,1,3),(340,1,1,3),(341,1,1,3),(342,1,1,3),(343,1,1,3),(344,1,1,3),(345,1,1,3),(346,1,1,3),(347,1,1,3),(348,1,1,3),(349,1,1,3),(350,1,1,3),(351,1,1,3),(352,1,1,3),(353,1,1,3),(354,1,1,3),(355,1,1,3),(356,1,1,3),(357,1,1,3),(358,1,1,3),(359,1,1,3),(360,1,1,3),(361,1,1,3),(362,1,1,3),(363,1,1,3),(364,1,1,3),(365,1,1,3),(366,1,1,3),(367,1,1,3),(368,1,1,3),(369,1,1,3),(370,1,1,3),(371,1,1,3),(372,1,1,3),(373,1,1,3),(374,1,1,3),(375,1,1,3),(376,1,1,3),(377,1,1,3),(378,1,1,3),(379,1,1,3),(380,1,1,3),(381,1,1,3),(382,1,1,3),(383,1,1,3),(384,1,1,3),(385,1,1,3),(386,1,1,3),(387,1,1,3),(388,1,1,3),(389,1,1,3),(390,1,1,3),(391,1,1,3),(392,1,1,3),(393,1,1,3),(394,1,1,3),(395,1,1,3),(396,1,1,3),(397,1,1,3),(398,1,1,3),(399,1,1,3),(400,1,1,3),(401,1,1,3),(402,1,1,3),(403,1,1,3),(404,1,1,3),(405,1,1,3),(406,1,1,3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order2book`
--

DROP TABLE IF EXISTS `order2book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order2book` (
  `obid` int NOT NULL,
  `id` int DEFAULT NULL,
  `orderid` int DEFAULT NULL,
  `booknum` int DEFAULT NULL,
  PRIMARY KEY (`obid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order2book`
--

LOCK TABLES `order2book` WRITE;
/*!40000 ALTER TABLE `order2book` DISABLE KEYS */;
/*!40000 ALTER TABLE `order2book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_user`
--

DROP TABLE IF EXISTS `order_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_user` (
  `orderid` int NOT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`orderid`),
  CONSTRAINT `order_user_orderdetail_Orderid_fk` FOREIGN KEY (`orderid`) REFERENCES `orderdetail` (`orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_user`
--

LOCK TABLES `order_user` WRITE;
/*!40000 ALTER TABLE `order_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `orderid` int NOT NULL,
  `ordertime` varchar(255) DEFAULT NULL,
  `orderstate` varchar(255) DEFAULT NULL,
  `orderprice` float DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'奔雷少年','奔少',NULL,NULL,0,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_auth`
--

DROP TABLE IF EXISTS `user_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_auth` (
  `userid` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`userid`),
  CONSTRAINT `user_auth_user_userid_fk` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_auth`
--

LOCK TABLES `user_auth` WRITE;
/*!40000 ALTER TABLE `user_auth` DISABLE KEYS */;
INSERT INTO `user_auth` VALUES (1,'fox','foxfox',0,0);
/*!40000 ALTER TABLE `user_auth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-16  9:20:50
