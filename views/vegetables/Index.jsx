import React from "react";

function Index(props) {
  const vegetables = props.vegetables;

  return (
    <div>
      <nav>
        <a href="/vegetables/new">Create a New Vegetable</a>
        <br />
        <a href="../">go back</a>
      </nav>

      {vegetables.map((vegetable, i) => {
        return (
          <div key={i}>
            <a href={`/vegetables/${vegetable._id}`}>
              <h2>{vegetable.name}</h2>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
