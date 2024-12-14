import { useMemo, useState } from "react";
import MenuSection from "./MenuComponents/MenuSection";
import { menuItems } from "./MenuComponents/Menu_Data";


const categories = [
  "hot-coffee",
  "iced-coffee",
  "non-coffee",
  "matcha", 
  "premium",
  "pastry",
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("hot-coffee");
  

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search item"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-brown-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </div>

          <MenuSection
            title={activeCategory
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            items={filteredItems}
          />
        </div>

        {/* <div className="lg:w-96">
          <Cart
            items={cartItems}
            onRemoveFromCart={removeFromCart}
            onCheckout={handleCheckout}
          />
        </div> */}
      </div>
    </div>
  );
}
