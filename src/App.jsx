import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '16px' }}>Learn about redux toolkit</h1>
      <AddTodo />
      <h3 style={{ marginTop: '16px', opacity: 0.8 }}>Todos</h3>
      <Todos />
    </div>
  )
}

export default App
