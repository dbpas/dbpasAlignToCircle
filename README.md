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
    var itemsInACircle = new alignToCircle('selector', {options});
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
    var itemsInACircle = new alignToCircle('selector', {'enableGSAP': true});
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
