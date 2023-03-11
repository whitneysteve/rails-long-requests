import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';

/**
 * The Threads component. Shows a demo of tasks passing through threads.
 */
class Threads extends Component {
  state = { position: 0, running: false };

  defaultProps = { allowLong: false, allowSocketHijack: false };

  constructor(props) {
    super(props);

    this.threads = Array.from({ length: this.props.numThreads } , (_, idx) => ({
      id: idx,
      nextAvailable: 0,
      ref: createRef(),
      requests: [],
    }));

    this.request = this.request.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
  }

  request(timeInSeconds, hijackInSeconds) {
    const time = now();
    const nextThread = this.threads.find((thread) => thread.nextAvailable < time);

    if (nextThread) {
      nextThread.nextAvailable = time + timeInSeconds;
      const position = this.state.position;
      const request = {
        end: position + timeInSeconds,
        start: position,
      };

      if (hijackInSeconds) {
        request.hijackEnd = position + (hijackInSeconds || 0);
      }

      nextThread.requests.push(request);
    } else {
      alert("No threads available!");
    }
  }

  reset() {
    clearInterval(this.state.interval);
    this.setState({ position: 0, running: false });
    this.threads.forEach((thread) => {
      thread.nextAvailable = 0;
      thread.requests = [];
    });
  }

  start() {
    const interval = setInterval(() => {
      const position = Math.floor(now() - this.state.start);
      if (position >= 60) {
        this.reset();
      } else {
        this.setState({ position });
      }

    }, 1000);
    this.setState({ interval, position: 0, running: true, start: now() });
  }

  render() {
    return (
      <div className="Threads">
        {this.threads.map((thread) => {
          return (
            <div className='Threads--Thread' key={`thread-${thread.id}`} ref={thread.ref}>
              <div className='Threads--Thread--Name'>Thread {thread.id + 1}</div>
              {
                thread.requests.map((request) => {
                  return (
                    <>
                      {request.hijackEnd &&
                        <div
                          className='Threads--Thread--Hijacked-Request'
                          key={ `${thread.id}-${request.start}-hijack` }
                          style={{
                            height: `${((request.hijackEnd - request.start) * 5)}px`,
                            top: `${request.start * 5}px`,
                          }} />
                      }
                      <div
                        className='Threads--Thread--Request'
                        key={ `${thread.id}-${request.start}-request` }
                        style={{
                          height: `${((request.end - request.start) * 5)}px`,
                          top: `${request.start * 5}px`,
                        }} />
                    </>
                  );
                })}
            </div>);
        })}
        <div className="Threads--Time" style={ { top: `${this.state.position * 5}px` } }>
          <div className="Threads--Time--Label">Time</div>
        </div>
        <div className="Threads--Timer">
          <div>Requests made: { this.threads.reduce((a,b) => a + b.requests.length, 0) }</div>
          <div>Time passed: { this.state.position } seconds</div>
        </div>
        <div className="Threads--Controls">
          <button disabled={ this.state.running } onClick={ this.start }>Start</button>
          <button disabled={ !this.state.running } onClick={ this.reset }>Reset</button>
          <button disabled={ !this.state.running } onClick={ () => this.request(0.5) }>500ms Request</button>
          {
            this.props.allowLong &&
              <button disabled={ !this.state.running } onClick={ () => this.request(10) }>10s Request</button>
          }
          {
            this.props.allowSocketHijack &&
              <button
                disabled={ !this.state.running }
                onClick={ () => this.request(0.5, 10) }>10s Socket Hijack Request</button>
          }
        </div>
      </div>
    );
  }
}

const now = () => new Date().getTime()/1000;

Threads.propTypes = {
  allowLong: PropTypes.bool,
  allowSocketHijack: PropTypes.bool,
  numThreads: PropTypes.number.isRequired,
};

export default Threads;
