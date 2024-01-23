import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let intervalId;

    const animateText = () => {
      setDisplayedText((prevText) => prevText + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(animateText, 100); // Adjust the interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return <h1>{displayedText}</h1>;
};

export default TypingEffect;
