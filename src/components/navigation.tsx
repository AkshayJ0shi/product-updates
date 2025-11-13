"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "text-sm font-semibold transition-colors";
    if (isActive(path)) {
      return `${baseClasses} text-blue-600 border-b-2 border-blue-600 pb-[14px]`;
    }
    return `${baseClasses} text-gray-900 hover:text-blue-600`;
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-8">
          <Link href="/" className={getLinkClasses("/")}>
            Product updates
          </Link>
          <Link
            href="/user-interactions"
            className={getLinkClasses("/user-interactions")}
          >
            User Interactions
          </Link>
          <Link
            href="/misc"
            className={getLinkClasses("/misc")}
          >
            Misc
          </Link>
        </div>
      </div>
    </nav>
  );
}
