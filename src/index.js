import myMath from './math.js';

function component() {
  var element = document.createElement('div');
  var element = document.createElement('pre');

  element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + myMath.cube(5)
  ].join('\n\n');

    return element;
}

document.body.appendChild(component());