import React from "react";
import { ListGroup , ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";


const floating ={
    float : 'right',
    color: 'blue'
}

const TodoSignUp = ({ todos , markComplete}) => {


   return(
    <ListGroup className="mt-5 mb-2 items">
    {todos.map(todo => (
      <ListGroupItem key={todo.id}>
        {todo.todoString}
        <span style={floating} onClick={() => markComplete(todo.id)}>
          <FaCheckDouble />
        </span>
      </ListGroupItem>
    ))}
  </ListGroup>
   );
}

export default TodoSignUp;