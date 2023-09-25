import React from 'react';

export default function CompletedList({ completedItems }) {
  return (
    <div>
      <h2>Completed Items</h2>
      <ul>
        {completedItems.map((item,index) => (
          <li className='list' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
