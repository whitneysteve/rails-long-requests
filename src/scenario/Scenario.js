import Code from '../code/Code';
import React, { Component } from 'react';

/**
 * The Scenario component. Contains the explanation of the scenario we're going to be working through.
 */
class Scenario extends Component {
  render() {
    return (
      <>
        <h2>Scenario</h2>
        <h3>The Rails application</h3>
        <p>
          For exploratory purposes let's come up with a scenario that we can experiment with. Lets say we have a Rails project that:
        </p>
        <ol>
          <li>Provides a JSON API to generate random numbers</li>
          <li>We've developed a new way of generating random numbers that takes 30 seconds</li>
          <li>We want to include this cool new way of generating random numbers in our API</li>
        </ol>
        <p>
          If you want to work along with this blog post we've set up a Rails application in <a href="https://github.com/whitneysteve/rails-long-requests">this GitHub repo</a>, along with the source code for this blog post. You can clone the repo with this command:
        </p>
        <Code>git clone https://github.com/whitneysteve/rails-long-requests.git</Code>
        <p>
          The <Code inline>README</Code> file has some instructions on how to get setup.
        </p>
        <h3>Checking the problem</h3>
        <p>
          The Rails server in the repository above is configured with only one thread to make the problem abundantly clear and to make it easier to reproduce with a single person on a single machine. When you start the server with <Code inline>./run_rails</Code> you should see the following output:
        </p>
        <Code>
          <>
            <div>=&gt; Booting Puma</div>
            <div>=&gt; Rails 7.0.4.2 application starting in development</div>
            <div>=&gt; Run `bin/rails server --help` for more startup options</div>
            <div>Puma starting in single mode...</div>
            <div>* Puma version: 5.6.5 (ruby 2.7.2-p137) ("Birdie's Version")</div>
            <div>*  Min threads: 1</div>
            <div>*  Max threads: 1</div>
          </>
        </Code>
        <h3>Making requests</h3>
        <p>
          With the Rails server running you can execute the cURL command to make a request to the first version of the API:
        </p>
        <Code>
          <>
            <div>$ curl http://localhost:3000/api/v1/random</div>
            <div>{'{"randomNumber":9}'}</div>
          </>
        </Code>
        {/* VIDEO */}
        <p>
          This is really fast and returns a random number very quickly, over and over. In fact you can probably do it multiple times in many terminals and it will return a random number most of the time.
        </p>
        <Code>
          $ for i in `seq 1 1000`; do; curl http://localhost:3000/api/v1/random; done
        </Code>
        {/* VIDEO */}
        <h3>Reproducing the problem</h3>
        <p>
          If you try and use the new version of the API that takes 30 seconds, you can see the problem almost immediately:
        </p>
        <Code>
          <>
            <div>$ curl http://localhost:3000/api/v2/random</div>
            <div>{'{"randomNumber":9}'}</div>
          </>
        </Code>
        {/* VIDEO */}
        <p>
          While this request is running, you can't make any other requests to the API, even the simple V1 API that usually was so quick to respond.
        </p>
        <p>
          Not only do we have a performance issue on our new API, we've also introduced one in our old v1 API.
        </p>
      </>
    );
  }
}

export default Scenario;
