import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  PencilIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { CartContext } from "../context/CartContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CheckoutPage() {
  const [pickupOption, setPickupOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("gcash");
  const [termsAccepted, setTermsAccepted] = useState(false);


  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen pb-8 ">
      <div className="max-w-screen-lg mx-auto p-4">
        <Link
          to="/menu"
          className="flex items-center gap-2 text-brown-600 font-medium text-lg mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Menu
        </Link>

        <div className="grid md:grid-cols-[1fr,300px] gap-6">
          <div className="space-y-6">
            <div>
              <h2 className="font-medium mb-4">Pick-up at</h2>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-neutral-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Whisked Cafe - By Ericka</h3>
                    <p className="text-sm text-neutral-600">
                      Blk 18 Lot 21 Congress Extension, Caloocan, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-4">Pick-up options</h2>
              <RadioGroup
                value={pickupOption}
                onChange={setPickupOption}
                className="space-y-3"
              >
                <RadioGroup.Option value="standard">
                  {({ checked }) => (
                    <div
                      className={classNames(
                        checked ? "border-blue-600" : "border-gray-300",
                        "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer"
                      )}
                    >
                      <div
                        className={classNames(
                          checked ? "bg-blue-600" : "bg-white border-gray-300",
                          "rounded-full border w-4 h-4 flex items-center justify-center"
                        )}
                      >
                        {checked && (
                          <div className="rounded-full bg-white w-2 h-2" />
                        )}
                      </div>
                      <div className="flex-1">
                        <RadioGroup.Label as="div" className="font-medium">
                          Standard
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="div"
                          className="text-sm text-neutral-500"
                        >
                          15 Minutes
                        </RadioGroup.Description>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="scheduled">
                  {({ checked }) => (
                    <div
                      className={classNames(
                        checked ? "border-blue-600" : "border-gray-300",
                        "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer"
                      )}
                    >
                      <div
                        className={classNames(
                          checked ? "bg-blue-600" : "bg-white border-gray-300",
                          "rounded-full border w-4 h-4 flex items-center justify-center"
                        )}
                      >
                        {checked && (
                          <div className="rounded-full bg-white w-2 h-2" />
                        )}
                      </div>
                      <div className="flex-1">
                        <RadioGroup.Label as="div" className="font-medium">
                          Scheduled
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="div"
                          className="text-sm text-neutral-500"
                        >
                          Select a date and time
                        </RadioGroup.Description>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium">Personal details</h2>
                <button className="text-primary flex items-center text-sm">
                  <PencilIcon className="w-4 h-4 mr-1" />
                  Edit
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="space-y-1">
                  <p className="font-medium">Jin Dela Cruz</p>
                  <p className="text-sm text-neutral-600">
                    jindelacruz@gmail.com
                  </p>
                  <p className="text-sm text-neutral-600">+63 927895260</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-4">Payment</h2>
              <RadioGroup
                value={paymentMethod}
                onChange={setPaymentMethod}
                className="space-y-3"
              >
                <RadioGroup.Option value="gcash">
                  {({ checked }) => (
                    <div
                      className={classNames(
                        checked ? "border-blue-600" : "border-gray-300",
                        "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer"
                      )}
                    >
                      <div
                        className={classNames(
                          checked
                            ? "bg-primary border-transparent"
                            : "bg-white border-gray-300",
                          "rounded-full border w-4 h-4 flex items-center justify-center"
                        )}
                      >
                        {checked && (
                          <div className="rounded-full bg-white w-2 h-2" />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="/img/Gcash.png"
                          alt="GCash"
                          className="w-20 h-auto"
                        />
                        GCash
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>

            <div className="bg-neutral-50 p-4 rounded-lg shadow">
              <h3 className="font-medium mb-2">Note</h3>
              <p className="text-sm text-neutral-600">
                All orders are final upon payment. No cancellations or refunds
                are allowed.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-neutral-600">
                  By moving forward, you approve our Terms and Conditions &
                  Privacy Policy
                </label>
              </div>
              <button
                className="w-full bg-[#8B4513] hover:bg-[#6B3410] text-white py-2 px-4 rounded-lg font-medium"
                disabled={!termsAccepted}
              >
                Place pick-up order
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-medium mb-4">Total orders</h2>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="space-y-4">
                  {cart &&
                    cart.map((cart) => (
                      <div
                        className="flex justify-between items-center text-sm"
                        key={cart.id}
                      >
                        <div className="w-[80%]">
                          <p>{cart.name}</p>
                          {cart.addOns.length > 0 && (
                            <p className="text-sm flex flex-col text-gray-500">
                              <p className="text-bold text-gray-900">Add-ons: </p>
                              {cart.addOns.join(", ")}
                            </p>
                          )}
                          <p className="text-sm text-gray-900">
                            Sugar: {cart.sugar}
                          </p>
                        </div>
                        <p>₱ {cart.price}</p>
                      </div>
                    ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Total Items: 1</p>
                    </div>
                    <div className="flex justify-between items-center font-medium mt-2">
                      <p>Total</p>
                      <p>₱ {total}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
