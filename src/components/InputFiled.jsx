import React, { memo } from "react"

export  const InputFiled = memo(({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}> Add todo</button>
    </label>
  )
})


