import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function BackToMenu() {
  return (
    <Link
      to="/menu"
      className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-gray-700"
    >
      <ArrowLeft className="h-5 w-5" />
      Back to Menu
    </Link>
  );
}
