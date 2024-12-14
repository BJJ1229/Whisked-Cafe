import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOTPField, setShowOTPField] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const router = useNavigate();

  const handleGetOTP = () => {
    // Add your OTP sending logic here
    console.log("Sending OTP to:", formData.phone);
    setShowOTPField(true);
  };

  const handleVerifyOTP = () => {
    // Add your OTP verification logic here
    console.log("Verifying OTP:", formData.otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registration submitted:", formData);
  };

  return (
    <div className="min-h-screen  p-4 md:p-6">
      <div className="mx-auto max-w-lg">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
          <div className="mb-2">
            <button
              onClick={() => router("/login")}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </button>
          </div>

          <div className="mb-4">
            <h1 className="text-3xl font-bold text-brown-800">Register your account</h1>
            <p className="text-gray-500">We’re excited to have you join us! Please provide the information below to get started:</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm  focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone no.<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-gray-300  p-2 text-sm focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                placeholder="+63"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

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
                className="w-full rounded-lg border border-gray-300  p-2 text-sm focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {!showOTPField ? (
              <button
                type="button"
                onClick={handleGetOTP}
                className="w-full rounded-lg bg-brown-600 py-2.5 text-white transition-colors hover:bg-brown-700"
              >
                Get OTP
              </button>
            ) : (
              <div className="space-y-2">
                <label
                  htmlFor="otp"
                  className="text-sm font-medium text-gray-700"
                >
                  Verification code<span className="text-red-500">*</span>
                </label>
                <input
                  id="otp"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300  p-2 text-sm focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                  value={formData.otp}
                  onChange={(e) =>
                    setFormData({ ...formData, otp: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={handleVerifyOTP}
                  className="w-full rounded-lg bg-brown-600 py-3 text-white transition-colors hover:bg-brown-700"
                >
                  Verify
                </button>
              </div>
            )}

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
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm pr-10 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
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

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm pr-10 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Passwords must be at least 8 characters and contain at least one
                number and one character
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-brown-600 focus:ring-brown-500"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeToTerms: e.target.checked })
                }
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-brown-600 underline hover:text-brown-800"
                >
                  Terms and Conditions
                </button>{" "}
                &{" "}
                <button
                  type="button"
                  className="text-brown-600 underline hover:text-brown-800"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brown-600 py-3 text-white transition-colors hover:bg-brown-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
