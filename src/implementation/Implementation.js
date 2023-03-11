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
          In the <Code inline>do_slow_task</Code> method we perform the slow random number generation.
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
        <h3>Risks</h3>
        <p>
          Socket hijacking is not without it's downsides and risks, some of which it's important to discuss here.
        </p>
        <h4>Formatting the response</h4>
        <p>
          With full socket hijacking we are responsible for making sure the response to the client is well-formed. In our solution you can seem on lines 21-35 we need to write the code that handles the HTTP response status line and headers.
        </p>
        <p>
          While we may not notice a missing new line or mind the difference of a few bytes in content length calculation do remember that the internet runs atop many layers of proxies, load balancers and other intermediaries that may have more or less rigid interpretations of the HTTP specification. So we need to make sure we conform to that spec as close as possible for trouble free communication.
        </p>
        {/* Image */}
        <h5>Partial socket hijacking</h5>
        <p>
          Partial socket hijacking is an alternative that can help here. With partial socket hijacking Rails will still write the HTTP status line and headers and we are only responsible for writing the response body. This is useful if we don't need to adapt the HTTP status line or response headers based on our slow running task.
        </p>
        <h4>Unclosed sockets</h4>
        <p>
          If, after taking responsibility to close the socket, fail to do so it is possible that the client connection will remain open indefinitely. Sockets on any given server are limited and once they are all utilised unpredictable things can occur. No further requests may be processed and remote access to the server may not be possible.
        </p>
        <p>
          In our controller, at line 23, we use <Code inline>ensure</Code> to make sure the socket is always closed but if your application is doing more complicated things, like storing sockets while awaiting a subscription event, it would be a great idea to make sure to limit the number of sockets we hijack and keep open at any one time.
        </p>
      </>
    );
  }
}

export default Implementation;
