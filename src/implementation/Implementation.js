import Code from '../code/Code';
import React, { Component } from 'react';

/**
 * The Implementation component. Contains the explanation of how to hijack the socket.
 */
class Implementation extends Component {
  render() {
    return (
      <>
        <h2>Socket Hijacking</h2>
        <h3>Version 3 of our API</h3>
        <p>
          In the Ruby application you'll see a few different versions of the API implementation:
        </p>
        <ol>
          <li>
            <a href="https://github.com/whitneysteve/rails-long-requests/blob/main/random_numbers/app/controllers/api/v1/random_controller.rb">
              Version 1
            </a> - the original, fast API
          </li>
          <li>
            <a href="https://github.com/whitneysteve/rails-long-requests/blob/main/random_numbers/app/controllers/api/v2/random_controller.rb">
              Version 2
            </a> - the new, but slow API
          </li>
          <li>
            <a href="https://github.com/whitneysteve/rails-long-requests/blob/main/random_numbers/app/controllers/api/v3/random_controller.rb">
              Version 3
            </a> - the new API using socket hijacking.
          </li>
        </ol>
        <p>
          Let's compare Version 2 and Version 3. In version 2 we call the <Code inline>slow_rand</Code> function. This takes 30 seconds to complete, which is blocking the response thread.
        </p>
        {/* Embed code */}
        <p>
          Now let's take a look at version 3, and see what the differences are.
        </p>
        {/* Embed code */}
        <p>
          At lines 3 and 4 we are performing the hijacking, using <a href="https://github.com/rack/rack">Rack's</a> Hijacking API and we save the socket to the <Code inline>socket</Code> variable.
        </p>
        <Code>
          Insert code here
        </Code>
        <p>
          At lines 5-8 we start a separate process to generate the random number. this could just as easily be submitting a task to a work system, making a downstream call or placing the socket in an in-memory hash, to be retrieved by an event subscriber later on.
        </p>
        <Code>
          Insert code here
          Insert code here
        </Code>
        <p>
          At line 10, we close th response. This is the signal to Rails that we are done with the response thread and it can re-use it to server other requests.
        </p>
        <Code>
          Insert code here
        </Code>
        <p>
          In the <Code>do_slow_task</Code> method we perform the slow random number generation.
        </p>
        <h3>The result</h3>
        <p>
          Now if we make a request to the v3 API it still takes a long time to respond. However, the Rails response thread is free to serve other requests. So if execute the v3 request in one terminal:
        </p>
        <Code>
          curl http://localhost:3000/api/v3/random
        </Code>
        <p>
          We can see that we can continue to make v1 requests:
        </p>
        <Code>
          curl http://localhost:3000/api/v1/random
        </Code>
        {/* VIDEO */}
      </>
    );
  }
}

export default Implementation;
