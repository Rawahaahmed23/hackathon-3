import Link from "next/link"

export default function Footer() {
  return (
    <main className=" flex flex-col w-full h-[555px] border-2 justify-between pt-40 items-end  bg-white py-2">
      {/* Instagram Section */}
    <footer className="w-full py-2 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Address Column */}
          <div className="text-sm text-[#9F9F9F] mt-12">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-medium mb-4 text-[#9F9F9F]">Links</h3>
            <nav className="flex flex-col space-y-5 text-sm">
              <Link href="#" className="hover:underline font-semibold text-xl">Home</Link>
              <Link href="#" className="hover:underline font-semibold text-xl">Shop</Link>
              <Link href="#" className="hover:underline font-semibold text-xl">About</Link>
              <Link href="#" className="hover:underline font-semibold text-xl">Contact</Link>
            </nav>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-medium mb-4 text-[#9F9F9F]">Help</h3>
            <nav className="flex flex-col space-y-5 text-sm">
              <Link href="#" className="hover:underline font-semibold text-xl">Payment Options</Link>
              <Link href="#" className="hover:underline font-semibold text-xl">Returns</Link>
              <Link href="#" className="hover:underline font-semibold text-xl">Privacy Policies</Link>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-medium mb-4 text-[#9F9F9F]">Newsletter</h3>
            <form className="flex flex-row sm:flex-row lg:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1  py-2 border-black border-b-2 font-semibold text-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <button
                type="submit"
                className=" bg-transparent text-black border-b-2 border-black text-md font-semibold transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xl font-medium">2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
    </main>
  )
}
