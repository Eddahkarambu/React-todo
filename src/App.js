import React,{useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const[todos, setTodos]= useState([]);
  const[status,setStatus] = useState('all');
  const[filteredTodos, setFilteredTodos]= useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () =>{
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;
    }

  }
  console.log(filteredTodos)

  return (
    <div className="App">
     <header>
       <h1>Ed's Todo List</h1>
     </header>

     <Form 
     inputText ={inputText}  
     todos ={todos} 
     setTodos ={setTodos} 
     setInputText={setInputText}
     setStatus = {setStatus}
     filteredTodos={filteredTodos}
     />

     <TodoList setTodos={setTodos} todos ={todos}/> 
    </div>
  );
}
export default App;
