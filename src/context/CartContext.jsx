import { createContext, useState } from "react";
import { menuItems } from "../pages/MenuComponents/Menu_Data";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const AddSelectedItem = (id) => {
    const item = menuItems.find((n) => n.id == id);
    setSelectedItem(item);
  };

  const RemoveSelectedItem = () => {
    setSelectedItem(null);
  };

  const AddtoCart = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };

  const onUpdateQuantity = (item_id) => {
    setCart((prevCart) =>
      prevCart.map((cart) =>
        cart.id == item_id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };
  const onSubtractQuantity = (item_id) => {
    setCart((prevCart) =>
      prevCart.map((cart) =>
        cart.id == item_id
          ? {
              ...cart,
              quantity: cart.quantity > 1 ? cart.quantity - 1 : cart.quantity,
            }
          : cart
      )
    );
  };
  const onRemoveItem = (item_id) => {
    setCart((prevCart) => prevCart.filter((cart) => cart.id != item_id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        selectedItem,
        AddSelectedItem,
        RemoveSelectedItem,
        AddtoCart,
        onUpdateQuantity,
        onSubtractQuantity,
        onRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
