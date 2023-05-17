import React from 'react';
import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <FallingLines
      color="#3f51b5"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};
