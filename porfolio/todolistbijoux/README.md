# Consignes

- Intégrer la maquette d’une page Web en prenant comme support les maquettes fournies en annexe.

- L'utilisation de frameworks CSS n'est pas autorisée.

# HTML

- Le code HTML doit être mis dans le fichier `./index.html`.

# CSS

- Le code CSS doit être mis dans le fichier `./styles/main.css`.

- Il est conseillé de suivre la **convention de nommage CSS** basée sur le **[BEM](http://getbem.com/)**, suivante :

```
The _ are duplicated, in the same way as the -, because this corresponds to a CSS naming standardization which makes possible to clearly distinguish the elements by properly hierarchizing the DOM items. This is the standardization BEM (a little customized) and is described below.

Class with a simple name:
.class

Class with a compound name:
.my-class

Class with a simple name, having a modifier with a simple name:
.class--modifier

Class with a simple name, having a modifier with a compound name:
.class--modifier-1
.class--modifier-2
.class--modifier-3

Class with a compound name, having a modifier with a compound name:
.my-class--modifier-1
.my-class--modifier-2
.my-class--modifier-3

Child class with a simple name, of a parent class with a simple name:
.parent__child

Child class with a compound name, of a parent class with a compound name:
.parent-class__child-class

Child class with a simple name, having a modifier with a simple name, of a parent class with a simple name:
.parent__child--modifier

Child class with a simple name, having a modifier with a compound name, of a parent class with a simple name:
.parent__child--modifier-1
.parent__child--modifier-2
.parent__child--modifier-3

Child class with a compound name, having a modifier with a compound name, of a parent class with a compound name:
.parent-class__child-class--modifier-1
.parent-class__child-class--modifier-2
.parent-class__child-class--modifier-3
```

- Le **[Reset CSS de Eric Meyer](https://meyerweb.com/eric/tools/css/reset/)** est intégré au site via le fichier `./styles/reset.css`.

- La bibliothèque `./styles/lib.css` contient **trois composants CSS de base** qu'il est vivement conseillé d'utiliser pour gagner du temps, et dont un exemple pour chacun d'eux est fourni sur la page `./index.html` :

  - `.image`

  - `.text--oneline` ou `.text--wrap`

  - `.collection--horizontal` ou `.collection--vertical`.

# Images

- Toutes les images sont fournies et disponibles dans le répertoire `./images/`.

# Icônes

- Pour les icônes, **[Font Awesome](https://fontawesome.com/)** est intégré au site en **version gratuite** et un exemple est fourni sur la page `./index.html`. Pour consulter la **liste des icônes** disponibles, se rendre sur **[la page dédiée du site officiel](https://fontawesome.com/icons)**.

# Polices

- La page du site est réalisée avec la police **[Roboto de Google](https://fonts.google.com/specimen/Roboto)**.

# Thème

- Les couleurs sont accessibles par des **variables CSS** déclarées dans le fichier `./styles/theme.css`.

- Codes Hex des couleurs principales du thème :
  - #e7a200
  - #cf0b17.

---

## Crédits

### Valentin Flamand

- vf.dev@sent.com

- [GitHub](https://github.com/ValentinFlamand)

- [LinkedIn](https://www.linkedin.com/in/valentinflamand/)
