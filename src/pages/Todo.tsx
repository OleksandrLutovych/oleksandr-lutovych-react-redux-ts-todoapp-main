import React, { useEffect, useState } from "react";
import TodoTask from "../components/TodoTask";
import Button from "../components/UI/Button";
import classes from "../components/Todo.module.scss";
import { useAppSelector, useAppDispatch } from "../reducers/hook";
import { addTodo, editTodoState, fetchTodos } from "../reducers/TodoReducer";
import { ITodoApi } from "../types/redux.types";

const Todo: React.FC = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addTodo(todoText));
    setTodoText("");
  };

  const setEditState = (id: string, text: string): void => {
    const [todoEditItem] = todo.filter((item) => item.id === id);
    const editTodo = [text, todoEditItem];
    dispatch(editTodoState(editTodo));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form className={classes.form}>
        <input
          type="text"
          placeholder="Create task"
          className={classes.input}
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <div>
          <Button onClick={createTodo}>Create task</Button>
        </div>
      </form>
      <div className="todo-container">
        <h3>Tasks</h3>
        {todo.map((item: ITodoApi) => (
          <TodoTask
            key={item.id}
            completed={item.completed && true}
            title={item.title}
            id={item.id}
            setEditState={setEditState}
          />
        ))}
      </div>
      <div className={classes.todoFooter}>
        <p>{todo.length} items</p>
        <div>
          <button className={classes.btn}>All</button>
          <button className={classes.btn}>Completed</button>
          <button className={classes.btn}>Active</button>
        </div>

        <Button>Clear Items</Button>
      </div>
    </div>
  );
};

export default Todo;
