import React from 'react';

import './FormButton.scss';

export const FormButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
);
