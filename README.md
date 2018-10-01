# angular-pwa

Un repo hyper nul, juste pour tester workbox et implémenter background-sync...

Une API qui :
- GET : renvoie une liste de prénom,
- POST: met à jour un prénom

Une appli angular qui :
- requête la liste des prénoms
- au click sur chaque ligne de prénom : ajoute un "a" au prénom et envoie la requête de mise à jour.

## lancer les 2 containers (= *console 1*) :
`
docker-compose up
`
(RQ: ne pas ajouter -d pour observer ce qui se passe)

## lancer angular en mod dev (= *fenêtre 1*) :
- Ouvrir localhost:4200 dans chrome
- Vérifier dans la *console 1* que l'action GET est bien exécutée
- Cliquer sur un "click" et vérifier dans la *console 1* que l'action POST est bien exécutée

## builder la pwa angular :
Dans un autre onglet :
`
docker-compose exec ang npm run dist
`
--> va construire le build (récupérable en local grâce aux volumes)

## ouvrir un server depuis votre répertoire build :
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related

- Lancez l'application (en haut à gauche) => une fenêtre 200 OK s'ouvre
- Sélection le répertoire /ang/dist/ang de votre projet
- Paramétrez le port avec 1234 (dans la fenêtre qui s'ouvre)
- Fermez la fenêtre et relancez la

- Ouvrez localhost:1234 (= *fenetre 2*) dans chrome
- Vérifiez dans la *console 1* que l'action GET est bien exécutée
- Cliquez sur un "click" et vérifiez dans la *console 1* que l'action POST est bien exécutée

### Test 1 : modification sur le serveur lorsque l'appli est offline

- Ouvrez l'inspecteur de chrome
- Allez sur l'onglet "Network"
- Cochez "Offline"

- Dans *fenetre 1*, cliquez sur la ligne d'un prénom
- Rechargez *fenetre 2* => la modification n'est pas visible, mais la liste s'affiche (chargée depuis le cache)
- Vérifiez dans la *console 1* que l'action GET NE S'EST PAS EXECUTEE
- Décochez la case "Offline" et rechargez la page => la modification est visible (la page est rechargée depuis le serveur)

### Test 2 : modification locale lorsque l'appli est offline et synchronisation lorsque l'appli retrouve la connexion
- Dans *fenetre 2* , cochez la case "Offline" (Oui, on n'arrête pas !)
- Cliquez sur la ligne d'un prénom
- Vérifiez dans la *console 1* que l'action POST NE S'EST PAS EXECUTEE
- Rechargez *fenetre 1*, et vérifiez que la liste ne contient pas la modification
- Dans *fenetre 2*, décochez la case "Offline"...
- Vérifiez dans la *console 1* que l'action POST s'est éxécutée
- Rechargez *fenetre 1*, et vérifiez que la liste contient la modification




