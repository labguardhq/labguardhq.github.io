import { Container } from "./ui/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--muted))]/50 border-t border-[hsl(var(--border))]">
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="font-bold text-xl text-[hsl(var(--primary))]">
                LabGuard<span className="text-[hsl(var(--secondary))]">HQ</span>
              </Link>
              <p className="mt-4 text-sm text-[hsl(var(--foreground))]/70">
                Streamlining Probation Testing with Precision and Efficiency
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#features" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    For Probation Officers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#features" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    For Testing Facilities
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#features" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    For Probationers
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-sm text-[hsl(var(--foreground))]/70">
                  📧 sales@LabGuardhq.com
                </li>
                <li className="text-sm text-[hsl(var(--foreground))]/70">
                  📞 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[hsl(var(--border))]/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[hsl(var(--foreground))]/60">
              &copy; {new Date().getFullYear()} LabGuardHQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="#" 
                className="text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                LinkedIn
              </Link>
              <Link 
                href="#" 
                className="text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                Twitter
              </Link>
              <Link 
                href="#" 
                className="text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
} 