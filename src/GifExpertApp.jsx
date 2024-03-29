import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sailor Moon']);

  const onAddCategory = (newCategory) => {
    const lowercaseCategory = newCategory.toLowerCase();

    if (categories.map(category => category.toLowerCase()).includes(lowercaseCategory)) return;

    setCategories([lowercaseCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />
      {
        categories.map( (category) => ( 
        <GifGrid 
          key={ category } 
          category={ category } />
        ))
      }
    </>
  );
};
