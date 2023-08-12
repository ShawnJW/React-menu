import Title from "./Title.jsx";
import data from "./data.js";
import { useState } from "react";
import MenuItems from "./MenuItems.jsx";
import Categories from "./Categories.jsx";

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const tempCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = useState(tempCategories);


    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

  return (
    <main>
      <section className="menu">
        <Title text="My Fancy Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItems menuItems={menuItems} />
        </section>
    </main>
  )
};
export default App;
