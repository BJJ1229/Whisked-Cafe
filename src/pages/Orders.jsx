import { BackToMenu } from "./BackToMenu"
import { OrderCard } from "./OrderCard"

export default function Orders() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <BackToMenu />
        
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Recent order</h2>
          <OrderCard
            orderNumber="INV20241122-001"
            status="preparing"
            pickupTime="11-12-2024 | 12:00 PM"
            total={50}
            onViewInvoice={() => console.log("View invoice")}
          />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Order history</h2>
          <div className="space-y-4">
            <OrderCard
              orderNumber="INV20241021-081"
              status="picked-up"
              items={1}
              total={59}
              onReorder={() => console.log("Reorder")}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
