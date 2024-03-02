import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: <Home className="mr-2 h-4 w-4" /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings className="mr-2 h-4 w-4" /> },
  { name: "Billing", href: "/dashboard/billing", icon: <CreditCard className="mr-2 h-4 w-4" /> },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <a className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent" : "bg-transparent"
          )}>
            {item.icon}
            <span>{item.name}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
}
