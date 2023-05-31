-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 28 nov. 2021 à 16:57
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_dev_camp`
--

-- --------------------------------------------------------

--
-- Structure de la table `camping`
--

CREATE TABLE `camping` (
  `id_camping` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `nbr_etoille` int(11) NOT NULL,
  `nbr_place_dispo` int(11) NOT NULL,
  `nbr_place_reserve` int(11) NOT NULL DEFAULT 0,
  `prix` varchar(255) NOT NULL,
  `date_debut` varchar(255) NOT NULL,
  `date_fin` varchar(255) NOT NULL,
  `date_creation` tinytext NOT NULL DEFAULT current_timestamp(),
  `localisation` varchar(255) NOT NULL,
  `id_organisateur` int(11) NOT NULL,
  `etat` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `camping`
--

INSERT INTO `camping` (`id_camping`, `description`, `nbr_etoille`, `nbr_place_dispo`, `nbr_place_reserve`, `prix`, `date_debut`, `date_fin`, `date_creation`, `localisation`, `id_organisateur`, `etat`) VALUES
(2, 'the best way to get relexed ', 3, 8, 12, '15', '2021-12-01', '2021-12-06', '2021-11-23 21:41:23', 'beja ', 1, 0),
(3, 'camping 2', 2, 31, 12, '12', '2021-12-01', '2021-12-10', 'urrent_timestamp(', 'tuns', 1, 0),
(4, 'camping 3', 10, 31, 12, '12', '2021-12-01', '2021-12-10', 'urrent_timestamp(', 'tuns', 1, 0),
(5, 'camping 4\r\n', 15, 31, 12, '12', '2021-12-01', '2021-12-10', 'urrent_timestamp(', 'tuns', 1, 0),
(6, 'camping 5\r\n', 11, 31, 0, '12', '2021-12-01', '2021-12-10', 'urrent_timestamp(', 'tuns', 1, 0),
(7, 'the best way to get relexed ', 3, 8, 0, '15', '2021-12-01', '2021-12-06', '2021-11-24 00:30:29', 'beja ', 1, 0),
(8, 'azazaz', 14, 14, 0, '14', '2021-11-04', '2021-11-18', '2021-11-24 00:34:30', '41414', 1, 0),
(9, 'camp test', 12, 12, 0, '12', '2021-11-06', '2021-11-26', '2021-11-24 11:30:50', 'beja ', 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `condition_camp`
--

CREATE TABLE `condition_camp` (
  `id_condition` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `id_camping` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `etat_camping`
--

CREATE TABLE `etat_camping` (
  `id_etat_camping` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `etat_camping`
--

INSERT INTO `etat_camping` (`id_etat_camping`, `libelle`) VALUES
(1, 'Ouverte');

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE `image` (
  `id_image` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `id_camping` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`id_image`, `path`, `id_camping`) VALUES
(1, 'c:/img-camp/img1-datehebrgomont.png', 3);

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `id_participation` int(11) NOT NULL,
  `date_participation` varchar(255) NOT NULL,
  `valide` int(1) NOT NULL DEFAULT 0,
  `id_participant` int(11) NOT NULL,
  `id_campe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `type_user`
--

CREATE TABLE `type_user` (
  `id_type_user` int(11) NOT NULL,
  `libel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `type_user`
--

INSERT INTO `type_user` (`id_type_user`, `libel`) VALUES
(1, 'admin'),
(2, 'org');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `cin` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_passe` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `date_naissance` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `id_type_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `cin`, `photo`, `email`, `mot_passe`, `sexe`, `date_naissance`, `tel`, `id_type_user`) VALUES
(1, 'test', 'test', '14265487', 'c:/img/dalipng', 'mohem', 'ali@gmailcom', 'H', '26-11-1996', '20712744', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `camping`
--
ALTER TABLE `camping`
  ADD PRIMARY KEY (`id_camping`),
  ADD KEY `id_organisateur` (`id_organisateur`);

--
-- Index pour la table `condition_camp`
--
ALTER TABLE `condition_camp`
  ADD PRIMARY KEY (`id_condition`),
  ADD KEY `id_camping` (`id_camping`);

--
-- Index pour la table `etat_camping`
--
ALTER TABLE `etat_camping`
  ADD PRIMARY KEY (`id_etat_camping`);

--
-- Index pour la table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id_image`),
  ADD KEY `id_camping` (`id_camping`);

--
-- Index pour la table `participation`
--
ALTER TABLE `participation`
  ADD PRIMARY KEY (`id_participation`),
  ADD KEY `id_campe` (`id_campe`),
  ADD KEY `id_participant` (`id_participant`);

--
-- Index pour la table `type_user`
--
ALTER TABLE `type_user`
  ADD PRIMARY KEY (`id_type_user`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_type_user` (`id_type_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `camping`
--
ALTER TABLE `camping`
  MODIFY `id_camping` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `condition_camp`
--
ALTER TABLE `condition_camp`
  MODIFY `id_condition` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `etat_camping`
--
ALTER TABLE `etat_camping`
  MODIFY `id_etat_camping` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `image`
--
ALTER TABLE `image`
  MODIFY `id_image` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `id_participation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_user`
--
ALTER TABLE `type_user`
  MODIFY `id_type_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `camping`
--
ALTER TABLE `camping`
  ADD CONSTRAINT `camping_ibfk_3` FOREIGN KEY (`id_organisateur`) REFERENCES `user` (`id_user`);

--
-- Contraintes pour la table `condition_camp`
--
ALTER TABLE `condition_camp`
  ADD CONSTRAINT `condition_camp_ibfk_1` FOREIGN KEY (`id_camping`) REFERENCES `camping` (`id_camping`);

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`id_camping`) REFERENCES `camping` (`id_camping`);

--
-- Contraintes pour la table `participation`
--
ALTER TABLE `participation`
  ADD CONSTRAINT `participation_ibfk_1` FOREIGN KEY (`id_campe`) REFERENCES `camping` (`id_camping`),
  ADD CONSTRAINT `participation_ibfk_2` FOREIGN KEY (`id_participant`) REFERENCES `user` (`id_user`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_type_user`) REFERENCES `type_user` (`id_type_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
