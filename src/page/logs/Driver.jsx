import React, { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Claculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

const Driver = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Canculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export default Driver;
