import { Container } from "./ui/container";

const securityFeatures = [
  {
    icon: "🔐",
    title: "End-to-end encryption",
    description: "All sensitive data is encrypted both in transit and at rest"
  },
  {
    icon: "👤",
    title: "Role-based access controls",
    description: "Ensuring appropriate data visibility for each user type"
  },
  {
    icon: "✅",
    title: "Regulatory compliance",
    description: "Fully compliant with all relevant privacy regulations"
  }
];

export function Security() {
  return (
    <section className="py-24 bg-[hsl(var(--muted))]/50">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Security & Compliance
          </h2>
          <p className="text-lg text-[hsl(var(--foreground))]/70">
            Your data security is our top priority. We implement industry-leading security measures.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[hsl(var(--background))] p-6 rounded-lg shadow-sm border border-[hsl(var(--border))] flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-[hsl(var(--foreground))]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 