import { Fragment } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-medium">My Profile</h1>
        </div>

        <div className="space-y-8">
          {/* Personal Info Form */}
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                  First name
                </label>
                <input
                  type="text"
                  defaultValue="Jin"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8B4513] focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                  Last name
                </label>
                <input
                  type="text"
                  defaultValue="Dela Cruz"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8B4513] focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
                />
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                Mobile no.
              </label>
              <input
                type="tel"
                defaultValue="+63 927966286"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8B4513] focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
              />
            </div>

            <button
              type="submit"
              className="rounded bg-[#8B4513] px-4 py-2 text-sm font-medium text-white hover:bg-[#6F3709]"
            >
              Save
            </button>
          </form>

          {/* Email Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Email</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Change email address"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8B4513] focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
              />
              <button
                type="submit"
                className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
              >
                Save
              </button>
            </form>
          </div>

          {/* Password Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Password</h2>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="Current password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8B4513] focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
              />
              <input
                type="password"
                placeholder="New password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8B4513] focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
              />
              <button
                type="submit"
                className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
              >
                Save
              </button>
            </form>
          </div>

          {/* Account Management */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Account management</h2>
            <p className="text-sm text-gray-500">
              You have the option to delete your account along with any personal data linked to it.
            </p>
            <button className="rounded border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
              Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}