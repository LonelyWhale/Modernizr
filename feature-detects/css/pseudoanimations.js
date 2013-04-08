/*!
{
  "name": "CSS Generated Content Transitions/Animations",
  "property": "csspseudoanimations",
  "tags": ["css"],
  "notes": [{
    "name": "Demo",
    "href": "http://codepen.io/Rowno/pen/rkagG"
  }]
}
!*/
define(['Modernizr', 'testStyles', 'test/css/transitions'], function (Modernizr) {
  Modernizr.addTest('csspseudoanimations', function () {
    var result = false;

    if (!Modernizr.csstransitions || !window.getComputedStyle) {
      return result;
    }

    var styles =
      '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join('transition:0s 100s;') + '}' +
      '#modernizr.trigger:before { font-size:10px; }';

    Modernizr.testStyles(styles, function (elem) {
      // Force rendering of the element's styles so that the transition will trigger
      window.getComputedStyle(elem, ':before').getPropertyValue('font-size');
      elem.className += 'trigger';
      result = window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '5px';
    });

    return result;
  });
});
