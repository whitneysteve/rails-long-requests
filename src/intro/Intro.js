import React, { Component } from 'react';
import Threads from '../threads/Threads';

/**
 * The Intro component. Contains the why we need to handle long running requests differently.
 */
class Intro extends Component {
  render() {
    return (
      <>
        <h2>Why handle long running requests differently?</h2>
        <h3>What is Rails</h3>
        <p>
          <a href="https://rubyonrails.org/">Rails</a> is a server side web application framework that provides a Model-View-Controller harness for serving, sometimes database backed, web pages and APIs. It's really popular and it scales reasonably well. You might have come across something similar for other programming languages - like <a href="https://www.djangoproject.com/">Django</a> for Python or <a href="https://www.playframework.com/">Play</a> for Java.
        </p>
        <h3>Threading in Rails</h3>
        <p>
          In order to scale and serve multiple requests at a time, Rails will use a threaded web-server. It comes with <a href="https://puma.io/">Puma</a> as the default. The demo below shows how Rails response threads work in a web server configured with 4 response threads.
        </p>
        <Threads numThreads={ 4 } />
        <h3>Limited Threading in Ruby</h3>
        <p>
          Based on that, we might think that adding threads in Rails will increase concurrency and it does. However, to a limited extent.
        </p>
        <p>
          Ruby is a really fun and easy language to learn and use and part of that is the Global Interpreter Lock (GIL). The GIL ensures that only one Ruby thread is executing per operating system process at any one time, except when waiting for I/O, for example, when making a database query, HTTP request or reading a file.
        </p>
        <p>
          This means that it easier to do certain concurrent tasks in a threadsafe manner but also that no matter how many threads you spawn or how many cores you have to use, only one Ruby thread will be executing at a time.
        </p>
        <p>
          In a typical web application a significant amount of time is spent performing I/O, so Ruby and Rails will scale and increasing threads will likely help with concurrency. However, where a request requires a lot of calculations, waiting and/or polling increasing threads will have a limited effect.
        </p>
        <p>
          The maintenance of a thread is also overhead, which can often be unnecessary.
        </p>
        <h3>Thread Exhaustion</h3>
        <p>
          We saw in the demo above that with short running tasks even a small number of threads can do a lot of work. But with Rails applications thread numbers are usually counted in the 10s. So when even a small number of longer running requests are made, it can quickly clog up the pipeline. Here's another demo that allows sending long running tasks, as well as short-running ones. Try running 10-20 short running tasks then 4 long-running tasks and see the difference.
        </p>
        <Threads numThreads={ 4 } allowLong />
        <p>
          We quickly lose the ability to process requests. Rails will queue requests up behind the long-running requests but that just means that there's a backlog to get through when the long-running tasks are finished and clients, normally, don't wait around forever!
        </p>
        <p>
          However, not only can we not respond to clients, if we are operating in a managed environment, like Amazon's Elastic Container Service, we will likely receive health check requests to make sure our service is healthy. If these fail or we fail to respond to them in a timely manner Amazon will kindly shutdown or servers and start a new one, causing all these requests - running and queueing - to fail.
        </p>
      </>
    );
  }
}

export default Intro;
