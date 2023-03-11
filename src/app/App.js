import React, { Component } from 'react';
import Header from '../header/Header';
import Intro from '../intro/Intro';
import SocketHijacking from '../sockethijacking/SocketHijacking';
import Toc from '../toc/Toc';

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
        <Header />
        <div className="Section Layout">
          <div className="Content">
            <Intro />
            <SocketHijacking />
          </div>
          <Toc />
        </div>
      </div>
    );
  }
}

export default App;
