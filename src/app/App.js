import React, { Component } from 'react';

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
        Hello
      </div>
    );
  }
}

export default App;
