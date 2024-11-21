import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ addElement }) {
  const [itemName, setName] = React.useState("");
  const [itemCategory, setCategory] = React.useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    addElement(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
