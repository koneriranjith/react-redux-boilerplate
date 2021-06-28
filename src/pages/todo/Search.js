import React from "react";
import { useStore } from "../../store";
import { filterTodo, addTodo } from "../../actions";
import uuid from "uuid/v1";

export default () => {
  const [{ filter }, dispatch] = useStore();
  const onClick = () => {
    dispatch(addTodo({ id: uuid(), name: filter, done: false }));
    dispatch(filterTodo(""));
  };
  return (
    <div>
      <input
        type="text"
        onChange={e => dispatch(filterTodo(e.target.value))}
        value={filter}
      />
      <button onClick={onClick} disabled={!filter}>
        Add
      </button>
    </div>
  );
};
