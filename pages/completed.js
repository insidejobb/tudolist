// pages/completed.js
import React from 'react';
import CompletedList from '@/Components/CompletedList';
export default function Completed() {
  // You can load completed items from wherever you store them
  const completedItems = ["Item 1", "Item 2", "Item 3"]; // Replace with your completed items data

  return (
    <div>
      <h1>Completed Items</h1>
      <CompletedList completedItems={completedItems} />
    </div>
  );
}
