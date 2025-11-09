import { FileText } from "lucide-react";
import { Button } from "./ui/button";
import { DesktopThemeToggler } from "./ui/theme-toggler";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-soft sticky top-0 z-50 bg-elevation-level1">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-linear-to-br from-info to-info rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <Link href="/">DocuVault</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <Link href="/signin">Sign In</Link>
            </Button>

            <Button
              asChild
              className="active:bg-primary w-full shadow-[0_2px_4px_0_rgba(35,20,85,0.16),0_-2px_0_0_rgba(0,0,0,0.3)_inset] hover:shadow-[0_2px_4px_0_rgba(35,20,85,0.12),0_-2px_0_0_rgba(0,0,0,0.2)_inset] active:shadow-[0_2px_4px_0_rgba(35,20,85,0.16)]"
            >
              <Link href="/signup">Sign up</Link>
            </Button>
            <DesktopThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}
