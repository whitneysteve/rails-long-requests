import me from '../img/me.jpg';
import React, { Component } from 'react';
import ruby from '../img/ruby.svg';

/**
 * The title component.
 */
class Header extends Component {
  render() {
    return (
      <div className="Header" id="Header">
        <h1>Long Running Requests on Rails</h1>
        <div className="Header-Author">
          <img alt="Me" src={ me } />
          <img alt="Stylized Ruby logo" src={ ruby } />
          <p>Written by <a href="http://whitney.ie">Stephen Whitney</a>, 11th March 2023</p>
        </div>
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
