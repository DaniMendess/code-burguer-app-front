/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  ErrorMessageStyle,
} from './style';

export function ErrorMessage({ children }) {
  return (
    <ErrorMessageStyle>{children}</ErrorMessageStyle>
  );
}
