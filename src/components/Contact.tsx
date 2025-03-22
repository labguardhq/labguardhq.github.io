import { Container } from "./ui/container";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Contact Us
          </h2>
          <p className="text-lg text-[hsl(var(--foreground))]/70">
            Ready to streamline your probation testing process? Get in touch with our team today.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-[hsl(var(--muted))]/30 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a 
                  href="mailto:sales@LabGuardhq.com"
                  className="text-[hsl(var(--primary))] hover:underline"
                >
                  sales@LabGuardhq.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a 
                  href="tel:+15551234567"
                  className="text-[hsl(var(--primary))] hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🌐</span>
                <a 
                  href="https://www.LabGuardHQ.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--primary))] hover:underline"
                >
                  www.LabGuardHQ.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[hsl(var(--muted))]/30 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Request Information</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/50"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
} 