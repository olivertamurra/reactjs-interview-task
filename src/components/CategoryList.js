import React, { useState } from "react";
import Button from "./Button";

const CategoryList = () => {
  const handleClick = () => {
    console.log("New category");
  };
  const [categories, setCategories] = useState([
    { id: "1", name: "category1" },
  ]);

  return (
    <section>
      <Button
        text={"New Category"}
        icon={"d"}
        backgroundColor={"green"}
        onClick={handleClick}
      ></Button>
      <ul>
        {categories.map((category) => (
          <Category key={category.id} name={category.name} />
        ))}
      </ul>
    </section>
  );
};

const Category = ({ name }) => {
  return (
    <li>
      <button>{name}</button>
    </li>
  );
};

export default CategoryList;
