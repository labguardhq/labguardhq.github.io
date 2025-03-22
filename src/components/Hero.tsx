import { Button } from "./ui/button";
import { Container } from "./ui/container";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[hsl(var(--background))] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-6xl">
            Streamlining Probation Testing with Precision and Efficiency
          </h1>
          <p className="mt-6 text-lg leading-8 text-[hsl(var(--foreground))]/70">
            LabGuard Solutions is a specialized Random Drug Testing management platform connecting states, counties, testing labs, and probationers through a unified digital ecosystem specifically optimized for unpredictable testing schedules.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#features">
              <Button>Learn More</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </Container>
      
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-20 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
} 