import React from 'react';
import './Style.css';
import nextId from "react-id-generator";

const Form = (props) => {

    const uniqueId = nextId();
    const {inputText, setInputText, todos, setTodos, setStatus} = props;





    const inputTextHandler = (e) => {

        // console.log(e.target.value);
        setInputText(e.target.value);
    }




    const submitTodoHandler = (e) => {

        e.preventDefault();

        setTodos([

            ...todos, 
            {
                text: inputText,
                completed: false,
                id:uniqueId
            }
        ]);

        setInputText('');

    }



    const statusHandler = (e)=>{

        setStatus(e.target.value);

    }



    return(

    <form action="" className="w-100 ">


            <div className="d-flex form-group ">
                <input onChange={inputTextHandler} value={inputText}  type="text" className="todo-input form-control form-control-sm" />
                <div className="">
                <button onClick={submitTodoHandler}  className="todo-button btn btn-primary" type="submit">
                    <i className="fa fa-plus-square"></i>
                </button>
                </div>
            </div>

    

    <div className="form-group d-flex">
        
            <select onChange={statusHandler} name="todos" id="" className="filter-todo form-control form-control-sm">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        
    </div>

    </form>

    );
}

export default Form;