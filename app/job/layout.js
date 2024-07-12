'use client'

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const {push} = useRouter();
  const pathname = usePathname();

  const navItems = [
    { path: "", label: "Job preview" },
    { path: "", label: "Applicants" },
    { path: "", label: "Match" },
    { path: "/job/messages", label: "Messages" },
  ];

  return (
    <div className="overflow-hidden">
      <div id="subheader" className="fixed z-10 mt-32 md:mt-24 flex items-center justify-center md:justify-normal gap-6 md:gap-12 px-20 w-full border-b border-gray-300 bg-white">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`text-gray-700 py-3 sm:py-4 ${pathname === item.path && 'text-primary font-bold border-b-2 border-primary'}`}
            onClick={() => push(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {children}
    </div>
  );
}
