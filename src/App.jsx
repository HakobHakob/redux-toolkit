import { useState } from "react"

import "./App.css"
import { TodoList } from "./components/TodoList"
import { InputFiled } from "./components/InputFiled"
import { useDispatch } from "react-redux"
import { addTodo } from "./store/todoSlice"

function App() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText("")
  }

  return (
    <div className="App">
      <InputFiled text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  )
}

export default App
