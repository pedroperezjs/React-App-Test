import { useEffect, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // Limpieza al montar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>{time}</h1>
    </div>
  );
};
