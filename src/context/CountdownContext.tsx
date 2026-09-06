import React, { createContext, useContext, useState, useEffect } from 'react';

interface CountdownContextType {
  minutes: string;
  seconds: string;
  totalSeconds: number;
  isExpired: boolean;
  formattedTime: string;
}

const CountdownContext = createContext<CountdownContextType>({
  minutes: '15',
  seconds: '00',
  totalSeconds: 900,
  isExpired: false,
  formattedTime: '15:00',
});

// 15 minutes = 900 seconds
const DURATION_SECONDS = 15 * 60;

export const CountdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState<number>(DURATION_SECONDS);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const minutes = String(mins).padStart(2, '0');
  const seconds = String(secs).padStart(2, '0');
  const formattedTime = `${minutes}:${seconds}`;

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        totalSeconds: timeLeft,
        isExpired: timeLeft === 0,
        formattedTime,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdown = () => useContext(CountdownContext);
