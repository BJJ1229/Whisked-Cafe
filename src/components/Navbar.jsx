import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ShoppingBag, User, ChevronDown } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CartModal from "./Cart-Modal";
import { CartContext } from "../context/CartContext";

// Mock cart data (replace with actual cart state management)
const initialCartItems = [
  {
    id: "1",
    name: "Iced Coffee",
    size: "16oz",
    addOns: ["Espresso Shot"],
    sugarLevel: "50%",
    quantity: 1,
    price: 60,
  },
  {
    id: "2",
    name: "Americano",
    size: "12oz",
    addOns: [],
    sugarLevel: "No Sugar",
    quantity: 2,
    price: 50,
  },
];

export default function Navbar() {
  const { customer } = useContext(AuthContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState(initialCartItems);

  // const handleRemoveItem = (id) => {
  //   setCartItems(cartItems.filter(item => item.id !== id))
  // }

  // const handleUpdateQuantity = (id, newQuantity) => {
  //   if (newQuantity > 0) {
  //     setCartItems(cartItems.map(item =>
  //       item.id === id ? { ...item, quantity: newQuantity } : item
  //     ))
  //   }
  // }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Whisked logo" className="h-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-brown-800">
              Whisked Cafe
            </span>
            <span className="mt-[-.2rem] text-gray-700">by Ericka</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {!customer ? (
            <>
              <Link to="/" className="text-brown-600 hover:text-brown-800">
                Home
              </Link>
              <Link to="/menu" className="text-brown-600 hover:text-brown-800">
                Menu
              </Link>
            </>
          ) : (
            <Link to="/menu" className="text-brown-600 hover:text-brown-800">
              Menu
            </Link>
          )}

          {customer ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-brown-800 hover:text-brown-600"
              >
                <ShoppingBag className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex items-center gap-2">
                  <Menu.Button className="flex items-center gap-1 px-4 py-2 text-gray-900 rounded-md hover:bg-gray-100">
                    <User className="h-4 w-4 text-gray-700" />
                    {customer.first_name + " " + customer.last_name}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                    <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/orders"
                            className={`${
                              active
                                ? "bg-brown-600 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            My Orders
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active
                                ? "bg-brown-600 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/logout"
                            className={`${
                              active
                                ? "bg-brown-600 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <Link to="/login">
              <button className="rounded-full bg-brown-600 px-4 py-2 text-white hover:bg-brown-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        // onRemoveItem={handleRemoveItem}
        // onUpdateQuantity={handleUpdateQuantity}
      />
    </nav>
  );
}
