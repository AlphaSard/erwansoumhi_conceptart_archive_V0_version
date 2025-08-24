"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/Linktree", label: "Linktree" },
  { href: "/portfolio", label: "Portfolio" }, // Fixed URL casing
  { href: "/intention", label: "Intention" }, // Fixed URL casing
  { href: "/bio", label: "Bio" },
  { href: "/activites", label: "Activités" }, // Fixed URL casing
  { href: "/atelier", label: "Atelier" }, // Fixed URL casing
  { href: "/collectif", label: "Collectif" }, // Fixed URL casing
  { href: "/contact", label: "Contact" },
  { href: "/marqueurs", label: "Marqueurs" }, // Fixed URL casing
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-white">
      {/* Header with name */}
      <div className="text-center border-transparent my-0 border-b py-6 pb-3 pt-8">
        <Link href="/" className="font-normal underline text-base tracking-normal">
          ERWAN WAHAD SOUMHI
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-b border-transparent">
        <div className="flex justify-center items-center py-2">
          <div className="flex space-x-8 text-xs">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:underline transition-all ${pathname === item.href ? "underline" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
