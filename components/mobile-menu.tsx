"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X } from "lucide-react";
import { hasEnvVars } from "@/lib/utils";
import { Button } from "./ui/button";

export function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/membership"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/jobs"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/leadership"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/admin"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
            </Link>
            <Link
              href="/dashboard/corporate"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Corporate
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-3 px-3 py-2">
              <ThemeSwitcher />
              {hasEnvVars && (
                <div className="flex gap-2">
                  <Button asChild size="sm" variant={"outline"}>
                    <Link href="/auth/login">Sign in</Link>
                  </Button>
                  <Button asChild size="sm" variant={"default"}>
                    <Link href="/auth/sign-up">Sign up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
