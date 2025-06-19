import { useState } from "react";

import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";

function App() {
  const [cuisines] = useState([
    {
      id: 1,
      name: "Italia Pasta",
      description:
        "Experience authentic Italian cuisine at Bella Italia, where traditional recipes meet modern culinary techniques.",
      price: 15000,
      imgUrl:
        "https://www.foodmachineryint.com/storage/uploads/images/10004/20221110/0d7bafa447db68efc461360bffbd04e5.png",
      category: "Italian",
      author: "Andy",
      createdAt: "2025-01-17",
      updatedAt: "2025-01-17",
    },
    {
      id: 2,
      name: "Spicy Thai Curry",
      description:
        "Authentic Thai curry with aromatic spices and fresh ingredients.",
      price: 12000,
      imgUrl:
        "https://ministryofcurry.com/wp-content/uploads/2023/08/Thai-Panang-Curry-with-Chicken_-11-850x850.jpg",
      category: "Thai",
      author: "Chef Maria",
      rating: 4,
      createdAt: "2025-01-16",
      updatedAt: "2025-01-16",
    },
    {
      id: 3,
      name: "Japanese Ramen",
      description:
        "Rich and flavorful ramen with tender pork and fresh vegetables.",
      price: 18000,
      imgUrl:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180323163421/Ramen.jpg",
      category: "Japanese",
      author: "Chef Tanaka",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
    },
  ]);
  return (
    <>
      <Home cuisines={cuisines} />
      <Detail />
    </>
  );
}

export default App;
