import { Container } from "./ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    title: "For Probation Officers & Agencies",
    items: [
      { icon: "📅", name: "Automated Randomization Engine", description: "Configure custom randomization parameters that meet court-mandated requirements" },
      { icon: "📊", name: "Centralized Dashboard", description: "Monitor all probationers and their testing compliance in real-time" },
      { icon: "📅", name: "Intelligent Scheduling", description: "Automatically assign probationers to appropriate testing facilities" },
      { icon: "🚨", name: "Compliance Tracking", description: "Receive instant notifications for missed or failed tests" },
      { icon: "📂", name: "Digital Documentation", description: "Generate and store reports electronically" },
    ],
  },
  {
    title: "For Testing Facilities & Labs",
    items: [
      { icon: "📋", name: "Queue Management", description: "Optimize testing capacity and reduce wait times" },
      { icon: "📲", name: "Digital Check-in", description: "Streamline the probationer arrival process" },
      { icon: "🔬", name: "Results Management", description: "Document and share test results securely" },
      { icon: "👥", name: "Resource Planning", description: "View upcoming appointments and staff accordingly" },
    ],
  },
  {
    title: "For Probationers",
    items: [
      { icon: "📢", name: "Mobile Notifications", description: "Receive testing reminders and updates" },
      { icon: "📍", name: "Clear Instructions", description: "Access testing location information and requirements" },
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[hsl(var(--muted))]/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Key Features</h2>
          <p className="text-lg text-[hsl(var(--foreground))]/70 max-w-3xl mx-auto">
            Connecting states, counties, testing labs, and probationers through a unified digital ecosystem
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>
                  Specialized tools for enhanced workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-[hsl(var(--foreground))]/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
} 