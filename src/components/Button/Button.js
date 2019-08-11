import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import styles from './Button.module.scss';

const Button = ({ variant, text, onClick }) => {
  const classNames = className({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.success]: variant === 'success',
    [styles.warning]: variant === 'warning'
  });

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  /** String button text prop */
  text: PropTypes.string.isRequired,
  /** String button variant prop */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning']),
  /** onClick callback method prop */
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {}
};

export default Button;
