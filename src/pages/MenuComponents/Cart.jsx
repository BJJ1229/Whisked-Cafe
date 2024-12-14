import { useState } from "react";
import { menuItems } from "./Menu_Data";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const AddSelectedItem = (id) => {
    const item = menuItems.find((n) => n.id == id); 
    setSelectedItem(item); 
    console.log(item)
  };

  const RemoveSelectedItem = () => {
    setSelectedItem(null)
  }

  const addToCart = (item) => {

  }

  //   const addToCart = (item) => {
  //     setCart((prevCart) => [...prevCart, item]);
  //   };

  return {
    cart,
    selectedItem,
    AddSelectedItem,
    RemoveSelectedItem
  };
};

export default useCart;
