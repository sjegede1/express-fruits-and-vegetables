import React from "react";

function New() {
  return (
    <div>
      <a href="../">Go back</a> <br />
      <form action="/vegetables" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create vegetable" />
      </form>
    </div>
  );
}

export default New;
