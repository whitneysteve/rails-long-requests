import React, { Component } from 'react';
import Header from '../header/Header';
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
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
          </div>
          <Toc />
        </div>
      </div>
    );
  }
}

export default App;
