import { ArrowRight } from 'lucide-react'
import { StatusBadge } from "./StatusBadge"



export function OrderCard({
  orderNumber,
  status,
  pickupTime,
  items,
  total,
  onViewInvoice,
  onReorder,
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">{orderNumber}</p>
          {pickupTime && (
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Pick-up Time:</p>
              <p className="text-xs font-medium text-gray-900">{pickupTime}</p>
            </div>
          )}
          {items && (
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Items:</p>
              <p className="text-xs font-medium text-gray-900">{items}</p>
            </div>
          )}
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">Total:</p>
          <p className="text-sm font-medium text-gray-900">₱{total}</p>
        </div>
        {status === "preparing" ? (
          <button
            onClick={onViewInvoice}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View Invoice
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={onReorder}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Re-order
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}

