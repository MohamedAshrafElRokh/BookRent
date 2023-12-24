import React, { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [deboinceVlue, setDebouneValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouneValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return deboinceVlue;
}

export default useDebounce;
