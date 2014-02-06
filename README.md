dbpasAlignToCircle
==================

Align group of elements into a circle.

###Overview
Take a group of elements and align them in a circle.

###Install
####Simple
```html
<head>
  ...
  <link rel="stylesheet" href="dbpas.aligntocircle.css">
  <script src="dbpas.aligntocircle.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function(e) {
      var itemsInACircle = new dbpasAlignToCircle('#group', {
                                 'radius': '200px',
                                 'skip': '.ignore'
                               });
      
      itemsInACircle.init();
    }, false);
  </script>
  ...
</head>
```
####With CSS Animation
```html
<head>
  ...
  <link rel="stylesheet" href="dbpas.aligntocircle.css">
  <script src="dbpas.aligntocircle.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function(e) {
      var itemsInACircle = new dbpasAlignToCircle('#group', {
                                 'animation': true,
                                 'skip': '.ignore'
                               });
      
      itemsInACircle.init();
    }, false);
  </script>
  ...
</head>
```
####With Greensock Animation Platform Support - [GSAP](http://www.greensock.com/gsap-js/)
```html
<head>
  ...
  <link rel="stylesheet" href="dbpas.aligntocircle.css">
  <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
  <script src="dbpas.aligntocircle.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function(e) {
      var itemsInACircle = new dbpasAlignToCircle('#group', {
                                 'animation': true, 
                                 'enableGSAP': true,
                                 'skip': '.ignore'
                               });
      
      itemsInACircle.init();
    }, false);
  </script>
  ...
</head>
```

###Options
####Default
|Option         |Description                                        |Type      |Default |
|---------------|---------------------------------------------------|----------|--------|
|`animation`    |Enable animation during alignment.                 |`boolean` |false   |
|`enableGSAP`   |Use greensock animation platform vs css animation. |`boolean` |false   |
|`radius`       |Distance from center, CSS units.                   |`string`  |12em    |
|`reverseOrder` |Reverse order of elements in group.                |`boolean` |false   |
|`skip`         |Direct children in group to exclude from circle.   |`string`  |null    |
|`start`        |Shift start from 0.                                |`int`     |-90     |
|`type`         |Circle type; 1 whole, 0.5 half, 0.25 quarter.      |`int`     |1       |

###Usage
Group your elements inside any block element.
```html
<body>
  ...
  <div id="group">
    <p class="ignore">Center</p>
    <p>Item 2</p>
    <p>Item 3</p>
    <p>Item 4</p>
    <p>Item 5</p>
  </div>
  ...
</body>
```
