'use strict';

(function (d, w) {
  'use strict';

  var panel = d.querySelector('.panel'),
      panelBtn = d.querySelector('.menu_panel'),
      mq = w.matchMedia('(min-width: 64em)');

  function closePanel(mq) {
    return mq.matches ? panel.classList.remove('is-active') : false;
  }

  panelBtn.onclick = function (e) {
    e.preventDefault();
    panel.classList.toggle('is-active');
  };

  w.onload = closePanel(mq);
  mq.addListener(closePanel);
})(document, window);