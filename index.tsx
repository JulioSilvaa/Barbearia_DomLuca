import React from 'react';

export const Footer = () => {
  const handleCliqueMe = () => {
    console.log('teste');
  };

  return (
    <footer>
      <button onClick={handleCliqueMe}>CLIQUE ME</button>
      <h1>footer</h1>
    </footer>
  );
};
