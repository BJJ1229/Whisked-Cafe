import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen  p-4 md:p-6">
      <div className="mx-auto max-w-lg">
        <div className="rounded-xl border border-gray-300  bg-white p-6 shadow-sm">
          <div className="mb-6">
            <button
              onClick={() => router("/")}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </button>
          </div>

          <div className="mb-8 text-center">
            <img
              src="/assets/login_logo.png"
              alt="Whisked Cafe Logo"
              className="mx-auto  h-40 w-40"
            />
            <h1 className="text-2xl font-bold text-brown-800">
              Welcome back to Whisked Café!
            </h1>
            <p className="text-gray-500">
              Please enter your details to log in and continue enjoying your
              favorite treats:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border text-sm  border-gray-300 p-3 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-sm focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button
                type="button"
                // onClick={() => router.push("/forgot-password")}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brown-600 py-3 text-white transition-colors hover:bg-brown-700"
            >
              Log in
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => router("/register")}
                className="text-brown-600 hover:text-brown-800"
              >
                Create an account
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
