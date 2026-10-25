-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2026 a las 05:35:43
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdpeluqueria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reghorarios`
--

CREATE TABLE `reghorarios` (
  `idRegHorario` int(11) NOT NULL,
  `idHorario` int(11) NOT NULL,
  `idTrabajador` int(11) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reghorarios`
--

INSERT INTO `reghorarios` (`idRegHorario`, `idHorario`, `idTrabajador`, `estado`) VALUES
(1, 1, 1, 'Inactivo'),
(2, 2, 1, 'Inactivo'),
(3, 3, 1, 'Inactivo'),
(4, 4, 1, 'Inactivo'),
(5, 5, 1, 'Inactivo'),
(6, 6, 1, 'Inactivo'),
(7, 7, 1, 'Inactivo'),
(8, 8, 1, 'Activo'),
(9, 9, 1, 'Activo'),
(10, 10, 1, 'Activo'),
(11, 11, 1, 'Activo'),
(12, 12, 1, 'Activo'),
(13, 13, 1, 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reghorarios`
--
ALTER TABLE `reghorarios`
  ADD PRIMARY KEY (`idRegHorario`),
  ADD KEY `idHorario` (`idHorario`),
  ADD KEY `idTrabajador` (`idTrabajador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reghorarios`
--
ALTER TABLE `reghorarios`
  MODIFY `idRegHorario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reghorarios`
--
ALTER TABLE `reghorarios`
  ADD CONSTRAINT `reghorarios_ibfk_1` FOREIGN KEY (`idHorario`) REFERENCES `horarios` (`idHorario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reghorarios_ibfk_2` FOREIGN KEY (`idTrabajador`) REFERENCES `trabajadores` (`idtrabajador`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
