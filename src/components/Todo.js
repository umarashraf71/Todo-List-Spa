import React from 'react';
import './Style.css';

const Todo = (props) => {

    const {text,todo, todos, setTodos} = props;


    const deleteHandler = () => {

        setTodos(todos.filter((el) =>
          
            el.id !== todo.id
        ))

    }




    const completeHandler = () => {

        setTodos(todos.map((item) => {

            if(item.id === todo.id) {

                return {

                    ...item, completed: !item.completed
                }
            };

            return item;
        })
        );
    };


    return(

        <div className="todo-item d-flex justify-content-between mb-2">

            <div className="todo-item-text-container d-flex ">
                <li className={`todo-item-text ${todo.completed ? 'completed' : ''}`}>{text}</li>
            </div>
            <div className="d-flex">
                <button onClick={completeHandler} className="btn btn-success mr-1" ><i className="fa fa-check" ></i></button>
                <button onClick={deleteHandler} className="btn btn-danger" ><i className="fa fa-trash"></i></button>
            </div>
        </div>

    );

}


export default Todo;