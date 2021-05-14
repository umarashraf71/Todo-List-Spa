import React from 'react';
import './Style.css';
import Todo from './Todo';

const List = (props) => {

    const {todos, setTodos, filteredTodos} = props;


    return(

        <div className="w-100">
            <ul className="todo-list" >

                {
                    filteredTodos.map((todo)=>(

                        <Todo key={todo.id} todo={todo} text={todo.text} todos={todos} setTodos={setTodos} />

                    ))
                }
   
            </ul>
        </div>
    );

}

export default List;