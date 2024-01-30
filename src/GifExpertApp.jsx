import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sailor Moon', 'Sakura']);

  const onAddCategory = (newCategory) => {
    const lowercaseCategory = newCategory.toLowerCase();

    if (categories.map(category => category.toLowerCase()).includes(lowercaseCategory)) return;

    setCategories([lowercaseCategory, ...categories]);
  };

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

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
