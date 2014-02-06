var alignToCircle = function(selector, options) { 'use strict';
  //TODO: add multiple element selector, add destroy method, add reverse animation method
  
  var self = this,
      defaultOptions = {
        'animation': false,
        'enableGSAP': false,   //use greensock animation platform vs css animation
        'radius': '12em',      //distance from center
        'reverseOrder': false, //reverse order of items
        'skip': null,          //direct children to exclude from circle
        'start': -90,          //shift start from 0
        'type': 1              //circle type - 1 whole, 0.5 half, 0.25 quarter
      };
      
  self.options = extendOptions(defaultOptions, options);
  self.selector = selector || null;
  
  function camelCase(string) {
    return string.replace(/-([a-z])/ig, function(all, letter) {
      return letter.toUpperCase();
    });
  }
  
  function extendOptions(target, source) {
    target = target || {};
    
    for (var prop in source) {
      if (typeof source[prop] === 'object' && source[property] !== null) {
        target[prop] = extendOptions(target[prop], source[prop]);
      }else{
        target[prop] = source[prop];
      }
    }
      
    return target;
  }
  
  function getDOM(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }
  
  function getStylePrefix(element, prop) {
    var browserPrefixes = ['webkit', 'Moz', 'O', 'ms'];
    
    prop = camelCase(prop);
    
    if (element.style[prop] === undefined) {
      for (var i = 0; i < browserPrefixes.length; i++) {
        prop = prop.charAt(0).toUpperCase() + prop.substr(1);
        if (element.style[browserPrefixes[i] + prop ] !== undefined ) {
        
          return browserPrefixes[i] + prop;
        }
      }
    }
    
    return prop;
  }
  
  function setStyle(item, css) {
    for (var prop in css) {
      item.style[getStylePrefix(item, prop)] = css[prop];
    }
  }
  
  self.init = function() {
    var list = getDOM(self.selector),
        items = (self.options.reverseOrder) ? getDOM(self.selector + ' > :not(' + self.options.skip + ')').reverse() : getDOM(self.selector + ' > :not(' + self.options.skip + ')'),
        numberOfItems = (self.options.type === 1) ? items.length : items.length - 1, //adj for even distro of elements when not full circle
        slice = 360 * self.options.type / numberOfItems,
        timeLine = (window.TimelineLite) ? new TimelineLite({'paused': false}) : false; //check for greensock animation platform
        
    list[0].setAttribute('data-align-to-circle', '');
    
    items.forEach(function(item, index) {
      var rotate = slice * index + self.options.start,
          rotateReverse = rotate * -1,
          css = {'opacity': 1, 'transform': 'rotate(' + rotate + 'deg) translate(' + self.options.radius + ') rotate(' + rotateReverse + 'deg)'},
          delayTimer;
          
      if (self.options.animation && self.options.enableGSAP && timeLine) {
        timeLine.to(item, 0.25, css, '+=0.25');
      }else{
        if (self.options.animation) {
          item.classList.add('animate');
          delayTimer = setTimeout(function() { //give enough time for class to be added
            setStyle(item, css);
            clearTimeout(delayTimer);
          }, 50);
        }else{
          setStyle(item, css);
        }
      }
    });
  };
};
