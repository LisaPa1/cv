import React, { Component } from "react";

class Pres extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="mainItem">
          <h2>Compétences :</h2>
          <ul>
            <li>React (Redux, Context, Hooks)</li>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Git - Github / Bitbucket</li>
            <li>HTML / CSS / Bootstrap / Material-UI</li>
            <li>Méthode Agile - SCRUM</li>
          </ul>
        </div>

        <div className="mainItem">
          <h2>Expériences professionnelles</h2>
          <h3>Full time mom</h3>
          <p>Septembre 2021 à ce jour</p>
          <p>Congé parental</p>
        </div>
        <div className="mainItem">
          <h3>Développeuse Front-End</h3>
          <p>Janvier 2020 - Août 2021</p>
          <p>Fulll, Groupe InExtenso - Lyon, France</p>
          <p>Éditeur de logiciels pour les experts comptables</p>
          <ul>
            <li>Réalisation d’une application dédiée au domaine de la paie</li>
            <li>Développement d’une bibliothèque de composants UI</li>
            <li>Mise en place des tests fonctionnels et techniques</li>
          </ul>
        </div>
        <div className="mainItem">
          <h3>Développeuse Front-End</h3>
          <p>Février 2019 - Septembre 2019</p>
          <p>Aixia Systèmes - Limonest, France</p>
          <p>Éditeur de logiciel spécialisé dans la location de véhicules</p>
          <ul>
            <li>Réalisation des composants Front-End en React</li>
            <li>Réalisation des modules Node.js pour le Back-End de l'application</li>
            <li>Mise en place d'une API gateway avec Node.js</li>
            <li>Application structurée en micro-services</li>
          </ul>
        </div>
        <div className="mainItem">
          <h3>Projets étudiants Wild Code School</h3>
          <p>
            Projet 3 : réalisation en mode{" "}
            <span className="keyWords">Agile</span> d’une application permettant
            de retrouver des activités nature dans la région de Loire, pour
            l'association Loire En Vert. Aujourd'hui l'application est disponble sur le PlayStore.
          </p>
          <p>
            Projet 2 : réalisation du projet en mode{" "}
            <span className="keyWords">Agile</span>, développement d’un site jeu
            vidéo en <span className="keyWords">React</span> avec la possibilité
            de jouer à deux ou en tournoie
          </p>
          <p>
            Hackathon : un <span className="keyWords">site mobile</span> sur le
            thème d'Halloween, réalisé à l’aide d’
            <span className="keyWords">Angular</span> et d'
            <span className="keyWords">API</span> Open Street Map
          </p>
          <p>
            Projet 1 : un site portfolio professionnel responsive avec{" "}
            <span className="keyWords">Bootstrap</span>
          </p>
        </div>
        <div className="mainItem">
          <h3>Hôtesse d'accueil en entreprise</h3>
          <p>Avril 2015 - Novembre 2017</p>
          <p>Sociétés TNT et Euronews - Lyon, France</p>
        </div>
        <div className="mainItem">
          <h3>Chef de projet SEA</h3>
          <p>Mai 2013 - Septembre 2014</p>
          <p>
            Promishift, agence web spécialisée en référencement payant -
            Ekaterinbourg, Russie
          </p>
          <ul>
            <li>
              Création et gestion de campagnes digitales GoogleAdWords et
              YandexDirect
            </li>
            <li>
              Compréhension des besoins des clients et définition des actions,
              maîtrise des coûts et des délais
            </li>
            <li>
              Analyse des données et réalisation des rapports statistiques{" "}
            </li>
            <li>Identification des opportunités et recherche des solutions</li>
          </ul>
        </div>
        <div className="mainItem">
          <h3>Assistante chef de projet</h3>
          <p>Septembre 2011 - Avril 2013</p>
          <p>
            Serenity Project, agence de communication globale - Lyon, France
          </p>
          <ul>
            <li>Participation à l’élaboration des stratégies digitales</li>
            <li>
              Rédaction de contenus web avec l’application des règles du
              référencement éditoriale
            </li>
            <li>Intégration de contenus sur les sites</li>
          </ul>
        </div>

        <div className="mainItem">
          <h2>Formation</h2>
          <h3>Développement Web - JavaScript</h3>
          <p>Wild Code School de Lyon</p>
          <p>Septembre 2018 - Janvier 2019</p>
        </div>
        <div className="mainItem">
          <h3>Marketing digital</h3>
          <p>Licence Professionnelle - IUT Jean Mouli Lyon III</p>
          <p>2011 - 2012, alternance</p>
        </div>
      </div>
    );
  }
}

export default Pres;
