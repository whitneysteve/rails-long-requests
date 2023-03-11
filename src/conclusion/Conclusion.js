import React, { Component } from 'react';

/**
 * The Conclusion component. Sums up what we learned.
 */
class Conclusion extends Component {
  render() {
    return (
      <>
        <h2>Conclusion</h2>
        <h3>What did we learn?</h3>
        <p>
          We learned a little bit about how Ruby handles concurrency and how that impacts the scalability of threads in Rails.
        </p>
        <p>
          We also learned how, when a performance issue or long-running request in one part of the system, they can have a catastrophic affect on the other parts of the system that are generally fast and run with no performance issues.
        </p>
        <p>
          Finally, we learned a technique to handle this - full socket hijacking - and, while it's a powerful tool, we learned that it has some downsides and we must be careful with our implementation of it - much like most things.
        </p>
      </>
    );
  }
}

export default Conclusion;
