import React from "react";

function Show(props) {
  const fruit = props.fruit;
  return (
    <div>
      <h1>ShowPage</h1>
      <a href="../">Go back</a>
      <h3>
        {" "}
        The {fruit.name} is {fruit.color}
      </h3>
      <h1 style={{color:'green'}}>{fruit.readyToEat ? " Its Ready to Eat" : "Its isn't ready yet"}</h1>
    </div>
  );
}

export default Show;
