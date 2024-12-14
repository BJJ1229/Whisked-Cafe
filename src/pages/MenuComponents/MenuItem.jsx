import { Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function MenuItem({ item, OpenModal }) {
  const { AddSelectedItem } = useContext(CartContext);

  const OnAddItem = () => {
    AddSelectedItem(item.id);
    OpenModal();
  };

  return (
    <div className="bg-white p-4 rounded-lg  border  border-gray-200 transition-shadow">
      <div className="relative aspect-square mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500">From ₱{item.price}</p>
        </div>
        <button
          className="p-2 rounded-full bg-brown-600 text-white hover:bg-brown-700 transition-colors"
          onClick={OnAddItem}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
