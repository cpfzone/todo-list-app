import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React', done: false },
    { id: 2, text: '完成 CICD 配置', done: true },
    { id: 3, text: '部署上线', done: false },
  ])
  const [input, setInput] = useState('')

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const remaining = todos.filter(t => !t.done).length

  return (
    <div className="app">
      <h1>📝 Todo List</h1>
      <div className="input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="添加新任务..."
        />
        <button onClick={addTodo}>添加</button>
      </div>
      {todos.length === 0 ? (
        <div className="empty">暂无任务，添加一个吧 ✨</div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
              <div
                className={`todo-checkbox ${todo.done ? 'checked' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.done && '✓'}
              </div>
              <span className="todo-text">{todo.text}</span>
              <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>×</button>
            </li>
          ))}
        </ul>
      )}
      <div className="stats">
        共 {todos.length} 项，已完成 {todos.length - remaining} 项，剩余 {remaining} 项
      </div>
    </div>
  )
}

export default App
