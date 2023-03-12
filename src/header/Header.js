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
          Welcome to my blog post! This is a post on how to handle long running requests in Rails.
        </p>
        <p>
          Along with <a href="https://whitneysteve.github.io/rails-long-requests/">this blog post</a> there is an
          accompanying <a href="https://github.com/whitneysteve/rails-long-requests">GitHub repository</a> with the Ruby source code and the source code for this blog.
        </p>
        <h2>
          Contents
        </h2>
        <p>
          In this blog post we will:
        </p>
        <ul>
          <li>Chat about what Ruby on Rails is and how it handles requests</li>
          <li>Cover why are long running requests a problem for Rails and how well Rails scales in these scenarios</li>
          <li>Introduce Socket Hijacking and how can it help scale Rails with long-running requests</li>
          <li>Walk through a sample project that has introduced a long running request type and reproduce the problems</li>
          <li>Implement socket hijacking and observe the results</li>
        </ul>
      </div>
    );
  }
}

export default Header;
