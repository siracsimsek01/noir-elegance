import React from 'react';

export default function ProgressBar({ label, percentage }) {
  const containerStyles = {
    height: '10px',
    width: '600px',
    backgroundColor: "#fff",
    borderRadius: '10px',
    margin: '10px 0',
    border: '1px solid #000', // Added border
  };

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: 'black', 
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
  };

  const labelStyles = {
    padding: '5px',
    color: 'black', 
    fontWeight: 'bold',
    position: 'absolute', // Adjusted to position the label
    top: '-45px', // Position from top
    left: '10px', // Position from left
    fontSize: '1.5rem', // Adjusted to fit
  };

  return (
    <div style={{ position: 'relative' }}> {/* Wrapper with relative positioning */}
      <span className='font-body' style={labelStyles}>{label}</span> {/* Label positioned absolutely */}
      <div style={containerStyles}>
        <div style={fillerStyles} />
      </div>
    </div>
  );
}
