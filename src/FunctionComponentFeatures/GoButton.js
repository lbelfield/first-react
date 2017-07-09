import React, {ProtoTypes} from 'react';

// this is a simple Function Component
// Function Components don't hold state
const GoButton = () => {
  return (
    <div>
      <div>Basic Go Button</div>
      <button>
        Go
      </button>
    </ div>
  );
};

export default GoButton;