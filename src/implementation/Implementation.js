import Code from '../code/Code';
import React, { Component, createRef } from 'react';

/**
 * The Implementation component. Contains the explanation of how to hijack the socket.
 */
class Implementation extends Component {
  constructor(props) {
    super(props);

    this.l3l4Ref = createRef();
    this.l5l8Ref = createRef();
    this.l10Ref = createRef();
    this.l23l35Ref = createRef();
    this.l21Ref = createRef();
    this.version1Ref = createRef();
    this.version2Ref = createRef();
    this.version3Ref = createRef();
  }

  componentDidMount() {
    this.embedCode(this.version1Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv1%2Frandom_controller.rb&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.version2Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv2%2Frandom_controller.rb&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.version3Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv3%2Frandom_controller.rb&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.l3l4Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv3%2Frandom_controller.rb%23L3-L4&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.l5l8Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv3%2Frandom_controller.rb%23L6-L8&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.l10Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv3%2Frandom_controller.rb%23L10&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.l23l35Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv3%2Frandom_controller.rb%23L28-L35&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
    this.embedCode(this.l21Ref, "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fwhitneysteve%2Frails-long-requests%2Fblob%2Fmain%2Frandom_numbers%2Fapp%2Fcontrollers%2Fapi%2Fv3%2Frandom_controller.rb%23L23-L26&style=atom-one-light&type=code&showLineNumbers=on&showFileMeta=on&fetchFromJsDelivr=on");
  }

  embedCode(ref, link) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = link;
    ref.current.appendChild(script);
  }

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
          First, let's take a look at v1, the simplest implementation.
        </p>
        <div className="EmbeddedCode" ref={ this.version1Ref } />
        <p>
          We just generate a random number and return it. Now, let's compare Version 2 and Version 3. In version 2 we call the <Code inline>slow_rand</Code> function. This takes 30 seconds to complete, which is blocking the response thread.
        </p>
        <div className="EmbeddedCode" ref={ this.version2Ref } />
        <p>
          Now let's take a look at version 3, and see what the differences are.
        </p>
        <div className="EmbeddedCode" ref={ this.version3Ref } />
        <p>
          At lines 3 and 4 we are performing the hijacking, using <a href="https://github.com/rack/rack">Rack's</a> Hijacking API and we save the socket to the <Code inline>socket</Code> variable.
        </p>
        <div className="EmbeddedCode" ref={ this.l3l4Ref } />
        <p>
          At lines 5-8 we start a separate process to generate the random number. this could just as easily be submitting a task to a work system, making a downstream call or placing the socket in an in-memory hash, to be retrieved by an event subscriber later on.
        </p>
        <div className="EmbeddedCode" ref={ this.l5l8Ref } />
        <p>
          At line 10, we close th response. This is the signal to Rails that we are done with the response thread and it can re-use it to server other requests.
        </p>
        <div className="EmbeddedCode" ref={ this.l10Ref } />
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
        <div className="EmbeddedCode" ref={ this.l23l35Ref } />
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
        <div className="EmbeddedCode" ref={ this.l21Ref } />
      </>
    );
  }
}

export default Implementation;
