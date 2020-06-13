import React, { Fragment } from "react";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  todos: PropTypes.array,
  onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
  todos: [],
  onToDoClick: null,
};

function ToDoList(props) {
  const { todos, onToDoClick } = props;

  const loadToDoList = (todos) => {
    console.log(todos);
    let xhml = null;
    if (todos.length != 0) {
      xhml = todos.map((item, index) => {
        return <li key={index} onClick={()=>onToDoClick(item.id)}>{item.title}</li>;
      });
    }
    return xhml;
  };

  return (
    <Fragment>
      <ul className='todos-list'>
        {/* {todos.map((item) => {
          return (<li key={item.id}>{item.title}</li>);
        })} */}
        {loadToDoList(todos)}
      </ul>
    </Fragment>
  );
}

export default ToDoList;
