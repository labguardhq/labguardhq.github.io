import Link from "next/link";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))]/40 bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl text-[hsl(var(--primary))]">
              LabGuard<span className="text-[hsl(var(--secondary))]">HQ</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-[hsl(var(--foreground))]/70 transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-[hsl(var(--foreground))]/70 transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[hsl(var(--foreground))]/70 transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="#contact">
              <Button size="sm" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
} 