import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartModal({
  isOpen,
  onClose,
  // onRemoveItem,
  // onUpdateQuantity,
}) {
  const { cart, onUpdateQuantity, onSubtractQuantity, onRemoveItem } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(cart.length)
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  Your Cart
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </Dialog.Title>
                <div className="mt-4 space-y-4">
                  {cart &&
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start border-b pb-4"
                      >
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                          {item.addOns.length > 0 && (
                            <p className="text-sm text-gray-500">
                              Add-ons: {item.addOns.join(", ")}
                            </p>
                          )}
                          <p className="text-sm text-gray-500">
                            Sugar: {item.sugar}
                          </p>
                          <p className="text-sm font-medium">
                            ₱{item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onSubtractQuantity(item.id)}
                            className="text-gray-500 hover:text-gray-700"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                {cart.length != 0 &&   <div className="mt-6 flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-lg font-bold">₱{total.toFixed(2)}</span>
                </div>}
              
                <div className="mt-6">
                  {cart.length != 0   ? 
                          <Link to='/place-order'>
                          <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brown-600 px-4 py-2 text-sm font-medium text-white hover:bg-brown-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-500 focus-visible:ring-offset-2"
                            onClick={onClose}
                          >
                            Proceed to Checkout
                          </button>
                          </Link>
                  : <>Your Cart is Empty</>}
                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
