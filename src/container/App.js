import React, {useState, useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
// import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/Form';
import List from '../components/List';



function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when app starts
  useEffect(()=>{

    getLocalTodos();

  },[]);


  useEffect(()=>{

    filterHandler();
    saveLocalTodos();

  }, [todos, status])



  const filterHandler = ()=> {

    switch(status){

      case 'completed' : setFilteredTodos(todos.filter(todo => todo.completed === true ))
      break;

      case 'uncompleted' : setFilteredTodos(todos.filter(todo => todo.completed === false ))
      break;

      default : setFilteredTodos(todos)
      break;

    }
  }


  const saveLocalTodos = () => {

      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {


    if(localStorage.getItem('todos') === null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else
    {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }

  }


  return (

    <div className="App">

      <h3>TODO LIST APPLICATION</h3>
      <div className="todo-container d-flex flex-column justify-content-center align-items-center p-4 mt-3">
            
            <Form 
                    inputText={inputText} 
                    setInputText={setInputText} 
                    todos={todos} 
                    setTodos={setTodos}
                    setStatus={setStatus}
            />

            <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />

      </div>

    </div>
  
  );
}

export default App;
