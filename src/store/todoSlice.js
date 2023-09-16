import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  // reducers - stex grvum a mer metodner@ /funkcianer@/, voronq ogtagorcelu enq mer cragri mej
  //   es funkcianer@ stanum en "state" ` @ntacik vichami masin tvyalner@ u "action" te inch gorcoxutyun a anelu mer funkcian
  //   tvyal depqum state => initialState: {
  //                           todos: [],
  //                         }
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },

    /* action.payload- ov misht galis a en bolor tvyalner@, vornq talis enq vorpes argument mer funkcianerin "dispatchi mej.
     orinak "text" tvyal depqum " dispatch(addTodo({text}) "
    */
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      toggledTodo.completed = !toggledTodo.completed
    },
  },
})

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions

export default todoSlice.reducer
