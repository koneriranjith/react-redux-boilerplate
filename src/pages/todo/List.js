import React, {useEffect} from "react";
import { useStore } from "../../store";
import { udpateTodo } from "../../actions";

import todosApi from "../../api/todos";
const List = () => {
  const [{ todos, filter }, dispatch] = useStore();
  const handleCheckboxChange = item => {
    dispatch(udpateTodo({ ...item, done: !item.done }));
  };
  useEffect(() => {
    todosApi.getTodos().then((res)=>{
      let {data} = res;
    }).catch(console.error);
  })
  return (
    <div>
      {todos
        .filter(t => RegExp(filter, "i").test(t.name))
        .map(item => (
          <div key={item.id} className="d-flex align-items-center">
            <p className="m-0 p-0">{item.name}</p>
            <input
              className="ml-3"
              type="checkbox"
              checked={item.done}
              onChange={() => {
                handleCheckboxChange(item);
              }}
            />
          </div>
        ))}

        <div>
          <pre>{JSON.stringify(todos, null, 2)}</pre>
        </div>
    </div>
  );
};
export default List;
