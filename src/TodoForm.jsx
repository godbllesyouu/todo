import { useState } from "react";

function TodoForm({onAdd}){
    const [text,setText] = useState("")
  return(
    <form onSubmit={(e)=>{
        e.preventDefault();
           setText("")

        onAdd(text)
    }}>
        <input type="text" placeholder="Add Your Text" value={text} onChange={(e)=>{
           setText(e.target.value)
        }}/>
        <button>Add</button>
    </form>
  )
}
export default TodoForm;