// import { cn } from "@/lib/utils"


export function StatusBadge({ status, className = "" }) {
  const statusClasses =
    status === "preparing"
      ? "bg-blue-50 text-blue-700"
      : status === "picked-up"
      ? "bg-green-50 text-green-700"
      : "";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${statusClasses} ${className}`}
    >
      {status === "preparing" ? "Preparing" : "Picked up"}
    </span>
  );
}