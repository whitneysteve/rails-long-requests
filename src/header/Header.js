import React, { Component } from 'react';

/**
 * The title component.
 */
class Header extends Component {
  render() {
    return (
      <div className="Header" id="Header">
        <h1>Long Running Requests on Rails</h1>
        <p>
          Welcome to my blog post! This is a tutorial on how to handle long running requests in Rails. This tutorial
          will walk you through why long running requests are a problem in Rails and how to handle them in a scalable
          fashion.
        </p>
        <p>
          Along with <a href="https://whitneysteve.github.io/rails-long-requests/">this blog post</a> there is an
          accompanying <a href="https://github.com/whitneysteve/rails-long-requests">GitHub repository</a> with the Ruby source code and the source code for this blog.
        </p>
      </div>
    );
  }
}

export default Header;
