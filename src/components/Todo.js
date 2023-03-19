import React, { useState, useEffect } from "react";
import "./Todo.css";

const getLocal = () => {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocal());
  const [editIndex, setEditIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const addItem = (e) => {
    e.preventDefault();
    if (inputData === "") {
      alert("Please enter task first");
      return;
    }
    if (!toggle) {
      setItems([...items, { name: inputData, id: Math.random() }]);
    } else {
      setItems(
        items.map((item) =>
          item.id === editIndex ? { ...item, name: inputData } : item
        )
      );
      setEditIndex(0);
      setToggle(false);
    }
    setInputData("");
    localStorage.setItem("task", items);
  };

  const editItem = (data) => {
    setInputData(data.name);
    setToggle(true);
    setEditIndex(data.id);
  };

  const deleteItem = (data) => {
    setItems(items.filter((item) => item.id !== data.id));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

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
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(item)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(item)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {items.length > 0 && (
            <div className="showItems">
              <button className="btn" onClick={() => setItems([])}>
                <span>Clear Task</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
