import { Fragment, useContext, useState } from "react";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { X } from "lucide-react";
import useCart from "./Cart";
import { CartContext } from "../../context/CartContext";

const sizes = [
  { name: "12oz", price: 50 },
  { name: "16oz", price: 60 },
  { name: "22oz", price: 80 },
];

const addOnOptions = [
  { name: "Espresso Shot", price: 20 },
  { name: "Heavy Cream", price: 15 },
  { name: "Coffee Jelly", price: 15 },
  { name: "Nata", price: 10 },
  { name: "Pearl", price: 10 },
];

const capitalizeFirstLetter = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

const sugarLevels = ["100%", "70%", "50%", "30%", "No Sugar"];

export default function CustomizeModal({ isOpen, onClose, item }) {
  const [selectedSize, setSelectedSize] = useState("12oz");
  const [addOns, setAddOns] = useState([]);
  const [sugarLevel, setSugarLevel] = useState("Default (100%)");
  const handleAddOnToggle = (addon) => {
    setAddOns((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };
  
  const {AddtoCart} = useContext(CartContext)

  const handleSubmit = () => {
    const updated_item = { ...item, sugar: sugarLevel, addOns: addOns, quantity: 1 };
    AddtoCart(updated_item)
  
    onClose()
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold text-brown-800"
                  >
                    Customize
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-full p-1 hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="text-gray-600 font-medium mb-4">
                  {capitalizeFirstLetter(item.category)} {item.name}
                </div>

                <div className="space-y-6">
                  {/* Size Selection */}
                  <div className="bg-brown-50/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-3">Size</h4>
                    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                      <div className="space-y-2">
                        {sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size.name}
                            className={({ checked }) =>
                              `${checked ? "text-brown-800" : "text-gray-600"}
                              relative flex cursor-pointer items-center justify-between p-2 focus:outline-none`
                            }
                          >
                            {({ checked }) => (
                              <>
                                <div className="flex items-center">
                                  <div
                                    className={`rounded-full border-2 w-4 h-4 flex items-center justify-center mr-2
                                    ${
                                      checked
                                        ? "border-brown-600"
                                        : "border-gray-300"
                                    }`}
                                  >
                                    {checked && (
                                      <div className="rounded-full bg-brown-600 w-2 h-2" />
                                    )}
                                  </div>
                                  <span>{size.name}</span>
                                </div>
                                <span>₱ {size.price}</span>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Add-ons</h4>
                    <div className="space-y-2">
                      {addOnOptions.map((addon) => (
                        <label
                          key={addon.name}
                          className="flex items-center justify-between p-2 cursor-pointer"
                        >
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={addOns.includes(addon.name)}
                              onChange={() => handleAddOnToggle(addon.name)}
                              className="rounded border-gray-300 text-brown-600 focus:ring-brown-600"
                            />
                            <span className="ml-2 text-gray-600">
                              {addon.name}
                            </span>
                          </div>
                          <span className="text-gray-600">
                            + ₱{addon.price}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sugar Level */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium">Sugar Level</h4>
                    </div>
                    <select
                      value={sugarLevel}
                      onChange={(e) => setSugarLevel(e.target.value)}
                      className="w-full rounded-lg p-2 border-gray-300 focus:border-brown-600 focus:ring-brown-600"
                    >
                      {sugarLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition-colors"
                  >
                    Add to orders
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
