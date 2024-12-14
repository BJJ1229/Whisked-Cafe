import { useContext, useEffect, useState } from "react";
import CustomizeModal from "./Customize-Modal";
import { MenuItem } from "./MenuItem";
import useCart from "./Cart";
import { CartContext } from "../../context/CartContext";

export default function MenuSection({ title, items = [] }) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const {AddSelectedItem,selectedItem,RemoveSelectedItem} = useCart();
  const {RemoveSelectedItem,selectedItem} = useContext(CartContext)

  const OpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  useEffect(()=>{
    if(!isModalOpen){
      RemoveSelectedItem()
    }
  },[isModalOpen])

 

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {items && items.length > 0 ? (
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} OpenModal={OpenModal}  />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items available in this category.</p>
      )}

      <CustomizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem || { name: "", id: "" }}
      />
    </div>
  );
}
