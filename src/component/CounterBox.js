import React from 'react';


const CounterBox = ({ title, count, icon: Icon, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor, color: '#fff', padding: '20px', borderRadius: '10px', width: '300px', textAlign: 'center',margin:"50px" }}>
      <Icon style={{ fontSize: '5rem' }} />
      <h2>{count}</h2>
      <p>{title}</p>
    </div>
  );
};

export default CounterBox;
