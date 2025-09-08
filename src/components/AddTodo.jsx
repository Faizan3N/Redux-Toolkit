import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(addTodo(trimmed))
    setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a Todo..."
        style={{
          padding: '10px 12px',
          width: '240px',
          borderRadius: '8px',
          border: '1px solid #444',
          background: '#2f2f2f',
          color: '#fff'
        }}
      />
      <button onClick={handleAdd} style={{ background: '#6366f1', color: '#fff' }}>Add Todo</button>
    </div>
  )
}

export default AddTodo