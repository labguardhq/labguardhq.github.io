import { Container } from "./ui/container";

const benefits = [
  {
    icon: "✔️",
    title: "Increase Efficiency",
    description: "Reduce administrative workload by up to 80%",
  },
  {
    icon: "✔️",
    title: "Improve Compliance",
    description: "Boost testing attendance rates through automated reminders",
  },
  {
    icon: "✔️",
    title: "Enhance Coordination",
    description: "Connect all stakeholders through a single, unified platform",
  },
  {
    icon: "✔️",
    title: "Data-Driven Decisions",
    description: "Generate insights to improve program effectiveness",
  },
  {
    icon: "✔️",
    title: "Reduce Costs",
    description: "Lower administrative overhead and optimize resource allocation",
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Benefits</h2>
          <p className="text-lg text-[hsl(var(--foreground))]/70 max-w-3xl mx-auto">
            Our platform delivers measurable improvements across all aspects of probation testing
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[hsl(var(--muted))]/30 p-6 rounded-lg border border-[hsl(var(--border))]/50 hover:border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--muted))]/50 transition-colors"
            >
              <span className="text-3xl mb-4 block">{benefit.icon}</span>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-[hsl(var(--foreground))]/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 