import React, { useState } from "react";
import Button from "./Button";
import "./CategoryList.style.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    { id: "1", name: "Category1" },
  ]);

  const handleClick = () => {
    // Krijoni një kategori të re
    const newCategory = {
      id: Date.now().toString(), // Gjeneroni një ID të ri (mund të përdorni një metodë tjetër për të krijuar ID)
      name: "New Category", // Vendosni emrin që dëshironi për kategorinë e re
    };

    // Përditësoni listën e kategorive duke shtuar kategorinë e re
    setCategories([...categories, newCategory]);
  };

  return (
    <section>
      <div className="Ccontainer">
        <div className="create-cadegory">
          <Button
            text={"Create Category"}
            icon={"d"}
            backgroundColor={"#71CF48"}
            onClick={handleClick}
            className={"categorybut"}
          ></Button>
          <ul>
            {categories.map((category) => (
              <Category key={category.id} name={category.name} />
            ))}
          </ul>
        </div>

        <div className="notes">sdsdd</div>
      </div>
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