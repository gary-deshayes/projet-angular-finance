# Projet Finance Angular

Application web permettant de recenser toutes les dernières vidéos YouTube basée sur le domaine de la finance. 

Cette application a une partie tutoriel qui liste les tutoriels en rapport avec la finance. Une partie actualités économiques vous montrera 
les derniers sujets sur l'économie. Et une partie playlist vous permet de visionner vos vidéos préférées, modifier des playlists ou bien en créer.

## Technologies

- AngularJS 7
- SCSS
- Bootstrap

#### API Utilisées
- 1forge
- Youtube
- Investing

#### Widget Utilisé
- Tradingview 

## Lancement du projet

- npm install (installe toutes les dépendances)
- ng serve --open

## Modification du scss

Tous les fichiers .scss sont importés dans le 'src > app > style.scss'. Pour le compiler, la commande est la suivante :

> sass --watch src/styles.scss:src/assets/css/styles.css
