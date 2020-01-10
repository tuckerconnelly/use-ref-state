const { useRef, useState, useEffect } = require('react');

const useRefState = initialValue => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};

module.exports = useRefState;
