# TP1 : Bases de données Réparties

Dossier de remise du TP 1 de base de données répartie. Par Antoine Demon & Georges Cosson.

Le code source de chaque question est dans les dossiers suivants : [scrapping](https://github.com/stressgc/TP1_DataBase/tree/master/scrapping), [mapReduce](https://github.com/stressgc/TP1_DataBase/tree/master/mapreduce), [pageRank](https://github.com/stressgc/TP1_DataBase/tree/master/pagerank).

Afin d'installer notre projet :
```
git clone git@github.com:stressgc/TP1_DataBase.git localname
cd localname
npm install

```

## Question 1

Pour lancer le scrapping de la question 1: 
```
cd path/to/project
node scrapping
```
Attention ! Parfois les requêtes HTTP se font timeout !

Pour lancer le mapReduce sur les sorts fraichements trouvés :
```
cd path/to/project
node mapreduce
```
La sortie de cet algorithme se trouve dans la nouvelle collection MongoDB : "filtered_spells".

## Question 2

Pour lancer le calcul du PageRank :

```
cd path/to/project
node pagerank
```

La sortie de cet algorithme se trouve dans la nouvelle collection MongoDB : "reduced".