import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  if (!todos || todos.length === 0) {
    return <p style={{ opacity: 0.7 }}>No todos yet. Add one above.</p>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
      {todos.map((t) => (
        <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between', background: '#2b2b2b', padding: '10px 12px', borderRadius: '8px' }}>
          <span style={{ color: '#fff' }}>{t.text}</span>
          <button onClick={() => dispatch(removeTodo(t.id))} style={{ background: '#ef4444', color: '#fff' }}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Todos

