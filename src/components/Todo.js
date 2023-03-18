import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const addItem = (e) => {
    e.preventDefault();
    const newTask = { name: inputData, id: Math.random() };
    setItems([...items, newTask]);
    setInputData("");
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.png" alt="logo" />
            <figcaption>List your tasks here</figcaption>
          </figure>
          <form onSubmit={(e) => addItem(e)}>
            <div className="addItems">
              <input
                type="text"
                placeholder="Add task"
                className="form-control"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
            </div>
          </form>
          <div className="showItems">
            {items.map((item) => {
              return (
                <div className="eachItem" key={item.id}>
                  <h3>{item.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={null}></i>
                    <i className="far fa-trash-alt add-btn" onClick={null}></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={null}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
