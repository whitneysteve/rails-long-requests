import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * The Code component. A utility component to help formatting code.
 */
class Code extends Component {
  static defaultProps = {
    children: null,
    inline: false,
  };

  render() {
    const { children, inline } = this.props;

    return inline ? (
      <span className="Code">{children}</span>
    ) : (
      <pre>{children}</pre>
    );
  }
}

Code.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  inline: PropTypes.bool,
};

export default Code;
