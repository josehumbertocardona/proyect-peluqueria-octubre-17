-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2026 a las 05:33:02
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
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `idHorario` int(11) NOT NULL,
  `fecha` varchar(10) NOT NULL,
  `horaInicio` varchar(10) NOT NULL,
  `horaFinal` varchar(10) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`idHorario`, `fecha`, `horaInicio`, `horaFinal`, `estado`) VALUES
(1, '2026-10-10', '7:00 am', '8:00 am', 'Inactivo'),
(2, '2026-10-10', '8:00 am', '9:00 am', 'Inactivo'),
(3, '2026-10-10', '9:00 am', '10:00 am', 'Inactivo'),
(4, '2026-10-10', '10:00 am', '11:00 am', 'Inactivo'),
(5, '2026-10-10', '11:00 am', '12:00 m', 'Inactivo'),
(6, '2026-10-10', '1:00 pm', '2:00 pm', 'Inactivo'),
(7, '2026-10-10', '2:00 pm', '3:00 pm', 'Inactivo'),
(8, '2026-10-10', '3:00 pm', '4:00 pm', 'Activo'),
(9, '2026-10-10', '4:00 pm', '5:00 pm', 'Activo'),
(10, '2026-10-10', '5:00 pm', '6:00 pm', 'Activo'),
(11, '2026-10-10', '6:00 pm', '7:00 pm', 'Activo'),
(12, '2026-10-10', '7:00 pm', '8:00 pm', 'Activo'),
(13, '2026-10-10', '8:00 pm', '9:00 pm', 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`idHorario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `idHorario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
