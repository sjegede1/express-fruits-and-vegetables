import React from "react";

function Show(props) {
  const vegetable = props.vegetable;
  return (
    <div>
      <h1>ShowPage</h1>
      <a href="../">Go back</a>F{" "}
      <h3>
        {" "}
        The {vegetable.name} is {vegetable.color}
      </h3>
      <h1 style={{ color: "green" }}>
        {vegetable.readyToEat ? " Its Ready to Eat" : "Its isn't ready yet"}
      </h1>
    </div>
  );
}

export default Show;
