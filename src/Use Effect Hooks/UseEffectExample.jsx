import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
  useEffect(() => {
    console.log('rendered');

    return () => {
      console.log('unmounted');
    };
  }, []);

  return <div>Hook Example</div>;
};

export default UseEffectExample;
