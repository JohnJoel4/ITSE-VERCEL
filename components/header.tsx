import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import { Suspense } from "react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="ITSE Logo"
              width={120}
              height={48}
              priority
              style={{ height: '48px', width: 'auto' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/membership"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Membership
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Events
          </Link>
          <Link
            href="/jobs"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Jobs
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resources
          </Link>
          <Link
            href="/leadership"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Leadership
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/admin"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Admin
          </Link>
          <Link
            href="/dashboard/corporate"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Corporate
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            {hasEnvVars && (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
