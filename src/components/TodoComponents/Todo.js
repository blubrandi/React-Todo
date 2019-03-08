import React from 'react';

const Todo = props => {

    return(
         <div className="task" 
         onClick={ () => {
            props.toggleItem(props.id);
          }}>
          <p>{props.task}</p>
            
        </div>
    );
};

export default Todo