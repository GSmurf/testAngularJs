# testAngularJs
Tests d'angular pour mon switch
Pour la génération du json utilisé utiliser ce lien : http://www.objgen.com/json/models/lOH

Todo
- Pour remplacer les switchs jquery mobile je peux utiliser en angularJs : https://github.com/xpepermint/angular-ui-switch
- Charger la configuration en cours via un fichier js chargé par le code
- Coté serveur, généré ce fichier js à l'utilisation des appel ajax et retourner une réponse js
- Implémenter un système pour mettre en queue les demandes de switch on/off ! Penser à une fonction de purge si besoin avec en paramètre le timer entre chaque action en ms. Peut être faire en sorte qu'un serveur nodeJS joue la file d'attente des demandes avec log sur les 24 dernieres heures pour voir ce qui est traité. La priorité est le 24/24h de service.
- faire un system qui indique que la demande de changement d'état d'un interrupteur à bien été pris en compte et est en cours de traitement.
