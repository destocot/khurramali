import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto p-5 mt-20">
      <div className="flex items-center justify-center h-[60vh] relative">
        <div className="w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1543615294-40348f9cf5df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
            alt=""
            fill
            className="filter brightness-[0.35] object-cover rounded"
          />
          <div className="absolute top-5 right-5 flex flex-col items-end">
            <h1 className="text-4xl text-black font-bold">
              404 - Page Not Found
            </h1>
            <Link
              href="/"
              className="bg-black/60 text-white px-5 py-2 rounded transition hover:bg-black font-semibold tracking-tight float-end mt-5 flex gap-3 items-center"
            >
              <FaHome />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
