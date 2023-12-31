import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo} 
          
          /*
          {...todo} 
          Senc uxarkum enq "todo" bolor tvyalner@

          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
          */
        />
      ))}
    </ul>
  )
}
