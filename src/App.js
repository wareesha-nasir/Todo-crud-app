import {React,useState} from 'react';
import './App.css';

function App(){
  const [todo,setTodo]=useState("");
const[todos,setTodos]=useState([]);
const [editText,setEditText]=useState();
const [editTodo,setEditTodo]=useState();

function handleSubmit(e){
e.preventDefault()
const NewTodo={
  id:new Date().getTime(),
  text:todo,
  complete:false
}
setTodos([...todos].concat(NewTodo))
setTodo("")
}
function DeleteTodo(id){
const updatedTodo=[...todos].filter((todo)=>
  todo.id !==id
)
  setTodos(updatedTodo)

}
function EditTodo(id){
const newTodo=[...todos].map(todo=>{
  if(todo.id===id){
    todo.text=editText
  }
  return todo
})
setTodos(newTodo)
setEditText("");
setEditTodo(null)
}

return(
 <div className="App">
   <div className="container">
   <div className="App-header" >
   <h3 >Todo List</h3>
   </div>
   <form onSubmit={handleSubmit}>
<input type="text" placeholder="add todo" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
<button className="add-btn">Add Todo</button>
</form>
{todos.map((todo)=>
  <div className="todo-list" key={todo.id}>
    {editTodo===todo.id?(
<input type="text" placeholder="new todo"   onChange={(e)=>setEditText(e.target.value)} value={editText} />
    ):
    ( <div >{todo.text}</div>)}
      <button className="delete-btn" onClick={()=>DeleteTodo(todo.id)}>Delete</button>
     
   {editTodo===todo.id?
   <button className="save-btn" onClick={()=>EditTodo(todo.id)}>Save</button>:
   <button className="edit-btn" onClick={()=>setEditTodo(todo.id)}>Edit</button>}
    <hr style={{backgroundColor:"black", width:"50%"}}></hr>
  </div>
)}
</div>
 </div>
)

}

export default App;



