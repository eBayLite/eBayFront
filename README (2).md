******
# Readme de notre Application Web lite d'Ebay
********  
 
 
 

 > **CONTEXTE**:
 ******
    
   Dans le cadre de notre formation  Master 1 MIAGE en apprentissage, nous avons été chargés de créer une application web basée sur le même principe que le site eBay, mais qui sera une application lite, c’est-à-dire allégée par rapport l’application originale.    

    
****    
    
> 1)- Objectifs et enjeux
********
  
Cette application est une application web de ventes aux enchères, ça sera un moyen de courtage qui consiste à servir d’intermédiaire entre un acheteur et un vendeur, et ces services sont à disposition de toute personne inscrite sur le site.   
 En plus des ventes aux enchères, l’application a pour objectif d’offrir la possibilité d’achat immédiat, quelque soit l’état de l’objet.
 
******
>**Exigeances techniques**
 ******
 Afin de mener à bien notre projet, nous avons dû utiliser quelques logiciels et langages spécifiques:
 
  - ReactJS: une bibliothèque JavaScript libre développée dans le but de faciliter la création d'interfaces graphiques
  - NodeJS :Environnement d'execution orienté vers les applications réseau
  - Express: Framework standard pour construire des applications basés sur sur Node 
  - MongoDB: Système de bases de données orienté NoSQL
  ******
>**Fonctionnalités**
  ******
Notre application permettra l’implémentation de plusieurs services métiers:
  - L'utilisateur pourra se connecter/ s'inscrire à la plateforme 
  - Afficher un article
  - Ajouter un article au panier
  - Enchérir sur l'article de son choix
  - Ajouter un article à la vente
  - Créer et poster une enchère
  
 ******


# Notes!

******
  -Pour executer le front, il faut d'abord installer certaines dépendances:
 ```sh
npm install --save react-router
Puis : npm start