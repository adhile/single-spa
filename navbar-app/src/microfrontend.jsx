import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Navbar from './root.component';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Navbar,
  errorBoundary() {
    return <div>Navbar failed to load.</div>;
  },
});

export default lifecycles;
