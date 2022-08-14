/* eslint-disable import/no-unresolved */
import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

function SpinnerComponent() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

export default SpinnerComponent;
