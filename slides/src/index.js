import React from 'react';
import ReactDOM from 'react-dom';

import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';


function renderApp() {
  ReactDOM.render(<Presentation />, document.getElementById("root"))
}

renderApp()

if (module.hot) {
  module.hot.accept(["./presentation"], () => {
    renderApp()
  })
}

registerServiceWorker();
