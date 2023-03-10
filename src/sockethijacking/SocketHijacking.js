import React, { Component } from 'react';
import Threads from '../threads/Threads';

/**
 * The SocketHijacking component. This explains how socket hijacking can be used to handle long running requests.
 */
class SocketHijacking extends Component {
  render() {
    return (
      <>
        <h2>Socket hijacking 🏴‍☠️</h2>
        <h3>What is socket hijacking and how can it help?</h3>
        <p>
          At the heart of a Rails request and response pair is a TCP/IP socket - one end of a peer-to-peer connection between the client making the request of the Rails server and the server itself. All data sent between these two parties is sent over a socket.
        </p>
        <p>
          Socket hijacking is a technique that extracts the socket from the response object and returns the thread handling the response to Rails. This way the connection to the client remains open but Rails is free to use the response thread to handle other requests.
        </p>
        <Threads numThreads={ 4 } allowSocketHijack />
        <p>
          This is the basis of the approach we're going to use to handle long running requests in Rails.
        </p>
        <p>
          This is already a widely used technique to handle <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">Web Sockets</a> in popular Ruby gems, like <a href="https://guides.rubyonrails.org/action_cable_overview.html">Action Cable</a>.
        </p>
        <h3>Full or partial hijacking?</h3>
        <p>
          There are two modes of Socket Hijacking - full and partial. Full completely takes over the responsibility of responding to the client, while partial allows Rails to send the HTTP response status line and headers but the hijacker is responsible for writing the body. In both modes the hijacker is responsible for ensuring the socket to the client is correctly closed.
        </p>
        <h3>Why does this scale better? 📈</h3>
        <p>
          In the example above we saw long running requests taking up all request handling capability. We can work around this by adding another web-server. However, the amount we can handle for every web-server added is rather limited. If we add ten web-servers, each with 4 threads, we can still only handle 40 long running requests at a time.
        </p>
        <p>
          With socket hijacking, there are 65,535 sockets available per server. OK - not all of those are available to us! We need to leave a healthy amount available to the OS, to the web-server, file servers and for communicating with downstream dependencies like databases. But even if we can allocate 1,000 of these sockets for long running requests we can scale at a much more efficient rate. Instead of being able to handle 40 additional long running requests with 10 web-servers we could handle 10,000.
        </p>
      </>
    );
  }
}

export default SocketHijacking;
