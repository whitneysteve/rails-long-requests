import Conclusion from '../conclusion/Conclusion';
import React, { Component } from 'react';
import Header from '../header/Header';
import Implementation from '../implementation/Implementation';
import Intro from '../intro/Intro';
import Scenario from '../scenario/Scenario';
import SocketHijacking from '../sockethijacking/SocketHijacking';

/**,
 * The main driver and parent container for the app.
 */
class App extends Component {
  componentDidMount() {
    const appHeight = () => {
      document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  }

  render() {
    return (
      <div className="App" id="App">
        <div>
          <Header />
          <Intro />
          <SocketHijacking />
          <Scenario />
          <Implementation />
          <Conclusion />
        </div>
      </div>
    );
  }
}

export default App;
