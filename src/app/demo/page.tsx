import { TestingScheduler } from "@/components/TestingScheduler";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Testing Scheduler</h1>
            <p className="text-[hsl(var(--foreground))]/70 mt-2">
              Configure and generate random testing schedules for probationers
            </p>
          </div>
          <TestingScheduler />
        </div>
      </main>
      <Footer />
    </div>
  );
} 