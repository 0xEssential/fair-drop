import classnames from 'classnames';
import CSS from 'csstype';
import React, { ReactElement } from 'react';

import styles from './styles.module.css';

const Button = ({
  onClick,
  children,
  _className,
  disabled,
  style,
}: {
  onClick: () => void;
  children: ReactElement | string;
  _className?: string;
  disabled?: boolean;
  style?: CSS.Properties;
}): ReactElement => (
  <button
    onClick={onClick}
    className={classnames(styles.root)}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
);

export default Button;
