import React, { useState } from 'react';

export default function TodoItem({ text, onDelete, onEdit, onComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    onEdit(text, editedText);
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => onComplete(text)}
        // Add checked attribute if item is completed
      />
      {isEditing ? (
        <>
          <input className='inputstyle'
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className='save' onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={() => setIsEditing(true)} className='edit'>Edit</button>
          <button className='delete' onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
