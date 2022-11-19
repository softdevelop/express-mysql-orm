-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 20, 2022 at 04:05 AM
-- Server version: 8.0.31-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test2`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int NOT NULL,
  `title` varchar(256) NOT NULL,
  `content` text NOT NULL,
  `user_id` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `user_id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Title 1', 'Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 ', 1, 1, '2022-11-10 16:48:22', '2022-11-12 17:52:25'),
(2, 'Title 2', 'content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 ', 1, 1, '2022-11-10 16:48:22', '2022-11-12 17:52:25'),
(3, 'Title 3', 'Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 ', 1, 1, '2022-11-10 16:48:22', '2022-11-12 17:52:25'),
(4, 'Title 4', 'content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 content 4 ', 2, 1, '2022-11-10 16:48:22', '2022-11-12 17:52:25'),
(5, 'Title 5', 'content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 content 5 ', 2, 1, '2022-11-10 16:48:22', '2022-11-12 17:52:25');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int NOT NULL,
  `email` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `pass` varchar(16) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `pass` varchar(16) NOT NULL,
  `avata` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `pass`, `avata`, `createdAt`, `updatedAt`) VALUES
(1, 'a@gmail.com', 'a', 'abc', 'pscd.jpeg', '2022-07-22 17:24:15', '2022-11-12 17:55:01'),
(2, 'b@gmail.com', 'b', 'bc', 'HTK.png', '2022-07-22 17:24:15', '2022-11-12 17:55:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
